import React from "react";
import { ResumeFieldsConfig } from "../../pages/ResumeBuilder";

const CrimsonLineTemplate = ({ resumeData, selectedCareer }) => {
  const config = ResumeFieldsConfig[selectedCareer] || ResumeFieldsConfig.Others;

  const renderSection = (sectionKey, title, isMultiple = false) => {
    const sectionData = resumeData[sectionKey];
    
    if (!sectionData) return null;

    // Skip rendering if section is empty
    if (isMultiple && (!Array.isArray(sectionData) || sectionData.length === 0)) {
      return null;
    }
    if (!isMultiple && typeof sectionData === 'object' && Object.values(sectionData).every(val => !val)) {
      return null;
    }

    return (
      <div className="mb-6">
        <div className="flex items-center mb-3">
          <div className="w-1 h-6 bg-gradient-to-b from-red-600 to-red-800 mr-3 rounded-full shadow-sm"></div>
          <h3 className="text-lg font-bold text-gray-800 tracking-wide uppercase">{title}</h3>
          <div className="flex-1 ml-4 h-px bg-gradient-to-r from-red-200 to-transparent"></div>
        </div>

        <div className="ml-4">
          {isMultiple
            ? renderMultipleItems(sectionData, sectionKey)
            : renderSingleItem(sectionData, sectionKey)}
        </div>
      </div>
    );
  };

  const renderMultipleItems = (items, sectionKey) => {
    if (!Array.isArray(items)) return null;

    return (
      <div className="space-y-4">
        {items.map((item, index) => {
          const hasContent = Object.values(item || {}).some(val => val);
          if (!hasContent) return null;

          return (
            <div key={index} className="relative pl-4 border-l-2 border-red-100">
              <div className="absolute -left-2 top-2 w-3 h-3 bg-red-500 rounded-full shadow-sm"></div>
              {renderItemContent(item, sectionKey)}
            </div>
          );
        })}
      </div>
    );
  };

  const renderSingleItem = (item, sectionKey) => {
    return (
      <div className="pl-4 border-l-2 border-red-100 relative">
        <div className="absolute -left-2 top-2 w-3 h-3 bg-red-500 rounded-full shadow-sm"></div>
        {renderItemContent(item, sectionKey)}
      </div>
    );
  };

  const renderItemContent = (item, sectionKey) => {
    if (!item) return null;

    switch (sectionKey) {
      case "work":
      case "internships":
      case "workExperience":
        return (
          <div className="space-y-2">
            {item["Job Title"] || item["Role"] || item["Position"] ? (
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <h4 className="font-semibold text-gray-800 text-base">
                  {item["Job Title"] || item["Role"] || item["Position"]}
                </h4>
                {(item["Company Name"] || item["Company / Client"] || item["Organization / Firm"]) && (
                  <span className="text-red-600 font-medium">
                    @ {item["Company Name"] || item["Company / Client"] || item["Organization / Firm"]}
                  </span>
                )}
              </div>
            ) : null}
            
            {item["Duration"] && (
              <div className="text-sm text-gray-600 font-medium bg-gray-50 px-3 py-1 rounded-full inline-block">
                {item["Duration"]}
              </div>
            )}
            
            {(item["Responsibilities & Achievements"] || item["Responsibilities"] || item["Duties"] || item["Responsibilities & Legal Work"]) && (
              <div className="text-gray-700 leading-relaxed whitespace-pre-line text-sm mt-2">
                {item["Responsibilities & Achievements"] || item["Responsibilities"] || item["Duties"] || item["Responsibilities & Legal Work"]}
              </div>
            )}
          </div>
        );

      case "projects":
      case "legalProjects":
        return (
          <div className="space-y-2">
            {(item["Project Title"] || item["Project/Campaign Name"] || item["Title"]) && (
              <h4 className="font-semibold text-gray-800 text-base">
                {item["Project Title"] || item["Project/Campaign Name"] || item["Title"]}
              </h4>
            )}
            
            <div className="flex flex-wrap gap-3 text-sm">
              {(item["Tools Used"] || item["Tools/Technologies Used"] || item["Platform Used"]) && (
                <div className="bg-red-50 text-red-700 px-3 py-1 rounded-full font-medium">
                  {item["Tools Used"] || item["Tools/Technologies Used"] || item["Platform Used"]}
                </div>
              )}
              {(item["Year / Role"] || item["Goal / Audience"]) && (
                <div className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium">
                  {item["Year / Role"] || item["Goal / Audience"]}
                </div>
              )}
            </div>
            
            {(item["Description"] || item["Your Contribution"] || item["Topic / Area of Law"]) && (
              <div className="text-gray-700 leading-relaxed text-sm mt-2">
                <div className="whitespace-pre-line">
                  {item["Description"] || item["Your Contribution"] || item["Topic / Area of Law"]}
                </div>
              </div>
            )}
            
            {(item["Result / Metrics"] || item["Key Insights / Results"] || item["Findings"]) && (
              <div className="text-gray-700 bg-green-50 p-3 rounded-lg border-l-4 border-green-400 text-sm">
                <strong className="text-green-800">Results: </strong>
                {item["Result / Metrics"] || item["Key Insights / Results"] || item["Findings"]}
              </div>
            )}
          </div>
        );

      case "education":
        return (
          <div className="space-y-2">
            {item["Degree Name"] && (
              <h4 className="font-semibold text-gray-800 text-base">
                {item["Degree Name"]}
              </h4>
            )}
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              {item["Institution Name"] && (
                <span className="text-red-600 font-medium">
                  {item["Institution Name"]}
                </span>
              )}
              {item["Duration"] && (
                <span className="text-sm text-gray-600 bg-gray-50 px-3 py-1 rounded-full">
                  {item["Duration"]}
                </span>
              )}
            </div>
            
            {item["CGPA or Percentage"] && (
              <div className="text-sm text-gray-700 font-medium">
                Grade: <span className="text-red-600">{item["CGPA or Percentage"]}</span>
              </div>
            )}

            {/* 10th and 12th Grade */}
            <div className="mt-3 pt-3 border-t border-gray-100">
              {item["10th Grade School Name & Percentage"] && (
                <div className="text-sm text-gray-600 mb-1">
                  <span className="font-medium">10th:</span> {item["10th Grade School Name & Percentage"]}
                </div>
              )}
              {item["12th Grade School Name & Percentage"] && (
                <div className="text-sm text-gray-600">
                  <span className="font-medium">12th:</span> {item["12th Grade School Name & Percentage"]}
                </div>
              )}
            </div>
          </div>
        );

      case "certifications":
        return (
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
            <span className="font-medium text-gray-800">
              {item["Course/Certification Name"] || item["Certification Name"] || item["Certification Title"]}
            </span>
            <span className="text-sm text-gray-600 bg-red-50 px-3 py-1 rounded-full">
              {item["Date"] || item["Year"]}
            </span>
          </div>
        );

      case "achievements":
        return (
          <div className="space-y-2">
            {(item["Achievement"] || item["Achievements"] || item["Title"]) && (
              <h4 className="font-semibold text-gray-800">
                {item["Achievement"] || item["Achievements"] || item["Title"]}
              </h4>
            )}
            {item["Description"] && (
              <div className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                {item["Description"]}
              </div>
            )}
            {item["Year"] && (
              <span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
                {item["Year"]}
              </span>
            )}
          </div>
        );

      case "publications":
        return (
          <div className="space-y-2">
            {item["Article / Blog Title"] && (
              <h4 className="font-semibold text-gray-800">
                {item["Article / Blog Title"]}
              </h4>
            )}
            <div className="flex flex-wrap gap-2">
              {item["Platform (if published)"] && (
                <span className="text-sm bg-red-50 text-red-700 px-3 py-1 rounded-full">
                  {item["Platform (if published)"]}
                </span>
              )}
              {item["Link"] && (
                <a href={item["Link"]} className="text-sm text-blue-600 hover:underline">
                  View Article
                </a>
              )}
            </div>
            {item["Brief Summary"] && (
              <div className="text-gray-700 text-sm leading-relaxed mt-2">
                {item["Brief Summary"]}
              </div>
            )}
          </div>
        );

      default:
        // Generic rendering for other sections
        const mainField = Object.entries(item).find(([key, value]) => 
          value && !key.toLowerCase().includes('year') && !key.toLowerCase().includes('date')
        );
        
        if (!mainField) return null;

        return (
          <div className="space-y-1">
            <div className="text-gray-800 font-medium">
              {mainField[1]}
            </div>
            {Object.entries(item).map(([key, value]) => {
              if (key === mainField[0] || !value) return null;
              return (
                <div key={key} className="text-sm text-gray-600">
                  <span className="font-medium">{key}:</span> {value}
                </div>
              );
            })}
          </div>
        );
    }
  };

  const renderSkillsGrid = (sectionKey) => {
    const sectionData = resumeData[sectionKey];
    if (!sectionData || !Array.isArray(sectionData)) return null;
    
    const skills = sectionData.filter(item => {
      const firstValue = Object.values(item || {})[0];
      return firstValue && firstValue.trim();
    });

    if (skills.length === 0) return null;

    return (
      <div className="flex flex-wrap gap-2">
        {skills.map((item, index) => {
          const skillText = Object.values(item)[0];
          return (
            <span
              key={index}
              className="bg-gradient-to-r from-red-50 to-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm border border-red-200 hover:shadow-md transition-shadow"
            >
              {skillText}
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <div className="a4-page bg-white text-gray-900 font-sans leading-relaxed shadow-2xl mx-auto" style={{
      width: '210mm',
      minHeight: '297mm',
      padding: '20mm',
      margin: '0 auto',
      boxSizing: 'border-box',
      transformOrigin: 'top left',
      fontSize: '14px',
      lineHeight: '1.5'
    }}>
      {/* Header Section */}
      <header className="text-center mb-8 relative">
        {/* Background decoration */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600 rounded-full opacity-80"></div>
        
        <div className="pt-4">
          {/* Profile Photo */}
          {resumeData.header?.["Profile Photo"] && (
            <div className="mb-4">
              <img
                src={resumeData.header["Profile Photo"]}
                alt="Profile"
                className="w-24 h-24 rounded-full mx-auto object-cover shadow-lg border-4 border-white ring-4 ring-red-100"
              />
            </div>
          )}

          {/* Name */}
          {resumeData.header?.["Full Name"] && (
            <h1 className="text-3xl font-bold text-gray-900 mb-2 tracking-wide">
              {resumeData.header["Full Name"]}
            </h1>
          )}

          {/* Professional Title */}
          {resumeData.header?.["Professional Title"] && (
            <h2 className="text-lg text-red-600 font-semibold mb-4 tracking-wide uppercase">
              {resumeData.header["Professional Title"]}
            </h2>
          )}

          {/* Contact Information */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-700">
            {resumeData.header?.["Phone Number"] && (
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span>{resumeData.header["Phone Number"]}</span>
              </div>
            )}
            {resumeData.header?.["Email Address"] && (
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span>{resumeData.header["Email Address"]}</span>
              </div>
            )}
            {resumeData.header?.["Location (City, Country)"] && (
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span>{resumeData.header["Location (City, Country)"]}</span>
              </div>
            )}
          </div>

          {/* Professional Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 mt-2">
            {resumeData.header?.["LinkedIn Profile"] && (
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>LinkedIn: {resumeData.header["LinkedIn Profile"].replace('https://', '').replace('http://', '')}</span>
              </div>
            )}
            {resumeData.header?.["Github"] && (
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                <span>GitHub: {resumeData.header["Github"].replace('https://', '').replace('http://', '')}</span>
              </div>
            )}
            {(resumeData.header?.["Portfolio / Content Link"] || resumeData.header?.["Instagram / YouTube Handle"]) && (
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>{resumeData.header?.["Portfolio / Content Link"] || resumeData.header?.["Instagram / YouTube Handle"]}</span>
              </div>
            )}
          </div>
        </div>

        {/* Decorative line */}
        <div className="mt-6 flex items-center justify-center">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-red-300 to-transparent"></div>
          <div className="w-3 h-3 bg-red-500 rounded-full mx-4 shadow-sm"></div>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-red-300 to-transparent"></div>
        </div>
      </header>

      {/* Professional Summary */}
      {resumeData.summary?.["Summary"] && (
        <div className="mb-8">
          <div className="flex items-center mb-3">
            <div className="w-1 h-6 bg-gradient-to-b from-red-600 to-red-800 mr-3 rounded-full shadow-sm"></div>
            <h3 className="text-lg font-bold text-gray-800 tracking-wide uppercase">Professional Summary</h3>
            <div className="flex-1 ml-4 h-px bg-gradient-to-r from-red-200 to-transparent"></div>
          </div>
          <div className="ml-4 pl-4 border-l-2 border-red-100 relative">
            <div className="absolute -left-2 top-2 w-3 h-3 bg-red-500 rounded-full shadow-sm"></div>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {resumeData.summary["Summary"]}
            </p>
          </div>
        </div>
      )}

      {/* Dynamic Sections */}
      <div className="space-y-6">
        {config.map((section) => {
          if (!section || section.sectionKey === "header" || section.sectionKey === "summary") {
            return null;
          }

          // Handle skills sections with grid layout
          if (section.sectionKey.toLowerCase().includes('skill') || 
              section.sectionKey === 'languages' || 
              section.sectionKey === 'interests' ||
              section.sectionKey === 'tools') {
            const hasContent = resumeData[section.sectionKey] && 
              Array.isArray(resumeData[section.sectionKey]) && 
              resumeData[section.sectionKey].some(item => 
                Object.values(item || {}).some(val => val)
              );
            
            if (!hasContent) return null;

            return (
              <div key={section.sectionKey} className="mb-6">
                <div className="flex items-center mb-3">
                  <div className="w-1 h-6 bg-gradient-to-b from-red-600 to-red-800 mr-3 rounded-full shadow-sm"></div>
                  <h3 className="text-lg font-bold text-gray-800 tracking-wide uppercase">{section.title}</h3>
                  <div className="flex-1 ml-4 h-px bg-gradient-to-r from-red-200 to-transparent"></div>
                </div>
                <div className="ml-4">
                  {renderSkillsGrid(section.sectionKey)}
                </div>
              </div>
            );
          }

          return renderSection(section.sectionKey, section.title, section.multiple);
        })}
      </div>

      {/* Footer Decoration */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <div className="flex items-center justify-center">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-red-300 to-transparent"></div>
          <div className="w-2 h-2 bg-red-400 rounded-full mx-3"></div>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-red-300 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default CrimsonLineTemplate;