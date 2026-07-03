import { useState } from "react";

import ProgressBar from "./ProgressBar";
import Step1Program from "./Step1Program";
import Step2Student from "./Step2Student";
import Step3Parent from "./Step3Parent";
import Step4Success from "./Step4Success";

export default function AssessmentModal({ open, onClose }) {

  const [step, setStep] = useState(1);

  const [course, setCourse] = useState("");

  const [formData, setFormData] = useState({

    studentName: "",

    age: "",

    schoolYear: "",

    schoolName: "",

    parentName: "",

    email: "",

    phone: "",

    subjects: [],

    challenge: "",

    confidence: "",

    notes: "",

    targetSchool: "",

    predictedGrade: "",

    targetGrade: "",

    examBoard: ""

  });

  if (!open) return null;

  return (

    <div className="fixed inset-0 bg-black/70 z-[999] flex justify-center items-center p-5">

      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[92vh] overflow-hidden flex flex-col">

        {/* Header */}

        <div className="bg-slate-900 px-10 py-8 text-white flex justify-between items-center">

          <div>

            <h2 className="text-3xl font-bold">

              Keystone Education

            </h2>

            <p className="text-slate-300 mt-1">

              Free Assessment

            </p>

          </div>

          <button

            onClick={() => {

              setStep(1);

              setCourse("");

              onClose();

            }}

            className="text-3xl hover:text-yellow-400"

          >

            ×

          </button>

        </div>

        <div className="p-10 overflow-y-auto flex-1 scrollbar-thin scrollbar-thumb-yellow-500 scrollbar-track-transparent">

          {step !== 4 && (

            <ProgressBar

              step={step}

            />

          )}

          {step === 1 && (

            <Step1Program

              setCourse={setCourse}

              setStep={setStep}

            />

          )}

          {step === 2 && (

            <Step2Student

              formData={formData}

              setFormData={setFormData}

              step={step}

              setStep={setStep}

              course={course}

            />

          )}

          {step === 3 && (

            <Step3Parent

              formData={formData}

              setFormData={setFormData}

              step={step}

              setStep={setStep}

              course={course}

            />

          )}

          {step === 4 && (

            <Step4Success

              formData={formData}

              course={course}

              onClose={() => {

                setStep(1);

                setCourse("");

                onClose();

              }}

            />

          )}

        </div>

      </div>

    </div>

  );

}