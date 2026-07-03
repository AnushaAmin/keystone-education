import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_oylzyx8";
const TEMPLATE_ID = "template_2k7u5dr";
const PUBLIC_KEY = "aDYe9UIpECI11M2gQ";

export async function sendAssessment(formData, course) {
  const templateParams = {
    course,

    studentName: formData.studentName,
    age: formData.age,
    schoolYear: formData.schoolYear,
    schoolName: formData.schoolName,

    subjects: formData.subjects.join(", "),

    confidence: formData.confidence,
    challenge: formData.challenge,

    predictedGrade: formData.predictedGrade,
    targetGrade: formData.targetGrade,
    examBoard: formData.examBoard,

    notes: formData.notes,

    parentName: formData.parentName,
    email: formData.email,
    phone: formData.phone,

    contactMethod: formData.contactMethod,
    contactTime: formData.contactTime,

    parentMessage: formData.parentMessage,
  };

  return emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
}
