import React from "react";
import { ResumeFieldsConfig } from "../../pages/ResumeBuilder";

const FormalBrillianceTemplate = ({ resumeData, selectedCareer }) => {
  const config = ResumeFieldsConfig[selectedCareer] || [];
  
  const getSectionData = (sectionKey) => {
    return resumeData[sectionKey] || {};
  };

  const getMultipleSectionData = (sectionKey) => {
    const data = resumeData[sectionKey];
    return Array.isArray(data) ? data.filter(item => 
      item && Object.values(item).some(value => value && value.toString().trim())
    ) : [];
  };

  const headerData = getSectionData("header");
  const summaryData = getSectionData("summary");

  // Function to render section content based on career type
  const renderSection = (sectionKey, title, isMultiple = false) => {
    const sectionConfig = config.find(section => section.sectionKey === sectionKey);
    if (!sectionConfig) return null;

    if (isMultiple) {
      const items = getMultipleSectionData(sectionKey);
      if (items.length === 0) return null;

      return (
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-amber-500 uppercase tracking-wide">
            {title}
          </h3>
          <div className="space-y-6">
            {items.map((item, index) => (
              <div key={index} className="pl-4 border-l-3 border-gray-200 hover:border-amber-400 transition-colors duration-300">
                {renderMultipleItem(item, sectionKey)}
              </div>
            ))}
          </div>
        </div>
      );
    } else {
      const data = getSectionData(sectionKey);
      const hasContent = Object.values(data).some(value => value && value.toString().trim());
      if (!hasContent) return null;

      return (
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-amber-500 uppercase tracking-wide">
            {title}
          </h3>
          <div className="pl-4">
            {renderSingleItem(data, sectionKey)}
          </div>
        </div>
      );
    }
  };

  const renderMultipleItem = (item, sectionKey) => {
    switch (sectionKey) {
      case "work":
      case "experience":
      case "internships":
        return (
          <div className="mb-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="font-bold text-lg text-gray-800">
                  {item["Job Title"] || item["Role"] || item["Position"] || ""}
                </h4>
                <p className="text-amber-600 font-semibold text-base">
                  {item["Company Name"] || item["Company / Client"] || item["Organization / Firm"] || item["Hospital / Clinic Name"] || ""}
                </p>
              </div>
              <span className="text-gray-600 font-medium text-sm bg-gray-100 px-3 py-1 rounded-full">
                {item["Duration"] || ""}
              </span>
            </div>
            <div className="text-gray-700 leading-relaxed">
              {item["Responsibilities & Achievements"] || item["Responsibilities"] || item["Responsibilities & Legal Work"] || item["Duties"] || item["Key Responsibilities"] || ""}
            </div>
            {item["Departments Rotated"] && (
              <p className="text-gray-600 mt-2 italic">
                <strong>Departments:</strong> {item["Departments Rotated"]}
              </p>
            )}
          </div>
        );

      case "projects":
      case "legalProjects":
        return (
          <div className="mb-4">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-bold text-lg text-gray-800">
                {item["Project Title"] || item["Project/Campaign Name"] || item["Title"] || ""}
              </h4>
              <span className="text-gray-600 font-medium text-sm bg-gray-100 px-3 py-1 rounded-full">
                {item["Year / Role"] || item["Project Type"] || ""}
              </span>
            </div>
            {item["Tools Used"] || item["Tools/Technologies Used"] || item["Platform Used"] ? (
              <p className="text-amber-600 font-semibold mb-2">
                <strong>Tools:</strong> {item["Tools Used"] || item["Tools/Technologies Used"] || item["Platform Used"] || item["Tools/Softwares"] || ""}
              </p>
            ) : null}
            {item["Topic / Area of Law"] && (
              <p className="text-gray-600 mb-2">
                <strong>Area:</strong> {item["Topic / Area of Law"]}
              </p>
            )}
            <div className="text-gray-700 leading-relaxed space-y-2">
              {item["Description"] && <p>{item["Description"]}</p>}
              {item["Your Contribution"] && <p><strong>Contribution:</strong> {item["Your Contribution"]}</p>}
              {item["Description / Contribution"] && <p>{item["Description / Contribution"]}</p>}
              {item["Goal / Audience"] && <p><strong>Goal:</strong> {item["Goal / Audience"]}</p>}
              {item["Result / Metrics"] && <p><strong>Results:</strong> {item["Result / Metrics"]}</p>}
              {item["Key Insights / Results"] && <p><strong>Results:</strong> {item["Key Insights / Results"]}</p>}
              {item["Summary & Objective"] && <p><strong>Objective:</strong> {item["Summary & Objective"]}</p>}
              {item["Findings"] && <p><strong>Findings:</strong> {item["Findings"]}</p>}
              {item["Conversion / Engagement Stats"] && <p><strong>Stats:</strong> {item["Conversion / Engagement Stats"]}</p>}
              {item["What You Sold / Promoted"] && <p><strong>Product:</strong> {item["What You Sold / Promoted"]}</p>}
              {item["Channels Used"] && <p><strong>Channels:</strong> {item["Channels Used"]}</p>}
            </div>
          </div>
        );

      case "education":
        return (
          <div className="mb-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="font-bold text-lg text-gray-800">
                  {item["Degree Name"] || item["Degree / Course Name"] || ""}
                </h4>
                <p className="text-amber-600 font-semibold text-base">
                  {item["Institution Name"] || ""}
                </p>
              </div>
              <div className="text-right">
                <span className="text-gray-600 font-medium text-sm bg-gray-100 px-3 py-1 rounded-full block mb-1">
                  {item["Duration"] || item["Duration (Start – End or 'Present')"] || ""}
                </span>
                {item["CGPA or Percentage"] && (
                  <span className="text-gray-700 font-semibold text-sm">
                    {item["CGPA or Percentage"]}
                  </span>
                )}
              </div>
            </div>
          </div>
        );

      case "certifications":
        return (
          <div className="mb-3">
            <div className="flex justify-between items-center">
              <h4 className="font-semibold text-gray-800">
                {item["Course/Certification Name"] || item["Certification Name"] || item["Certification Title"] || ""}
              </h4>
              <span className="text-gray-600 text-sm bg-gray-100 px-2 py-1 rounded">
                {item["Date"] || item["Year"] || ""}
              </span>
            </div>
          </div>
        );

      case "achievements":
        return (
          <div className="mb-3">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h4 className="font-semibold text-gray-800">
                  {item["Achievements"] || item["Achievement"] || item["Title"] || ""}
                </h4>
                {item["Description"] && (
                  <p className="text-gray-700 mt-1">{item["Description"]}</p>
                )}
              </div>
              {item["Year"] && (
                <span className="text-gray-600 text-sm bg-gray-100 px-2 py-1 rounded ml-2">
                  {item["Year"]}
                </span>
              )}
            </div>
          </div>
        );

      case "activities":
      case "extracurricular":
        return (
          <div className="mb-3">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h4 className="font-semibold text-gray-800">
                  {item["Activities"] || item["Activity"] || item["Activity Title"] || ""}
                </h4>
                {item["Description"] && (
                  <p className="text-gray-700 mt-1">{item["Description"]}</p>
                )}
              </div>
              {item["Year"] && (
                <span className="text-gray-600 text-sm bg-gray-100 px-2 py-1 rounded ml-2">
                  {item["Year"]}
                </span>
              )}
            </div>
          </div>
        );

      case "publications":
        return (
          <div className="mb-4">
            <h4 className="font-bold text-gray-800 mb-1">
              {item["Article / Blog Title"] || ""}
            </h4>
            {item["Platform (if published)"] && (
              <p className="text-amber-600 font-semibold mb-1">
                Published on: {item["Platform (if published)"]}
              </p>
            )}
            {item["Link"] && (
              <p className="text-blue-600 mb-2 text-sm break-all">
                {item["Link"]}
              </p>
            )}
            {item["Brief Summary"] && (
              <p className="text-gray-700 leading-relaxed">
                {item["Brief Summary"]}
              </p>
            )}
          </div>
        );

      default:
        // Handle skill-type sections and other simple list items
        const skillValue = item["Technical Skills"] || item["Soft Skills"] || item["Languages"] || 
                          item["Interests"] || item["Skill"] || item["Core Legal Skill"] || 
                          item["Tools / Software"] || item["Soft Skill"] || item["Core Sales Skills"] || 
                          item["Tools/Softwares"] || item["Language"] || item["Interest"] || 
                          item["Tool/Software"] || item["Core Sales Skills"] || 
                          Object.values(item)[0] || "";
        
        if (skillValue) {
          return (
            <span className="inline-block bg-amber-50 text-gray-800 px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2 border border-amber-200">
              {skillValue}
            </span>
          );
        }
        return null;
    }
  };

  const renderSingleItem = (data, sectionKey) => {
    switch (sectionKey) {
      case "summary":
        return (
          <div className="text-gray-700 leading-relaxed text-justify">
            {data["Summary"]?.split('\n').map((line, index) => (
              <p key={index} className="mb-2">{line}</p>
            )) || ""}
          </div>
        );

      case "education":
        return (
          <div>
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="font-bold text-lg text-gray-800">
                  {data["Degree Name"] || data["Degree / Course Name"] || ""}
                </h4>
                <p className="text-amber-600 font-semibold text-base">
                  {data["Institution Name"] || ""}
                </p>
              </div>
              <div className="text-right">
                <span className="text-gray-600 font-medium text-sm bg-gray-100 px-3 py-1 rounded-full block mb-1">
                  {data["Duration"] || data["Duration (Start – End or 'Present')"] || ""}
                </span>
                {data["CGPA or Percentage"] && (
                  <span className="text-gray-700 font-semibold text-sm">
                    {data["CGPA or Percentage"]}
                  </span>
                )}
              </div>
            </div>
            
            {/* School Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {data["10th Grade School Name & Percentage"] && (
                <div className="bg-gray-50 p-3 rounded-lg">
                  <h5 className="font-semibold text-gray-800 text-sm">10th Grade</h5>
                  <p className="text-gray-700 text-sm">{data["10th Grade School Name & Percentage"]}</p>
                </div>
              )}
              {data["12th Grade School Name & Percentage"] && (
                <div className="bg-gray-50 p-3 rounded-lg">
                  <h5 className="font-semibold text-gray-800 text-sm">12th Grade</h5>
                  <p className="text-gray-700 text-sm">{data["12th Grade School Name & Percentage"]}</p>
                </div>
              )}
            </div>
          </div>
        );

      case "schooling":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data["10th School Name"] && (
              <div className="bg-gray-50 p-3 rounded-lg">
                <h5 className="font-semibold text-gray-800">10th Grade</h5>
                <p className="text-gray-700">{data["10th School Name"]}</p>
                <p className="text-amber-600 font-semibold">{data["10th Percentage"]}</p>
              </div>
            )}
            {data["12th School Name"] && (
              <div className="bg-gray-50 p-3 rounded-lg">
                <h5 className="font-semibold text-gray-800">12th Grade</h5>
                <p className="text-gray-700">{data["12th School Name"]}</p>
                <p className="text-amber-600 font-semibold">{data["12th Percentage"]}</p>
              </div>
            )}
          </div>
        );

      case "teachingSkills":
        return (
          <div className="space-y-4">
            {data["Core Teaching Skills"] && (
              <div>
                <h5 className="font-semibold text-gray-800 mb-2">Core Teaching Skills</h5>
                <p className="text-gray-700">{data["Core Teaching Skills"]}</p>
              </div>
            )}
            {data["Digital Tools"] && (
              <div>
                <h5 className="font-semibold text-gray-800 mb-2">Digital Tools</h5>
                <p className="text-gray-700">{data["Digital Tools"]}</p>
              </div>
            )}
            {data["Soft Skills"] && (
              <div>
                <h5 className="font-semibold text-gray-800 mb-2">Soft Skills</h5>
                <p className="text-gray-700">{data["Soft Skills"]}</p>
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="a4-page bg-white shadow-2xl mx-auto font-serif text-gray-900" 
         style={{ 
           width: '210mm', 
           minHeight: '297mm', 
           padding: '20mm',
           boxSizing: 'border-box',
           lineHeight: '1.5',
           fontSize: '11pt'
         }}>
      
      {/* Header Section */}
      <div className="text-center mb-8 pb-6 border-b-4 border-amber-500">
        {/* Profile Photo */}
        {headerData["Profile Photo"] && (
          <div className="mb-4">
            <img 
              src={headerData["Profile Photo"]} 
              alt="Profile" 
              className="w-24 h-24 rounded-full mx-auto object-cover shadow-lg border-4 border-amber-200"
            />
          </div>
        )}
        
        {/* Name */}
        <h1 className="text-4xl font-bold text-gray-900 mb-2 tracking-wide">
          {headerData["Full Name"] || "Your Name"}
        </h1>
        
        {/* Professional Title */}
        <h2 className="text-xl text-amber-600 font-semibold mb-4 uppercase tracking-widest">
          {headerData["Professional Title"] || "Professional Title"}
        </h2>
        
        {/* Contact Information */}
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-700">
          {headerData["Phone Number"] && (
            <span className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
              📞 {headerData["Phone Number"]}
            </span>
          )}
          {headerData["Email Address"] && (
            <span className="flex items-center bg-gray-100 px-3 py-1 rounded-full break-all">
              ✉️ {headerData["Email Address"]}
            </span>
          )}
          {headerData["Location (City, Country)"] && (
            <span className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
              📍 {headerData["Location (City, Country)"]}
            </span>
          )}
          {headerData["LinkedIn Profile"] && (
            <span className="flex items-center bg-gray-100 px-3 py-1 rounded-full text-blue-600 break-all">
              💼 LinkedIn
            </span>
          )}
          {headerData["Github"] && (
            <span className="flex items-center bg-gray-100 px-3 py-1 rounded-full text-gray-800">
              💻 GitHub
            </span>
          )}
          {headerData["Portfolio / Content Link"] && (
            <span className="flex items-center bg-gray-100 px-3 py-1 rounded-full text-purple-600">
              🎨 Portfolio
            </span>
          )}
          {headerData["Instagram / YouTube Handle"] && (
            <span className="flex items-center bg-gray-100 px-3 py-1 rounded-full text-pink-600">
              📱 Social
            </span>
          )}
        </div>
      </div>

      {/* Professional Summary */}
      {summaryData["Summary"] && (
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-amber-500 uppercase tracking-wide">
            Professional Summary
          </h3>
          <div className="text-gray-700 leading-relaxed text-justify pl-4">
            {summaryData["Summary"].split('\n').map((line, index) => (
              <p key={index} className="mb-2">{line}</p>
            ))}
          </div>
        </div>
      )}

      {/* Dynamic Sections Based on Career */}
      <div className="space-y-8">
        {/* Education - Always show if available */}
        {renderSection("education", "Education")}
        {renderSection("schooling", "Academic Background")}

        {/* Work Experience - Multiple formats */}
        {renderSection("work", "Professional Experience", true)}
        {renderSection("experience", "Clinical Experience", true)}
        {renderSection("internships", "Internships & Teaching Practice", true)}
        {renderSection("workExperience", "Work Experience", true)}

        {/* Projects */}
        {renderSection("projects", "Projects & Research", true)}
        {renderSection("legalProjects", "Legal Projects", true)}

        {/* Publications (for Law career) */}
        {renderSection("publications", "Publications & Legal Writing", true)}

        {/* Skills Sections */}
        {renderSection("techSkills", "Technical Skills", true)}
        {renderSection("skills", "Core Skills", true)}
        {renderSection("tools", "Tools & Software", true)}
        {renderSection("coreLegalSkills", "Core Legal Skills", true)}
        {renderSection("coreSalesSkills", "Core Sales Skills", true)}
        {renderSection("coreMedicalSkills", "Core Medical Skills", true)}
        {renderSection("labSkills", "Lab & Technical Skills", true)}
        {renderSection("teachingSkills", "Teaching Skills")}
        {renderSection("softSkills", "Soft Skills", true)}
        {renderSection("otherSkills", "Other Skills", true)}

        {/* Certifications */}
        {renderSection("certifications", "Certifications", true)}

        {/* Achievements */}
        {renderSection("achievements", "Achievements & Awards", true)}

        {/* Activities */}
        {renderSection("activities", "Extracurricular Activities", true)}
        {renderSection("extracurricular", "Extracurricular Activities", true)}

        {/* Languages and Interests */}
        {renderSection("languages", "Languages", true)}
        {renderSection("interests", "Interests & Hobbies", true)}
      </div>

      {/* Footer */}
      <div className="mt-8 pt-4 border-t border-gray-300 text-center text-xs text-gray-500">
        <p>Resume created with ResumeGenie - Formal Brilliance Template</p>
      </div>
    </div>
  );
};

export default FormalBrillianceTemplate;