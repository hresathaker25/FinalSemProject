import React, { useState } from "react";
import ResumeFieldsConfig from "../data/ResumeFieldsConfig";
import ModernBlueTemplate from "../components/templates/ModernBlueTemplate";

const ResumeBuilder = () => {
  const [careerField, setCareerField] = useState("Others");
  const [formData, setFormData] = useState({});

  const selectedSections = ResumeFieldsConfig[careerField] || [];

  const handleInputChange = (sectionKey, fieldLabel, value, index = 0) => {
    setFormData((prev) => {
      const updated = { ...prev };
      if (!updated[sectionKey]) updated[sectionKey] = [];
      if (!updated[sectionKey][index]) updated[sectionKey][index] = {};
      updated[sectionKey][index][fieldLabel] = value;
      return updated;
    });
  };

  const handleAddEntry = (sectionKey) => {
    setFormData((prev) => {
      const updated = { ...prev };
      const existingEntries = updated[sectionKey] || [];
      updated[sectionKey] = [...existingEntries, {}];
      return updated;
    });
  };

  return (
    <div className="flex flex-col lg:flex-row p-6 gap-6 h-screen overflow-hidden">
      {/* LEFT: Scrollable Form */}
      <div className="lg:w-1/2 overflow-y-auto pr-4" style={{ maxHeight: "100vh" }}>
        <div>
          <label className="block font-semibold mb-2 text-lg">Choose Career Field:</label>
          <select
            className="w-full border border-gray-300 p-2 rounded"
            value={careerField}
            onChange={(e) => {
              setCareerField(e.target.value);
              setFormData({});
            }}
          >
            {Object.keys(ResumeFieldsConfig).map((field) => (
              <option key={field} value={field}>
                {field}
              </option>
            ))}
          </select>
        </div>

        {/* Dynamic Form Sections */}
        {selectedSections.map((section) => {
          const { sectionKey, title, fields, multiple } = section;
          const entries = formData[sectionKey] || [{}];

          return (
            <div key={sectionKey} className="space-y-4 border-b pb-6 mt-6">
              {title !== "none" && (
                <h3 className="text-xl font-semibold text-blue-700">{title}</h3>
              )}

              {entries.map((entry, entryIndex) => (
                <div key={entryIndex} className="grid grid-cols-1 gap-4">
                  {fields.map((field, fieldIndex) => {
                    const value = entry[field.label] || "";
                    const placeholder = field.placeholder || field.label;

                    return (
                      <div key={fieldIndex}>
                        <label className="block font-medium mb-1">{field.label}</label>
                        {field.type === "textarea" ? (
                          <textarea
                            className="w-full border rounded p-2"
                            placeholder={placeholder}
                            rows={4}
                            value={value}
                            onChange={(e) =>
                              handleInputChange(
                                sectionKey,
                                field.label,
                                e.target.value,
                                entryIndex
                              )
                            }
                          />
                        ) : field.type === "file" ? (
                          <input
                            type="file"
                            accept="image/*"
                            className="w-full border rounded p-2"
                            onChange={(e) => {
                              const file = e.target.files[0];
                              if (file) {
                                const reader = new FileReader();
                                reader.onloadend = () => {
                                  handleInputChange(
                                    sectionKey,
                                    field.label,
                                    reader.result,
                                    entryIndex
                                  );
                                };
                                reader.readAsDataURL(file);
                              }
                            }}
                          />
                        ) : (
                          <input
                            type="text"
                            className="w-full border rounded p-2"
                            placeholder={placeholder}
                            value={value}
                            onChange={(e) =>
                              handleInputChange(
                                sectionKey,
                                field.label,
                                e.target.value,
                                entryIndex
                              )
                            }
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}

              {multiple && (
                <button
                  type="button"
                  className="mt-2 px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                  onClick={() => handleAddEntry(sectionKey)}
                >
                  + Add More
                </button>
              )}
            </div>
          );
        })}
      </div>

      {/* RIGHT: Sticky Live Preview */}
      <div className="lg:w-1/2 sticky top-0 self-start overflow-y-auto" style={{ maxHeight: "100vh" }}>
        <ModernBlueTemplate formData={formData} sections={selectedSections} />
      </div>
    </div>
  );
};

export default ResumeBuilder;
