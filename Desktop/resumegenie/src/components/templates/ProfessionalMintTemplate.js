import React from "react";

const ProfessionalMintTemplate = ({ resumeData, selectedCareer }) => {
  // Helper function to get section data safely
  const getSection = (key) => {
    return resumeData[key] || (key === 'header' ? {} : []);
  };

  // Helper function to get header data
  const getHeaderData = (field) => {
    const header = getSection('header');
    return header[field] || '';
  };

  // Helper function to check if section has data
  const hasData = (sectionKey) => {
    const data = getSection(sectionKey);
    if (Array.isArray(data)) {
      return data.some(item => 
        Object.values(item).some(value => 
          typeof value === 'string' ? value.trim() : value
        )
      );
    }
    return Object.values(data).some(value => 
      typeof value === 'string' ? value.trim() : value
    );
  };

  // Helper function to render array sections
  const renderArraySection = (sectionKey, title, renderItem) => {
    const data = getSection(sectionKey);
    if (!hasData(sectionKey) || !Array.isArray(data)) return null;

    return (
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b-2 border-mint-400 uppercase tracking-wide">
          {title}
        </h2>
        <div className="space-y-4">
          {data.map((item, index) => {
            const hasContent = Object.values(item).some(value => 
              typeof value === 'string' ? value.trim() : value
            );
            return hasContent ? renderItem(item, index) : null;
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="professional-mint-template">
      <style jsx>{`
        .professional-mint-template {
          --mint-50: #f0fdf4;
          --mint-100: #dcfce7;
          --mint-200: #bbf7d0;
          --mint-300: #86efac;
          --mint-400: #4ade80;
          --mint-500: #22c55e;
          --mint-600: #16a34a;
          --mint-700: #15803d;
          --mint-800: #166534;
          --mint-900: #14532d;
        }
        
        .mint-bg-50 { background-color: var(--mint-50); }
        .mint-bg-100 { background-color: var(--mint-100); }
        .mint-bg-200 { background-color: var(--mint-200); }
        .mint-bg-400 { background-color: var(--mint-400); }
        .mint-bg-600 { background-color: var(--mint-600); }
        .mint-bg-700 { background-color: var(--mint-700); }
        
        .text-mint-600 { color: var(--mint-600); }
        .text-mint-700 { color: var(--mint-700); }
        .text-mint-800 { color: var(--mint-800); }
        
        .border-mint-400 { border-color: var(--mint-400); }
        .border-mint-600 { border-color: var(--mint-600); }
        
        .a4-page {
          width: 210mm;
          min-height: 297mm;
          background: white;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          margin: 0 auto;
          position: relative;
          overflow: hidden;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .profile-image {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid var(--mint-400);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .decorative-line {
          background: linear-gradient(90deg, var(--mint-400) 0%, var(--mint-200) 100%);
          height: 3px;
          border-radius: 2px;
        }

        .content-card {
          background: white;
          border-left: 4px solid var(--mint-400);
          padding: 1rem;
          margin-bottom: 1rem;
          border-radius: 0 8px 8px 0;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }

        .skill-tag {
          display: inline-block;
          background: var(--mint-100);
          color: var(--mint-800);
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.875rem;
          font-weight: 500;
          margin: 0.125rem;
          border: 1px solid var(--mint-200);
        }

        .section-title {
          position: relative;
          display: inline-block;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 40px;
          height: 2px;
          background: var(--mint-400);
          border-radius: 1px;
        }

        @media print {
          .a4-page {
            width: 100%;
            min-height: 100vh;
            box-shadow: none;
            margin: 0;
          }
        }
      `}</style>

      <div className="a4-page">
        {/* Header Section */}
        <div className="mint-bg-700 text-white p-8">
          <div className="flex items-center gap-6">
            {getHeaderData('Profile Photo') && (
              <div className="flex-shrink-0">
                <img
                  src={getHeaderData('Profile Photo')}
                  alt="Profile"
                  className="profile-image"
                />
              </div>
            )}
            
            <div className="flex-1 min-w-0">
              <h1 className="text-3xl font-bold mb-2 break-words">
                {getHeaderData('Full Name') || 'Your Name'}
              </h1>
              <h2 className="text-xl font-light mb-4 text-mint-100 break-words">
                {getHeaderData('Professional Title') || 'Professional Title'}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                {getHeaderData('Phone Number') && (
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 text-mint-200">📱</span>
                    <span className="break-words">{getHeaderData('Phone Number')}</span>
                  </div>
                )}
                {getHeaderData('Email Address') && (
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 text-mint-200">✉️</span>
                    <span className="break-words">{getHeaderData('Email Address')}</span>
                  </div>
                )}
                {getHeaderData('LinkedIn Profile') && (
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 text-mint-200">🔗</span>
                    <span className="break-words">{getHeaderData('LinkedIn Profile')}</span>
                  </div>
                )}
                {getHeaderData('Location (City, Country)') && (
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 text-mint-200">📍</span>
                    <span className="break-words">{getHeaderData('Location (City, Country)')}</span>
                  </div>
                )}
                {getHeaderData('Github') && (
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 text-mint-200">💻</span>
                    <span className="break-words">{getHeaderData('Github')}</span>
                  </div>
                )}
                {getHeaderData('Portfolio / Content Link') && (
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 text-mint-200">🎨</span>
                    <span className="break-words">{getHeaderData('Portfolio / Content Link')}</span>
                  </div>
                )}
                {getHeaderData('Instagram / YouTube Handle') && (
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 text-mint-200">📱</span>
                    <span className="break-words">{getHeaderData('Instagram / YouTube Handle')}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-8">
          {/* Professional Summary */}
          {hasData('summary') && (
            <div className="mb-8">
              <h2 className="section-title text-lg font-semibold text-gray-800 mb-4 uppercase tracking-wide">
                Professional Summary
              </h2>
              <div className="content-card">
                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap break-words">
                  {getSection('summary')['Summary'] || ''}
                </p>
              </div>
            </div>
          )}

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Work Experience */}
              {renderArraySection('work', 'Work Experience', (item, index) => (
                <div key={index} className="content-card">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-800 break-words">
                      {item['Job Title'] || item['Role'] || item['Position'] || 'Position'}
                    </h3>
                    <span className="text-sm text-mint-600 font-medium whitespace-nowrap ml-2">
                      {item['Duration']}
                    </span>
                  </div>
                  <p className="text-mint-700 font-medium mb-2 break-words">
                    {item['Company Name'] || item['Company / Client'] || item['Organization / Firm'] || 'Company'}
                  </p>
                  {(item['Responsibilities & Achievements'] || item['Responsibilities'] || item['Duties'] || item['Responsibilities & Legal Work']) && (
                    <div className="text-gray-600 text-sm whitespace-pre-wrap break-words">
                      {item['Responsibilities & Achievements'] || item['Responsibilities'] || item['Duties'] || item['Responsibilities & Legal Work']}
                    </div>
                  )}
                </div>
              ))}

              {/* Projects */}
              {renderArraySection('projects', 'Projects', (item, index) => (
                <div key={index} className="content-card">
                  <h3 className="font-semibold text-gray-800 mb-2 break-words">
                    {item['Project Title'] || item['Project/Campaign Name'] || item['Title'] || 'Project'}
                  </h3>
                  <div className="space-y-2">
                    {item['Tools Used'] || item['Tools/Technologies Used'] || item['Platform Used'] ? (
                      <div className="flex flex-wrap gap-1">
                        {(item['Tools Used'] || item['Tools/Technologies Used'] || item['Platform Used'])
                          .split(',')
                          .map((tool, i) => (
                            <span key={i} className="skill-tag">
                              {tool.trim()}
                            </span>
                          ))
                        }
                      </div>
                    ) : null}
                    {(item['Description'] || item['Topic / Area of Law'] || item['Goal / Audience']) && (
                      <p className="text-gray-600 text-sm whitespace-pre-wrap break-words">
                        {item['Description'] || item['Topic / Area of Law'] || item['Goal / Audience']}
                      </p>
                    )}
                    {(item['Your Contribution'] || item['Result / Metrics'] || item['Description / Contribution']) && (
                      <p className="text-gray-600 text-sm whitespace-pre-wrap break-words">
                        <span className="font-medium">Contribution: </span>
                        {item['Your Contribution'] || item['Result / Metrics'] || item['Description / Contribution']}
                      </p>
                    )}
                  </div>
                </div>
              ))}

              {/* Education */}
              {hasData('education') && (
                <div className="mb-8">
                  <h2 className="section-title text-lg font-semibold text-gray-800 mb-4 uppercase tracking-wide">
                    Education
                  </h2>
                  <div className="content-card">
                    <div className="space-y-3">
                      {getSection('education')['Degree Name'] || getSection('education')['Degree / Course Name'] ? (
                        <div>
                          <h3 className="font-semibold text-gray-800 break-words">
                            {getSection('education')['Degree Name'] || getSection('education')['Degree / Course Name']}
                          </h3>
                          <p className="text-mint-700 break-words">
                            {getSection('education')['Institution Name']}
                          </p>
                          <div className="flex justify-between items-center text-sm text-gray-600">
                            <span>{getSection('education')['Duration']}</span>
                            {getSection('education')['CGPA or Percentage'] && (
                              <span className="font-medium">
                                {getSection('education')['CGPA or Percentage']}
                              </span>
                            )}
                          </div>
                        </div>
                      ) : null}
                      
                      {(getSection('education')['10th Grade School Name & Percentage'] || getSection('schooling')?.['10th School Name']) && (
                        <div className="text-sm text-gray-600 space-y-1">
                          <div className="break-words">
                            <span className="font-medium">10th Grade: </span>
                            {getSection('education')['10th Grade School Name & Percentage'] || 
                             `${getSection('schooling')?.['10th School Name']} - ${getSection('schooling')?.['10th Percentage']}`}
                          </div>
                          {(getSection('education')['12th Grade School Name & Percentage'] || getSection('schooling')?.['12th School Name']) && (
                            <div className="break-words">
                              <span className="font-medium">12th Grade: </span>
                              {getSection('education')['12th Grade School Name & Percentage'] || 
                               `${getSection('schooling')?.['12th School Name']} - ${getSection('schooling')?.['12th Percentage']}`}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              {/* Skills */}
              {(hasData('techSkills') || hasData('skills') || hasData('coreLegalSkills') || hasData('coreSalesSkills') || hasData('coreMedicalSkills') || hasData('teachingSkills')) && (
                <div>
                  <h2 className="section-title text-lg font-semibold text-gray-800 mb-4 uppercase tracking-wide">
                    Skills
                  </h2>
                  <div className="space-y-4">
                    {hasData('techSkills') && (
                      <div>
                        <h4 className="font-medium text-mint-700 mb-2">Technical Skills</h4>
                        <div className="flex flex-wrap gap-1">
                          {getSection('techSkills').map((item, index) => 
                            item['Technical Skills'] || item['Skill'] ? (
                              <span key={index} className="skill-tag">
                                {item['Technical Skills'] || item['Skill']}
                              </span>
                            ) : null
                          )}
                        </div>
                      </div>
                    )}
                    
                    {hasData('coreLegalSkills') && (
                      <div>
                        <h4 className="font-medium text-mint-700 mb-2">Legal Skills</h4>
                        <div className="flex flex-wrap gap-1">
                          {getSection('coreLegalSkills').map((item, index) => 
                            item['Core Legal Skill'] ? (
                              <span key={index} className="skill-tag">
                                {item['Core Legal Skill']}
                              </span>
                            ) : null
                          )}
                        </div>
                      </div>
                    )}
                    
                    {hasData('coreSalesSkills') && (
                      <div>
                        <h4 className="font-medium text-mint-700 mb-2">Sales Skills</h4>
                        <div className="flex flex-wrap gap-1">
                          {getSection('coreSalesSkills').map((item, index) => 
                            item['Core Sales Skills'] ? (
                              <span key={index} className="skill-tag">
                                {item['Core Sales Skills']}
                              </span>
                            ) : null
                          )}
                        </div>
                      </div>
                    )}
                    
                    {hasData('coreMedicalSkills') && (
                      <div>
                        <h4 className="font-medium text-mint-700 mb-2">Medical Skills</h4>
                        <div className="flex flex-wrap gap-1">
                          {getSection('coreMedicalSkills').map((item, index) => 
                            item['Skill'] ? (
                              <span key={index} className="skill-tag">
                                {item['Skill']}
                              </span>
                            ) : null
                          )}
                        </div>
                      </div>
                    )}
                    
                    {hasData('teachingSkills') && getSection('teachingSkills')['Core Teaching Skills'] && (
                      <div>
                        <h4 className="font-medium text-mint-700 mb-2">Teaching Skills</h4>
                        <div className="flex flex-wrap gap-1">
                          {getSection('teachingSkills')['Core Teaching Skills']
                            .split(',')
                            .map((skill, index) => (
                              <span key={index} className="skill-tag">
                                {skill.trim()}
                              </span>
                            ))
                          }
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Soft Skills */}
              {hasData('softSkills') && (
                <div>
                  <h2 className="section-title text-lg font-semibold text-gray-800 mb-4 uppercase tracking-wide">
                    Soft Skills
                  </h2>
                  <div className="flex flex-wrap gap-1">
                    {getSection('softSkills').map((item, index) => 
                      item['Soft Skills'] || item['Soft Skill'] || item['Skill'] ? (
                        <span key={index} className="skill-tag">
                          {item['Soft Skills'] || item['Soft Skill'] || item['Skill']}
                        </span>
                      ) : null
                    )}
                  </div>
                </div>
              )}

              {/* Languages */}
              {hasData('languages') && (
                <div>
                  <h2 className="section-title text-lg font-semibold text-gray-800 mb-4 uppercase tracking-wide">
                    Languages
                  </h2>
                  <div className="space-y-2">
                    {getSection('languages').map((item, index) => 
                      item['Languages'] || item['Language'] ? (
                        <div key={index} className="text-gray-700 text-sm break-words">
                          {item['Languages'] || item['Language']}
                        </div>
                      ) : null
                    )}
                  </div>
                </div>
              )}

              {/* Certifications */}
              {hasData('certifications') && (
                <div>
                  <h2 className="section-title text-lg font-semibold text-gray-800 mb-4 uppercase tracking-wide">
                    Certifications
                  </h2>
                  <div className="space-y-3">
                    {getSection('certifications').map((item, index) => {
                      const certName = item['Course/Certification Name'] || item['Certification Name'] || item['Certification Title'];
                      const certDate = item['Date'] || item['Year'];
                      
                      return (certName || certDate) ? (
                        <div key={index} className="border-l-2 border-mint-300 pl-3">
                          {certName && (
                            <div className="font-medium text-gray-800 text-sm break-words">{certName}</div>
                          )}
                          {certDate && (
                            <div className="text-mint-600 text-xs">{certDate}</div>
                          )}
                        </div>
                      ) : null;
                    })}
                  </div>
                </div>
              )}

              {/* Achievements */}
              {hasData('achievements') && (
                <div>
                  <h2 className="section-title text-lg font-semibold text-gray-800 mb-4 uppercase tracking-wide">
                    Achievements
                  </h2>
                  <div className="space-y-2">
                    {getSection('achievements').map((item, index) => {
                      const achievement = item['Achievements'] || item['Achievement'] || item['Title'];
                      return achievement ? (
                        <div key={index} className="text-gray-700 text-sm break-words">
                          • {achievement}
                        </div>
                      ) : null;
                    })}
                  </div>
                </div>
              )}

              {/* Interests */}
              {hasData('interests') && (
                <div>
                  <h2 className="section-title text-lg font-semibold text-gray-800 mb-4 uppercase tracking-wide">
                    Interests
                  </h2>
                  <div className="flex flex-wrap gap-1">
                    {getSection('interests').map((item, index) => {
                      const interest = item['Interests'] || item['Interest'];
                      return interest ? (
                        <span key={index} className="skill-tag">
                          {interest}
                        </span>
                      ) : null;
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalMintTemplate;