import React from "react";

const PrestigeGrayTemplate = ({ resumeData, selectedCareer }) => {
  // Helper function to safely get nested data
  const getData = (section, field, index = null) => {
    if (!resumeData || !resumeData[section]) return "";
    if (index !== null) {
      return resumeData[section][index]?.[field] || "";
    }
    return resumeData[section][field] || "";
  };

  // Helper function to get array data safely
  const getArrayData = (section) => {
    if (!resumeData || !resumeData[section]) return [];
    return Array.isArray(resumeData[section]) ? resumeData[section] : [];
  };

  const headerData = resumeData?.header || {};
  const profilePhoto = headerData["Profile Photo"];

  return (
    <div className="a4-page bg-white relative overflow-hidden" style={{ 
      width: '210mm', 
      minHeight: '297mm', 
      fontFamily: '"Playfair Display", "Georgia", serif',
      fontSize: '10pt',
      lineHeight: '1.4'
    }}>
      {/* Elegant background pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
                         radial-gradient(circle at 80% 20%, rgba(75, 85, 99, 0.1) 0%, transparent 50%),
                         radial-gradient(circle at 40% 40%, rgba(156, 163, 175, 0.1) 0%, transparent 50%)`
      }} />

      {/* Header Section */}
      <div className="relative px-12 pt-10 pb-8 bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 text-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
          <div className="w-full h-full border-4 border-white rounded-full transform rotate-12" />
        </div>
        <div className="absolute bottom-0 left-0 w-24 h-24 opacity-10">
          <div className="w-full h-full bg-white rounded-full transform -translate-x-12 translate-y-12" />
        </div>

        <div className="relative z-10 flex items-start gap-8">
          {/* Profile Photo */}
          {profilePhoto && (
            <div className="flex-shrink-0">
              <div className="w-24 h-24 rounded-full border-4 border-white/20 overflow-hidden shadow-xl bg-gray-200">
                <img
                  src={profilePhoto}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}

          {/* Name and Title */}
          <div className="flex-1 min-w-0">
            <h1 className="text-4xl font-bold mb-2 text-white" style={{ fontFamily: '"Playfair Display", serif' }}>
              {getData("header", "Full Name") || "Your Name"}
            </h1>
            <p className="text-xl text-gray-200 mb-4 font-light" style={{ fontFamily: '"Source Sans Pro", sans-serif' }}>
              {getData("header", "Professional Title") || "Professional Title"}
            </p>

            {/* Contact Info */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-sm text-gray-300">
              {getData("header", "Phone Number") && (
                <div className="flex items-center gap-2 truncate">
                  <span className="w-1 h-1 bg-gray-400 rounded-full flex-shrink-0" />
                  <span className="truncate">{getData("header", "Phone Number")}</span>
                </div>
              )}
              {getData("header", "Email Address") && (
                <div className="flex items-center gap-2 truncate">
                  <span className="w-1 h-1 bg-gray-400 rounded-full flex-shrink-0" />
                  <span className="truncate">{getData("header", "Email Address")}</span>
                </div>
              )}
              {getData("header", "LinkedIn Profile") && (
                <div className="flex items-center gap-2 truncate">
                  <span className="w-1 h-1 bg-gray-400 rounded-full flex-shrink-0" />
                  <span className="truncate">{getData("header", "LinkedIn Profile")}</span>
                </div>
              )}
              {getData("header", "Location (City, Country)") && (
                <div className="flex items-center gap-2 truncate">
                  <span className="w-1 h-1 bg-gray-400 rounded-full flex-shrink-0" />
                  <span className="truncate">{getData("header", "Location (City, Country)")}</span>
                </div>
              )}
              {getData("header", "Github") && (
                <div className="flex items-center gap-2 truncate">
                  <span className="w-1 h-1 bg-gray-400 rounded-full flex-shrink-0" />
                  <span className="truncate">{getData("header", "Github")}</span>
                </div>
              )}
              {getData("header", "Portfolio / Content Link") && (
                <div className="flex items-center gap-2 truncate">
                  <span className="w-1 h-1 bg-gray-400 rounded-full flex-shrink-0" />
                  <span className="truncate">{getData("header", "Portfolio / Content Link")}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-12 py-8 space-y-8">
        {/* Professional Summary */}
        {getData("summary", "Summary") && (
          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200" style={{ 
              fontFamily: '"Playfair Display", serif',
              letterSpacing: '0.5px'
            }}>
              PROFESSIONAL SUMMARY
            </h2>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line text-sm">
                {getData("summary", "Summary")}
              </p>
            </div>
          </section>
        )}

        {/* Two Column Layout */}
        <div className="grid grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="col-span-2 space-y-8">
            {/* Work Experience */}
            {getArrayData("work").length > 0 && (
              <section>
                <h2 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200" style={{ 
                  fontFamily: '"Playfair Display", serif',
                  letterSpacing: '0.5px'
                }}>
                  {selectedCareer === "Law" ? "LEGAL EXPERIENCE" : 
                   selectedCareer === "Medical" ? "CLINICAL EXPERIENCE" :
                   "PROFESSIONAL EXPERIENCE"}
                </h2>
                <div className="space-y-6">
                  {getArrayData("work").map((job, index) => (
                    <div key={index} className="relative pl-6 border-l-2 border-gray-300">
                      <div className="absolute -left-2 top-1 w-4 h-4 bg-gray-400 rounded-full" />
                      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                        <div className="flex flex-wrap justify-between items-start mb-2 gap-2">
                          <h3 className="font-semibold text-gray-800 text-sm">
                            {job["Job Title"] || job["Role"] || job["Position"] || "Position"}
                          </h3>
                          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                            {job["Duration"] || "Duration"}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3 font-medium">
                          {job["Company Name"] || job["Company / Client"] || job["Organization / Firm"] || job["Hospital / Clinic Name"] || "Company"}
                        </p>
                        {job["Responsibilities & Achievements"] || job["Responsibilities"] || job["Responsibilities & Legal Work"] || job["Key Responsibilities"] ? (
                          <div className="text-xs text-gray-700 leading-relaxed whitespace-pre-line">
                            {job["Responsibilities & Achievements"] || job["Responsibilities"] || job["Responsibilities & Legal Work"] || job["Key Responsibilities"]}
                          </div>
                        ) : null}
                        {job["Departments Rotated"] && (
                          <p className="text-xs text-gray-600 mt-2">
                            <span className="font-medium">Departments:</span> {job["Departments Rotated"]}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Projects */}
            {getArrayData("projects").length > 0 && (
              <section>
                <h2 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200" style={{ 
                  fontFamily: '"Playfair Display", serif',
                  letterSpacing: '0.5px'
                }}>
                  {selectedCareer === "Marketing" ? "CAMPAIGNS & PROJECTS" :
                   selectedCareer === "Law" ? "LEGAL PROJECTS" :
                   selectedCareer === "Medical" ? "MEDICAL RESEARCH" :
                   selectedCareer === "Sales" ? "SALES PROJECTS" :
                   selectedCareer === "Educational" ? "TEACHING PORTFOLIOS" :
                   "KEY PROJECTS"}
                </h2>
                <div className="space-y-4">
                  {getArrayData("projects").map((project, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
                      <h3 className="font-semibold text-gray-800 text-sm mb-2">
                        {project["Project Title"] || project["Project/Campaign Name"] || project["Title"] || "Project Title"}
                      </h3>
                      <div className="grid grid-cols-2 gap-4 text-xs text-gray-600 mb-3">
                        {(project["Tools Used"] || project["Tools/Technologies Used"] || project["Platform Used"]) && (
                          <div>
                            <span className="font-medium text-gray-700">Tools:</span> {project["Tools Used"] || project["Tools/Technologies Used"] || project["Platform Used"]}
                          </div>
                        )}
                        {(project["Year / Role"] || project["Goal / Audience"]) && (
                          <div>
                            <span className="font-medium text-gray-700">
                              {project["Year / Role"] ? "Role:" : "Audience:"}
                            </span> {project["Year / Role"] || project["Goal / Audience"]}
                          </div>
                        )}
                        {project["Topic / Area of Law"] && (
                          <div>
                            <span className="font-medium text-gray-700">Area:</span> {project["Topic / Area of Law"]}
                          </div>
                        )}
                        {(project["Result / Metrics"] || project["Conversion / Engagement Stats"]) && (
                          <div>
                            <span className="font-medium text-gray-700">Results:</span> {project["Result / Metrics"] || project["Conversion / Engagement Stats"]}
                          </div>
                        )}
                      </div>
                      {(project["Description"] || project["Your Contribution"] || project["Description / Contribution"]) && (
                        <p className="text-xs text-gray-700 leading-relaxed whitespace-pre-line">
                          {project["Description"] || project["Your Contribution"] || project["Description / Contribution"]}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Education */}
            {(resumeData?.education || resumeData?.schooling) && (
              <section>
                <h2 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200" style={{ 
                  fontFamily: '"Playfair Display", serif',
                  letterSpacing: '0.5px'
                }}>
                  EDUCATION
                </h2>
                <div className="space-y-4">
                  {/* Higher Education */}
                  {resumeData?.education && (
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                      <h3 className="font-semibold text-gray-800 text-sm mb-1">
                        {getData("education", "Degree Name") || getData("education", "Degree / Course Name") || "Degree"}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {getData("education", "Institution Name") || "Institution"}
                      </p>
                      <div className="flex justify-between items-center text-xs text-gray-500">
                        <span>{getData("education", "Duration") || getData("education", "Duration (Start – End or 'Present')")}</span>
                        <span className="bg-gray-100 px-2 py-1 rounded-full">
                          {getData("education", "CGPA or Percentage") || getData("education", "CGPA / Percentage")}
                        </span>
                      </div>
                    </div>
                  )}
                  
                  {/* School Education */}
                  {(getData("education", "12th Grade School Name & Percentage") || getData("schooling", "12th School Name")) && (
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h4 className="font-medium text-gray-800 text-xs mb-1">12th Grade</h4>
                        <p className="text-xs text-gray-600">
                          {getData("education", "12th Grade School Name & Percentage") || 
                           `${getData("schooling", "12th School Name")} - ${getData("schooling", "12th Percentage")}`}
                        </p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h4 className="font-medium text-gray-800 text-xs mb-1">10th Grade</h4>
                        <p className="text-xs text-gray-600">
                          {getData("education", "10th Grade School Name & Percentage") || 
                           `${getData("schooling", "10th School Name")} - ${getData("schooling", "10th Percentage")}`}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </section>
            )}
          </div>

          {/* Right Column - Skills & Additional Info */}
          <div className="space-y-6">
            {/* Technical/Core Skills */}
            {(getArrayData("techSkills").length > 0 || getArrayData("coreLegalSkills").length > 0 || 
              getArrayData("coreSalesSkills").length > 0 || getArrayData("coreMedicalSkills").length > 0 ||
              getArrayData("skills").length > 0) && (
              <section>
                <h2 className="text-base font-bold text-gray-800 mb-3 pb-1 border-b border-gray-200" style={{ 
                  fontFamily: '"Playfair Display", serif'
                }}>
                  {selectedCareer === "Law" ? "LEGAL SKILLS" :
                   selectedCareer === "Medical" ? "MEDICAL SKILLS" :
                   selectedCareer === "Sales" ? "SALES SKILLS" :
                   selectedCareer === "Finance" ? "FINANCE SKILLS" :
                   "TECHNICAL SKILLS"}
                </h2>
                <div className="space-y-2">
                  {(getArrayData("techSkills").length > 0 ? getArrayData("techSkills") :
                    getArrayData("coreLegalSkills").length > 0 ? getArrayData("coreLegalSkills") :
                    getArrayData("coreSalesSkills").length > 0 ? getArrayData("coreSalesSkills") :
                    getArrayData("coreMedicalSkills").length > 0 ? getArrayData("coreMedicalSkills") :
                    getArrayData("skills")).map((skill, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full flex-shrink-0" />
                      <span className="text-xs text-gray-700">
                        {typeof skill === 'string' ? skill : 
                         skill["Technical Skills"] || skill["Core Legal Skill"] || skill["Core Sales Skills"] || skill["Skill"]}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Soft Skills / Other Skills */}
            {(getArrayData("softSkills").length > 0 || getArrayData("otherSkills").length > 0 || 
              getArrayData("labSkills").length > 0 || getArrayData("tools").length > 0) && (
              <section>
                <h2 className="text-base font-bold text-gray-800 mb-3 pb-1 border-b border-gray-200" style={{ 
                  fontFamily: '"Playfair Display", serif'
                }}>
                  {selectedCareer === "Medical" ? "LAB SKILLS" :
                   selectedCareer === "Finance" ? "TOOLS & SOFTWARE" :
                   "SOFT SKILLS"}
                </h2>
                <div className="space-y-2">
                  {(getArrayData("softSkills").length > 0 ? getArrayData("softSkills") :
                    getArrayData("otherSkills").length > 0 ? getArrayData("otherSkills") :
                    getArrayData("labSkills").length > 0 ? getArrayData("labSkills") :
                    getArrayData("tools")).map((skill, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gray-300 rounded-full flex-shrink-0" />
                      <span className="text-xs text-gray-700">
                        {typeof skill === 'string' ? skill : 
                         skill["Soft Skills"] || skill["Soft Skill"] || skill["Tools/Softwares"] || 
                         skill["Tools / Software"] || skill["Skill"] || skill["Tool/Software"]}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Languages */}
            {getArrayData("languages").length > 0 && (
              <section>
                <h2 className="text-base font-bold text-gray-800 mb-3 pb-1 border-b border-gray-200" style={{ 
                  fontFamily: '"Playfair Display", serif'
                }}>
                  LANGUAGES
                </h2>
                <div className="space-y-2">
                  {getArrayData("languages").map((lang, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full flex-shrink-0" />
                      <span className="text-xs text-gray-700">
                        {typeof lang === 'string' ? lang : lang["Languages"] || lang["Language"]}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Certifications */}
            {getArrayData("certifications").length > 0 && (
              <section>
                <h2 className="text-base font-bold text-gray-800 mb-3 pb-1 border-b border-gray-200" style={{ 
                  fontFamily: '"Playfair Display", serif'
                }}>
                  CERTIFICATIONS
                </h2>
                <div className="space-y-3">
                  {getArrayData("certifications").map((cert, index) => (
                    <div key={index} className="bg-gray-50 p-2 rounded">
                      <h4 className="font-medium text-gray-800 text-xs mb-1">
                        {cert["Course/Certification Name"] || cert["Certification Name"] || cert["Certification Title"] || "Certification"}
                      </h4>
                      <p className="text-xs text-gray-600">
                        {cert["Date"] || cert["Year"]}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Achievements */}
            {getArrayData("achievements").length > 0 && (
              <section>
                <h2 className="text-base font-bold text-gray-800 mb-3 pb-1 border-b border-gray-200" style={{ 
                  fontFamily: '"Playfair Display", serif'
                }}>
                  ACHIEVEMENTS
                </h2>
                <div className="space-y-2">
                  {getArrayData("achievements").map((achievement, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-gray-400 rounded-full flex-shrink-0 mt-2" />
                      <p className="text-xs text-gray-700 leading-relaxed">
                        {typeof achievement === 'string' ? achievement : 
                         achievement["Achievements"] || achievement["Achievement"] || achievement["Title"]}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Interests */}
            {getArrayData("interests").length > 0 && (
              <section>
                <h2 className="text-base font-bold text-gray-800 mb-3 pb-1 border-b border-gray-200" style={{ 
                  fontFamily: '"Playfair Display", serif'
                }}>
                  INTERESTS
                </h2>
                <div className="flex flex-wrap gap-1">
                  {getArrayData("interests").map((interest, index) => (
                    <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                      {typeof interest === 'string' ? interest : interest["Interests"] || interest["Interest"]}
                    </span>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>

      {/* Decorative footer */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-400 via-gray-600 to-gray-400" />
    </div>
  );
};

export default PrestigeGrayTemplate;