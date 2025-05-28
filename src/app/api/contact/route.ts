// src\app\api\contact\route.ts

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import validator from "validator";
import isDisposable from "is-disposable-email";
import dns from "dns/promises";
import jwt from "jsonwebtoken";

// Read SMTP configuration and recipient email from environment variables
const {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASS,
  RECEIVER_EMAIL,
  NEXT_PUBLIC_APP_URL,
  JWT_SECRET,
} = process.env;

if (
  !SMTP_HOST ||
  !SMTP_PORT ||
  !SMTP_USER ||
  !SMTP_PASS ||
  !RECEIVER_EMAIL ||
  !NEXT_PUBLIC_APP_URL ||
  !JWT_SECRET
) {
  throw new Error(
    "Missing one or more SMTP environment variables: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, RECEIVER_EMAIL or NEXT_PUBLIC_APP_URL env variable or JWT_SECRET one",
  );
}

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: parseInt(SMTP_PORT, 10),
  secure: parseInt(SMTP_PORT, 10) === 465, // true for port 465, false for other ports
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});

export async function POST(request: Request) {
  const { firstName, lastName, email, subject, message } =
    (await request.json()) as Record<string, string>;

  // 1) Basic format check
  if (!validator.isEmail(email)) {
    return NextResponse.json(
      { success: false, error: "Adresse e-mail invalide." },
      { status: 400 },
    );
  }

  // 2) Disposable‐email ban
  if (isDisposable(email)) {
    return NextResponse.json(
      {
        success: false,
        error: "Veuillez utiliser une adresse e-mail permanente.",
      },
      { status: 400 },
    );
  }

  // 3) MX record lookup
  const domain = email.split("@")[1];
  try {
    const mxRecords = await dns.resolveMx(domain);
    if (!mxRecords || mxRecords.length === 0) {
      throw new Error();
    }
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: `Le domaine ${domain} n’accepte pas les e-mails.`,
      },
      { status: 400 },
    );
  }

  // 4) Create a one‐time confirmation token
  const token = jwt.sign(
    { firstName, lastName, email, subject, message },
    JWT_SECRET!,
    { expiresIn: "1h" },
  );

  try {
    const confirmUrl = `${NEXT_PUBLIC_APP_URL}/api/contact?token=${token}`;
    // Compose email
    const mailOptions = {
      from: `“Portfolio” <${SMTP_USER}>`,
      to: email,
      subject: "Veuillez confirmer votre e-mail",
      html: `
      <p>Bonjour ${firstName},</p>
      <p>Merci de nous contacter. 
         Cliquez sur le lien ci-dessous pour confirmer que c’est bien votre adresse :</p>
      <a href="${confirmUrl}">Confirmer mon e-mail</a>
      <p>Si ce n’était pas vous, ignorez simplement ce message.</p>
    `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message:
        "Un e-mail de confirmation vous a été envoyé. Veuillez cliquer sur le lien pour finaliser.",
    });
  } catch (error: unknown) {
    const messageText =
      error instanceof Error ? error.message : "An unexpected error occurred";
    return NextResponse.json(
      { success: false, error: messageText },
      { status: 500 },
    );
  }
}

// New: handle the confirmation link
export async function GET(request: Request) {
  const url = new URL(request.url);
  const token = url.searchParams.get("token")!;

  try {
    const payload = jwt.verify(token, JWT_SECRET!) as Record<string, string>;

    // envoyer le mail à vous-même
    await transporter.sendMail({
      from: `${payload.firstName} ${payload.lastName} <${payload.email}>`,
      to: RECEIVER_EMAIL,
      subject: payload.subject || "Nouveau message de contact",
      text: [
        `Prénom : ${payload.firstName}`,
        `Nom : ${payload.lastName}`,
        `E-mail : ${payload.email}`,
        `Sujet : ${payload.subject}`,
        `Message :\n${payload.message}`,
      ].join("\n"),
    });

    return NextResponse.redirect(
      `${NEXT_PUBLIC_APP_URL}/contact?confirmed=true`,
    );
  } catch {
    return NextResponse.json(
      { success: false, error: "Jeton invalide ou expiré." },
      { status: 400 },
    );
  }
}
