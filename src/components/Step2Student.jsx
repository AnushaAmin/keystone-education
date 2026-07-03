export default function Step2Student({
  formData,
  setFormData,
  setStep,
  course,
}) {
  const update = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const toggleSubject = (subject) => {
    let subjects = [...formData.subjects];

    if (subjects.includes(subject)) {
      subjects = subjects.filter((s) => s !== subject);
    } else {
      subjects.push(subject);
    }

    update("subjects", subjects);
  };

  return (
    <>

      <h2 className="text-3xl font-bold text-slate-900 mb-2">
        Student Information
      </h2>

      <p className="text-gray-600 mb-8">
        Programme Selected: <span className="font-bold">{course}</span>
      </p>

      <div className="grid md:grid-cols-2 gap-6">

        <div>
          <label className="font-semibold">
            Student Name
          </label>

          <input
            type="text"
            value={formData.studentName}
            onChange={(e) => update("studentName", e.target.value)}
            className="w-full border rounded-xl p-3 mt-2"
          />
        </div>

        <div>
          <label className="font-semibold">
            Student Age
          </label>

          <input
            type="number"
            value={formData.age}
            onChange={(e) => update("age", e.target.value)}
            className="w-full border rounded-xl p-3 mt-2"
          />
        </div>

        <div>
          <label className="font-semibold">
            Current School Year
          </label>

          <input
            type="text"
            placeholder={
              course === "GCSE"
                ? "Year 9,10 or 11"
                : "Year 4,5 or 6"
            }
            value={formData.schoolYear}
            onChange={(e) => update("schoolYear", e.target.value)}
            className="w-full border rounded-xl p-3 mt-2"
          />
        </div>

        <div>
          <label className="font-semibold">
            School Name
          </label>

          <input
            type="text"
            value={formData.schoolName}
            onChange={(e) => update("schoolName", e.target.value)}
            className="w-full border rounded-xl p-3 mt-2"
          />
        </div>

      </div>

      <div className="mt-8">

        <label className="font-semibold text-lg">
          Subjects requiring support
        </label>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">

          {(course === "GCSE"
            ? [
                "Maths",
                "English Language",
                "English Literature",
                "Biology",
                "Chemistry",
                "Physics",
              ]
            : [
                "Maths",
                "English",
                "Verbal Reasoning",
                "Non-Verbal Reasoning",
              ]
          ).map((subject) => (
            <button
              key={subject}
              type="button"
              onClick={() => toggleSubject(subject)}
              className={`border rounded-xl p-3 transition ${
                formData.subjects.includes(subject)
                  ? "bg-yellow-400 border-yellow-500"
                  : "hover:bg-gray-100"
              }`}
            >
              {subject}
            </button>
          ))}

        </div>

      </div>

      <div className="mt-8">

        <label className="font-semibold">
          How confident is the student?
        </label>

        <select
          value={formData.confidence}
          onChange={(e) => update("confidence", e.target.value)}
          className="w-full border rounded-xl p-3 mt-2"
        >
          <option value="">Select</option>
          <option>Very Confident</option>
          <option>Confident</option>
          <option>Average</option>
          <option>Needs Support</option>
        </select>

      </div>

      {course !== "GCSE" && (
        <div className="mt-8">

          <label className="font-semibold">
            Which area is most challenging?
          </label>

          <select
            value={formData.challenge}
            onChange={(e) => update("challenge", e.target.value)}
            className="w-full border rounded-xl p-3 mt-2"
          >
            <option value="">Select</option>
            <option>Maths Problem Solving</option>
            <option>Comprehension</option>
            <option>Vocabulary</option>
            <option>Verbal Reasoning</option>
            <option>Non-Verbal Reasoning</option>
            <option>Time Management</option>
          </select>

        </div>
      )}

      {course === "GCSE" && (
        <>
          <div className="grid md:grid-cols-2 gap-6 mt-8">

            <div>

              <label className="font-semibold">
                Predicted Grade
              </label>

              <select
                value={formData.predictedGrade}
                onChange={(e) =>
                  update("predictedGrade", e.target.value)
                }
                className="w-full border rounded-xl p-3 mt-2"
              >
                <option value="">Select</option>
                {[9,8,7,6,5,4,3,2,1].map((g)=>(
                  <option key={g}>{g}</option>
                ))}
              </select>

            </div>

            <div>

              <label className="font-semibold">
                Target Grade
              </label>

              <select
                value={formData.targetGrade}
                onChange={(e)=>
                  update("targetGrade",e.target.value)
                }
                className="w-full border rounded-xl p-3 mt-2"
              >
                <option value="">Select</option>
                {[9,8,7,6,5,4,3,2,1].map((g)=>(
                  <option key={g}>{g}</option>
                ))}
              </select>

            </div>

          </div>

          <div className="mt-8">

            <label className="font-semibold">
              Exam Board
            </label>

            <select
              value={formData.examBoard}
              onChange={(e)=>update("examBoard",e.target.value)}
              className="w-full border rounded-xl p-3 mt-2"
            >
              <option value="">Select</option>
              <option>AQA</option>
              <option>Edexcel</option>
              <option>OCR</option>
              <option>WJEC</option>
            </select>

          </div>
        </>
      )}

      <div className="mt-8">

        <label className="font-semibold">
          Additional Information
        </label>

        <textarea
          rows="5"
          value={formData.notes}
          onChange={(e)=>update("notes",e.target.value)}
          className="w-full border rounded-xl p-3 mt-2"
          placeholder="Tell us anything that will help us understand the student's learning needs..."
        />

      </div>

      <div className="flex justify-between mt-10">

        <button
          onClick={() => setStep(1)}
          className="px-6 py-3 rounded-xl border font-semibold hover:bg-gray-100"
        >
          ← Back
        </button>

        <button
          onClick={() => setStep(3)}
          className="px-8 py-3 rounded-xl bg-yellow-500 hover:bg-yellow-400 font-semibold"
        >
          Continue →
        </button>

      </div>

    </>
  );
}