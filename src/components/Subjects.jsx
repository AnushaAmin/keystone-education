const subjects = [
  "11+ Maths",
  "11+ English",
  "Verbal Reasoning",
  "Non-Verbal Reasoning",
  "GCSE Maths",
  "GCSE English",
  "Biology",
  "Chemistry",
  "Physics"
];

export default function Subjects() {
  return (
    <section
      id="subjects"
      className="py-24 bg-white"
    >

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-black text-center mb-16">

          Subjects We Teach

        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {subjects.map((subject) => (
            <div
              key={subject}
              className="shadow-lg p-8 rounded-2xl hover:-translate-y-2 transition"
            >
              <h3 className="font-bold text-xl">
                {subject}
              </h3>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}