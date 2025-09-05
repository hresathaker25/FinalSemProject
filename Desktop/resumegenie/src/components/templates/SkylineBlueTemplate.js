import React from "react";

const SkylineBlueTemplate = ({ resumeData, selectedCareer }) => {
  // Helper function to safely get nested data
  const getSectionData = (sectionKey) => {
    return resumeData[sectionKey] || {};
  };

  // Helper function to get array data
  const getArrayData = (sectionKey) => {
    const data = resumeData[sectionKey];
    return Array.isArray(data) ? data : [];
  };

  // Helper function to check if a value exists and is not empty
  const hasValue = (value) => {
    return value && value.toString().trim() !== "";
  };

  // Helper function to format text with line breaks
  const formatText = (text) => {
    if (!text) return "";
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < text.split('\n').length - 1 && <br />}
      </React.Fragment>
    ));
  };

  const headerData = getSectionData("header");
  const summaryData = getSectionData("summary");
  const educationData = getSectionData("education");
  const workData = getArrayData("work");
  const projectsData = getArrayData("projects");
  const certificationsData = getArrayData("certifications");
  const achievementsData = getArrayData("achievements");
  const activitiesData = getArrayData("activities");
  const techSkillsData = getArrayData("techSkills");
  const softSkillsData = getArrayData("softSkills");
  const languagesData = getArrayData("languages");
  const interestsData = getArrayData("interests");

  // Career-specific data
  const coreLegalSkillsData = getArrayData("coreLegalSkills");
  const coreSalesSkillsData = getArrayData("coreSalesSkills");
  const coreMedicalSkillsData = getArrayData("coreMedicalSkills");

  return (
    <div className="a4-page bg-white shadow-lg mx-auto" style={{
      width: '210mm',
      minHeight: '297mm',
      padding: '15mm',
      fontFamily: 'Arial, sans-serif',
      fontSize: '9pt',
      lineHeight: '1.3',
      color: '#333',
      overflow: 'hidden',
      boxSizing: 'border-box'
    }}>
      {/* Skyline Header with Gradient Background */}
      <div className="relative mb-4" style={{
        background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #60a5fa 100%)',
        padding: '16px',
        borderRadius: '8px',
        color: 'white',
        overflow: 'hidden'
      }}>
        {/* Skyline SVG Background */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 200'%3E%3Cpath d='M0 200V120h20v-40h15v-20h10v-15h12v80h8v-60h15v-25h20v-10h18v95h25v-70h12v-30h15v-20h10v120h30v-80h20v-40h15v-25h12v145h40v-100h25v-50h20v-30h15v180h50v-120h30v-60h25v-40h20v220z' fill='white'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat-x',
          backgroundPosition: 'bottom'
        }} />
        
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex-1">
            <h1 className="text-xl font-bold mb-1" style={{ 
              fontSize: '18pt', 
              fontWeight: 'bold',
              wordWrap: 'break-word',
              lineHeight: '1.2'
            }}>
              {hasValue(headerData["Full Name"]) ? headerData["Full Name"] : "Your Name"}
            </h1>
            <p className="text-sm opacity-90 mb-2" style={{ fontSize: '11pt', fontWeight: '500' }}>
              {hasValue(headerData["Professional Title"]) ? headerData["Professional Title"] : "Professional Title"}
            </p>
            
            <div className="flex flex-wrap gap-3 text-xs" style={{ fontSize: '8pt' }}>
              {hasValue(headerData["Email Address"]) && (
                <span className="flex items-center gap-1">
                  <span>✉</span> {headerData["Email Address"]}
                </span>
              )}
              {hasValue(headerData["Phone Number"]) && (
                <span className="flex items-center gap-1">
                  <span>📞</span> {headerData["Phone Number"]}
                </span>
              )}
              {hasValue(headerData["Location (City, Country)"]) && (
                <span className="flex items-center gap-1">
                  <span>📍</span> {headerData["Location (City, Country)"]}
                </span>
              )}
            </div>
            
            <div className="flex flex-wrap gap-3 text-xs mt-1" style={{ fontSize: '8pt' }}>
              {hasValue(headerData["LinkedIn Profile"]) && (
                <span className="flex items-center gap-1">
                  <span>💼</span> {headerData["LinkedIn Profile"]}
                </span>
              )}
              {hasValue(headerData["Github"]) && (
                <span className="flex items-center gap-1">
                  <span>💻</span> {headerData["Github"]}
                </span>
              )}
              {hasValue(headerData["Portfolio / Content Link"]) && (
                <span className="flex items-center gap-1">
                  <span>🌐</span> {headerData["Portfolio / Content Link"]}
                </span>
              )}
            </div>
          </div>
          
          {hasValue(headerData["Profile Photo"]) && (
            <div className="ml-4 flex-shrink-0">
              <img 
                src={headerData["Profile Photo"]} 
                alt="Profile"
                className="rounded-full border-3 border-white shadow-lg"
                style={{ 
                  width: '60px', 
                  height: '60px', 
                  objectFit: 'cover',
                  border: '3px solid white'
                }}
              />
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4" style={{ fontSize: '9pt' }}>
        {/* Left Column */}
        <div className="col-span-4 space-y-3">
          {/* Professional Summary */}
          {hasValue(summaryData["Summary"]) && (
            <section className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
              <h3 className="font-bold text-blue-800 mb-2 text-xs uppercase tracking-wide">
                Professional Summary
              </h3>
              <p className="text-gray-700 leading-relaxed" style={{ 
                fontSize: '8.5pt',
                wordWrap: 'break-word',
                overflowWrap: 'break-word'
              }}>
                {formatText(summaryData["Summary"])}
              </p>
            </section>
          )}

          {/* Skills Sections */}
          {techSkillsData.length > 0 && (
            <section className="bg-gray-50 p-3 rounded-md">
              <h3 className="font-bold text-blue-800 mb-2 text-xs uppercase tracking-wide flex items-center gap-1">
                <span>🔧</span> Technical Skills
              </h3>
              <div className="space-y-1">
                {techSkillsData.map((skill, index) => (
                  skill["Technical Skills"] && (
                    <div key={index} className="bg-blue-100 px-2 py-1 rounded text-xs text-blue-800 font-medium">
                      {skill["Technical Skills"]}
                    </div>
                  )
                ))}
              </div>
            </section>
          )}

          {softSkillsData.length > 0 && (
            <section className="bg-gray-50 p-3 rounded-md">
              <h3 className="font-bold text-blue-800 mb-2 text-xs uppercase tracking-wide flex items-center gap-1">
                <span>🎯</span> Soft Skills
              </h3>
              <div className="space-y-1">
                {softSkillsData.map((skill, index) => (
                  skill["Soft Skills"] && (
                    <div key={index} className="bg-green-100 px-2 py-1 rounded text-xs text-green-800 font-medium">
                      {skill["Soft Skills"]}
                    </div>
                  )
                ))}
              </div>
            </section>
          )}

          {/* Career-specific skills */}
          {coreLegalSkillsData.length > 0 && (
            <section className="bg-gray-50 p-3 rounded-md">
              <h3 className="font-bold text-blue-800 mb-2 text-xs uppercase tracking-wide flex items-center gap-1">
                <span>⚖️</span> Legal Skills
              </h3>
              <div className="space-y-1">
                {coreLegalSkillsData.map((skill, index) => (
                  skill["Core Legal Skill"] && (
                    <div key={index} className="bg-purple-100 px-2 py-1 rounded text-xs text-purple-800 font-medium">
                      {skill["Core Legal Skill"]}
                    </div>
                  )
                ))}
              </div>
            </section>
          )}

          {coreSalesSkillsData.length > 0 && (
            <section className="bg-gray-50 p-3 rounded-md">
              <h3 className="font-bold text-blue-800 mb-2 text-xs uppercase tracking-wide flex items-center gap-1">
                <span>💰</span> Sales Skills
              </h3>
              <div className="space-y-1">
                {coreSalesSkillsData.map((skill, index) => (
                  skill["Core Sales Skills"] && (
                    <div key={index} className="bg-orange-100 px-2 py-1 rounded text-xs text-orange-800 font-medium">
                      {skill["Core Sales Skills"]}
                    </div>
                  )
                ))}
              </div>
            </section>
          )}

          {coreMedicalSkillsData.length > 0 && (
            <section className="bg-gray-50 p-3 rounded-md">
              <h3 className="font-bold text-blue-800 mb-2 text-xs uppercase tracking-wide flex items-center gap-1">
                <span>🏥</span> Medical Skills
              </h3>
              <div className="space-y-1">
                {coreMedicalSkillsData.map((skill, index) => (
                  skill["Skill"] && (
                    <div key={index} className="bg-red-100 px-2 py-1 rounded text-xs text-red-800 font-medium">
                      {skill["Skill"]}
                    </div>
                  )
                ))}
              </div>
            </section>
          )}

          {/* Languages */}
          {languagesData.length > 0 && (
            <section className="bg-gray-50 p-3 rounded-md">
              <h3 className="font-bold text-blue-800 mb-2 text-xs uppercase tracking-wide flex items-center gap-1">
                <span>🌍</span> Languages
              </h3>
              <div className="space-y-1">
                {languagesData.map((lang, index) => (
                  (lang["Languages"] || lang["Language"]) && (
                    <div key={index} className="text-xs text-gray-700">
                      • {lang["Languages"] || lang["Language"]}
                    </div>
                  )
                ))}
              </div>
            </section>
          )}

          {/* Interests */}
          {interestsData.length > 0 && (
            <section className="bg-gray-50 p-3 rounded-md">
              <h3 className="font-bold text-blue-800 mb-2 text-xs uppercase tracking-wide flex items-center gap-1">
                <span>🎨</span> Interests
              </h3>
              <div className="space-y-1">
                {interestsData.map((interest, index) => (
                  (interest["Interests"] || interest["Interest"]) && (
                    <div key={index} className="text-xs text-gray-700">
                      • {interest["Interests"] || interest["Interest"]}
                    </div>
                  )
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right Column */}
        <div className="col-span-8 space-y-4">
          {/* Education */}
          {(hasValue(educationData["Degree Name"]) || hasValue(educationData["Institution Name"])) && (
            <section>
              <h3 className="font-bold text-blue-800 mb-3 text-sm uppercase tracking-wide border-b-2 border-blue-200 pb-1 flex items-center gap-2">
                <span>🎓</span> Education
              </h3>
              <div className="bg-white border-l-4 border-blue-300 pl-4 py-2">
                {hasValue(educationData["Degree Name"]) && (
                  <h4 className="font-bold text-gray-800" style={{ fontSize: '10pt' }}>
                    {educationData["Degree Name"]}
                  </h4>
                )}
                {hasValue(educationData["Institution Name"]) && (
                  <p className="text-blue-600 font-medium" style={{ fontSize: '9pt' }}>
                    {educationData["Institution Name"]}
                  </p>
                )}
                <div className="flex gap-4 text-xs text-gray-600 mt-1">
                  {hasValue(educationData["Duration"]) && (
                    <span>📅 {educationData["Duration"]}</span>
                  )}
                  {hasValue(educationData["CGPA or Percentage"]) && (
                    <span>📊 {educationData["CGPA or Percentage"]}</span>
                  )}
                </div>
              </div>
            </section>
          )}

          {/* Work Experience */}
          {workData.length > 0 && workData.some(work => hasValue(work["Job Title"]) || hasValue(work["Role"]) || hasValue(work["Position"])) && (
            <section>
              <h3 className="font-bold text-blue-800 mb-3 text-sm uppercase tracking-wide border-b-2 border-blue-200 pb-1 flex items-center gap-2">
                <span>💼</span> Work Experience
              </h3>
              <div className="space-y-3">
                {workData.map((work, index) => {
                  const jobTitle = work["Job Title"] || work["Role"] || work["Position"];
                  const company = work["Company Name"] || work["Company / Client"] || work["Organization / Firm"] || work["Hospital / Clinic Name"];
                  const responsibilities = work["Responsibilities & Achievements"] || work["Responsibilities"] || work["Duties"] || work["Key Responsibilities"] || work["Responsibilities & Legal Work"];
                  
                  if (!jobTitle && !company) return null;
                  
                  return (
                    <div key={index} className="bg-white border-l-4 border-blue-300 pl-4 py-2">
                      {jobTitle && (
                        <h4 className="font-bold text-gray-800" style={{ fontSize: '10pt' }}>
                          {jobTitle}
                        </h4>
                      )}
                      {company && (
                        <p className="text-blue-600 font-medium" style={{ fontSize: '9pt' }}>
                          {company}
                        </p>
                      )}
                      {hasValue(work["Duration"]) && (
                        <p className="text-xs text-gray-600 mb-1">
                          📅 {work["Duration"]}
                        </p>
                      )}
                      {responsibilities && (
                        <div className="text-xs text-gray-700 mt-1" style={{ 
                          wordWrap: 'break-word',
                          overflowWrap: 'break-word'
                        }}>
                          {formatText(responsibilities)}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* Projects */}
          {projectsData.length > 0 && projectsData.some(project => hasValue(project["Project Title"]) || hasValue(project["Title"])) && (
            <section>
              <h3 className="font-bold text-blue-800 mb-3 text-sm uppercase tracking-wide border-b-2 border-blue-200 pb-1 flex items-center gap-2">
                <span>🚀</span> Projects
              </h3>
              <div className="space-y-3">
                {projectsData.map((project, index) => {
                  const title = project["Project Title"] || project["Title"] || project["Project/Campaign Name"];
                  const description = project["Description"] || project["Summary & Objective"];
                  const tools = project["Tools Used"] || project["Tools/Technologies Used"] || project["Platform Used"];
                  const contribution = project["Your Contribution"];
                  
                  if (!title) return null;
                  
                  return (
                    <div key={index} className="bg-white border-l-4 border-green-300 pl-4 py-2">
                      <h4 className="font-bold text-gray-800" style={{ fontSize: '10pt' }}>
                        {title}
                      </h4>
                      {tools && (
                        <p className="text-green-600 font-medium text-xs mb-1">
                          🔧 {tools}
                        </p>
                      )}
                      {description && (
                        <div className="text-xs text-gray-700 mb-1" style={{ 
                          wordWrap: 'break-word',
                          overflowWrap: 'break-word'
                        }}>
                          {formatText(description)}
                        </div>
                      )}
                      {contribution && (
                        <div className="text-xs text-gray-600" style={{ 
                          wordWrap: 'break-word',
                          overflowWrap: 'break-word'
                        }}>
                          <strong>Contribution:</strong> {formatText(contribution)}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* Certifications */}
          {certificationsData.length > 0 && certificationsData.some(cert => hasValue(cert["Course/Certification Name"])) && (
            <section>
              <h3 className="font-bold text-blue-800 mb-3 text-sm uppercase tracking-wide border-b-2 border-blue-200 pb-1 flex items-center gap-2">
                <span>📜</span> Certifications
              </h3>
              <div className="grid grid-cols-1 gap-2">
                {certificationsData.map((cert, index) => {
                  const name = cert["Course/Certification Name"] || cert["Certification Name"] || cert["Certification Title"];
                  const date = cert["Date"] || cert["Year"];
                  
                  if (!name) return null;
                  
                  return (
                    <div key={index} className="bg-yellow-50 border border-yellow-200 p-2 rounded text-xs">
                      <div className="font-medium text-gray-800">{name}</div>
                      {date && <div className="text-gray-600">📅 {date}</div>}
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* Achievements */}
          {achievementsData.length > 0 && achievementsData.some(achievement => hasValue(achievement["Achievements"]) || hasValue(achievement["Achievement"])) && (
            <section>
              <h3 className="font-bold text-blue-800 mb-3 text-sm uppercase tracking-wide border-b-2 border-blue-200 pb-1 flex items-center gap-2">
                <span>🏆</span> Achievements
              </h3>
              <div className="space-y-2">
                {achievementsData.map((achievement, index) => {
                  const text = achievement["Achievements"] || achievement["Achievement"] || achievement["Title"];
                  if (!text) return null;
                  
                  return (
                    <div key={index} className="text-xs text-gray-700 flex items-start gap-2">
                      <span className="text-yellow-500 font-bold">★</span>
                      <span style={{ 
                        wordWrap: 'break-word',
                        overflowWrap: 'break-word'
                      }}>
                        {formatText(text)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* Activities */}
          {activitiesData.length > 0 && activitiesData.some(activity => hasValue(activity["Activities"]) || hasValue(activity["Activity"])) && (
            <section>
              <h3 className="font-bold text-blue-800 mb-3 text-sm uppercase tracking-wide border-b-2 border-blue-200 pb-1 flex items-center gap-2">
                <span>🎯</span> Extracurricular Activities
              </h3>
              <div className="space-y-2">
                {activitiesData.map((activity, index) => {
                  const text = activity["Activities"] || activity["Activity"] || activity["Activity Title"];
                  if (!text) return null;
                  
                  return (
                    <div key={index} className="text-xs text-gray-700 flex items-start gap-2">
                      <span className="text-blue-500">•</span>
                      <span style={{ 
                        wordWrap: 'break-word',
                        overflowWrap: 'break-word'
                      }}>
                        {formatText(text)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkylineBlueTemplate;