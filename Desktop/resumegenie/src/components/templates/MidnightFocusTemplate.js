import React from "react";
import { ResumeFieldsConfig } from "../../pages/ResumeBuilder";

const MidnightFocusTemplate = ({ resumeData, selectedCareer }) => {
  const config = ResumeFieldsConfig[selectedCareer];

  const getSectionData = (sectionKey) => {
    return resumeData[sectionKey] || {};
  };

  const getArraySectionData = (sectionKey) => {
    const data = resumeData[sectionKey];
    return Array.isArray(data) ? data : [];
  };

  const hasData = (data) => {
    if (Array.isArray(data)) {
      return data.some(item => 
        Object.values(item).some(value => value && value.toString().trim() !== "")
      );
    }
    return Object.values(data).some(value => value && value.toString().trim() !== "");
  };

  const formatText = (text) => {
    if (!text) return "";
    return text.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        {index < text.split('\n').length - 1 && <br />}
      </span>
    ));
  };

  const renderSection = (section) => {
    if (!section || section.display === "none") return null;

    const isMultiple = section.multiple;
    const sectionData = isMultiple ? getArraySectionData(section.sectionKey) : getSectionData(section.sectionKey);

    if (!hasData(sectionData)) return null;

    return (
      <div key={section.sectionKey} className="midnight-section">
        {section.title && (
          <div className="midnight-section-header">
            <h2 className="midnight-section-title">{section.title}</h2>
            <div className="midnight-divider"></div>
          </div>
        )}
        
        <div className="midnight-section-content">
          {isMultiple ? (
            sectionData.map((item, index) => (
              <div key={index} className="midnight-item">
                {renderSectionContent(section, item)}
              </div>
            ))
          ) : (
            renderSectionContent(section, sectionData)
          )}
        </div>
      </div>
    );
  };

  const renderSectionContent = (section, data) => {
    const sectionKey = section.sectionKey;

    switch (sectionKey) {
      case "summary":
        return (
          <div className="midnight-summary">
            <p className="midnight-summary-text">{formatText(data["Summary"])}</p>
          </div>
        );

      case "education":
        if (section.multiple) {
          return (
            <div className="midnight-education-item">
              <div className="midnight-education-main">
                <h3 className="midnight-education-degree">{data["Degree Name"] || data["Degree / Course Name"]}</h3>
                <div className="midnight-education-school">{data["Institution Name"]}</div>
              </div>
              <div className="midnight-education-details">
                <div className="midnight-education-duration">{data["Duration"] || data["Duration (Start – End or 'Present')"]}</div>
                {data["CGPA or Percentage"] && (
                  <div className="midnight-education-grade">{data["CGPA or Percentage"] || data["CGPA / Percentage"]}</div>
                )}
              </div>
            </div>
          );
        } else {
          return (
            <div className="midnight-education-single">
              <div className="midnight-education-item">
                <div className="midnight-education-main">
                  <h3 className="midnight-education-degree">{data["Degree Name"] || data["Degree / Course Name"]}</h3>
                  <div className="midnight-education-school">{data["Institution Name"]}</div>
                </div>
                <div className="midnight-education-details">
                  <div className="midnight-education-duration">{data["Duration"] || data["Duration (Start – End or 'Present')"]}</div>
                  {data["CGPA or Percentage"] && (
                    <div className="midnight-education-grade">{data["CGPA or Percentage"] || data["CGPA / Percentage"]}</div>
                  )}
                </div>
              </div>
              
              {(data["10th Grade School Name & Percentage"] || data["12th Grade School Name & Percentage"]) && (
                <div className="midnight-schooling">
                  {data["12th Grade School Name & Percentage"] && (
                    <div className="midnight-school-item">
                      <span className="midnight-school-level">12th Grade:</span>
                      <span className="midnight-school-details">{data["12th Grade School Name & Percentage"]}</span>
                    </div>
                  )}
                  {data["10th Grade School Name & Percentage"] && (
                    <div className="midnight-school-item">
                      <span className="midnight-school-level">10th Grade:</span>
                      <span className="midnight-school-details">{data["10th Grade School Name & Percentage"]}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        }

      case "work":
      case "workExperience":
      case "experience":
      case "internships":
        return (
          <div className="midnight-work-item">
            <div className="midnight-work-header">
              <div className="midnight-work-main">
                <h3 className="midnight-work-title">
                  {data["Job Title"] || data["Role"] || data["Position"]}
                </h3>
                <div className="midnight-work-company">
                  {data["Company Name"] || data["Company / Client"] || data["Organization / Firm"] || data["Hospital / Clinic Name"]}
                </div>
              </div>
              <div className="midnight-work-duration">{data["Duration"]}</div>
            </div>
            
            {(data["Responsibilities & Achievements"] || data["Responsibilities"] || data["Duties"] || data["Key Responsibilities"] || data["Responsibilities & Legal Work"]) && (
              <div className="midnight-work-description">
                <p>{formatText(data["Responsibilities & Achievements"] || data["Responsibilities"] || data["Duties"] || data["Key Responsibilities"] || data["Responsibilities & Legal Work"])}</p>
              </div>
            )}

            {data["Departments Rotated"] && (
              <div className="midnight-work-departments">
                <span className="midnight-work-label">Departments:</span> {data["Departments Rotated"]}
              </div>
            )}
          </div>
        );

      case "projects":
        return (
          <div className="midnight-project-item">
            <div className="midnight-project-header">
              <h3 className="midnight-project-title">
                {data["Project Title"] || data["Project/Campaign Name"] || data["Title"]}
              </h3>
              {(data["Tools Used"] || data["Tools/Technologies Used"] || data["Platform Used"] || data["Year / Role"] || data["Project Type"]) && (
                <div className="midnight-project-tech">
                  {data["Tools Used"] || data["Tools/Technologies Used"] || data["Platform Used"] || data["Year / Role"] || data["Project Type"]}
                </div>
              )}
            </div>
            
            {(data["Description"] || data["Summary & Objective"]) && (
              <div className="midnight-project-description">
                <p>{formatText(data["Description"] || data["Summary & Objective"])}</p>
              </div>
            )}

            {(data["Your Contribution"] || data["Description / Contribution"]) && (
              <div className="midnight-project-contribution">
                <span className="midnight-project-label">Contribution:</span>
                <p>{formatText(data["Your Contribution"] || data["Description / Contribution"])}</p>
              </div>
            )}

            {data["Findings"] && (
              <div className="midnight-project-findings">
                <span className="midnight-project-label">Findings:</span>
                <p>{formatText(data["Findings"])}</p>
              </div>
            )}

            {(data["Goal / Audience"] || data["Result / Metrics"] || data["Conversion / Engagement Stats"] || data["Key Insights / Results"]) && (
              <div className="midnight-project-results">
                {data["Goal / Audience"] && <div><span className="midnight-project-label">Goal:</span> {data["Goal / Audience"]}</div>}
                {data["Result / Metrics"] && <div><span className="midnight-project-label">Results:</span> {data["Result / Metrics"]}</div>}
                {data["Conversion / Engagement Stats"] && <div><span className="midnight-project-label">Stats:</span> {data["Conversion / Engagement Stats"]}</div>}
                {data["Key Insights / Results"] && <div><span className="midnight-project-label">Results:</span> {formatText(data["Key Insights / Results"])}</div>}
              </div>
            )}
          </div>
        );

      case "skills":
      case "techSkills":
      case "softSkills":
      case "coreLegalSkills":
      case "otherSkills":
      case "coreSalesSkills":
      case "coreMedicalSkills":
      case "labSkills":
      case "teachingSkills":
      case "tools":
        if (section.fields && section.fields.length > 1) {
          // Handle sections with multiple field types (like teachingSkills, otherSkills)
          return (
            <div className="midnight-skills-group">
              {section.fields.map((field, fieldIndex) => {
                const fieldData = data[field.label];
                if (!fieldData) return null;
                
                return (
                  <div key={fieldIndex} className="midnight-skill-category">
                    <h4 className="midnight-skill-category-title">{field.label}</h4>
                    <div className="midnight-skill-items">
                      {fieldData.split('\n').filter(item => item.trim()).map((item, itemIndex) => (
                        <span key={itemIndex} className="midnight-skill-item">
                          {item.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        } else {
          // Handle regular skills sections
          const skillText = data[section.fields[0]?.label] || 
                           data["Technical Skills"] || 
                           data["Soft Skills"] || 
                           data["Core Legal Skill"] || 
                           data["Core Sales Skills"] || 
                           data["Skill"] ||
                           data["Tool/Software"] ||
                           Object.values(data)[0];
          
          return (
            <div className="midnight-skills-simple">
              <div className="midnight-skill-items">
                {skillText && skillText.split('\n').filter(item => item.trim()).map((item, index) => (
                  <span key={index} className="midnight-skill-item">
                    {item.trim()}
                  </span>
                ))}
              </div>
            </div>
          );
        }

      case "languages":
      case "interests":
      case "achievements":
      case "activities":
      case "certifications":
      case "publications":
        const fieldLabel = section.fields[0]?.label;
        const itemData = data[fieldLabel] || 
                        data["Languages"] || 
                        data["Interests"] || 
                        data["Achievements"] || 
                        data["Activities"] ||
                        data["Achievement"] ||
                        data["Activity"] ||
                        Object.values(data)[0];

        if (sectionKey === "certifications") {
          return (
            <div className="midnight-cert-item">
              <div className="midnight-cert-name">
                {data["Course/Certification Name"] || data["Certification Name"] || data["Certification Title"]}
              </div>
              {data["Date"] && (
                <div className="midnight-cert-date">{data["Date"] || data["Year"]}</div>
              )}
            </div>
          );
        }

        if (sectionKey === "publications") {
          return (
            <div className="midnight-publication-item">
              <h3 className="midnight-publication-title">{data["Article / Blog Title"]}</h3>
              {data["Platform (if published)"] && (
                <div className="midnight-publication-platform">{data["Platform (if published)"]}</div>
              )}
              {data["Link"] && (
                <div className="midnight-publication-link">
                  <a href={data["Link"]} target="_blank" rel="noopener noreferrer">
                    {data["Link"]}
                  </a>
                </div>
              )}
              {data["Brief Summary"] && (
                <div className="midnight-publication-summary">
                  <p>{formatText(data["Brief Summary"])}</p>
                </div>
              )}
            </div>
          );
        }

        if (sectionKey === "achievements") {
          return (
            <div className="midnight-achievement-item">
              <div className="midnight-achievement-content">
                <div className="midnight-achievement-title">
                  {data["Achievement"] || data["Achievements"] || data["Title"] || itemData}
                </div>
                {data["Description"] && (
                  <div className="midnight-achievement-description">
                    {formatText(data["Description"])}
                  </div>
                )}
              </div>
              {data["Year"] && (
                <div className="midnight-achievement-year">{data["Year"]}</div>
              )}
            </div>
          );
        }

        if (sectionKey === "activities") {
          return (
            <div className="midnight-activity-item">
              <div className="midnight-activity-content">
                <div className="midnight-activity-title">
                  {data["Activity"] || data["Activities"] || data["Activity Title"] || itemData}
                </div>
                {data["Description"] && (
                  <div className="midnight-activity-description">
                    {formatText(data["Description"])}
                  </div>
                )}
              </div>
              {data["Year"] && (
                <div className="midnight-activity-year">{data["Year"]}</div>
              )}
            </div>
          );
        }

        return (
          <div className="midnight-simple-item">
            <div className="midnight-simple-content">
              {itemData}
            </div>
          </div>
        );

      default:
        return (
          <div className="midnight-default-item">
            {Object.entries(data).map(([key, value]) => 
              value ? (
                <div key={key} className="midnight-default-field">
                  <span className="midnight-field-label">{key}:</span>
                  <span className="midnight-field-value">{formatText(value)}</span>
                </div>
              ) : null
            )}
          </div>
        );
    }
  };

  // Header data
  const headerData = getSectionData("header");
  const fullName = headerData["Full Name"] || "";
  const title = headerData["Professional Title"] || "";
  const phone = headerData["Phone Number"] || "";
  const email = headerData["Email Address"] || "";
  const linkedin = headerData["LinkedIn Profile"] || "";
  const location = headerData["Location (City, Country)"] || "";
  const github = headerData["Github"] || "";
  const portfolio = headerData["Portfolio / Content Link"] || "";
  const instagram = headerData["Instagram / YouTube Handle"] || "";
  const profilePhoto = headerData["Profile Photo"] || "";

  return (
    <div className="midnight-template">
      <style jsx>{`
        .midnight-template {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
          color: #f8fafc;
          min-height: 100vh;
          padding: 32px;
          line-height: 1.6;
          position: relative;
          overflow: hidden;
        }

        .midnight-template::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.08) 0%, transparent 50%),
                      radial-gradient(circle at 40% 80%, rgba(34, 197, 94, 0.05) 0%, transparent 50%);
          pointer-events: none;
        }

        .midnight-container {
          position: relative;
          z-index: 1;
          max-width: 800px;
          margin: 0 auto;
          background: rgba(15, 23, 42, 0.9);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(148, 163, 184, 0.1);
          border-radius: 24px;
          padding: 40px;
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.4),
            0 0 0 1px rgba(148, 163, 184, 0.1),
            inset 0 1px 0 rgba(248, 250, 252, 0.1);
        }

        .midnight-header {
          text-align: center;
          padding-bottom: 40px;
          border-bottom: 1px solid rgba(148, 163, 184, 0.2);
          margin-bottom: 40px;
          position: relative;
        }

        .midnight-profile-photo {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          margin: 0 auto 24px;
          border: 4px solid rgba(59, 130, 246, 0.3);
          padding: 4px;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(168, 85, 247, 0.2));
          display: block;
          object-fit: cover;
        }

        .midnight-name {
          font-size: 48px;
          font-weight: 800;
          margin: 0 0 12px 0;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -0.02em;
          line-height: 1.1;
        }

        .midnight-title {
          font-size: 20px;
          font-weight: 500;
          color: #94a3b8;
          margin: 0 0 32px 0;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .midnight-contact {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 24px;
          font-size: 14px;
          color: #cbd5e1;
        }

        .midnight-contact-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(30, 41, 59, 0.8);
          border-radius: 12px;
          border: 1px solid rgba(148, 163, 184, 0.1);
          transition: all 0.3s ease;
        }

        .midnight-contact-item:hover {
          background: rgba(30, 41, 59, 1);
          border-color: rgba(59, 130, 246, 0.3);
          transform: translateY(-1px);
        }

        .midnight-contact-icon {
          width: 16px;
          height: 16px;
          color: #3b82f6;
          flex-shrink: 0;
        }

        .midnight-section {
          margin-bottom: 48px;
        }

        .midnight-section:last-child {
          margin-bottom: 0;
        }

        .midnight-section-header {
          margin-bottom: 24px;
        }

        .midnight-section-title {
          font-size: 24px;
          font-weight: 700;
          margin: 0 0 12px 0;
          color: #f8fafc;
          display: flex;
          align-items: center;
          gap: 12px;
          letter-spacing: -0.01em;
        }

        .midnight-section-title::before {
          content: '';
          width: 4px;
          height: 24px;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          border-radius: 2px;
          flex-shrink: 0;
        }

        .midnight-divider {
          height: 2px;
          background: linear-gradient(90deg, rgba(59, 130, 246, 0.6) 0%, rgba(168, 85, 247, 0.4) 50%, transparent 100%);
          border-radius: 1px;
        }

        .midnight-section-content {
          padding-left: 16px;
        }

        .midnight-item {
          margin-bottom: 32px;
        }

        .midnight-item:last-child {
          margin-bottom: 0;
        }

        .midnight-summary-text {
          font-size: 16px;
          line-height: 1.7;
          color: #e2e8f0;
          margin: 0;
          text-align: justify;
        }

        .midnight-education-item {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 24px;
          padding: 20px;
          background: rgba(30, 41, 59, 0.4);
          border-radius: 16px;
          border: 1px solid rgba(148, 163, 184, 0.1);
          margin-bottom: 16px;
        }

        .midnight-education-main {
          flex: 1;
        }

        .midnight-education-degree {
          font-size: 18px;
          font-weight: 600;
          color: #f8fafc;
          margin: 0 0 8px 0;
          line-height: 1.3;
        }

        .midnight-education-school {
          font-size: 14px;
          color: #94a3b8;
          font-weight: 500;
        }

        .midnight-education-details {
          text-align: right;
          flex-shrink: 0;
        }

        .midnight-education-duration {
          font-size: 14px;
          color: #cbd5e1;
          font-weight: 500;
          margin-bottom: 4px;
        }

        .midnight-education-grade {
          font-size: 14px;
          color: #3b82f6;
          font-weight: 600;
        }

        .midnight-schooling {
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid rgba(148, 163, 184, 0.1);
        }

        .midnight-school-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 20px;
          background: rgba(30, 41, 59, 0.3);
          border-radius: 12px;
          margin-bottom: 8px;
        }

        .midnight-school-item:last-child {
          margin-bottom: 0;
        }

        .midnight-school-level {
          font-size: 14px;
          color: #94a3b8;
          font-weight: 500;
        }

        .midnight-school-details {
          font-size: 14px;
          color: #cbd5e1;
        }

        .midnight-work-item {
          padding: 24px;
          background: rgba(30, 41, 59, 0.4);
          border-radius: 16px;
          border: 1px solid rgba(148, 163, 184, 0.1);
          margin-bottom: 20px;
        }

        .midnight-work-item:last-child {
          margin-bottom: 0;
        }

        .midnight-work-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 24px;
          margin-bottom: 16px;
        }

        .midnight-work-main {
          flex: 1;
        }

        .midnight-work-title {
          font-size: 18px;
          font-weight: 600;
          color: #f8fafc;
          margin: 0 0 8px 0;
          line-height: 1.3;
        }

        .midnight-work-company {
          font-size: 15px;
          color: #3b82f6;
          font-weight: 500;
        }

        .midnight-work-duration {
          font-size: 14px;
          color: #94a3b8;
          font-weight: 500;
          flex-shrink: 0;
        }

        .midnight-work-description {
          margin-top: 16px;
        }

        .midnight-work-description p {
          margin: 0;
          color: #cbd5e1;
          line-height: 1.6;
          font-size: 14px;
        }

        .midnight-work-departments {
          margin-top: 12px;
          font-size: 14px;
          color: #94a3b8;
        }

        .midnight-work-label {
          color: #3b82f6;
          font-weight: 500;
        }

        .midnight-project-item {
          padding: 24px;
          background: rgba(30, 41, 59, 0.4);
          border-radius: 16px;
          border: 1px solid rgba(148, 163, 184, 0.1);
          margin-bottom: 20px;
        }

        .midnight-project-item:last-child {
          margin-bottom: 0;
        }

        .midnight-project-header {
          margin-bottom: 16px;
        }

        .midnight-project-title {
          font-size: 18px;
          font-weight: 600;
          color: #f8fafc;
          margin: 0 0 8px 0;
          line-height: 1.3;
        }

        .midnight-project-tech {
          font-size: 14px;
          color: #8b5cf6;
          font-weight: 500;
        }

        .midnight-project-description {
          margin-bottom: 16px;
        }

        .midnight-project-description p {
          margin: 0;
          color: #cbd5e1;
          line-height: 1.6;
          font-size: 14px;
        }

        .midnight-project-contribution {
          margin-bottom: 16px;
        }

        .midnight-project-contribution p {
          margin: 8px 0 0 0;
          color: #cbd5e1;
          line-height: 1.6;
          font-size: 14px;
        }

        .midnight-project-findings {
          margin-bottom: 16px;
        }

        .midnight-project-findings p {
          margin: 8px 0 0 0;
          color: #cbd5e1;
          line-height: 1.6;
          font-size: 14px;
        }

        .midnight-project-results {
          background: rgba(15, 23, 42, 0.5);
          padding: 16px;
          border-radius: 12px;
          border: 1px solid rgba(148, 163, 184, 0.1);
        }

        .midnight-project-results > div {
          margin-bottom: 8px;
          font-size: 14px;
          color: #cbd5e1;
        }

        .midnight-project-results > div:last-child {
          margin-bottom: 0;
        }

        .midnight-project-label {
          color: #3b82f6;
          font-weight: 600;
          margin-right: 8px;
        }

        .midnight-skills-group {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .midnight-skill-category-title {
          font-size: 16px;
          font-weight: 600;
          color: #e2e8f0;
          margin: 0 0 12px 0;
        }

        .midnight-skill-items {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .midnight-skill-item {
          padding: 8px 16px;
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 20px;
          font-size: 14px;
          font-weight: 500;
          color: #cbd5e1;
          transition: all 0.3s ease;
        }

        .midnight-skill-item:hover {
          background: rgba(59, 130, 246, 0.2);
          border-color: rgba(59, 130, 246, 0.4);
          transform: translateY(-1px);
        }

        .midnight-cert-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 20px;
          background: rgba(30, 41, 59, 0.4);
          border-radius: 12px;
          border: 1px solid rgba(148, 163, 184, 0.1);
          margin-bottom: 12px;
        }

        .midnight-cert-item:last-child {
          margin-bottom: 0;
        }

        .midnight-cert-name {
          font-size: 15px;
          font-weight: 500;
          color: #e2e8f0;
          flex: 1;
        }

        .midnight-cert-date {
          font-size: 14px;
          color: #94a3b8;
          font-weight: 500;
        }

        .midnight-publication-item {
          padding: 24px;
          background: rgba(30, 41, 59, 0.4);
          border-radius: 16px;
          border: 1px solid rgba(148, 163, 184, 0.1);
          margin-bottom: 20px;
        }

        .midnight-publication-item:last-child {
          margin-bottom: 0;
        }

        .midnight-publication-title {
          font-size: 18px;
          font-weight: 600;
          color: #f8fafc;
          margin: 0 0 12px 0;
          line-height: 1.3;
        }

        .midnight-publication-platform {
          font-size: 14px;
          color: #8b5cf6;
          font-weight: 500;
          margin-bottom: 8px;
        }

        .midnight-publication-link {
          margin-bottom: 16px;
        }

        .midnight-publication-link a {
          color: #3b82f6;
          text-decoration: none;
          font-size: 14px;
          word-break: break-all;
        }

        .midnight-publication-link a:hover {
          text-decoration: underline;
        }

        .midnight-publication-summary p {
          margin: 0;
          color: #cbd5e1;
          line-height: 1.6;
          font-size: 14px;
        }

        .midnight-achievement-item {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 20px;
          padding: 20px;
          background: rgba(30, 41, 59, 0.4);
          border-radius: 16px;
          border: 1px solid rgba(148, 163, 184, 0.1);
          margin-bottom: 16px;
        }

        .midnight-achievement-item:last-child {
          margin-bottom: 0;
        }

        .midnight-achievement-content {
          flex: 1;
        }

        .midnight-achievement-title {
          font-size: 16px;
          font-weight: 600;
          color: #f8fafc;
          margin-bottom: 8px;
          line-height: 1.3;
        }

        .midnight-achievement-description {
          color: #cbd5e1;
          font-size: 14px;
          line-height: 1.6;
        }

        .midnight-achievement-year {
          font-size: 14px;
          color: #94a3b8;
          font-weight: 500;
          flex-shrink: 0;
        }

        .midnight-activity-item {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 20px;
          padding: 20px;
          background: rgba(30, 41, 59, 0.4);
          border-radius: 16px;
          border: 1px solid rgba(148, 163, 184, 0.1);
          margin-bottom: 16px;
        }

        .midnight-activity-item:last-child {
          margin-bottom: 0;
        }

        .midnight-activity-content {
          flex: 1;
        }

        .midnight-activity-title {
          font-size: 16px;
          font-weight: 600;
          color: #f8fafc;
          margin-bottom: 8px;
          line-height: 1.3;
        }

        .midnight-activity-description {
          color: #cbd5e1;
          font-size: 14px;
          line-height: 1.6;
        }

        .midnight-activity-year {
          font-size: 14px;
          color: #94a3b8;
          font-weight: 500;
          flex-shrink: 0;
        }

        .midnight-simple-item {
          padding: 12px 20px;
          background: rgba(30, 41, 59, 0.3);
          border-radius: 12px;
          border: 1px solid rgba(148, 163, 184, 0.1);
          margin-bottom: 12px;
        }

        .midnight-simple-item:last-child {
          margin-bottom: 0;
        }

        .midnight-simple-content {
          font-size: 15px;
          color: #e2e8f0;
          font-weight: 500;
        }

        .midnight-default-item {
          padding: 20px;
          background: rgba(30, 41, 59, 0.4);
          border-radius: 16px;
          border: 1px solid rgba(148, 163, 184, 0.1);
          margin-bottom: 16px;
        }

        .midnight-default-item:last-child {
          margin-bottom: 0;
        }

        .midnight-default-field {
          margin-bottom: 12px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .midnight-default-field:last-child {
          margin-bottom: 0;
        }

        .midnight-field-label {
          font-size: 14px;
          color: #94a3b8;
          font-weight: 500;
        }

        .midnight-field-value {
          font-size: 15px;
          color: #e2e8f0;
          line-height: 1.5;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .midnight-template {
            padding: 16px;
          }

          .midnight-container {
            padding: 24px;
            border-radius: 16px;
          }

          .midnight-name {
            font-size: 36px;
          }

          .midnight-title {
            font-size: 18px;
          }

          .midnight-contact {
            flex-direction: column;
            align-items: center;
            gap: 12px;
          }

          .midnight-contact-item {
            width: 100%;
            justify-content: center;
          }

          .midnight-section-title {
            font-size: 20px;
          }

          .midnight-education-item,
          .midnight-work-header,
          .midnight-achievement-item,
          .midnight-activity-item {
            flex-direction: column;
            gap: 16px;
          }

          .midnight-education-details,
          .midnight-work-duration,
          .midnight-achievement-year,
          .midnight-activity-year {
            text-align: left;
          }

          .midnight-profile-photo {
            width: 100px;
            height: 100px;
          }
        }

        /* Print Styles */
        @media print {
          .midnight-template {
            background: #0f172a !important;
            -webkit-print-color-adjust: exact;
            color-adjust: exact;
            padding: 0;
          }

          .midnight-container {
            background: #0f172a !important;
            border: none;
            box-shadow: none;
            padding: 20px;
            margin: 0;
            max-width: none;
            border-radius: 0;
          }

          .midnight-section {
            break-inside: avoid;
            page-break-inside: avoid;
          }

          .midnight-item {
            break-inside: avoid;
            page-break-inside: avoid;
          }
        }

        /* Focus and Accessibility */
        .midnight-contact-item:focus,
        .midnight-skill-item:focus {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
        }

        /* Enhanced Visual Hierarchy */
        .midnight-header::after {
          content: '';
          position: absolute;
          bottom: -20px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
          border-radius: 2px;
        }

        /* Subtle animations */
        .midnight-skill-item,
        .midnight-contact-item {
          animation: fadeInUp 0.5s ease forwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div className="midnight-container">
        {/* Header Section */}
        <div className="midnight-header">
          {profilePhoto && (
            <img
              src={profilePhoto}
              alt="Profile"
              className="midnight-profile-photo"
            />
          )}
          
          {fullName && <h1 className="midnight-name">{fullName}</h1>}
          {title && <p className="midnight-title">{title}</p>}
          
          <div className="midnight-contact">
            {phone && (
              <div className="midnight-contact-item">
                <svg className="midnight-contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {phone}
              </div>
            )}
            
            {email && (
              <div className="midnight-contact-item">
                <svg className="midnight-contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {email}
              </div>
            )}
            
            {linkedin && (
              <div className="midnight-contact-item">
                <svg className="midnight-contact-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </div>
            )}
            
            {github && (
              <div className="midnight-contact-item">
                <svg className="midnight-contact-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </div>
            )}
            
            {portfolio && (
              <div className="midnight-contact-item">
                <svg className="midnight-contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                Portfolio
              </div>
            )}
            
            {instagram && (
              <div className="midnight-contact-item">
                <svg className="midnight-contact-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Social
              </div>
            )}
            
            {location && (
              <div className="midnight-contact-item">
                <svg className="midnight-contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {location}
              </div>
            )}
          </div>
        </div>

        {/* Dynamic Sections */}
        {config && config.map(renderSection)}
      </div>
    </div>
  );
};

export default MidnightFocusTemplate;