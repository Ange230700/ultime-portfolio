// src\app\api\contact\route.ts

import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

// Read SMTP configuration and recipient email from environment variables
const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, RECEIVER_EMAIL } =
  process.env;

if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !RECEIVER_EMAIL) {
  throw new Error(
    "Missing one or more SMTP environment variables: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, RECEIVER_EMAIL",
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
  try {
    const { firstName, lastName, email, subject, message } =
      await request.json();

    // Compose email
    const mailOptions = {
      from: `${firstName} ${lastName} <${email}>`,
      to: RECEIVER_EMAIL,
      subject: subject ?? "New contact form submission",
      text: `You have a new message from your portfolio contact form:\n First Name: ${firstName}\n Last Name: ${lastName}\n Email: ${email}\n Subject: ${subject}\n Message:\n${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    const messageText =
      error instanceof Error ? error.message : "An unexpected error occurred";
    return NextResponse.json(
      { success: false, error: messageText },
      { status: 500 },
    );
  }
}
