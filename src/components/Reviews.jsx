export default function Reviews() {
  const reviews = [
    {
      name: "Sarah M.",
      location: "London",
      review:
        "I sent all three of my boys to Keystone Education. My eldest went from struggling in school to achieving A and A* grades in his GCSEs, and I would highly recommend Keystone Education for quality education.",
    },
    {
      name: "Ahmed R.",
      location: "Manchester",
      review:
        "I highly recommend Keystone Education. Since joining, my school results have improved tremendously, and the lessons are delivered in a relaxed and friendly environment.",
    },
    {
      name: "Priya K.",
      location: "Birmingham",
      review:
        "My son achieved all 8 and 9 grades in his GCSEs thanks to Keystone Education. Deserves more than five stars.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">
        What Parents Say
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-6">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <p className="text-gray-700 mb-6">"{r.review}"</p>

         
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-bold">{r.name}</h4>
                <span className="text-sm text-gray-500">{r.location}</span>
              </div>

         
              <div className="text-yellow-400 text-lg">
                ★★★★★
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}