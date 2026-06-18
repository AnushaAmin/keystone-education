import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8">

        <div>
          <h2 className="text-xl font-bold">Keystone Education</h2>
          <p className="text-gray-400 mt-2">
            A Professional Online Learning Academy
          </p>
        </div>

        <div>
          <h3 className="font-bold mb-2">Courses</h3>
          <p>11+ Tuition</p>
          <p>GCSE Tuition</p>
          <p>Maths</p>
          <p>English</p>
        </div>

        <div>
          <h3 className="font-bold mb-2">Contact</h3>

          <a
            href="mailto:info@keystoneeducation.co.uk"
            className="text-yellow-400 block mt-2"
          >
            Email Us
          </a>
        </div>

        <div>
          <h3 className="font-bold mb-2">Follow Us</h3>

          <div className="flex gap-5 text-3xl mt-2">
            <a href="https://instagram.com" target="_blank">
              <FaInstagram />
            </a>

            <a href="https://tiktok.com" target="_blank">
              <FaTiktok />
            </a>

            <a href="https://wa.me/447000000000" target="_blank">
              <FaWhatsapp />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}