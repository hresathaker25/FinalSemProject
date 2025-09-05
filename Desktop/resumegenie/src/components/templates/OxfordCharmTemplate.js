import React from "react";

const OxfordCharmTemplate = ({ resumeData, selectedCareer }) => {
  // Debug: Log the data structure
  console.log('OxfordCharmTemplate - resumeData:', resumeData);
  console.log('OxfordCharmTemplate - selectedCareer:', selectedCareer);
  // Helper function to safely get data with fallbacks
  const getData = (section, field = null, index = null) => {
    if (!resumeData || !resumeData[section]) return field ? "" : [];
    
    if (index !== null) {
      return resumeData[section][index]?.[field] || "";
    }
    
    if (field) {
      return resumeData[section][field] || "";
    }
    
    return Array.isArray(resumeData[section]) ? resumeData[section] : resumeData[section];
  };

  // Function to render section with proper data handling
  const renderSection = (sectionKey, title, renderContent, shouldShow = true) => {
    if (!shouldShow) return null;
    
    const sectionData = getData(sectionKey);
    let hasData = false;

    if (Array.isArray(sectionData)) {
      hasData = sectionData.length > 0 && sectionData.some(item => 
        item && typeof item === 'object' && Object.values(item).some(val => val && val.toString().trim())
      );
    } else if (sectionData && typeof sectionData === 'object') {
      hasData = Object.values(sectionData).some(val => val && val.toString().trim());
    } else if (typeof sectionData === 'string') {
      hasData = sectionData.trim().length > 0;
    } else {
      hasData = sectionData && sectionData.toString().trim();
    }

    if (!hasData) return null;

    return (
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ 
          borderBottom: '2px solid #d97706', 
          paddingBottom: '0.25rem', 
          marginBottom: '1rem' 
        }}>
          <h3 style={{
            fontSize: '1.125rem',
            fontWeight: 'bold',
            color: '#1f2937',
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }}>
            {title}
          </h3>
        </div>
        {renderContent()}
      </div>
    );
  };

  return (
    <div 
      className="a4-page"
      style={{
        width: '210mm',
        minHeight: '297mm',
        padding: '20mm',
        fontSize: '11px',
        lineHeight: '1.4',
        fontFamily: '"Times New Roman", Times, serif',
        color: '#2d3748',
        backgroundColor: 'white',
        boxSizing: 'border-box',
        margin: '0 auto',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden'
      }}
    >
      {/* Header Section */}
      <div style={{
        textAlign: 'center',
        marginBottom: '2rem',
        paddingBottom: '1.5rem',
        borderBottom: '4px double #d97706'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '1rem'
        }}>
          {getData('header', 'Profile Photo') && (
            <div style={{ marginRight: '1.5rem' }}>
              <img
                src={getData('header', 'Profile Photo')}
                alt="Profile"
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '3px solid #d97706',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              />
            </div>
          )}
          <div>
            <h1 style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              color: '#111827',
              marginBottom: '0.5rem',
              letterSpacing: '0.025em'
            }}>
              {getData('header', 'Full Name') || 'Your Name'}
            </h1>
            <h2 style={{
              fontSize: '1.125rem',
              color: '#b45309',
              fontWeight: '600',
              fontStyle: 'italic',
              marginBottom: '0.75rem'
            }}>
              {getData('header', 'Professional Title') || 'Professional Title'}
            </h2>
          </div>
        </div>
        
        {/* Contact Information */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1rem',
          fontSize: '0.875rem',
          color: '#4b5563'
        }}>
          {getData('header', 'Phone Number') && (
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#b45309', marginRight: '0.25rem', fontWeight: '500' }}>📞</span>
              {getData('header', 'Phone Number')}
            </span>
          )}
          {getData('header', 'Email Address') && (
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#b45309', marginRight: '0.25rem', fontWeight: '500' }}>✉️</span>
              {getData('header', 'Email Address')}
            </span>
          )}
          {getData('header', 'LinkedIn Profile') && (
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#b45309', marginRight: '0.25rem', fontWeight: '500' }}>🔗</span>
              LinkedIn
            </span>
          )}
          {(getData('header', 'Github') || getData('header', 'Portfolio / Content Link')) && (
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#b45309', marginRight: '0.25rem', fontWeight: '500' }}>💻</span>
              {getData('header', 'Github') ? 'GitHub' : 'Portfolio'}
            </span>
          )}
          {getData('header', 'Location (City, Country)') && (
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#b45309', marginRight: '0.25rem', fontWeight: '500' }}>📍</span>
              {getData('header', 'Location (City, Country)')}
            </span>
          )}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
        {/* Left Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Professional Summary */}
          {renderSection('summary', 'Profile', () => {
            const summaryData = getData('summary');
            const summaryText = summaryData && typeof summaryData === 'object' 
              ? summaryData['Summary'] || Object.values(summaryData)[0] || ''
              : summaryData || '';
            
            return (
              <div style={{
                backgroundColor: '#fffbeb',
                padding: '1rem',
                borderRadius: '0.25rem',
                borderLeft: '4px solid #d97706'
              }}>
                <p style={{
                  textAlign: 'justify',
                  lineHeight: '1.6',
                  fontStyle: 'italic',
                  color: '#374151'
                }}>
                  "{summaryText || 'Professional summary will appear here...'}"
                </p>
              </div>
            );
          })}

          {/* Technical Skills */}
          {renderSection('techSkills', 'Technical Skills', () => (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {getData('techSkills').map((skill, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#d97706',
                    borderRadius: '50%',
                    marginRight: '0.75rem',
                    flexShrink: 0
                  }}></div>
                  <span style={{ fontSize: '0.875rem', fontWeight: '500' }}>
                    {skill['Technical Skills'] || 
                     skill['Skill'] || 
                     skill['Marketing / Technical Skills'] ||
                     skill['Core Legal Skills'] ||
                     skill['Core Sales Skills'] ||
                     skill['Core Legal Skill'] ||
                     skill['Core Sales Skills'] ||
                     Object.values(skill || {})[0] || ''}
                  </span>
                </div>
              ))}
            </div>
          ))}

          {/* Core Legal Skills (for Law career) */}
          {selectedCareer === 'Law' && renderSection('coreLegalSkills', 'Core Legal Skills', () => (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {getData('coreLegalSkills').map((skill, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#d97706',
                    borderRadius: '50%',
                    marginRight: '0.75rem',
                    flexShrink: 0
                  }}></div>
                  <span style={{ fontSize: '0.875rem', fontWeight: '500' }}>
                    {skill['Core Legal Skill'] || Object.values(skill || {})[0] || ''}
                  </span>
                </div>
              ))}
            </div>
          ))}

          {/* Core Sales Skills (for Sales career) */}
          {selectedCareer === 'Sales' && renderSection('coreSalesSkills', 'Core Sales Skills', () => (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {getData('coreSalesSkills').map((skill, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#d97706',
                    borderRadius: '50%',
                    marginRight: '0.75rem',
                    flexShrink: 0
                  }}></div>
                  <span style={{ fontSize: '0.875rem', fontWeight: '500' }}>
                    {skill['Core Sales Skills'] || Object.values(skill || {})[0] || ''}
                  </span>
                </div>
              ))}
            </div>
          ))}

          {/* Soft Skills */}
          {renderSection('softSkills', 'Core Competencies', () => (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {getData('softSkills').map((skill, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#9ca3af',
                    borderRadius: '50%',
                    marginRight: '0.75rem',
                    flexShrink: 0
                  }}></div>
                  <span style={{ fontSize: '0.875rem' }}>
                    {skill['Soft Skills'] || 
                     skill['Soft Skill'] || 
                     Object.values(skill || {})[0] || ''}
                  </span>
                </div>
              ))}
            </div>
          ))}

          {/* Other Skills (for specific careers) */}
          {(selectedCareer === 'Law' || selectedCareer === 'Sales') && renderSection('otherSkills', 'Other Skills', () => (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {getData('otherSkills').map((skill, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#2563eb',
                    borderRadius: '50%',
                    marginRight: '0.75rem',
                    flexShrink: 0
                  }}></div>
                  <span style={{ fontSize: '0.875rem' }}>
                    {skill['Tools / Software'] || 
                     skill['Soft Skill'] ||
                     skill['Tools/Softwares'] ||
                     Object.values(skill || {})[0] || ''}
                  </span>
                </div>
              ))}
            </div>
          ))}

          {/* Languages */}
          {renderSection('languages', 'Languages', () => (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {getData('languages').map((language, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#2563eb',
                    borderRadius: '50%',
                    marginRight: '0.75rem',
                    flexShrink: 0
                  }}></div>
                  <span style={{ fontSize: '0.875rem' }}>
                    {language['Languages'] || 
                     language['Language'] || 
                     Object.values(language || {})[0] || ''}
                  </span>
                </div>
              ))}
            </div>
          ))}

          {/* Interests */}
          {renderSection('interests', 'Interests', () => (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {getData('interests').map((interest, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#059669',
                    borderRadius: '50%',
                    marginRight: '0.75rem',
                    flexShrink: 0
                  }}></div>
                  <span style={{ fontSize: '0.875rem' }}>
                    {interest['Interests'] || 
                     interest['Interest'] || 
                     Object.values(interest || {})[0] || ''}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Education */}
          {renderSection('education', 'Education', () => {
            const educationData = getData('education');
            
            // Handle both single object and array formats
            if (!educationData || (Array.isArray(educationData) && educationData.length === 0)) {
              return null;
            }

            // If it's not an array, make it one for consistent handling
            const eduItems = Array.isArray(educationData) ? educationData : [educationData];
            
            return (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {eduItems.map((edu, index) => {
                  if (!edu || typeof edu !== 'object') return null;
                  
                  return (
                    <div key={index} style={{
                      borderLeft: '3px solid #d97706',
                      paddingLeft: '1rem',
                      paddingBottom: '0.75rem'
                    }}>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        marginBottom: '0.25rem'
                      }}>
                        <h4 style={{ fontWeight: 'bold', color: '#1f2937' }}>
                          {edu['Degree Name'] || 
                           edu['Degree / Course Name'] || 
                           Object.values(edu || {}).find(val => val && val.toString().includes('Degree')) ||
                           'Degree Name'}
                        </h4>
                        <span style={{
                          fontSize: '0.75rem',
                          color: '#4b5563',
                          backgroundColor: '#fef3c7',
                          padding: '0.25rem 0.5rem',
                          borderRadius: '0.25rem'
                        }}>
                          {edu['Duration'] || 
                           edu['Duration (Start – End or \'Present\')'] || 
                           Object.values(edu || {}).find(val => val && val.toString().includes('Duration')) ||
                           'Duration'}
                        </span>
                      </div>
                      <p style={{
                        fontWeight: '600',
                        color: '#b45309',
                        marginBottom: '0.25rem'
                      }}>
                        {edu['Institution Name'] || 
                         Object.values(edu || {}).find(val => val && val.toString().includes('University')) ||
                         Object.values(edu || {}).find(val => val && val.toString().includes('College')) ||
                         'Institution Name'}
                      </p>
                      {(edu['CGPA or Percentage'] || edu['CGPA / Percentage']) && (
                        <p style={{ fontSize: '0.875rem', color: '#4b5563' }}>
                          <span style={{ fontWeight: '500' }}>Grade:</span> {edu['CGPA or Percentage'] || edu['CGPA / Percentage']}
                        </p>
                      )}
                    </div>
                  );
                })}
                
                {/* Secondary Education - handle both formats */}
                {(educationData['12th Grade School Name & Percentage'] || 
                  educationData['10th Grade School Name & Percentage'] ||
                  educationData['12th School Name'] ||
                  educationData['10th School Name'] ||
                  Object.values(educationData || {}).some(val => val && val.toString().includes('12th')) ||
                  Object.values(educationData || {}).some(val => val && val.toString().includes('10th'))) && (
                  <div style={{
                    marginTop: '1rem',
                    paddingTop: '0.75rem',
                    borderTop: '1px solid #e5e7eb'
                  }}>
                    <h5 style={{
                      fontWeight: '600',
                      fontSize: '0.875rem',
                      color: '#374151',
                      marginBottom: '0.5rem'
                    }}>
                      Secondary Education
                    </h5>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '0.75rem',
                      fontSize: '0.875rem'
                    }}>
                      {(educationData['12th Grade School Name & Percentage'] || 
                        (educationData['12th School Name'] && educationData['12th Percentage']) ||
                        Object.values(educationData || {}).find(val => val && val.toString().includes('12th'))) && (
                        <div>
                          <span style={{ fontWeight: '500' }}>12th Grade:</span>
                          <p style={{ color: '#4b5563' }}>
                            {educationData['12th Grade School Name & Percentage'] || 
                             `${educationData['12th School Name']} - ${educationData['12th Percentage']}` ||
                             Object.values(educationData || {}).find(val => val && val.toString().includes('12th'))}
                          </p>
                        </div>
                      )}
                      {(educationData['10th Grade School Name & Percentage'] || 
                        (educationData['10th School Name'] && educationData['10th Percentage']) ||
                        Object.values(educationData || {}).find(val => val && val.toString().includes('10th'))) && (
                        <div>
                          <span style={{ fontWeight: '500' }}>10th Grade:</span>
                          <p style={{ color: '#4b5563' }}>
                            {educationData['10th Grade School Name & Percentage'] || 
                             `${educationData['10th School Name']} - ${educationData['10th Percentage']}` ||
                             Object.values(educationData || {}).find(val => val && val.toString().includes('10th'))}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {/* Work Experience */}
          {renderSection('work', 'Professional Experience', () => (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {getData('work').map((work, index) => (
                <div key={index} style={{
                  borderLeft: '3px solid #9ca3af',
                  paddingLeft: '1rem',
                  paddingBottom: '0.75rem'
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '0.5rem'
                  }}>
                    <div>
                      <h4 style={{ fontWeight: 'bold', color: '#1f2937' }}>
                        {work['Job Title'] || 
                         work['Role'] || 
                         work['Position'] || 
                         'Job Title'}
                      </h4>
                      <p style={{ fontWeight: '600', color: '#b45309' }}>
                        {work['Company Name'] || 
                         work['Company / Client'] || 
                         work['Organization / Firm'] ||
                         work['Hospital / Clinic Name'] ||
                         work['School / Institution'] ||
                         'Company Name'}
                      </p>
                    </div>
                    <span style={{
                      fontSize: '0.75rem',
                      color: '#4b5563',
                      backgroundColor: '#f3f4f6',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '0.25rem',
                      marginLeft: '1rem',
                      flexShrink: 0
                    }}>
                      {work['Duration'] || 'Duration'}
                    </span>
                  </div>
                  <div style={{
                    fontSize: '0.875rem',
                    color: '#374151',
                    lineHeight: '1.6',
                    whiteSpace: 'pre-line'
                  }}>
                    {work['Responsibilities & Achievements'] || 
                     work['Responsibilities'] || 
                     work['Responsibilities & Legal Work'] || 
                     work['Duties'] ||
                     work['Key Responsibilities'] ||
                     'Job responsibilities...'}
                  </div>
                </div>
              ))}
            </div>
          ))}

          {/* Handle different work experience section names */}
          {renderSection('workExperience', 'Work Experience', () => (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {getData('workExperience').map((work, index) => (
                <div key={index} style={{
                  borderLeft: '3px solid #9ca3af',
                  paddingLeft: '1rem',
                  paddingBottom: '0.75rem'
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '0.5rem'
                  }}>
                    <div>
                      <h4 style={{ fontWeight: 'bold', color: '#1f2937' }}>
                        {work['Role'] || 'Role'}
                      </h4>
                      <p style={{ fontWeight: '600', color: '#b45309' }}>
                        {work['Company Name'] || 'Company Name'}
                      </p>
                    </div>
                    <span style={{
                      fontSize: '0.75rem',
                      color: '#4b5563',
                      backgroundColor: '#f3f4f6',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '0.25rem',
                      marginLeft: '1rem',
                      flexShrink: 0
                    }}>
                      {work['Duration'] || 'Duration'}
                    </span>
                  </div>
                  <div style={{
                    fontSize: '0.875rem',
                    color: '#374151',
                    lineHeight: '1.6',
                    whiteSpace: 'pre-line'
                  }}>
                    {work['Responsibilities & Achievements'] || 'Responsibilities...'}
                  </div>
                </div>
              ))}
            </div>
          ))}

          {/* Internships (for specific careers) */}
          {renderSection('internships', 'Internships / Teaching Practice', () => (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {getData('internships').map((internship, index) => (
                <div key={index} style={{
                  borderLeft: '3px solid #9ca3af',
                  paddingLeft: '1rem',
                  paddingBottom: '0.75rem'
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '0.5rem'
                  }}>
                    <div>
                      <h4 style={{ fontWeight: 'bold', color: '#1f2937' }}>
                        {internship['Role'] || 'Role'}
                      </h4>
                      <p style={{ fontWeight: '600', color: '#b45309' }}>
                        {internship['School / Institution'] || 'Institution'}
                      </p>
                    </div>
                    <span style={{
                      fontSize: '0.75rem',
                      color: '#4b5563',
                      backgroundColor: '#f3f4f6',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '0.25rem',
                      marginLeft: '1rem',
                      flexShrink: 0
                    }}>
                      {internship['Duration'] || 'Duration'}
                    </span>
                  </div>
                  <div style={{
                    fontSize: '0.875rem',
                    color: '#374151',
                    lineHeight: '1.6',
                    whiteSpace: 'pre-line'
                  }}>
                    {internship['Key Responsibilities'] || 'Responsibilities...'}
                  </div>
                </div>
              ))}
            </div>
          ))}

          {/* Experience (for Medical career) */}
          {renderSection('experience', 'Clinical Experience', () => (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {getData('experience').map((exp, index) => (
                <div key={index} style={{
                  borderLeft: '3px solid #9ca3af',
                  paddingLeft: '1rem',
                  paddingBottom: '0.75rem'
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '0.5rem'
                  }}>
                    <div>
                      <h4 style={{ fontWeight: 'bold', color: '#1f2937' }}>
                        {exp['Role'] || 'Role'}
                      </h4>
                      <p style={{ fontWeight: '600', color: '#b45309' }}>
                        {exp['Hospital / Clinic Name'] || 'Hospital/Clinic'}
                      </p>
                      {exp['Departments Rotated'] && (
                        <p style={{ fontSize: '0.875rem', color: '#4b5563' }}>
                          Departments: {exp['Departments Rotated']}
                        </p>
                      )}
                    </div>
                  </div>
                  <div style={{
                    fontSize: '0.875rem',
                    color: '#374151',
                    lineHeight: '1.6',
                    whiteSpace: 'pre-line'
                  }}>
                    {exp['Key Responsibilities'] || 'Responsibilities...'}
                  </div>
                </div>
              ))}
            </div>
          ))}

          {/* Projects */}
          {renderSection('projects', 'Notable Projects', () => (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {getData('projects').map((project, index) => (
                <div key={index} style={{
                  backgroundColor: '#f9fafb',
                  padding: '0.75rem',
                  borderRadius: '0.25rem',
                  borderLeft: '4px solid #d97706'
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '0.5rem'
                  }}>
                    <h4 style={{ fontWeight: 'bold', color: '#1f2937' }}>
                      {project['Project Title'] || 
                       project['Project/Campaign Name'] || 
                       project['Title'] ||
                       'Project Title'}
                    </h4>
                    {(project['Year / Role'] || project['Year'] || project['Project Type']) && (
                      <span style={{
                        fontSize: '0.75rem',
                        color: '#4b5563',
                        backgroundColor: 'white',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '0.25rem'
                      }}>
                        {project['Year / Role'] || project['Year'] || project['Project Type']}
                      </span>
                    )}
                  </div>
                  
                  {/* Tools/Technologies */}
                  {(project['Tools Used'] || 
                    project['Tools/Technologies Used'] || 
                    project['Tools/Softwares'] ||
                    project['Platform Used']) && (
                    <p style={{
                      fontSize: '0.875rem',
                      color: '#b45309',
                      fontWeight: '500',
                      marginBottom: '0.5rem'
                    }}>
                      <span style={{ color: '#4b5563' }}>Technologies:</span> {
                        project['Tools Used'] || 
                        project['Tools/Technologies Used'] || 
                        project['Tools/Softwares'] ||
                        project['Platform Used']
                      }
                    </p>
                  )}

                  {/* Goal/Audience for Marketing */}
                  {project['Goal / Audience'] && (
                    <p style={{
                      fontSize: '0.875rem',
                      color: '#b45309',
                      fontWeight: '500',
                      marginBottom: '0.5rem'
                    }}>
                      <span style={{ color: '#4b5563' }}>Target:</span> {project['Goal / Audience']}
                    </p>
                  )}

                  {/* Topic/Area of Law for Legal projects */}
                  {project['Topic / Area of Law'] && (
                    <p style={{
                      fontSize: '0.875rem',
                      color: '#b45309',
                      fontWeight: '500',
                      marginBottom: '0.5rem'
                    }}>
                      <span style={{ color: '#4b5563' }}>Area of Law:</span> {project['Topic / Area of Law']}
                    </p>
                  )}

                  {/* What You Sold for Sales projects */}
                  {project['What You Sold / Promoted'] && (
                    <p style={{
                      fontSize: '0.875rem',
                      color: '#b45309',
                      fontWeight: '500',
                      marginBottom: '0.5rem'
                    }}>
                      <span style={{ color: '#4b5563' }}>Product/Service:</span> {project['What You Sold / Promoted']}
                    </p>
                  )}

                  {/* Channels Used for Sales */}
                  {project['Channels Used'] && (
                    <p style={{
                      fontSize: '0.875rem',
                      color: '#b45309',
                      fontWeight: '500',
                      marginBottom: '0.5rem'
                    }}>
                      <span style={{ color: '#4b5563' }}>Channels:</span> {project['Channels Used']}
                    </p>
                  )}
                  
                  <p style={{
                    fontSize: '0.875rem',
                    color: '#374151',
                    marginBottom: '0.5rem',
                    lineHeight: '1.6'
                  }}>
                    {project['Description'] || 
                     project['Description / Contribution'] || 
                     project['Brief Summary'] ||
                     project['Summary & Objective'] ||
                     'Project description...'}
                  </p>
                  
                  {/* Your Contribution */}
                  {project['Your Contribution'] && (
                    <p style={{
                      fontSize: '0.875rem',
                      color: '#4b5563',
                      fontStyle: 'italic'
                    }}>
                      <span style={{ fontWeight: '500' }}>Contribution:</span> {project['Your Contribution']}
                    </p>
                  )}

                  {/* Results/Metrics for Marketing/Sales */}
                  {(project['Result / Metrics'] || project['Conversion / Engagement Stats']) && (
                    <p style={{
                      fontSize: '0.875rem',
                      color: '#059669',
                      fontWeight: '500',
                      marginTop: '0.5rem'
                    }}>
                      <span style={{ color: '#4b5563' }}>Results:</span> {project['Result / Metrics'] || project['Conversion / Engagement Stats']}
                    </p>
                  )}

                  {/* Findings for Medical/Research projects */}
                  {project['Findings'] && (
                    <p style={{
                      fontSize: '0.875rem',
                      color: '#059669',
                      fontWeight: '500',
                      marginTop: '0.5rem'
                    }}>
                      <span style={{ color: '#4b5563' }}>Findings:</span> {project['Findings']}
                    </p>
                  )}

                  {/* Key Insights for Finance */}
                  {project['Key Insights / Results'] && (
                    <p style={{
                      fontSize: '0.875rem',
                      color: '#059669',
                      fontWeight: '500',
                      marginTop: '0.5rem'
                    }}>
                      <span style={{ color: '#4b5563' }}>Results:</span> {project['Key Insights / Results']}
                    </p>
                  )}
                </div>
              ))}
            </div>
          ))}

          {/* Certifications */}
          {renderSection('certifications', 'Certifications & Credentials', () => (
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '0.75rem'
            }}>
              {getData('certifications').map((cert, index) => (
                <div key={index} style={{
                  backgroundColor: '#fffbeb',
                  padding: '0.75rem',
                  borderRadius: '0.25rem',
                  border: '1px solid #fde68a'
                }}>
                  <h4 style={{
                    fontWeight: '600',
                    color: '#1f2937',
                    fontSize: '0.875rem',
                    marginBottom: '0.25rem'
                  }}>
                    {cert['Course/Certification Name'] || 
                     cert['Certification Name'] || 
                     cert['Certification Title'] || 
                     'Certification Name'}
                  </h4>
                  <p style={{ fontSize: '0.75rem', color: '#4b5563' }}>
                    {cert['Date'] || cert['Year'] || 'Date'}
                  </p>
                </div>
              ))}
            </div>
          ))}

          {/* Achievements */}
          {renderSection('achievements', 'Achievements & Awards', () => (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {getData('achievements').map((achievement, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '12px',
                    height: '12px',
                    backgroundColor: '#d97706',
                    borderRadius: '50%',
                    marginRight: '0.75rem',
                    marginTop: '0.25rem',
                    flexShrink: 0
                  }}></div>
                  <div style={{ flex: 1 }}>
                    {(achievement['Achievement Title'] || achievement['Title']) ? (
                      <div>
                        <h5 style={{
                          fontWeight: '600',
                          fontSize: '0.875rem',
                          color: '#1f2937'
                        }}>
                          {achievement['Achievement Title'] || achievement['Title']}
                        </h5>
                        <p style={{ fontSize: '0.875rem', color: '#374151' }}>
                          {achievement['Description'] || 
                           achievement['Achievement'] || 
                           achievement['Achievements'] || 
                           Object.values(achievement || {})[0] || ''}
                        </p>
                        {achievement['Year'] && (
                          <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>
                            ({achievement['Year']})
                          </span>
                        )}
                      </div>
                    ) : (
                      <span style={{ fontSize: '0.875rem', color: '#374151' }}>
                        {achievement['Achievement'] || 
                         achievement['Achievements'] || 
                         Object.values(achievement || {})[0] || ''}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}

          {/* Extracurricular Activities */}
          {renderSection('activities', 'Leadership & Activities', () => (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {getData('activities').map((activity, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '12px',
                    height: '12px',
                    backgroundColor: '#9ca3af',
                    borderRadius: '50%',
                    marginRight: '0.75rem',
                    marginTop: '0.25rem',
                    flexShrink: 0
                  }}></div>
                  <div style={{ flex: 1 }}>
                    {activity['Activity Title'] ? (
                      <div>
                        <h5 style={{
                          fontWeight: '600',
                          fontSize: '0.875rem',
                          color: '#1f2937'
                        }}>
                          {activity['Activity Title']}
                        </h5>
                        <p style={{ fontSize: '0.875rem', color: '#374151' }}>
                          {activity['Description'] || 
                           activity['Activities'] || 
                           activity['Activity'] || 
                           'Activity description...'}
                        </p>
                        {activity['Year'] && (
                          <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>
                            ({activity['Year']})
                          </span>
                        )}
                      </div>
                    ) : (
                      <span style={{ fontSize: '0.875rem', color: '#374151' }}>
                        {activity['Activities'] || 
                         activity['Activity'] || 
                         Object.values(activity || {})[0] || ''}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}

          {/* Handle different activity section names */}
          {renderSection('extracurricular', 'Extracurricular Activities', () => (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {getData('extracurricular').map((activity, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '12px',
                    height: '12px',
                    backgroundColor: '#9ca3af',
                    borderRadius: '50%',
                    marginRight: '0.75rem',
                    marginTop: '0.25rem',
                    flexShrink: 0
                  }}></div>
                  <div style={{ flex: 1 }}>
                    <span style={{ fontSize: '0.875rem', color: '#374151' }}>
                      {activity['Activity'] || Object.values(activity || {})[0] || ''}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ))}

          {/* Skills section (for Finance career) */}
          {renderSection('skills', 'Core Finance Skills', () => (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {getData('skills').map((skill, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#d97706',
                    borderRadius: '50%',
                    marginRight: '0.75rem',
                    flexShrink: 0
                  }}></div>
                  <span style={{ fontSize: '0.875rem', fontWeight: '500' }}>
                    {skill['Skill'] || Object.values(skill || {})[0] || ''}
                  </span>
                </div>
              ))}
            </div>
          ))}

          {/* Tools section (for Finance career) */}
          {renderSection('tools', 'Finance Tools & Software', () => (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {getData('tools').map((tool, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#2563eb',
                    borderRadius: '50%',
                    marginRight: '0.75rem',
                    flexShrink: 0
                  }}></div>
                  <span style={{ fontSize: '0.875rem' }}>
                    {tool['Tool/Software'] || Object.values(tool || {})[0] || ''}
                  </span>
                </div>
              ))}
            </div>
          ))}

          {/* Teaching Skills (for Educational career) */}
          {renderSection('teachingSkills', 'Teaching Skills', () => {
            const teachingSkills = getData('teachingSkills');
            if (!teachingSkills || typeof teachingSkills !== 'object') return null;

            return (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {teachingSkills['Core Teaching Skills'] && (
                  <div>
                    <h5 style={{ fontWeight: '600', fontSize: '0.875rem', color: '#1f2937', marginBottom: '0.5rem' }}>
                      Core Teaching Skills
                    </h5>
                    <p style={{ fontSize: '0.875rem', color: '#374151', lineHeight: '1.6' }}>
                      {teachingSkills['Core Teaching Skills']}
                    </p>
                  </div>
                )}
                
                {teachingSkills['Digital Tools'] && (
                  <div>
                    <h5 style={{ fontWeight: '600', fontSize: '0.875rem', color: '#1f2937', marginBottom: '0.5rem' }}>
                      Digital Tools
                    </h5>
                    <p style={{ fontSize: '0.875rem', color: '#374151', lineHeight: '1.6' }}>
                      {teachingSkills['Digital Tools']}
                    </p>
                  </div>
                )}
                
                {teachingSkills['Soft Skills'] && (
                  <div>
                    <h5 style={{ fontWeight: '600', fontSize: '0.875rem', color: '#1f2937', marginBottom: '0.5rem' }}>
                      Soft Skills
                    </h5>
                    <p style={{ fontSize: '0.875rem', color: '#374151', lineHeight: '1.6' }}>
                      {teachingSkills['Soft Skills']}
                    </p>
                  </div>
                )}
              </div>
            );
          })}

          {/* Core Medical Skills */}
          {renderSection('coreMedicalSkills', 'Core Medical Skills', () => (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {getData('coreMedicalSkills').map((skill, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#d97706',
                    borderRadius: '50%',
                    marginRight: '0.75rem',
                    flexShrink: 0
                  }}></div>
                  <span style={{ fontSize: '0.875rem', fontWeight: '500' }}>
                    {skill['Skill'] || Object.values(skill || {})[0] || ''}
                  </span>
                </div>
              ))}
            </div>
          ))}

          {/* Lab Skills */}
          {renderSection('labSkills', 'Lab & Technical Skills', () => (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {getData('labSkills').map((skill, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#2563eb',
                    borderRadius: '50%',
                    marginRight: '0.75rem',
                    flexShrink: 0
                  }}></div>
                  <span style={{ fontSize: '0.875rem' }}>
                    {skill['Skill'] || Object.values(skill || {})[0] || ''}
                  </span>
                </div>
              ))}
            </div>
          ))}

          {/* Schooling (for Educational career) */}
          {renderSection('schooling', 'Secondary Education', () => {
            const schooling = getData('schooling');
            if (!schooling || typeof schooling !== 'object') return null;

            return (
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0.75rem',
                fontSize: '0.875rem'
              }}>
                {(schooling['10th School Name'] && schooling['10th Percentage']) && (
                  <div>
                    <span style={{ fontWeight: '500' }}>10th Grade:</span>
                    <p style={{ color: '#4b5563' }}>
                      {schooling['10th School Name']} - {schooling['10th Percentage']}
                    </p>
                  </div>
                )}
                {(schooling['12th School Name'] && schooling['12th Percentage']) && (
                  <div>
                    <span style={{ fontWeight: '500' }}>12th Grade:</span>
                    <p style={{ color: '#4b5563' }}>
                      {schooling['12th School Name']} - {schooling['12th Percentage']}
                    </p>
                  </div>
                )}
              </div>
            );
          })}

          {/* Legal Publications (for Law career) */}
          {selectedCareer === 'Law' && renderSection('publications', 'Publications & Writing', () => (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {getData('publications').map((pub, index) => (
                <div key={index} style={{
                  backgroundColor: '#eff6ff',
                  padding: '0.75rem',
                  borderRadius: '0.25rem',
                  borderLeft: '4px solid #2563eb'
                }}>
                  <h4 style={{
                    fontWeight: 'bold',
                    fontSize: '0.875rem',
                    color: '#1f2937',
                    marginBottom: '0.25rem'
                  }}>
                    {pub['Article / Blog Title'] || 'Publication Title'}
                  </h4>
                  {pub['Platform (if published)'] && (
                    <p style={{
                      fontSize: '0.75rem',
                      color: '#1d4ed8',
                      fontWeight: '500',
                      marginBottom: '0.5rem'
                    }}>
                      Published in: {pub['Platform (if published)']}
                    </p>
                  )}
                  {pub['Link'] && (
                    <p style={{
                      fontSize: '0.75rem',
                      color: '#1d4ed8',
                      marginBottom: '0.5rem'
                    }}>
                      Link: {pub['Link']}
                    </p>
                  )}
                  <p style={{
                    fontSize: '0.875rem',
                    color: '#374151',
                    lineHeight: '1.6'
                  }}>
                    {pub['Brief Summary'] || 'Publication summary...'}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Footer with elegant border */}
      <div style={{
        marginTop: '2rem',
        paddingTop: '1rem',
        borderTop: '2px double #d97706',
        textAlign: 'center'
      }}>
        <p style={{
          fontSize: '0.75rem',
          color: '#6b7280',
          fontStyle: 'italic'
        }}>
          "Excellence through dedication and continuous learning"
        </p>
      </div>
    </div>
  );
};

export default OxfordCharmTemplate;