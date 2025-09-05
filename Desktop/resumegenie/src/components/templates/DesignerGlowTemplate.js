import React from "react";

const DesignerGlowTemplate = ({ resumeData, selectedCareer }) => {
  // Helper function to safely get nested data
  const getData = (section, field, index = null) => {
    if (!resumeData || !resumeData[section]) return "";
    
    if (index !== null) {
      return resumeData[section]?.[index]?.[field] || "";
    }
    
    return resumeData[section]?.[field] || "";
  };

  // Helper function to get array data safely
  const getArrayData = (section) => {
    if (!resumeData || !resumeData[section]) return [];
    return Array.isArray(resumeData[section]) ? resumeData[section] : [];
  };

  // Helper function to check if section has data
  const hasData = (section, index = null) => {
    if (!resumeData || !resumeData[section]) return false;
    
    if (index !== null) {
      const item = resumeData[section]?.[index];
      if (!item) return false;
      return Object.values(item).some(value => value && value.toString().trim() !== "");
    }
    
    const sectionData = resumeData[section];
    if (Array.isArray(sectionData)) {
      return sectionData.some(item => 
        Object.values(item || {}).some(value => value && value.toString().trim() !== "")
      );
    }
    
    return Object.values(sectionData || {}).some(value => value && value.toString().trim() !== "");
  };

  // Section Title Component
  const SectionTitle = ({ children }) => (
    <div className="mb-6">
      <h2 className="text-lg font-semibold text-gray-800 pb-2 border-b-2 border-gray-200 mb-4 tracking-wide">
        {children}
      </h2>
    </div>
  );

  return (
    <div className="a4-page bg-white relative" style={{ 
      width: '210mm', 
      minHeight: '297mm', 
      margin: '0 auto',
      padding: '0',
      position: 'relative',
      boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
      transform: 'scale(0.8)',
      transformOrigin: 'top center',
    }}>
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: 'radial-gradient(circle at 2px 2px, #374151 1px, transparent 0)',
               backgroundSize: '24px 24px'
             }}>
        </div>
      </div>

      <div className="relative z-10 h-full">
        {/* Header Section */}
        {hasData("header") && (
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8 relative overflow-hidden">
            {/* Elegant accent line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500"></div>
            
            <div className="flex items-center gap-8">
              {/* Profile Photo */}
              {getData("header", "Profile Photo") && (
                <div className="flex-shrink-0">
                  <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                    <img
                      src={getData("header", "Profile Photo")}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}

              {/* Name and Title */}
              <div className="flex-1">
                {getData("header", "Full Name") && (
                  <h1 className="text-4xl font-light text-white mb-2 tracking-wide">
                    {getData("header", "Full Name")}
                  </h1>
                )}
                
                {getData("header", "Professional Title") && (
                  <p className="text-xl text-amber-300 font-light mb-4 tracking-wide">
                    {getData("header", "Professional Title")}
                  </p>
                )}

                {/* Contact Info */}
                <div className="grid grid-cols-2 gap-3 text-sm text-gray-300">
                  {getData("header", "Phone Number") && (
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-4 bg-amber-400 rounded-full flex-shrink-0"></span>
                      <span>{getData("header", "Phone Number")}</span>
                    </div>
                  )}
                  {getData("header", "Email Address") && (
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-4 bg-amber-400 rounded-full flex-shrink-0"></span>
                      <span className="break-all">{getData("header", "Email Address")}</span>
                    </div>
                  )}
                  {getData("header", "LinkedIn Profile") && (
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-4 bg-amber-400 rounded-full flex-shrink-0"></span>
                      <span className="break-all">{getData("header", "LinkedIn Profile")}</span>
                    </div>
                  )}
                  {(getData("header", "Github") || getData("header", "Portfolio / Content Link") || getData("header", "Instagram / YouTube Handle")) && (
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-4 bg-amber-400 rounded-full flex-shrink-0"></span>
                      <span className="break-all">
                        {getData("header", "Github") || getData("header", "Portfolio / Content Link") || getData("header", "Instagram / YouTube Handle")}
                      </span>
                    </div>
                  )}
                  {getData("header", "Location (City, Country)") && (
                    <div className="flex items-center gap-2 col-span-2">
                      <span className="w-4 h-4 bg-amber-400 rounded-full flex-shrink-0"></span>
                      <span>{getData("header", "Location (City, Country)")}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="grid grid-cols-3 gap-8 p-8">
          {/* Left Column - Main Content */}
          <div className="col-span-2 space-y-8">
            {/* Professional Summary */}
            {hasData("summary") && (
              <div>
                <SectionTitle>Professional Summary</SectionTitle>
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-amber-400">
                  <p className="text-gray-700 leading-relaxed text-sm whitespace-pre-wrap font-light">
                    {getData("summary", "Summary")}
                  </p>
                </div>
              </div>
            )}

            {/* Work Experience */}
            {hasData("work") && (
              <div>
                <SectionTitle>Professional Experience</SectionTitle>
                <div className="space-y-6">
                  {getArrayData("work").map((work, index) => {
                    if (!hasData("work", index)) return null;
                    return (
                      <div key={index} className="relative pl-6 border-l-2 border-gray-200">
                        <div className="absolute -left-2 top-0 w-4 h-4 bg-amber-400 rounded-full shadow-sm"></div>
                        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h3 className="font-semibold text-gray-800 text-base mb-1">
                                {getData("work", "Job Title", index) || getData("work", "Role", index) || getData("work", "Position", index)}
                              </h3>
                              <p className="text-amber-600 font-medium text-sm">
                                {getData("work", "Company Name", index) || getData("work", "Company / Client", index) || getData("work", "Organization / Firm", index)}
                              </p>
                            </div>
                            {getData("work", "Duration", index) && (
                              <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full whitespace-nowrap">
                                {getData("work", "Duration", index)}
                              </span>
                            )}
                          </div>
                          {(getData("work", "Responsibilities & Achievements", index) || getData("work", "Responsibilities", index) || getData("work", "Responsibilities & Legal Work", index) || getData("work", "Duties", index)) && (
                            <div className="text-gray-600 text-sm leading-relaxed whitespace-pre-wrap">
                              {getData("work", "Responsibilities & Achievements", index) || getData("work", "Responsibilities", index) || getData("work", "Responsibilities & Legal Work", index) || getData("work", "Duties", index)}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Projects */}
            {hasData("projects") && (
              <div>
                <SectionTitle>
                  {selectedCareer === "Law" ? "Legal Projects & Case Studies" : 
                   selectedCareer === "Sales" ? "Projects & Sales Campaigns" :
                   selectedCareer === "Marketing" ? "Projects & Campaigns" :
                   selectedCareer === "Finance" ? "Finance Projects & Analysis" :
                   selectedCareer === "Medical" ? "Medical Projects & Research" :
                   selectedCareer === "Educational" ? "Projects & Teaching Portfolios" :
                   "Key Projects"}
                </SectionTitle>
                <div className="space-y-6">
                  {getArrayData("projects").map((project, index) => {
                    if (!hasData("projects", index)) return null;
                    return (
                      <div key={index} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="font-semibold text-gray-800 text-base">
                            {getData("projects", "Project Title", index) || 
                             getData("projects", "Project/Campaign Name", index) ||
                             getData("projects", "Title", index)}
                          </h3>
                          {(getData("projects", "Year / Role", index) || getData("projects", "Year", index)) && (
                            <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full whitespace-nowrap">
                              {getData("projects", "Year / Role", index) || getData("projects", "Year", index)}
                            </span>
                          )}
                        </div>
                        
                        {/* Project Details */}
                        <div className="space-y-2 text-sm text-gray-600">
                          {(getData("projects", "Tools Used", index) || getData("projects", "Tools/Technologies Used", index)) && (
                            <div>
                              <span className="font-medium text-amber-600">Technologies: </span>
                              <span>{getData("projects", "Tools Used", index) || getData("projects", "Tools/Technologies Used", index)}</span>
                            </div>
                          )}
                          {getData("projects", "Platform Used", index) && (
                            <div>
                              <span className="font-medium text-amber-600">Platform: </span>
                              <span>{getData("projects", "Platform Used", index)}</span>
                            </div>
                          )}
                          {getData("projects", "Topic / Area of Law", index) && (
                            <div>
                              <span className="font-medium text-amber-600">Area of Law: </span>
                              <span>{getData("projects", "Topic / Area of Law", index)}</span>
                            </div>
                          )}
                          {(getData("projects", "Description", index) || getData("projects", "Summary & Objective", index)) && (
                            <div className="mt-3 leading-relaxed whitespace-pre-wrap">
                              {getData("projects", "Description", index) || getData("projects", "Summary & Objective", index)}
                            </div>
                          )}
                          {getData("projects", "Your Contribution", index) && (
                            <div className="mt-2 leading-relaxed whitespace-pre-wrap italic text-gray-700">
                              {getData("projects", "Your Contribution", index)}
                            </div>
                          )}
                          {getData("projects", "Result / Metrics", index) && (
                            <div className="mt-2">
                              <span className="font-medium text-green-600">Results: </span>
                              <span className="text-gray-700">{getData("projects", "Result / Metrics", index)}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Publications (Law specific) */}
            {selectedCareer === "Law" && hasData("publications") && (
              <div>
                <SectionTitle>Legal Writing & Publications</SectionTitle>
                <div className="space-y-4">
                  {getArrayData("publications").map((pub, index) => {
                    if (!hasData("publications", index)) return null;
                    return (
                      <div key={index} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                        <h3 className="font-semibold text-gray-800 mb-2 text-sm">
                          {getData("publications", "Article / Blog Title", index)}
                        </h3>
                        <div className="space-y-1 text-sm text-gray-600">
                          {getData("publications", "Platform (if published)", index) && (
                            <div>
                              <span className="font-medium text-amber-600">Published in: </span>
                              <span>{getData("publications", "Platform (if published)", index)}</span>
                            </div>
                          )}
                          {getData("publications", "Brief Summary", index) && (
                            <div className="mt-2 leading-relaxed text-xs whitespace-pre-wrap">
                              {getData("publications", "Brief Summary", index)}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Sidebar */}
          <div className="col-span-1 space-y-6">
            {/* Education */}
            {hasData("education") && (
              <div>
                <SectionTitle>Education</SectionTitle>
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-5 rounded-lg border border-amber-100">
                  {/* Main Degree */}
                  {getData("education", "Degree Name") && (
                    <div className="mb-4">
                      <h3 className="font-semibold text-gray-800 text-sm mb-1">
                        {getData("education", "Degree Name")}
                      </h3>
                      <p className="text-amber-700 text-sm font-medium mb-2">
                        {getData("education", "Institution Name")}
                      </p>
                      <div className="space-y-1 text-xs text-gray-600">
                        {getData("education", "Duration") && (
                          <div>{getData("education", "Duration")}</div>
                        )}
                        {getData("education", "CGPA or Percentage") && (
                          <div className="font-medium">{getData("education", "CGPA or Percentage")}</div>
                        )}
                      </div>
                    </div>
                  )}
                  
                  {/* School Education */}
                  {(getData("education", "12th Grade School Name & Percentage") || getData("education", "10th Grade School Name & Percentage")) && (
                    <div className="border-t border-amber-200 pt-3 space-y-2">
                      {getData("education", "12th Grade School Name & Percentage") && (
                        <div className="text-xs text-gray-600">
                          <span className="font-medium">12th: </span>
                          <span>{getData("education", "12th Grade School Name & Percentage")}</span>
                        </div>
                      )}
                      {getData("education", "10th Grade School Name & Percentage") && (
                        <div className="text-xs text-gray-600">
                          <span className="font-medium">10th: </span>
                          <span>{getData("education", "10th Grade School Name & Percentage")}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Technical Skills */}
            {hasData("techSkills") && (
              <div>
                <SectionTitle>
                  {selectedCareer === "Marketing" ? "Marketing Skills" :
                   selectedCareer === "Finance" ? "Finance Skills" :
                   selectedCareer === "Law" ? "Legal Skills" :
                   selectedCareer === "Medical" ? "Medical Skills" :
                   selectedCareer === "Educational" ? "Teaching Skills" :
                   "Technical Skills"}
                </SectionTitle>
                <div className="space-y-2">
                  {getArrayData("techSkills").map((skill, index) => {
                    const skillText = getData("techSkills", "Technical Skills", index) || 
                                    getData("techSkills", "Skill", index) ||
                                    getData("techSkills", "Core Sales Skills", index);
                    return skillText ? (
                      <div key={index} className="bg-white p-3 rounded-md shadow-sm border-l-4 border-amber-400 text-sm text-gray-700">
                        {skillText}
                      </div>
                    ) : null;
                  })}
                </div>
              </div>
            )}

            {/* Core Skills (for specific careers) */}
            {hasData("coreLegalSkills") && (
              <div>
                <SectionTitle>Core Legal Skills</SectionTitle>
                <div className="space-y-2">
                  {getArrayData("coreLegalSkills").map((skill, index) => {
                    const skillText = getData("coreLegalSkills", "Core Legal Skills", index) || 
                                    getData("coreLegalSkills", "Core Legal Skill", index);
                    return skillText ? (
                      <div key={index} className="bg-white p-3 rounded-md shadow-sm border-l-4 border-amber-400 text-sm text-gray-700">
                        {skillText}
                      </div>
                    ) : null;
                  })}
                </div>
              </div>
            )}

            {/* Soft Skills & Other Skills */}
            {(hasData("softSkills") || hasData("otherSkills") || hasData("tools") || hasData("labSkills")) && (
              <div>
                <SectionTitle>Additional Skills</SectionTitle>
                <div className="space-y-2">
                  {/* Soft Skills */}
                  {getArrayData("softSkills").map((skill, index) => {
                    const skillText = getData("softSkills", "Soft Skills", index) || 
                                    getData("softSkills", "Soft Skill", index) ||
                                    getData("softSkills", "Skill", index);
                    return skillText ? (
                      <div key={index} className="bg-gray-50 p-2 rounded-md text-xs text-gray-700 border border-gray-200">
                        {skillText}
                      </div>
                    ) : null;
                  })}
                  
                  {/* Other Skills */}
                  {getArrayData("otherSkills").map((skill, index) => {
                    const toolText = getData("otherSkills", "Tools / Software", index) ||
                                   getData("otherSkills", "Tools/Softwares", index);
                    const softText = getData("otherSkills", "Soft Skill", index);
                    return (
                      <React.Fragment key={index}>
                        {toolText && (
                          <div className="bg-white p-3 rounded-md shadow-sm border-l-4 border-amber-400 text-sm text-gray-700">
                            {toolText}
                          </div>
                        )}
                        {softText && (
                          <div className="bg-gray-50 p-2 rounded-md text-xs text-gray-700 border border-gray-200">
                            {softText}
                          </div>
                        )}
                      </React.Fragment>
                    );
                  })}

                  {/* Tools for Finance */}
                  {getArrayData("tools").map((tool, index) => {
                    const toolText = getData("tools", "Tool/Software", index);
                    return toolText ? (
                      <div key={index} className="bg-white p-3 rounded-md shadow-sm border-l-4 border-amber-400 text-sm text-gray-700">
                        {toolText}
                      </div>
                    ) : null;
                  })}

                  {/* Lab Skills for Medical */}
                  {getArrayData("labSkills").map((skill, index) => {
                    const skillText = getData("labSkills", "Skill", index);
                    return skillText ? (
                      <div key={index} className="bg-white p-3 rounded-md shadow-sm border-l-4 border-amber-400 text-sm text-gray-700">
                        {skillText}
                      </div>
                    ) : null;
                  })}
                </div>
              </div>
            )}

            {/* Languages */}
            {hasData("languages") && (
              <div>
                <SectionTitle>Languages</SectionTitle>
                <div className="space-y-2">
                  {getArrayData("languages").map((lang, index) => {
                    const langText = getData("languages", "Languages", index) || 
                                   getData("languages", "Language", index);
                    return langText ? (
                      <div key={index} className="inline-block bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 px-3 py-2 rounded-full text-xs font-medium mr-2 mb-2 border border-amber-200">
                        {langText}
                      </div>
                    ) : null;
                  })}
                </div>
              </div>
            )}

            {/* Certifications */}
            {hasData("certifications") && (
              <div>
                <SectionTitle>Certifications</SectionTitle>
                <div className="space-y-3">
                  {getArrayData("certifications").map((cert, index) => {
                    if (!hasData("certifications", index)) return null;
                    return (
                      <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                        <h4 className="font-semibold text-gray-800 text-sm mb-1">
                          {getData("certifications", "Course/Certification Name", index) ||
                           getData("certifications", "Certification Name", index) ||
                           getData("certifications", "Certification Title", index)}
                        </h4>
                        <p className="text-xs text-gray-500">
                          {getData("certifications", "Date", index) || getData("certifications", "Year", index)}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Achievements */}
            {hasData("achievements") && (
              <div>
                <SectionTitle>Achievements</SectionTitle>
                <div className="space-y-2">
                  {getArrayData("achievements").map((achievement, index) => {
                    const achievementText = getData("achievements", "Achievements", index) || 
                                          getData("achievements", "Achievement", index) ||
                                          getData("achievements", "Title", index);
                    return achievementText ? (
                      <div key={index} className="bg-gradient-to-r from-green-50 to-emerald-50 p-3 rounded-md text-sm text-gray-700 border border-green-200">
                        {achievementText}
                      </div>
                    ) : null;
                  })}
                </div>
              </div>
            )}

            {/* Extracurricular Activities */}
            {hasData("activities") && (
              <div>
                <SectionTitle>Extracurricular Activities</SectionTitle>
                <div className="space-y-2">
                  {getArrayData("activities").map((activity, index) => {
                    const activityText = getData("activities", "Activities", index) || 
                                       getData("activities", "Activity", index) ||
                                       getData("activities", "Activity Title", index);
                    return activityText ? (
                      <div key={index} className="bg-blue-50 p-3 rounded-md text-sm text-gray-700 border border-blue-200">
                        {activityText}
                      </div>
                    ) : null;
                  })}
                </div>
              </div>
            )}

            {/* Interests */}
            {hasData("interests") && (
              <div>
                <SectionTitle>Interests & Hobbies</SectionTitle>
                <div className="flex flex-wrap gap-2">
                  {getArrayData("interests").map((interest, index) => {
                    const interestText = getData("interests", "Interests", index) || 
                                       getData("interests", "Interest", index);
                    return interestText ? (
                      <span key={index} className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs border border-gray-200">
                        {interestText}
                      </span>
                    ) : null;
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer Accent */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500"></div>
      </div>
    </div>
  );
};

export default DesignerGlowTemplate;