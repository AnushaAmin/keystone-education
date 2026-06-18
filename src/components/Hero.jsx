import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
        >

          <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full">

            Trusted Online Tuition

          </span>

          <h1 className="text-6xl font-black mt-6 leading-tight text-slate-900">

            Helping Students
            Excel In
            11+, 12+ &
            GCSE Exams

          </h1>

          <p className="mt-6 text-lg text-slate-600 max-w-xl">

            Expert tuition in Maths,
            English and Science.
            Helping students build confidence,
            improve grades and achieve success.

          </p>

          <div className="flex gap-4 mt-8">

            <button className="bg-yellow-500 px-6 py-4 rounded-xl font-bold">
              Book Assessment
            </button>

            <button className="border border-slate-300 px-6 py-4 rounded-xl">
              Learn More
            </button>

          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >

          <img
            src="https://images.unsplash.com/photo-1503676382389-4809596d5290"
            alt=""
            className="rounded-3xl shadow-2xl"
          />

        </motion.div>

      </div>

    </section>
  );
}