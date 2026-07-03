import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_oylzyx8";
const TEMPLATE_ID = "template_vg71qa1";
const PUBLIC_KEY = "aDYe9UIpECI11M2gQ";

export async function sendContactMessage(formData) {
  const templateParams = {
    fullName: formData.fullName,
    email: formData.email,
    phone: formData.phone,
    studentYear: formData.studentYear,
    subject: formData.subject,
    message: formData.message,
  };

  return emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
}
