import React from "react";

const ExecutiveLuxeTemplate = ({ resumeData, selectedCareer }) => {
  // Helper function to safely get nested data
  const getData = (section, field, index = null) => {
    if (!resumeData || !resumeData[section]) return "";
    
    if (index !== null && Array.isArray(resumeData[section])) {
      return resumeData[section][index]?.[field] || "";
    }
    
    if (Array.isArray(resumeData[section])) {
      return resumeData[section].map(item => item[field] || "").filter(Boolean);
    }
    
    return resumeData[section][field] || "";
  };

  // Helper function to check if section has data
  const hasData = (section) => {
    if (!resumeData || !resumeData[section]) return false;
    
    if (Array.isArray(resumeData[section])) {
      return resumeData[section].some(item => 
        Object.values(item || {}).some(value => value && value.toString().trim())
      );
    }
    
    return Object.values(resumeData[section] || {}).some(value => 
      value && value.toString().trim()
    );
  };

  // Get header data
  const fullName = getData("header", "Full Name");
  const professionalTitle = getData("header", "Professional Title");
  const phoneNumber = getData("header", "Phone Number");
  const emailAddress = getData("header", "Email Address");
  const linkedinProfile = getData("header", "LinkedIn Profile");
  const location = getData("header", "Location (City, Country)");
  const profilePhoto = getData("header", "Profile Photo");
  const github = getData("header", "Github");
  const portfolio = getData("header", "Portfolio / Content Link");
  const instagram = getData("header", "Instagram / YouTube Handle");

  return (
    <div className="executive-luxe-template w-full max-w-[210mm] mx-auto bg-white shadow-2xl" style={{ minHeight: '297mm' }}>
      {/* Header Section with Elegant Design */}
      <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gold-400/20 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-gold-400/10 to-transparent rounded-full transform -translate-x-12 translate-y-12"></div>
        
        <div className="relative z-10 px-12 py-10">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              {fullName && (
                <h1 className="text-4xl font-light tracking-wide mb-3 text-white">
                  {fullName.split(' ').map((name, index) => (
                    <span key={index}>
                      {index === fullName.split(' ').length - 1 ? (
                        <span className="font-bold">{name}</span>
                      ) : (
                        <span>{name} </span>
                      )}
                    </span>
                  ))}
                </h1>
              )}
              
              {professionalTitle && (
                <div className="flex items-center mb-6">
                  <div className="w-12 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-500 mr-4"></div>
                  <p className="text-xl text-slate-200 font-light tracking-wider uppercase">
                    {professionalTitle}
                  </p>
                </div>
              )}
              
              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-300">
                {phoneNumber && (
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                    <span className="text-sm">{phoneNumber}</span>
                  </div>
                )}
                {emailAddress && (
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                    <span className="text-sm">{emailAddress}</span>
                  </div>
                )}
                {location && (
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                    <span className="text-sm">{location}</span>
                  </div>
                )}
                {linkedinProfile && (
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                    <span className="text-sm">LinkedIn</span>
                  </div>
                )}
                {github && (
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                    <span className="text-sm">GitHub</span>
                  </div>
                )}
                {portfolio && (
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                    <span className="text-sm">Portfolio</span>
                  </div>
                )}
                {instagram && (
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                    <span className="text-sm">Social Media</span>
                  </div>
                )}
              </div>
            </div>
            
            {/* Profile Photo */}
            {profilePhoto && (
              <div className="ml-8 flex-shrink-0">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full border-4 border-amber-400 overflow-hidden shadow-2xl">
                    <img 
                      src={profilePhoto} 
                      alt="Profile" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-amber-400 rounded-full border-2 border-slate-900"></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-12 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* Professional Summary */}
            {hasData("summary") && (
              <section>
                <div className="flex items-center mb-6">
                  <h2 className="text-2xl font-light text-slate-800 uppercase tracking-widest">
                    Executive Summary
                  </h2>
                  <div className="flex-1 ml-6 h-0.5 bg-gradient-to-r from-amber-400 to-transparent"></div>
                </div>
                <div className="text-slate-700 leading-relaxed">
                  {getData("summary", "Summary").split('\n').map((line, index) => (
                    <p key={index} className="mb-3 text-justify">
                      {line}
                    </p>
                  ))}
                </div>
              </section>
            )}

            {/* Work Experience */}
            {hasData("work") && (
              <section>
                <div className="flex items-center mb-8">
                  <h2 className="text-2xl font-light text-slate-800 uppercase tracking-widest">
                    Professional Experience
                  </h2>
                  <div className="flex-1 ml-6 h-0.5 bg-gradient-to-r from-amber-400 to-transparent"></div>
                </div>
                
                <div className="space-y-8">
                  {Array.isArray(resumeData.work) && resumeData.work.map((job, index) => {
                    const jobTitle = job["Job Title"] || job["Role"] || job["Position"] || "";
                    const company = job["Company Name"] || job["Company / Client"] || job["Organization / Firm"] || job["Hospital / Clinic Name"] || "";
                    const duration = job["Duration"] || "";
                    const responsibilities = job["Responsibilities & Achievements"] || job["Responsibilities"] || job["Responsibilities & Legal Work"] || job["Duties"] || job["Key Responsibilities"] || "";
                    
                    if (!jobTitle && !company) return null;
                    
                    return (
                      <div key={index} className="relative">
                        {/* Timeline dot */}
                        <div className="absolute -left-2 top-2 w-4 h-4 bg-amber-400 rounded-full border-2 border-white shadow-md"></div>
                        
                        <div className="ml-8 pb-6 border-l-2 border-slate-200 pl-8">
                          <div className="bg-slate-50 rounded-lg p-6 shadow-sm border border-slate-200">
                            <div className="flex flex-wrap items-start justify-between mb-4">
                              <div>
                                {jobTitle && (
                                  <h3 className="text-xl font-semibold text-slate-800 mb-1">
                                    {jobTitle}
                                  </h3>
                                )}
                                {company && (
                                  <p className="text-lg text-amber-600 font-medium">
                                    {company}
                                  </p>
                                )}
                              </div>
                              {duration && (
                                <span className="text-sm text-slate-600 bg-white px-3 py-1 rounded-full border border-slate-300 font-medium">
                                  {duration}
                                </span>
                              )}
                            </div>
                            
                            {responsibilities && (
                              <div className="text-slate-700 leading-relaxed">
                                {responsibilities.split('\n').filter(line => line.trim()).map((responsibility, idx) => (
                                  <div key={idx} className="flex items-start mb-2">
                                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span className="text-sm">{responsibility.trim()}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* Projects */}
            {hasData("projects") && (
              <section>
                <div className="flex items-center mb-8">
                  <h2 className="text-2xl font-light text-slate-800 uppercase tracking-widest">
                    Key Projects
                  </h2>
                  <div className="flex-1 ml-6 h-0.5 bg-gradient-to-r from-amber-400 to-transparent"></div>
                </div>
                
                <div className="grid gap-6">
                  {Array.isArray(resumeData.projects) && resumeData.projects.map((project, index) => {
                    const title = project["Project Title"] || project["Project/Campaign Name"] || project["Title"] || project["Project Title"] || "";
                    const description = project["Description"] || project["Summary & Objective"] || project["Description / Contribution"] || "";
                    const tools = project["Tools Used"] || project["Tools/Technologies Used"] || project["Platform Used"] || "";
                    const contribution = project["Your Contribution"] || "";
                    const results = project["Result / Metrics"] || project["Findings"] || project["Key Insights / Results"] || "";
                    
                    if (!title) return null;
                    
                    return (
                      <div key={index} className="bg-gradient-to-r from-slate-50 to-white rounded-lg p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-lg font-semibold text-slate-800 flex-1">
                            {title}
                          </h3>
                          {tools && (
                            <span className="text-xs text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 font-medium ml-4">
                              {tools}
                            </span>
                          )}
                        </div>
                        
                        <div className="space-y-3">
                          {description && (
                            <p className="text-slate-700 text-sm leading-relaxed">
                              {description}
                            </p>
                          )}
                          {contribution && (
                            <p className="text-slate-700 text-sm leading-relaxed">
                              <span className="font-medium text-slate-800">Contribution: </span>
                              {contribution}
                            </p>
                          )}
                          {results && (
                            <p className="text-slate-700 text-sm leading-relaxed">
                              <span className="font-medium text-slate-800">Results: </span>
                              {results}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            
            {/* Education */}
            {hasData("education") && (
              <section>
                <div className="flex items-center mb-6">
                  <h3 className="text-lg font-semibold text-slate-800 uppercase tracking-wide">
                    Education
                  </h3>
                  <div className="flex-1 ml-4 h-px bg-amber-400"></div>
                </div>
                
                <div className="space-y-4">
                  {Array.isArray(resumeData.education) ? (
                    resumeData.education.map((edu, index) => {
                      const degree = edu["Degree Name"] || edu["Degree / Course Name"] || "";
                      const institution = edu["Institution Name"] || "";
                      const duration = edu["Duration"] || edu["Duration (Start – End or 'Present')"] || "";
                      const grade = edu["CGPA or Percentage"] || edu["CGPA / Percentage"] || "";
                      
                      if (!degree && !institution) return null;
                      
                      return (
                        <div key={index} className="bg-white rounded-lg p-4 border border-slate-200 shadow-sm">
                          {degree && (
                            <h4 className="font-semibold text-slate-800 text-sm mb-1">
                              {degree}
                            </h4>
                          )}
                          {institution && (
                            <p className="text-amber-600 font-medium text-sm mb-2">
                              {institution}
                            </p>
                          )}
                          <div className="flex justify-between items-center text-xs text-slate-600">
                            {duration && <span>{duration}</span>}
                            {grade && <span className="bg-slate-100 px-2 py-1 rounded">{grade}</span>}
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className="bg-white rounded-lg p-4 border border-slate-200 shadow-sm">
                      {getData("education", "Degree Name") && (
                        <h4 className="font-semibold text-slate-800 text-sm mb-1">
                          {getData("education", "Degree Name")}
                        </h4>
                      )}
                      {getData("education", "Institution Name") && (
                        <p className="text-amber-600 font-medium text-sm mb-2">
                          {getData("education", "Institution Name")}
                        </p>
                      )}
                      <div className="flex justify-between items-center text-xs text-slate-600">
                        {getData("education", "Duration") && (
                          <span>{getData("education", "Duration")}</span>
                        )}
                        {getData("education", "CGPA or Percentage") && (
                          <span className="bg-slate-100 px-2 py-1 rounded">
                            {getData("education", "CGPA or Percentage")}
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* Technical Skills */}
            {hasData("techSkills") && (
              <section>
                <div className="flex items-center mb-6">
                  <h3 className="text-lg font-semibold text-slate-800 uppercase tracking-wide">
                    Core Skills
                  </h3>
                  <div className="flex-1 ml-4 h-px bg-amber-400"></div>
                </div>
                
                <div className="space-y-3">
                  {Array.isArray(resumeData.techSkills) && resumeData.techSkills.map((skillItem, index) => {
                    const skill = skillItem["Technical Skills"] || skillItem["Skill"] || skillItem["Core Sales Skills"] || skillItem["Core Legal Skill"] || "";
                    if (!skill) return null;
                    
                    return (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                        <span className="text-sm text-slate-700">{skill}</span>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* Soft Skills */}
            {hasData("softSkills") && (
              <section>
                <div className="flex items-center mb-6">
                  <h3 className="text-lg font-semibold text-slate-800 uppercase tracking-wide">
                    Leadership Qualities
                  </h3>
                  <div className="flex-1 ml-4 h-px bg-amber-400"></div>
                </div>
                
                <div className="space-y-3">
                  {Array.isArray(resumeData.softSkills) && resumeData.softSkills.map((skillItem, index) => {
                    const skill = skillItem["Soft Skills"] || skillItem["Soft Skill"] || skillItem["Skill"] || "";
                    if (!skill) return null;
                    
                    return (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-slate-400 rounded-full mr-3"></div>
                        <span className="text-sm text-slate-700">{skill}</span>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* Certifications */}
            {hasData("certifications") && (
              <section>
                <div className="flex items-center mb-6">
                  <h3 className="text-lg font-semibold text-slate-800 uppercase tracking-wide">
                    Certifications
                  </h3>
                  <div className="flex-1 ml-4 h-px bg-amber-400"></div>
                </div>
                
                <div className="space-y-3">
                  {Array.isArray(resumeData.certifications) && resumeData.certifications.map((cert, index) => {
                    const name = cert["Course/Certification Name"] || cert["Certification Name"] || cert["Certification Title"] || "";
                    const date = cert["Date"] || cert["Year"] || "";
                    
                    if (!name) return null;
                    
                    return (
                      <div key={index} className="bg-amber-50 rounded-lg p-3 border border-amber-200">
                        <div className="text-sm font-medium text-slate-800">{name}</div>
                        {date && <div className="text-xs text-amber-600 mt-1">{date}</div>}
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* Languages */}
            {hasData("languages") && (
              <section>
                <div className="flex items-center mb-6">
                  <h3 className="text-lg font-semibold text-slate-800 uppercase tracking-wide">
                    Languages
                  </h3>
                  <div className="flex-1 ml-4 h-px bg-amber-400"></div>
                </div>
                
                <div className="space-y-2">
                  {Array.isArray(resumeData.languages) && resumeData.languages.map((langItem, index) => {
                    const language = langItem["Languages"] || langItem["Language"] || "";
                    if (!language) return null;
                    
                    return (
                      <div key={index} className="text-sm text-slate-700 bg-slate-50 rounded px-3 py-2 border border-slate-200">
                        {language}
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* Achievements */}
            {hasData("achievements") && (
              <section>
                <div className="flex items-center mb-6">
                  <h3 className="text-lg font-semibold text-slate-800 uppercase tracking-wide">
                    Key Achievements
                  </h3>
                  <div className="flex-1 ml-4 h-px bg-amber-400"></div>
                </div>
                
                <div className="space-y-3">
                  {Array.isArray(resumeData.achievements) && resumeData.achievements.map((achievement, index) => {
                    const title = achievement["Achievements"] || achievement["Achievement"] || achievement["Title"] || achievement["Achievement Title"] || "";
                    const description = achievement["Description"] || "";
                    
                    if (!title) return null;
                    
                    return (
                      <div key={index} className="border-l-2 border-amber-400 pl-3">
                        <div className="text-sm font-medium text-slate-800 mb-1">{title}</div>
                        {description && (
                          <div className="text-xs text-slate-600">{description}</div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveLuxeTemplate;