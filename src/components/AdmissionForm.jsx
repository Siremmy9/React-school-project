import { useState } from "react";
import FormField from "./FormField";
import { school } from "../data/school";

const initialForm = {
  parentName: "",
  email: "",
  phone: "",
  childName: "",
  childAge: "",
  classApplying: "",
  contactMethod: "",
  message: "",
};

export default function AdmissionForm() {
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setSent(false);
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Admission enquiry:", form); // we'll send this to the backend later
    setSent(true);
    setForm(initialForm);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:grid-cols-2 md:p-8"
    >
      <FormField
        label="Parent/Guardian name"
        name="parentName"
        value={form.parentName}
        onChange={handleChange}
        required
      />
      <FormField
        label="Email"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <FormField
        label="Phone number"
        name="phone"
        type="tel"
        value={form.phone}
        onChange={handleChange}
        required
      />
      <FormField
        label="Child's name"
        name="childName"
        value={form.childName}
        onChange={handleChange}
        required
      />
      <FormField
        label="Child's age"
        name="childAge"
        type="number"
        min="1"
        max="18"
        value={form.childAge}
        onChange={handleChange}
        required
      />
      <FormField
        label="Class applying for"
        name="classApplying"
        type="select"
        options={school.classes}
        value={form.classApplying}
        onChange={handleChange}
        required
      />
      <FormField
        label="Preferred contact method"
        name="contactMethod"
        type="select"
        options={school.contactMethods}
        value={form.contactMethod}
        onChange={handleChange}
        required
      />
      <FormField
        label="Message"
        name="message"
        type="textarea"
        value={form.message}
        onChange={handleChange}
        className="sm:col-span-2"
      />

      <div className="sm:col-span-2">
        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 sm:w-auto"
        >
          Submit Admission Enquiry
        </button>
      </div>

      {sent && (
        <p
          role="status"
          className="rounded-lg bg-green-100 px-4 py-3 text-center text-green-800 sm:col-span-2"
        >
          Thank you! We have received your enquiry and will contact you soon.
        </p>
      )}
    </form>
  );
}
