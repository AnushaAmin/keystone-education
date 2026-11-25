import { motion } from "framer-motion";
import { useState } from "react";
import AssessmentModal from "./AssessmentModal";
const steps = [
  {
    number: "01",
    title: "Free Assessment",
    description:
      "We identify your child's current strengths, learning needs and areas requiring improvement.",
  },
  {
    number: "02",
    title: "Personalised Learning Plan",
    description:
      "Lessons are structured around your child's academic level, goals and individual learning needs.",
  },
  {
    number: "03",
    title: "Interactive Online Lessons",
    description:
      "Students receive guided teaching, practice questions and clear explanations to strengthen understanding.",
  },
  {
    number: "04",
    title: "Progress & Feedback",
    description:
      "Progress is reviewed regularly, with feedback to help parents understand their child's development.",
  },
];


export default function HowItWorks() {
    const [assessmentOpen, setAssessmentOpen] = useState(false);
  return (
    <><section
          id="how-it-works"
          className="py-24 px-6 bg-slate-50"
      >
          <div className="max-w-7xl mx-auto">

              {/* Section Heading */}
              <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-center max-w-3xl mx-auto mb-16"
              >
                  <span className="inline-block bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-semibold text-sm mb-4">
                      Our Learning Journey
                  </span>

                  <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
                      How Our Tuition Works
                  </h2>

                  <p className="text-slate-600 text-lg mt-5 leading-relaxed">
                      Every student is different. Our structured approach
                      helps us understand their needs, create a personalised
                      learning plan and support their progress every step
                      of the way.
                  </p>
              </motion.div>

              {/* Steps */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

                  {steps.map((step, index) => (
                      <motion.div
                          key={step.number}
                          initial={{ opacity: 0, y: 40 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{
                              duration: 0.5,
                              delay: index * 0.15,
                          }}
                          className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition duration-300 border border-slate-100"
                      >

                          {/* Number */}
                          <div className="w-16 h-16 rounded-2xl bg-yellow-100 flex items-center justify-center mb-6">
                              <span className="text-yellow-700 text-xl font-bold">
                                  {step.number}
                              </span>
                          </div>

                          {/* Title */}
                          <h3 className="text-xl font-bold text-slate-900 mb-4">
                              {step.title}
                          </h3>

                          {/* Description */}
                          <p className="text-slate-600 leading-relaxed">
                              {step.description}
                          </p>

                      </motion.div>
                  ))}

              </div>

              {/* Bottom CTA */}
              <div className="text-center mt-14">

                  <p className="text-slate-600 mb-5">
                      Ready to begin your child's learning journey?
                  </p>

                  <button
                      onClick={() => setAssessmentOpen(true)}

                      className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold px-8 py-4 rounded-xl shadow-lg transition duration-300"
                  >
                      Book Your Free Assessment
                  </button>

              </div>

          </div>
      </section><AssessmentModal
              open={assessmentOpen}
              onClose={() => setAssessmentOpen(false)} /></>
  );
  
}