export default function Stats() {

  const stats = [
    "11+ Preparation",
    "GCSE Tuition",
    "Online Learning",
    "Weekly Progress Reports"
  ];

  return (
    <section className="py-20">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-6">

        {stats.map((item) => (
          <div
            key={item}
            className="bg-white rounded-2xl p-8 shadow-md text-center"
          >
            <h3 className="font-bold text-xl">
              {item}
            </h3>
          </div>
        ))}

      </div>

    </section>
  );
}