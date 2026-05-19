import { useState } from "react";
import FormStatus from "./FormStatus.jsx";

const initialState = {
  name: "",
  email: "",
  phone: "",
  shootType: "",
  preferredDate: "",
  message: ""
};

export default function BookingForm() {
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
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Unable to submit booking.");
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
        <label>Phone<input name="phone" value={form.phone} onChange={updateField} required /></label>
        <label>
          Shoot Type
          <select name="shootType" value={form.shootType} onChange={updateField} required>
            <option value="">Select a shoot</option>
            <option>Wedding Photography</option>
            <option>Portrait Photography</option>
            <option>Event Photography</option>
            <option>Product Photography</option>
            <option>Studio Shoot</option>
          </select>
        </label>
        <label>Preferred Date<input name="preferredDate" type="date" value={form.preferredDate} onChange={updateField} required /></label>
      </div>
      <label>Message<textarea name="message" rows="5" value={form.message} onChange={updateField} /></label>
      <FormStatus status={status} />
      <button className="button primary" disabled={submitting}>{submitting ? "Sending..." : "Submit Booking"}</button>
    </form>
  );
}
