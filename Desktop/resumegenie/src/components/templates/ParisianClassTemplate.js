import React from "react";

const ParisianClassTemplate = ({ resumeData, selectedCareer }) => {
  // Get field configurations based on career
  const getFieldValue = (section, field, index = null) => {
    if (!resumeData[section]) return "";
    if (index !== null) {
      return resumeData[section][index]?.[field] || "";
    }
    return resumeData[section][field] || "";
  };

  const getArrayData = (section) => {
    const data = resumeData[section];
    return Array.isArray(data) ? data : [];
  };

  // Helper to check if section has content
  const hasContent = (section, field = null, index = null) => {
    const value = getFieldValue(section, field, index);
    return value && value.trim() !== "";
  };

  const hasSectionContent = (section) => {
    if (!resumeData[section]) return false;
    if (Array.isArray(resumeData[section])) {
      return resumeData[section].some(item => 
        Object.values(item).some(value => value && value.toString().trim() !== "")
      );
    }
    return Object.values(resumeData[section]).some(value => 
      value && value.toString().trim() !== ""
    );
  };

  // Format text with line breaks
  const formatText = (text) => {
    if (!text) return "";
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < text.split('\n').length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <div className="parisian-resume">
      <style jsx>{`
        .parisian-resume {
          width: 210mm;
          min-height: 297mm;
          background: linear-gradient(135deg, #fdfcfb 0%, #f8f6f0 100%);
          font-family: 'Georgia', 'Times New Roman', serif;
          color: #2c2c2c;
          position: relative;
          box-sizing: border-box;
          overflow: hidden;
        }

        /* Elegant decorative border */
        .parisian-resume::before {
          content: '';
          position: absolute;
          top: 8mm;
          left: 8mm;
          right: 8mm;
          bottom: 8mm;
          border: 2px solid #d4af37;
          border-radius: 4px;
          pointer-events: none;
          z-index: 1;
        }

        .parisian-resume::after {
          content: '';
          position: absolute;
          top: 10mm;
          left: 10mm;
          right: 10mm;
          bottom: 10mm;
          border: 1px solid #e8d5a3;
          border-radius: 2px;
          pointer-events: none;
          z-index: 1;
        }

        .resume-content {
          position: relative;
          z-index: 2;
          padding: 15mm;
          height: 100%;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
        }

        /* Header Section */
        .header-section {
          text-align: center;
          border-bottom: 3px double #d4af37;
          padding-bottom: 8mm;
          margin-bottom: 8mm;
          position: relative;
        }

        .profile-container {
          margin-bottom: 4mm;
        }

        .profile-photo {
          width: 25mm;
          height: 25mm;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid #d4af37;
          box-shadow: 0 4px 12px rgba(212, 175, 55, 0.3);
          margin: 0 auto 3mm;
          display: block;
        }

        .name {
          font-size: 11mm;
          font-weight: bold;
          color: #2c2c2c;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 2mm;
          font-family: 'Georgia', serif;
        }

        .title {
          font-size: 4.5mm;
          color: #8b6914;
          font-style: italic;
          letter-spacing: 1px;
          margin-bottom: 4mm;
        }

        .contact-info {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 4mm;
          font-size: 3.2mm;
          color: #5a5a5a;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 1mm;
        }

        .contact-separator {
          color: #d4af37;
          font-weight: bold;
        }

        /* Section Styling */
        .section {
          margin-bottom: 6mm;
          page-break-inside: avoid;
        }

        .section-title {
          font-size: 4.5mm;
          font-weight: bold;
          color: #2c2c2c;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          border-bottom: 2px solid #d4af37;
          padding-bottom: 1mm;
          margin-bottom: 3mm;
          position: relative;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 15mm;
          height: 2px;
          background: linear-gradient(to right, #8b6914, #d4af37);
        }

        /* Summary Section */
        .summary-text {
          font-size: 3.5mm;
          line-height: 1.6;
          text-align: justify;
          font-style: italic;
          color: #444;
          background: rgba(248, 246, 240, 0.5);
          padding: 3mm;
          border-left: 3px solid #d4af37;
          border-radius: 2px;
        }

        /* Two Column Layout */
        .two-column {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8mm;
          flex: 1;
        }

        .left-column {
          padding-right: 4mm;
        }

        .right-column {
          padding-left: 4mm;
          border-left: 1px solid #e8d5a3;
        }

        /* Education & Experience Items */
        .entry {
          margin-bottom: 4mm;
          padding-bottom: 3mm;
          border-bottom: 1px dotted #d4af37;
        }

        .entry:last-child {
          border-bottom: none;
          margin-bottom: 0;
        }

        .entry-header {
          margin-bottom: 2mm;
        }

        .entry-title {
          font-size: 3.8mm;
          font-weight: bold;
          color: #2c2c2c;
          margin-bottom: 0.5mm;
        }

        .entry-subtitle {
          font-size: 3.2mm;
          color: #8b6914;
          font-style: italic;
          margin-bottom: 0.5mm;
        }

        .entry-duration {
          font-size: 2.8mm;
          color: #666;
          font-weight: normal;
        }

        .entry-content {
          font-size: 3.2mm;
          line-height: 1.5;
          color: #444;
          text-align: justify;
        }

        /* Skills Lists */
        .skills-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2mm;
        }

        .skill-item {
          font-size: 3.2mm;
          padding: 1.5mm 3mm;
          background: rgba(212, 175, 55, 0.1);
          border-left: 2px solid #d4af37;
          margin-bottom: 1.5mm;
          border-radius: 0 3px 3px 0;
        }

        /* Achievement & Activity Items */
        .simple-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .simple-item {
          font-size: 3.2mm;
          line-height: 1.4;
          margin-bottom: 2mm;
          padding-left: 4mm;
          position: relative;
        }

        .simple-item::before {
          content: '◆';
          position: absolute;
          left: 0;
          color: #d4af37;
          font-size: 2.5mm;
        }

        /* Language Items */
        .language-item {
          font-size: 3.2mm;
          padding: 1mm 2mm;
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.1), rgba(139, 105, 20, 0.1));
          border: 1px solid rgba(212, 175, 55, 0.3);
          margin-bottom: 1.5mm;
          border-radius: 15px;
          text-align: center;
          color: #5a5a5a;
        }

        /* Project Items */
        .project-entry {
          margin-bottom: 4mm;
          background: rgba(248, 246, 240, 0.3);
          padding: 3mm;
          border-radius: 3px;
          border-left: 3px solid #d4af37;
        }

        .project-title {
          font-size: 3.5mm;
          font-weight: bold;
          color: #2c2c2c;
          margin-bottom: 1mm;
        }

        .project-tools {
          font-size: 2.8mm;
          color: #8b6914;
          font-style: italic;
          margin-bottom: 2mm;
        }

        .project-description {
          font-size: 3.2mm;
          line-height: 1.4;
          color: #444;
        }

        /* Decorative Elements */
        .ornament {
          text-align: center;
          color: #d4af37;
          font-size: 4mm;
          margin: 2mm 0;
        }

        /* Responsive text sizing for smaller content */
        .compact .entry-title { font-size: 3.5mm; }
        .compact .entry-subtitle { font-size: 3mm; }
        .compact .entry-content { font-size: 3mm; }
        .compact .skill-item { font-size: 3mm; padding: 1mm 2.5mm; }
      `}</style>

      <div className="resume-content">
        {/* Header Section */}
        <div className="header-section">
          <div className="profile-container">
            {hasContent("header", "Profile Photo") && (
              <img
                src={getFieldValue("header", "Profile Photo")}
                alt="Profile"
                className="profile-photo"
              />
            )}
            {hasContent("header", "Full Name") && (
              <div className="name">{getFieldValue("header", "Full Name")}</div>
            )}
            {hasContent("header", "Professional Title") && (
              <div className="title">{getFieldValue("header", "Professional Title")}</div>
            )}
          </div>

          <div className="contact-info">
            {hasContent("header", "Phone Number") && (
              <div className="contact-item">
                <span>📞</span>
                <span>{getFieldValue("header", "Phone Number")}</span>
              </div>
            )}
            {hasContent("header", "Email Address") && (
              <>
                <span className="contact-separator">•</span>
                <div className="contact-item">
                  <span>✉</span>
                  <span>{getFieldValue("header", "Email Address")}</span>
                </div>
              </>
            )}
            {hasContent("header", "LinkedIn Profile") && (
              <>
                <span className="contact-separator">•</span>
                <div className="contact-item">
                  <span>🔗</span>
                  <span>{getFieldValue("header", "LinkedIn Profile")}</span>
                </div>
              </>
            )}
            {(hasContent("header", "Github") || hasContent("header", "Portfolio / Content Link")) && (
              <>
                <span className="contact-separator">•</span>
                <div className="contact-item">
                  <span>🌐</span>
                  <span>{getFieldValue("header", "Github") || getFieldValue("header", "Portfolio / Content Link")}</span>
                </div>
              </>
            )}
            {hasContent("header", "Location (City, Country)") && (
              <>
                <span className="contact-separator">•</span>
                <div className="contact-item">
                  <span>📍</span>
                  <span>{getFieldValue("header", "Location (City, Country)")}</span>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Professional Summary */}
        {hasSectionContent("summary") && (
          <div className="section">
            <div className="section-title">Professional Summary</div>
            <div className="summary-text">
              {formatText(getFieldValue("summary", "Summary"))}
            </div>
          </div>
        )}

        <div className="ornament">❖ ❖ ❖</div>

        {/* Two Column Layout */}
        <div className="two-column">
          <div className="left-column">
            {/* Education */}
            {hasSectionContent("education") && (
              <div className="section">
                <div className="section-title">Education</div>
                <div className="entry">
                  <div className="entry-header">
                    {hasContent("education", "Degree Name") && (
                      <div className="entry-title">{getFieldValue("education", "Degree Name")}</div>
                    )}
                    {hasContent("education", "Institution Name") && (
                      <div className="entry-subtitle">{getFieldValue("education", "Institution Name")}</div>
                    )}
                    {hasContent("education", "Duration") && (
                      <div className="entry-duration">{getFieldValue("education", "Duration")}</div>
                    )}
                  </div>
                  {hasContent("education", "CGPA or Percentage") && (
                    <div className="entry-content">
                      <strong>Grade:</strong> {getFieldValue("education", "CGPA or Percentage")}
                    </div>
                  )}
                  {(hasContent("education", "10th Grade School Name & Percentage") || 
                    hasContent("education", "12th Grade School Name & Percentage")) && (
                    <div className="entry-content" style={{ marginTop: '2mm', fontSize: '3mm' }}>
                      {hasContent("education", "12th Grade School Name & Percentage") && (
                        <div><strong>12th Grade:</strong> {getFieldValue("education", "12th Grade School Name & Percentage")}</div>
                      )}
                      {hasContent("education", "10th Grade School Name & Percentage") && (
                        <div><strong>10th Grade:</strong> {getFieldValue("education", "10th Grade School Name & Percentage")}</div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Experience */}
            {hasSectionContent("work") && (
              <div className="section">
                <div className="section-title">Experience</div>
                {getArrayData("work").filter(item => 
                  Object.values(item).some(value => value && value.toString().trim() !== "")
                ).map((work, index) => (
                  <div key={index} className="entry">
                    <div className="entry-header">
                      {(work["Job Title"] || work["Role"] || work["Position"]) && (
                        <div className="entry-title">
                          {work["Job Title"] || work["Role"] || work["Position"]}
                        </div>
                      )}
                      {(work["Company Name"] || work["Organization / Firm"] || work["Company / Client"]) && (
                        <div className="entry-subtitle">
                          {work["Company Name"] || work["Organization / Firm"] || work["Company / Client"]}
                        </div>
                      )}
                      {work["Duration"] && (
                        <div className="entry-duration">{work["Duration"]}</div>
                      )}
                    </div>
                    {(work["Responsibilities & Achievements"] || work["Responsibilities & Legal Work"] || work["Duties"] || work["Responsibilities"]) && (
                      <div className="entry-content">
                        {formatText(work["Responsibilities & Achievements"] || work["Responsibilities & Legal Work"] || work["Duties"] || work["Responsibilities"])}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Projects */}
            {hasSectionContent("projects") && (
              <div className="section">
                <div className="section-title">
                  {selectedCareer === 'Law' ? 'Legal Projects' : 
                   selectedCareer === 'Marketing' ? 'Campaigns' : 'Projects'}
                </div>
                {getArrayData("projects").filter(item => 
                  Object.values(item).some(value => value && value.toString().trim() !== "")
                ).slice(0, 3).map((project, index) => (
                  <div key={index} className="project-entry">
                    {(project["Project Title"] || project["Title"] || project["Project/Campaign Name"]) && (
                      <div className="project-title">
                        {project["Project Title"] || project["Title"] || project["Project/Campaign Name"]}
                      </div>
                    )}
                    {(project["Tools Used"] || project["Tools/Technologies Used"] || project["Platform Used"]) && (
                      <div className="project-tools">
                        {project["Tools Used"] || project["Tools/Technologies Used"] || project["Platform Used"]}
                      </div>
                    )}
                    {(project["Description"] || project["Description / Contribution"] || project["Your Contribution"]) && (
                      <div className="project-description">
                        {formatText(project["Description"] || project["Description / Contribution"] || project["Your Contribution"])}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="right-column">
            {/* Technical Skills */}
            {hasSectionContent("techSkills") && (
              <div className="section">
                <div className="section-title">
                  {selectedCareer === 'Law' ? 'Legal Skills' :
                   selectedCareer === 'Marketing' ? 'Marketing Skills' :
                   selectedCareer === 'Sales' ? 'Sales Skills' :
                   selectedCareer === 'Finance' ? 'Finance Skills' :
                   selectedCareer === 'Medical' ? 'Medical Skills' : 'Technical Skills'}
                </div>
                <div className="skills-grid">
                  {getArrayData("techSkills").filter(item => 
                    Object.values(item).some(value => value && value.toString().trim() !== "")
                  ).map((skill, index) => (
                    <div key={index} className="skill-item">
                      {skill["Technical Skills"] || skill["Skill"] || skill["Technical Skill"] || skill["Core Legal Skill"] || skill["Core Sales Skills"]}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Core Skills (for specific careers) */}
            {(hasSectionContent("coreLegalSkills") || hasSectionContent("coreSalesSkills") || hasSectionContent("coreMedicalSkills")) && (
              <div className="section">
                <div className="section-title">Core Skills</div>
                <div className="skills-grid">
                  {(getArrayData("coreLegalSkills").concat(getArrayData("coreSalesSkills")).concat(getArrayData("coreMedicalSkills")))
                    .filter(item => Object.values(item).some(value => value && value.toString().trim() !== ""))
                    .map((skill, index) => (
                    <div key={index} className="skill-item">
                      {skill["Core Legal Skill"] || skill["Core Sales Skills"] || skill["Skill"]}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Soft Skills */}
            {hasSectionContent("softSkills") && (
              <div className="section">
                <div className="section-title">Soft Skills</div>
                <div className="skills-grid">
                  {getArrayData("softSkills").filter(item => 
                    Object.values(item).some(value => value && value.toString().trim() !== "")
                  ).map((skill, index) => (
                    <div key={index} className="skill-item">
                      {skill["Soft Skills"] || skill["Soft Skill"] || skill["Skill"]}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Certifications */}
            {hasSectionContent("certifications") && (
              <div className="section">
                <div className="section-title">Certifications</div>
                <ul className="simple-list">
                  {getArrayData("certifications").filter(item => 
                    Object.values(item).some(value => value && value.toString().trim() !== "")
                  ).map((cert, index) => (
                    <li key={index} className="simple-item">
                      {(cert["Course/Certification Name"] || cert["Certification Name"]) && (
                        <strong>{cert["Course/Certification Name"] || cert["Certification Name"]}</strong>
                      )}
                      {(cert["Date"] || cert["Year"]) && (
                        <span style={{ color: '#8b6914', marginLeft: '2mm' }}>
                          ({cert["Date"] || cert["Year"]})
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Achievements */}
            {hasSectionContent("achievements") && (
              <div className="section">
                <div className="section-title">Achievements</div>
                <ul className="simple-list">
                  {getArrayData("achievements").filter(item => 
                    Object.values(item).some(value => value && value.toString().trim() !== "")
                  ).map((achievement, index) => (
                    <li key={index} className="simple-item">
                      {achievement["Achievements"] || achievement["Achievement"] || achievement["Title"]}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Languages */}
            {hasSectionContent("languages") && (
              <div className="section">
                <div className="section-title">Languages</div>
                {getArrayData("languages").filter(item => 
                  Object.values(item).some(value => value && value.toString().trim() !== "")
                ).map((lang, index) => (
                  <div key={index} className="language-item">
                    {lang["Languages"] || lang["Language"]}
                  </div>
                ))}
              </div>
            )}

            {/* Interests */}
            {hasSectionContent("interests") && (
              <div className="section">
                <div className="section-title">Interests</div>
                <ul className="simple-list">
                  {getArrayData("interests").filter(item => 
                    Object.values(item).some(value => value && value.toString().trim() !== "")
                  ).map((interest, index) => (
                    <li key={index} className="simple-item">
                      {interest["Interests"] || interest["Interest"]}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParisianClassTemplate;