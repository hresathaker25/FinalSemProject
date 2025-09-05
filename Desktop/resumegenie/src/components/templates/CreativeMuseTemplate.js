import React from "react";

const CreativeMuseTemplate = ({ resumeData, selectedCareer }) => {
  // Helper function to safely access nested data
  const getSectionData = (sectionKey) => {
    return resumeData[sectionKey] || {};
  };

  const getArrayData = (sectionKey) => {
    const data = resumeData[sectionKey];
    return Array.isArray(data) ? data : [];
  };

  // Helper function to check if a field has content
  const hasContent = (value) => {
    return value && value.toString().trim() !== "";
  };

  // Helper function to format multi-line text
  const formatText = (text) => {
    if (!text) return "";
    return text.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        {index < text.split('\n').length - 1 && <br />}
      </span>
    ));
  };

  const headerData = getSectionData("header");
  const summaryData = getSectionData("summary");

  return (
    <div className="creative-muse-template">
      <style jsx>{`
        .creative-muse-template {
          width: 210mm;
          min-height: 297mm;
          margin: 0 auto;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: #2d3748;
          font-family: 'Georgia', 'Times New Roman', serif;
          position: relative;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
        }

        .creative-muse-template::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.08) 0%, transparent 50%);
          pointer-events: none;
        }

        .creative-content {
          position: relative;
          z-index: 1;
          padding: 15mm;
          background: rgba(255, 255, 255, 0.98);
          margin: 10mm;
          border-radius: 20px;
          backdrop-filter: blur(10px);
          box-shadow: 0 25px 80px rgba(0, 0, 0, 0.15);
          min-height: calc(297mm - 20mm);
          box-sizing: border-box;
        }

        .header-section {
          text-align: center;
          padding: 30px 0 40px 0;
          border-bottom: 3px solid transparent;
          background: linear-gradient(white, white) padding-box,
                      linear-gradient(90deg, #667eea, #764ba2) border-box;
          margin-bottom: 35px;
          position: relative;
        }

        .header-section::after {
          content: '';
          position: absolute;
          bottom: -15px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 4px;
          background: linear-gradient(90deg, #667eea, #764ba2);
          border-radius: 2px;
        }

        .profile-image {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          margin: 0 auto 20px auto;
          border: 5px solid transparent;
          background: linear-gradient(white, white) padding-box,
                      linear-gradient(135deg, #667eea, #764ba2) border-box;
          overflow: hidden;
          box-shadow: 0 15px 35px rgba(102, 126, 234, 0.2);
        }

        .profile-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .name-title {
          margin-bottom: 15px;
        }

        .full-name {
          font-size: 36px;
          font-weight: 700;
          color: #2d3748;
          margin-bottom: 8px;
          letter-spacing: -0.5px;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }

        .professional-title {
          font-size: 18px;
          color: #667eea;
          font-weight: 500;
          font-style: italic;
          margin-bottom: 20px;
          letter-spacing: 0.5px;
        }

        .contact-info {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
          color: #4a5568;
          font-size: 14px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(102, 126, 234, 0.08);
          border-radius: 25px;
          border: 1px solid rgba(102, 126, 234, 0.15);
          transition: all 0.3s ease;
        }

        .contact-item:hover {
          background: rgba(102, 126, 234, 0.12);
          transform: translateY(-1px);
        }

        .contact-item::before {
          content: '•';
          color: #667eea;
          font-weight: bold;
          font-size: 16px;
        }

        .main-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 35px;
        }

        .left-column,
        .right-column {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .section {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%);
          border-radius: 15px;
          padding: 25px;
          border: 1px solid rgba(102, 126, 234, 0.1);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #667eea, #764ba2);
        }

        .section:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
        }

        .section-title {
          font-size: 22px;
          font-weight: 700;
          color: #2d3748;
          margin-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 1px;
          position: relative;
          padding-bottom: 12px;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 40px;
          height: 3px;
          background: linear-gradient(90deg, #667eea, #764ba2);
          border-radius: 2px;
        }

        .section-content {
          line-height: 1.6;
          color: #4a5568;
        }

        .summary-text {
          font-size: 15px;
          line-height: 1.8;
          color: #2d3748;
          font-style: italic;
          text-align: justify;
          background: rgba(102, 126, 234, 0.05);
          padding: 20px;
          border-radius: 12px;
          border-left: 4px solid #667eea;
        }

        .education-item,
        .experience-item,
        .project-item,
        .certification-item {
          margin-bottom: 20px;
          padding: 20px;
          background: rgba(255, 255, 255, 0.7);
          border-radius: 12px;
          border: 1px solid rgba(102, 126, 234, 0.1);
          position: relative;
        }

        .education-item::before,
        .experience-item::before,
        .project-item::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
          background: linear-gradient(180deg, #667eea, #764ba2);
          border-radius: 0 4px 4px 0;
        }

        .item-header {
          margin-bottom: 12px;
        }

        .item-title {
          font-size: 16px;
          font-weight: 700;
          color: #2d3748;
          margin-bottom: 4px;
        }

        .item-subtitle {
          font-size: 14px;
          color: #667eea;
          font-weight: 600;
          font-style: italic;
        }

        .item-duration {
          font-size: 13px;
          color: #718096;
          font-weight: 500;
          margin-top: 4px;
          padding: 4px 12px;
          background: rgba(102, 126, 234, 0.1);
          border-radius: 20px;
          display: inline-block;
        }

        .item-description {
          font-size: 14px;
          line-height: 1.7;
          color: #4a5568;
          margin-top: 10px;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 15px;
        }

        .skill-category {
          background: rgba(255, 255, 255, 0.8);
          padding: 15px;
          border-radius: 12px;
          border: 1px solid rgba(102, 126, 234, 0.1);
        }

        .skill-category-title {
          font-size: 14px;
          font-weight: 700;
          color: #667eea;
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .skill-items {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .skill-tag {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 500;
          box-shadow: 0 2px 8px rgba(102, 126, 234, 0.2);
        }

        .simple-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .simple-list li {
          padding: 8px 0;
          border-bottom: 1px solid rgba(102, 126, 234, 0.1);
          color: #4a5568;
          font-size: 14px;
          position: relative;
          padding-left: 20px;
        }

        .simple-list li::before {
          content: '◆';
          position: absolute;
          left: 0;
          color: #667eea;
          font-size: 12px;
        }

        .simple-list li:last-child {
          border-bottom: none;
        }

        .full-width-section {
          grid-column: 1 / -1;
        }

        /* Responsive adjustments for A4 scale */
        @media (max-width: 768px) {
          .main-content {
            grid-template-columns: 1fr;
          }
          
          .contact-info {
            flex-direction: column;
            align-items: center;
            gap: 10px;
          }
        }

        /* Print styles */
        @media print {
          .creative-muse-template {
            width: 210mm;
            height: 297mm;
            margin: 0;
            box-shadow: none;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          }
          
          .creative-content {
            margin: 10mm;
            min-height: calc(297mm - 20mm);
          }
        }
      `}</style>

      <div className="creative-content">
        {/* Header Section */}
        <div className="header-section">
          {hasContent(headerData["Profile Photo"]) && (
            <div className="profile-image">
              <img src={headerData["Profile Photo"]} alt="Profile" />
            </div>
          )}
          
          <div className="name-title">
            {hasContent(headerData["Full Name"]) && (
              <h1 className="full-name">{headerData["Full Name"]}</h1>
            )}
            {hasContent(headerData["Professional Title"]) && (
              <div className="professional-title">{headerData["Professional Title"]}</div>
            )}
          </div>

          <div className="contact-info">
            {hasContent(headerData["Phone Number"]) && (
              <div className="contact-item">{headerData["Phone Number"]}</div>
            )}
            {hasContent(headerData["Email Address"]) && (
              <div className="contact-item">{headerData["Email Address"]}</div>
            )}
            {hasContent(headerData["LinkedIn Profile"]) && (
              <div className="contact-item">{headerData["LinkedIn Profile"]}</div>
            )}
            {hasContent(headerData["Location (City, Country)"]) && (
              <div className="contact-item">{headerData["Location (City, Country)"]}</div>
            )}
            {hasContent(headerData["Github"]) && (
              <div className="contact-item">{headerData["Github"]}</div>
            )}
            {hasContent(headerData["Portfolio / Content Link"]) && (
              <div className="contact-item">{headerData["Portfolio / Content Link"]}</div>
            )}
            {hasContent(headerData["Instagram / YouTube Handle"]) && (
              <div className="contact-item">{headerData["Instagram / YouTube Handle"]}</div>
            )}
          </div>
        </div>

        <div className="main-content">
          <div className="left-column">
            {/* Professional Summary */}
            {hasContent(summaryData["Summary"]) && (
              <div className="section">
                <h2 className="section-title">Professional Summary</h2>
                <div className="section-content">
                  <div className="summary-text">
                    {formatText(summaryData["Summary"])}
                  </div>
                </div>
              </div>
            )}

            {/* Education */}
            {(hasContent(getSectionData("education")["Degree Name"]) || 
              hasContent(getSectionData("education")["Institution Name"]) ||
              hasContent(getSectionData("schooling")["10th School Name"])) && (
              <div className="section">
                <h2 className="section-title">Education</h2>
                <div className="section-content">
                  {/* Higher Education */}
                  {(hasContent(getSectionData("education")["Degree Name"]) || 
                    hasContent(getSectionData("education")["Institution Name"])) && (
                    <div className="education-item">
                      <div className="item-header">
                        {hasContent(getSectionData("education")["Degree Name"]) && (
                          <div className="item-title">{getSectionData("education")["Degree Name"]}</div>
                        )}
                        {hasContent(getSectionData("education")["Institution Name"]) && (
                          <div className="item-subtitle">{getSectionData("education")["Institution Name"]}</div>
                        )}
                        {hasContent(getSectionData("education")["Duration"]) && (
                          <div className="item-duration">{getSectionData("education")["Duration"]}</div>
                        )}
                        {hasContent(getSectionData("education")["Duration (Start – End or 'Present')"]) && (
                          <div className="item-duration">{getSectionData("education")["Duration (Start – End or 'Present')"]}</div>
                        )}
                      </div>
                      {hasContent(getSectionData("education")["CGPA or Percentage"]) && (
                        <div className="item-description">
                          <strong>Grade:</strong> {getSectionData("education")["CGPA or Percentage"]}
                        </div>
                      )}
                    </div>
                  )}

                  {/* School Education */}
                  {hasContent(getSectionData("education")["10th Grade School Name & Percentage"]) && (
                    <div className="education-item">
                      <div className="item-header">
                        <div className="item-title">Secondary Education (10th Grade)</div>
                        <div className="item-description">
                          {getSectionData("education")["10th Grade School Name & Percentage"]}
                        </div>
                      </div>
                    </div>
                  )}

                  {hasContent(getSectionData("education")["12th Grade School Name & Percentage"]) && (
                    <div className="education-item">
                      <div className="item-header">
                        <div className="item-title">Higher Secondary Education (12th Grade)</div>
                        <div className="item-description">
                          {getSectionData("education")["12th Grade School Name & Percentage"]}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Handle schooling section separately for Educational career */}
                  {hasContent(getSectionData("schooling")["10th School Name"]) && (
                    <div className="education-item">
                      <div className="item-header">
                        <div className="item-title">Secondary Education (10th Grade)</div>
                        <div className="item-subtitle">{getSectionData("schooling")["10th School Name"]}</div>
                      </div>
                      {hasContent(getSectionData("schooling")["10th Percentage"]) && (
                        <div className="item-description">
                          <strong>Grade:</strong> {getSectionData("schooling")["10th Percentage"]}
                        </div>
                      )}
                    </div>
                  )}

                  {hasContent(getSectionData("schooling")["12th School Name"]) && (
                    <div className="education-item">
                      <div className="item-header">
                        <div className="item-title">Higher Secondary Education (12th Grade)</div>
                        <div className="item-subtitle">{getSectionData("schooling")["12th School Name"]}</div>
                      </div>
                      {hasContent(getSectionData("schooling")["12th Percentage"]) && (
                        <div className="item-description">
                          <strong>Grade:</strong> {getSectionData("schooling")["12th Percentage"]}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Skills - Technical */}
            {getArrayData("techSkills").some(skill => hasContent(skill["Technical Skills"] || skill["Skill"] || skill["Technical Skills"])) && (
              <div className="section">
                <h2 className="section-title">Technical Skills</h2>
                <div className="section-content">
                  <div className="skills-grid">
                    <div className="skill-category">
                      <div className="skill-items">
                        {getArrayData("techSkills").map((skill, index) => {
                          const skillValue = skill["Technical Skills"] || skill["Skill"] || skill["Marketing / Technical Skills"];
                          return hasContent(skillValue) ? (
                            <span key={index} className="skill-tag">{skillValue}</span>
                          ) : null;
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Core Skills (Law, Medical, etc.) */}
            {getArrayData("coreLegalSkills").some(skill => hasContent(skill["Core Legal Skill"])) && (
              <div className="section">
                <h2 className="section-title">Core Legal Skills</h2>
                <div className="section-content">
                  <div className="skills-grid">
                    <div className="skill-category">
                      <div className="skill-items">
                        {getArrayData("coreLegalSkills").map((skill, index) => 
                          hasContent(skill["Core Legal Skill"]) ? (
                            <span key={index} className="skill-tag">{skill["Core Legal Skill"]}</span>
                          ) : null
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {getArrayData("coreMedicalSkills").some(skill => hasContent(skill["Skill"])) && (
              <div className="section">
                <h2 className="section-title">Medical Skills</h2>
                <div className="section-content">
                  <div className="skills-grid">
                    <div className="skill-category">
                      <div className="skill-items">
                        {getArrayData("coreMedicalSkills").map((skill, index) => 
                          hasContent(skill["Skill"]) ? (
                            <span key={index} className="skill-tag">{skill["Skill"]}</span>
                          ) : null
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {getArrayData("coreSalesSkills").some(skill => hasContent(skill["Core Sales Skills"])) && (
              <div className="section">
                <h2 className="section-title">Sales Skills</h2>
                <div className="section-content">
                  <div className="skills-grid">
                    <div className="skill-category">
                      <div className="skill-items">
                        {getArrayData("coreSalesSkills").map((skill, index) => 
                          hasContent(skill["Core Sales Skills"]) ? (
                            <span key={index} className="skill-tag">{skill["Core Sales Skills"]}</span>
                          ) : null
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Languages */}
            {getArrayData("languages").some(lang => hasContent(lang["Languages"] || lang["Language"])) && (
              <div className="section">
                <h2 className="section-title">Languages</h2>
                <div className="section-content">
                  <ul className="simple-list">
                    {getArrayData("languages").map((language, index) => {
                      const langValue = language["Languages"] || language["Language"];
                      return hasContent(langValue) ? (
                        <li key={index}>{langValue}</li>
                      ) : null;
                    })}
                  </ul>
                </div>
              </div>
            )}
          </div>

          <div className="right-column">
            {/* Work Experience */}
            {getArrayData("work").some(work => 
              hasContent(work["Job Title"] || work["Role"] || work["Position"]) ||
              hasContent(work["Company Name"] || work["Company / Client"] || work["Organization / Firm"])
            ) && (
              <div className="section">
                <h2 className="section-title">Experience</h2>
                <div className="section-content">
                  {getArrayData("work").map((work, index) => {
                    const jobTitle = work["Job Title"] || work["Role"] || work["Position"];
                    const company = work["Company Name"] || work["Company / Client"] || work["Organization / Firm"];
                    const responsibilities = work["Responsibilities & Achievements"] || work["Responsibilities"] || work["Responsibilities & Legal Work"] || work["Duties"];
                    
                    return (hasContent(jobTitle) || hasContent(company)) ? (
                      <div key={index} className="experience-item">
                        <div className="item-header">
                          {hasContent(jobTitle) && (
                            <div className="item-title">{jobTitle}</div>
                          )}
                          {hasContent(company) && (
                            <div className="item-subtitle">{company}</div>
                          )}
                          {hasContent(work["Duration"]) && (
                            <div className="item-duration">{work["Duration"]}</div>
                          )}
                        </div>
                        {hasContent(responsibilities) && (
                          <div className="item-description">
                            {formatText(responsibilities)}
                          </div>
                        )}
                      </div>
                    ) : null;
                  })}
                </div>
              </div>
            )}

            {/* Handle internships for Educational/Medical careers */}
            {getArrayData("internships").some(internship => 
              hasContent(internship["Role"]) || hasContent(internship["School / Institution"]) || hasContent(internship["Hospital / Clinic Name"])
            ) && (
              <div className="section">
                <h2 className="section-title">Internships</h2>
                <div className="section-content">
                  {getArrayData("internships").map((internship, index) => {
                    const role = internship["Role"];
                    const institution = internship["School / Institution"] || internship["Hospital / Clinic Name"];
                    const responsibilities = internship["Key Responsibilities"];
                    const departments = internship["Departments Rotated"];
                    
                    return (hasContent(role) || hasContent(institution)) ? (
                      <div key={index} className="experience-item">
                        <div className="item-header">
                          {hasContent(role) && (
                            <div className="item-title">{role}</div>
                          )}
                          {hasContent(institution) && (
                            <div className="item-subtitle">{institution}</div>
                          )}
                          {hasContent(internship["Duration"]) && (
                            <div className="item-duration">{internship["Duration"]}</div>
                          )}
                        </div>
                        {hasContent(departments) && (
                          <div className="item-description">
                            <strong>Departments:</strong> {departments}
                          </div>
                        )}
                        {hasContent(responsibilities) && (
                          <div className="item-description">
                            {formatText(responsibilities)}
                          </div>
                        )}
                      </div>
                    ) : null;
                  })}
                </div>
              </div>
            )}

            {/* Handle experience section for Medical career */}
            {getArrayData("experience").some(exp => 
              hasContent(exp["Role"]) || hasContent(exp["Hospital / Clinic Name"])
            ) && (
              <div className="section">
                <h2 className="section-title">Clinical Experience</h2>
                <div className="section-content">
                  {getArrayData("experience").map((exp, index) => {
                    const role = exp["Role"];
                    const hospital = exp["Hospital / Clinic Name"];
                    const departments = exp["Departments Rotated"];
                    const responsibilities = exp["Key Responsibilities"];
                    
                    return (hasContent(role) || hasContent(hospital)) ? (
                      <div key={index} className="experience-item">
                        <div className="item-header">
                          {hasContent(role) && (
                            <div className="item-title">{role}</div>
                          )}
                          {hasContent(hospital) && (
                            <div className="item-subtitle">{hospital}</div>
                          )}
                        </div>
                        {hasContent(departments) && (
                          <div className="item-description">
                            <strong>Departments:</strong> {departments}
                          </div>
                        )}
                        {hasContent(responsibilities) && (
                          <div className="item-description">
                            {formatText(responsibilities)}
                          </div>
                        )}
                      </div>
                    ) : null;
                  })}
                </div>
              </div>
            )}

            {/* Projects */}
            {getArrayData("projects").some(project => 
              hasContent(project["Project Title"] || project["Title"] || project["Project/Campaign Name"])
            ) && (
              <div className="section">
                <h2 className="section-title">Projects</h2>
                <div className="section-content">
                  {getArrayData("projects").map((project, index) => {
                    const title = project["Project Title"] || project["Title"] || project["Project/Campaign Name"];
                    const tools = project["Tools Used"] || project["Tools/Technologies Used"] || project["Platform Used"];
                    const description = project["Description"] || project["Summary & Objective"];
                    const contribution = project["Your Contribution"];
                    const results = project["Result / Metrics"] || project["Findings"];
                    
                    return hasContent(title) ? (
                      <div key={index} className="project-item">
                        <div className="item-header">
                          <div className="item-title">{title}</div>
                          {hasContent(tools) && (
                            <div className="item-subtitle">{tools}</div>
                          )}
                          {hasContent(project["Year / Role"]) && (
                            <div className="item-duration">{project["Year / Role"]}</div>
                          )}
                        </div>
                        {hasContent(description) && (
                          <div className="item-description">
                            {formatText(description)}
                          </div>
                        )}
                        {hasContent(contribution) && (
                          <div className="item-description">
                            <strong>Contribution:</strong> {formatText(contribution)}
                          </div>
                        )}
                        {hasContent(results) && (
                          <div className="item-description">
                            <strong>Results:</strong> {formatText(results)}
                          </div>
                        )}
                      </div>
                    ) : null;
                  })}
                </div>
              </div>
            )}

            {/* Soft Skills */}
            {getArrayData("softSkills").some(skill => hasContent(skill["Soft Skills"] || skill["Soft Skill"] || skill["Skill"])) && (
              <div className="section">
                <h2 className="section-title">Soft Skills</h2>
                <div className="section-content">
                  <div className="skills-grid">
                    <div className="skill-category">
                      <div className="skill-items">
                        {getArrayData("softSkills").map((skill, index) => {
                          const skillValue = skill["Soft Skills"] || skill["Soft Skill"] || skill["Skill"];
                          return hasContent(skillValue) ? (
                            <span key={index} className="skill-tag">{skillValue}</span>
                          ) : null;
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Other Skills */}
            {getArrayData("otherSkills").some(skill => hasContent(skill["Tools / Software"] || skill["Tools/Softwares"])) && (
              <div className="section">
                <h2 className="section-title">Tools & Software</h2>
                <div className="section-content">
                  <div className="skills-grid">
                    <div className="skill-category">
                      <div className="skill-items">
                        {getArrayData("otherSkills").map((skill, index) => {
                          const toolValue = skill["Tools / Software"] || skill["Tools/Softwares"];
                          return hasContent(toolValue) ? (
                            <span key={index} className="skill-tag">{toolValue}</span>
                          ) : null;
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Finance specific skills */}
            {getArrayData("skills").some(skill => hasContent(skill["Skill"])) && (
              <div className="section">
                <h2 className="section-title">Finance Skills</h2>
                <div className="section-content">
                  <div className="skills-grid">
                    <div className="skill-category">
                      <div className="skill-items">
                        {getArrayData("skills").map((skill, index) => 
                          hasContent(skill["Skill"]) ? (
                            <span key={index} className="skill-tag">{skill["Skill"]}</span>
                          ) : null
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {getArrayData("tools").some(tool => hasContent(tool["Tool/Software"])) && (
              <div className="section">
                <h2 className="section-title">Finance Tools</h2>
                <div className="section-content">
                  <div className="skills-grid">
                    <div className="skill-category">
                      <div className="skill-items">
                        {getArrayData("tools").map((tool, index) => 
                          hasContent(tool["Tool/Software"]) ? (
                            <span key={index} className="skill-tag">{tool["Tool/Software"]}</span>
                          ) : null
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Teaching Skills for Educational career */}
            {hasContent(getSectionData("teachingSkills")["Core Teaching Skills"]) && (
              <div className="section">
                <h2 className="section-title">Teaching Skills</h2>
                <div className="section-content">
                  <div className="skills-grid">
                    <div className="skill-category">
                      <div className="skill-category-title">Core Skills</div>
                      <div className="skill-items">
                        {getSectionData("teachingSkills")["Core Teaching Skills"]?.split(',').map((skill, index) => 
                          hasContent(skill.trim()) ? (
                            <span key={index} className="skill-tag">{skill.trim()}</span>
                          ) : null
                        )}
                      </div>
                    </div>
                    {hasContent(getSectionData("teachingSkills")["Digital Tools"]) && (
                      <div className="skill-category">
                        <div className="skill-category-title">Digital Tools</div>
                        <div className="skill-items">
                          {getSectionData("teachingSkills")["Digital Tools"]?.split(',').map((tool, index) => 
                            hasContent(tool.trim()) ? (
                              <span key={index} className="skill-tag">{tool.trim()}</span>
                            ) : null
                          )}
                        </div>
                      </div>
                    )}
                    {hasContent(getSectionData("teachingSkills")["Soft Skills"]) && (
                      <div className="skill-category">
                        <div className="skill-category-title">Soft Skills</div>
                        <div className="skill-items">
                          {getSectionData("teachingSkills")["Soft Skills"]?.split(',').map((skill, index) => 
                            hasContent(skill.trim()) ? (
                              <span key={index} className="skill-tag">{skill.trim()}</span>
                            ) : null
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Lab Skills for Medical career */}
            {getArrayData("labSkills").some(skill => hasContent(skill["Skill"])) && (
              <div className="section">
                <h2 className="section-title">Lab & Technical Skills</h2>
                <div className="section-content">
                  <div className="skills-grid">
                    <div className="skill-category">
                      <div className="skill-items">
                        {getArrayData("labSkills").map((skill, index) => 
                          hasContent(skill["Skill"]) ? (
                            <span key={index} className="skill-tag">{skill["Skill"]}</span>
                          ) : null
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Certifications */}
            {getArrayData("certifications").some(cert => 
              hasContent(cert["Course/Certification Name"] || cert["Certification Name"] || cert["Certification Title"])
            ) && (
              <div className="section">
                <h2 className="section-title">Certifications</h2>
                <div className="section-content">
                  {getArrayData("certifications").map((cert, index) => {
                    const name = cert["Course/Certification Name"] || cert["Certification Name"] || cert["Certification Title"];
                    const date = cert["Date"] || cert["Year"];
                    
                    return hasContent(name) ? (
                      <div key={index} className="certification-item">
                        <div className="item-header">
                          <div className="item-title">{name}</div>
                          {hasContent(date) && (
                            <div className="item-duration">{date}</div>
                          )}
                        </div>
                      </div>
                    ) : null;
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Full Width Sections */}
        <div className="full-width-section" style={{marginTop: '30px'}}>
          {/* Publications (Law career) */}
          {getArrayData("publications").some(pub => hasContent(pub["Article / Blog Title"])) && (
            <div className="section">
              <h2 className="section-title">Publications</h2>
              <div className="section-content">
                {getArrayData("publications").map((pub, index) => {
                  const title = pub["Article / Blog Title"];
                  const platform = pub["Platform (if published)"];
                  const link = pub["Link"];
                  const summary = pub["Brief Summary"];
                  
                  return hasContent(title) ? (
                    <div key={index} className="project-item">
                      <div className="item-header">
                        <div className="item-title">{title}</div>
                        {hasContent(platform) && (
                          <div className="item-subtitle">{platform}</div>
                        )}
                        {hasContent(link) && (
                          <div className="item-duration">{link}</div>
                        )}
                      </div>
                      {hasContent(summary) && (
                        <div className="item-description">
                          {formatText(summary)}
                        </div>
                      )}
                    </div>
                  ) : null;
                })}
              </div>
            </div>
          )}

          {/* Work Experience for Finance (separate handling) */}
          {getArrayData("workExperience").some(work => 
            hasContent(work["Role"]) || hasContent(work["Company Name"])
          ) && (
            <div className="section">
              <h2 className="section-title">Work Experience</h2>
              <div className="section-content">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20px">
                  {getArrayData("workExperience").map((work, index) => {
                    const role = work["Role"];
                    const company = work["Company Name"];
                    const responsibilities = work["Responsibilities & Achievements"];
                    
                    return (hasContent(role) || hasContent(company)) ? (
                      <div key={index} className="experience-item">
                        <div className="item-header">
                          {hasContent(role) && (
                            <div className="item-title">{role}</div>
                          )}
                          {hasContent(company) && (
                            <div className="item-subtitle">{company}</div>
                          )}
                          {hasContent(work["Duration"]) && (
                            <div className="item-duration">{work["Duration"]}</div>
                          )}
                        </div>
                        {hasContent(responsibilities) && (
                          <div className="item-description">
                            {formatText(responsibilities)}
                          </div>
                        )}
                      </div>
                    ) : null;
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Achievements */}
          {getArrayData("achievements").some(achievement => 
            hasContent(achievement["Achievements"] || achievement["Achievement"] || achievement["Title"])
          ) && (
            <div className="section">
              <h2 className="section-title">Achievements</h2>
              <div className="section-content">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-15px">
                  {getArrayData("achievements").map((achievement, index) => {
                    const title = achievement["Achievements"] || achievement["Achievement"] || achievement["Title"];
                    const description = achievement["Description"];
                    const year = achievement["Year"];
                    
                    return hasContent(title) ? (
                      <div key={index} className="certification-item">
                        <div className="item-header">
                          <div className="item-title">{title}</div>
                          {hasContent(year) && (
                            <div className="item-duration">{year}</div>
                          )}
                        </div>
                        {hasContent(description) && (
                          <div className="item-description">
                            {formatText(description)}
                          </div>
                        )}
                      </div>
                    ) : null;
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Activities */}
          {getArrayData("activities").some(activity => 
            hasContent(activity["Activities"] || activity["Activity"] || activity["Activity Title"])
          ) && (
            <div className="section">
              <h2 className="section-title">Activities</h2>
              <div className="section-content">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-15px">
                  {getArrayData("activities").map((activity, index) => {
                    const title = activity["Activities"] || activity["Activity"] || activity["Activity Title"];
                    const description = activity["Description"];
                    const year = activity["Year"];
                    
                    return hasContent(title) ? (
                      <div key={index} className="certification-item">
                        <div className="item-header">
                          <div className="item-title">{title}</div>
                          {hasContent(year) && (
                            <div className="item-duration">{year}</div>
                          )}
                        </div>
                        {hasContent(description) && (
                          <div className="item-description">
                            {formatText(description)}
                          </div>
                        )}
                      </div>
                    ) : null;
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Extracurricular Activities */}
          {getArrayData("extracurricular").some(activity => hasContent(activity["Activity"])) && (
            <div className="section">
              <h2 className="section-title">Extracurricular Activities</h2>
              <div className="section-content">
                <ul className="simple-list">
                  {getArrayData("extracurricular").map((activity, index) => 
                    hasContent(activity["Activity"]) ? (
                      <li key={index}>{formatText(activity["Activity"])}</li>
                    ) : null
                  )}
                </ul>
              </div>
            </div>
          )}

          {/* Interests */}
          {getArrayData("interests").some(interest => hasContent(interest["Interests"] || interest["Interest"])) && (
            <div className="section">
              <h2 className="section-title">Interests</h2>
              <div className="section-content">
                <div className="skills-grid">
                  <div className="skill-category">
                    <div className="skill-items">
                      {getArrayData("interests").map((interest, index) => {
                        const interestValue = interest["Interests"] || interest["Interest"];
                        return hasContent(interestValue) ? (
                          <span key={index} className="skill-tag">{interestValue}</span>
                        ) : null;
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreativeMuseTemplate;