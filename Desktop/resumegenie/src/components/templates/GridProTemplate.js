import React from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github,
  Calendar,
  Award,
  BookOpen,
  Briefcase,
  Code,
  Star,
  Users,
  Target,
  Globe
} from "lucide-react";

const GridProTemplate = ({ resumeData, selectedCareer }) => {
  const renderSection = (sectionKey, title, icon) => {
    const data = resumeData[sectionKey];
    if (!data) return null;

    // Handle array data (multiple items)
    if (Array.isArray(data)) {
      const filteredData = data.filter(item => 
        item && Object.values(item).some(value => value && value.toString().trim())
      );
      
      if (filteredData.length === 0) return null;

      return (
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3 pb-2 border-b-2 border-blue-600">
            {icon}
            <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wide">
              {title}
            </h2>
          </div>
          <div className="space-y-4">
            {filteredData.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 border-l-4 border-blue-500">
                {renderItemContent(item, sectionKey)}
              </div>
            ))}
          </div>
        </div>
      );
    }

    // Handle object data (single items)
    if (typeof data === 'object') {
      const hasContent = Object.values(data).some(value => 
        value && value.toString().trim()
      );
      
      if (!hasContent) return null;

      return (
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3 pb-2 border-b-2 border-blue-600">
            {icon}
            <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wide">
              {title}
            </h2>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-blue-500">
            {renderItemContent(data, sectionKey)}
          </div>
        </div>
      );
    }

    return null;
  };

  const renderItemContent = (item, sectionKey) => {
    if (!item) return null;

    switch (sectionKey) {
      case "education":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              {item["Degree Name"] && (
                <h3 className="font-semibold text-gray-800 text-base">
                  {item["Degree Name"]}
                </h3>
              )}
              {item["Institution Name"] && (
                <p className="text-blue-600 font-medium">
                  {item["Institution Name"]}
                </p>
              )}
              {item["10th Grade School Name & Percentage"] && (
                <p className="text-sm text-gray-600 mt-1">
                  10th: {item["10th Grade School Name & Percentage"]}
                </p>
              )}
            </div>
            <div className="text-right md:text-left">
              {item["Duration"] && (
                <p className="text-gray-600 font-medium flex items-center gap-1 justify-end md:justify-start">
                  <Calendar className="w-4 h-4" />
                  {item["Duration"]}
                </p>
              )}
              {item["CGPA or Percentage"] && (
                <p className="text-sm text-gray-600 mt-1">
                  Score: {item["CGPA or Percentage"]}
                </p>
              )}
              {item["12th Grade School Name & Percentage"] && (
                <p className="text-sm text-gray-600">
                  12th: {item["12th Grade School Name & Percentage"]}
                </p>
              )}
            </div>
          </div>
        );

      case "work":
    return (
          <div>
            <div className="flex flex-wrap justify-between items-start mb-2">
              <div>
                {(item["Job Title"] || item["Role"] || item["Position"]) && (
                  <h3 className="font-semibold text-gray-800 text-base">
                    {item["Job Title"] || item["Role"] || item["Position"]}
                  </h3>
                )}
                {(item["Company Name"] || item["Organization / Firm"] || item["Company / Client"]) && (
                  <p className="text-blue-600 font-medium">
                    {item["Company Name"] || item["Organization / Firm"] || item["Company / Client"]}
                  </p>
                )}
              </div>
              {item["Duration"] && (
                <p className="text-gray-600 font-medium flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {item["Duration"]}
                </p>
              )}
            </div>
            {(item["Responsibilities & Achievements"] || item["Responsibilities & Legal Work"] || item["Responsibilities"] || item["Duties"]) && (
              <div className="mt-3">
                <div className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                  {item["Responsibilities & Achievements"] || 
                   item["Responsibilities & Legal Work"] || 
                   item["Responsibilities"] || 
                   item["Duties"]}
                </div>
          </div>
        )}
          </div>
        );

      case "projects":
        return (
          <div>
            <div className="flex flex-wrap justify-between items-start mb-2">
              <div className="flex-1">
                {(item["Project Title"] || item["Project/Campaign Name"] || item["Title"]) && (
                  <h3 className="font-semibold text-gray-800 text-base">
                    {item["Project Title"] || item["Project/Campaign Name"] || item["Title"]}
                  </h3>
                )}
                {(item["Tools Used"] || item["Tools/Technologies Used"] || item["Platform Used"]) && (
                  <p className="text-blue-600 font-medium text-sm">
                    {item["Tools Used"] || item["Tools/Technologies Used"] || item["Platform Used"]}
                  </p>
                )}
              </div>
              {(item["Year / Role"] || item["Goal / Audience"]) && (
                <p className="text-gray-600 font-medium text-sm">
                  {item["Year / Role"] || item["Goal / Audience"]}
                </p>
              )}
            </div>
            <div className="mt-2 space-y-2">
              {item["Description"] && (
                <div className="text-gray-700 text-sm leading-relaxed">
                  {item["Description"]}
                </div>
              )}
              {item["Your Contribution"] && (
                <div className="text-gray-700 text-sm leading-relaxed">
                  <span className="font-medium">Contribution:</span> {item["Your Contribution"]}
                </div>
              )}
              {(item["Result / Metrics"] || item["Key Insights / Results"]) && (
                <div className="text-green-700 text-sm font-medium">
                  <span className="text-gray-700">Results:</span> {item["Result / Metrics"] || item["Key Insights / Results"]}
                </div>
              )}
        </div>
      </div>
    );

      case "summary":
        return (
          <div className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
            {item["Summary"]}
          </div>
        );

      case "certifications":
    return (
          <div className="flex justify-between items-center">
            <div>
              {item["Course/Certification Name"] && (
                <h3 className="font-semibold text-gray-800">
                  {item["Course/Certification Name"]}
                </h3>
              )}
          </div>
            {(item["Date"] || item["Year"]) && (
              <p className="text-gray-600 font-medium text-sm flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {item["Date"] || item["Year"]}
              </p>
            )}
      </div>
    );

      default:
        // Generic rendering for other sections
        return (
          <div className="space-y-2">
            {Object.entries(item).map(([key, value]) => {
              if (!value || !value.toString().trim()) return null;
              
              if (key.toLowerCase().includes('name') || key.toLowerCase().includes('title')) {
                return (
                  <h3 key={key} className="font-semibold text-gray-800">
                    {value}
                  </h3>
                );
              }
              
              if (key.toLowerCase().includes('date') || key.toLowerCase().includes('duration') || key.toLowerCase().includes('year')) {
                return (
                  <p key={key} className="text-gray-600 font-medium text-sm flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {value}
                  </p>
                );
              }
              
              return (
                <div key={key} className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                  {value}
                </div>
              );
            })}
          </div>
        );
    }
  };

  const renderSkillsGrid = (skills, columns = 2) => {
    if (!skills || !Array.isArray(skills)) return null;
    
    const filteredSkills = skills.filter(skill => 
      skill && Object.values(skill).some(value => value && value.toString().trim())
    );
    
    if (filteredSkills.length === 0) return null;
          
          return (
      <div className={`grid grid-cols-1 ${columns === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'} gap-3`}>
        {filteredSkills.map((skill, index) => {
          const skillValue = Object.values(skill).find(value => value && value.toString().trim());
          return (
            <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg px-3 py-2">
              <span className="text-blue-800 font-medium text-sm">{skillValue}</span>
            </div>
          );
        })}
      </div>
    );
  };
  
  const headerData = resumeData.header || {};
  const profilePhoto = headerData["Profile Photo"];
    
    return (
    <div className="a4-page bg-white text-gray-900 grid-pro-template">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 -m-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
          {/* Profile Photo */}
          <div className="flex justify-center md:justify-start">
            {profilePhoto ? (
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img 
                  src={profilePhoto} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
        </div>
            ) : (
              <div className="w-24 h-24 rounded-full bg-white/20 border-4 border-white flex items-center justify-center">
                <span className="text-white/60 text-sm">Photo</span>
          </div>
        )}
      </div>

          {/* Name and Title */}
          <div className="md:col-span-2 text-center md:text-left">
            {headerData["Full Name"] && (
              <h1 className="text-3xl font-bold mb-1 tracking-tight">
                {headerData["Full Name"]}
              </h1>
            )}
            {headerData["Professional Title"] && (
              <p className="text-blue-100 text-lg font-medium">
                {headerData["Professional Title"]}
              </p>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-2 text-center md:text-right">
            {headerData["Phone Number"] && (
              <div className="flex items-center gap-2 justify-center md:justify-end">
                <Phone className="w-4 h-4" />
                <span className="text-sm">{headerData["Phone Number"]}</span>
              </div>
            )}
            {headerData["Email Address"] && (
              <div className="flex items-center gap-2 justify-center md:justify-end">
                <Mail className="w-4 h-4" />
                <span className="text-sm">{headerData["Email Address"]}</span>
              </div>
            )}
            {headerData["Location (City, Country)"] && (
              <div className="flex items-center gap-2 justify-center md:justify-end">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{headerData["Location (City, Country)"]}</span>
              </div>
            )}
            <div className="flex gap-3 justify-center md:justify-end mt-2">
              {headerData["LinkedIn Profile"] && (
                <div className="flex items-center gap-1">
                  <Linkedin className="w-4 h-4" />
                  <span className="text-xs">LinkedIn</span>
                </div>
              )}
              {headerData["Github"] && (
                <div className="flex items-center gap-1">
                  <Github className="w-4 h-4" />
                  <span className="text-xs">GitHub</span>
        </div>
              )}
      </div>
        </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Professional Summary */}
          {renderSection("summary", "Professional Summary", <Target className="w-5 h-5 text-blue-600" />)}

          {/* Work Experience */}
          {renderSection("work", "Experience", <Briefcase className="w-5 h-5 text-blue-600" />)}

          {/* Projects */}
          {renderSection("projects", "Projects", <Code className="w-5 h-5 text-blue-600" />)}

          {/* Education */}
          {renderSection("education", "Education", <BookOpen className="w-5 h-5 text-blue-600" />)}

          {/* Career-specific sections */}
          {selectedCareer === "Law" && (
            <>
              {renderSection("publications", "Legal Writing", <BookOpen className="w-5 h-5 text-blue-600" />)}
            </>
          )}

          {selectedCareer === "Medical" && (
            <>
              {renderSection("experience", "Clinical Experience", <Briefcase className="w-5 h-5 text-blue-600" />)}
            </>
          )}

          {selectedCareer === "Educational" && (
            <>
              {renderSection("internships", "Teaching Practice", <Users className="w-5 h-5 text-blue-600" />)}
              {renderSection("schooling", "Academic Background", <BookOpen className="w-5 h-5 text-blue-600" />)}
            </>
          )}

          {selectedCareer === "Finance" && (
            <>
              {renderSection("workExperience", "Work Experience", <Briefcase className="w-5 h-5 text-blue-600" />)}
            </>
                )}
              </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Skills Section */}
          <div className="bg-gray-50 rounded-lg p-4">
            {/* Technical Skills */}
            {(resumeData.techSkills || resumeData.skills || resumeData.coreLegalSkills || resumeData.coreMedicalSkills || resumeData.teachingSkills || resumeData.coreSalesSkills) && (
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Star className="w-5 h-5 text-blue-600" />
                  <h3 className="font-bold text-gray-800 uppercase tracking-wide">
                    {selectedCareer === "Law" ? "Legal Skills" :
                     selectedCareer === "Medical" ? "Medical Skills" :
                     selectedCareer === "Educational" ? "Teaching Skills" :
                     selectedCareer === "Sales" ? "Sales Skills" :
                     "Technical Skills"}
                  </h3>
                </div>
                {renderSkillsGrid(
                  resumeData.techSkills || 
                  resumeData.skills || 
                  resumeData.coreLegalSkills || 
                  resumeData.coreMedicalSkills || 
                  resumeData.coreSalesSkills ||
                  (resumeData.teachingSkills ? [
                    {skill: resumeData.teachingSkills["Core Teaching Skills"]},
                    {skill: resumeData.teachingSkills["Digital Tools"]}
                  ].filter(item => item.skill) : [])
                )}
            </div>
            )}

            {/* Other Skills */}
            {(resumeData.softSkills || resumeData.otherSkills || resumeData.labSkills) && (
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Users className="w-5 h-5 text-blue-600" />
                  <h3 className="font-bold text-gray-800 uppercase tracking-wide">
                    {resumeData.labSkills ? "Lab Skills" : "Soft Skills"}
                  </h3>
                </div>
                {renderSkillsGrid(
                  resumeData.softSkills || 
                  resumeData.otherSkills || 
                  resumeData.labSkills ||
                  (resumeData.teachingSkills ? [
                    {skill: resumeData.teachingSkills["Soft Skills"]}
                  ].filter(item => item.skill) : [])
                )}
              </div>
            )}

            {/* Tools Section for specific careers */}
            {resumeData.tools && (
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Code className="w-5 h-5 text-blue-600" />
                  <h3 className="font-bold text-gray-800 uppercase tracking-wide">Tools</h3>
                </div>
                {renderSkillsGrid(resumeData.tools, 1)}
              </div>
            )}
          </div>

          {/* Certifications */}
          {resumeData.certifications && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-5 h-5 text-blue-600" />
                <h3 className="font-bold text-gray-800 uppercase tracking-wide">Certifications</h3>
              </div>
              <div className="space-y-3">
                {resumeData.certifications
                  .filter(cert => cert && Object.values(cert).some(value => value && value.toString().trim()))
                  .map((cert, index) => (
                    <div key={index} className="bg-white rounded-lg p-3 border border-gray-200">
                      {(cert["Course/Certification Name"] || cert["Certification Name"]) && (
                        <h4 className="font-medium text-gray-800 text-sm">
                          {cert["Course/Certification Name"] || cert["Certification Name"]}
                        </h4>
                      )}
                      {(cert["Date"] || cert["Year"]) && (
                        <p className="text-gray-600 text-xs mt-1">
                          {cert["Date"] || cert["Year"]}
                        </p>
              )}
            </div>
                  ))}
          </div>
        </div>
          )}

          {/* Languages */}
          {resumeData.languages && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Globe className="w-5 h-5 text-blue-600" />
                <h3 className="font-bold text-gray-800 uppercase tracking-wide">Languages</h3>
                </div>
              <div className="space-y-2">
                {resumeData.languages
                  .filter(lang => lang && Object.values(lang).some(value => value && value.toString().trim()))
                  .map((lang, index) => {
                    const langValue = Object.values(lang).find(value => value && value.toString().trim());
                    return (
                      <div key={index} className="bg-white rounded-lg px-3 py-2 border border-gray-200">
                        <span className="text-gray-700 text-sm">{langValue}</span>
                  </div>
                    );
                  })}
                </div>
              </div>
            )}
            
          {/* Achievements */}
          {resumeData.achievements && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-5 h-5 text-blue-600" />
                <h3 className="font-bold text-gray-800 uppercase tracking-wide">Achievements</h3>
              </div>
              <div className="space-y-2">
                {resumeData.achievements
                  .filter(achievement => achievement && Object.values(achievement).some(value => value && value.toString().trim()))
                  .map((achievement, index) => {
                    const achievementValue = Object.values(achievement).find(value => value && value.toString().trim());
                    return (
                      <div key={index} className="bg-white rounded-lg p-3 border border-gray-200">
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {achievementValue}
                        </p>
                      </div>
                    );
                  })}
              </div>
            </div>
          )}

          {/* Interests */}
          {resumeData.interests && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-5 h-5 text-blue-600" />
                <h3 className="font-bold text-gray-800 uppercase tracking-wide">Interests</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {resumeData.interests
                  .filter(interest => interest && Object.values(interest).some(value => value && value.toString().trim()))
                  .map((interest, index) => {
                    const interestValue = Object.values(interest).find(value => value && value.toString().trim());
                    return (
                      <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                        {interestValue}
                      </span>
                    );
                  })}
              </div>
          </div>
          )}
            
            {/* Activities */}
          {resumeData.activities && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Users className="w-5 h-5 text-blue-600" />
                <h3 className="font-bold text-gray-800 uppercase tracking-wide">Activities</h3>
              </div>
              <div className="space-y-2">
                {resumeData.activities
                  .filter(activity => activity && Object.values(activity).some(value => value && value.toString().trim()))
                  .map((activity, index) => {
                    const activityValue = Object.values(activity).find(value => value && value.toString().trim());
                    return (
                      <div key={index} className="bg-white rounded-lg p-3 border border-gray-200">
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {activityValue}
                        </p>
                      </div>
                    );
                  })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GridProTemplate;