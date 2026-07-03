import { useEffect, useState } from "react";

export default function Step4Success({ formData, course, onClose }) {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    // EmailJS will be added here later

    const timer = setTimeout(() => {

      setLoading(false);

    }, 1800);

    return () => clearTimeout(timer);

  }, []);

  return (

    <div className="text-center py-10">

      {loading ? (

        <>

          <div className="flex justify-center">

            <div className="w-16 h-16 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>

          </div>

          <h2 className="text-3xl font-bold mt-8">

            Submitting Assessment...

          </h2>

          <p className="text-gray-600 mt-4">

            Please wait while we securely submit your assessment.

          </p>

        </>

      ) : (

        <>

          <div className="text-7xl mb-6">

            🎉

          </div>

          <h2 className="text-4xl font-bold text-slate-900">

            Assessment Submitted!

          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-8 max-w-2xl mx-auto">

            Thank you for completing your FREE assessment with
            <strong> Keystone Education.</strong>

            <br /><br />

            Our tutors will carefully review your responses and prepare
            personalised recommendations for the student.

            <br /><br />

            📧 We will contact you using the email address you provided
            within <strong>24 hours.</strong>

          </p>

          <div className="bg-yellow-50 border border-yellow-300 rounded-2xl p-6 mt-10">

            <h3 className="font-bold text-xl mb-4">

              Assessment Summary

            </h3>

            <div className="grid md:grid-cols-2 gap-4 text-left">

              <p>

                <strong>Programme:</strong><br />

                {course}

              </p>

              <p>

                <strong>Student:</strong><br />

                {formData.studentName}

              </p>

              <p>

                <strong>Parent:</strong><br />

                {formData.parentName}

              </p>

              <p>

                <strong>Email:</strong><br />

                {formData.email}

              </p>

              <p>

                <strong>Subjects:</strong><br />

                {formData.subjects.join(", ")}

              </p>

              <p>

                <strong>Phone:</strong><br />

                {formData.phone}

              </p>

            </div>

          </div>

          <button

            onClick={onClose}

            className="mt-10 bg-slate-900 hover:bg-slate-800 text-white px-10 py-4 rounded-xl font-semibold transition"

          >

            Close

          </button>

        </>

      )}

    </div>

  );

}