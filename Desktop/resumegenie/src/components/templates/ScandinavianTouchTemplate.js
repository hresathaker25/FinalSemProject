import React from "react";

const ScandinavianTouchTemplate = ({ resumeData, selectedCareer }) => {
  // Helper function to safely get data
  const getSectionData = (sectionKey) => {
    return resumeData[sectionKey] || (Array.isArray(resumeData[sectionKey]) ? [] : {});
  };

  // Helper function to render multiple items
  const renderMultipleItems = (sectionKey, renderItem) => {
    const items = getSectionData(sectionKey);
    if (!Array.isArray(items) || items.length === 0) return null;
    return items.map((item, index) => renderItem(item, index));
  };

  // Helper function to check if section has data
  const hasData = (sectionKey) => {
    const data = getSectionData(sectionKey);
    if (Array.isArray(data)) {
      return data.length > 0 && data.some(item => Object.values(item).some(val => val?.toString().trim()));
    }
    return Object.values(data).some(val => val?.toString().trim());
  };

  const headerData = getSectionData("header");
  const summaryData = getSectionData("summary");

  return (
    <div className="a4-page bg-white" style={{ 
      width: '210mm', 
      minHeight: '297mm', 
      padding: '15mm',
      margin: '0 auto',
      fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      fontSize: '9pt',
      lineHeight: '1.4',
      color: '#2c3e50',
      boxSizing: 'border-box',
      overflow: 'hidden'
    }}>
      
      {/* Header Section */}
      <div style={{ marginBottom: '20mm' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15mm' }}>
          
          {/* Profile Photo */}
          {headerData["Profile Photo"] && (
            <div style={{
              width: '45mm',
              height: '45mm',
              flexShrink: 0,
              borderRadius: '50%',
              overflow: 'hidden',
              border: '2px solid #ecf0f1',
              backgroundColor: '#f8f9fa'
            }}>
              <img
                src={headerData["Profile Photo"]}
                alt="Profile"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          )}
          
          {/* Header Content */}
          <div style={{ flex: 1, minWidth: 0 }}>
            {/* Name */}
            {headerData["Full Name"] && (
              <h1 style={{
                fontSize: '20pt',
                fontWeight: '300',
                color: '#2c3e50',
                margin: '0 0 3mm 0',
                letterSpacing: '0.5px',
                wordBreak: 'break-word'
              }}>
                {headerData["Full Name"]}
              </h1>
            )}
            
            {/* Professional Title */}
            {headerData["Professional Title"] && (
              <div style={{
                fontSize: '11pt',
                color: '#7f8c8d',
                marginBottom: '8mm',
                fontWeight: '400',
                letterSpacing: '0.3px'
              }}>
                {headerData["Professional Title"]}
              </div>
            )}
            
            {/* Contact Information */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(80mm, 1fr))',
              gap: '2mm',
              fontSize: '8.5pt',
              color: '#5d6d7e'
            }}>
              {headerData["Email Address"] && (
                <div style={{ wordBreak: 'break-all' }}>
                  <span style={{ color: '#95a5a6', marginRight: '2mm' }}>Email:</span>
                  {headerData["Email Address"]}
                </div>
              )}
              {headerData["Phone Number"] && (
                <div>
                  <span style={{ color: '#95a5a6', marginRight: '2mm' }}>Phone:</span>
                  {headerData["Phone Number"]}
                </div>
              )}
              {headerData["LinkedIn Profile"] && (
                <div style={{ wordBreak: 'break-all' }}>
                  <span style={{ color: '#95a5a6', marginRight: '2mm' }}>LinkedIn:</span>
                  {headerData["LinkedIn Profile"]}
                </div>
              )}
              {headerData["Github"] && (
                <div style={{ wordBreak: 'break-all' }}>
                  <span style={{ color: '#95a5a6', marginRight: '2mm' }}>GitHub:</span>
                  {headerData["Github"]}
                </div>
              )}
              {headerData["Location (City, Country)"] && (
                <div>
                  <span style={{ color: '#95a5a6', marginRight: '2mm' }}>Location:</span>
                  {headerData["Location (City, Country)"]}
                </div>
              )}
              {headerData["Portfolio / Content Link"] && (
                <div style={{ wordBreak: 'break-all' }}>
                  <span style={{ color: '#95a5a6', marginRight: '2mm' }}>Portfolio:</span>
                  {headerData["Portfolio / Content Link"]}
                </div>
              )}
              {headerData["Instagram / YouTube Handle"] && (
                <div>
                  <span style={{ color: '#95a5a6', marginRight: '2mm' }}>Social:</span>
                  {headerData["Instagram / YouTube Handle"]}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Divider */}
      <div style={{
        width: '100%',
        height: '0.5pt',
        background: 'linear-gradient(to right, #bdc3c7, transparent)',
        marginBottom: '12mm'
      }}></div>

      {/* Main Content Area */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 3px 2fr',
        gap: '8mm',
        alignItems: 'start'
      }}>
        
        {/* Left Column */}
        <div style={{ minWidth: 0 }}>

          {/* Professional Summary */}
          {hasData("summary") && (
            <div style={{ marginBottom: '10mm' }}>
              <h2 style={{
                fontSize: '11pt',
                fontWeight: '500',
                color: '#34495e',
                margin: '0 0 4mm 0',
                letterSpacing: '0.3px',
                textTransform: 'uppercase'
              }}>
                About
              </h2>
              <div style={{
                fontSize: '9pt',
                lineHeight: '1.5',
                color: '#5d6d7e',
                textAlign: 'justify',
                wordBreak: 'break-word'
              }}>
                {summaryData["Summary"]}
              </div>
            </div>
          )}

          {/* Technical Skills */}
          {hasData("techSkills") && (
            <div style={{ marginBottom: '10mm' }}>
              <h2 style={{
                fontSize: '11pt',
                fontWeight: '500',
                color: '#34495e',
                margin: '0 0 4mm 0',
                letterSpacing: '0.3px',
                textTransform: 'uppercase'
              }}>
                Technical Skills
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2mm' }}>
                {renderMultipleItems("techSkills", (skill, index) => (
                  <div key={index} style={{
                    padding: '2.5mm 4mm',
                    backgroundColor: '#f8f9fa',
                    border: '0.5pt solid #ecf0f1',
                    borderRadius: '2mm',
                    fontSize: '8.5pt',
                    color: '#2c3e50',
                    wordBreak: 'break-word'
                  }}>
                    {skill["Technical Skills"] || skill["Skill"] || skill["Tools/Softwares"] || Object.values(skill)[0]}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Core Skills (for different careers) */}
          {hasData("coreSalesSkills") && (
            <div style={{ marginBottom: '10mm' }}>
              <h2 style={{
                fontSize: '11pt',
                fontWeight: '500',
                color: '#34495e',
                margin: '0 0 4mm 0',
                letterSpacing: '0.3px',
                textTransform: 'uppercase'
              }}>
                Core Sales Skills
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2mm' }}>
                {renderMultipleItems("coreSalesSkills", (skill, index) => (
                  <div key={index} style={{
                    padding: '2.5mm 4mm',
                    backgroundColor: '#f8f9fa',
                    border: '0.5pt solid #ecf0f1',
                    borderRadius: '2mm',
                    fontSize: '8.5pt',
                    color: '#2c3e50',
                    wordBreak: 'break-word'
                  }}>
                    {skill["Core Sales Skills"] || Object.values(skill)[0]}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Core Legal Skills */}
          {hasData("coreLegalSkills") && (
            <div style={{ marginBottom: '10mm' }}>
              <h2 style={{
                fontSize: '11pt',
                fontWeight: '500',
                color: '#34495e',
                margin: '0 0 4mm 0',
                letterSpacing: '0.3px',
                textTransform: 'uppercase'
              }}>
                Legal Skills
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2mm' }}>
                {renderMultipleItems("coreLegalSkills", (skill, index) => (
                  <div key={index} style={{
                    padding: '2.5mm 4mm',
                    backgroundColor: '#f8f9fa',
                    border: '0.5pt solid #ecf0f1',
                    borderRadius: '2mm',
                    fontSize: '8.5pt',
                    color: '#2c3e50',
                    wordBreak: 'break-word'
                  }}>
                    {skill["Core Legal Skill"] || Object.values(skill)[0]}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Soft Skills */}
          {hasData("softSkills") && (
            <div style={{ marginBottom: '10mm' }}>
              <h2 style={{
                fontSize: '11pt',
                fontWeight: '500',
                color: '#34495e',
                margin: '0 0 4mm 0',
                letterSpacing: '0.3px',
                textTransform: 'uppercase'
              }}>
                Soft Skills
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2mm' }}>
                {renderMultipleItems("softSkills", (skill, index) => (
                  <div key={index} style={{
                    padding: '2.5mm 4mm',
                    backgroundColor: '#f8f9fa',
                    border: '0.5pt solid #ecf0f1',
                    borderRadius: '2mm',
                    fontSize: '8.5pt',
                    color: '#2c3e50',
                    wordBreak: 'break-word'
                  }}>
                    {skill["Soft Skills"] || skill["Soft Skill"] || Object.values(skill)[0]}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Languages */}
          {hasData("languages") && (
            <div style={{ marginBottom: '10mm' }}>
              <h2 style={{
                fontSize: '11pt',
                fontWeight: '500',
                color: '#34495e',
                margin: '0 0 4mm 0',
                letterSpacing: '0.3px',
                textTransform: 'uppercase'
              }}>
                Languages
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2mm' }}>
                {renderMultipleItems("languages", (lang, index) => (
                  <div key={index} style={{
                    padding: '2.5mm 4mm',
                    backgroundColor: '#f8f9fa',
                    border: '0.5pt solid #ecf0f1',
                    borderRadius: '2mm',
                    fontSize: '8.5pt',
                    color: '#2c3e50',
                    wordBreak: 'break-word'
                  }}>
                    {lang["Languages"] || lang["Language"] || Object.values(lang)[0]}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Interests */}
          {hasData("interests") && (
            <div style={{ marginBottom: '8mm' }}>
              <h2 style={{
                fontSize: '11pt',
                fontWeight: '500',
                color: '#34495e',
                margin: '0 0 4mm 0',
                letterSpacing: '0.3px',
                textTransform: 'uppercase'
              }}>
                Interests
              </h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2mm' }}>
                {renderMultipleItems("interests", (interest, index) => (
                  <span key={index} style={{
                    padding: '1.5mm 3mm',
                    backgroundColor: '#ecf0f1',
                    color: '#5d6d7e',
                    borderRadius: '8px',
                    fontSize: '8pt',
                    fontWeight: '400',
                    wordBreak: 'break-word'
                  }}>
                    {interest["Interests"] || interest["Interest"] || Object.values(interest)[0]}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Vertical Divider */}
        <div style={{
          width: '1pt',
          backgroundColor: '#ecf0f1',
          minHeight: '150mm'
        }}></div>

        {/* Right Column */}
        <div style={{ minWidth: 0 }}>

          {/* Work Experience */}
          {hasData("work") && (
            <div style={{ marginBottom: '10mm' }}>
              <h2 style={{
                fontSize: '11pt',
                fontWeight: '500',
                color: '#34495e',
                margin: '0 0 5mm 0',
                letterSpacing: '0.3px',
                textTransform: 'uppercase'
              }}>
                Experience
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6mm' }}>
                {renderMultipleItems("work", (work, index) => (
                  <div key={index} style={{ wordBreak: 'break-word' }}>
                    <div style={{
                      fontSize: '10pt',
                      fontWeight: '500',
                      color: '#2c3e50',
                      marginBottom: '1mm'
                    }}>
                      {work["Job Title"] || work["Role"] || work["Position"]}
                    </div>
                    <div style={{
                      fontSize: '9pt',
                      color: '#7f8c8d',
                      marginBottom: '1mm'
                    }}>
                      {work["Company Name"] || work["Company / Client"] || work["Organization / Firm"]}
                    </div>
                    <div style={{
                      fontSize: '8pt',
                      color: '#95a5a6',
                      marginBottom: '3mm'
                    }}>
                      {work["Duration"]}
                    </div>
                    {(work["Responsibilities & Achievements"] || work["Responsibilities"] || work["Duties"] || work["Responsibilities & Legal Work"]) && (
                      <div style={{
                        fontSize: '8.5pt',
                        lineHeight: '1.5',
                        color: '#5d6d7e',
                        whiteSpace: 'pre-line',
                        textAlign: 'justify'
                      }}>
                        {work["Responsibilities & Achievements"] || work["Responsibilities"] || work["Duties"] || work["Responsibilities & Legal Work"]}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Projects */}
          {hasData("projects") && (
            <div style={{ marginBottom: '10mm' }}>
              <h2 style={{
                fontSize: '11pt',
                fontWeight: '500',
                color: '#34495e',
                margin: '0 0 5mm 0',
                letterSpacing: '0.3px',
                textTransform: 'uppercase'
              }}>
                Projects
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6mm' }}>
                {renderMultipleItems("projects", (project, index) => (
                  <div key={index} style={{ wordBreak: 'break-word' }}>
                    <div style={{
                      fontSize: '10pt',
                      fontWeight: '500',
                      color: '#2c3e50',
                      marginBottom: '1mm'
                    }}>
                      {project["Project Title"] || project["Title"] || project["Project/Campaign Name"]}
                    </div>
                    {(project["Tools Used"] || project["Tools/Technologies Used"] || project["Platform Used"]) && (
                      <div style={{
                        fontSize: '8pt',
                        color: '#7f8c8d',
                        marginBottom: '2mm'
                      }}>
                        <span style={{ color: '#95a5a6' }}>Tools: </span>
                        {project["Tools Used"] || project["Tools/Technologies Used"] || project["Platform Used"]}
                      </div>
                    )}
                    {(project["Description"] || project["Your Contribution"]) && (
                      <div style={{
                        fontSize: '8.5pt',
                        lineHeight: '1.5',
                        color: '#5d6d7e',
                        whiteSpace: 'pre-line',
                        textAlign: 'justify',
                        marginBottom: '2mm'
                      }}>
                        {project["Description"]}
                      </div>
                    )}
                    {project["Your Contribution"] && project["Description"] && (
                      <div style={{
                        fontSize: '8.5pt',
                        lineHeight: '1.5',
                        color: '#5d6d7e',
                        whiteSpace: 'pre-line',
                        textAlign: 'justify'
                      }}>
                        <span style={{ fontWeight: '500' }}>Contribution: </span>
                        {project["Your Contribution"]}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          {hasData("education") && (
            <div style={{ marginBottom: '10mm' }}>
              <h2 style={{
                fontSize: '11pt',
                fontWeight: '500',
                color: '#34495e',
                margin: '0 0 5mm 0',
                letterSpacing: '0.3px',
                textTransform: 'uppercase'
              }}>
                Education
              </h2>
              <div style={{ wordBreak: 'break-word' }}>
                {getSectionData("education")["Degree Name"] && (
                  <>
                    <div style={{
                      fontSize: '10pt',
                      fontWeight: '500',
                      color: '#2c3e50',
                      marginBottom: '1mm'
                    }}>
                      {getSectionData("education")["Degree Name"]}
                    </div>
                    <div style={{
                      fontSize: '9pt',
                      color: '#7f8c8d',
                      marginBottom: '1mm'
                    }}>
                      {getSectionData("education")["Institution Name"]}
                    </div>
                    <div style={{
                      fontSize: '8pt',
                      color: '#95a5a6',
                      marginBottom: '2mm'
                    }}>
                      {getSectionData("education")["Duration"]} | {getSectionData("education")["CGPA or Percentage"]}
                    </div>
                  </>
                )}
                
                {/* 12th Grade */}
                {getSectionData("education")["12th Grade School Name & Percentage"] && (
                  <div style={{
                    fontSize: '8.5pt',
                    color: '#5d6d7e',
                    marginBottom: '1mm'
                  }}>
                    <span style={{ fontWeight: '500' }}>12th: </span>
                    {getSectionData("education")["12th Grade School Name & Percentage"]}
                  </div>
                )}
                
                {/* 10th Grade */}
                {getSectionData("education")["10th Grade School Name & Percentage"] && (
                  <div style={{
                    fontSize: '8.5pt',
                    color: '#5d6d7e'
                  }}>
                    <span style={{ fontWeight: '500' }}>10th: </span>
                    {getSectionData("education")["10th Grade School Name & Percentage"]}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Certifications */}
          {hasData("certifications") && (
            <div style={{ marginBottom: '10mm' }}>
              <h2 style={{
                fontSize: '11pt',
                fontWeight: '500',
                color: '#34495e',
                margin: '0 0 4mm 0',
                letterSpacing: '0.3px',
                textTransform: 'uppercase'
              }}>
                Certifications
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2mm' }}>
                {renderMultipleItems("certifications", (cert, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    padding: '2mm 0',
                    borderBottom: '0.5pt solid #ecf0f1',
                    wordBreak: 'break-word'
                  }}>
                    <div style={{
                      fontSize: '9pt',
                      color: '#2c3e50',
                      flex: 1,
                      marginRight: '3mm'
                    }}>
                      {cert["Course/Certification Name"] || cert["Certification Name"] || cert["Certification Title"]}
                    </div>
                    <div style={{
                      fontSize: '8pt',
                      color: '#7f8c8d',
                      flexShrink: 0
                    }}>
                      {cert["Date"] || cert["Year"]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Achievements */}
          {hasData("achievements") && (
            <div style={{ marginBottom: '8mm' }}>
              <h2 style={{
                fontSize: '11pt',
                fontWeight: '500',
                color: '#34495e',
                margin: '0 0 4mm 0',
                letterSpacing: '0.3px',
                textTransform: 'uppercase'
              }}>
                Achievements
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3mm' }}>
                {renderMultipleItems("achievements", (achievement, index) => (
                  <div key={index} style={{
                    fontSize: '8.5pt',
                    color: '#2c3e50',
                    paddingLeft: '4mm',
                    position: 'relative',
                    lineHeight: '1.4',
                    wordBreak: 'break-word'
                  }}>
                    <div style={{
                      position: 'absolute',
                      left: '0',
                      top: '2mm',
                      width: '2mm',
                      height: '2mm',
                      backgroundColor: '#bdc3c7',
                      borderRadius: '50%'
                    }}></div>
                    {achievement["Achievements"] || achievement["Achievement"] || achievement["Title"] || Object.values(achievement)[0]}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScandinavianTouchTemplate;