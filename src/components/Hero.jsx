import { motion } from "framer-motion";
import { useState } from "react";
import AssessmentModal from "./AssessmentModal";

export default function Hero() {
  const [assessmentOpen, setAssessmentOpen] = useState(false);

  const scrollToWhy = () => {
    const section = document.getElementById("why");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <section className="min-h-screen flex items-center">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            {/* <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-semibold">
              Trusted Online Tuition
            </span> */}
            <br /> <br /> <br /> 
            <h1 className="text-6xl font-black mt-6 leading-tight text-slate-900">
              Helping Your Child
              <br />
              Succeed in the 
              <br />
              11+, 12+ and GCSE.
            </h1>

            <p className="mt-6 text-lg text-slate-600 max-w-xl">
                Personalised online tuition in{" "}
                <strong>Maths, English and Science</strong>,
                designed to strengthen understanding, build confidence
                and prepare students for exams.
              </p>

            <div className="flex flex-wrap gap-4 mt-8">

              <button
                onClick={() => setAssessmentOpen(true)}
                className="bg-yellow-500 hover:bg-yellow-400 transition px-6 py-4 rounded-xl font-bold shadow-lg"
              >
                Book Your Free Assessment
              </button>

              <button
                onClick={scrollToWhy}
                className="border border-slate-300 hover:bg-slate-100 transition px-6 py-4 rounded-xl font-semibold"
              >
                Learn More
              </button>

            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >

            <img
              src="https://images.unsplash.com/photo-1503676382389-4809596d5290"
              alt="Student learning online"
              className="rounded-3xl shadow-2xl w-full object-cover"
            />

          </motion.div>

        </div>

      </section>

      <AssessmentModal
        open={assessmentOpen}
        onClose={() => setAssessmentOpen(false)}
      />
    </>
  );
}