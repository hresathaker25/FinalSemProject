import React from "react";

const BoldNoirTemplate = ({ resumeData, selectedCareer }) => {
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
    if (!resumeData[section]) return [];
    return Array.isArray(resumeData[section]) ? resumeData[section] : [];
  };

  // Helper function to check if a section has data
  const hasData = (section) => {
    if (!resumeData[section]) return false;
    if (Array.isArray(resumeData[section])) {
      return resumeData[section].length > 0 && resumeData[section].some(item => 
        Object.values(item || {}).some(val => val && val.toString().trim() !== "")
      );
    }
    return Object.values(resumeData[section] || {}).some(val => val && val.toString().trim() !== "");
  };

  // Helper function to render section title with elegant styling
  const SectionTitle = ({ children, className = "" }) => (
    <div className={`relative mb-6 ${className}`}>
      <h3 className="text-lg font-bold text-white bg-black px-4 py-2 tracking-wider uppercase">
        {children}
      </h3>
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-800 via-gray-400 to-gray-800"></div>
    </div>
  );

  return (
    <div className="a4-page bg-white text-black font-serif">
      <style jsx>{`
        .bold-noir-template {
          font-family: 'Georgia', 'Times New Roman', serif;
          line-height: 1.5;
        }
        .elegant-border {
          border: 2px solid #000;
          border-radius: 0;
        }
        .noir-accent {
          background: linear-gradient(135deg, #000 0%, #333 100%);
        }
        .text-shadow {
          text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
        }
      `}</style>

      <div className="bold-noir-template p-8 h-full">
        {/* Header Section */}
        <header className="text-center mb-8 pb-6 border-b-4 border-black">
          <div className="relative">
            {/* Background geometric pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="grid grid-cols-8 gap-1 h-full">
                {[...Array(24)].map((_, i) => (
                  <div key={i} className="bg-black transform rotate-45"></div>
                ))}
              </div>
            </div>
            
            <div className="relative z-10">
              {getData("header", "Profile Photo") && (
                <div className="mb-4 flex justify-center">
                  <div className="w-24 h-24 elegant-border overflow-hidden">
                    <img 
                      src={getData("header", "Profile Photo")} 
                      alt="Profile" 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              )}
              
              <h1 className="text-4xl font-bold text-black mb-2 tracking-wide text-shadow">
                {getData("header", "Full Name") || "YOUR NAME"}
              </h1>
              
              <h2 className="text-xl font-medium text-gray-700 mb-4 italic">
                {getData("header", "Professional Title") || "Professional Title"}
              </h2>
              
              {/* Contact Information */}
              <div className="flex flex-wrap justify-center items-center gap-4 text-sm">
                {getData("header", "Email Address") && (
                  <span className="flex items-center gap-1">
                    <span className="w-1 h-1 bg-black rounded-full"></span>
                    {getData("header", "Email Address")}
                  </span>
                )}
                {getData("header", "Phone Number") && (
                  <span className="flex items-center gap-1">
                    <span className="w-1 h-1 bg-black rounded-full"></span>
                    {getData("header", "Phone Number")}
                  </span>
                )}
                {getData("header", "Location (City, Country)") && (
                  <span className="flex items-center gap-1">
                    <span className="w-1 h-1 bg-black rounded-full"></span>
                    {getData("header", "Location (City, Country)")}
                  </span>
                )}
                {getData("header", "LinkedIn Profile") && (
                  <span className="flex items-center gap-1">
                    <span className="w-1 h-1 bg-black rounded-full"></span>
                    LinkedIn Profile
                  </span>
                )}
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="col-span-1 space-y-6">
            {/* Professional Summary */}
            {hasData("summary") && (
              <section>
                <SectionTitle>About</SectionTitle>
                <div className="pl-4 border-l-2 border-black">
                  <p className="text-sm leading-relaxed text-gray-800">
                    {getData("summary", "Summary")}
                  </p>
                </div>
              </section>
            )}

            {/* Technical Skills */}
            {hasData("techSkills") && (
              <section>
                <SectionTitle>Technical Skills</SectionTitle>
                <div className="space-y-2">
                  {getArrayData("techSkills").map((skill, index) => (
                    skill["Technical Skills"] && (
                      <div key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-black mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-800 break-words">
                          {skill["Technical Skills"] || skill["Skill"]}
                        </span>
                      </div>
                    )
                  ))}
                </div>
              </section>
            )}

            {/* Core Skills (for specific careers) */}
            {hasData("coreLegalSkills") && (
              <section>
                <SectionTitle>Legal Skills</SectionTitle>
                <div className="space-y-2">
                  {getArrayData("coreLegalSkills").map((skill, index) => (
                    skill["Core Legal Skill"] && (
                      <div key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-black mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-800 break-words">
                          {skill["Core Legal Skill"]}
                        </span>
                      </div>
                    )
                  ))}
                </div>
              </section>
            )}

            {hasData("coreSalesSkills") && (
              <section>
                <SectionTitle>Sales Skills</SectionTitle>
                <div className="space-y-2">
                  {getArrayData("coreSalesSkills").map((skill, index) => (
                    skill["Core Sales Skills"] && (
                      <div key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-black mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-800 break-words">
                          {skill["Core Sales Skills"]}
                        </span>
                      </div>
                    )
                  ))}
                </div>
              </section>
            )}

            {hasData("coreMedicalSkills") && (
              <section>
                <SectionTitle>Medical Skills</SectionTitle>
                <div className="space-y-2">
                  {getArrayData("coreMedicalSkills").map((skill, index) => (
                    skill["Skill"] && (
                      <div key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-black mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-800 break-words">
                          {skill["Skill"]}
                        </span>
                      </div>
                    )
                  ))}
                </div>
              </section>
            )}

            {/* Soft Skills */}
            {hasData("softSkills") && (
              <section>
                <SectionTitle>Soft Skills</SectionTitle>
                <div className="space-y-2">
                  {getArrayData("softSkills").map((skill, index) => (
                    skill["Soft Skills"] && (
                      <div key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-black mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-800 break-words">
                          {skill["Soft Skills"] || skill["Soft Skill"] || skill["Skill"]}
                        </span>
                      </div>
                    )
                  ))}
                </div>
              </section>
            )}

            {/* Languages */}
            {hasData("languages") && (
              <section>
                <SectionTitle>Languages</SectionTitle>
                <div className="space-y-2">
                  {getArrayData("languages").map((lang, index) => (
                    lang["Languages"] && (
                      <div key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-black mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-800 break-words">
                          {lang["Languages"] || lang["Language"]}
                        </span>
                      </div>
                    )
                  ))}
                </div>
              </section>
            )}

            {/* Interests */}
            {hasData("interests") && (
              <section>
                <SectionTitle>Interests</SectionTitle>
                <div className="space-y-2">
                  {getArrayData("interests").map((interest, index) => (
                    interest["Interests"] && (
                      <div key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-black mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-800 break-words">
                          {interest["Interests"] || interest["Interest"]}
                        </span>
                      </div>
                    )
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right Column */}
          <div className="col-span-2 space-y-6">
            {/* Education */}
            {hasData("education") && (
              <section>
                <SectionTitle>Education</SectionTitle>
                <div className="space-y-4">
                  {selectedCareer === "Finance" ? (
                    getArrayData("education").map((edu, index) => (
                      <div key={index} className="relative pl-6">
                        <div className="absolute left-0 top-2 w-3 h-3 bg-black transform rotate-45"></div>
                        <div>
                          <h4 className="font-bold text-black">
                            {edu["Degree Name"]}
                          </h4>
                          <p className="text-gray-700 font-medium">
                            {edu["Institution Name"]}
                          </p>
                          <div className="flex justify-between text-sm text-gray-600 mt-1">
                            <span>{edu["Duration (Start – End or 'Present')"] || edu["Duration"]}</span>
                            {edu["CGPA or Percentage"] && (
                              <span className="font-medium">{edu["CGPA or Percentage"]}</span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="relative pl-6">
                      <div className="absolute left-0 top-2 w-3 h-3 bg-black transform rotate-45"></div>
                      <div>
                        <h4 className="font-bold text-black">
                          {getData("education", "Degree Name") || getData("education", "Degree / Course Name")}
                        </h4>
                        <p className="text-gray-700 font-medium">
                          {getData("education", "Institution Name")}
                        </p>
                        <div className="flex justify-between text-sm text-gray-600 mt-1">
                          <span>{getData("education", "Duration") || getData("education", "Duration (Start – End or 'Present')")}</span>
                          {getData("education", "CGPA or Percentage") && (
                            <span className="font-medium">{getData("education", "CGPA or Percentage")}</span>
                          )}
                        </div>
                        
                        {/* Additional education details */}
                        {(getData("education", "10th Grade School Name & Percentage") || getData("education", "12th Grade School Name & Percentage")) && (
                          <div className="mt-3 pt-2 border-t border-gray-200">
                            {getData("education", "12th Grade School Name & Percentage") && (
                              <p className="text-xs text-gray-600">
                                <span className="font-medium">12th:</span> {getData("education", "12th Grade School Name & Percentage")}
                              </p>
                            )}
                            {getData("education", "10th Grade School Name & Percentage") && (
                              <p className="text-xs text-gray-600">
                                <span className="font-medium">10th:</span> {getData("education", "10th Grade School Name & Percentage")}
                              </p>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* Work Experience */}
            {hasData("work") && (
              <section>
                <SectionTitle>Experience</SectionTitle>
                <div className="space-y-4">
                  {getArrayData("work").map((work, index) => (
                    <div key={index} className="relative pl-6">
                      <div className="absolute left-0 top-2 w-3 h-3 bg-black transform rotate-45"></div>
                      <div>
                        <h4 className="font-bold text-black">
                          {work["Job Title"] || work["Role"] || work["Position"]}
                        </h4>
                        <p className="text-gray-700 font-medium">
                          {work["Company Name"] || work["Company / Client"] || work["Organization / Firm"] || work["Hospital / Clinic Name"]}
                        </p>
                        <p className="text-sm text-gray-600 mb-2">{work["Duration"]}</p>
                        {work["Responsibilities & Achievements"] && (
                          <div className="text-sm text-gray-800">
                            {work["Responsibilities & Achievements"].split('\n').map((resp, i) => (
                              resp.trim() && (
                                <p key={i} className="mb-1 flex items-start gap-2">
                                  <span className="w-1 h-1 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                                  <span className="break-words">{resp.trim()}</span>
                                </p>
                              )
                            ))}
                          </div>
                        )}
                        {work["Duties"] && (
                          <div className="text-sm text-gray-800">
                            {work["Duties"].split('\n').map((duty, i) => (
                              duty.trim() && (
                                <p key={i} className="mb-1 flex items-start gap-2">
                                  <span className="w-1 h-1 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                                  <span className="break-words">{duty.trim()}</span>
                                </p>
                              )
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Projects */}
            {hasData("projects") && (
              <section>
                <SectionTitle>Projects</SectionTitle>
                <div className="space-y-4">
                  {getArrayData("projects").map((project, index) => (
                    <div key={index} className="relative pl-6">
                      <div className="absolute left-0 top-2 w-3 h-3 bg-black transform rotate-45"></div>
                      <div>
                        <h4 className="font-bold text-black">
                          {project["Project Title"] || project["Title"] || project["Project/Campaign Name"]}
                        </h4>
                        {project["Tools Used"] && (
                          <p className="text-sm text-gray-600 italic">
                            <span className="font-medium">Tools:</span> {project["Tools Used"] || project["Tools/Technologies Used"]}
                          </p>
                        )}
                        {project["Description"] && (
                          <p className="text-sm text-gray-800 mt-1 break-words">
                            {project["Description"]}
                          </p>
                        )}
                        {project["Your Contribution"] && (
                          <p className="text-sm text-gray-800 mt-1 break-words">
                            <span className="font-medium">Contribution:</span> {project["Your Contribution"]}
                          </p>
                        )}
                        {/* Marketing specific fields */}
                        {project["Goal / Audience"] && (
                          <p className="text-xs text-gray-600">
                            <span className="font-medium">Goal:</span> {project["Goal / Audience"]}
                          </p>
                        )}
                        {project["Result / Metrics"] && (
                          <p className="text-xs text-gray-600">
                            <span className="font-medium">Result:</span> {project["Result / Metrics"]}
                          </p>
                        )}
                        {/* Sales specific fields */}
                        {project["Conversion / Engagement Stats"] && (
                          <p className="text-xs text-gray-600">
                            <span className="font-medium">Results:</span> {project["Conversion / Engagement Stats"]}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Certifications */}
            {hasData("certifications") && (
              <section>
                <SectionTitle>Certifications</SectionTitle>
                <div className="grid grid-cols-2 gap-3">
                  {getArrayData("certifications").map((cert, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-black mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-sm font-medium text-black break-words">
                          {cert["Course/Certification Name"] || cert["Certification Name"] || cert["Certification Title"]}
                        </p>
                        <p className="text-xs text-gray-600">
                          {cert["Date"] || cert["Year"]}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Achievements */}
            {hasData("achievements") && (
              <section>
                <SectionTitle>Achievements</SectionTitle>
                <div className="space-y-2">
                  {getArrayData("achievements").map((achievement, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-black mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-800 break-words">
                        {achievement["Achievements"] || achievement["Achievement"] || achievement["Title"]}
                        {achievement["Description"] && (
                          <span className="text-gray-600"> - {achievement["Description"]}</span>
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Activities */}
            {hasData("activities") && (
              <section>
                <SectionTitle>Activities</SectionTitle>
                <div className="space-y-2">
                  {getArrayData("activities").map((activity, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-black mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-800 break-words">
                        {activity["Activities"] || activity["Activity"] || activity["Activity Title"]}
                        {activity["Description"] && (
                          <span className="text-gray-600"> - {activity["Description"]}</span>
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoldNoirTemplate;