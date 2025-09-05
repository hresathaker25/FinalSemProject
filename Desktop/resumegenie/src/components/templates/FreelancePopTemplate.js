import React from "react";
import { ResumeFieldsConfig } from "../../pages/ResumeBuilder";

const FreelancePopTemplate = ({ resumeData, selectedCareer }) => {
  const config = ResumeFieldsConfig[selectedCareer] || [];
  
  // Helper function to safely get section data
  const getSectionData = (sectionKey) => {
    return resumeData[sectionKey] || {};
  };

  // Helper function to safely get multiple section data
  const getMultipleSectionData = (sectionKey) => {
    const data = resumeData[sectionKey];
    return Array.isArray(data) && data.length > 0 ? data : [];
  };

  // Helper function to check if a section has data
  const hasSectionData = (sectionKey) => {
    const section = config.find(s => s.sectionKey === sectionKey);
    if (!section) return false;
    
    if (section.multiple) {
      const data = getMultipleSectionData(sectionKey);
      return data.some(item => Object.values(item || {}).some(value => value && value.toString().trim()));
    } else {
      const data = getSectionData(sectionKey);
      return Object.values(data).some(value => value && value.toString().trim());
    }
  };

  // Get header data
  const headerData = getSectionData("header");
  const fullName = headerData["Full Name"] || "";
  const professionalTitle = headerData["Professional Title"] || "";
  const phoneNumber = headerData["Phone Number"] || "";
  const emailAddress = headerData["Email Address"] || "";
  const linkedinProfile = headerData["LinkedIn Profile"] || "";
  const githubProfile = headerData["Github"] || "";
  const portfolioLink = headerData["Portfolio / Content Link"] || "";
  const instagramHandle = headerData["Instagram / YouTube Handle"] || "";
  const location = headerData["Location (City, Country)"] || "";
  const profilePhoto = headerData["Profile Photo"] || "";

  // Render section with proper styling
  const renderSection = (sectionKey, title, customRender = null) => {
    if (!hasSectionData(sectionKey)) return null;

    const sectionConfig = config.find(s => s.sectionKey === sectionKey);
    if (!sectionConfig) return null;

    return (
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gradient-to-r from-purple-500 to-pink-500" 
            style={{ borderImage: 'linear-gradient(90deg, #8b5cf6, #ec4899) 1' }}>
          {title}
        </h2>
        {customRender ? customRender() : renderDefaultSection(sectionKey, sectionConfig)}
      </div>
    );
  };

  // Default section renderer
  const renderDefaultSection = (sectionKey, sectionConfig) => {
    if (sectionConfig.multiple) {
      const items = getMultipleSectionData(sectionKey);
      return (
        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={index} className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border-l-4 border-purple-400">
              {sectionConfig.fields.map((field) => {
                const value = item[field.label];
                if (!value || !value.toString().trim()) return null;
                
                return (
                  <div key={field.label} className="mb-2 last:mb-0">
                    <span className="font-semibold text-gray-700 text-sm uppercase tracking-wider">
                      {field.label}: 
                    </span>
                    <span className="text-gray-800 ml-2">
                      {field.type === "textarea" 
                        ? value.split('\n').map((line, i) => (
                            <div key={i} className={i > 0 ? "mt-1" : ""}>{line}</div>
                          ))
                        : value
                      }
                    </span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      );
    } else {
      const data = getSectionData(sectionKey);
      return (
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
          {sectionConfig.fields.map((field) => {
            const value = data[field.label];
            if (!value || !value.toString().trim()) return null;
            
            return (
              <div key={field.label} className="mb-3 last:mb-0">
                <div className="font-semibold text-gray-700 text-sm uppercase tracking-wider mb-1">
                  {field.label}
                </div>
                <div className="text-gray-800 leading-relaxed">
                  {field.type === "textarea" 
                    ? value.split('\n').map((line, i) => (
                        <div key={i} className={i > 0 ? "mt-1" : ""}>{line}</div>
                      ))
                    : value
                  }
                </div>
              </div>
            );
          })}
        </div>
      );
    }
  };

  // Custom renderers for specific sections
  const renderEducation = () => {
    const educationData = getSectionData("education");
    const schoolingData = getSectionData("schooling");
    
    return (
      <div className="space-y-4">
        {/* Higher Education */}
        {(educationData["Degree Name"] || educationData["Degree / Course Name"]) && (
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-4 rounded-lg border-l-4 border-indigo-400">
            <div className="font-bold text-lg text-gray-800">
              {educationData["Degree Name"] || educationData["Degree / Course Name"]}
            </div>
            <div className="font-semibold text-purple-600 mt-1">
              {educationData["Institution Name"]}
            </div>
            <div className="text-gray-600 mt-1">
              {educationData["Duration"] || educationData["Duration (Start – End or 'Present')"]}
            </div>
            {(educationData["CGPA or Percentage"] || educationData["CGPA / Percentage"]) && (
              <div className="text-gray-700 mt-1 font-medium">
                Score: {educationData["CGPA or Percentage"] || educationData["CGPA / Percentage"]}
              </div>
            )}
          </div>
        )}
        
        {/* Schooling */}
        {(educationData["10th Grade School Name & Percentage"] || schoolingData["10th School Name"]) && (
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-r from-green-50 to-teal-50 p-3 rounded-lg border-l-4 border-green-400">
              <div className="font-semibold text-gray-700 text-sm">10th Grade</div>
              <div className="text-gray-800">
                {schoolingData["10th School Name"] || "School Name"}
              </div>
              <div className="text-gray-600">
                {schoolingData["10th Percentage"] || educationData["10th Grade School Name & Percentage"]}
              </div>
            </div>
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-3 rounded-lg border-l-4 border-yellow-400">
              <div className="font-semibold text-gray-700 text-sm">12th Grade</div>
              <div className="text-gray-800">
                {schoolingData["12th School Name"] || "School Name"}
              </div>
              <div className="text-gray-600">
                {schoolingData["12th Percentage"] || educationData["12th Grade School Name & Percentage"]}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderSkills = () => {
    const techSkills = getMultipleSectionData("techSkills");
    const softSkills = getMultipleSectionData("softSkills");
    const coreSkills = getMultipleSectionData("coreSalesSkills") || 
                     getMultipleSectionData("coreLegalSkills") || 
                     getMultipleSectionData("coreMedicalSkills") ||
                     getMultipleSectionData("skills");
    const otherSkills = getMultipleSectionData("otherSkills");
    const labSkills = getMultipleSectionData("labSkills");
    const tools = getMultipleSectionData("tools");

    return (
      <div className="grid md:grid-cols-2 gap-6">
        {/* Technical Skills */}
        {techSkills.length > 0 && (
          <div>
            <h3 className="font-semibold text-purple-600 mb-3 text-lg">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {techSkills.map((skill, index) => {
                const skillText = skill["Technical Skills"] || skill["Skill"] || skill["Technical Skill"];
                return skillText ? (
                  <span key={index} className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {skillText}
                  </span>
                ) : null;
              })}
            </div>
          </div>
        )}

        {/* Core Skills */}
        {coreSkills.length > 0 && (
          <div>
            <h3 className="font-semibold text-blue-600 mb-3 text-lg">Core Skills</h3>
            <div className="flex flex-wrap gap-2">
              {coreSkills.map((skill, index) => {
                const skillText = skill["Core Sales Skills"] || skill["Core Legal Skill"] || skill["Skill"] || skill["Core Sales Skill"];
                return skillText ? (
                  <span key={index} className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {skillText}
                  </span>
                ) : null;
              })}
            </div>
          </div>
        )}

        {/* Soft Skills */}
        {softSkills.length > 0 && (
          <div>
            <h3 className="font-semibold text-green-600 mb-3 text-lg">Soft Skills</h3>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill, index) => {
                const skillText = skill["Soft Skills"] || skill["Soft Skill"] || skill["Skill"];
                return skillText ? (
                  <span key={index} className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {skillText}
                  </span>
                ) : null;
              })}
            </div>
          </div>
        )}

        {/* Tools & Other Skills */}
        {(otherSkills.length > 0 || tools.length > 0 || labSkills.length > 0) && (
          <div>
            <h3 className="font-semibold text-orange-600 mb-3 text-lg">Tools & Software</h3>
            <div className="flex flex-wrap gap-2">
              {[...otherSkills, ...tools, ...labSkills].map((skill, index) => {
                const skillText = skill["Tools/Softwares"] || skill["Tools / Software"] || skill["Tool/Software"] || skill["Skill"];
                return skillText ? (
                  <span key={index} className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {skillText}
                  </span>
                ) : null;
              })}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="a4-page bg-white min-h-[297mm] w-full max-w-[210mm] mx-auto shadow-lg">
      {/* Header Section with Gradient Background */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white p-8 rounded-t-lg">
        <div className="flex items-start gap-6">
          {/* Profile Photo */}
          {profilePhoto && (
            <div className="flex-shrink-0">
              <img 
                src={profilePhoto} 
                alt="Profile" 
                className="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover"
              />
            </div>
          )}
          
          {/* Header Info */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2 text-white">
              {fullName || "Your Name"}
            </h1>
            {professionalTitle && (
              <h2 className="text-xl text-purple-100 mb-4 font-medium">
                {professionalTitle}
              </h2>
            )}
            
            {/* Contact Information */}
            <div className="grid md:grid-cols-2 gap-2 text-sm text-purple-100">
              {phoneNumber && (
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4">📱</span>
                  <span>{phoneNumber}</span>
                </div>
              )}
              {emailAddress && (
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4">✉️</span>
                  <span className="break-all">{emailAddress}</span>
                </div>
              )}
              {location && (
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4">📍</span>
                  <span>{location}</span>
                </div>
              )}
              {linkedinProfile && (
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4">💼</span>
                  <span className="break-all">{linkedinProfile}</span>
                </div>
              )}
              {githubProfile && (
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4">🔗</span>
                  <span className="break-all">{githubProfile}</span>
                </div>
              )}
              {portfolioLink && (
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4">🎨</span>
                  <span className="break-all">{portfolioLink}</span>
                </div>
              )}
              {instagramHandle && (
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4">📷</span>
                  <span className="break-all">{instagramHandle}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8 space-y-8">
        {/* Summary */}
        {renderSection("summary", "Professional Summary", () => {
          const summaryData = getSectionData("summary");
          const summary = summaryData["Summary"];
          if (!summary) return null;
          
          return (
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border-l-4 border-blue-400">
              <p className="text-gray-800 leading-relaxed text-justify">
                {summary.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < summary.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
          );
        })}

        {/* Education */}
        {(hasSectionData("education") || hasSectionData("schooling")) && (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gradient-to-r from-purple-500 to-pink-500" 
                style={{ borderImage: 'linear-gradient(90deg, #8b5cf6, #ec4899) 1' }}>
              Education
            </h2>
            {renderEducation()}
          </div>
        )}

        {/* Work Experience */}
        {renderSection("work", "Work Experience", () => {
          const workData = getMultipleSectionData("work");
          const experienceData = getMultipleSectionData("experience");
          const internshipData = getMultipleSectionData("internships");
          const workExperienceData = getMultipleSectionData("workExperience");
          
          const allWork = [...workData, ...experienceData, ...internshipData, ...workExperienceData];
          
          return (
            <div className="space-y-4">
              {allWork.map((work, index) => {
                const jobTitle = work["Job Title"] || work["Role"] || work["Position"];
                const company = work["Company Name"] || work["Company / Client"] || work["Organization / Firm"] || work["Hospital / Clinic Name"];
                const duration = work["Duration"];
                const responsibilities = work["Responsibilities & Achievements"] || work["Responsibilities"] || work["Duties"] || work["Key Responsibilities"] || work["Responsibilities & Legal Work"];
                const departments = work["Departments Rotated"];
                
                if (!jobTitle && !company) return null;
                
                return (
                  <div key={index} className="bg-gradient-to-r from-indigo-50 to-purple-50 p-5 rounded-lg border-l-4 border-indigo-400">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-bold text-lg text-gray-800">{jobTitle}</h3>
                        <p className="font-semibold text-purple-600">{company}</p>
                        {departments && (
                          <p className="text-sm text-gray-600 mt-1">
                            <span className="font-medium">Departments:</span> {departments}
                          </p>
                        )}
                      </div>
                      {duration && (
                        <span className="text-sm text-gray-600 bg-white px-3 py-1 rounded-full border">
                          {duration}
                        </span>
                      )}
                    </div>
                    {responsibilities && (
                      <div className="text-gray-800 mt-3">
                        {responsibilities.split('\n').map((line, i) => (
                          <div key={i} className={`${i > 0 ? "mt-1" : ""} ${line.trim().startsWith('•') || line.trim().startsWith('-') ? '' : '• '}${line.trim()}`}>
                            {!line.trim().startsWith('•') && !line.trim().startsWith('-') && '• '}{line.trim()}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}

        {/* Projects */}
        {renderSection("projects", "Projects", () => {
          const projectsData = getMultipleSectionData("projects");
          
          return (
            <div className="space-y-4">
              {projectsData.map((project, index) => {
                const title = project["Project Title"] || project["Project/Campaign Name"] || project["Title"];
                const tools = project["Tools Used"] || project["Tools/Technologies Used"] || project["Platform Used"];
                const description = project["Description"] || project["Summary & Objective"];
                const contribution = project["Your Contribution"];
                const goal = project["Goal / Audience"];
                const result = project["Result / Metrics"] || project["Key Insights / Results"] || project["Findings"];
                const topic = project["Topic / Area of Law"];
                const role = project["Year / Role"];
                const projectType = project["Project Type"];
                
                if (!title) return null;
                
                return (
                  <div key={index} className="bg-gradient-to-r from-green-50 to-teal-50 p-5 rounded-lg border-l-4 border-green-400">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg text-gray-800">{title}</h3>
                      {(role || projectType) && (
                        <span className="text-sm text-gray-600 bg-white px-3 py-1 rounded-full border">
                          {role || projectType}
                        </span>
                      )}
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      {tools && (
                        <div>
                          <span className="font-semibold text-gray-700">Tools/Technologies:</span>
                          <span className="text-gray-800 ml-2">{tools}</span>
                        </div>
                      )}
                      {topic && (
                        <div>
                          <span className="font-semibold text-gray-700">Area:</span>
                          <span className="text-gray-800 ml-2">{topic}</span>
                        </div>
                      )}
                      {goal && (
                        <div>
                          <span className="font-semibold text-gray-700">Goal/Audience:</span>
                          <span className="text-gray-800 ml-2">{goal}</span>
                        </div>
                      )}
                    </div>
                    
                    {description && (
                      <div className="mt-3">
                        <span className="font-semibold text-gray-700 text-sm">Description:</span>
                        <p className="text-gray-800 mt-1">
                          {description.split('\n').map((line, i) => (
                            <span key={i}>
                              {line}
                              {i < description.split('\n').length - 1 && <br />}
                            </span>
                          ))}
                        </p>
                      </div>
                    )}
                    
                    {contribution && (
                      <div className="mt-3">
                        <span className="font-semibold text-gray-700 text-sm">Contribution:</span>
                        <p className="text-gray-800 mt-1">
                          {contribution.split('\n').map((line, i) => (
                            <span key={i}>
                              {line}
                              {i < contribution.split('\n').length - 1 && <br />}
                            </span>
                          ))}
                        </p>
                      </div>
                    )}
                    
                    {result && (
                      <div className="mt-3">
                        <span className="font-semibold text-gray-700 text-sm">Results/Impact:</span>
                        <p className="text-gray-800 mt-1 font-medium">
                          {result.split('\n').map((line, i) => (
                            <span key={i}>
                              {line}
                              {i < result.split('\n').length - 1 && <br />}
                            </span>
                          ))}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}

        {/* Skills Section */}
        {(hasSectionData("techSkills") || hasSectionData("softSkills") || hasSectionData("coreSalesSkills") || 
          hasSectionData("coreLegalSkills") || hasSectionData("coreMedicalSkills") || hasSectionData("skills") ||
          hasSectionData("otherSkills") || hasSectionData("tools") || hasSectionData("labSkills")) && (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gradient-to-r from-purple-500 to-pink-500" 
                style={{ borderImage: 'linear-gradient(90deg, #8b5cf6, #ec4899) 1' }}>
              Skills
            </h2>
            {renderSkills()}
          </div>
        )}

        {/* Publications */}
        {renderSection("publications", "Publications & Writing")}

        {/* Certifications */}
        {renderSection("certifications", "Certifications")}

        {/* Achievements */}
        {renderSection("achievements", "Achievements & Awards")}

        {/* Activities */}
        {renderSection("activities", "Extracurricular Activities", () => {
          const activitiesData = getMultipleSectionData("activities");
          const extracurricularData = getMultipleSectionData("extracurricular");
          
          const allActivities = [...activitiesData, ...extracurricularData];
          
          return (
            <div className="grid md:grid-cols-2 gap-4">
              {allActivities.map((activity, index) => {
                const title = activity["Activities"] || activity["Activity"] || activity["Activity Title"];
                const description = activity["Description"];
                const year = activity["Year"];
                
                if (!title) return null;
                
                return (
                  <div key={index} className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg border-l-4 border-yellow-400">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-semibold text-gray-800">{title}</h4>
                      {year && (
                        <span className="text-xs text-gray-600 bg-white px-2 py-1 rounded border">
                          {year}
                        </span>
                      )}
                    </div>
                    {description && (
                      <p className="text-sm text-gray-700 mt-2">{description}</p>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}

        {/* Languages & Interests */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Languages */}
          {hasSectionData("languages") && (
            <div>
              <h3 className="font-semibold text-purple-600 mb-3 text-lg">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {getMultipleSectionData("languages").map((lang, index) => {
                  const language = lang["Languages"] || lang["Language"];
                  return language ? (
                    <span key={index} className="bg-gradient-to-r from-purple-400 to-pink-400 text-white px-3 py-1 rounded-full text-sm">
                      {language}
                    </span>
                  ) : null;
                })}
              </div>
            </div>
          )}

          {/* Interests */}
          {hasSectionData("interests") && (
            <div>
              <h3 className="font-semibold text-blue-600 mb-3 text-lg">Interests & Hobbies</h3>
              <div className="flex flex-wrap gap-2">
                {getMultipleSectionData("interests").map((interest, index) => {
                  const hobby = interest["Interests"] || interest["Interest"];
                  return hobby ? (
                    <span key={index} className="bg-gradient-to-r from-blue-400 to-indigo-400 text-white px-3 py-1 rounded-full text-sm">
                      {hobby}
                    </span>
                  ) : null;
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FreelancePopTemplate;