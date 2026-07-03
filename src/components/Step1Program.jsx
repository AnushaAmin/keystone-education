export default function Step1Program({
  setCourse,
  setStep
}) {
  return (
    <>

      <h2 className="text-3xl font-bold text-slate-900 mb-2">
        Free Assessment
      </h2>

      <p className="text-gray-600 mb-8">
        Which programme are you interested in?
      </p>

      <div className="grid md:grid-cols-3 gap-6">

        <button
          onClick={() => {
            setCourse("11+");
            setStep(2);
          }}
          className="rounded-2xl border-2 p-8 hover:border-yellow-500 hover:bg-yellow-50 transition"
        >

          <div className="text-5xl mb-5">
            📚
          </div>

          <h3 className="font-bold text-xl">
            11+
          </h3>

          <p className="text-gray-500 mt-2">
            Entrance Exam
          </p>

        </button>

        <button
          onClick={() => {
            setCourse("12+");
            setStep(2);
          }}
          className="rounded-2xl border-2 p-8 hover:border-yellow-500 hover:bg-yellow-50 transition"
        >

          <div className="text-5xl mb-5">
            🎯
          </div>

          <h3 className="font-bold text-xl">
            12+
          </h3>

          <p className="text-gray-500 mt-2">
            Entrance Exam
          </p>

        </button>

        <button
          onClick={() => {
            setCourse("GCSE");
            setStep(2);
          }}
          className="rounded-2xl border-2 p-8 hover:border-yellow-500 hover:bg-yellow-50 transition"
        >

          <div className="text-5xl mb-5">
            🎓
          </div>

          <h3 className="font-bold text-xl">
            GCSE
          </h3>

          <p className="text-gray-500 mt-2">
            Years 9–11
          </p>

        </button>

      </div>

    </>
  );
}