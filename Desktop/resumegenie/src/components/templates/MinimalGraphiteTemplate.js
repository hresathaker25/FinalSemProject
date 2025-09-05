import React from "react";

const MinimalGraphiteTemplate = ({ resumeData, selectedCareer }) => {
  // Helper function to get array data safely
  const getArrayData = (key) => {
    const data = resumeData[key];
    if (!data) return [];
    return Array.isArray(data) ? data : [data];
  };

  // Helper function to get single object data safely
  const getSingleData = (key) => {
    const data = resumeData[key];
    if (!data) return {};
    return Array.isArray(data) ? data[0] || {} : data;
  };

  const headerData = getSingleData("header");
  const summaryData = getSingleData("summary");
  const educationData = getSingleData("education");

  // Get profile photo
  const profilePhoto = headerData["Profile Photo"];

  return (
    <div className="a4-page bg-white" style={{ 
      width: '210mm', 
      minHeight: '297mm', 
      maxWidth: '210mm',
      margin: '0 auto',
      fontFamily: '"Inter", "Helvetica Neue", sans-serif',
      fontSize: '9pt',
      lineHeight: '1.4',
      color: '#2d3748',
      overflow: 'hidden'
    }}>
      {/* Header Section */}
      <header style={{
        background: 'linear-gradient(135deg, #4a5568 0%, #2d3748 100%)',
        color: 'white',
        padding: '20mm 15mm 15mm 15mm',
        position: 'relative',
        marginBottom: '8mm'
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'flex-start', 
          gap: '15mm',
          position: 'relative',
          zIndex: 2
        }}>
          {/* Profile Photo */}
          {profilePhoto && (
            <div style={{
              width: '25mm',
              height: '25mm',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '3px solid rgba(255,255,255,0.2)',
              flexShrink: 0,
              background: '#f7fafc'
            }}>
              <img 
                src={profilePhoto} 
                alt="Profile" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          )}

          {/* Header Info */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <h1 style={{
              fontSize: '20pt',
              fontWeight: '700',
              margin: '0 0 2mm 0',
              letterSpacing: '-0.5px',
              lineHeight: '1.2'
            }}>
              {headerData["Full Name"] || "Your Name"}
            </h1>
            
            <h2 style={{
              fontSize: '11pt',
              fontWeight: '400',
              margin: '0 0 6mm 0',
              opacity: 0.9,
              letterSpacing: '0.5px'
            }}>
              {headerData["Professional Title"] || "Your Title"}
            </h2>

            {/* Contact Info */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(35mm, 1fr))',
              gap: '2mm',
              fontSize: '8pt',
              opacity: 0.95
            }}>
              {headerData["Phone Number"] && (
                <div>📱 {headerData["Phone Number"]}</div>
              )}
              {headerData["Email Address"] && (
                <div>✉️ {headerData["Email Address"]}</div>
              )}
              {headerData["LinkedIn Profile"] && (
                <div>💼 LinkedIn</div>
              )}
              {headerData["Github"] && (
                <div>💻 GitHub</div>
              )}
              {headerData["Location (City, Country)"] && (
                <div>📍 {headerData["Location (City, Country)"]}</div>
              )}
              {headerData["Portfolio / Content Link"] && (
                <div>🌐 Portfolio</div>
              )}
            </div>
          </div>
        </div>

        {/* Elegant decorative element */}
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '40mm',
          height: '40mm',
          background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          transform: 'translate(20mm, -20mm)'
        }}></div>
      </header>

      {/* Main Content */}
      <main style={{ padding: '0 15mm 15mm 15mm' }}>
        {/* Professional Summary */}
        {summaryData["Summary"] && (
          <section style={{ marginBottom: '8mm' }}>
            <h3 style={{
              fontSize: '11pt',
              fontWeight: '600',
              color: '#4a5568',
              margin: '0 0 3mm 0',
              paddingBottom: '1mm',
              borderBottom: '1px solid #e2e8f0',
              letterSpacing: '0.5px'
            }}>
              PROFESSIONAL SUMMARY
            </h3>
            <p style={{
              margin: '0',
              textAlign: 'justify',
              lineHeight: '1.5'
            }}>
              {summaryData["Summary"]}
            </p>
          </section>
        )}

        <div style={{ 
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '8mm',
          alignItems: 'start'
        }}>
          {/* Left Column */}
          <div>
            {/* Education */}
            {(educationData["Degree Name"] || educationData["Institution Name"]) && (
              <section style={{ marginBottom: '8mm' }}>
                <h3 style={{
                  fontSize: '11pt',
                  fontWeight: '600',
                  color: '#4a5568',
                  margin: '0 0 3mm 0',
                  paddingBottom: '1mm',
                  borderBottom: '1px solid #e2e8f0',
                  letterSpacing: '0.5px'
                }}>
                  EDUCATION
                </h3>
                <div>
                  {educationData["Degree Name"] && (
                    <div style={{ fontWeight: '600', marginBottom: '1mm' }}>
                      {educationData["Degree Name"]}
                    </div>
                  )}
                  {educationData["Institution Name"] && (
                    <div style={{ color: '#718096', marginBottom: '1mm' }}>
                      {educationData["Institution Name"]}
                    </div>
                  )}
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    fontSize: '8pt',
                    color: '#718096'
                  }}>
                    {educationData["Duration"] && <span>{educationData["Duration"]}</span>}
                    {educationData["CGPA or Percentage"] && <span>{educationData["CGPA or Percentage"]}</span>}
                  </div>
                  
                  {/* School Details */}
                  {(educationData["10th Grade School Name & Percentage"] || educationData["12th Grade School Name & Percentage"]) && (
                    <div style={{ marginTop: '3mm', fontSize: '8pt', color: '#718096' }}>
                      {educationData["12th Grade School Name & Percentage"] && (
                        <div>12th: {educationData["12th Grade School Name & Percentage"]}</div>
                      )}
                      {educationData["10th Grade School Name & Percentage"] && (
                        <div>10th: {educationData["10th Grade School Name & Percentage"]}</div>
                      )}
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* Technical Skills */}
            {getArrayData("techSkills").filter(item => item["Technical Skills"] || item["Skill"] || item["Technical Skills"] || item["Marketing / Technical Skills"]).length > 0 && (
              <section style={{ marginBottom: '8mm' }}>
                <h3 style={{
                  fontSize: '11pt',
                  fontWeight: '600',
                  color: '#4a5568',
                  margin: '0 0 3mm 0',
                  paddingBottom: '1mm',
                  borderBottom: '1px solid #e2e8f0',
                  letterSpacing: '0.5px'
                }}>
                  TECHNICAL SKILLS
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1mm' }}>
                  {getArrayData("techSkills").map((skill, index) => {
                    const skillText = skill["Technical Skills"] || skill["Skill"] || skill["Marketing / Technical Skills"] || skill["Core Sales Skills"];
                    return skillText ? (
                      <span key={index} style={{
                        background: '#f7fafc',
                        color: '#4a5568',
                        padding: '1mm 3mm',
                        borderRadius: '10px',
                        fontSize: '8pt',
                        border: '1px solid #e2e8f0'
                      }}>
                        {skillText}
                      </span>
                    ) : null;
                  })}
                </div>
              </section>
            )}

            {/* Soft Skills */}
            {getArrayData("softSkills").filter(item => item["Soft Skills"] || item["Soft Skill"]).length > 0 && (
              <section style={{ marginBottom: '8mm' }}>
                <h3 style={{
                  fontSize: '11pt',
                  fontWeight: '600',
                  color: '#4a5568',
                  margin: '0 0 3mm 0',
                  paddingBottom: '1mm',
                  borderBottom: '1px solid #e2e8f0',
                  letterSpacing: '0.5px'
                }}>
                  SOFT SKILLS
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1mm' }}>
                  {getArrayData("softSkills").map((skill, index) => {
                    const skillText = skill["Soft Skills"] || skill["Soft Skill"];
                    return skillText ? (
                      <span key={index} style={{
                        background: '#f7fafc',
                        color: '#4a5568',
                        padding: '1mm 3mm',
                        borderRadius: '10px',
                        fontSize: '8pt',
                        border: '1px solid #e2e8f0'
                      }}>
                        {skillText}
                      </span>
                    ) : null;
                  })}
                </div>
              </section>
            )}

            {/* Languages */}
            {getArrayData("languages").filter(item => item["Languages"] || item["Language"]).length > 0 && (
              <section style={{ marginBottom: '8mm' }}>
                <h3 style={{
                  fontSize: '11pt',
                  fontWeight: '600',
                  color: '#4a5568',
                  margin: '0 0 3mm 0',
                  paddingBottom: '1mm',
                  borderBottom: '1px solid #e2e8f0',
                  letterSpacing: '0.5px'
                }}>
                  LANGUAGES
                </h3>
                <div>
                  {getArrayData("languages").map((lang, index) => {
                    const langText = lang["Languages"] || lang["Language"];
                    return langText ? (
                      <div key={index} style={{ marginBottom: '1mm' }}>
                        {langText}
                      </div>
                    ) : null;
                  })}
                </div>
              </section>
            )}

            {/* Certifications */}
            {getArrayData("certifications").filter(item => item["Course/Certification Name"] || item["Certification Name"] || item["Certification Title"]).length > 0 && (
              <section style={{ marginBottom: '8mm' }}>
                <h3 style={{
                  fontSize: '11pt',
                  fontWeight: '600',
                  color: '#4a5568',
                  margin: '0 0 3mm 0',
                  paddingBottom: '1mm',
                  borderBottom: '1px solid #e2e8f0',
                  letterSpacing: '0.5px'
                }}>
                  CERTIFICATIONS
                </h3>
                <div>
                  {getArrayData("certifications").map((cert, index) => {
                    const certName = cert["Course/Certification Name"] || cert["Certification Name"] || cert["Certification Title"];
                    const certDate = cert["Date"] || cert["Year"];
                    return (certName || certDate) ? (
                      <div key={index} style={{ marginBottom: '2mm' }}>
                        {certName && (
                          <div style={{ fontWeight: '500' }}>{certName}</div>
                        )}
                        {certDate && (
                          <div style={{ fontSize: '8pt', color: '#718096' }}>{certDate}</div>
                        )}
                      </div>
                    ) : null;
                  })}
                </div>
              </section>
            )}
          </div>

          {/* Right Column */}
          <div>
            {/* Work Experience */}
            {getArrayData("work").filter(item => item["Job Title"] || item["Role"] || item["Position"]).length > 0 && (
              <section style={{ marginBottom: '8mm' }}>
                <h3 style={{
                  fontSize: '11pt',
                  fontWeight: '600',
                  color: '#4a5568',
                  margin: '0 0 3mm 0',
                  paddingBottom: '1mm',
                  borderBottom: '1px solid #e2e8f0',
                  letterSpacing: '0.5px'
                }}>
                  EXPERIENCE
                </h3>
                <div>
                  {getArrayData("work").map((job, index) => {
                    const jobTitle = job["Job Title"] || job["Role"] || job["Position"];
                    const company = job["Company Name"] || job["Company / Client"] || job["Organization / Firm"];
                    const duration = job["Duration"];
                    const responsibilities = job["Responsibilities & Achievements"] || job["Responsibilities"] || job["Duties"] || job["Responsibilities & Legal Work"];
                    
                    return (jobTitle || company) ? (
                      <div key={index} style={{ marginBottom: '4mm' }}>
                        {jobTitle && (
                          <div style={{ fontWeight: '600', marginBottom: '0.5mm' }}>
                            {jobTitle}
                          </div>
                        )}
                        <div style={{ 
                          display: 'flex', 
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          marginBottom: '2mm'
                        }}>
                          {company && (
                            <div style={{ color: '#718096', fontSize: '9pt' }}>
                              {company}
                            </div>
                          )}
                          {duration && (
                            <div style={{ fontSize: '8pt', color: '#718096' }}>
                              {duration}
                            </div>
                          )}
                        </div>
                        {responsibilities && (
                          <div style={{ 
                            fontSize: '8pt', 
                            lineHeight: '1.4',
                            color: '#4a5568'
                          }}>
                            {responsibilities.split('\n').map((line, lineIndex) => (
                              line.trim() && (
                                <div key={lineIndex} style={{ marginBottom: '1mm' }}>
                                  • {line.trim()}
                                </div>
                              )
                            ))}
                          </div>
                        )}
                      </div>
                    ) : null;
                  })}
                </div>
              </section>
            )}

            {/* Projects */}
            {getArrayData("projects").filter(item => 
              item["Project Title"] || item["Project/Campaign Name"] || item["Title"] || item["Project/Campaign Name"]
            ).length > 0 && (
              <section style={{ marginBottom: '8mm' }}>
                <h3 style={{
                  fontSize: '11pt',
                  fontWeight: '600',
                  color: '#4a5568',
                  margin: '0 0 3mm 0',
                  paddingBottom: '1mm',
                  borderBottom: '1px solid #e2e8f0',
                  letterSpacing: '0.5px'
                }}>
                  PROJECTS
                </h3>
                <div>
                  {getArrayData("projects").map((project, index) => {
                    const projectTitle = project["Project Title"] || project["Project/Campaign Name"] || project["Title"];
                    const tools = project["Tools Used"] || project["Tools/Technologies Used"] || project["Tools/Softwares"];
                    const description = project["Description"] || project["Your Contribution"] || project["Description / Contribution"];
                    
                    return projectTitle ? (
                      <div key={index} style={{ marginBottom: '4mm' }}>
                        <div style={{ fontWeight: '600', marginBottom: '1mm' }}>
                          {projectTitle}
                        </div>
                        {tools && (
                          <div style={{ 
                            fontSize: '8pt', 
                            color: '#718096',
                            marginBottom: '1mm',
                            fontStyle: 'italic'
                          }}>
                            {tools}
                          </div>
                        )}
                        {description && (
                          <div style={{ 
                            fontSize: '8pt',
                            lineHeight: '1.4',
                            color: '#4a5568'
                          }}>
                            {description}
                          </div>
                        )}
                      </div>
                    ) : null;
                  })}
                </div>
              </section>
            )}

            {/* Achievements */}
            {getArrayData("achievements").filter(item => 
              item["Achievements"] || item["Achievement"] || item["Title"]
            ).length > 0 && (
              <section style={{ marginBottom: '8mm' }}>
                <h3 style={{
                  fontSize: '11pt',
                  fontWeight: '600',
                  color: '#4a5568',
                  margin: '0 0 3mm 0',
                  paddingBottom: '1mm',
                  borderBottom: '1px solid #e2e8f0',
                  letterSpacing: '0.5px'
                }}>
                  ACHIEVEMENTS
                </h3>
                <div>
                  {getArrayData("achievements").map((achievement, index) => {
                    const achievementText = achievement["Achievements"] || achievement["Achievement"] || achievement["Title"];
                    return achievementText ? (
                      <div key={index} style={{ 
                        marginBottom: '2mm',
                        fontSize: '8pt'
                      }}>
                        • {achievementText}
                      </div>
                    ) : null;
                  })}
                </div>
              </section>
            )}

            {/* Interests */}
            {getArrayData("interests").filter(item => item["Interests"] || item["Interest"]).length > 0 && (
              <section style={{ marginBottom: '8mm' }}>
                <h3 style={{
                  fontSize: '11pt',
                  fontWeight: '600',
                  color: '#4a5568',
                  margin: '0 0 3mm 0',
                  paddingBottom: '1mm',
                  borderBottom: '1px solid #e2e8f0',
                  letterSpacing: '0.5px'
                }}>
                  INTERESTS
                </h3>
                <div style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: '2mm',
                  fontSize: '8pt'
                }}>
                  {getArrayData("interests").map((interest, index) => {
                    const interestText = interest["Interests"] || interest["Interest"];
                    return interestText ? (
                      <span key={index}>
                        {interestText}{index < getArrayData("interests").length - 1 ? ' •' : ''}
                      </span>
                    ) : null;
                  })}
                </div>
              </section>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default MinimalGraphiteTemplate;