import { useState } from "react";
import { sendContactMessage } from "../services/contactService";

export default function ContactForm({
  formData,
  setFormData,
  onClose,
}) {

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  const update = (field, value) => {

    setFormData({

      ...formData,

      [field]: value,

    });

  };

  const handleSubmit = async () => {

    if (

      !formData.fullName ||

      !formData.email ||

      !formData.phone ||

      !formData.subject ||

      !formData.message ||

      !formData.consent

    ) {

      alert(

        "Please complete all required fields."

      );

      return;

    }

    setLoading(true);

    try {

      await sendContactMessage(formData);

      setSuccess(true);

      setLoading(false);

    }

    catch (err) {

      console.log(err);

      setLoading(false);

      alert("Unable to send message.");

    }

  };

  if (success)

    return (

      <div className="text-center py-10">

        <div className="text-7xl mb-6">

          🎉

        </div>

        <h2 className="text-4xl font-bold">

          Message Sent!

        </h2>

        <p className="mt-5 text-gray-600 leading-8">

          Thank you for contacting

          <strong> Keystone Education.</strong>

          <br /><br />

          Your enquiry has been sent successfully.

          <br />

          We aim to reply within

          <strong> 24 hours.</strong>

        </p>

        <button

          onClick={onClose}

          className="mt-10 bg-slate-900 text-white px-8 py-3 rounded-xl hover:bg-slate-800"

        >

          Close

        </button>

      </div>

    );

  return (

    <>

      <div className="grid md:grid-cols-2 gap-6">

        <div>

          <label className="font-semibold">

            Full Name *

          </label>

          <input

            type="text"

            value={formData.fullName}

            onChange={(e)=>

              update("fullName",e.target.value)

            }

            className="w-full border rounded-xl p-3 mt-2"

          />

        </div>

        <div>

          <label className="font-semibold">

            Email *

          </label>

          <input

            type="email"

            value={formData.email}

            onChange={(e)=>

              update("email",e.target.value)

            }

            className="w-full border rounded-xl p-3 mt-2"

          />

        </div>

        <div>

          <label className="font-semibold">

            Phone Number *

          </label>

          <input

            type="text"

            value={formData.phone}

            onChange={(e)=>

              update("phone",e.target.value)

            }

            className="w-full border rounded-xl p-3 mt-2"

          />

        </div>

        <div>

          <label className="font-semibold">

            Student Year

          </label>

          <select

            value={formData.studentYear}

            onChange={(e)=>

              update("studentYear",e.target.value)

            }

            className="w-full border rounded-xl p-3 mt-2"

          >

            <option value="">

              Select

            </option>

            <option>

              Year 4

            </option>

            <option>

              Year 5

            </option>

            <option>

              Year 6

            </option>

            <option>

              Year 7

            </option>

            <option>

              Year 8

            </option>

            <option>

              Year 9

            </option>

            <option>

              Year 10

            </option>

            <option>

              Year 11

            </option>

          </select>

        </div>

      </div>

      <div className="mt-6">

        <label className="font-semibold">

          Subject *

        </label>

        <input

          type="text"

          placeholder="Example: GCSE Maths"

          value={formData.subject}

          onChange={(e)=>

            update("subject",e.target.value)

          }

          className="w-full border rounded-xl p-3 mt-2"

        />

      </div>

      <div className="mt-6">

        <label className="font-semibold">

          Message *

        </label>

        <textarea

          rows="6"

          value={formData.message}

          onChange={(e)=>

            update("message",e.target.value)

          }

          className="w-full border rounded-xl p-3 mt-2"

        />

      </div>

      <div className="mt-6">

        <label className="flex gap-3">

          <input

            type="checkbox"

            checked={formData.consent}

            onChange={(e)=>

              update("consent",e.target.checked)

            }

          />

          <span>

            I agree to be contacted by Keystone Education.

          </span>

        </label>

      </div>

      <div className="flex justify-end mt-10">

        <button

          disabled={loading}

          onClick={handleSubmit}

          className="bg-yellow-500 hover:bg-yellow-400 px-8 py-3 rounded-xl font-semibold"

        >

          {

            loading

            ?

            "Sending..."

            :

            "Send Message"

          }

        </button>

      </div>

    </>

  );

}