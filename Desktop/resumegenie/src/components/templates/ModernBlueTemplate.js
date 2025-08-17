// src/components/templates/ModernBlueTemplate.js
import React from "react";

const ModernBlueTemplate = ({ formData = {}, sections = [] }) => {
  const getSection = (key) => formData[key] || [];
  const header = getSection("header")[0] || {};

  return (
    <div className="bg-white shadow-2xl rounded-3xl border border-gray-200 p-8 text-gray-800 font-sans w-full max-w-4xl mx-auto">
      {/* IMAGE + NAME + TITLE */}
      <div className="text-center mb-8 pb-6 border-b-4 border-blue-600 relative">
        {header["Profile Photo"] && (
          <img
            src={header["Profile Photo"]}
            alt="Profile"
            className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-blue-600 shadow-lg"
          />
        )}
        <h1 className="text-4xl font-bold text-blue-700 mb-1">
          {header["Full Name"] || "Your Name"}
        </h1>
        <p className="text-lg text-gray-600 italic">{header["Professional Title"] || "Your Title"}</p>
        {/* subtle shadow effect under the border */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-200 opacity-30"></div>
      </div>

      {/* BODY: Two-Column Layout */}
      <div className="grid grid-cols-3 gap-8">
        {/* LEFT COLUMN */}
        <div className="col-span-1 space-y-6">
          {/* Contact Details */}
          <div className="bg-blue-50 rounded-lg p-4 shadow-sm">
            <h2 className="text-lg font-semibold text-blue-700 border-b-2 border-blue-400 pb-1 mb-2">
              Contact
            </h2>
            <ul className="space-y-1 text-sm text-gray-700 list-disc list-inside">
              {header["Phone Number"] && <li>{header["Phone Number"]}</li>}
              {header["Email Address"] && <li>{header["Email Address"]}</li>}
              {header["Location (City, Country)"] && <li>{header["Location (City, Country)"]}</li>}
              {header["LinkedIn Profile"] && <li>{header["LinkedIn Profile"]}</li>}
            </ul>
          </div>

          {/* Education */}
          {sections
            .filter((s) => s.sectionKey === "education")
            .map((section) => (
              <div key={section.sectionKey} className="bg-blue-50 rounded-lg p-4 shadow-sm">
                <h2 className="text-lg font-semibold text-blue-700 border-b-2 border-blue-400 pb-1 mb-2">
                  {section.title}
                </h2>
                <ul className="space-y-1 text-sm text-gray-700 list-disc list-inside">
                  {(getSection("education") || []).map((edu, idx) => (
                    <li key={idx}>
                      {edu["Degree Name"]} – {edu["Institution Name"]}
                      {edu["Duration"] && ` | ${edu["Duration"]}`}
                      {edu["CGPA or Percentage"] && ` | CGPA: ${edu["CGPA or Percentage"]}`}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          {/* Certifications */}
          {sections
            .filter((s) => s.sectionKey === "certifications")
            .map((section) => (
              <div key={section.sectionKey} className="bg-blue-50 rounded-lg p-4 shadow-sm">
                <h2 className="text-lg font-semibold text-blue-700 border-b-2 border-blue-400 pb-1 mb-2">
                  {section.title}
                </h2>
                <ul className="space-y-1 text-sm text-gray-700 list-disc list-inside">
                  {(getSection("certifications") || []).map((entry, idx) =>
                    Object.values(entry).map((val, i) => <li key={i}>{val}</li>)
                  )}
                </ul>
              </div>
            ))}

          {/* Languages */}
          {sections
            .filter((s) => s.sectionKey === "languages")
            .map((section) => (
              <div key={section.sectionKey} className="bg-blue-50 rounded-lg p-4 shadow-sm">
                <h2 className="text-lg font-semibold text-blue-700 border-b-2 border-blue-400 pb-1 mb-2">
                  {section.title}
                </h2>
                <ul className="space-y-1 text-sm text-gray-700 list-disc list-inside">
                  {(getSection("languages") || []).map((entry, idx) =>
                    Object.values(entry).map((val, i) => <li key={i}>{val}</li>)
                  )}
                </ul>
              </div>
            ))}

          {/* Interests / Hobbies */}
          {sections
            .filter((s) => s.sectionKey === "interests")
            .map((section) => (
              <div key={section.sectionKey} className="bg-blue-50 rounded-lg p-4 shadow-sm">
                <h2 className="text-lg font-semibold text-blue-700 border-b-2 border-blue-400 pb-1 mb-2">
                  {section.title}
                </h2>
                <ul className="space-y-1 text-sm text-gray-700 list-disc list-inside">
                  {(getSection("interests") || []).map((entry, idx) =>
                    Object.values(entry).map((val, i) => <li key={i}>{val}</li>)
                  )}
                </ul>
              </div>
            ))}
        </div>

        {/* RIGHT COLUMN */}
        <div className="col-span-2 space-y-8">
          {sections
            .filter(
              (s) =>
                !["skills", "languages", "certifications", "interests", "education", "header"].includes(
                  s.sectionKey
                )
            )
            .map((section) => (
              <div key={section.sectionKey} className="bg-gray-50 rounded-lg p-4 shadow-sm">
                {section.title !== "none" && (
                  <h2 className="text-lg font-semibold text-blue-700 border-b-2 border-blue-400 pb-1 mb-3">
                    {section.title}
                  </h2>
                )}
                <div className="space-y-3">
                  {(getSection(section.sectionKey) || []).map((entry, idx) => (
                    <div key={idx} className="space-y-1">
                      {Object.entries(entry).map(([label, value], i) =>
                        value ? (
                          <p key={i} className="text-sm leading-relaxed">
                            <span className="font-semibold text-gray-800">{label}:</span>{" "}
                            <span className="text-gray-700">{value}</span>
                          </p>
                        ) : null
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ModernBlueTemplate;
