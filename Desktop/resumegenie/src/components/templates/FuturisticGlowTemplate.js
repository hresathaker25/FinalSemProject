import React from "react";

const FuturisticGlowTemplate = ({ resumeData, selectedCareer }) => {
  // Helper function to safely get nested data
  const getValue = (section, field, index = null) => {
    if (!resumeData || !resumeData[section]) return "";
    
    if (index !== null) {
      return resumeData[section]?.[index]?.[field] || "";
    }
    return resumeData[section]?.[field] || "";
  };

  // Helper function to get array data safely
  const getArrayData = (section) => {
    if (!resumeData || !resumeData[section]) return [];
    return Array.isArray(resumeData[section]) ? resumeData[section] : [];
  };

  // Helper function to check if section has data
  const hasData = (section, field = null, index = null) => {
    const value = getValue(section, field, index);
    return value && value.toString().trim().length > 0;
  };

  // Helper function to check if array section has any data
  const hasArrayData = (section) => {
    const data = getArrayData(section);
    return data.some(item => 
      Object.values(item || {}).some(value => 
        value && value.toString().trim().length > 0
      )
    );
  };

  // Helper function to render section with data
  const renderSection = (sectionKey, title, renderContent) => {
    // For single sections, check if any field has data
    if (!Array.isArray(resumeData[sectionKey])) {
      const sectionData = resumeData[sectionKey] || {};
      const hasAnyData = Object.values(sectionData).some(value => 
        value && value.toString().trim().length > 0
      );
      if (!hasAnyData) return null;
    } else {
      // For array sections, check if any item has data
      if (!hasArrayData(sectionKey)) return null;
    }

    return (
      <div className="futuristic-section">
        <div className="section-header">
          <div className="section-title">
            <div className="title-glow">{title}</div>
            <div className="title-line"></div>
          </div>
        </div>
        <div className="section-content">
          {renderContent()}
        </div>
      </div>
    );
  };

  return (
    <div className="futuristic-glow-template">
      <style jsx>{`
        .futuristic-glow-template {
          width: 210mm;
          min-height: 297mm;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
          color: #ffffff;
          font-family: 'Inter', 'Segoe UI', sans-serif;
          position: relative;
          overflow: hidden;
          box-sizing: border-box;
          padding: 20mm;
          margin: 0 auto;
        }

        .futuristic-glow-template::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 80%, rgba(0, 255, 255, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, rgba(255, 0, 255, 0.1) 0%, transparent 50%);
          pointer-events: none;
          z-index: 0;
        }

        .template-content {
          position: relative;
          z-index: 1;
          height: 100%;
        }

        /* Header Section */
        .header-section {
          text-align: center;
          padding: 0 0 30px 0;
          border-bottom: 2px solid;
          border-image: linear-gradient(90deg, transparent, #00ffff, #ff00ff, transparent) 1;
          margin-bottom: 30px;
          position: relative;
        }

        .profile-photo {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          margin: 0 auto 20px;
          border: 3px solid #00ffff;
          box-shadow: 0 0 30px rgba(0, 255, 255, 0.5);
          overflow: hidden;
          position: relative;
        }

        .profile-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .profile-photo::after {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          border-radius: 50%;
          background: conic-gradient(from 0deg, #00ffff, #ff00ff, #ffff00, #00ffff);
          z-index: -1;
          animation: rotate 3s linear infinite;
        }

        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .name {
          font-size: 36px;
          font-weight: 800;
          margin: 0 0 8px 0;
          background: linear-gradient(135deg, #00ffff, #ff00ff, #ffff00);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 0 30px rgba(0, 255, 255, 0.3);
          letter-spacing: 2px;
        }

        .title {
          font-size: 18px;
          color: #a0a0ff;
          margin: 0 0 20px 0;
          text-transform: uppercase;
          letter-spacing: 3px;
          font-weight: 300;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 15px;
          margin-top: 20px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 8px 15px;
          background: rgba(0, 255, 255, 0.1);
          border: 1px solid rgba(0, 255, 255, 0.3);
          border-radius: 25px;
          font-size: 12px;
          transition: all 0.3s ease;
        }

        .contact-item:hover {
          background: rgba(0, 255, 255, 0.2);
          box-shadow: 0 0 15px rgba(0, 255, 255, 0.3);
        }

        .contact-icon {
          width: 14px;
          height: 14px;
          fill: #00ffff;
        }

        /* Section Styling */
        .futuristic-section {
          margin: 25px 0;
        }

        .section-header {
          margin-bottom: 20px;
        }

        .section-title {
          position: relative;
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .title-glow {
          font-size: 20px;
          font-weight: 700;
          color: #ffffff;
          text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
          white-space: nowrap;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .title-line {
          flex: 1;
          height: 2px;
          background: linear-gradient(90deg, #00ffff, #ff00ff, transparent);
          border-radius: 1px;
        }

        .section-content {
          padding-left: 10px;
        }

        /* Summary Section */
        .summary-text {
          font-size: 14px;
          line-height: 1.6;
          color: #e0e0e0;
          background: rgba(255, 255, 255, 0.05);
          padding: 20px;
          border-left: 3px solid #00ffff;
          border-radius: 0 10px 10px 0;
          margin: 10px 0;
        }

        /* Experience/Work Section */
        .experience-item, .project-item, .education-item {
          margin: 20px 0;
          padding: 20px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          position: relative;
          overflow: hidden;
        }

        .experience-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: linear-gradient(180deg, #00ffff, #ff00ff);
        }

        .item-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 12px;
          flex-wrap: wrap;
          gap: 10px;
        }

        .item-title {
          font-size: 16px;
          font-weight: 600;
          color: #00ffff;
          margin: 0;
        }

        .item-company {
          font-size: 14px;
          color: #ff00ff;
          font-weight: 500;
          margin: 2px 0;
        }

        .item-duration {
          font-size: 12px;
          color: #a0a0ff;
          background: rgba(160, 160, 255, 0.1);
          padding: 4px 12px;
          border-radius: 15px;
          border: 1px solid rgba(160, 160, 255, 0.3);
        }

        .item-description {
          font-size: 13px;
          line-height: 1.5;
          color: #d0d0d0;
          white-space: pre-line;
        }

        /* Skills Section */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 12px;
          margin: 15px 0;
        }

        .skill-item {
          padding: 10px 15px;
          background: rgba(0, 255, 255, 0.1);
          border: 1px solid rgba(0, 255, 255, 0.3);
          border-radius: 20px;
          text-align: center;
          font-size: 12px;
          font-weight: 500;
          color: #ffffff;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .skill-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transition: left 0.5s ease;
        }

        .skill-item:hover::before {
          left: 100%;
        }

        .skill-item:hover {
          background: rgba(0, 255, 255, 0.2);
          box-shadow: 0 0 15px rgba(0, 255, 255, 0.3);
          transform: translateY(-2px);
        }

        /* List Items */
        .list-items {
          margin: 15px 0;
        }

        .list-item {
          margin: 8px 0;
          padding: 8px 15px;
          background: rgba(255, 255, 255, 0.02);
          border-left: 2px solid #ff00ff;
          border-radius: 0 8px 8px 0;
          font-size: 13px;
          color: #e0e0e0;
        }

        /* Education specific */
        .education-details {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 15px;
          align-items: center;
        }

        .grade-info {
          font-size: 12px;
          color: #ffff00;
          background: rgba(255, 255, 0, 0.1);
          padding: 4px 10px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 0, 0.3);
        }

        /* Achievements, Activities, etc. */
        .achievement-item, .activity-item {
          margin: 12px 0;
          padding: 12px 16px;
          background: linear-gradient(135deg, rgba(0, 255, 255, 0.05), rgba(255, 0, 255, 0.05));
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          font-size: 13px;
          color: #e0e0e0;
          position: relative;
        }

        .achievement-item::before {
          content: '⭐';
          position: absolute;
          left: -8px;
          top: 50%;
          transform: translateY(-50%);
          background: #1a1a2e;
          padding: 2px;
          border-radius: 50%;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .futuristic-glow-template {
            transform: scale(0.7);
            transform-origin: top center;
          }
        }

        /* Print styles */
        @media print {
          .futuristic-glow-template {
            transform: none !important;
            box-shadow: none !important;
          }
        }
      `}</style>

      <div className="template-content">
        {/* Header Section */}
        <div className="header-section">
          {hasData("header", "Profile Photo") && (
            <div className="profile-photo">
              <img 
                src={getValue("header", "Profile Photo")} 
                alt="Profile" 
                onError={(e) => {e.target.style.display = 'none'}}
              />
            </div>
          )}
          
          {hasData("header", "Full Name") && (
            <h1 className="name">{getValue("header", "Full Name")}</h1>
          )}
          
          {hasData("header", "Professional Title") && (
            <div className="title">{getValue("header", "Professional Title")}</div>
          )}
          
          <div className="contact-grid">
            {hasData("header", "Phone Number") && (
              <div className="contact-item">
                <svg className="contact-icon" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                {getValue("header", "Phone Number")}
              </div>
            )}
            
            {hasData("header", "Email Address") && (
              <div className="contact-item">
                <svg className="contact-icon" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                {getValue("header", "Email Address")}
              </div>
            )}
            
            {hasData("header", "LinkedIn Profile") && (
              <div className="contact-item">
                <svg className="contact-icon" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
                LinkedIn
              </div>
            )}
            
            {hasData("header", "Github") && (
              <div className="contact-item">
                <svg className="contact-icon" viewBox="0 0 24 24">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
                GitHub
              </div>
            )}
            
            {hasData("header", "Location (City, Country)") && (
              <div className="contact-item">
                <svg className="contact-icon" viewBox="0 0 24 24">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                {getValue("header", "Location (City, Country)")}
              </div>
            )}
          </div>
        </div>

        {/* Summary Section */}
        {renderSection("summary", "Professional Summary", () => (
          <div className="summary-text">
            {getValue("summary", "Summary")}
          </div>
        ))}

        {/* Work Experience Section */}
        {renderSection("work", "Experience", () => (
          <div>
            {getArrayData("work").map((work, index) => (
              <div key={index} className="experience-item">
                <div className="item-header">
                  <div>
                    {hasData("work", "Job Title", index) && (
                      <div className="item-title">{getValue("work", "Job Title", index)}</div>
                    )}
                    {hasData("work", "Company Name", index) && (
                      <div className="item-company">{getValue("work", "Company Name", index)}</div>
                    )}
                  </div>
                  {hasData("work", "Duration", index) && (
                    <div className="item-duration">{getValue("work", "Duration", index)}</div>
                  )}
                </div>
                {hasData("work", "Responsibilities & Achievements", index) && (
                  <div className="item-description">
                    {getValue("work", "Responsibilities & Achievements", index)}
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}

        {/* Projects Section */}
        {renderSection("projects", "Projects", () => (
          <div>
            {getArrayData("projects").map((project, index) => (
              <div key={index} className="project-item">
                <div className="item-header">
                  <div>
                    {hasData("projects", "Project Title", index) && (
                      <div className="item-title">{getValue("projects", "Project Title", index)}</div>
                    )}
                    {hasData("projects", "Tools Used", index) && (
                      <div className="item-company">{getValue("projects", "Tools Used", index)}</div>
                    )}
                    {hasData("projects", "Tools/Technologies Used", index) && (
                      <div className="item-company">{getValue("projects", "Tools/Technologies Used", index)}</div>
                    )}
                  </div>
                </div>
                {hasData("projects", "Description", index) && (
                  <div className="item-description">
                    <strong>Description:</strong> {getValue("projects", "Description", index)}
                  </div>
                )}
                {hasData("projects", "Your Contribution", index) && (
                  <div className="item-description" style={{marginTop: '8px'}}>
                    <strong>Contribution:</strong> {getValue("projects", "Your Contribution", index)}
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}

        {/* Education Section */}
        {renderSection("education", "Education", () => (
          <div className="education-item">
            <div className="education-details">
              <div>
                {hasData("education", "Degree Name") && (
                  <div className="item-title">{getValue("education", "Degree Name")}</div>
                )}
                {hasData("education", "Institution Name") && (
                  <div className="item-company">{getValue("education", "Institution Name")}</div>
                )}
                {hasData("education", "Duration") && (
                  <div className="item-duration" style={{display: 'inline-block', marginTop: '8px'}}>
                    {getValue("education", "Duration")}
                  </div>
                )}
              </div>
              {hasData("education", "CGPA or Percentage") && (
                <div className="grade-info">{getValue("education", "CGPA or Percentage")}</div>
              )}
            </div>
            
            {(hasData("education", "10th Grade School Name & Percentage") || hasData("education", "12th Grade School Name & Percentage")) && (
              <div style={{marginTop: '15px'}}>
                {hasData("education", "12th Grade School Name & Percentage") && (
                  <div className="item-description">
                    <strong>12th Grade:</strong> {getValue("education", "12th Grade School Name & Percentage")}
                  </div>
                )}
                {hasData("education", "10th Grade School Name & Percentage") && (
                  <div className="item-description">
                    <strong>10th Grade:</strong> {getValue("education", "10th Grade School Name & Percentage")}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}

        {/* Technical Skills */}
        {renderSection("techSkills", "Technical Skills", () => (
          <div className="skills-grid">
            {getArrayData("techSkills").map((skill, index) => (
              <div key={index} className="skill-item">
                {getValue("techSkills", "Technical Skills", index) || getValue("techSkills", "Skill", index)}
              </div>
            ))}
          </div>
        ))}

        {/* Soft Skills */}
        {renderSection("softSkills", "Soft Skills", () => (
          <div className="skills-grid">
            {getArrayData("softSkills").map((skill, index) => (
              <div key={index} className="skill-item">
                {getValue("softSkills", "Soft Skills", index) || getValue("softSkills", "Soft Skill", index)}
              </div>
            ))}
          </div>
        ))}

        {/* Certifications */}
        {renderSection("certifications", "Certifications", () => (
          <div className="list-items">
            {getArrayData("certifications").map((cert, index) => (
              <div key={index} className="list-item">
                <strong>{getValue("certifications", "Course/Certification Name", index)}</strong>
                {hasData("certifications", "Date", index) && (
                  <span> - {getValue("certifications", "Date", index)}</span>
                )}
              </div>
            ))}
          </div>
        ))}

        {/* Achievements */}
        {renderSection("achievements", "Achievements", () => (
          <div>
            {getArrayData("achievements").map((achievement, index) => (
              <div key={index} className="achievement-item">
                {getValue("achievements", "Achievements", index) || getValue("achievements", "Achievement", index)}
              </div>
            ))}
          </div>
        ))}

        {/* Activities */}
        {renderSection("activities", "Activities", () => (
          <div>
            {getArrayData("activities").map((activity, index) => (
              <div key={index} className="activity-item">
                {getValue("activities", "Activities", index) || getValue("activities", "Activity", index)}
              </div>
            ))}
          </div>
        ))}

        {/* Languages */}
        {renderSection("languages", "Languages", () => (
          <div className="skills-grid">
            {getArrayData("languages").map((lang, index) => (
              <div key={index} className="skill-item">
                {getValue("languages", "Languages", index) || getValue("languages", "Language", index)}
              </div>
            ))}
          </div>
        ))}

        {/* Interests */}
        {renderSection("interests", "Interests", () => (
          <div className="skills-grid">
            {getArrayData("interests").map((interest, index) => (
              <div key={index} className="skill-item">
                {getValue("interests", "Interests", index) || getValue("interests", "Interest", index)}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FuturisticGlowTemplate;