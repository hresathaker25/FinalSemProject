import React from "react";

const IndigoShadowTemplate = ({ resumeData, selectedCareer }) => {
  // Helper function to check if a section has data
  const hasData = (sectionKey) => {
    const data = resumeData[sectionKey];
    if (!data) return false;
    
    if (Array.isArray(data)) {
      return data.some(item => 
        Object.values(item || {}).some(value => value && value.toString().trim())
      );
    }
    
    return Object.values(data).some(value => value && value.toString().trim());
  };

  // Helper function to render section content
  const renderSectionContent = (sectionKey, title, renderer) => {
    if (!hasData(sectionKey)) return null;
    
    return (
      <div className="mb-6 break-inside-avoid">
        <h3 className="text-lg font-bold text-indigo-800 mb-3 pb-2 border-b-2 border-indigo-100 tracking-wide">
          {title}
        </h3>
        {renderer()}
      </div>
    );
  };

  // Header section renderer
  const renderHeader = () => {
    const header = resumeData.header || {};
    const profilePhoto = header["Profile Photo"];
    
    return (
      <div className="bg-gradient-to-r from-indigo-700 to-indigo-900 text-white p-8 rounded-t-lg shadow-lg">
        <div className="flex items-start gap-6">
          {/* Profile Photo */}
          {profilePhoto && (
            <div className="flex-shrink-0">
              <div className="w-24 h-24 rounded-full border-4 border-white/20 shadow-lg overflow-hidden bg-white/10">
                <img
                  src={profilePhoto}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
          
          {/* Header Content */}
          <div className="flex-1 min-w-0">
            {header["Full Name"] && (
              <h1 className="text-3xl font-bold mb-2 text-white break-words">
                {header["Full Name"]}
              </h1>
            )}
            
            {header["Professional Title"] && (
              <h2 className="text-xl font-light mb-4 text-indigo-100 break-words">
                {header["Professional Title"]}
              </h2>
            )}
            
            {/* Contact Information Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-indigo-100">
              {header["Phone Number"] && (
                <div className="flex items-center gap-2 break-words">
                  <span className="w-4 h-4 bg-white/20 rounded-full flex items-center justify-center text-xs">📱</span>
                  <span>{header["Phone Number"]}</span>
                </div>
              )}
              {header["Email Address"] && (
                <div className="flex items-center gap-2 break-words">
                  <span className="w-4 h-4 bg-white/20 rounded-full flex items-center justify-center text-xs">✉️</span>
                  <span className="truncate">{header["Email Address"]}</span>
                </div>
              )}
              {header["LinkedIn Profile"] && (
                <div className="flex items-center gap-2 break-words">
                  <span className="w-4 h-4 bg-white/20 rounded-full flex items-center justify-center text-xs">💼</span>
                  <span className="truncate">{header["LinkedIn Profile"]}</span>
                </div>
              )}
              {header["Github"] && (
                <div className="flex items-center gap-2 break-words">
                  <span className="w-4 h-4 bg-white/20 rounded-full flex items-center justify-center text-xs">🔗</span>
                  <span className="truncate">{header["Github"]}</span>
                </div>
              )}
              {header["Location (City, Country)"] && (
                <div className="flex items-center gap-2 break-words col-span-1 sm:col-span-2">
                  <span className="w-4 h-4 bg-white/20 rounded-full flex items-center justify-center text-xs">📍</span>
                  <span>{header["Location (City, Country)"]}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Summary section renderer
  const renderSummary = () => {
    const summary = resumeData.summary?.Summary;
    if (!summary) return null;
    
    return (
      <div className="bg-indigo-50 p-6 rounded-lg shadow-sm border-l-4 border-indigo-600">
        <p className="text-gray-700 leading-relaxed whitespace-pre-line break-words">
          {summary}
        </p>
      </div>
    );
  };

  // Education section renderer
  const renderEducation = () => {
    const education = resumeData.education || {};
    const entries = [];
    
    // Main degree
    if (education["Degree Name"] || education["Institution Name"]) {
      entries.push({
        degree: education["Degree Name"] || "",
        institution: education["Institution Name"] || "",
        duration: education["Duration"] || education["Duration (Start – End or 'Present')"] || "",
        grade: education["CGPA or Percentage"] || ""
      });
    }
    
    // School entries
    if (education["12th Grade School Name & Percentage"]) {
      const parts = education["12th Grade School Name & Percentage"].split("&");
      entries.push({
        degree: "12th Grade",
        institution: parts[0]?.trim() || "",
        grade: parts[1]?.trim() || ""
      });
    }
    
    if (education["10th Grade School Name & Percentage"]) {
      const parts = education["10th Grade School Name & Percentage"].split("&");
      entries.push({
        degree: "10th Grade",
        institution: parts[0]?.trim() || "",
        grade: parts[1]?.trim() || ""
      });
    }

    return (
      <div className="space-y-4">
        {entries.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-indigo-100">
            <div className="flex justify-between items-start gap-4 mb-2">
              <h4 className="font-semibold text-indigo-800 break-words flex-1">
                {item.degree}
              </h4>
              {item.duration && (
                <span className="text-sm text-gray-600 bg-indigo-50 px-2 py-1 rounded whitespace-nowrap">
                  {item.duration}
                </span>
              )}
            </div>
            {item.institution && (
              <p className="text-gray-700 mb-1 break-words">{item.institution}</p>
            )}
            {item.grade && (
              <p className="text-sm text-indigo-600 font-medium">{item.grade}</p>
            )}
          </div>
        ))}
      </div>
    );
  };

  // Work Experience renderer
  const renderWork = () => {
    const workData = resumeData.work || resumeData.workExperience || [];
    if (!Array.isArray(workData)) return null;

    return (
      <div className="space-y-4">
        {workData.map((item, index) => {
          const title = item["Job Title"] || item["Role"] || "";
          const company = item["Company Name"] || item["Company / Client"] || item["Organization / Firm"] || "";
          const duration = item["Duration"] || "";
          const responsibilities = item["Responsibilities & Achievements"] || 
                                 item["Responsibilities"] || 
                                 item["Duties"] ||
                                 item["Responsibilities & Legal Work"] || "";

          if (!title && !company) return null;

          return (
            <div key={index} className="bg-white p-5 rounded-lg shadow-md border border-indigo-100">
              <div className="flex justify-between items-start gap-4 mb-3">
                <div className="flex-1 min-w-0">
                  {title && (
                    <h4 className="font-semibold text-indigo-800 text-lg break-words">
                      {title}
                    </h4>
                  )}
                  {company && (
                    <p className="text-gray-700 font-medium break-words">
                      {company}
                    </p>
                  )}
                </div>
                {duration && (
                  <span className="text-sm text-gray-600 bg-indigo-50 px-3 py-1 rounded-full whitespace-nowrap">
                    {duration}
                  </span>
                )}
              </div>
              {responsibilities && (
                <div className="text-gray-700 whitespace-pre-line break-words leading-relaxed">
                  {responsibilities}
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  // Projects renderer
  const renderProjects = () => {
    const projectsData = resumeData.projects || [];
    if (!Array.isArray(projectsData)) return null;

    return (
      <div className="space-y-4">
        {projectsData.map((item, index) => {
          const title = item["Project Title"] || item["Project/Campaign Name"] || item["Title"] || "";
          const tools = item["Tools Used"] || item["Tools/Technologies Used"] || item["Platform Used"] || "";
          const description = item["Description"] || "";
          const contribution = item["Your Contribution"] || "";
          const goal = item["Goal / Audience"] || "";
          const result = item["Result / Metrics"] || item["Conversion / Engagement Stats"] || "";

          if (!title) return null;

          return (
            <div key={index} className="bg-white p-5 rounded-lg shadow-md border border-indigo-100">
              <h4 className="font-semibold text-indigo-800 text-lg mb-2 break-words">
                {title}
              </h4>
              
              {tools && (
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-medium text-indigo-600">Tools:</span> 
                  <span className="break-words ml-1">{tools}</span>
                </p>
              )}
              
              {goal && (
                <p className="text-sm text-gray-700 mb-2 break-words">
                  <span className="font-medium text-indigo-600">Goal:</span> {goal}
                </p>
              )}
              
              {description && (
                <p className="text-gray-700 mb-2 whitespace-pre-line break-words leading-relaxed">
                  {description}
                </p>
              )}
              
              {contribution && (
                <p className="text-gray-700 mb-2 whitespace-pre-line break-words leading-relaxed">
                  <span className="font-medium text-indigo-600">Contribution:</span> {contribution}
                </p>
              )}
              
              {result && (
                <p className="text-sm text-green-700 bg-green-50 p-2 rounded break-words">
                  <span className="font-medium">Results:</span> {result}
                </p>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  // Skills renderer (handles multiple skill sections)
  const renderSkills = (sectionKey, title) => {
    const skillsData = resumeData[sectionKey] || [];
    if (!Array.isArray(skillsData)) return null;

    const skills = skillsData
      .map(item => Object.values(item || {}).filter(val => val && val.toString().trim()))
      .flat()
      .filter(skill => skill);

    if (skills.length === 0) return null;

    return (
      <div className="bg-white p-5 rounded-lg shadow-sm border border-indigo-100">
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium break-words"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    );
  };

  // Generic list renderer for achievements, activities, etc.
  const renderList = (sectionKey) => {
    const data = resumeData[sectionKey] || [];
    if (!Array.isArray(data)) return null;

    const items = data
      .map(item => Object.values(item || {}).filter(val => val && val.toString().trim()))
      .flat()
      .filter(item => item);

    if (items.length === 0) return null;

    return (
      <div className="space-y-3">
        {items.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-indigo-100">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700 break-words leading-relaxed flex-1">
                {item}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  // Certifications renderer
  const renderCertifications = () => {
    const certData = resumeData.certifications || [];
    if (!Array.isArray(certData)) return null;

    return (
      <div className="grid gap-3">
        {certData.map((item, index) => {
          const name = item["Course/Certification Name"] || item["Certification Name"] || item["Certification Title"] || "";
          const date = item["Date"] || item["Year"] || "";

          if (!name) return null;

          return (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-indigo-100">
              <div className="flex justify-between items-start gap-4">
                <h4 className="font-medium text-indigo-800 break-words flex-1">
                  {name}
                </h4>
                {date && (
                  <span className="text-sm text-gray-600 bg-indigo-50 px-2 py-1 rounded whitespace-nowrap">
                    {date}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="a4-page bg-gradient-to-br from-gray-50 to-indigo-50 shadow-xl">
      <div className="max-w-none mx-auto bg-white shadow-2xl overflow-hidden">
        {/* Header */}
        {renderHeader()}
        
        {/* Content */}
        <div className="p-8 space-y-6">
          {/* Summary */}
          {renderSectionContent("summary", "Professional Summary", renderSummary)}
          
          {/* Education */}
          {renderSectionContent("education", "Education", renderEducation)}
          
          {/* Work Experience */}
          {renderSectionContent("work", "Work Experience", renderWork) ||
           renderSectionContent("workExperience", "Work Experience", renderWork) ||
           renderSectionContent("internships", "Experience", renderWork)}
          
          {/* Projects */}
          {renderSectionContent("projects", "Projects", renderProjects)}
          
          {/* Publications (for Law career) */}
          {selectedCareer === "Law" && 
           renderSectionContent("publications", "Publications", () => renderList("publications"))}
          
          {/* Skills Sections */}
          {renderSectionContent("techSkills", "Technical Skills", () => renderSkills("techSkills", "Technical Skills")) ||
           renderSectionContent("skills", "Core Skills", () => renderSkills("skills", "Core Skills"))}
          
          {renderSectionContent("softSkills", "Soft Skills", () => renderSkills("softSkills", "Soft Skills"))}
          {renderSectionContent("coreLegalSkills", "Legal Skills", () => renderSkills("coreLegalSkills", "Legal Skills"))}
          {renderSectionContent("coreSalesSkills", "Sales Skills", () => renderSkills("coreSalesSkills", "Sales Skills"))}
          {renderSectionContent("coreMedicalSkills", "Medical Skills", () => renderSkills("coreMedicalSkills", "Medical Skills"))}
          {renderSectionContent("labSkills", "Lab Skills", () => renderSkills("labSkills", "Lab Skills"))}
          {renderSectionContent("teachingSkills", "Teaching Skills", () => renderSkills("teachingSkills", "Teaching Skills"))}
          {renderSectionContent("tools", "Tools & Software", () => renderSkills("tools", "Tools & Software"))}
          {renderSectionContent("otherSkills", "Other Skills", () => renderSkills("otherSkills", "Other Skills"))}
          
          {/* Certifications */}
          {renderSectionContent("certifications", "Certifications", renderCertifications)}
          
          {/* Achievements */}
          {renderSectionContent("achievements", "Achievements", () => renderList("achievements"))}
          
          {/* Activities */}
          {renderSectionContent("activities", "Activities", () => renderList("activities")) ||
           renderSectionContent("extracurricular", "Extracurricular Activities", () => renderList("extracurricular"))}
          
          {/* Languages */}
          {renderSectionContent("languages", "Languages", () => renderSkills("languages", "Languages"))}
          
          {/* Interests */}
          {renderSectionContent("interests", "Interests", () => renderSkills("interests", "Interests"))}
        </div>
      </div>
    </div>
  );
};

export default IndigoShadowTemplate;