import React from "react";

const CleanTimelineTemplate = ({ resumeData, selectedCareer }) => {
  // Helper function to safely get data
  const getData = (section, field, index = null) => {
    if (!resumeData[section]) return "";
    if (index !== null) {
      return resumeData[section][index]?.[field] || "";
    }
    return resumeData[section][field] || "";
  };

  // Helper function to get array data safely
  const getArrayData = (section) => {
    if (!resumeData[section] || !Array.isArray(resumeData[section])) {
      return [];
    }
    return resumeData[section].filter(item => 
      item && Object.values(item).some(value => value && value.toString().trim())
    );
  };

  // Helper function to check if section has data
  const hasData = (section) => {
    if (!resumeData[section]) return false;
    if (Array.isArray(resumeData[section])) {
      return getArrayData(section).length > 0;
    }
    return Object.values(resumeData[section]).some(value => value && value.toString().trim());
  };

  return (
    <div className="a4-page bg-white shadow-lg mx-auto" style={{ width: '210mm', minHeight: '297mm' }}>
      <div className="p-8 h-full">
        {/* Header Section */}
        <div className="border-b-3 border-slate-700 pb-6 mb-8">
          <div className="flex items-start gap-6">
            {/* Profile Photo */}
            {getData("header", "Profile Photo") && (
              <div className="flex-shrink-0">
                <img
                  src={getData("header", "Profile Photo")}
                  alt="Profile"
                  className="w-24 h-24 rounded-full object-cover border-4 border-slate-200 shadow-md"
                />
              </div>
            )}
            
            {/* Header Info */}
            <div className="flex-grow">
              <h1 className="text-4xl font-light text-slate-800 mb-2 tracking-wide">
                {getData("header", "Full Name") || "Your Name"}
              </h1>
              <p className="text-xl text-slate-600 mb-4 font-light">
                {getData("header", "Professional Title") || "Professional Title"}
              </p>
              
              {/* Contact Info in elegant grid */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-slate-600">
                {getData("header", "Phone Number") && (
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-slate-400 rounded-full"></span>
                    {getData("header", "Phone Number")}
                  </div>
                )}
                {getData("header", "Email Address") && (
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-slate-400 rounded-full"></span>
                    {getData("header", "Email Address")}
                  </div>
                )}
                {getData("header", "LinkedIn Profile") && (
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-slate-400 rounded-full"></span>
                    LinkedIn
                  </div>
                )}
                {getData("header", "Github") && (
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-slate-400 rounded-full"></span>
                    GitHub
                  </div>
                )}
                {getData("header", "Location (City, Country)") && (
                  <div className="flex items-center gap-2 col-span-2">
                    <span className="w-2 h-2 bg-slate-400 rounded-full"></span>
                    {getData("header", "Location (City, Country)")}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        {hasData("summary") && (
          <div className="mb-8">
            <h2 className="text-lg font-medium text-slate-800 mb-4 pb-2 border-b border-slate-200">
              Professional Summary
            </h2>
            <p className="text-slate-700 leading-relaxed text-justify">
              {getData("summary", "Summary")}
            </p>
          </div>
        )}

        {/* Two Column Layout for Main Content */}
        <div className="grid grid-cols-3 gap-8">
          {/* Left Column - Timeline Sections */}
          <div className="col-span-2 space-y-8">
            
            {/* Work Experience */}
            {hasData("work") && (
              <div>
                <h2 className="text-lg font-medium text-slate-800 mb-6 pb-2 border-b border-slate-200">
                  {selectedCareer === "Law" ? "Work Experience / Internships" : 
                   selectedCareer === "Marketing" ? "Work Experience / Internships / Freelance" :
                   "Work Experience"}
                </h2>
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-4 top-0 bottom-0 w-px bg-slate-300"></div>
                  
                  <div className="space-y-6">
                    {getArrayData("work").map((work, index) => (
                      <div key={index} className="relative pl-12">
                        {/* Timeline dot */}
                        <div className="absolute left-2.5 top-1 w-3 h-3 bg-slate-600 rounded-full border-2 border-white shadow-sm"></div>
                        
                        <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-slate-300">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-medium text-slate-800">
                              {work["Job Title"] || work["Role"] || work["Position"] || "Position"}
                            </h3>
                            <span className="text-sm text-slate-500 bg-white px-2 py-1 rounded">
                              {work["Duration"] || "Duration"}
                            </span>
                          </div>
                          <p className="text-slate-600 mb-2 font-medium">
                            {work["Company Name"] || work["Company / Client"] || work["Organization / Firm"] || "Company"}
                          </p>
                          <div className="text-sm text-slate-700">
                            {(work["Responsibilities & Achievements"] || 
                              work["Responsibilities"] || 
                              work["Duties"] ||
                              work["Responsibilities & Legal Work"])?.split('\n').map((line, i) => (
                              line.trim() && (
                                <div key={i} className="flex items-start gap-2 mb-1">
                                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                                  <span>{line.trim()}</span>
                                </div>
                              )
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Projects */}
            {hasData("projects") && (
              <div>
                <h2 className="text-lg font-medium text-slate-800 mb-6 pb-2 border-b border-slate-200">
                  {selectedCareer === "Law" ? "Legal Projects / Case Studies" :
                   selectedCareer === "Marketing" ? "Projects / Campaigns" :
                   selectedCareer === "Sales" ? "Projects / Sales Campaigns" :
                   selectedCareer === "Finance" ? "Finance Projects / Case Studies" :
                   selectedCareer === "Medical" ? "Medical Projects / Research" :
                   selectedCareer === "Educational" ? "Projects / Teaching Portfolios" :
                   "Projects"}
                </h2>
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-px bg-slate-300"></div>
                  
                  <div className="space-y-6">
                    {getArrayData("projects").map((project, index) => (
                      <div key={index} className="relative pl-12">
                        <div className="absolute left-2.5 top-1 w-3 h-3 bg-slate-400 rounded-full border-2 border-white shadow-sm"></div>
                        
                        <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-slate-200">
                          <h3 className="font-medium text-slate-800 mb-2">
                            {project["Project Title"] || 
                             project["Project/Campaign Name"] || 
                             project["Title"] || 
                             "Project Title"}
                          </h3>
                          
                          {/* Different fields based on career */}
                          {selectedCareer === "Marketing" && (
                            <div className="text-sm text-slate-600 space-y-1 mb-2">
                              {project["Goal / Audience"] && (
                                <p><span className="font-medium">Target:</span> {project["Goal / Audience"]}</p>
                              )}
                              {project["Platform Used"] && (
                                <p><span className="font-medium">Platform:</span> {project["Platform Used"]}</p>
                              )}
                              {project["Result / Metrics"] && (
                                <p><span className="font-medium">Results:</span> {project["Result / Metrics"]}</p>
                              )}
                            </div>
                          )}
                          
                          {selectedCareer === "Sales" && (
                            <div className="text-sm text-slate-600 space-y-1 mb-2">
                              {project["What You Sold / Promoted"] && (
                                <p><span className="font-medium">Product:</span> {project["What You Sold / Promoted"]}</p>
                              )}
                              {project["Channels Used"] && (
                                <p><span className="font-medium">Channels:</span> {project["Channels Used"]}</p>
                              )}
                              {project["Conversion / Engagement Stats"] && (
                                <p><span className="font-medium">Results:</span> {project["Conversion / Engagement Stats"]}</p>
                              )}
                            </div>
                          )}
                          
                          {selectedCareer === "Law" && (
                            <div className="text-sm text-slate-600 space-y-1 mb-2">
                              {project["Year / Role"] && (
                                <p><span className="font-medium">Role:</span> {project["Year / Role"]}</p>
                              )}
                              {project["Topic / Area of Law"] && (
                                <p><span className="font-medium">Area:</span> {project["Topic / Area of Law"]}</p>
                              )}
                            </div>
                          )}

                          {/* Tools Used */}
                          {(project["Tools Used"] || project["Tools/Technologies Used"] || project["Tools/Softwares"]) && (
                            <p className="text-sm text-slate-600 mb-2">
                              <span className="font-medium">Tools:</span> {project["Tools Used"] || project["Tools/Technologies Used"] || project["Tools/Softwares"]}
                            </p>
                          )}

                          {/* Description */}
                          <div className="text-sm text-slate-700">
                            {(project["Description"] || 
                              project["Your Contribution"] || 
                              project["Description / Contribution"])?.split('\n').map((line, i) => (
                              line.trim() && (
                                <div key={i} className="flex items-start gap-2 mb-1">
                                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                                  <span>{line.trim()}</span>
                                </div>
                              )
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Education Timeline */}
            {hasData("education") && (
              <div>
                <h2 className="text-lg font-medium text-slate-800 mb-6 pb-2 border-b border-slate-200">
                  Education
                </h2>
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-px bg-slate-300"></div>
                  
                  <div className="relative pl-12">
                    <div className="absolute left-2.5 top-1 w-3 h-3 bg-slate-500 rounded-full border-2 border-white shadow-sm"></div>
                    
                    <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-slate-200">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium text-slate-800">
                          {getData("education", "Degree Name") || getData("education", "Degree / Course Name")}
                        </h3>
                        <span className="text-sm text-slate-500 bg-white px-2 py-1 rounded">
                          {getData("education", "Duration") || getData("education", "Duration (Start – End or 'Present')")}
                        </span>
                      </div>
                      <p className="text-slate-600 mb-2">
                        {getData("education", "Institution Name")}
                      </p>
                      {getData("education", "CGPA or Percentage") && (
                        <p className="text-sm text-slate-700">
                          <span className="font-medium">CGPA:</span> {getData("education", "CGPA or Percentage")}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Skills and Other Info */}
          <div className="space-y-6">
            
            {/* Technical Skills */}
            {hasData("techSkills") && (
              <div>
                <h3 className="text-base font-medium text-slate-800 mb-3 pb-2 border-b border-slate-200">
                  {selectedCareer === "Marketing" ? "Marketing Skills" :
                   selectedCareer === "Sales" ? "Core Sales Skills" :
                   selectedCareer === "Finance" ? "Finance Skills" :
                   selectedCareer === "Law" ? "Core Legal Skills" :
                   selectedCareer === "Medical" ? "Medical Skills" :
                   selectedCareer === "Educational" ? "Teaching Skills" :
                   "Technical Skills"}
                </h3>
                <div className="space-y-2">
                  {getArrayData("techSkills").map((skill, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                      <span className="text-sm text-slate-700">
                        {skill["Technical Skills"] || 
                         skill["Skill"] || 
                         skill["Core Sales Skills"] ||
                         skill["Core Legal Skill"] ||
                         Object.values(skill)[0]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Soft Skills */}
            {hasData("softSkills") && (
              <div>
                <h3 className="text-base font-medium text-slate-800 mb-3 pb-2 border-b border-slate-200">
                  Soft Skills
                </h3>
                <div className="space-y-2">
                  {getArrayData("softSkills").map((skill, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
                      <span className="text-sm text-slate-700">
                        {skill["Soft Skills"] || 
                         skill["Soft Skill"] || 
                         Object.values(skill)[0]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Languages */}
            {hasData("languages") && (
              <div>
                <h3 className="text-base font-medium text-slate-800 mb-3 pb-2 border-b border-slate-200">
                  Languages
                </h3>
                <div className="space-y-2">
                  {getArrayData("languages").map((lang, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
                      <span className="text-sm text-slate-700">
                        {lang["Languages"] || lang["Language"] || Object.values(lang)[0]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Certifications */}
            {hasData("certifications") && (
              <div>
                <h3 className="text-base font-medium text-slate-800 mb-3 pb-2 border-b border-slate-200">
                  Certifications
                </h3>
                <div className="space-y-3">
                  {getArrayData("certifications").map((cert, index) => (
                    <div key={index} className="bg-slate-50 p-3 rounded border-l-3 border-slate-300">
                      <p className="text-sm font-medium text-slate-800">
                        {cert["Course/Certification Name"] || cert["Certification Name"] || cert["Certification Title"]}
                      </p>
                      <p className="text-xs text-slate-600">
                        {cert["Date"] || cert["Year"]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Achievements */}
            {hasData("achievements") && (
              <div>
                <h3 className="text-base font-medium text-slate-800 mb-3 pb-2 border-b border-slate-200">
                  Achievements
                </h3>
                <div className="space-y-2">
                  {getArrayData("achievements").map((achievement, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-slate-700">
                        {achievement["Achievements"] || 
                         achievement["Achievement"] || 
                         achievement["Title"] ||
                         Object.values(achievement)[0]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Interests */}
            {hasData("interests") && (
              <div>
                <h3 className="text-base font-medium text-slate-800 mb-3 pb-2 border-b border-slate-200">
                  Interests
                </h3>
                <div className="flex flex-wrap gap-2">
                  {getArrayData("interests").slice(0, 6).map((interest, index) => (
                    <span key={index} className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-full">
                      {interest["Interests"] || interest["Interest"] || Object.values(interest)[0]}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CleanTimelineTemplate;