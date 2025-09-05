import React from "react";

const ElegantDivideTemplate = ({ resumeData, selectedCareer }) => {

  // Helper function to get section data
  const getSectionData = (sectionKey) => {
    return resumeData[sectionKey] || {};
  };

  // Helper function to get multiple section data
  const getMultipleSectionData = (sectionKey) => {
    const data = resumeData[sectionKey];
    return Array.isArray(data) ? data.filter(item => 
      Object.values(item).some(value => value && value.toString().trim())
    ) : [];
  };

  // Helper function to check if section has data
  const hasSectionData = (sectionKey, isMultiple = false) => {
    if (isMultiple) {
      const data = getMultipleSectionData(sectionKey);
      return data.length > 0;
    } else {
      const data = getSectionData(sectionKey);
      return Object.values(data).some(value => value && value.toString().trim());
    }
  };

  // Get header data
  const header = getSectionData("header");
  const fullName = header["Full Name"] || "";
  const professionalTitle = header["Professional Title"] || "";
  const phone = header["Phone Number"] || "";
  const email = header["Email Address"] || "";
  const linkedin = header["LinkedIn Profile"] || "";
  const github = header["Github"] || "";
  const location = header["Location (City, Country)"] || "";
  const profilePhoto = header["Profile Photo"];

  // Get summary
  const summary = getSectionData("summary");
  const summaryText = summary["Summary"] || "";

  // Helper function to render section with title
  const renderSection = (title, children, className = "") => {
    if (!children || (React.isValidElement(children) && !children.props.children)) {
      return null;
    }
    
    return (
      <div className={`mb-8 ${className}`}>
        <div className="flex items-center mb-4">
          <h3 className="text-lg font-bold text-gray-800 tracking-wide uppercase">
            {title}
          </h3>
          <div className="flex-1 ml-4 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
        </div>
        {children}
      </div>
    );
  };

  // Helper function to render multiple items section
  const renderMultipleSection = (sectionKey, title, renderItem) => {
    const items = getMultipleSectionData(sectionKey);
    if (items.length === 0) return null;

    return renderSection(title, (
      <div className="space-y-6">
        {items.map((item, index) => (
          <div key={index} className="relative">
            {renderItem(item, index)}
          </div>
        ))}
      </div>
    ));
  };

  return (
    <div className="a4-page bg-white shadow-2xl mx-auto" style={{
      width: '210mm',
      minHeight: '297mm',
      padding: '15mm',
      fontFamily: '"Playfair Display", "Georgia", serif',
      fontSize: '11px',
      lineHeight: '1.4',
      color: '#2d3748',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Header Section */}
      <header className="text-center mb-10 pb-8 border-b-2 border-gray-200">
        <div className="flex items-center justify-center mb-6">
          {profilePhoto && (
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gray-200 shadow-lg mr-8">
              <img 
                src={profilePhoto} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div className={profilePhoto ? "text-left" : ""}>
            {fullName && (
              <h1 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">
                {fullName}
              </h1>
            )}
            {professionalTitle && (
              <h2 className="text-lg font-medium text-gray-600 italic mb-4">
                {professionalTitle}
              </h2>
            )}
          </div>
        </div>

        {/* Contact Information */}
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-sm text-gray-600">
          {phone && (
            <div className="flex items-center">
              <span className="font-medium">Phone:</span>
              <span className="ml-2">{phone}</span>
            </div>
          )}
          {email && (
            <div className="flex items-center">
              <span className="font-medium">Email:</span>
              <span className="ml-2">{email}</span>
            </div>
          )}
          {linkedin && (
            <div className="flex items-center">
              <span className="font-medium">LinkedIn:</span>
              <span className="ml-2 text-blue-600">{linkedin.replace(/^https?:\/\/(www\.)?/, '')}</span>
            </div>
          )}
          {github && (
            <div className="flex items-center">
              <span className="font-medium">GitHub:</span>
              <span className="ml-2 text-blue-600">{github.replace(/^https?:\/\/(www\.)?/, '')}</span>
            </div>
          )}
          {location && (
            <div className="flex items-center">
              <span className="font-medium">Location:</span>
              <span className="ml-2">{location}</span>
            </div>
          )}
        </div>
      </header>

      {/* Two Column Layout */}
      <div className="flex-1 grid grid-cols-5 gap-10">
        {/* Left Column - Primary Information */}
        <div className="col-span-3 space-y-8">
          {/* Professional Summary */}
          {summaryText && renderSection("Professional Summary", (
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-400">
              <p className="text-gray-700 leading-relaxed text-justify">
                {summaryText}
              </p>
            </div>
          ))}

          {/* Work Experience */}
          {hasSectionData("work", true) && renderMultipleSection("work", "Professional Experience", (item) => (
            <div className="relative pl-6 border-l-2 border-gray-200">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-400 rounded-full"></div>
              <div className="bg-white">
                {(item["Job Title"] || item["Role"] || item["Position"]) && (
                  <h4 className="text-base font-bold text-gray-900 mb-1">
                    {item["Job Title"] || item["Role"] || item["Position"]}
                  </h4>
                )}
                <div className="flex items-center justify-between mb-2">
                  {(item["Company Name"] || item["Organization / Firm"] || item["Company / Client"]) && (
                    <span className="font-semibold text-gray-700">
                      {item["Company Name"] || item["Organization / Firm"] || item["Company / Client"]}
                    </span>
                  )}
                  {item["Duration"] && (
                    <span className="text-sm text-gray-500 italic">
                      {item["Duration"]}
                    </span>
                  )}
                </div>
                {(item["Responsibilities & Achievements"] || item["Responsibilities & Legal Work"] || item["Responsibilities"] || item["Duties"]) && (
                  <div className="text-gray-600 text-sm leading-relaxed">
                    {(item["Responsibilities & Achievements"] || item["Responsibilities & Legal Work"] || item["Responsibilities"] || item["Duties"])
                      .split('\n')
                      .filter(line => line.trim())
                      .map((line, idx) => (
                        <p key={idx} className="mb-1">• {line.trim()}</p>
                      ))
                    }
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Projects */}
          {hasSectionData("projects", true) && renderMultipleSection("projects", "Key Projects", (item) => (
            <div className="bg-gradient-to-r from-gray-50 to-white p-5 rounded-lg border border-gray-200">
              {(item["Project Title"] || item["Title"] || item["Project/Campaign Name"]) && (
                <h4 className="text-base font-bold text-gray-900 mb-2">
                  {item["Project Title"] || item["Title"] || item["Project/Campaign Name"]}
                </h4>
              )}
              <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                {(item["Tools Used"] || item["Tools/Technologies Used"] || item["Platform Used"]) && (
                  <div>
                    <span className="font-medium text-gray-700">Tools: </span>
                    <span className="text-gray-600">{item["Tools Used"] || item["Tools/Technologies Used"] || item["Platform Used"]}</span>
                  </div>
                )}
                {(item["Year / Role"] || item["Goal / Audience"]) && (
                  <div>
                    <span className="font-medium text-gray-700">
                      {item["Year / Role"] ? "Role: " : "Audience: "}
                    </span>
                    <span className="text-gray-600">{item["Year / Role"] || item["Goal / Audience"]}</span>
                  </div>
                )}
              </div>
              {item["Description"] && (
                <p className="text-gray-600 text-sm mb-2 leading-relaxed">
                  {item["Description"]}
                </p>
              )}
              {item["Your Contribution"] && (
                <div className="text-gray-600 text-sm">
                  <span className="font-medium">Contribution: </span>
                  {item["Your Contribution"]}
                </div>
              )}
              {(item["Result / Metrics"] || item["Conversion / Engagement Stats"]) && (
                <div className="mt-2 text-sm">
                  <span className="font-medium text-green-700">Results: </span>
                  <span className="text-green-600">{item["Result / Metrics"] || item["Conversion / Engagement Stats"]}</span>
                </div>
              )}
            </div>
          ))}

          {/* Legal Projects (for Law career) */}
          {hasSectionData("legalProjects", true) && renderMultipleSection("legalProjects", "Legal Projects", (item) => (
            <div className="bg-gradient-to-r from-blue-50 to-white p-5 rounded-lg border border-blue-200">
              {item["Title"] && (
                <h4 className="text-base font-bold text-gray-900 mb-2">{item["Title"]}</h4>
              )}
              <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                {item["Year / Role"] && (
                  <div>
                    <span className="font-medium text-gray-700">Role: </span>
                    <span className="text-gray-600">{item["Year / Role"]}</span>
                  </div>
                )}
                {item["Topic / Area of Law"] && (
                  <div>
                    <span className="font-medium text-gray-700">Area: </span>
                    <span className="text-gray-600">{item["Topic / Area of Law"]}</span>
                  </div>
                )}
              </div>
              {item["Description / Contribution"] && (
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item["Description / Contribution"]}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Right Column - Supporting Information */}
        <div className="col-span-2 space-y-6">
          {/* Education */}
          {hasSectionData("education") && renderSection("Education", (
            <div className="space-y-4">
              {getSectionData("education")["Degree Name"] && (
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <h4 className="font-bold text-gray-900 mb-1">
                    {getSectionData("education")["Degree Name"]}
                  </h4>
                  {getSectionData("education")["Institution Name"] && (
                    <p className="text-gray-700 font-medium mb-1">
                      {getSectionData("education")["Institution Name"]}
                    </p>
                  )}
                  <div className="text-sm text-gray-600 space-y-1">
                    {getSectionData("education")["Duration"] && (
                      <p>{getSectionData("education")["Duration"]}</p>
                    )}
                    {getSectionData("education")["CGPA or Percentage"] && (
                      <p><strong>CGPA:</strong> {getSectionData("education")["CGPA or Percentage"]}</p>
                    )}
                  </div>
                </div>
              )}
              
              {/* 10th and 12th Grade */}
              <div className="space-y-2">
                {getSectionData("education")["12th Grade School Name & Percentage"] && (
                  <div className="text-sm">
                    <span className="font-medium">12th Grade: </span>
                    <span className="text-gray-600">{getSectionData("education")["12th Grade School Name & Percentage"]}</span>
                  </div>
                )}
                {getSectionData("education")["10th Grade School Name & Percentage"] && (
                  <div className="text-sm">
                    <span className="font-medium">10th Grade: </span>
                    <span className="text-gray-600">{getSectionData("education")["10th Grade School Name & Percentage"]}</span>
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Technical Skills */}
          {hasSectionData("techSkills", true) && renderSection("Technical Skills", (
            <div className="space-y-3">
              {getMultipleSectionData("techSkills").map((item, index) => (
                <div key={index} className="bg-gray-50 px-3 py-2 rounded text-sm border-l-3 border-blue-400">
                  {item["Technical Skills"] || item["Skill"] || Object.values(item)[0]}
                </div>
              ))}
            </div>
          ))}

          {/* Core Skills (for different careers) */}
          {hasSectionData("coreLegalSkills", true) && renderSection("Legal Skills", (
            <div className="space-y-2">
              {getMultipleSectionData("coreLegalSkills").map((item, index) => (
                <div key={index} className="text-sm bg-blue-50 px-3 py-2 rounded border-l-3 border-blue-500">
                  {item["Core Legal Skill"] || Object.values(item)[0]}
                </div>
              ))}
            </div>
          ))}

          {hasSectionData("coreSalesSkills", true) && renderSection("Sales Skills", (
            <div className="space-y-2">
              {getMultipleSectionData("coreSalesSkills").map((item, index) => (
                <div key={index} className="text-sm bg-green-50 px-3 py-2 rounded border-l-3 border-green-500">
                  {item["Core Sales Skills"] || Object.values(item)[0]}
                </div>
              ))}
            </div>
          ))}

          {hasSectionData("coreMedicalSkills", true) && renderSection("Medical Skills", (
            <div className="space-y-2">
              {getMultipleSectionData("coreMedicalSkills").map((item, index) => (
                <div key={index} className="text-sm bg-red-50 px-3 py-2 rounded border-l-3 border-red-500">
                  {item["Skill"] || Object.values(item)[0]}
                </div>
              ))}
            </div>
          ))}

          {/* Soft Skills */}
          {hasSectionData("softSkills", true) && renderSection("Soft Skills", (
            <div className="grid grid-cols-1 gap-2">
              {getMultipleSectionData("softSkills").map((item, index) => (
                <div key={index} className="text-sm bg-purple-50 px-3 py-2 rounded text-center border-l-3 border-purple-400">
                  {item["Soft Skills"] || item["Soft Skill"] || Object.values(item)[0]}
                </div>
              ))}
            </div>
          ))}

          {/* Certifications */}
          {hasSectionData("certifications", true) && renderSection("Certifications", (
            <div className="space-y-3">
              {getMultipleSectionData("certifications").map((item, index) => (
                <div key={index} className="border-l-4 border-yellow-400 pl-3 bg-yellow-50 py-2 rounded-r">
                  <div className="font-medium text-gray-900 text-sm">
                    {item["Course/Certification Name"] || item["Certification Name"] || item["Certification Title"]}
                  </div>
                  {item["Date"] && (
                    <div className="text-xs text-gray-600">{item["Date"] || item["Year"]}</div>
                  )}
                </div>
              ))}
            </div>
          ))}

          {/* Languages */}
          {hasSectionData("languages", true) && renderSection("Languages", (
            <div className="space-y-2">
              {getMultipleSectionData("languages").map((item, index) => (
                <div key={index} className="text-sm text-center bg-indigo-50 px-3 py-2 rounded border border-indigo-200">
                  {item["Languages"] || item["Language"] || Object.values(item)[0]}
                </div>
              ))}
            </div>
          ))}

          {/* Interests */}
          {hasSectionData("interests", true) && renderSection("Interests", (
            <div className="flex flex-wrap gap-2">
              {getMultipleSectionData("interests").map((item, index) => (
                <span key={index} className="text-xs bg-teal-100 text-teal-800 px-3 py-1 rounded-full border border-teal-300">
                  {item["Interests"] || item["Interest"] || Object.values(item)[0]}
                </span>
              ))}
            </div>
          ))}

          {/* Achievements */}
          {hasSectionData("achievements", true) && renderSection("Achievements", (
            <div className="space-y-3">
              {getMultipleSectionData("achievements").map((item, index) => (
                <div key={index} className="text-sm bg-gradient-to-r from-orange-50 to-yellow-50 p-3 rounded border-l-4 border-orange-400">
                  <div className="font-medium text-gray-900 mb-1">
                    {item["Achievements"] || item["Achievement"] || item["Title"]}
                  </div>
                  {item["Description"] && (
                    <div className="text-gray-600 text-xs">{item["Description"]}</div>
                  )}
                  {item["Year"] && (
                    <div className="text-xs text-gray-500 mt-1">{item["Year"]}</div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ElegantDivideTemplate;