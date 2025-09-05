import React from "react";
import { ResumeFieldsConfig } from "../../pages/ResumeBuilder";

const CrimsonPrestigeTemplate = ({ resumeData, selectedCareer }) => {
  const config = ResumeFieldsConfig[selectedCareer];
  
  if (!config || !Array.isArray(config)) {
    return <div className="text-center text-gray-500 py-8">Loading template...</div>;
  }

  const renderSection = (section) => {
    const data = resumeData[section.sectionKey];
    
    if (!data) return null;

    // Skip header section as it's rendered separately
    if (section.sectionKey === "header") return null;

    // Handle sections that should be hidden
    if (section.display === "none") return null;

    const isEmpty = section.multiple 
      ? !Array.isArray(data) || data.length === 0 || data.every(item => 
          Object.values(item || {}).every(val => !val || val.toString().trim() === "")
        )
      : !data || Object.values(data).every(val => !val || val.toString().trim() === "");

    if (isEmpty) return null;

    return (
      <div key={section.sectionKey} className="mb-8 break-inside-avoid">
        <div className="border-b-2 border-crimson-600 pb-2 mb-4">
          <h2 className="text-xl font-bold text-crimson-800 tracking-wide uppercase">
            {section.title}
          </h2>
        </div>
        
        <div className="space-y-4">
          {section.multiple ? (
            Array.isArray(data) && data.map((item, index) => {
              const hasContent = Object.values(item || {}).some(val => val && val.toString().trim());
              if (!hasContent) return null;
              
              return (
                <div key={index} className="pl-4 border-l-3 border-crimson-300 bg-crimson-50/30 p-4 rounded-r-lg">
                  {renderMultipleItem(section, item, index)}
                </div>
              );
            })
          ) : (
            <div className="pl-4">
              {renderSingleItem(section, data)}
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderSingleItem = (section, data) => {
    if (section.sectionKey === "summary") {
      return (
        <div className="text-gray-700 leading-relaxed whitespace-pre-wrap text-justify">
          {data["Summary"] || ""}
        </div>
      );
    }

    if (section.sectionKey === "education") {
      return (
        <div className="space-y-3">
          {data["Degree Name"] && (
            <div>
              <h3 className="text-lg font-semibold text-crimson-700">
                {data["Degree Name"]}
              </h3>
              <p className="text-gray-800 font-medium">
                {data["Institution Name"]}
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600 mt-1">
                {data["Duration"] && <span>Duration: {data["Duration"]}</span>}
                {data["CGPA or Percentage"] && <span>Grade: {data["CGPA or Percentage"]}</span>}
              </div>
            </div>
          )}
          
          {(data["10th Grade School Name & Percentage"] || data["12th Grade School Name & Percentage"]) && (
            <div className="mt-4 pt-3 border-t border-crimson-200">
              <h4 className="font-medium text-gray-700 mb-2">Academic Background</h4>
              <div className="grid grid-cols-1 gap-2 text-sm text-gray-600">
                {data["12th Grade School Name & Percentage"] && (
                  <div>12th Grade: {data["12th Grade School Name & Percentage"]}</div>
                )}
                {data["10th Grade School Name & Percentage"] && (
                  <div>10th Grade: {data["10th Grade School Name & Percentage"]}</div>
                )}
              </div>
            </div>
          )}
        </div>
      );
    }

    if (section.sectionKey === "teachingSkills") {
      return (
        <div className="grid grid-cols-1 gap-4">
          {data["Core Teaching Skills"] && (
            <div>
              <h4 className="font-semibold text-crimson-700 mb-2">Core Teaching Skills</h4>
              <p className="text-gray-700">{data["Core Teaching Skills"]}</p>
            </div>
          )}
          {data["Digital Tools"] && (
            <div>
              <h4 className="font-semibold text-crimson-700 mb-2">Digital Tools</h4>
              <p className="text-gray-700">{data["Digital Tools"]}</p>
            </div>
          )}
          {data["Soft Skills"] && (
            <div>
              <h4 className="font-semibold text-crimson-700 mb-2">Soft Skills</h4>
              <p className="text-gray-700">{data["Soft Skills"]}</p>
            </div>
          )}
        </div>
      );
    }

    return (
      <div className="space-y-2">
        {Object.entries(data).map(([key, value]) => {
          if (!value || value.toString().trim() === "") return null;
          return (
            <div key={key} className="text-gray-700">
              <span className="font-medium text-crimson-700">{key}:</span> {value}
            </div>
          );
        })}
      </div>
    );
  };

  const renderMultipleItem = (section, item, index) => {
    if (!item) return null;

    switch (section.sectionKey) {
      case "work":
      case "internships":
      case "workExperience":
      case "experience":
        return (
          <div>
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-2">
              <h3 className="text-lg font-bold text-crimson-800">
                {item["Job Title"] || item["Role"] || item["Position"] || ""}
              </h3>
              <span className="text-sm text-gray-600 font-medium lg:text-right">
                {item["Duration"] || ""}
              </span>
            </div>
            <p className="text-gray-800 font-semibold mb-2">
              {item["Company Name"] || item["Company / Client"] || item["Organization / Firm"] || item["Hospital / Clinic Name"] || ""}
            </p>
            {item["Departments Rotated"] && (
              <p className="text-gray-700 mb-2">
                <span className="font-medium">Departments:</span> {item["Departments Rotated"]}
              </p>
            )}
            <div className="text-gray-700 whitespace-pre-wrap leading-relaxed">
              {item["Responsibilities & Achievements"] || 
               item["Responsibilities"] || 
               item["Duties"] || 
               item["Responsibilities & Legal Work"] ||
               item["Key Responsibilities"] || ""}
            </div>
          </div>
        );

      case "projects":
      case "legalProjects":
        return (
          <div>
            <h3 className="text-lg font-bold text-crimson-800 mb-2">
              {item["Project Title"] || item["Title"] || item["Project/Campaign Name"] || ""}
            </h3>
            <div className="space-y-2">
              {item["Tools Used"] && (
                <p className="text-gray-700">
                  <span className="font-medium text-crimson-700">Technologies:</span> {item["Tools Used"]}
                </p>
              )}
              {item["Tools/Technologies Used"] && (
                <p className="text-gray-700">
                  <span className="font-medium text-crimson-700">Technologies:</span> {item["Tools/Technologies Used"]}
                </p>
              )}
              {item["Goal / Audience"] && (
                <p className="text-gray-700">
                  <span className="font-medium text-crimson-700">Target:</span> {item["Goal / Audience"]}
                </p>
              )}
              {item["Platform Used"] && (
                <p className="text-gray-700">
                  <span className="font-medium text-crimson-700">Platform:</span> {item["Platform Used"]}
                </p>
              )}
              {item["Result / Metrics"] && (
                <p className="text-gray-700">
                  <span className="font-medium text-crimson-700">Results:</span> {item["Result / Metrics"]}
                </p>
              )}
              {item["Year / Role"] && (
                <p className="text-gray-700">
                  <span className="font-medium text-crimson-700">Role:</span> {item["Year / Role"]}
                </p>
              )}
              {item["Topic / Area of Law"] && (
                <p className="text-gray-700">
                  <span className="font-medium text-crimson-700">Area:</span> {item["Topic / Area of Law"]}
                </p>
              )}
              {item["Project Type"] && (
                <p className="text-gray-700">
                  <span className="font-medium text-crimson-700">Type:</span> {item["Project Type"]}
                </p>
              )}
              <div className="text-gray-700 whitespace-pre-wrap leading-relaxed mt-3">
                {item["Description"] || 
                 item["Summary & Objective"] || 
                 item["Description / Contribution"] ||
                 item["Your Contribution"] || ""}
              </div>
              {item["Findings"] && (
                <div className="text-gray-700 whitespace-pre-wrap leading-relaxed mt-2">
                  <span className="font-medium text-crimson-700">Findings:</span> {item["Findings"]}
                </div>
              )}
              {item["Key Insights / Results"] && (
                <div className="text-gray-700 whitespace-pre-wrap leading-relaxed mt-2">
                  <span className="font-medium text-crimson-700">Key Results:</span> {item["Key Insights / Results"]}
                </div>
              )}
            </div>
          </div>
        );

      case "education":
        return (
          <div>
            <h3 className="text-lg font-bold text-crimson-800">
              {item["Degree Name"] || item["Degree / Course Name"] || ""}
            </h3>
            <p className="text-gray-800 font-semibold">
              {item["Institution Name"]}
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600 mt-1">
              {item["Duration"] && <span>Duration: {item["Duration"]}</span>}
              {item["Duration (Start – End or 'Present')"] && <span>Duration: {item["Duration (Start – End or 'Present')"]}</span>}
              {item["CGPA or Percentage"] && <span>Grade: {item["CGPA or Percentage"]}</span>}
              {item["CGPA / Percentage"] && <span>Grade: {item["CGPA / Percentage"]}</span>}
            </div>
          </div>
        );

      case "achievements":
        return (
          <div>
            {item["Achievement"] && (
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-crimson-600 rounded-full mt-2 flex-shrink-0"></div>
                <div className="flex-1">
                  <h4 className="font-semibold text-crimson-700">
                    {item["Achievement"] || item["Achievements"] || item["Title"] || ""}
                  </h4>
                  {item["Description"] && (
                    <p className="text-gray-700 mt-1 whitespace-pre-wrap">{item["Description"]}</p>
                  )}
                  {item["Year"] && (
                    <span className="text-sm text-gray-600">({item["Year"]})</span>
                  )}
                </div>
              </div>
            )}
          </div>
        );

      case "certifications":
        return (
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h4 className="font-semibold text-crimson-700">
                {item["Course/Certification Name"] || item["Certification Name"] || item["Certification Title"] || ""}
              </h4>
            </div>
            <span className="text-sm text-gray-600 ml-4 flex-shrink-0">
              {item["Date"] || item["Year"] || ""}
            </span>
          </div>
        );

      case "publications":
        return (
          <div>
            <h4 className="font-semibold text-crimson-700">
              {item["Article / Blog Title"] || ""}
            </h4>
            {item["Platform (if published)"] && (
              <p className="text-gray-600 text-sm">Published on: {item["Platform (if published)"]}</p>
            )}
            {item["Link"] && (
              <p className="text-blue-600 text-sm break-all">
                <a href={item["Link"]} target="_blank" rel="noopener noreferrer">
                  {item["Link"]}
                </a>
              </p>
            )}
            {item["Brief Summary"] && (
              <p className="text-gray-700 mt-2 whitespace-pre-wrap leading-relaxed">
                {item["Brief Summary"]}
              </p>
            )}
          </div>
        );

      default:
        // Generic rendering for any other multiple sections
        const hasContent = Object.values(item || {}).some(val => val && val.toString().trim());
        if (!hasContent) return null;

        return (
          <div className="space-y-2">
            {Object.entries(item).map(([key, value]) => {
              if (!value || value.toString().trim() === "") return null;
              
              const isMainField = key.includes("Title") || key.includes("Name") || key.includes("Activity") || 
                                key.includes("Skill") || key.includes("Language") || key.includes("Interest");
              
              if (isMainField) {
                return (
                  <div key={key} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-crimson-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-800 font-medium">{value}</span>
                  </div>
                );
              } else {
                return (
                  <div key={key} className="text-gray-700">
                    <span className="font-medium text-crimson-700">{key}:</span> {value}
                  </div>
                );
              }
            })}
          </div>
        );
    }
  };

  // Get header data
  const headerData = resumeData.header || {};

  return (
    <div className="a4-page bg-white text-gray-900 overflow-hidden">
      <style jsx>{`
        .crimson-gradient {
          background: linear-gradient(135deg, #dc2626 0%, #991b1b 50%, #7f1d1d 100%);
        }
        
        .border-crimson-600 { border-color: #dc2626; }
        .border-crimson-300 { border-color: #fca5a5; }
        .border-crimson-200 { border-color: #fecaca; }
        .text-crimson-800 { color: #991b1b; }
        .text-crimson-700 { color: #b91c1c; }
        .text-crimson-600 { color: #dc2626; }
        .bg-crimson-600 { background-color: #dc2626; }
        .bg-crimson-50 { background-color: #fef2f2; }
        .border-l-3 { border-left-width: 3px; }
        
        .geometric-accent {
          position: relative;
        }
        
        .geometric-accent::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 60px;
          height: 60px;
          background: linear-gradient(45deg, #dc2626, #f87171);
          clip-path: polygon(100% 0%, 0% 100%, 100% 100%);
        }
        
        .elegant-shadow {
          box-shadow: 0 4px 20px rgba(220, 38, 38, 0.15);
        }

        @media print {
          .a4-page {
            width: 210mm;
            min-height: 297mm;
            padding: 20mm;
            margin: 0;
            box-shadow: none;
            page-break-after: always;
          }
        }
      `}</style>

      {/* Header Section with Crimson Gradient */}
      <header className="crimson-gradient text-white p-8 -mx-8 -mt-8 mb-8 geometric-accent overflow-hidden">
        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex-1 min-w-0">
              <h1 className="text-4xl font-bold mb-2 tracking-tight break-words">
                {headerData["Full Name"] || "Your Name"}
              </h1>
              <p className="text-xl text-white/90 mb-4 break-words">
                {headerData["Professional Title"] || "Your Professional Title"}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                {headerData["Phone Number"] && (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-white/20 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="break-words">{headerData["Phone Number"]}</span>
                  </div>
                )}
                {headerData["Email Address"] && (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-white/20 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="break-words">{headerData["Email Address"]}</span>
                  </div>
                )}
                {headerData["LinkedIn Profile"] && (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-white/20 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="break-words">{headerData["LinkedIn Profile"]}</span>
                  </div>
                )}
                {headerData["Github"] && (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-white/20 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="break-words">{headerData["Github"]}</span>
                  </div>
                )}
                {headerData["Portfolio / Content Link"] && (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-white/20 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="break-words">{headerData["Portfolio / Content Link"]}</span>
                  </div>
                )}
                {headerData["Instagram / YouTube Handle"] && (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-white/20 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="break-words">{headerData["Instagram / YouTube Handle"]}</span>
                  </div>
                )}
                {headerData["Location (City, Country)"] && (
                  <div className="flex items-center gap-2 sm:col-span-2">
                    <div className="w-4 h-4 bg-white/20 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="break-words">{headerData["Location (City, Country)"]}</span>
                  </div>
                )}
              </div>
            </div>
            
            {/* Profile Photo */}
            {headerData["Profile Photo"] && (
              <div className="flex-shrink-0">
                <div className="w-28 h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden border-4 border-white/30 elegant-shadow">
                  <img
                    src={headerData["Profile Photo"]}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/10 rounded-full translate-x-12 translate-y-12"></div>
      </header>

      {/* Content Sections */}
      <div className="space-y-6 overflow-hidden">
        {config.map(renderSection)}
      </div>

      {/* Footer Accent */}
      <div className="mt-12 pt-6 border-t-2 border-crimson-600">
        <div className="text-center">
          <div className="w-16 h-1 bg-crimson-600 mx-auto rounded"></div>
          <p className="text-xs text-gray-500 mt-3 tracking-wider uppercase">
            Professional Resume
          </p>
        </div>
      </div>
    </div>
  );
};

export default CrimsonPrestigeTemplate;