import React from "react";

const SimpleSleekTemplate = ({ resumeData, selectedCareer }) => {
  // Helper function to safely get data
  const getData = (sectionKey, fieldLabel, index = null) => {
    if (index !== null) {
      return resumeData[sectionKey]?.[index]?.[fieldLabel] || "";
    }
    return resumeData[sectionKey]?.[fieldLabel] || "";
  };

  // Helper function to get array data
  const getArrayData = (sectionKey) => {
    const data = resumeData[sectionKey];
    return Array.isArray(data) ? data : [];
  };

  // Helper function to check if section has data
  const hasData = (sectionKey) => {
    const data = resumeData[sectionKey];
    if (Array.isArray(data)) {
      return data.some(item => Object.values(item).some(value => value && value.toString().trim()));
    }
    return data && Object.values(data).some(value => value && value.toString().trim());
  };

  // Helper function to format text with line breaks
  const formatText = (text) => {
    if (!text) return null;
    return text.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        {index < text.split('\n').length - 1 && <br />}
      </span>
    ));
  };

  // Section rendering functions
  const renderHeader = () => {
    const name = getData("header", "Full Name");
    const title = getData("header", "Professional Title");
    const phone = getData("header", "Phone Number");
    const email = getData("header", "Email Address");
    const linkedin = getData("header", "LinkedIn Profile");
    const location = getData("header", "Location (City, Country)");
    const github = getData("header", "Github");
    const portfolio = getData("header", "Portfolio / Content Link");
    const instagram = getData("header", "Instagram / YouTube Handle");
    const profilePhoto = getData("header", "Profile Photo");

    return (
      <div className="header-section mb-8">
        <div className="flex items-start gap-6">
          {/* Profile Photo */}
          {profilePhoto && (
            <div className="flex-shrink-0">
              <img
                src={profilePhoto}
                alt="Profile"
                className="w-20 h-20 rounded-full object-cover border-2 border-gray-200 shadow-sm"
              />
            </div>
          )}
          
          {/* Name and Contact Info */}
          <div className="flex-1">
            {name && (
              <h1 className="text-3xl font-light text-gray-800 mb-1 tracking-wide">
                {name}
              </h1>
            )}
            {title && (
              <p className="text-lg text-gray-600 mb-3 font-light">
                {title}
              </p>
            )}
            
            {/* Contact Details */}
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              {phone && (
                <span className="flex items-center gap-1">
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  {phone}
                </span>
              )}
              {email && (
                <span className="flex items-center gap-1">
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  {email}
                </span>
              )}
              {location && (
                <span className="flex items-center gap-1">
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  {location}
                </span>
              )}
            </div>
            
            {/* Professional Links */}
            <div className="flex flex-wrap gap-4 text-sm text-gray-600 mt-2">
              {linkedin && (
                <span className="flex items-center gap-1">
                  <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                  LinkedIn
                </span>
              )}
              {github && (
                <span className="flex items-center gap-1">
                  <span className="w-1 h-1 bg-gray-800 rounded-full"></span>
                  GitHub
                </span>
              )}
              {portfolio && (
                <span className="flex items-center gap-1">
                  <span className="w-1 h-1 bg-green-400 rounded-full"></span>
                  Portfolio
                </span>
              )}
              {instagram && (
                <span className="flex items-center gap-1">
                  <span className="w-1 h-1 bg-pink-400 rounded-full"></span>
                  Social
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderSummary = () => {
    const summary = getData("summary", "Summary");
    if (!summary) return null;

    return (
      <section className="mb-8">
        <h2 className="section-title text-lg font-light text-gray-800 mb-4 pb-2 border-b border-gray-200">
          Professional Summary
        </h2>
        <div className="text-gray-700 leading-relaxed font-light">
          {formatText(summary)}
        </div>
      </section>
    );
  };

  const renderEducation = () => {
    if (!hasData("education")) return null;

    const degree = getData("education", "Degree Name") || getData("education", "Degree / Course Name");
    const institution = getData("education", "Institution Name");
    const duration = getData("education", "Duration") || getData("education", "Duration (Start – End or 'Present')");
    const cgpa = getData("education", "CGPA or Percentage") || getData("education", "CGPA / Percentage");
    const tenth = getData("education", "10th Grade School Name & Percentage") || getData("education", "10th School Name");
    const tenthPercent = getData("education", "10th Percentage");
    const twelfth = getData("education", "12th Grade School Name & Percentage") || getData("education", "12th School Name");
    const twelfthPercent = getData("education", "12th Percentage");

    return (
      <section className="mb-8">
        <h2 className="section-title text-lg font-light text-gray-800 mb-4 pb-2 border-b border-gray-200">
          Education
        </h2>
        <div className="space-y-4">
          {/* Main Degree */}
          {(degree || institution) && (
            <div className="education-item">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-medium text-gray-800">{degree}</h3>
                {duration && <span className="text-sm text-gray-600 font-light">{duration}</span>}
              </div>
              {institution && <p className="text-gray-600 font-light">{institution}</p>}
              {cgpa && <p className="text-sm text-gray-600 mt-1">Grade: {cgpa}</p>}
            </div>
          )}
          
          {/* 12th Grade */}
          {(twelfth || twelfthPercent) && (
            <div className="education-item">
              <h3 className="font-medium text-gray-800">12th Grade</h3>
              {twelfth && <p className="text-gray-600 font-light">{twelfth}</p>}
              {twelfthPercent && <p className="text-sm text-gray-600">Grade: {twelfthPercent}</p>}
            </div>
          )}
          
          {/* 10th Grade */}
          {(tenth || tenthPercent) && (
            <div className="education-item">
              <h3 className="font-medium text-gray-800">10th Grade</h3>
              {tenth && <p className="text-gray-600 font-light">{tenth}</p>}
              {tenthPercent && <p className="text-sm text-gray-600">Grade: {tenthPercent}</p>}
            </div>
          )}
        </div>
      </section>
    );
  };

  const renderWorkExperience = () => {
    if (!hasData("work") && !hasData("workExperience")) return null;

    const workData = getArrayData("work").length > 0 ? getArrayData("work") : getArrayData("workExperience");

    return (
      <section className="mb-8">
        <h2 className="section-title text-lg font-light text-gray-800 mb-4 pb-2 border-b border-gray-200">
          Work Experience
        </h2>
        <div className="space-y-5">
          {workData.map((work, index) => {
            const jobTitle = work["Job Title"] || work["Role"] || work["Position"];
            const company = work["Company Name"] || work["Company / Client"] || work["Organization / Firm"] || work["Hospital / Clinic Name"];
            const duration = work["Duration"];
            const responsibilities = work["Responsibilities & Achievements"] || work["Responsibilities"] || work["Key Responsibilities"] || work["Duties"] || work["Responsibilities & Legal Work"];

            if (!jobTitle && !company) return null;

            return (
              <div key={index} className="work-item">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium text-gray-800">{jobTitle}</h3>
                  {duration && <span className="text-sm text-gray-600 font-light">{duration}</span>}
                </div>
                {company && <p className="text-gray-600 font-light mb-2">{company}</p>}
                {responsibilities && (
                  <div className="text-sm text-gray-700 leading-relaxed">
                    {formatText(responsibilities)}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    );
  };

  const renderProjects = () => {
    if (!hasData("projects")) return null;

    const projectData = getArrayData("projects");

    return (
      <section className="mb-8">
        <h2 className="section-title text-lg font-light text-gray-800 mb-4 pb-2 border-b border-gray-200">
          Projects
        </h2>
        <div className="space-y-5">
          {projectData.map((project, index) => {
            const title = project["Project Title"] || project["Project/Campaign Name"] || project["Title"];
            const tools = project["Tools Used"] || project["Tools/Technologies Used"] || project["Platform Used"] || project["Tools/Software"];
            const description = project["Description"] || project["Summary & Objective"];
            const contribution = project["Your Contribution"];
            const goal = project["Goal / Audience"];
            const result = project["Result / Metrics"] || project["Key Insights / Results"] || project["Findings"] || project["Conversion / Engagement Stats"];

            if (!title) return null;

            return (
              <div key={index} className="project-item">
                <h3 className="font-medium text-gray-800 mb-1">{title}</h3>
                {tools && <p className="text-sm text-gray-600 mb-2 font-light">{tools}</p>}
                {goal && <p className="text-sm text-gray-700 mb-1"><span className="font-medium">Goal:</span> {goal}</p>}
                {description && (
                  <div className="text-sm text-gray-700 mb-2 leading-relaxed">
                    {formatText(description)}
                  </div>
                )}
                {contribution && (
                  <div className="text-sm text-gray-700 mb-2 leading-relaxed">
                    <span className="font-medium">Contribution:</span> {formatText(contribution)}
                  </div>
                )}
                {result && <p className="text-sm text-gray-600"><span className="font-medium">Result:</span> {result}</p>}
              </div>
            );
          })}
        </div>
      </section>
    );
  };

  const renderSkills = () => {
    const techSkills = getArrayData("techSkills") || getArrayData("skills");
    const softSkills = getArrayData("softSkills");
    const coreLegalSkills = getArrayData("coreLegalSkills");
    const coreSalesSkills = getArrayData("coreSalesSkills");
    const coreMedicalSkills = getArrayData("coreMedicalSkills");
    const labSkills = getArrayData("labSkills");
    const teachingSkills = resumeData["teachingSkills"];
    const tools = getArrayData("tools") || getArrayData("otherSkills");

    const hasAnySkills = techSkills.length > 0 || softSkills.length > 0 || 
                       coreLegalSkills.length > 0 || coreSalesSkills.length > 0 || 
                       coreMedicalSkills.length > 0 || labSkills.length > 0 || 
                       teachingSkills || tools.length > 0;

    if (!hasAnySkills) return null;

    return (
      <section className="mb-8">
        <h2 className="section-title text-lg font-light text-gray-800 mb-4 pb-2 border-b border-gray-200">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Technical Skills */}
          {techSkills.length > 0 && (
            <div>
              <h3 className="font-medium text-gray-800 mb-2">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {techSkills.map((skill, index) => {
                  const skillText = skill["Technical Skills"] || skill["Skill"];
                  return skillText ? (
                    <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-light">
                      {skillText}
                    </span>
                  ) : null;
                })}
              </div>
            </div>
          )}

          {/* Core Skills (Career specific) */}
          {coreLegalSkills.length > 0 && (
            <div>
              <h3 className="font-medium text-gray-800 mb-2">Core Legal Skills</h3>
              <div className="flex flex-wrap gap-2">
                {coreLegalSkills.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-light">
                    {skill["Core Legal Skill"]}
                  </span>
                ))}
              </div>
            </div>
          )}

          {coreSalesSkills.length > 0 && (
            <div>
              <h3 className="font-medium text-gray-800 mb-2">Core Sales Skills</h3>
              <div className="flex flex-wrap gap-2">
                {coreSalesSkills.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-light">
                    {skill["Core Sales Skills"]}
                  </span>
                ))}
              </div>
            </div>
          )}

          {coreMedicalSkills.length > 0 && (
            <div>
              <h3 className="font-medium text-gray-800 mb-2">Core Medical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {coreMedicalSkills.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-light">
                    {skill["Skill"]}
                  </span>
                ))}
              </div>
            </div>
          )}

          {labSkills.length > 0 && (
            <div>
              <h3 className="font-medium text-gray-800 mb-2">Lab & Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {labSkills.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-light">
                    {skill["Skill"]}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Teaching Skills (Special format) */}
          {teachingSkills && (
            <div className="md:col-span-2">
              <h3 className="font-medium text-gray-800 mb-2">Teaching Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                {teachingSkills["Core Teaching Skills"] && (
                  <div>
                    <p className="font-medium text-gray-700 mb-1">Core Skills</p>
                    <p className="text-gray-600 leading-relaxed">{teachingSkills["Core Teaching Skills"]}</p>
                  </div>
                )}
                {teachingSkills["Digital Tools"] && (
                  <div>
                    <p className="font-medium text-gray-700 mb-1">Digital Tools</p>
                    <p className="text-gray-600 leading-relaxed">{teachingSkills["Digital Tools"]}</p>
                  </div>
                )}
                {teachingSkills["Soft Skills"] && (
                  <div>
                    <p className="font-medium text-gray-700 mb-1">Soft Skills</p>
                    <p className="text-gray-600 leading-relaxed">{teachingSkills["Soft Skills"]}</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Tools & Software */}
          {tools.length > 0 && (
            <div>
              <h3 className="font-medium text-gray-800 mb-2">Tools & Software</h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => {
                  const toolText = tool["Tool/Software"] || tool["Tools/Softwares"];
                  return toolText ? (
                    <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-light">
                      {toolText}
                    </span>
                  ) : null;
                })}
              </div>
            </div>
          )}

          {/* Soft Skills */}
          {softSkills.length > 0 && (
            <div>
              <h3 className="font-medium text-gray-800 mb-2">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, index) => {
                  const skillText = skill["Soft Skills"] || skill["Soft Skill"] || skill["Skill"];
                  return skillText ? (
                    <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-light">
                      {skillText}
                    </span>
                  ) : null;
                })}
              </div>
            </div>
          )}
        </div>
      </section>
    );
  };

  const renderCertifications = () => {
    if (!hasData("certifications")) return null;

    const certData = getArrayData("certifications");

    return (
      <section className="mb-8">
        <h2 className="section-title text-lg font-light text-gray-800 mb-4 pb-2 border-b border-gray-200">
          Certifications
        </h2>
        <div className="space-y-3">
          {certData.map((cert, index) => {
            const name = cert["Course/Certification Name"] || cert["Certification Name"] || cert["Certification Title"];
            const date = cert["Date"] || cert["Year"];

            if (!name) return null;

            return (
              <div key={index} className="flex justify-between items-center">
                <span className="text-gray-800 font-light">{name}</span>
                {date && <span className="text-sm text-gray-600">{date}</span>}
              </div>
            );
          })}
        </div>
      </section>
    );
  };

  const renderAchievements = () => {
    if (!hasData("achievements")) return null;

    const achievementData = getArrayData("achievements");

    return (
      <section className="mb-8">
        <h2 className="section-title text-lg font-light text-gray-800 mb-4 pb-2 border-b border-gray-200">
          Achievements
        </h2>
        <div className="space-y-3">
          {achievementData.map((achievement, index) => {
            const title = achievement["Achievements"] || achievement["Achievement"] || achievement["Title"] || achievement["Achievement Title"];
            const description = achievement["Description"];
            const year = achievement["Year"];

            if (!title) return null;

            return (
              <div key={index}>
                <div className="flex justify-between items-start">
                  <span className="text-gray-800 font-light flex-1">{title}</span>
                  {year && <span className="text-sm text-gray-600 ml-2">{year}</span>}
                </div>
                {description && (
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                    {formatText(description)}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>
    );
  };

  const renderActivities = () => {
    if (!hasData("activities") && !hasData("extracurricular")) return null;

    const activityData = getArrayData("activities").length > 0 ? getArrayData("activities") : getArrayData("extracurricular");

    return (
      <section className="mb-8">
        <h2 className="section-title text-lg font-light text-gray-800 mb-4 pb-2 border-b border-gray-200">
          Extracurricular Activities
        </h2>
        <div className="space-y-3">
          {activityData.map((activity, index) => {
            const title = activity["Activities"] || activity["Activity"] || activity["Activity Title"];
            const description = activity["Description"];
            const year = activity["Year"];

            if (!title) return null;

            return (
              <div key={index}>
                <div className="flex justify-between items-start">
                  <span className="text-gray-800 font-light flex-1">{title}</span>
                  {year && <span className="text-sm text-gray-600 ml-2">{year}</span>}
                </div>
                {description && (
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                    {formatText(description)}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>
    );
  };

  const renderLanguages = () => {
    if (!hasData("languages")) return null;

    const languageData = getArrayData("languages");

    return (
      <section className="mb-8">
        <h2 className="section-title text-lg font-light text-gray-800 mb-4 pb-2 border-b border-gray-200">
          Languages
        </h2>
        <div className="flex flex-wrap gap-3">
          {languageData.map((lang, index) => {
            const language = lang["Languages"] || lang["Language"];
            return language ? (
              <span key={index} className="px-4 py-2 bg-gray-50 text-gray-700 rounded-lg text-sm font-light border border-gray-200">
                {language}
              </span>
            ) : null;
          })}
        </div>
      </section>
    );
  };

  const renderInterests = () => {
    if (!hasData("interests")) return null;

    const interestData = getArrayData("interests");

    return (
      <section className="mb-4">
        <h2 className="section-title text-lg font-light text-gray-800 mb-4 pb-2 border-b border-gray-200">
          Interests
        </h2>
        <div className="flex flex-wrap gap-3">
          {interestData.map((interest, index) => {
            const interestText = interest["Interests"] || interest["Interest"];
            return interestText ? (
              <span key={index} className="px-4 py-2 bg-gray-50 text-gray-700 rounded-lg text-sm font-light border border-gray-200">
                {interestText}
              </span>
            ) : null;
          })}
        </div>
      </section>
    );
  };

  // Special sections for specific careers
  const renderPublications = () => {
    if (!hasData("publications")) return null;

    const publicationData = getArrayData("publications");

    return (
      <section className="mb-8">
        <h2 className="section-title text-lg font-light text-gray-800 mb-4 pb-2 border-b border-gray-200">
          Publications
        </h2>
        <div className="space-y-4">
          {publicationData.map((pub, index) => {
            const title = pub["Article / Blog Title"];
            const platform = pub["Platform (if published)"];
            const link = pub["Link"];
            const summary = pub["Brief Summary"];

            if (!title) return null;

            return (
              <div key={index} className="publication-item">
                <h3 className="font-medium text-gray-800 mb-1">{title}</h3>
                {platform && <p className="text-sm text-gray-600 mb-1">{platform}</p>}
                {link && <p className="text-sm text-blue-600 mb-2 break-all">{link}</p>}
                {summary && (
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {formatText(summary)}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>
    );
  };

  return (
    <div className="simple-sleek-template">
      <div className="a4-page bg-white shadow-sm" style={{
        width: '210mm',
        minHeight: '297mm',
        padding: '20mm',
        margin: '0 auto',
        fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif",
        fontSize: '14px',
        lineHeight: '1.5',
        color: '#374151',
        boxSizing: 'border-box',
        overflow: 'hidden',
        pageBreakAfter: 'auto',
        pageBreakInside: 'auto'
      }}>
        {renderHeader()}
        {renderSummary()}
        {renderEducation()}
        {renderWorkExperience()}
        {renderProjects()}
        {renderPublications()}
        {renderSkills()}
        {renderCertifications()}
        {renderAchievements()}
        {renderActivities()}
        
        {/* Bottom section with languages and interests */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          <div>{renderLanguages()}</div>
          <div>{renderInterests()}</div>
        </div>
      </div>

      <style jsx>{`
        .simple-sleek-template {
          font-family: 'Inter', 'Segoe UI', 'Roboto', sans-serif;
        }
        
        .simple-sleek-template * {
          word-wrap: break-word;
          overflow-wrap: break-word;
        }
        
        .simple-sleek-template .section-title {
          letter-spacing: 0.5px;
        }
        
        .simple-sleek-template h1,
        .simple-sleek-template h2,
        .simple-sleek-template h3 {
          margin: 0;
          padding: 0;
        }
        
        .simple-sleek-template p,
        .simple-sleek-template div {
          margin: 0;
          padding: 0;
        }
        
        @media print {
          .simple-sleek-template .a4-page {
            box-shadow: none;
            margin: 0;
            width: 210mm;
            min-height: 297mm;
            page-break-after: auto;
            page-break-inside: auto;
          }
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .simple-sleek-template .a4-page {
            padding: 15mm;
            width: 100%;
            min-width: auto;
          }
          
          .simple-sleek-template .grid-cols-2 {
            grid-template-columns: 1fr;
          }
          
          .simple-sleek-template .header-section .flex {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          
          .simple-sleek-template .header-section .flex-wrap {
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default SimpleSleekTemplate;