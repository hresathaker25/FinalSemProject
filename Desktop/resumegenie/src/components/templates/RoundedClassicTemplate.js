import React from "react";

const RoundedClassicTemplate = ({ resumeData, selectedCareer }) => {
  // Helper function to get field data
  const getFieldData = (sectionKey, fieldLabel, itemIndex = null) => {
    if (!resumeData[sectionKey]) return "";
    if (itemIndex !== null) {
      return resumeData[sectionKey]?.[itemIndex]?.[fieldLabel] || "";
    }
    return resumeData[sectionKey]?.[fieldLabel] || "";
  };

  // Helper function to get multiple items
  const getMultipleItems = (sectionKey) => {
    const items = resumeData[sectionKey];
    if (!Array.isArray(items)) return [];
    return items.filter(item => 
      item && Object.values(item).some(value => 
        value && typeof value === 'string' && value.trim() !== ''
      )
    );
  };

  // Helper function to check if section has data
  const hasData = (sectionKey) => {
    const section = resumeData[sectionKey];
    if (!section) return false;
    
    if (Array.isArray(section)) {
      return section.some(item => 
        item && Object.values(item).some(value => 
          value && typeof value === 'string' && value.trim() !== ''
        )
      );
    }
    
    return Object.values(section).some(value => 
      value && typeof value === 'string' && value.trim() !== ''
    );
  };

  // Format text with line breaks
  const formatText = (text) => {
    if (!text) return null;
    return text.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        {index < text.split('\n').length - 1 && <br />}
      </span>
    ));
  };

  // Header section
  const renderHeader = () => {
    const profilePhoto = getFieldData("header", "Profile Photo");
    const fullName = getFieldData("header", "Full Name");
    const title = getFieldData("header", "Professional Title");
    const phone = getFieldData("header", "Phone Number");
    const email = getFieldData("header", "Email Address");
    const linkedin = getFieldData("header", "LinkedIn Profile");
    const github = getFieldData("header", "Github");
    const portfolio = getFieldData("header", "Portfolio / Content Link");
    const instagram = getFieldData("header", "Instagram / YouTube Handle");
    const location = getFieldData("header", "Location (City, Country)");

    return (
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 text-white rounded-t-3xl p-8 mb-6">
        <div className="flex items-start gap-6">
          {profilePhoto && (
            <div className="flex-shrink-0">
              <img 
                src={profilePhoto} 
                alt="Profile" 
                className="w-24 h-24 rounded-full object-cover border-4 border-white/20 shadow-lg"
              />
            </div>
          )}
          <div className="flex-1 min-w-0">
            {fullName && (
              <h1 className="text-3xl font-bold mb-2 text-white leading-tight">
                {fullName}
              </h1>
            )}
            {title && (
              <h2 className="text-xl font-light text-slate-200 mb-4 leading-relaxed">
                {title}
              </h2>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              {phone && (
                <div className="flex items-center gap-2 text-slate-200">
                  <span className="w-2 h-2 bg-slate-300 rounded-full flex-shrink-0"></span>
                  {phone}
                </div>
              )}
              {email && (
                <div className="flex items-center gap-2 text-slate-200">
                  <span className="w-2 h-2 bg-slate-300 rounded-full flex-shrink-0"></span>
                  {email}
                </div>
              )}
              {linkedin && (
                <div className="flex items-center gap-2 text-slate-200">
                  <span className="w-2 h-2 bg-slate-300 rounded-full flex-shrink-0"></span>
                  LinkedIn
                </div>
              )}
              {github && (
                <div className="flex items-center gap-2 text-slate-200">
                  <span className="w-2 h-2 bg-slate-300 rounded-full flex-shrink-0"></span>
                  GitHub
                </div>
              )}
              {portfolio && (
                <div className="flex items-center gap-2 text-slate-200">
                  <span className="w-2 h-2 bg-slate-300 rounded-full flex-shrink-0"></span>
                  Portfolio
                </div>
              )}
              {instagram && (
                <div className="flex items-center gap-2 text-slate-200">
                  <span className="w-2 h-2 bg-slate-300 rounded-full flex-shrink-0"></span>
                  Social Media
                </div>
              )}
              {location && (
                <div className="flex items-center gap-2 text-slate-200 md:col-span-2">
                  <span className="w-2 h-2 bg-slate-300 rounded-full flex-shrink-0"></span>
                  {location}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Professional Summary
  const renderSummary = () => {
    if (!hasData("summary")) return null;
    
    const summary = getFieldData("summary", "Summary");
    
    return (
      <div className="mb-6">
        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-800 mb-3 flex items-center">
            <div className="w-1 h-6 bg-slate-600 rounded-full mr-3"></div>
            Professional Summary
          </h3>
          {summary && (
            <p className="text-slate-700 leading-relaxed text-sm">
              {formatText(summary)}
            </p>
          )}
        </div>
      </div>
    );
  };

  // Education section
  const renderEducation = () => {
    if (!hasData("education")) return null;

    const degree = getFieldData("education", "Degree Name") || getFieldData("education", "Degree / Course Name");
    const institution = getFieldData("education", "Institution Name");
    const duration = getFieldData("education", "Duration") || getFieldData("education", "Duration (Start – End or 'Present')");
    const grade = getFieldData("education", "CGPA or Percentage") || getFieldData("education", "CGPA / Percentage");
    const school10 = getFieldData("education", "10th Grade School Name & Percentage") || getFieldData("education", "10th School Name");
    const grade10 = getFieldData("education", "10th Percentage");
    const school12 = getFieldData("education", "12th Grade School Name & Percentage") || getFieldData("education", "12th School Name");
    const grade12 = getFieldData("education", "12th Percentage");

    return (
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
          <div className="w-1 h-6 bg-slate-600 rounded-full mr-3"></div>
          Education
        </h3>
        <div className="space-y-4">
          {(degree || institution) && (
            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
              {degree && (
                <h4 className="font-semibold text-slate-800 text-base mb-1">{degree}</h4>
              )}
              <div className="flex flex-wrap items-center gap-2 text-sm text-slate-600 mb-2">
                {institution && <span className="font-medium">{institution}</span>}
                {duration && institution && <span>•</span>}
                {duration && <span>{duration}</span>}
                {grade && (duration || institution) && <span>•</span>}
                {grade && <span className="font-medium text-slate-700">{grade}</span>}
              </div>
            </div>
          )}
          
          {(school12 || grade12) && (
            <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
              <div className="text-sm text-slate-600">
                <span className="font-medium">12th Grade:</span> {school12 || 'School'} {grade12 && `- ${grade12}`}
              </div>
            </div>
          )}
          
          {(school10 || grade10) && (
            <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
              <div className="text-sm text-slate-600">
                <span className="font-medium">10th Grade:</span> {school10 || 'School'} {grade10 && `- ${grade10}`}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  // Work Experience
  const renderWorkExperience = () => {
    if (!hasData("work") && !hasData("workExperience") && !hasData("experience") && !hasData("internships")) return null;

    const workKey = hasData("work") ? "work" : hasData("workExperience") ? "workExperience" : hasData("experience") ? "experience" : "internships";
    const items = getMultipleItems(workKey);
    if (items.length === 0) return null;

    const sectionTitle = selectedCareer === "Medical" ? "Clinical Experience" : 
                       selectedCareer === "Educational" ? "Teaching Experience" : "Work Experience";

    return (
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
          <div className="w-1 h-6 bg-slate-600 rounded-full mr-3"></div>
          {sectionTitle}
        </h3>
        <div className="space-y-4">
          {items.map((item, index) => {
            const role = item["Job Title"] || item["Role"] || item["Position"];
            const company = item["Company Name"] || item["Company / Client"] || item["Organization / Firm"] || item["Hospital / Clinic Name"];
            const duration = item["Duration"];
            const responsibilities = item["Responsibilities & Achievements"] || item["Responsibilities"] || item["Responsibilities & Legal Work"] || item["Key Responsibilities"] || item["Duties"];
            const departments = item["Departments Rotated"];

            if (!role && !company && !responsibilities) return null;

            return (
              <div key={index} className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
                {role && (
                  <h4 className="font-semibold text-slate-800 text-base mb-1">{role}</h4>
                )}
                <div className="flex flex-wrap items-center gap-2 text-sm text-slate-600 mb-3">
                  {company && <span className="font-medium">{company}</span>}
                  {duration && company && <span>•</span>}
                  {duration && <span>{duration}</span>}
                </div>
                {departments && (
                  <div className="text-sm text-slate-600 mb-2">
                    <span className="font-medium">Departments:</span> {departments}
                  </div>
                )}
                {responsibilities && (
                  <div className="text-sm text-slate-700 leading-relaxed">
                    {formatText(responsibilities)}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  // Projects section
  const renderProjects = () => {
    if (!hasData("projects")) return null;

    const items = getMultipleItems("projects");
    if (items.length === 0) return null;

    const sectionTitle = selectedCareer === "Marketing" ? "Projects / Campaigns" :
                       selectedCareer === "Sales" ? "Projects / Sales Campaigns" :
                       selectedCareer === "Law" ? "Legal Projects / Case Studies" :
                       selectedCareer === "Finance" ? "Finance Projects / Case Studies" :
                       selectedCareer === "Medical" ? "Medical Projects / Research" :
                       selectedCareer === "Educational" ? "Projects / Teaching Portfolios" :
                       "Projects";

    return (
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
          <div className="w-1 h-6 bg-slate-600 rounded-full mr-3"></div>
          {sectionTitle}
        </h3>
        <div className="space-y-4">
          {items.map((item, index) => {
            const title = item["Project Title"] || item["Project/Campaign Name"] || item["Title"];
            const tools = item["Tools Used"] || item["Tools/Technologies Used"] || item["Platform Used"] || item["Tools/Softwares"];
            const description = item["Description"] || item["Goal / Audience"] || item["Topic / Area of Law"] || item["Summary & Objective"];
            const contribution = item["Your Contribution"] || item["Description / Contribution"] || item["Key Insights / Results"] || item["Findings"];
            const result = item["Result / Metrics"] || item["Conversion / Engagement Stats"];
            const type = item["Project Type"];
            const yearRole = item["Year / Role"];

            if (!title && !description && !contribution) return null;

            return (
              <div key={index} className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  {title && (
                    <h4 className="font-semibold text-slate-800 text-base flex-1 min-w-0">{title}</h4>
                  )}
                  {(type || yearRole) && (
                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full whitespace-nowrap">
                      {type || yearRole}
                    </span>
                  )}
                </div>
                
                {tools && (
                  <div className="text-sm text-slate-600 mb-2">
                    <span className="font-medium">Tools:</span> {tools}
                  </div>
                )}
                
                {result && (
                  <div className="text-sm text-slate-600 mb-2">
                    <span className="font-medium">Results:</span> {result}
                  </div>
                )}
                
                <div className="space-y-2">
                  {description && (
                    <div className="text-sm text-slate-700 leading-relaxed">
                      {formatText(description)}
                    </div>
                  )}
                  {contribution && description && contribution !== description && (
                    <div className="text-sm text-slate-700 leading-relaxed">
                      <span className="font-medium">Contribution:</span> {formatText(contribution)}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  // Skills section (handles multiple skill types)
  const renderSkills = () => {
    const skillSections = [];
    
    // Define skill mappings for different careers
    const skillMappings = {
      "techSkills": "Technical Skills",
      "softSkills": "Soft Skills",
      "coreLegalSkills": "Core Legal Skills",
      "otherSkills": "Other Skills",
      "coreSalesSkills": "Core Sales Skills",
      "skills": "Core Finance & Accounting Skills",
      "tools": "Finance Tools & Software",
      "coreMedicalSkills": "Core Medical Skills",
      "labSkills": "Lab & Technical Skills",
      "teachingSkills": "Teaching Skills"
    };

    // Collect all skill sections that have data
    Object.entries(skillMappings).forEach(([key, title]) => {
      if (hasData(key)) {
        const items = getMultipleItems(key);
        if (items.length > 0) {
          skillSections.push({ key, title, items });
        } else {
          // Handle single item skills (like teachingSkills)
          const singleItem = resumeData[key];
          if (singleItem && typeof singleItem === 'object' && !Array.isArray(singleItem)) {
            const skillValues = Object.entries(singleItem)
              .filter(([, value]) => value && value.trim() !== '')
              .map(([label, value]) => ({ label, value }));
            
            if (skillValues.length > 0) {
              skillSections.push({ key, title, items: skillValues, isSingle: true });
            }
          }
        }
      }
    });

    if (skillSections.length === 0) return null;

    return (
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
          <div className="w-1 h-6 bg-slate-600 rounded-full mr-3"></div>
          Skills
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skillSections.map(({ key, title, items, isSingle }) => (
            <div key={key} className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
              <h4 className="font-semibold text-slate-700 text-sm mb-3 uppercase tracking-wide">
                {title}
              </h4>
              <div className="space-y-2">
                {isSingle ? (
                  items.map(({ label, value }, index) => (
                    <div key={index} className="text-sm">
                      <div className="font-medium text-slate-800 mb-1">{label}</div>
                      <div className="text-slate-600">{formatText(value)}</div>
                    </div>
                  ))
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {items.map((item, index) => {
                      const skillText = item["Technical Skills"] || item["Soft Skills"] || item["Skill"] || 
                                       item["Core Legal Skill"] || item["Tools / Software"] || item["Soft Skill"] ||
                                       item["Core Sales Skills"] || item["Tools/Softwares"] || item["Tool/Software"] ||
                                       Object.values(item)[0];
                      
                      if (!skillText || skillText.trim() === '') return null;
                      
                      return (
                        <span 
                          key={index}
                          className="inline-block bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {skillText}
                        </span>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Certifications
  const renderCertifications = () => {
    if (!hasData("certifications")) return null;

    const items = getMultipleItems("certifications");
    if (items.length === 0) return null;

    return (
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
          <div className="w-1 h-6 bg-slate-600 rounded-full mr-3"></div>
          Certifications
        </h3>
        <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
          <div className="space-y-3">
            {items.map((item, index) => {
              const name = item["Course/Certification Name"] || item["Certification Name"] || item["Certification Title"];
              const date = item["Date"] || item["Year"];
              
              if (!name) return null;
              
              return (
                <div key={index} className="flex justify-between items-start gap-4">
                  <span className="text-sm text-slate-800 font-medium flex-1">{name}</span>
                  {date && (
                    <span className="text-xs text-slate-500 whitespace-nowrap">{date}</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  // Publications (for Law)
  const renderPublications = () => {
    if (!hasData("publications")) return null;

    const items = getMultipleItems("publications");
    if (items.length === 0) return null;

    return (
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
          <div className="w-1 h-6 bg-slate-600 rounded-full mr-3"></div>
          Legal Writing / Publications
        </h3>
        <div className="space-y-4">
          {items.map((item, index) => {
            const title = item["Article / Blog Title"];
            const platform = item["Platform (if published)"];
            const link = item["Link"];
            const summary = item["Brief Summary"];
            
            if (!title && !summary) return null;
            
            return (
              <div key={index} className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
                {title && (
                  <h4 className="font-semibold text-slate-800 text-base mb-2">{title}</h4>
                )}
                <div className="flex flex-wrap items-center gap-2 text-sm text-slate-600 mb-2">
                  {platform && <span className="font-medium">{platform}</span>}
                  {link && platform && <span>•</span>}
                  {link && <span className="text-blue-600">Available Online</span>}
                </div>
                {summary && (
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {formatText(summary)}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  // Generic section renderer for remaining sections
  const renderGenericSection = (sectionKey, title) => {
    if (!hasData(sectionKey)) return null;

    const items = getMultipleItems(sectionKey);
    if (items.length === 0) return null;

    return (
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
          <div className="w-1 h-6 bg-slate-600 rounded-full mr-3"></div>
          {title}
        </h3>
        <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
          <div className="space-y-2">
            {items.map((item, index) => {
              const content = item["Achievements"] || item["Activities"] || item["Achievement"] || 
                            item["Activity"] || item["Interests"] || item["Languages"] ||
                            item["Interest"] || item["Language"] || item["Title"] ||
                            Object.values(item)[0];
              
              if (!content || content.trim() === '') return null;
              
              return (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-slate-700 leading-relaxed flex-1">
                    {formatText(content)}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="a4-page bg-white shadow-lg mx-auto" style={{ 
      width: '210mm', 
      minHeight: '297mm',
      maxWidth: '210mm',
      overflow: 'hidden'
    }}>
      <div className="p-8 space-y-0">
        {renderHeader()}
        {renderSummary()}
        
        <div className="grid grid-cols-1 gap-6">
          {renderEducation()}
          {renderWorkExperience()}
          {renderProjects()}
          {renderSkills()}
          {renderCertifications()}
          {renderPublications()}
          {renderGenericSection("achievements", "Achievements")}
          {renderGenericSection("activities", "Extracurricular Activities")}
          {renderGenericSection("extracurricular", "Extracurricular Activities")}
          {renderGenericSection("languages", "Languages")}
          {renderGenericSection("interests", "Interests")}
        </div>
      </div>
    </div>
  );
};

export default RoundedClassicTemplate;