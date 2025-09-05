import React from "react";

const MonarchSignatureTemplate = ({ resumeData, selectedCareer }) => {
  // Helper function to safely get section data
  const getSection = (sectionKey) => {
    return resumeData[sectionKey] || {};
  };

  // Helper function to get array data
  const getSectionArray = (sectionKey) => {
    const data = resumeData[sectionKey];
    return Array.isArray(data) ? data : [];
  };

  // Helper function to check if a field has content
  const hasContent = (value) => {
    if (Array.isArray(value)) {
      return value.some(item => 
        typeof item === 'object' 
          ? Object.values(item).some(v => v && v.toString().trim())
          : item && item.toString().trim()
      );
    }
    return value && value.toString().trim();
  };

  // Helper function to render text with line breaks
  const renderTextWithBreaks = (text) => {
    if (!text) return null;
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < text.split('\n').length - 1 && <br />}
      </React.Fragment>
    ));
  };

  const headerData = getSection("header");
  const summaryData = getSection("summary");
  const educationData = getSection("education");

  return (
    <div className="a4-page bg-white text-gray-900 font-serif overflow-hidden">
      {/* Elegant Header Section */}
      <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white px-8 py-8">
        {/* Decorative Border */}
        <div className="absolute inset-0 border-4 border-double border-amber-400 opacity-20 m-2"></div>
        
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex-1">
            {headerData["Full Name"] && (
              <h1 className="text-4xl font-bold tracking-wide mb-2 text-amber-50">
                {headerData["Full Name"].toUpperCase()}
              </h1>
            )}
            {headerData["Professional Title"] && (
              <p className="text-xl font-light text-amber-200 tracking-wider mb-4 italic">
                {headerData["Professional Title"]}
              </p>
            )}
            
            {/* Contact Info in Elegant Grid */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm text-gray-300">
              {headerData["Phone Number"] && (
                <div className="flex items-center">
                  <span className="text-amber-400 mr-2">●</span>
                  {headerData["Phone Number"]}
                </div>
              )}
              {headerData["Email Address"] && (
                <div className="flex items-center">
                  <span className="text-amber-400 mr-2">●</span>
                  {headerData["Email Address"]}
                </div>
              )}
              {headerData["LinkedIn Profile"] && (
                <div className="flex items-center">
                  <span className="text-amber-400 mr-2">●</span>
                  LinkedIn
                </div>
              )}
              {headerData["Location (City, Country)"] && (
                <div className="flex items-center">
                  <span className="text-amber-400 mr-2">●</span>
                  {headerData["Location (City, Country)"]}
                </div>
              )}
              {headerData["Github"] && (
                <div className="flex items-center">
                  <span className="text-amber-400 mr-2">●</span>
                  GitHub
                </div>
              )}
            </div>
          </div>

          {/* Profile Photo */}
          {headerData["Profile Photo"] && (
            <div className="ml-8 relative">
              <div className="w-28 h-28 rounded-full border-4 border-amber-400 p-1 bg-white">
                <img
                  src={headerData["Profile Photo"]}
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="absolute -inset-2 rounded-full border border-amber-400 opacity-30"></div>
            </div>
          )}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="px-8 py-6">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Column - Main Content */}
          <div className="col-span-8 space-y-6">
            {/* Professional Summary */}
            {hasContent(summaryData["Summary"]) && (
              <section>
                <h2 className="text-xl font-bold text-slate-800 mb-3 pb-2 border-b-2 border-amber-400">
                  PROFESSIONAL SUMMARY
                </h2>
                <div className="text-gray-700 leading-relaxed text-justify">
                  {renderTextWithBreaks(summaryData["Summary"])}
                </div>
              </section>
            )}

            {/* Education */}
            {hasContent(educationData) && (
              <section>
                <h2 className="text-xl font-bold text-slate-800 mb-3 pb-2 border-b-2 border-amber-400">
                  EDUCATION
                </h2>
                <div className="space-y-3">
                  <div className="border-l-4 border-amber-400 pl-4">
                    {educationData["Degree Name"] && (
                      <h3 className="font-semibold text-gray-800 text-lg">
                        {educationData["Degree Name"]}
                      </h3>
                    )}
                    {educationData["Institution Name"] && (
                      <p className="text-gray-600 italic font-medium">
                        {educationData["Institution Name"]}
                      </p>
                    )}
                    <div className="flex justify-between items-center mt-1">
                      {educationData["Duration"] && (
                        <span className="text-sm text-gray-500">
                          {educationData["Duration"]}
                        </span>
                      )}
                      {educationData["CGPA or Percentage"] && (
                        <span className="text-sm font-semibold text-slate-700 bg-amber-50 px-2 py-1 rounded">
                          {educationData["CGPA or Percentage"]}
                        </span>
                      )}
                    </div>
                  </div>

                  {(educationData["10th Grade School Name & Percentage"] || 
                    educationData["12th Grade School Name & Percentage"]) && (
                    <div className="grid grid-cols-1 gap-2 mt-4">
                      {educationData["12th Grade School Name & Percentage"] && (
                        <div className="text-sm text-gray-600">
                          <span className="font-medium">12th Grade:</span> {educationData["12th Grade School Name & Percentage"]}
                        </div>
                      )}
                      {educationData["10th Grade School Name & Percentage"] && (
                        <div className="text-sm text-gray-600">
                          <span className="font-medium">10th Grade:</span> {educationData["10th Grade School Name & Percentage"]}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* Work Experience */}
            {hasContent(getSectionArray("work")) && (
              <section>
                <h2 className="text-xl font-bold text-slate-800 mb-3 pb-2 border-b-2 border-amber-400">
                  EXPERIENCE
                </h2>
                <div className="space-y-4">
                  {getSectionArray("work").map((job, index) => {
                    const hasJobContent = Object.values(job).some(value => hasContent(value));
                    if (!hasJobContent) return null;

                    return (
                      <div key={index} className="border-l-4 border-amber-400 pl-4 pb-3">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            {(job["Job Title"] || job["Role"] || job["Position"]) && (
                              <h3 className="font-semibold text-gray-800 text-lg">
                                {job["Job Title"] || job["Role"] || job["Position"]}
                              </h3>
                            )}
                            {(job["Company Name"] || job["Organization / Firm"] || job["Hospital / Clinic Name"]) && (
                              <p className="text-gray-600 italic">
                                {job["Company Name"] || job["Organization / Firm"] || job["Hospital / Clinic Name"]}
                              </p>
                            )}
                          </div>
                          {job["Duration"] && (
                            <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                              {job["Duration"]}
                            </span>
                          )}
                        </div>
                        {(job["Responsibilities & Achievements"] || job["Responsibilities & Legal Work"] || 
                          job["Key Responsibilities"] || job["Duties"]) && (
                          <div className="text-gray-700 text-sm leading-relaxed">
                            {renderTextWithBreaks(
                              job["Responsibilities & Achievements"] || 
                              job["Responsibilities & Legal Work"] || 
                              job["Key Responsibilities"] || 
                              job["Duties"]
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* Projects */}
            {hasContent(getSectionArray("projects")) && (
              <section>
                <h2 className="text-xl font-bold text-slate-800 mb-3 pb-2 border-b-2 border-amber-400">
                  PROJECTS
                </h2>
                <div className="space-y-4">
                  {getSectionArray("projects").map((project, index) => {
                    const hasProjectContent = Object.values(project).some(value => hasContent(value));
                    if (!hasProjectContent) return null;

                    return (
                      <div key={index} className="border-l-4 border-amber-400 pl-4 pb-3">
                        {(project["Project Title"] || project["Project/Campaign Name"] || project["Title"]) && (
                          <h3 className="font-semibold text-gray-800 text-lg mb-1">
                            {project["Project Title"] || project["Project/Campaign Name"] || project["Title"]}
                          </h3>
                        )}
                        
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-2">
                          {(project["Tools Used"] || project["Tools/Technologies Used"] || project["Platform Used"]) && (
                            <span>
                              <span className="font-medium">Tools:</span> {project["Tools Used"] || project["Tools/Technologies Used"] || project["Platform Used"]}
                            </span>
                          )}
                          {(project["Year / Role"] || project["Goal / Audience"]) && (
                            <span>
                              {project["Year / Role"] || project["Goal / Audience"]}
                            </span>
                          )}
                        </div>

                        {(project["Description"] || project["Summary & Objective"]) && (
                          <div className="text-gray-700 text-sm leading-relaxed mb-2">
                            {renderTextWithBreaks(project["Description"] || project["Summary & Objective"])}
                          </div>
                        )}

                        {(project["Your Contribution"] || project["Findings"] || project["Result / Metrics"]) && (
                          <div className="text-gray-700 text-sm leading-relaxed">
                            <span className="font-medium">Contribution/Results:</span> {renderTextWithBreaks(project["Your Contribution"] || project["Findings"] || project["Result / Metrics"])}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="col-span-4 space-y-6">
            {/* Technical Skills */}
            {hasContent(getSectionArray("techSkills")) && (
              <section>
                <h3 className="font-bold text-slate-800 mb-3 text-center bg-amber-400 text-white py-2 px-3 rounded-t">
                  TECHNICAL SKILLS
                </h3>
                <div className="bg-amber-50 px-3 py-4 rounded-b">
                  <div className="space-y-2">
                    {getSectionArray("techSkills").map((skill, index) => {
                      const skillText = skill["Technical Skills"] || skill["Skill"] || skill;
                      if (!hasContent(skillText)) return null;

                      return (
                        <div key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-amber-400 rounded-full mr-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-700">{skillText}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>
            )}

            {/* Core Skills (for specific careers) */}
            {hasContent(getSectionArray("coreLegalSkills")) && (
              <section>
                <h3 className="font-bold text-slate-800 mb-3 text-center bg-amber-400 text-white py-2 px-3 rounded-t">
                  CORE LEGAL SKILLS
                </h3>
                <div className="bg-amber-50 px-3 py-4 rounded-b">
                  <div className="space-y-2">
                    {getSectionArray("coreLegalSkills").map((skill, index) => {
                      const skillText = skill["Core Legal Skill"] || skill;
                      if (!hasContent(skillText)) return null;

                      return (
                        <div key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-amber-400 rounded-full mr-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-700">{skillText}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>
            )}

            {/* Medical Skills */}
            {hasContent(getSectionArray("coreMedicalSkills")) && (
              <section>
                <h3 className="font-bold text-slate-800 mb-3 text-center bg-amber-400 text-white py-2 px-3 rounded-t">
                  MEDICAL SKILLS
                </h3>
                <div className="bg-amber-50 px-3 py-4 rounded-b">
                  <div className="space-y-2">
                    {getSectionArray("coreMedicalSkills").map((skill, index) => {
                      const skillText = skill["Skill"] || skill;
                      if (!hasContent(skillText)) return null;

                      return (
                        <div key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-amber-400 rounded-full mr-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-700">{skillText}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>
            )}

            {/* Soft Skills */}
            {hasContent(getSectionArray("softSkills")) && (
              <section>
                <h3 className="font-bold text-slate-800 mb-3 text-center bg-slate-600 text-white py-2 px-3 rounded-t">
                  SOFT SKILLS
                </h3>
                <div className="bg-slate-50 px-3 py-4 rounded-b">
                  <div className="space-y-2">
                    {getSectionArray("softSkills").map((skill, index) => {
                      const skillText = skill["Soft Skills"] || skill["Soft Skill"] || skill["Skill"] || skill;
                      if (!hasContent(skillText)) return null;

                      return (
                        <div key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-slate-600 rounded-full mr-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-700">{skillText}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>
            )}

            {/* Certifications */}
            {hasContent(getSectionArray("certifications")) && (
              <section>
                <h3 className="font-bold text-slate-800 mb-3 text-center bg-slate-600 text-white py-2 px-3 rounded-t">
                  CERTIFICATIONS
                </h3>
                <div className="bg-slate-50 px-3 py-4 rounded-b">
                  <div className="space-y-3">
                    {getSectionArray("certifications").map((cert, index) => {
                      const hasContent = cert["Course/Certification Name"] || cert["Certification Name"];
                      if (!hasContent) return null;

                      return (
                        <div key={index} className="text-sm">
                          <div className="font-medium text-gray-800">
                            {cert["Course/Certification Name"] || cert["Certification Name"]}
                          </div>
                          {(cert["Date"] || cert["Year"]) && (
                            <div className="text-gray-600 italic">
                              {cert["Date"] || cert["Year"]}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>
            )}

            {/* Languages */}
            {hasContent(getSectionArray("languages")) && (
              <section>
                <h3 className="font-bold text-slate-800 mb-3 text-center bg-slate-600 text-white py-2 px-3 rounded-t">
                  LANGUAGES
                </h3>
                <div className="bg-slate-50 px-3 py-4 rounded-b">
                  <div className="space-y-2">
                    {getSectionArray("languages").map((lang, index) => {
                      const langText = lang["Languages"] || lang["Language"] || lang;
                      if (!hasContent(langText)) return null;

                      return (
                        <div key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-slate-600 rounded-full mr-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-700">{langText}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>
            )}

            {/* Achievements */}
            {hasContent(getSectionArray("achievements")) && (
              <section>
                <h3 className="font-bold text-slate-800 mb-3 text-center bg-amber-400 text-white py-2 px-3 rounded-t">
                  ACHIEVEMENTS
                </h3>
                <div className="bg-amber-50 px-3 py-4 rounded-b">
                  <div className="space-y-2">
                    {getSectionArray("achievements").map((achievement, index) => {
                      const achText = achievement["Achievements"] || achievement["Achievement"] || achievement["Title"] || achievement;
                      if (!hasContent(achText)) return null;

                      return (
                        <div key={index} className="text-sm">
                          <div className="flex items-start">
                            <div className="w-2 h-2 bg-amber-400 rounded-full mr-2 flex-shrink-0 mt-2"></div>
                            <span className="text-gray-700">{achText}</span>
                          </div>
                          {achievement["Year"] && (
                            <div className="text-xs text-gray-500 ml-4 italic">
                              {achievement["Year"]}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>
            )}

            {/* Interests */}
            {hasContent(getSectionArray("interests")) && (
              <section>
                <h3 className="font-bold text-slate-800 mb-3 text-center bg-slate-600 text-white py-2 px-3 rounded-t">
                  INTERESTS
                </h3>
                <div className="bg-slate-50 px-3 py-4 rounded-b">
                  <div className="flex flex-wrap gap-2">
                    {getSectionArray("interests").map((interest, index) => {
                      const interestText = interest["Interests"] || interest["Interest"] || interest;
                      if (!hasContent(interestText)) return null;

                      return (
                        <span key={index} className="bg-white text-gray-700 px-3 py-1 rounded-full text-xs border border-gray-200">
                          {interestText}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </section>
            )}
          </div>
        </div>
      </div>

      {/* Elegant Footer */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-slate-900 via-amber-400 to-slate-900"></div>
    </div>
  );
};

export default MonarchSignatureTemplate;