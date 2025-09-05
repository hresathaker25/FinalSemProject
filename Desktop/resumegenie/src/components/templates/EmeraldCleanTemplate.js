import React from "react";

const EmeraldCleanTemplate = ({ resumeData = {}, selectedCareer }) => {
  // Safely get data with fallbacks
  const getFieldValue = (section, field, defaultValue = "") => {
    return resumeData?.[section]?.[field] || defaultValue;
  };

  const getMultipleItems = (section) => {
    const items = resumeData?.[section];
    return Array.isArray(items) ? items : [];
  };

  const hasContent = (section) => {
    const data = resumeData?.[section];
    if (Array.isArray(data)) {
      return data.some(item => 
        Object.values(item || {}).some(value => 
          typeof value === 'string' && value.trim() !== ''
        )
      );
    }
    return Object.values(data || {}).some(value => 
      typeof value === 'string' && value.trim() !== ''
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

  return (
    <div className="a4-page bg-white" style={{ 
      width: '210mm', 
      minHeight: '297mm', 
      margin: '0 auto',
      padding: '0',
      fontFamily: "'Inter', sans-serif",
      fontSize: '11px',
      lineHeight: '1.4',
      color: '#2c3e50',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      position: 'relative'
    }}>
      {/* Elegant Header Section */}
      <div style={{
        background: 'linear-gradient(135deg, #2d5a27 0%, #4a7c59 50%, #6b8e73 100%)',
        padding: '40px 40px 30px 40px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative pattern overlay */}
        <div style={{
          position: 'absolute',
          top: '0',
          right: '0',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          opacity: '0.3'
        }} />
        
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '30px',
          position: 'relative',
          zIndex: '2'
        }}>
          {/* Profile Photo */}
          {getFieldValue("header", "Profile Photo") && (
            <div style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '4px solid rgba(255,255,255,0.3)',
              boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
              flexShrink: '0'
            }}>
              <img
                src={getFieldValue("header", "Profile Photo")}
                alt="Profile"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          )}

          {/* Name and Title */}
          <div style={{ flex: '1' }}>
            <h1 style={{
              fontSize: '32px',
              fontWeight: '700',
              color: 'white',
              margin: '0 0 8px 0',
              letterSpacing: '-0.5px',
              textShadow: '0 2px 4px rgba(0,0,0,0.2)'
            }}>
              {getFieldValue("header", "Full Name") || "Your Name"}
            </h1>
            
            <h2 style={{
              fontSize: '16px',
              fontWeight: '400',
              color: 'rgba(255,255,255,0.9)',
              margin: '0 0 20px 0',
              letterSpacing: '0.5px'
            }}>
              {getFieldValue("header", "Professional Title") || "Professional Title"}
            </h2>

            {/* Contact Information */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '8px',
              fontSize: '12px',
              color: 'rgba(255,255,255,0.9)'
            }}>
              {getFieldValue("header", "Phone Number") && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: 'rgba(255,255,255,0.7)' }}>📞</span>
                  <span>{getFieldValue("header", "Phone Number")}</span>
                </div>
              )}
              {getFieldValue("header", "Email Address") && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: 'rgba(255,255,255,0.7)' }}>✉️</span>
                  <span>{getFieldValue("header", "Email Address")}</span>
                </div>
              )}
              {getFieldValue("header", "LinkedIn Profile") && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: 'rgba(255,255,255,0.7)' }}>💼</span>
                  <span>{getFieldValue("header", "LinkedIn Profile")}</span>
                </div>
              )}
              {getFieldValue("header", "Github") && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: 'rgba(255,255,255,0.7)' }}>🔗</span>
                  <span>{getFieldValue("header", "Github")}</span>
                </div>
              )}
              {getFieldValue("header", "Location (City, Country)") && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: 'rgba(255,255,255,0.7)' }}>📍</span>
                  <span>{getFieldValue("header", "Location (City, Country)")}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ 
        padding: '30px 40px 40px 40px',
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        gap: '40px'
      }}>
        {/* Left Column - Sidebar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Professional Summary */}
          {hasContent("summary") && (
            <div>
              <h3 style={{
                fontSize: '14px',
                fontWeight: '700',
                color: '#2d5a27',
                marginBottom: '12px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                position: 'relative',
                paddingBottom: '8px'
              }}>
                <span style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  width: '30px',
                  height: '2px',
                  background: 'linear-gradient(90deg, #2d5a27, #4a7c59)',
                  borderRadius: '1px'
                }} />
                Professional Summary
              </h3>
              <div style={{
                fontSize: '11px',
                lineHeight: '1.5',
                color: '#34495e',
                textAlign: 'justify'
              }}>
                {formatText(getFieldValue("summary", "Summary"))}
              </div>
            </div>
          )}

          {/* Technical Skills */}
          {hasContent("techSkills") && (
            <div>
              <h3 style={{
                fontSize: '14px',
                fontWeight: '700',
                color: '#2d5a27',
                marginBottom: '12px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                position: 'relative',
                paddingBottom: '8px'
              }}>
                <span style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  width: '30px',
                  height: '2px',
                  background: 'linear-gradient(90deg, #2d5a27, #4a7c59)',
                  borderRadius: '1px'
                }} />
                Technical Skills
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {getMultipleItems("techSkills").map((skill, index) => {
                   const skillValue = skill?.["Technical Skills"] || skill?.["Skill"] || skill?.["Technical Skill"] || skill?.["Marketing / Technical Skills"];
                   if (!skillValue) return null;
                  return (
                    <div key={index} style={{
                      padding: '8px 12px',
                      backgroundColor: '#f8f9fa',
                      border: '1px solid #e9ecef',
                      borderRadius: '6px',
                      fontSize: '10px',
                      color: '#495057',
                      borderLeft: '3px solid #4a7c59'
                    }}>
                      {skillValue}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Core Skills (for specialized careers) */}
          {hasContent("coreLegalSkills") && (
            <div>
              <h3 style={{
                fontSize: '14px',
                fontWeight: '700',
                color: '#2d5a27',
                marginBottom: '12px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                position: 'relative',
                paddingBottom: '8px'
              }}>
                <span style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  width: '30px',
                  height: '2px',
                  background: 'linear-gradient(90deg, #2d5a27, #4a7c59)',
                  borderRadius: '1px'
                }} />
                Core Legal Skills
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {getMultipleItems("coreLegalSkills").map((skill, index) => {
                   const skillValue = skill?.["Core Legal Skill"] || skill?.["Core Legal Skills"];
                   if (!skillValue) return null;
                  return (
                    <div key={index} style={{
                      padding: '8px 12px',
                      backgroundColor: '#f8f9fa',
                      border: '1px solid #e9ecef',
                      borderRadius: '6px',
                      fontSize: '10px',
                      color: '#495057',
                      borderLeft: '3px solid #4a7c59'
                    }}>
                      {skillValue}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Core Sales Skills */}
          {hasContent("coreSalesSkills") && (
            <div>
              <h3 style={{
                fontSize: '14px',
                fontWeight: '700',
                color: '#2d5a27',
                marginBottom: '12px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                position: 'relative',
                paddingBottom: '8px'
              }}>
                <span style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  width: '30px',
                  height: '2px',
                  background: 'linear-gradient(90deg, #2d5a27, #4a7c59)',
                  borderRadius: '1px'
                }} />
                Core Sales Skills
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {getMultipleItems("coreSalesSkills").map((skill, index) => {
                   const skillValue = skill?.["Core Sales Skills"] || skill?.["Core Sales Skill"];
                   if (!skillValue) return null;
                  return (
                    <div key={index} style={{
                      padding: '8px 12px',
                      backgroundColor: '#f8f9fa',
                      border: '1px solid #e9ecef',
                      borderRadius: '6px',
                      fontSize: '10px',
                      color: '#495057',
                      borderLeft: '3px solid #4a7c59'
                    }}>
                      {skillValue}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Core Medical Skills */}
          {hasContent("coreMedicalSkills") && (
            <div>
              <h3 style={{
                fontSize: '14px',
                fontWeight: '700',
                color: '#2d5a27',
                marginBottom: '12px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                position: 'relative',
                paddingBottom: '8px'
              }}>
                <span style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  width: '30px',
                  height: '2px',
                  background: 'linear-gradient(90deg, #2d5a27, #4a7c59)',
                  borderRadius: '1px'
                }} />
                Core Medical Skills
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {getMultipleItems("coreMedicalSkills").map((skill, index) => {
                   const skillValue = skill?.["Skill"] || skill?.["Core Medical Skills"];
                   if (!skillValue) return null;
                  return (
                    <div key={index} style={{
                      padding: '8px 12px',
                      backgroundColor: '#f8f9fa',
                      border: '1px solid #e9ecef',
                      borderRadius: '6px',
                      fontSize: '10px',
                      color: '#495057',
                      borderLeft: '3px solid #4a7c59'
                    }}>
                      {skillValue}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Soft Skills */}
          {hasContent("softSkills") && (
            <div>
              <h3 style={{
                fontSize: '14px',
                fontWeight: '700',
                color: '#2d5a27',
                marginBottom: '12px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                position: 'relative',
                paddingBottom: '8px'
              }}>
                <span style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  width: '30px',
                  height: '2px',
                  background: 'linear-gradient(90deg, #2d5a27, #4a7c59)',
                  borderRadius: '1px'
                }} />
                Soft Skills
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {getMultipleItems("softSkills").map((skill, index) => {
                  const skillValue = skill?.["Soft Skills"] || skill?.["Soft Skill"] || skill?.["Skill"];
                  if (!skillValue) return null;
                  return (
                    <div key={index} style={{
                      padding: '8px 12px',
                      backgroundColor: '#f8f9fa',
                      border: '1px solid #e9ecef',
                      borderRadius: '6px',
                      fontSize: '10px',
                      color: '#495057',
                      borderLeft: '3px solid #4a7c59'
                    }}>
                      {skillValue}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Languages */}
          {hasContent("languages") && (
            <div>
              <h3 style={{
                fontSize: '14px',
                fontWeight: '700',
                color: '#2d5a27',
                marginBottom: '12px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                position: 'relative',
                paddingBottom: '8px'
              }}>
                <span style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  width: '30px',
                  height: '2px',
                  background: 'linear-gradient(90deg, #2d5a27, #4a7c59)',
                  borderRadius: '1px'
                }} />
                Languages
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {getMultipleItems("languages").map((lang, index) => {
                  const langValue = lang?.["Languages"] || lang?.["Language"];
                  if (!langValue) return null;
                  return (
                    <div key={index} style={{
                      fontSize: '10px',
                      color: '#495057',
                      padding: '4px 0'
                    }}>
                      • {langValue}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Interests */}
          {hasContent("interests") && (
            <div>
              <h3 style={{
                fontSize: '14px',
                fontWeight: '700',
                color: '#2d5a27',
                marginBottom: '12px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                position: 'relative',
                paddingBottom: '8px'
              }}>
                <span style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  width: '30px',
                  height: '2px',
                  background: 'linear-gradient(90deg, #2d5a27, #4a7c59)',
                  borderRadius: '1px'
                }} />
                Interests
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {getMultipleItems("interests").map((interest, index) => {
                  const interestValue = interest?.["Interests"] || interest?.["Interest"];
                  if (!interestValue) return null;
                  return (
                    <div key={index} style={{
                      fontSize: '10px',
                      color: '#495057',
                      padding: '4px 0'
                    }}>
                      • {interestValue}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Right Column - Main Content */}
        <div>
          {/* Education */}
          {hasContent("education") && (
            <div style={{ marginBottom: '30px' }}>
              <h3 style={{
                fontSize: '16px',
                fontWeight: '700',
                color: '#2d5a27',
                marginBottom: '15px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                position: 'relative',
                paddingBottom: '10px'
              }}>
                <span style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  right: '0',
                  height: '2px',
                  background: 'linear-gradient(90deg, #2d5a27, #4a7c59, transparent)',
                  borderRadius: '1px'
                }} />
                Education
              </h3>
              
              <div style={{
                backgroundColor: '#f8f9fa',
                border: '1px solid #e9ecef',
                borderRadius: '8px',
                padding: '20px',
                borderLeft: '4px solid #4a7c59'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '8px'
                }}>
                  <h4 style={{
                    fontSize: '13px',
                    fontWeight: '600',
                    color: '#2c3e50',
                    margin: '0'
                  }}>
                    {getFieldValue("education", "Degree Name") || 
                     getFieldValue("education", "Degree / Course Name")}
                  </h4>
                  <span style={{
                    fontSize: '10px',
                    color: '#6c757d',
                    fontWeight: '500',
                    backgroundColor: 'white',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    border: '1px solid #e9ecef'
                  }}>
                    {getFieldValue("education", "Duration") || 
                     getFieldValue("education", "Duration (Start – End or 'Present')")}
                  </span>
                </div>
                
                <p style={{
                  fontSize: '11px',
                  color: '#495057',
                  margin: '0 0 6px 0',
                  fontWeight: '500'
                }}>
                  {getFieldValue("education", "Institution Name")}
                </p>
                
                {getFieldValue("education", "CGPA or Percentage") && (
                  <p style={{
                    fontSize: '10px',
                    color: '#6c757d',
                    margin: '0'
                  }}>
                    Grade: {getFieldValue("education", "CGPA or Percentage")}
                  </p>
                )}

                {/* 10th and 12th Grade */}
                <div style={{ marginTop: '15px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  {getFieldValue("education", "10th Grade School Name & Percentage") && (
                    <div style={{
                      fontSize: '9px',
                      color: '#6c757d',
                      backgroundColor: 'white',
                      padding: '8px',
                      borderRadius: '4px',
                      border: '1px solid #e9ecef'
                    }}>
                      <strong>10th:</strong><br />
                      {getFieldValue("education", "10th Grade School Name & Percentage")}
                    </div>
                  )}
                  {getFieldValue("education", "12th Grade School Name & Percentage") && (
                    <div style={{
                      fontSize: '9px',
                      color: '#6c757d',
                      backgroundColor: 'white',
                      padding: '8px',
                      borderRadius: '4px',
                      border: '1px solid #e9ecef'
                    }}>
                      <strong>12th:</strong><br />
                      {getFieldValue("education", "12th Grade School Name & Percentage")}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Work Experience */}
          {hasContent("work") && (
            <div style={{ marginBottom: '30px' }}>
              <h3 style={{
                fontSize: '16px',
                fontWeight: '700',
                color: '#2d5a27',
                marginBottom: '15px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                position: 'relative',
                paddingBottom: '10px'
              }}>
                <span style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  right: '0',
                  height: '2px',
                  background: 'linear-gradient(90deg, #2d5a27, #4a7c59, transparent)',
                  borderRadius: '1px'
                }} />
                Work Experience
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {getMultipleItems("work").map((work, index) => {
                  const hasWorkContent = Object.values(work || {}).some(value => 
                    typeof value === 'string' && value.trim() !== ''
                  );
                  if (!hasWorkContent) return null;

                  return (
                    <div key={index} style={{
                      backgroundColor: '#f8f9fa',
                      border: '1px solid #e9ecef',
                      borderRadius: '8px',
                      padding: '20px',
                      borderLeft: '4px solid #4a7c59',
                      position: 'relative'
                    }}>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        marginBottom: '8px'
                      }}>
                        <h4 style={{
                          fontSize: '13px',
                          fontWeight: '600',
                          color: '#2c3e50',
                          margin: '0'
                        }}>
                          {work?.["Job Title"] || work?.["Role"] || work?.["Position"]}
                        </h4>
                        <span style={{
                          fontSize: '10px',
                          color: '#6c757d',
                          fontWeight: '500',
                          backgroundColor: 'white',
                          padding: '4px 8px',
                          borderRadius: '4px',
                          border: '1px solid #e9ecef'
                        }}>
                          {work?.["Duration"]}
                        </span>
                      </div>
                      
                      <p style={{
                        fontSize: '11px',
                        color: '#495057',
                        margin: '0 0 12px 0',
                        fontWeight: '500'
                      }}>
                        {work?.["Company Name"] || work?.["Company / Client"] || work?.["Organization / Firm"]}
                      </p>
                      
                      <div style={{
                        fontSize: '10px',
                        color: '#495057',
                        lineHeight: '1.6'
                      }}>
                        {formatText(work?.["Responsibilities & Achievements"] || work?.["Responsibilities"] || work?.["Duties"] || work?.["Responsibilities & Legal Work"])}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Projects */}
          {hasContent("projects") && (
            <div style={{ marginBottom: '30px' }}>
              <h3 style={{
                fontSize: '16px',
                fontWeight: '700',
                color: '#2d5a27',
                marginBottom: '15px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                position: 'relative',
                paddingBottom: '10px'
              }}>
                <span style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  right: '0',
                  height: '2px',
                  background: 'linear-gradient(90deg, #2d5a27, #4a7c59, transparent)',
                  borderRadius: '1px'
                }} />
                Projects
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {getMultipleItems("projects").map((project, index) => {
                  const hasProjectContent = Object.values(project || {}).some(value => 
                    typeof value === 'string' && value.trim() !== ''
                  );
                  if (!hasProjectContent) return null;

                  return (
                    <div key={index} style={{
                      backgroundColor: '#f8f9fa',
                      border: '1px solid #e9ecef',
                      borderRadius: '8px',
                      padding: '20px',
                      borderLeft: '4px solid #4a7c59'
                    }}>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        marginBottom: '8px'
                      }}>
                        <h4 style={{
                          fontSize: '13px',
                          fontWeight: '600',
                          color: '#2c3e50',
                          margin: '0',
                          flex: '1'
                        }}>
                          {project?.["Project Title"] || project?.["Project/Campaign Name"] || project?.["Title"]}
                        </h4>
                        {project?.["Year / Role"] && (
                          <span style={{
                            fontSize: '10px',
                            color: '#6c757d',
                            fontWeight: '500',
                            backgroundColor: 'white',
                            padding: '4px 8px',
                            borderRadius: '4px',
                            border: '1px solid #e9ecef',
                            marginLeft: '10px'
                          }}>
                            {project["Year / Role"]}
                          </span>
                        )}
                      </div>
                      
                      {(project?.["Tools Used"] || project?.["Tools/Technologies Used"] || project?.["Platform Used"]) && (
                        <p style={{
                          fontSize: '10px',
                          color: '#4a7c59',
                          margin: '0 0 8px 0',
                          fontWeight: '500'
                        }}>
                          <strong>Tools:</strong> {project?.["Tools Used"] || project?.["Tools/Technologies Used"] || project?.["Platform Used"]}
                        </p>
                      )}
                      
                      <div style={{
                        fontSize: '10px',
                        color: '#495057',
                        lineHeight: '1.6',
                        marginBottom: '8px'
                      }}>
                        {formatText(project?.["Description"] || project?.["Summary & Objective"])}
                      </div>

                      {project?.["Your Contribution"] && (
                        <div style={{
                          fontSize: '10px',
                          color: '#495057',
                          lineHeight: '1.6'
                        }}>
                          <strong style={{ color: '#4a7c59' }}>Contribution:</strong> {formatText(project?.["Your Contribution"])}
                        </div>
                      )}

                      {project?.["Result / Metrics"] && (
                        <div style={{
                          fontSize: '10px',
                          color: '#495057',
                          lineHeight: '1.6',
                          marginTop: '8px'
                        }}>
                          <strong style={{ color: '#4a7c59' }}>Results:</strong> {project?.["Result / Metrics"]}
                        </div>
                      )}

                      {project?.["Key Insights / Results"] && (
                        <div style={{
                          fontSize: '10px',
                          color: '#495057',
                          lineHeight: '1.6',
                          marginTop: '8px'
                        }}>
                          <strong style={{ color: '#4a7c59' }}>Key Insights:</strong> {formatText(project?.["Key Insights / Results"])}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Publications (for Law) */}
          {hasContent("publications") && (
            <div style={{ marginBottom: '30px' }}>
              <h3 style={{
                fontSize: '16px',
                fontWeight: '700',
                color: '#2d5a27',
                marginBottom: '15px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                position: 'relative',
                paddingBottom: '10px'
              }}>
                <span style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  right: '0',
                  height: '2px',
                  background: 'linear-gradient(90deg, #2d5a27, #4a7c59, transparent)',
                  borderRadius: '1px'
                }} />
                Publications
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {getMultipleItems("publications").map((pub, index) => {
                  const hasPubContent = Object.values(pub || {}).some(value => 
                    typeof value === 'string' && value.trim() !== ''
                  );
                  if (!hasPubContent) return null;

                  return (
                    <div key={index} style={{
                      backgroundColor: '#f8f9fa',
                      border: '1px solid #e9ecef',
                      borderRadius: '8px',
                      padding: '15px',
                      borderLeft: '4px solid #4a7c59'
                    }}>
                      <h4 style={{
                        fontSize: '12px',
                        fontWeight: '600',
                        color: '#2c3e50',
                        margin: '0 0 8px 0'
                      }}>
                        {pub?.["Article / Blog Title"]}
                      </h4>
                      
                      {pub?.["Platform (if published)"] && (
                        <p style={{
                          fontSize: '10px',
                          color: '#4a7c59',
                          margin: '0 0 8px 0',
                          fontWeight: '500'
                        }}>
                          Published on: {pub["Platform (if published)"]}
                        </p>
                      )}

                      {pub?.["Link"] && (
                        <p style={{
                          fontSize: '9px',
                          color: '#6c757d',
                          margin: '0 0 8px 0',
                          wordBreak: 'break-all'
                        }}>
                          {pub["Link"]}
                        </p>
                      )}
                      
                      <div style={{
                        fontSize: '10px',
                        color: '#495057',
                        lineHeight: '1.6'
                      }}>
                        {formatText(pub?.["Brief Summary"])}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Certifications */}
          {hasContent("certifications") && (
            <div style={{ marginBottom: '30px' }}>
              <h3 style={{
                fontSize: '16px',
                fontWeight: '700',
                color: '#2d5a27',
                marginBottom: '15px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                position: 'relative',
                paddingBottom: '10px'
              }}>
                <span style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  right: '0',
                  height: '2px',
                  background: 'linear-gradient(90deg, #2d5a27, #4a7c59, transparent)',
                  borderRadius: '1px'
                }} />
                Certifications
              </h3>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                {getMultipleItems("certifications").map((cert, index) => {
                  const certName = cert?.["Course/Certification Name"] || cert?.["Certification Name"] || cert?.["Certification Title"];
                  const certDate = cert?.["Date"] || cert?.["Year"];
                  if (!certName) return null;

                  return (
                    <div key={index} style={{
                      backgroundColor: '#f8f9fa',
                      border: '1px solid #e9ecef',
                      borderRadius: '6px',
                      padding: '12px',
                      borderLeft: '3px solid #4a7c59'
                    }}>
                      <h4 style={{
                        fontSize: '11px',
                        fontWeight: '600',
                        color: '#2c3e50',
                        margin: '0 0 4px 0',
                        lineHeight: '1.3'
                      }}>
                        {certName}
                      </h4>
                      {certDate && (
                        <p style={{
                          fontSize: '9px',
                          color: '#6c757d',
                          margin: '0'
                        }}>
                          {certDate}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Achievements */}
          {hasContent("achievements") && (
            <div style={{ marginBottom: '30px' }}>
              <h3 style={{
                fontSize: '16px',
                fontWeight: '700',
                color: '#2d5a27',
                marginBottom: '15px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                position: 'relative',
                paddingBottom: '10px'
              }}>
                <span style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  right: '0',
                  height: '2px',
                  background: 'linear-gradient(90deg, #2d5a27, #4a7c59, transparent)',
                  borderRadius: '1px'
                }} />
                Achievements
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {getMultipleItems("achievements").map((achievement, index) => {
                  const achievementValue = achievement?.["Achievements"] || achievement?.["Achievement"] || achievement?.["Title"];
                  if (!achievementValue) return null;

                  return (
                    <div key={index} style={{
                      backgroundColor: '#f8f9fa',
                      border: '1px solid #e9ecef',
                      borderRadius: '6px',
                      padding: '15px',
                      borderLeft: '3px solid #4a7c59',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px'
                    }}>
                      <div style={{
                        width: '6px',
                        height: '6px',
                        backgroundColor: '#4a7c59',
                        borderRadius: '50%',
                        marginTop: '4px',
                        flexShrink: '0'
                      }} />
                      <div style={{ flex: '1' }}>
                        <div style={{
                          fontSize: '11px',
                          color: '#2c3e50',
                          lineHeight: '1.5',
                          fontWeight: '500'
                        }}>
                          {achievementValue}
                        </div>
                        {achievement?.["Description"] && (
                          <div style={{
                            fontSize: '10px',
                            color: '#495057',
                            lineHeight: '1.5',
                            marginTop: '4px'
                          }}>
                            {formatText(achievement["Description"])}
                          </div>
                        )}
                        {achievement?.["Year"] && (
                          <div style={{
                            fontSize: '9px',
                            color: '#6c757d',
                            marginTop: '4px'
                          }}>
                            {achievement["Year"]}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Activities */}
          {hasContent("activities") && (
            <div style={{ marginBottom: '20px' }}>
              <h3 style={{
                fontSize: '16px',
                fontWeight: '700',
                color: '#2d5a27',
                marginBottom: '15px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                position: 'relative',
                paddingBottom: '10px'
              }}>
                <span style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  right: '0',
                  height: '2px',
                  background: 'linear-gradient(90deg, #2d5a27, #4a7c59, transparent)',
                  borderRadius: '1px'
                }} />
                Extracurricular Activities
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {getMultipleItems("activities").map((activity, index) => {
                  const activityValue = activity?.["Activities"] || activity?.["Activity"] || activity?.["Activity Title"];
                  if (!activityValue) return null;

                  return (
                    <div key={index} style={{
                      backgroundColor: '#f8f9fa',
                      border: '1px solid #e9ecef',
                      borderRadius: '6px',
                      padding: '15px',
                      borderLeft: '3px solid #4a7c59',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px'
                    }}>
                      <div style={{
                        width: '6px',
                        height: '6px',
                        backgroundColor: '#4a7c59',
                        borderRadius: '50%',
                        marginTop: '4px',
                        flexShrink: '0'
                      }} />
                      <div style={{ flex: '1' }}>
                        <div style={{
                          fontSize: '11px',
                          color: '#2c3e50',
                          lineHeight: '1.5',
                          fontWeight: '500'
                        }}>
                          {activityValue}
                        </div>
                        {activity?.["Description"] && (
                          <div style={{
                            fontSize: '10px',
                            color: '#495057',
                            lineHeight: '1.5',
                            marginTop: '4px'
                          }}>
                            {formatText(activity["Description"])}
                          </div>
                        )}
                        {activity?.["Year"] && (
                          <div style={{
                            fontSize: '9px',
                            color: '#6c757d',
                            marginTop: '4px'
                          }}>
                            {activity["Year"]}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Elegant Footer */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '40px',
        right: '40px',
        textAlign: 'center',
        padding: '10px 0',
        borderTop: '1px solid #e9ecef'
      }}>
        <div style={{
          fontSize: '8px',
          color: '#adb5bd',
          letterSpacing: '0.5px'
        }}>
          Created with ResumeGenie • Professional Resume Builder
        </div>
      </div>
    </div>
  );
};

export default EmeraldCleanTemplate;