import React from "react";
import { Phone, Mail, MapPin, Linkedin, Github, Globe, Award, Calendar, ExternalLink } from "lucide-react";

const DigitalMinimalistTemplate = ({ resumeData, selectedCareer }) => {
  // Helper function to safely get data with fallbacks
  const getData = (sectionKey, field = null, index = null) => {
    if (!resumeData || !resumeData[sectionKey]) return "";
    
    if (field === null) return resumeData[sectionKey];
    
    if (index !== null) {
      const items = resumeData[sectionKey];
      if (!Array.isArray(items) || !items[index]) return "";
      return items[index][field] || "";
    }
    
    return resumeData[sectionKey][field] || "";
  };

  // Helper function to get array data
  const getArrayData = (sectionKey) => {
    const data = resumeData?.[sectionKey];
    return Array.isArray(data) ? data.filter(item => item && Object.keys(item).length > 0) : [];
  };

  // Helper function to render contact info with icons
  const renderContactItem = (icon, text, type = 'text') => {
    if (!text) return null;
    
    const IconComponent = icon;
    
    return (
      <div className="flex items-center space-x-3 text-slate-600 hover:text-slate-800 transition-colors group">
        <div className="w-5 h-5 flex items-center justify-center">
          <IconComponent className="w-4 h-4 group-hover:scale-110 transition-transform" />
        </div>
        <span className="text-sm font-medium tracking-wide">
          {type === 'link' ? (
            <span className="hover:text-blue-600 cursor-pointer border-b border-transparent hover:border-blue-600 transition-all">
              {text}
            </span>
          ) : text}
        </span>
      </div>
    );
  };

  // Helper function to render section with proper formatting
  const renderSection = (title, children, className = "") => {
    return (
      <div className={`mb-8 ${className}`}>
        <div className="flex items-center mb-4">
          <h2 className="text-xl font-bold text-slate-800 tracking-wide uppercase letter-spacing-[2px]">
            {title}
          </h2>
          <div className="flex-1 ml-4 h-px bg-gradient-to-r from-slate-300 to-transparent"></div>
        </div>
        {children}
      </div>
    );
  };

  return (
    <div className="a4-page bg-white font-['Inter','system-ui',sans-serif] text-slate-700 leading-relaxed">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-slate-50 to-white border-b-2 border-slate-100 pb-8 mb-8">
        <div className="flex items-start justify-between">
          {/* Left: Name and Title */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-slate-900 mb-2 tracking-tight">
              {getData("header", "Full Name") || "Your Name"}
            </h1>
            <p className="text-xl text-slate-600 font-medium mb-6 tracking-wide">
              {getData("header", "Professional Title") || "Professional Title"}
            </p>
            
            {/* Contact Information Grid */}
            <div className="grid grid-cols-2 gap-4 max-w-2xl">
              {renderContactItem(Phone, getData("header", "Phone Number"))}
              {renderContactItem(Mail, getData("header", "Email Address"), 'link')}
              {renderContactItem(MapPin, getData("header", "Location (City, Country)"))}
              {renderContactItem(Linkedin, getData("header", "LinkedIn Profile"), 'link')}
              {getData("header", "Github") && renderContactItem(Github, getData("header", "Github"), 'link')}
              {(getData("header", "Portfolio / Content Link") || getData("header", "Instagram / YouTube Handle")) && 
                renderContactItem(Globe, getData("header", "Portfolio / Content Link") || getData("header", "Instagram / YouTube Handle"), 'link')}
            </div>
          </div>

          {/* Right: Profile Photo */}
          {getData("header", "Profile Photo") && (
            <div className="ml-8 flex-shrink-0">
              <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-lg ring-4 ring-white">
                <img
                  src={getData("header", "Profile Photo")}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-3 gap-8">
        {/* Left Column - Main Content */}
        <div className="col-span-2 space-y-8">
          
          {/* Professional Summary */}
          {getData("summary", "Summary") && (
            renderSection("Professional Summary", (
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <p className="text-slate-700 leading-relaxed text-justify whitespace-pre-line">
                  {getData("summary", "Summary")}
                </p>
              </div>
            ))
          )}

          {/* Work Experience */}
          {getArrayData("work").length > 0 && (
            renderSection("Professional Experience", (
              <div className="space-y-6">
                {getArrayData("work").map((work, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-slate-200 hover:border-slate-400 transition-colors group">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-white border-2 border-slate-300 rounded-full group-hover:border-slate-500 transition-colors"></div>
                    
                    <div className="bg-white rounded-lg p-5 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="text-lg font-bold text-slate-900">
                            {work["Job Title"] || work["Role"] || work["Position"]}
                          </h3>
                          <p className="text-slate-600 font-medium">
                            {work["Company Name"] || work["Company / Client"] || work["Organization / Firm"]}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center text-slate-500 text-sm">
                            <Calendar className="w-4 h-4 mr-1" />
                            {work["Duration"]}
                          </div>
                        </div>
                      </div>
                      
                      {(work["Responsibilities & Achievements"] || work["Duties"] || work["Responsibilities & Legal Work"]) && (
                        <div className="prose prose-sm max-w-none">
                          <div className="text-slate-700 whitespace-pre-line leading-relaxed">
                            {work["Responsibilities & Achievements"] || work["Duties"] || work["Responsibilities & Legal Work"]}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ))
          )}

          {/* Projects */}
          {getArrayData("projects").length > 0 && (
            renderSection("Featured Projects", (
              <div className="grid gap-6">
                {getArrayData("projects").map((project, index) => (
                  <div key={index} className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-6 border border-slate-200 hover:border-slate-300 transition-all hover:shadow-lg group">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-slate-700 transition-colors">
                        {project["Project Title"] || project["Project/Campaign Name"] || project["Title"]}
                      </h3>
                      <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-slate-600 transition-colors" />
                    </div>
                    
                    <div className="space-y-3">
                      {project["Tools Used"] && (
                        <div>
                          <span className="text-sm font-semibold text-slate-600">Technologies: </span>
                          <span className="text-sm text-slate-700">{project["Tools Used"] || project["Tools/Technologies Used"]}</span>
                        </div>
                      )}
                      
                      {project["Description"] && (
                        <p className="text-slate-700 leading-relaxed">
                          {project["Description"]}
                        </p>
                      )}
                      
                      {project["Your Contribution"] && (
                        <div>
                          <span className="text-sm font-semibold text-slate-600">Contribution: </span>
                          <span className="text-slate-700">{project["Your Contribution"]}</span>
                        </div>
                      )}
                      
                      {/* Additional project fields based on career */}
                      {project["Goal / Audience"] && (
                        <div>
                          <span className="text-sm font-semibold text-slate-600">Target: </span>
                          <span className="text-slate-700">{project["Goal / Audience"]}</span>
                        </div>
                      )}
                      
                      {project["Result / Metrics"] && (
                        <div>
                          <span className="text-sm font-semibold text-slate-600">Results: </span>
                          <span className="text-slate-700">{project["Result / Metrics"]}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ))
          )}

          {/* Legal Publications (for Law career) */}
          {getArrayData("publications").length > 0 && (
            renderSection("Publications & Writing", (
              <div className="space-y-4">
                {getArrayData("publications").map((pub, index) => (
                  <div key={index} className="bg-white rounded-lg p-5 border border-slate-200 hover:border-slate-300 transition-all">
                    <h3 className="font-bold text-slate-900 mb-2">
                      {pub["Article / Blog Title"]}
                    </h3>
                    {pub["Platform (if published)"] && (
                      <p className="text-slate-600 text-sm mb-2">
                        Published on: {pub["Platform (if published)"]}
                      </p>
                    )}
                    {pub["Brief Summary"] && (
                      <p className="text-slate-700 text-sm">
                        {pub["Brief Summary"]}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            ))
          )}
        </div>

        {/* Right Column - Sidebar */}
        <div className="space-y-8">
          
          {/* Education */}
          {(getData("education", "Degree Name") || getArrayData("education").length > 0) && (
            renderSection("Education", (
              <div className="space-y-4">
                {/* Handle single education object */}
                {getData("education", "Degree Name") && !Array.isArray(resumeData.education) && (
                  <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                    <h3 className="font-bold text-slate-900 text-sm mb-1">
                      {getData("education", "Degree Name")}
                    </h3>
                    <p className="text-slate-600 text-sm mb-2">
                      {getData("education", "Institution Name")}
                    </p>
                    <div className="flex justify-between items-center text-xs text-slate-500">
                      <span>{getData("education", "Duration") || getData("education", "Duration (Start – End or 'Present')")}</span>
                      <span>{getData("education", "CGPA or Percentage")}</span>
                    </div>
                  </div>
                )}
                
                {/* Handle multiple education objects */}
                {getArrayData("education").map((edu, index) => (
                  <div key={index} className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                    <h3 className="font-bold text-slate-900 text-sm mb-1">
                      {edu["Degree Name"] || edu["Degree / Course Name"]}
                    </h3>
                    <p className="text-slate-600 text-sm mb-2">
                      {edu["Institution Name"]}
                    </p>
                    <div className="flex justify-between items-center text-xs text-slate-500">
                      <span>{edu["Duration"] || edu["Duration (Start – End or 'Present')"]}</span>
                      <span>{edu["CGPA or Percentage"] || edu["CGPA / Percentage"]}</span>
                    </div>
                  </div>
                ))}
                
                {/* Schooling Information */}
                {(getData("education", "10th Grade School Name & Percentage") || getData("schooling", "10th School Name")) && (
                  <div className="mt-4 pt-4 border-t border-slate-200">
                    <h4 className="font-semibold text-slate-800 text-sm mb-3">Academic Background</h4>
                    <div className="space-y-2">
                      {(getData("education", "12th Grade School Name & Percentage") || getData("schooling", "12th School Name")) && (
                        <div className="text-sm">
                          <span className="text-slate-600">12th: </span>
                          <span className="text-slate-700">
                            {getData("education", "12th Grade School Name & Percentage") || 
                             `${getData("schooling", "12th School Name")} (${getData("schooling", "12th Percentage")})`}
                          </span>
                        </div>
                      )}
                      {(getData("education", "10th Grade School Name & Percentage") || getData("schooling", "10th School Name")) && (
                        <div className="text-sm">
                          <span className="text-slate-600">10th: </span>
                          <span className="text-slate-700">
                            {getData("education", "10th Grade School Name & Percentage") || 
                             `${getData("schooling", "10th School Name")} (${getData("schooling", "10th Percentage")})`}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))
          )}

          {/* Technical Skills */}
          {getArrayData("techSkills").length > 0 && (
            renderSection("Technical Skills", (
              <div className="space-y-3">
                {getArrayData("techSkills").map((skill, index) => (
                  <div key={index} className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-lg p-3 border border-slate-200">
                    <span className="text-sm font-medium text-slate-800">
                      {skill["Technical Skills"] || skill["Skill"] || skill["Technical Skill"]}
                    </span>
                  </div>
                ))}
              </div>
            ))
          )}

          {/* Core Skills (Career specific) */}
          {getArrayData("coreLegalSkills").length > 0 && (
            renderSection("Legal Skills", (
              <div className="space-y-2">
                {getArrayData("coreLegalSkills").map((skill, index) => (
                  <div key={index} className="bg-gradient-to-r from-amber-50 to-slate-50 rounded-lg p-3 border border-slate-200">
                    <span className="text-sm font-medium text-slate-800">
                      {skill["Core Legal Skill"]}
                    </span>
                  </div>
                ))}
              </div>
            ))
          )}

          {getArrayData("coreSalesSkills").length > 0 && (
            renderSection("Sales Skills", (
              <div className="space-y-2">
                {getArrayData("coreSalesSkills").map((skill, index) => (
                  <div key={index} className="bg-gradient-to-r from-green-50 to-slate-50 rounded-lg p-3 border border-slate-200">
                    <span className="text-sm font-medium text-slate-800">
                      {skill["Core Sales Skills"]}
                    </span>
                  </div>
                ))}
              </div>
            ))
          )}

          {getArrayData("coreMedicalSkills").length > 0 && (
            renderSection("Medical Skills", (
              <div className="space-y-2">
                {getArrayData("coreMedicalSkills").map((skill, index) => (
                  <div key={index} className="bg-gradient-to-r from-red-50 to-slate-50 rounded-lg p-3 border border-slate-200">
                    <span className="text-sm font-medium text-slate-800">
                      {skill["Skill"]}
                    </span>
                  </div>
                ))}
              </div>
            ))
          )}

          {/* Soft Skills */}
          {getArrayData("softSkills").length > 0 && (
            renderSection("Soft Skills", (
              <div className="grid grid-cols-1 gap-2">
                {getArrayData("softSkills").map((skill, index) => (
                  <div key={index} className="bg-gradient-to-r from-purple-50 to-slate-50 rounded-lg p-2 border border-slate-200">
                    <span className="text-sm font-medium text-slate-800">
                      {skill["Soft Skills"] || skill["Soft Skill"] || skill["Skill"]}
                    </span>
                  </div>
                ))}
              </div>
            ))
          )}

          {/* Certifications */}
          {getArrayData("certifications").length > 0 && (
            renderSection("Certifications", (
              <div className="space-y-3">
                {getArrayData("certifications").map((cert, index) => (
                  <div key={index} className="bg-white rounded-lg p-3 border border-slate-200 hover:border-slate-300 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-900 text-sm mb-1">
                          {cert["Course/Certification Name"] || cert["Certification Name"] || cert["Certification Title"]}
                        </h4>
                        <div className="flex items-center text-xs text-slate-500">
                          <Calendar className="w-3 h-3 mr-1" />
                          {cert["Date"] || cert["Year"]}
                        </div>
                      </div>
                      <Award className="w-4 h-4 text-slate-400 flex-shrink-0 ml-2" />
                    </div>
                  </div>
                ))}
              </div>
            ))
          )}

          {/* Languages */}
          {getArrayData("languages").length > 0 && (
            renderSection("Languages", (
              <div className="space-y-2">
                {getArrayData("languages").map((lang, index) => (
                  <div key={index} className="bg-slate-50 rounded-lg p-3 border border-slate-200">
                    <span className="text-sm font-medium text-slate-800">
                      {lang["Languages"] || lang["Language"]}
                    </span>
                  </div>
                ))}
              </div>
            ))
          )}

          {/* Achievements */}
          {getArrayData("achievements").length > 0 && (
            renderSection("Achievements", (
              <div className="space-y-3">
                {getArrayData("achievements").map((achievement, index) => (
                  <div key={index} className="bg-gradient-to-br from-yellow-50 to-slate-50 rounded-lg p-3 border border-slate-200">
                    <div className="flex items-start space-x-2">
                      <Award className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm text-slate-800">
                        {achievement["Achievements"] || achievement["Achievement"] || achievement["Title"]}
                        {achievement["Year"] && (
                          <span className="text-xs text-slate-500 block mt-1">
                            {achievement["Year"]}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))
          )}

          {/* Interests */}
          {getArrayData("interests").length > 0 && (
            renderSection("Interests", (
              <div className="flex flex-wrap gap-2">
                {getArrayData("interests").map((interest, index) => (
                  <div key={index} className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-full px-3 py-1 border border-indigo-200">
                    <span className="text-xs font-medium text-indigo-800">
                      {interest["Interests"] || interest["Interest"]}
                    </span>
                  </div>
                ))}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default DigitalMinimalistTemplate;