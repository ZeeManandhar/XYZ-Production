import { useState } from "react";
import FormStatus from "./FormStatus.jsx";

const initialState = {
  name: "",
  email: "",
  subject: "",
  message: ""
};

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const updateField = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const submitForm = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Unable to send message.");
      setStatus({ type: "success", message: data.message });
      setForm(initialState);
    } catch (error) {
      setStatus({ type: "error", message: error.message });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className="studio-form reveal" onSubmit={submitForm}>
      <div className="form-grid">
        <label>Name<input name="name" value={form.name} onChange={updateField} required /></label>
        <label>Email<input name="email" type="email" value={form.email} onChange={updateField} required /></label>
      </div>
      <label>Subject<input name="subject" value={form.subject} onChange={updateField} required /></label>
      <label>Message<textarea name="message" rows="6" value={form.message} onChange={updateField} required /></label>
      <FormStatus status={status} />
      <button className="button primary" disabled={submitting}>{submitting ? "Sending..." : "Send Message"}</button>
    </form>
  );
}
