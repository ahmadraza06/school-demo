
import { useState } from "react";
import schoolConfig from "../data/schoolConfig";

const initialForm = {
  studentName: "",
  dateOfBirth: "",
  classApplying: "",
  parentName: "",
  phone: "",
  email: "",
  message: "",
};

export default function Admissions() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const message = [
      `Admission enquiry for ${schoolConfig.name}`,
      `Student: ${form.studentName}`,
      `Date of birth: ${form.dateOfBirth || "Not provided"}`,
      `Class: ${form.classApplying}`,
      `Parent/Guardian: ${form.parentName}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email || "Not provided"}`,
      `Message: ${form.message || "None"}`,
    ].join("\n");

    const whatsapp = schoolConfig.whatsapp.replace(/\D/g, "");

    if (!whatsapp) {
      window.alert("Please configure the school's WhatsApp number.");
      return;
    }

    window.open(
      `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );

    setSubmitted(true);
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <p className="font-semibold text-blue-700">ADMISSIONS</p>
      <h1 className="mt-3 text-4xl font-bold text-slate-950">
        Start your admission enquiry
      </h1>
      <p className="mt-4 leading-7 text-slate-600">
        Complete this form to prepare an enquiry message for the school
        through WhatsApp. The form does not store or submit your details
        to a server.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-5 rounded-2xl border border-slate-200 p-6 shadow-sm sm:p-8"
      >
        <div>
          <label htmlFor="studentName" className="mb-2 block font-medium">
            Student's full name *
          </label>
          <input
            id="studentName"
            name="studentName"
            value={form.studentName}
            onChange={handleChange}
            required
            maxLength={100}
            autoComplete="name"
            className="w-full rounded-xl border border-slate-300 px-4 py-3"
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="dateOfBirth" className="mb-2 block font-medium">
              Date of birth
            </label>
            <input
              id="dateOfBirth"
              name="dateOfBirth"
              type="date"
              value={form.dateOfBirth}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 px-4 py-3"
            />
          </div>

          <div>
            <label htmlFor="classApplying" className="mb-2 block font-medium">
              Class applying for *
            </label>
            <select
              id="classApplying"
              name="classApplying"
              value={form.classApplying}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-slate-300 px-4 py-3"
            >
              <option value="">Select class</option>
              {["Nursery", "LKG", "UKG", ...Array.from(
                { length: 12 },
                (_, i) => `Class ${i + 1}`
              )].map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="parentName" className="mb-2 block font-medium">
            Parent/guardian name *
          </label>
          <input
            id="parentName"
            name="parentName"
            value={form.parentName}
            onChange={handleChange}
            required
            maxLength={100}
            autoComplete="name"
            className="w-full rounded-xl border border-slate-300 px-4 py-3"
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="phone" className="mb-2 block font-medium">
              Phone number *
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              required
              maxLength={20}
              autoComplete="tel"
              className="w-full rounded-xl border border-slate-300 px-4 py-3"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block font-medium">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              maxLength={254}
              autoComplete="email"
              className="w-full rounded-xl border border-slate-300 px-4 py-3"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block font-medium">
            Questions or message
          </label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            maxLength={1000}
            className="w-full rounded-xl border border-slate-300 px-4 py-3"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800"
        >
          Prepare WhatsApp Enquiry
        </button>

        {submitted && (
          <p role="status" className="text-sm text-green-700">
            WhatsApp was opened. Review the message and send it to the
            school to complete your enquiry.
          </p>
        )}
      </form>
    </div>
  );
}
