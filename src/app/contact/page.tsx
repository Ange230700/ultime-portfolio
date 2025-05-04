// src\app\contact\page.tsx

"use client";

import { useState, useRef } from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";

export default function ContactPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const toast = useRef<Toast | null>(null);

  type ToastSeverity =
    | "success"
    | "info"
    | "warn"
    | "error"
    | "secondary"
    | "contrast";
  const showToast = (
    severity: ToastSeverity,
    summary: string,
    detail: string,
  ) => {
    toast.current?.show({ severity, summary, detail, life: 3000 });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, subject, message }),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        showToast("success", "Message sent", "Thank you for getting in touch!");
        // Clear form
        setFirstName("");
        setLastName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        throw new Error(data.error ?? "Failed to send message");
      }
    } catch (error: unknown) {
      const messageText =
        error instanceof Error ? error.message : "An unexpected error occurred";
      showToast("error", "Error", messageText);
    }
  };

  return (
    <div className="flex flex-1 flex-col p-4">
      <Toast ref={toast} />
      <h1 className="mb-4 text-3xl font-bold">Contact</h1>
      <form
        onSubmit={handleSubmit}
        className="p-fluid mx-auto max-w-2xl space-y-6"
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="field mb-4">
            <label
              htmlFor="firstName"
              className="text-900 mb-2 block font-medium"
            >
              Prénom
            </label>
            <InputText
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Votre prénom"
              className="w-full"
            />
          </div>

          <div className="field mb-4">
            <label
              htmlFor="lastName"
              className="text-900 mb-2 block font-medium"
            >
              Nom
            </label>
            <InputText
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Votre nom"
              className="w-full"
            />
          </div>
        </div>

        <div className="field mb-4">
          <label htmlFor="email" className="text-900 mb-2 block font-medium">
            Adresse e-mail
          </label>
          <InputText
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Votre adresse e-mail"
            className="w-full"
          />
        </div>

        <div className="field mb-4">
          <label htmlFor="subject" className="text-900 mb-2 block font-medium">
            Sujet
          </label>
          <InputText
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Sujet de votre message"
            className="w-full"
          />
        </div>

        <div className="field mb-6">
          <label htmlFor="message" className="text-900 mb-2 block font-medium">
            Message
          </label>
          <InputTextarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Votre message"
            rows={10}
            className="w-full"
          />
        </div>

        <div className="mx-20">
          <Button
            type="submit"
            label="Envoyer"
            icon="pi pi-envelope"
            className="w-full"
          />
        </div>
      </form>
    </div>
  );
}
