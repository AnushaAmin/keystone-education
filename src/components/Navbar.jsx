import { useState } from "react";
import logo from "../assets/keystone-logo.png";
import AssessmentModal from "./AssessmentModal";

export default function Navbar() {

  const [showAssessment, setShowAssessment] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-lg shadow-sm z-50">

        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

          <div className="flex items-center gap-3">

            <img
              src={logo}
              alt="Keystone Education"
              className="w-18 h-18 object-contain"
            />

            <h1 className="font-black text-2xl text-slate-900">
              Keystone Education
            </h1>

          </div>

          <nav className="hidden md:flex gap-8 text-slate-700">

            <a href="#subjects">Subjects</a>

            <a href="#why">Why Us</a>

            <a href="#contact">Contact</a>

          </nav>

          <button
            onClick={() => setShowAssessment(true)}
            className="bg-yellow-500 hover:bg-yellow-400 px-5 py-3 rounded-xl font-semibold transition"
          >
            Free Assessment
          </button>

        </div>

      </header>

      <AssessmentModal
        open={showAssessment}
        onClose={() => setShowAssessment(false)}
      />

    </>
  );
}