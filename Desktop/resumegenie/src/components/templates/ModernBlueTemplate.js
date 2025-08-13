import React from "react";

const ModernBlueTemplate = ({ formData, sections }) => {
  const getSection = (key) => formData[key] || [];

  const getField = (sectionKey, fieldLabel) =>
    getSection(sectionKey)[0]?.[fieldLabel] || "";

  const getSectionByKey = (key) =>
    sections.find((sec) => sec.sectionKey === key);

  const renderList = (sectionKey) => {
    const section = getSectionByKey(sectionKey);
    const label = section?.fields?.[0]?.label || "";
    const data = getSection(sectionKey);
    if (!data.length || !data[0][label]) return null;

    return data.map((entry, idx) => (
      <p key={idx} className="text-sm text-gray-800">
        - {entry[label]}
      </p>
    ));
  };

  const renderMainSection = (sectionKey, fields) => {
    const data = getSection(sectionKey);
    if (!data.length || !Object.values(data[0]).some((val) => val)) return null;

    return data.map((entry, idx) => (
      <div key={idx} className="mb-4">
        {fields.map((field, fieldIndex) => (
          <p key={fieldIndex} className="text-sm text-gray-800 mb-1">
            <strong>{field.label}:</strong> {entry[field.label] || "-"}
          </p>
        ))}
      </div>
    ));
  };

  return (
    <div className="shadow-lg w-full max-w-3xl mx-auto border rounded overflow-hidden">
      {/* Header */}
      <div className="bg-gray-200 p-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          {getField("header", "Full Name")}
        </h1>
        <p className="text-lg text-gray-700">
          {getField("header", "Professional Title")}
        </p>
      </div>

      <div className="flex">
        {/* Left Sidebar */}
        <div className="bg-blue-800 text-white p-6 w-1/3 min-h-full text-sm">
          {/* Profile Image */}
          {getField("header", "Profile Photo") ? (
            <img
              src={getField("header", "Profile Photo")}
              alt="Profile"
              className="h-24 w-24 mx-auto rounded-full object-cover mb-4"
            />
          ) : (
            <div className="h-24 w-24 mx-auto bg-gray-300 rounded-full mb-4" />
          )}

          <div>
            <p><strong>Phone:</strong> {getField("header", "Phone Number")}</p>
            <p><strong>Email:</strong> {getField("header", "Email Address")}</p>
            <p><strong>LinkedIn:</strong> {getField("header", "LinkedIn Profile")}</p>
            <p><strong>Location:</strong> {getField("header", "Location (City, Country)")}</p>
          </div>

          <div className="mt-6">
            {renderList("languages") && (
              <>
                <h3 className="font-semibold text-white underline">Languages</h3>
                {renderList("languages")}
              </>
            )}
          </div>

          <div className="mt-6">
            {renderList("interests") && (
              <>
                <h3 className="font-semibold text-white underline">Interests</h3>
                {renderList("interests")}
              </>
            )}
          </div>

          <div className="mt-6">
            {renderMainSection("education", getSectionByKey("education")?.fields || []) && (
              <>
                <h3 className="font-semibold text-white underline">Education</h3>
                {renderMainSection("education", getSectionByKey("education")?.fields || [])}
              </>
            )}
          </div>
        </div>

        {/* Right Main Content */}
        <div className="bg-white p-6 w-2/3 space-y-6">
          {getField("summary", "Summary") && (
            <div>
              <p className="text-sm text-gray-800 whitespace-pre-line">
                {getField("summary", "Summary")}
              </p>
            </div>
          )}

          {renderMainSection("work", getSectionByKey("work")?.fields || []) && (
            <div>
              <h3 className="font-bold text-lg mb-2">Experience</h3>
              {renderMainSection("work", getSectionByKey("work")?.fields || [])}
            </div>
          )}

          {renderMainSection("projects", getSectionByKey("projects")?.fields || []) && (
            <div>
              <h3 className="font-bold text-lg mb-2">Projects</h3>
              {renderMainSection("projects", getSectionByKey("projects")?.fields || [])}
            </div>
          )}

          {renderMainSection("certifications", getSectionByKey("certifications")?.fields || []) && (
            <div>
              <h3 className="font-bold text-lg mb-2">Certifications</h3>
              {renderMainSection("certifications", getSectionByKey("certifications")?.fields || [])}
            </div>
          )}

          {renderList("achievements") && (
            <div>
              <h3 className="font-bold text-lg mb-2">Achievements</h3>
              {renderList("achievements")}
            </div>
          )}

          {renderList("activities") && (
            <div>
              <h3 className="font-bold text-lg mb-2">Extracurriculars</h3>
              {renderList("activities")}
            </div>
          )}

          {renderList("techSkills") && (
            <div>
              <h3 className="font-bold text-lg mb-2">Technical Skills</h3>
              {renderList("techSkills")}
            </div>
          )}

          {renderList("softSkills") && (
            <div>
              <h3 className="font-bold text-lg mb-2">Soft Skills</h3>
              {renderList("softSkills")}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModernBlueTemplate;
