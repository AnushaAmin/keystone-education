export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-slate-50"
    >

      <div className="max-w-3xl mx-auto px-6">

        <h2 className="text-5xl font-black mb-10 text-center">

          Book A Free Assessment

        </h2>

        <form className="space-y-5">

          <input
            placeholder="Parent Name"
            className="w-full border p-4 rounded-xl"
          />

          <input
            placeholder="Email Address"
            className="w-full border p-4 rounded-xl"
          />

          <input
            placeholder="Child Year Group"
            className="w-full border p-4 rounded-xl"
          />

          <textarea
            rows="5"
            placeholder="Message"
            className="w-full border p-4 rounded-xl"
          />

          <button
            className="w-full bg-yellow-500 py-4 rounded-xl font-bold"
          >
            Submit
          </button>

        </form>

      </div>

    </section>
  );
}