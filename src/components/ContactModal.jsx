import { useState } from "react";

import ContactForm from "./ContactForm";

export default function ContactModal({ open, onClose }) {

  const [formData, setFormData] = useState({

    fullName: "",

    email: "",

    phone: "",

    studentYear: "",

    subject: "",

    message: "",

    consent: false,

  });

  if (!open) return null;

  return (

    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-[999] p-5">

      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl max-h-[92vh] flex flex-col overflow-hidden">

        {/* Header */}

        <div className="bg-slate-900 text-white px-8 py-6 flex justify-between items-center">

          <div>

            <h2 className="text-3xl font-bold">

              Contact Keystone Education

            </h2>

            <p className="text-slate-300 mt-1">

              We'd love to hear from you.

            </p>

          </div>

          <button

            onClick={onClose}

            className="text-3xl hover:text-yellow-400"

          >

            ✕

          </button>

        </div>

        {/* Body */}

        <div className="flex-1 overflow-y-auto p-8">

          <ContactForm

            formData={formData}

            setFormData={setFormData}

            onClose={onClose}

          />

        </div>

      </div>

    </div>

  );

}