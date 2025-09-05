import React from "react";
import { Mail, Phone, MapPin, Globe, Linkedin, Github } from "lucide-react";

const ResumeRoyaleTemplate = ({ resumeData, selectedCareer }) => {
  // Helper function to check if section has data
  const hasData = (sectionKey) => {
    const data = resumeData[sectionKey];
    if (!data) return false;
    
    if (Array.isArray(data)) {
      return data.some(item => 
        Object.values(item || {}).some(value => 
          typeof value === 'string' ? value.trim() : value
        )
      );
    }
    
    return Object.values(data).some(value => 
      typeof value === 'string' ? value.trim() : value
    );
  };

  // Helper function to get field value
  const getFieldValue = (sectionKey, fieldKey, index = null) => {
    const section = resumeData[sectionKey];
    if (!section) return "";
    
    if (index !== null && Array.isArray(section)) {
      return section[index]?.[fieldKey] || "";
    }
    
    return section[fieldKey] || "";
  };

  // Helper function to render contact info with icons
  const renderContactItem = (icon, value, isLink = false, linkType = null) => {
    if (!value) return null;
    
    const content = (
      <div className="flex items-center gap-2 text-slate-600 text-sm">
        {icon}
        <span className="font-light">{value}</span>
      </div>
    );
    
    if (isLink && linkType) {
      const href = linkType === 'email' 
        ? `mailto:${value}` 
        : linkType === 'phone' 
          ? `tel:${value}`
          : value.startsWith('http') ? value : `https://${value}`;
      
      return (
        <a href={href} className="hover:text-slate-800 transition-colors">
          {content}
        </a>
      );
    }
    
    return content;
  };

  // Helper function to format text with line breaks
  const formatText = (text) => {
    if (!text) return null;
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < text.split('\n').length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <div className="a4-page bg-white text-slate-800 font-serif leading-relaxed">
      {/* Elegant Header */}
      <header className="relative mb-8">
        {/* Gold accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300"></div>
        
        <div className="pt-8 pb-6">
          <div className="flex items-start justify-between">
            {/* Name and Title */}
            <div className="flex-1">
              <h1 className="text-4xl font-light text-slate-900 mb-2 tracking-wide">
                {getFieldValue("header", "Full Name") || "Your Name"}
              </h1>
              <h2 className="text-xl text-slate-600 font-light italic mb-4">
                {getFieldValue("header", "Professional Title") || "Professional Title"}
              </h2>
            </div>
            
            {/* Profile Photo */}
            {getFieldValue("header", "Profile Photo") && (
              <div className="ml-6">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-amber-200 shadow-lg">
                  <img 
                    src={getFieldValue("header", "Profile Photo")} 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
          </div>
          
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-6 pt-4 border-t border-slate-200">
            {renderContactItem(
              <Mail className="w-4 h-4" />, 
              getFieldValue("header", "Email Address"), 
              true, 
              'email'
            )}
            {renderContactItem(
              <Phone className="w-4 h-4" />, 
              getFieldValue("header", "Phone Number"), 
              true, 
              'phone'
            )}
            {renderContactItem(
              <MapPin className="w-4 h-4" />, 
              getFieldValue("header", "Location (City, Country)")
            )}
            {renderContactItem(
              <Linkedin className="w-4 h-4" />, 
              getFieldValue("header", "LinkedIn Profile"), 
              true
            )}
            {renderContactItem(
              <Github className="w-4 h-4" />, 
              getFieldValue("header", "Github"), 
              true
            )}
            {(getFieldValue("header", "Portfolio / Content Link") || getFieldValue("header", "Instagram / YouTube Handle")) && renderContactItem(
              <Globe className="w-4 h-4" />, 
              getFieldValue("header", "Portfolio / Content Link") || getFieldValue("header", "Instagram / YouTube Handle"), 
              true
            )}
          </div>
        </div>
      </header>

      {/* Professional Summary */}
      {hasData("summary") && (
        <section className="mb-8">
          <h3 className="text-2xl font-light text-slate-900 mb-4 border-b border-amber-300 pb-2">
            Professional Summary
          </h3>
          <div className="text-slate-700 leading-relaxed text-justify">
            {formatText(getFieldValue("summary", "Summary"))}
          </div>
        </section>
      )}

      {/* Two Column Layout for Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Primary Content */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Work Experience */}
          {hasData("work") && (
            <section>
              <h3 className="text-2xl font-light text-slate-900 mb-4 border-b border-amber-300 pb-2">
                Professional Experience
              </h3>
              <div className="space-y-6">
                {resumeData.work?.map((job, index) => (
                  <div key={index} className="relative pl-4 border-l-2 border-slate-200">
                    <div className="absolute -left-2 top-1 w-3 h-3 bg-amber-400 rounded-full border-2 border-white"></div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                      <h4 className="text-lg font-medium text-slate-900">
                        {job["Job Title"] || job["Position"] || job["Role"]}
                      </h4>
                      <span className="text-sm text-slate-500 font-light">
                        {job["Duration"]}
                      </span>
                    </div>
                    <p className="text-slate-600 font-light mb-2">
                      {job["Company Name"] || job["Organization / Firm"] || job["Company / Client"]}
                    </p>
                    <div className="text-slate-700 text-sm">
                      {formatText(job["Responsibilities & Achievements"] || job["Responsibilities & Legal Work"] || job["Duties"] || job["Responsibilities"])}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Education */}
          {hasData("education") && (
            <section>
              <h3 className="text-2xl font-light text-slate-900 mb-4 border-b border-amber-300 pb-2">
                Education
              </h3>
              <div className="space-y-4">
                {Array.isArray(resumeData.education) ? (
                  resumeData.education.map((edu, index) => (
                    <div key={index} className="bg-slate-50 p-4 rounded-lg border-l-4 border-amber-400">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-medium text-slate-900">
                          {edu["Degree Name"] || edu["Degree / Course Name"]}
                        </h4>
                        <span className="text-sm text-slate-500">
                          {edu["Duration"] || edu["Duration (Start – End or 'Present')"]}
                        </span>
                      </div>
                      <p className="text-slate-600 mb-1">{edu["Institution Name"]}</p>
                      {edu["CGPA or Percentage"] && (
                        <p className="text-sm text-slate-500">
                          CGPA/Percentage: {edu["CGPA or Percentage"] || edu["CGPA / Percentage"]}
                        </p>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-amber-400">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-medium text-slate-900">
                        {getFieldValue("education", "Degree Name") || getFieldValue("education", "Degree / Course Name")}
                      </h4>
                      <span className="text-sm text-slate-500">
                        {getFieldValue("education", "Duration") || getFieldValue("education", "Duration (Start – End or 'Present')")}
                      </span>
                    </div>
                    <p className="text-slate-600 mb-1">{getFieldValue("education", "Institution Name")}</p>
                    {getFieldValue("education", "CGPA or Percentage") && (
                      <p className="text-sm text-slate-500">
                        CGPA/Percentage: {getFieldValue("education", "CGPA or Percentage")}
                      </p>
                    )}
                  </div>
                )}
                
                {/* Secondary Education */}
                {(getFieldValue("education", "10th Grade School Name & Percentage") || getFieldValue("schooling", "10th School Name")) && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    {(getFieldValue("education", "10th Grade School Name & Percentage") || (getFieldValue("schooling", "10th School Name") && getFieldValue("schooling", "10th Percentage"))) && (
                      <div className="text-sm">
                        <span className="font-medium text-slate-700">10th Grade:</span>
                        <p className="text-slate-600">
                          {getFieldValue("schooling", "10th School Name") || getFieldValue("education", "10th Grade School Name & Percentage")}
                          {getFieldValue("schooling", "10th Percentage") && ` - ${getFieldValue("schooling", "10th Percentage")}`}
                        </p>
                      </div>
                    )}
                    {(getFieldValue("education", "12th Grade School Name & Percentage") || (getFieldValue("schooling", "12th School Name") && getFieldValue("schooling", "12th Percentage"))) && (
                      <div className="text-sm">
                        <span className="font-medium text-slate-700">12th Grade:</span>
                        <p className="text-slate-600">
                          {getFieldValue("schooling", "12th School Name") || getFieldValue("education", "12th Grade School Name & Percentage")}
                          {getFieldValue("schooling", "12th Percentage") && ` - ${getFieldValue("schooling", "12th Percentage")}`}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Projects */}
          {hasData("projects") && (
            <section>
              <h3 className="text-2xl font-light text-slate-900 mb-4 border-b border-amber-300 pb-2">
                {selectedCareer === 'Marketing' ? 'Projects / Campaigns' : 
                 selectedCareer === 'Sales' ? 'Projects / Sales Campaigns' :
                 selectedCareer === 'Law' ? 'Legal Projects / Case Studies' :
                 selectedCareer === 'Finance' ? 'Finance Projects / Case Studies' :
                 selectedCareer === 'Medical' ? 'Medical Projects / Research' :
                 selectedCareer === 'Educational' ? 'Projects / Teaching Portfolios' :
                 'Projects'}
              </h3>
              <div className="space-y-6">
                {resumeData.projects?.map((project, index) => (
                  <div key={index} className="bg-gradient-to-r from-amber-50 to-yellow-50 p-5 rounded-lg border border-amber-200">
                    <h4 className="text-lg font-medium text-slate-900 mb-2">
                      {project["Project Title"] || project["Project/Campaign Name"] || project["Title"] || project["Project Title"]}
                    </h4>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mb-3">
                      {project["Tools Used"] && (
                        <div>
                          <span className="font-medium text-slate-700">Tools: </span>
                          <span className="text-slate-600">{project["Tools Used"] || project["Tools/Technologies Used"]}</span>
                        </div>
                      )}
                      {project["Platform Used"] && (
                        <div>
                          <span className="font-medium text-slate-700">Platform: </span>
                          <span className="text-slate-600">{project["Platform Used"]}</span>
                        </div>
                      )}
                      {project["Year / Role"] && (
                        <div>
                          <span className="font-medium text-slate-700">Role: </span>
                          <span className="text-slate-600">{project["Year / Role"]}</span>
                        </div>
                      )}
                      {project["Topic / Area of Law"] && (
                        <div>
                          <span className="font-medium text-slate-700">Area: </span>
                          <span className="text-slate-600">{project["Topic / Area of Law"]}</span>
                        </div>
                      )}
                    </div>
                    
                    {project["Description"] && (
                      <p className="text-slate-700 mb-2">
                        {formatText(project["Description"] || project["Summary & Objective"])}
                      </p>
                    )}
                    
                    {project["Your Contribution"] && (
                      <div className="text-sm text-slate-600">
                        <span className="font-medium">Contribution: </span>
                        {formatText(project["Your Contribution"] || project["Description / Contribution"])}
                      </div>
                    )}
                    
                    {project["Result / Metrics"] && (
                      <div className="text-sm text-slate-600 mt-2">
                        <span className="font-medium">Results: </span>
                        {project["Result / Metrics"] || project["Key Insights / Results"] || project["Findings"]}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right Column - Secondary Content */}
        <div className="space-y-8">
          
          {/* Technical Skills */}
          {hasData("techSkills") && (
            <section>
              <h3 className="text-xl font-light text-slate-900 mb-4 border-b border-amber-300 pb-2">
                {selectedCareer === 'Marketing' ? 'Marketing Skills' :
                 selectedCareer === 'Sales' ? 'Core Sales Skills' :
                 selectedCareer === 'Law' ? 'Legal Skills' :
                 selectedCareer === 'Finance' ? 'Finance Skills' :
                 selectedCareer === 'Medical' ? 'Medical Skills' :
                 selectedCareer === 'Educational' ? 'Teaching Skills' :
                 'Technical Skills'}
              </h3>
              <div className="space-y-2">
                {resumeData.techSkills?.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-400 rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-slate-700">
                      {skill["Technical Skills"] || skill["Skill"] || skill["Core Sales Skills"] || skill["Technical Skills"]}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Core Skills (for specific careers) */}
          {hasData("coreLegalSkills") && (
            <section>
              <h3 className="text-xl font-light text-slate-900 mb-4 border-b border-amber-300 pb-2">
                Core Legal Skills
              </h3>
              <div className="space-y-2">
                {resumeData.coreLegalSkills?.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-400 rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-slate-700">{skill["Core Legal Skill"]}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Soft Skills */}
          {hasData("softSkills") && (
            <section>
              <h3 className="text-xl font-light text-slate-900 mb-4 border-b border-amber-300 pb-2">
                Soft Skills
              </h3>
              <div className="space-y-2">
                {resumeData.softSkills?.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-slate-400 rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-slate-700">
                      {skill["Soft Skills"] || skill["Soft Skill"] || skill["Skill"]}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Languages */}
          {hasData("languages") && (
            <section>
              <h3 className="text-xl font-light text-slate-900 mb-4 border-b border-amber-300 pb-2">
                Languages
              </h3>
              <div className="space-y-2">
                {resumeData.languages?.map((lang, index) => (
                  <div key={index} className="text-sm text-slate-700">
                    {lang["Languages"] || lang["Language"]}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Certifications */}
          {hasData("certifications") && (
            <section>
              <h3 className="text-xl font-light text-slate-900 mb-4 border-b border-amber-300 pb-2">
                Certifications
              </h3>
              <div className="space-y-3">
                {resumeData.certifications?.map((cert, index) => (
                  <div key={index} className="bg-slate-50 p-3 rounded border-l-2 border-amber-400">
                    <div className="font-medium text-slate-800 text-sm">
                      {cert["Course/Certification Name"] || cert["Certification Name"] || cert["Certification Title"]}
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      {cert["Date"] || cert["Year"]}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Achievements */}
          {hasData("achievements") && (
            <section>
              <h3 className="text-xl font-light text-slate-900 mb-4 border-b border-amber-300 pb-2">
                Achievements
              </h3>
              <div className="space-y-2">
                {resumeData.achievements?.map((achievement, index) => (
                  <div key={index} className="text-sm text-slate-700 pl-4 border-l-2 border-amber-200">
                    {achievement["Achievements"] || achievement["Achievement"] || achievement["Title"]}
                    {achievement["Year"] && (
                      <span className="text-slate-500 ml-2">({achievement["Year"]})</span>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Interests */}
          {hasData("interests") && (
            <section>
              <h3 className="text-xl font-light text-slate-900 mb-4 border-b border-amber-300 pb-2">
                Interests
              </h3>
              <div className="flex flex-wrap gap-2">
                {resumeData.interests?.map((interest, index) => (
                  <span 
                    key={index} 
                    className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-light"
                  >
                    {interest["Interests"] || interest["Interest"]}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Publications (for Law career) */}
          {hasData("publications") && selectedCareer === 'Law' && (
            <section>
              <h3 className="text-xl font-light text-slate-900 mb-4 border-b border-amber-300 pb-2">
                Publications
              </h3>
              <div className="space-y-4">
                {resumeData.publications?.map((pub, index) => (
                  <div key={index} className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-medium text-slate-900 text-sm mb-1">
                      {pub["Article / Blog Title"]}
                    </h4>
                    {pub["Platform (if published)"] && (
                      <p className="text-xs text-slate-600 mb-2">
                        {pub["Platform (if published)"]}
                      </p>
                    )}
                    {pub["Brief Summary"] && (
                      <p className="text-xs text-slate-700">
                        {formatText(pub["Brief Summary"])}
                      </p>
                    )}
                    {pub["Link"] && (
                      <a 
                        href={pub["Link"]} 
                        className="text-xs text-amber-600 hover:text-amber-800 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Publication
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>

      {/* Elegant Footer */}
      <footer className="mt-12 pt-4 border-t border-slate-200">
        <div className="h-1 bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300"></div>
      </footer>
    </div>
  );
};

export default ResumeRoyaleTemplate;