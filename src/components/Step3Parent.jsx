import { sendAssessment } from "../services/emailService";
export default function Step3Parent({
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

  return (
    <>

      <h2 className="text-3xl font-bold text-slate-900 mb-2">
        Parent Information
      </h2>

      <p className="text-gray-600 mb-8">
        Almost done! Please provide your contact details.
      </p>

      <div className="grid md:grid-cols-2 gap-6">

        <div>

          <label className="font-semibold">
            Parent / Guardian Name
          </label>

          <input
            type="text"
            value={formData.parentName}
            onChange={(e) => update("parentName", e.target.value)}
            className="w-full border rounded-xl p-3 mt-2"
          />

        </div>

        <div>

          <label className="font-semibold">
            Email Address
          </label>

          <input
            type="email"
            value={formData.email}
            onChange={(e) => update("email", e.target.value)}
            className="w-full border rounded-xl p-3 mt-2"
          />

        </div>

        <div>

          <label className="font-semibold">
            Phone Number
          </label>

          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => update("phone", e.target.value)}
            className="w-full border rounded-xl p-3 mt-2"
          />

        </div>

        <div>

          <label className="font-semibold">
            Preferred Contact Method
          </label>

          <select
            value={formData.contactMethod || ""}
            onChange={(e) =>
              update("contactMethod", e.target.value)
            }
            className="w-full border rounded-xl p-3 mt-2"
          >

            <option value="">Select</option>

            <option>Email</option>

            <option>Phone Call</option>

            <option>WhatsApp</option>

          </select>

        </div>

      </div>

      <div className="mt-8">

        <label className="font-semibold">
          Best Time To Contact
        </label>

        <select
          value={formData.contactTime || ""}
          onChange={(e) =>
            update("contactTime", e.target.value)
          }
          className="w-full border rounded-xl p-3 mt-2"
        >

          <option value="">Select</option>

          <option>Morning (9am - 12pm)</option>

          <option>Afternoon (12pm - 5pm)</option>

          <option>Evening (5pm - 8pm)</option>

        </select>

      </div>

      <div className="mt-8">

        <label className="font-semibold">
          Additional Message (Optional)
        </label>

        <textarea
          rows="5"
          value={formData.parentMessage || ""}
          onChange={(e) =>
            update("parentMessage", e.target.value)
          }
          placeholder="Tell us anything else you'd like us to know..."
          className="w-full border rounded-xl p-3 mt-2"
        />

      </div>

      <div className="mt-8">

        <label className="flex items-start gap-3">

          <input
            type="checkbox"
            checked={formData.consent || false}
            onChange={(e) =>
              update("consent", e.target.checked)
            }
            className="mt-1"
          />

          <span className="text-gray-700">
            I agree that Keystone Education may use the
            information provided to contact me regarding
            tuition services and my free assessment.
          </span>

        </label>

      </div>

      <div className="bg-slate-50 rounded-2xl p-6 mt-10">

        <h3 className="font-bold text-lg mb-4">
          Assessment Summary
        </h3>

        <div className="grid md:grid-cols-2 gap-4 text-sm">

          <p><strong>Programme:</strong> {course}</p>

          <p><strong>Student:</strong> {formData.studentName}</p>

          <p><strong>School Year:</strong> {formData.schoolYear}</p>

          <p><strong>Subjects:</strong> {formData.subjects.join(", ")}</p>

        </div>

      </div>

      <div className="flex justify-between mt-10">

        <button
          onClick={() => setStep(2)}
          className="px-6 py-3 rounded-xl border hover:bg-gray-100 font-semibold"
        >
          ← Back
        </button>

        <button
  onClick={async () => {

    if (
      !formData.parentName ||
      !formData.email ||
      !formData.phone ||
      !formData.consent
    ) {

      alert(
        "Please complete all required fields and accept the consent checkbox."
      );

      return;

    }

    try {

      await sendAssessment(formData, course);

      setStep(4);

    } catch (error) {

      console.error(error);

      alert(
        "Something went wrong while sending your assessment. Please try again."
      );

    }

  }}
  className="bg-yellow-500 hover:bg-yellow-400 px-8 py-3 rounded-xl font-semibold"
>
  Submit Assessment
</button>

      </div>

    </>
  );
}