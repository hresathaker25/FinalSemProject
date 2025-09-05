import React from "react";
import { ResumeFieldsConfig } from "../../pages/ResumeBuilder";

const AuroraHighlightTemplate = ({ resumeData, selectedCareer }) => {
  const config = ResumeFieldsConfig[selectedCareer];
  
  if (!config || !resumeData) {
    return <div className="text-center py-8 text-gray-500">Loading...</div>;
  }

  const renderSection = (sectionKey, customTitle = null, customRender = null) => {
    const sectionConfig = config.find(s => s.sectionKey === sectionKey);
    if (!sectionConfig || sectionConfig.display === "none") return null;

    const sectionData = resumeData[sectionKey];
    if (!sectionData) return null;

    // Check if section has any meaningful content
    const hasContent = Array.isArray(sectionData) 
      ? sectionData.some(item => Object.values(item || {}).some(value => value && value.toString().trim()))
      : Object.values(sectionData || {}).some(value => value && value.toString().trim());

    if (!hasContent) return null;

    const title = customTitle || sectionConfig.title;
    if (!title) return null;

    return (
      <div className="aurora-section">
        <div className="aurora-section-header">
          <div className="aurora-accent-line"></div>
          <h3 className="aurora-section-title">{title}</h3>
          <div className="aurora-accent-line-end"></div>
        </div>
        <div className="aurora-section-content">
          {customRender ? customRender(sectionData, sectionConfig) : renderDefaultSection(sectionData, sectionConfig)}
        </div>
      </div>
    );
  };

  const renderDefaultSection = (sectionData, sectionConfig) => {
    if (Array.isArray(sectionData)) {
      return sectionData
        .filter(item => item && Object.values(item).some(value => value && value.toString().trim()))
        .map((item, index) => (
          <div key={index} className="aurora-item">
            {renderSectionItem(item, sectionConfig)}
          </div>
        ));
    } else {
      return (
        <div className="aurora-item">
          {renderSectionItem(sectionData, sectionConfig)}
        </div>
      );
    }
  };

  const renderSectionItem = (item, sectionConfig) => {
    if (!item || !sectionConfig.fields) return null;

    return sectionConfig.fields.map((field, index) => {
      const value = item[field.label];
      if (!value || !value.toString().trim()) return null;

      return (
        <div key={index} className="aurora-field">
          <span className="aurora-field-label">{field.label}:</span>
          <span className="aurora-field-value">
            {field.type === 'textarea' ? 
              value.split('\n').map((line, i) => (
                <span key={i}>{line}<br /></span>
              )) : value
            }
          </span>
        </div>
      );
    });
  };

  const renderEducation = (data) => {
    if (!data) return null;
    
    return (
      <div className="aurora-education-container">
        {data["Degree Name"] && (
          <div className="aurora-degree">
            <h4 className="aurora-degree-name">{data["Degree Name"]}</h4>
            <div className="aurora-institution">{data["Institution Name"]}</div>
            <div className="aurora-meta">
              {data["Duration"] && <span className="aurora-duration">{data["Duration"]}</span>}
              {data["CGPA or Percentage"] && <span className="aurora-grade">{data["CGPA or Percentage"]}</span>}
            </div>
          </div>
        )}
        
        {(data["10th Grade School Name & Percentage"] || data["12th Grade School Name & Percentage"]) && (
          <div className="aurora-schooling">
            {data["12th Grade School Name & Percentage"] && (
              <div className="aurora-grade-item">12th: {data["12th Grade School Name & Percentage"]}</div>
            )}
            {data["10th Grade School Name & Percentage"] && (
              <div className="aurora-grade-item">10th: {data["10th Grade School Name & Percentage"]}</div>
            )}
          </div>
        )}
      </div>
    );
  };

  const renderWork = (data) => {
    return data
      .filter(item => item && Object.values(item).some(value => value && value.toString().trim()))
      .map((job, index) => (
        <div key={index} className="aurora-work-item">
          <div className="aurora-work-header">
            <h4 className="aurora-job-title">{job["Job Title"] || job["Role"] || job["Position"]}</h4>
            <div className="aurora-company">{job["Company Name"] || job["Organization / Firm"] || job["Company / Client"] || job["Hospital / Clinic Name"]}</div>
            <div className="aurora-duration">{job["Duration"]}</div>
          </div>
          {(job["Responsibilities & Achievements"] || job["Responsibilities & Legal Work"] || job["Duties"] || job["Key Responsibilities"]) && (
            <div className="aurora-responsibilities">
              {(job["Responsibilities & Achievements"] || job["Responsibilities & Legal Work"] || job["Duties"] || job["Key Responsibilities"])
                .split('\n')
                .filter(line => line.trim())
                .map((line, i) => (
                  <div key={i} className="aurora-responsibility-item">• {line.trim()}</div>
                ))
              }
            </div>
          )}
        </div>
      ));
  };

  const renderProjects = (data) => {
    return data
      .filter(item => item && Object.values(item).some(value => value && value.toString().trim()))
      .map((project, index) => (
        <div key={index} className="aurora-project-item">
          <div className="aurora-project-header">
            <h4 className="aurora-project-title">{project["Project Title"] || project["Project/Campaign Name"] || project["Title"]}</h4>
            <div className="aurora-project-tools">{project["Tools Used"] || project["Tools/Technologies Used"] || project["Platform Used"]}</div>
          </div>
          {project["Description"] && (
            <div className="aurora-project-description">{project["Description"]}</div>
          )}
          {project["Your Contribution"] && (
            <div className="aurora-project-contribution">
              <span className="aurora-contribution-label">Contribution:</span> {project["Your Contribution"]}
            </div>
          )}
        </div>
      ));
  };

  const renderSkills = (data, title = "Skills") => {
    if (!Array.isArray(data)) return null;
    
    const skills = data
      .filter(item => item && Object.values(item).some(value => value && value.toString().trim()))
      .map(item => Object.values(item).find(value => value && value.toString().trim()))
      .filter(Boolean);
    
    if (skills.length === 0) return null;

    return (
      <div className="aurora-skills-container">
        {skills.map((skill, index) => (
          <span key={index} className="aurora-skill-tag">{skill}</span>
        ))}
      </div>
    );
  };

  // Header data
  const header = resumeData.header || {};

  return (
    <div className="aurora-template">
      <style jsx>{`
        .aurora-template {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 297mm;
          width: 210mm;
          margin: 0 auto;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          position: relative;
          overflow: hidden;
          color: #2d3748;
          line-height: 1.6;
        }

        .aurora-template::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 20%, rgba(255,255,255,0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(255,255,255,0.08) 0%, transparent 50%),
            radial-gradient(circle at 40% 60%, rgba(255,255,255,0.06) 0%, transparent 50%);
          pointer-events: none;
        }

        .aurora-container {
          position: relative;
          z-index: 1;
          background: rgba(255,255,255,0.98);
          margin: 25mm;
          padding: 0;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          overflow: hidden;
        }

        .aurora-header {
          background: linear-gradient(135deg, #4a5568 0%, #2d3748 100%);
          color: white;
          padding: 30px 40px;
          position: relative;
          overflow: hidden;
        }

        .aurora-header::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
          transform: rotate(45deg);
        }

        .aurora-header-content {
          position: relative;
          z-index: 2;
        }

        .aurora-photo {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid rgba(255,255,255,0.3);
          float: right;
          margin-left: 20px;
          margin-top: -10px;
        }

        .aurora-name {
          font-size: 2.2em;
          font-weight: 700;
          margin-bottom: 5px;
          text-shadow: 0 2px 4px rgba(0,0,0,0.1);
          letter-spacing: -0.5px;
        }

        .aurora-title {
          font-size: 1.1em;
          opacity: 0.9;
          margin-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 300;
        }

        .aurora-contact {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          font-size: 0.9em;
          opacity: 0.95;
        }

        .aurora-contact-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .aurora-body {
          padding: 40px;
        }

        .aurora-section {
          margin-bottom: 35px;
        }

        .aurora-section:last-child {
          margin-bottom: 0;
        }

        .aurora-section-header {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
          position: relative;
        }

        .aurora-section-title {
          font-size: 1.3em;
          font-weight: 600;
          color: #2d3748;
          margin: 0 15px 0 0;
          white-space: nowrap;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .aurora-accent-line {
          height: 2px;
          background: linear-gradient(90deg, #667eea, #764ba2);
          border-radius: 1px;
          flex: 1;
          margin-right: 15px;
          max-width: 60px;
        }

        .aurora-accent-line-end {
          height: 2px;
          background: linear-gradient(90deg, #764ba2, #667eea);
          border-radius: 1px;
          flex: 1;
          margin-left: 15px;
          opacity: 0.3;
        }

        .aurora-section-content {
          padding-left: 0;
        }

        .aurora-item {
          margin-bottom: 20px;
          padding: 15px;
          background: rgba(102, 126, 234, 0.02);
          border-radius: 8px;
          border-left: 3px solid transparent;
          background-clip: padding-box;
          position: relative;
        }

        .aurora-item::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 3px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 0 2px 2px 0;
        }

        .aurora-item:last-child {
          margin-bottom: 0;
        }

        .aurora-field {
          margin-bottom: 8px;
          word-wrap: break-word;
          overflow-wrap: break-word;
        }

        .aurora-field:last-child {
          margin-bottom: 0;
        }

        .aurora-field-label {
          font-weight: 600;
          color: #4a5568;
          margin-right: 8px;
          font-size: 0.9em;
        }

        .aurora-field-value {
          color: #2d3748;
        }

        .aurora-education-container {
          background: rgba(102, 126, 234, 0.02);
          padding: 20px;
          border-radius: 8px;
          border-left: 3px solid #667eea;
        }

        .aurora-degree-name {
          font-size: 1.1em;
          font-weight: 600;
          color: #2d3748;
          margin-bottom: 5px;
        }

        .aurora-institution {
          color: #4a5568;
          font-weight: 500;
          margin-bottom: 8px;
        }

        .aurora-meta {
          display: flex;
          gap: 15px;
          font-size: 0.9em;
          color: #718096;
          margin-bottom: 15px;
        }

        .aurora-duration, .aurora-grade {
          background: rgba(102, 126, 234, 0.1);
          padding: 2px 8px;
          border-radius: 4px;
          font-weight: 500;
        }

        .aurora-schooling {
          display: flex;
          gap: 15px;
          padding-top: 15px;
          border-top: 1px solid rgba(102, 126, 234, 0.1);
        }

        .aurora-grade-item {
          font-size: 0.9em;
          color: #4a5568;
          background: rgba(255,255,255,0.5);
          padding: 4px 10px;
          border-radius: 4px;
        }

        .aurora-work-item {
          background: rgba(102, 126, 234, 0.02);
          padding: 20px;
          border-radius: 8px;
          margin-bottom: 15px;
          border-left: 3px solid #764ba2;
        }

        .aurora-work-header {
          margin-bottom: 12px;
        }

        .aurora-job-title {
          font-size: 1.1em;
          font-weight: 600;
          color: #2d3748;
          margin-bottom: 4px;
        }

        .aurora-company {
          color: #4a5568;
          font-weight: 500;
          margin-bottom: 4px;
        }

        .aurora-duration {
          font-size: 0.9em;
          color: #718096;
          background: rgba(102, 126, 234, 0.1);
          padding: 2px 8px;
          border-radius: 4px;
          display: inline-block;
        }

        .aurora-responsibilities {
          margin-top: 10px;
        }

        .aurora-responsibility-item {
          margin-bottom: 6px;
          padding-left: 8px;
          color: #4a5568;
          line-height: 1.5;
        }

        .aurora-project-item {
          background: rgba(118, 75, 162, 0.02);
          padding: 20px;
          border-radius: 8px;
          margin-bottom: 15px;
          border-left: 3px solid #667eea;
        }

        .aurora-project-header {
          margin-bottom: 10px;
        }

        .aurora-project-title {
          font-size: 1.1em;
          font-weight: 600;
          color: #2d3748;
          margin-bottom: 4px;
        }

        .aurora-project-tools {
          color: #4a5568;
          font-size: 0.9em;
          font-style: italic;
        }

        .aurora-project-description {
          color: #4a5568;
          margin-bottom: 8px;
          line-height: 1.5;
        }

        .aurora-project-contribution {
          font-size: 0.9em;
        }

        .aurora-contribution-label {
          font-weight: 600;
          color: #667eea;
        }

        .aurora-skills-container {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          padding: 15px;
          background: rgba(102, 126, 234, 0.02);
          border-radius: 8px;
        }

        .aurora-skill-tag {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 0.85em;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          transition: transform 0.2s ease;
        }

        .aurora-skill-tag:hover {
          transform: translateY(-1px);
        }

        .aurora-simple-list {
          padding: 15px;
          background: rgba(102, 126, 234, 0.02);
          border-radius: 8px;
        }

        .aurora-simple-item {
          margin-bottom: 8px;
          padding: 8px 0;
          color: #4a5568;
          border-bottom: 1px solid rgba(102, 126, 234, 0.1);
        }

        .aurora-simple-item:last-child {
          margin-bottom: 0;
          border-bottom: none;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .aurora-template {
            width: 100%;
            min-height: auto;
          }
          
          .aurora-container {
            margin: 10px;
          }
          
          .aurora-header {
            padding: 20px;
          }
          
          .aurora-body {
            padding: 20px;
          }
          
          .aurora-name {
            font-size: 1.8em;
          }
          
          .aurora-contact {
            flex-direction: column;
            gap: 10px;
          }
          
          .aurora-photo {
            width: 60px;
            height: 60px;
            margin-top: 0;
          }
          
          .aurora-schooling {
            flex-direction: column;
            gap: 8px;
          }
        }

        /* Print styles */
        @media print {
          .aurora-template {
            box-shadow: none;
            background: white;
          }
          
          .aurora-container {
            box-shadow: none;
            margin: 0;
          }
        }
      `}</style>

      <div className="aurora-container">
        {/* Header Section */}
        <div className="aurora-header">
          <div className="aurora-header-content">
            {header["Profile Photo"] && (
              <img 
                src={header["Profile Photo"]} 
                alt="Profile" 
                className="aurora-photo"
              />
            )}
            
            <div>
              <h1 className="aurora-name">
                {header["Full Name"] || "Your Name"}
              </h1>
              
              {header["Professional Title"] && (
                <div className="aurora-title">
                  {header["Professional Title"]}
                </div>
              )}
              
              <div className="aurora-contact">
                {header["Email Address"] && (
                  <div className="aurora-contact-item">
                    <span>✉</span> {header["Email Address"]}
                  </div>
                )}
                {header["Phone Number"] && (
                  <div className="aurora-contact-item">
                    <span>📱</span> {header["Phone Number"]}
                  </div>
                )}
                {header["Location (City, Country)"] && (
                  <div className="aurora-contact-item">
                    <span>📍</span> {header["Location (City, Country)"]}
                  </div>
                )}
                {header["LinkedIn Profile"] && (
                  <div className="aurora-contact-item">
                    <span>💼</span> LinkedIn
                  </div>
                )}
                {header["Github"] && (
                  <div className="aurora-contact-item">
                    <span>💻</span> GitHub
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Body Content */}
        <div className="aurora-body">
          {/* Professional Summary */}
          {renderSection("summary")}

          {/* Education */}
          {renderSection("education", null, (data) => renderEducation(data))}

          {/* Work Experience */}
          {renderSection("work", null, (data) => renderWork(data))}
          {renderSection("experience", "Clinical Experience", (data) => renderWork(data))}
          {renderSection("internships", "Internships", (data) => renderWork(data))}

          {/* Projects */}
          {renderSection("projects", null, (data) => renderProjects(data))}

          {/* Skills Sections */}
          {renderSection("techSkills", "Technical Skills", (data) => renderSkills(data, "Technical Skills"))}
          {renderSection("coreLegalSkills", "Core Legal Skills", (data) => renderSkills(data))}
          {renderSection("coreSalesSkills", "Core Sales Skills", (data) => renderSkills(data))}
          {renderSection("coreMedicalSkills", "Core Medical Skills", (data) => renderSkills(data))}
          {renderSection("teachingSkills", "Teaching Skills", (data) => renderSkills(data))}
          {renderSection("softSkills", "Soft Skills", (data) => renderSkills(data))}
          {renderSection("skills", "Skills", (data) => renderSkills(data))}
          {renderSection("tools", "Tools & Software", (data) => renderSkills(data))}
          {renderSection("otherSkills", "Other Skills", (data) => renderSkills(data))}
          {renderSection("labSkills", "Lab & Technical Skills", (data) => renderSkills(data))}

          {/* Other Sections */}
          {renderSection("certifications")}
          {renderSection("achievements")}
          {renderSection("activities", "Extracurricular Activities")}
          {renderSection("publications", "Legal Writing / Publications")}
          {renderSection("languages", "Languages", (data) => renderSkills(data))}
          {renderSection("interests", "Interests", (data) => renderSkills(data))}
        </div>
      </div>
    </div>
  );
};

export default AuroraHighlightTemplate;