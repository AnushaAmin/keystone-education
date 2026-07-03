import { useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import ContactModal from "./ContactModal";

export default function Footer() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <footer className="bg-slate-900 text-white py-10">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8">

          {/* Company */}
          <div>
            <h2 className="text-xl font-bold">Keystone Education</h2>

            <p className="text-gray-400 mt-2">
              Professional Online Tuition for 11+, 12+ and GCSE students.
            </p>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-bold mb-3">Courses</h3>

            <p>11+ Tuition</p>
            <p>12+ Tuition</p>
            <p>GCSE Tuition</p>
            <p>Maths</p>
            <p>English</p>
            <p>Science</p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-3">Contact</h3>

            <button
              onClick={() => setContactOpen(true)}
              className="text-yellow-400 hover:text-yellow-300 transition"
            >
              Email Us
            </button>

            <p className="text-gray-400 text-sm mt-3">
              We usually respond within 24 hours.
            </p>
          </div>

          {/* Socials */}
          <div>
            <h3 className="font-bold mb-3">Follow Us</h3>

            <div className="flex gap-5 text-3xl">

              <a
                href="https://www.instagram.com/keystoneeducationofficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61591091382720"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition"
              >
                <FaFacebook />
              </a>

            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-slate-700 mt-10 pt-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Keystone Education. All rights reserved.
        </div>
      </footer>

      <ContactModal
        open={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </>
  );
}