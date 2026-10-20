import { useState } from "react";
import PageHeader from "../components/PageHeader";
import Container from "../components/Container";

const initialForm = { name: "", email: "", message: "" };

const info = [
  { icon: "📍", label: "Address", value: "12 Emmys Road, Emmanuel City" },
  { icon: "📞", label: "Phone", value: "+234 814 171 3798" },
  { icon: "✉️", label: "Email", value: "info@siremmy9.com" },
];

const inputClass =
  "mt-1 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-200";

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form data:", form); // we'll send this to the backend later
    setSent(true);
    setForm(initialForm);
  }

  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="We'd love to hear from you. Send us a message and we'll reply as soon as possible."
      />

      <Container className="py-16">
        <div className="grid gap-10 md:grid-cols-2">
          {/* Left: contact info */}
          <div className="space-y-6">
            {info.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-xl">
                  {item.icon}
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{item.label}</p>
                  <p className="text-slate-600">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: the form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
          >
            <div>
              <label htmlFor="name" className="font-medium text-slate-700">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                required
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="email" className="font-medium text-slate-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="message" className="font-medium text-slate-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                required
                className={inputClass}
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Send Message
            </button>

            {sent && (
              <p className="rounded-lg bg-green-100 px-4 py-3 text-center text-green-800">
                Thank you! Your message has been sent.
              </p>
            )}
          </form>
        </div>
      </Container>
    </>
  );
}
798;
