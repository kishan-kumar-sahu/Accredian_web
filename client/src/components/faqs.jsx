
import { useState } from "react";
 import { useNavigate } from "react-router-dom";
export default function faqs() {


     const navigate= useNavigate();
  const [activeTab, setActiveTab] = useState("course");
  const [open, setOpen] = useState(null);

  const data = {
    course: [
      "What types of corporate training programs does Accredian offer?",
      "What domain specializations are available?",
    ],
    delivery: [
      "How are the courses delivered?",
      "Are the sessions live or recorded?",
    ],
    misc: [
      "Do you provide certificates?",
      "Is there placement support?",
    ],
  };

  return (
    <div className="bg-gray-100 py-16 px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">

        {/* LEFT SIDE (Tabs) */}
        <div className="space-y-4">

          <button
            onClick={() => setActiveTab("course")}
            className={`w-full py-4 rounded-xl font-medium ${
              activeTab === "course"
                ? "bg-blue-100 text-blue-600"
                : "bg-white border"
            }`}
          >
            About the Course
          </button>

          <button
            onClick={() => setActiveTab("delivery")}
            className={`w-full py-4 rounded-xl font-medium ${
              activeTab === "delivery"
                ? "bg-blue-100 text-blue-600"
                : "bg-white border"
            }`}
          >
            About the Delivery
          </button>

          <button
            onClick={() => setActiveTab("misc")}
            className={`w-full py-4 rounded-xl font-medium ${
              activeTab === "misc"
                ? "bg-blue-100 text-blue-600"
                : "bg-white border"
            }`}
          >
            Miscellaneous
          </button>

        </div>

        {/* RIGHT SIDE (FAQ) */}
        <div className="md:col-span-3 space-y-4">

          {data[activeTab].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-5 shadow cursor-pointer"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-gray-900">{item}</h3>
                <span>{open === i ? "−" : "+"}</span>
              </div>

              {/* Answer */}
              {open === i && (
                <p className="text-gray-600 mt-3 text-sm">
                  This is a sample answer. You can replace it with real content.
                </p>
              )}
            </div>
          ))}

          {/* Button */}
          <div className="text-center mt-8">
            <button   onClick={()=>navigate("/register")}  className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
              Enquire Now
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}