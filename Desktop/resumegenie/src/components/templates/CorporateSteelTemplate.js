import React from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Globe, ExternalLink } from "lucide-react";

const CorporateSteelTemplate = ({ resumeData, selectedCareer }) => {
  const config = {
    Others: [
      "header", "summary", "education", "work", "projects", 
      "techSkills", "softSkills", "certifications", "achievements", 
      "activities", "languages", "interests"
    ],
    InformationTechnology: [
      "header", "summary", "education", "work", "projects", 
      "techSkills", "softSkills", "certifications", "achievements", 
      "activities", "languages", "interests"
    ],
    Marketing: [
      "header", "summary", "education", "techSkills", "softSkills", 
      "projects", "work", "certifications", "achievements", 
      "activities", "languages", "interests"
    ],
    Law: [
      "header", "summary", "education", "work", "projects", 
      "publications", "coreLegalSkills", "otherSkills", 
      "certifications", "achievements", "activities", "languages", "interests"
    ],
    Sales: [
      "header", "summary", "education", "work", "projects", 
      "coreSalesSkills", "otherSkills", "certifications", 
      "achievements", "activities", "languages", "interests"
    ],
    Finance: [
      "header", "summary", "education", "workExperience", "projects", 
      "skills", "tools", "certifications", "achievements", 
      "extracurricular", "languages", "interests"
    ],
    Medical: [
      "header", "summary", "education", "experience", "projects", 
      "coreMedicalSkills", "labSkills", "softSkills", 
      "certifications", "achievements", "activities", "languages", "interests"
    ],
    Educational: [
      "header", "summary", "education", "schooling", "internships", 
      "projects", "teachingSkills", "certifications", 
      "achievements", "activities", "languages", "interests"
    ]
  };

  const sections = config[selectedCareer] || config.Others;

  const renderContactInfo = () => {
    const header = resumeData.header || {};
    
    return (
      <div className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 text-white p-8 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
          {/* Profile Image */}
          {header["Profile Photo"] && (
            <div className="flex-shrink-0">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white/20 shadow-lg">
                <img 
                  src={header["Profile Photo"]} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
          
          {/* Name and Title */}
          <div className="flex-grow">
            <h1 className="text-3xl font-bold mb-2 text-white">
              {header["Full Name"] || "Your Name"}
            </h1>
            <h2 className="text-xl text-slate-200 font-medium mb-4">
              {header["Professional Title"] || "Professional Title"}
            </h2>
            
            {/* Contact Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
              {header["Email Address"] && (
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-slate-300" />
                  <span className="text-slate-200 break-all">{header["Email Address"]}</span>
                </div>
              )}
              {header["Phone Number"] && (
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-slate-300" />
                  <span className="text-slate-200">{header["Phone Number"]}</span>
                </div>
              )}
              {header["Location (City, Country)"] && (
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-slate-300" />
                  <span className="text-slate-200">{header["Location (City, Country)"]}</span>
                </div>
              )}
              {header["LinkedIn Profile"] && (
                <div className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4 text-slate-300" />
                  <span className="text-slate-200 break-all">{header["LinkedIn Profile"]}</span>
                </div>
              )}
              {header["Github"] && (
                <div className="flex items-center gap-2">
                  <Github className="w-4 h-4 text-slate-300" />
                  <span className="text-slate-200 break-all">{header["Github"]}</span>
                </div>
              )}
              {header["Portfolio / Content Link"] && (
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-slate-300" />
                  <span className="text-slate-200 break-all">{header["Portfolio / Content Link"]}</span>
                </div>
              )}
              {header["Instagram / YouTube Handle"] && (
                <div className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-slate-300" />
                  <span className="text-slate-200">{header["Instagram / YouTube Handle"]}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderSection = (sectionKey) => {
    const data = resumeData[sectionKey];
    if (!data) return null;

    // Skip header as it's rendered separately
    if (sectionKey === "header") return null;

    const getSectionTitle = () => {
      const titleMap = {
        summary: "Professional Summary",
        education: "Education",
        work: "Work Experience",
        workExperience: "Work Experience",
        experience: "Clinical Experience",
        internships: "Teaching Practice",
        schooling: "Academic Background",
        projects: "Projects",
        techSkills: "Technical Skills",
        softSkills: "Soft Skills",
        coreLegalSkills: "Legal Skills",
        coreSalesSkills: "Sales Skills",
        coreMedicalSkills: "Medical Skills",
        teachingSkills: "Teaching Skills",
        labSkills: "Laboratory Skills",
        otherSkills: "Additional Skills",
        skills: "Core Skills",
        tools: "Tools & Software",
        certifications: "Certifications",
        achievements: "Achievements",
        activities: "Activities",
        extracurricular: "Extracurricular",
        publications: "Publications",
        languages: "Languages",
        interests: "Interests"
      };
      return titleMap[sectionKey] || sectionKey.charAt(0).toUpperCase() + sectionKey.slice(1);
    };

    const renderContent = () => {
      if (Array.isArray(data)) {
        return data.map((item, index) => {
          if (!item || Object.keys(item).length === 0) return null;
          
          return (
            <div key={index} className={`${index > 0 ? 'border-t border-slate-200 pt-4 mt-4' : ''}`}>
              {renderItemContent(item, sectionKey)}
            </div>
          );
        }).filter(Boolean);
      } else {
        return renderItemContent(data, sectionKey);
      }
    };

    const content = renderContent();
    if (!content || (Array.isArray(content) && content.length === 0)) return null;

    return (
      <section className="mb-8">
        <div className="flex items-center mb-4">
          <div className="w-1 h-8 bg-gradient-to-b from-slate-600 to-slate-400 rounded-full mr-4"></div>
          <h3 className="text-xl font-bold text-slate-800 tracking-wide">
            {getSectionTitle()}
          </h3>
        </div>
        <div className="pl-5">
          {content}
        </div>
      </section>
    );
  };

  const renderItemContent = (item, sectionKey) => {
    if (!item) return null;

    switch (sectionKey) {
      case "summary":
        return item.Summary && (
          <div className="text-slate-700 leading-relaxed whitespace-pre-line text-justify">
            {item.Summary}
          </div>
        );

      case "education":
        return (
          <div className="space-y-3">
            {item["Degree Name"] && (
              <div>
                <h4 className="font-semibold text-slate-800 text-lg">{item["Degree Name"]}</h4>
                {item["Institution Name"] && (
                  <p className="text-slate-600 font-medium">{item["Institution Name"]}</p>
                )}
                <div className="flex flex-wrap gap-4 mt-2 text-sm text-slate-600">
                  {item["Duration"] && <span>📅 {item["Duration"]}</span>}
                  {item["Duration (Start – End or 'Present')"] && <span>📅 {item["Duration (Start – End or 'Present')"]}</span>}
                  {(item["CGPA or Percentage"] || item["CGPA / Percentage"]) && (
                    <span>🎯 {item["CGPA or Percentage"] || item["CGPA / Percentage"]}</span>
                  )}
                </div>
              </div>
            )}
            {item["10th Grade School Name & Percentage"] && (
              <div className="text-sm text-slate-600">
                <strong>10th Grade:</strong> {item["10th Grade School Name & Percentage"]}
              </div>
            )}
            {item["12th Grade School Name & Percentage"] && (
              <div className="text-sm text-slate-600">
                <strong>12th Grade:</strong> {item["12th Grade School Name & Percentage"]}
              </div>
            )}
            {item["10th School Name"] && item["10th Percentage"] && (
              <div className="text-sm text-slate-600">
                <strong>10th Grade:</strong> {item["10th School Name"]} - {item["10th Percentage"]}
              </div>
            )}
            {item["12th School Name"] && item["12th Percentage"] && (
              <div className="text-sm text-slate-600">
                <strong>12th Grade:</strong> {item["12th School Name"]} - {item["12th Percentage"]}
              </div>
            )}
          </div>
        );

      case "work":
      case "workExperience":
      case "experience":
      case "internships":
        return (
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-slate-800 text-lg">
                {item["Job Title"] || item["Role"] || item["Position"] || "Position"}
              </h4>
              <p className="text-slate-600 font-medium">
                {item["Company Name"] || item["Organization / Firm"] || item["Hospital / Clinic Name"] || item["School / Institution"] || "Company"}
              </p>
              <p className="text-sm text-slate-500 mt-1">
                {item["Duration"] || "Duration"}
              </p>
            </div>
            {(item["Responsibilities & Achievements"] || item["Responsibilities & Legal Work"] || item["Key Responsibilities"] || item["Duties"]) && (
              <div className="text-slate-700 whitespace-pre-line leading-relaxed">
                {item["Responsibilities & Achievements"] || item["Responsibilities & Legal Work"] || item["Key Responsibilities"] || item["Duties"]}
              </div>
            )}
            {item["Departments Rotated"] && (
              <div className="text-sm text-slate-600">
                <strong>Departments:</strong> {item["Departments Rotated"]}
              </div>
            )}
          </div>
        );

      case "projects":
        return (
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-slate-800 text-lg">
                {item["Project Title"] || item["Project/Campaign Name"] || item["Title"] || "Project"}
              </h4>
              <div className="flex flex-wrap gap-4 mt-2 text-sm text-slate-600">
                {(item["Tools Used"] || item["Tools/Technologies Used"] || item["Platform Used"]) && (
                  <span>🛠️ {item["Tools Used"] || item["Tools/Technologies Used"] || item["Platform Used"]}</span>
                )}
                {item["Year / Role"] && <span>👤 {item["Year / Role"]}</span>}
                {item["Topic / Area of Law"] && <span>⚖️ {item["Topic / Area of Law"]}</span>}
                {item["Goal / Audience"] && <span>🎯 {item["Goal / Audience"]}</span>}
                {item["Project Type"] && <span>📋 {item["Project Type"]}</span>}
                {item["What You Sold / Promoted"] && <span>💰 {item["What You Sold / Promoted"]}</span>}
                {item["Institution / Guide"] && <span>🏛️ {item["Institution / Guide"]}</span>}
              </div>
            </div>
            {(item["Description"] || item["Your Contribution"] || item["Summary & Objective"] || item["Description / Contribution"]) && (
              <div className="text-slate-700 whitespace-pre-line leading-relaxed">
                {item["Description"] || item["Your Contribution"] || item["Summary & Objective"] || item["Description / Contribution"]}
              </div>
            )}
            {(item["Result / Metrics"] || item["Conversion / Engagement Stats"] || item["Key Insights / Results"] || item["Findings"]) && (
              <div className="text-slate-700 bg-slate-50 p-3 rounded-lg border-l-4 border-slate-400">
                <strong>Results:</strong> {item["Result / Metrics"] || item["Conversion / Engagement Stats"] || item["Key Insights / Results"] || item["Findings"]}
              </div>
            )}
            {item["Channels Used"] && (
              <div className="text-sm text-slate-600">
                <strong>Channels:</strong> {item["Channels Used"]}
              </div>
            )}
          </div>
        );

      case "publications":
        return (
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-slate-800 text-lg">
                {item["Article / Blog Title"] || "Publication"}
              </h4>
              {item["Platform (if published)"] && (
                <p className="text-slate-600 font-medium">{item["Platform (if published)"]}</p>
              )}
              {item["Link"] && (
                <p className="text-sm text-slate-500 break-all">{item["Link"]}</p>
              )}
            </div>
            {item["Brief Summary"] && (
              <div className="text-slate-700 leading-relaxed">
                {item["Brief Summary"]}
              </div>
            )}
          </div>
        );

      case "certifications":
        return (
          <div className="flex justify-between items-start">
            <div className="flex-grow">
              <h4 className="font-medium text-slate-800">
                {item["Course/Certification Name"] || item["Certification Name"] || item["Certification Title"] || "Certification"}
              </h4>
            </div>
            <div className="text-sm text-slate-500 ml-4 flex-shrink-0">
              {item["Date"] || item["Year"] || "Year"}
            </div>
          </div>
        );

      case "achievements":
        return (
          <div className="space-y-2">
            <h4 className="font-medium text-slate-800">
              {item["Achievements"] || item["Achievement"] || item["Title"] || item["Achievement Title"] || "Achievement"}
            </h4>
            {item["Description"] && (
              <div className="text-slate-700 text-sm leading-relaxed whitespace-pre-line">
                {item["Description"]}
              </div>
            )}
            {item["Year"] && (
              <div className="text-xs text-slate-500">{item["Year"]}</div>
            )}
          </div>
        );

      case "activities":
      case "extracurricular":
        return (
          <div className="space-y-2">
            <h4 className="font-medium text-slate-800">
              {item["Activities"] || item["Activity"] || item["Activity Title"] || "Activity"}
            </h4>
            {item["Description"] && (
              <div className="text-slate-700 text-sm leading-relaxed whitespace-pre-line">
                {item["Description"]}
              </div>
            )}
            {item["Year"] && (
              <div className="text-xs text-slate-500">{item["Year"]}</div>
            )}
          </div>
        );

      case "teachingSkills":
        return (
          <div className="space-y-4">
            {item["Core Teaching Skills"] && (
              <div>
                <h5 className="font-medium text-slate-700 mb-2">Core Teaching Skills</h5>
                <div className="text-slate-600 text-sm leading-relaxed">
                  {item["Core Teaching Skills"]}
                </div>
              </div>
            )}
            {item["Digital Tools"] && (
              <div>
                <h5 className="font-medium text-slate-700 mb-2">Digital Tools</h5>
                <div className="text-slate-600 text-sm leading-relaxed">
                  {item["Digital Tools"]}
                </div>
              </div>
            )}
            {item["Soft Skills"] && (
              <div>
                <h5 className="font-medium text-slate-700 mb-2">Soft Skills</h5>
                <div className="text-slate-600 text-sm leading-relaxed">
                  {item["Soft Skills"]}
                </div>
              </div>
            )}
          </div>
        );

      case "schooling":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {item["10th School Name"] && (
              <div className="bg-slate-50 p-3 rounded-lg">
                <h5 className="font-medium text-slate-700">10th Grade</h5>
                <p className="text-slate-600 text-sm">{item["10th School Name"]}</p>
                {item["10th Percentage"] && (
                  <p className="text-slate-500 text-sm">{item["10th Percentage"]}</p>
                )}
              </div>
            )}
            {item["12th School Name"] && (
              <div className="bg-slate-50 p-3 rounded-lg">
                <h5 className="font-medium text-slate-700">12th Grade</h5>
                <p className="text-slate-600 text-sm">{item["12th School Name"]}</p>
                {item["12th Percentage"] && (
                  <p className="text-slate-500 text-sm">{item["12th Percentage"]}</p>
                )}
              </div>
            )}
          </div>
        );

      default:
        // Handle skill sections and other simple lists
        const skillKeys = [
          "Technical Skills", "Skill", "Core Sales Skills", "Core Legal Skill",
          "Tools/Softwares", "Soft Skills", "Soft Skill", "Languages", "Interests",
          "Interest", "Language", "Activities", "Tool/Software"
        ];
        
        const skillKey = skillKeys.find(key => item[key]);
        if (skillKey && item[skillKey]) {
          return (
            <div className="inline-block bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium mr-2 mb-2 border border-slate-200">
              {item[skillKey]}
            </div>
          );
        }

        // Fallback for other content types
        return (
          <div className="text-slate-700 leading-relaxed">
            {Object.entries(item).map(([key, value]) => {
              if (!value) return null;
              return (
                <div key={key} className="mb-2">
                  <strong className="text-slate-800">{key}:</strong> {value}
                </div>
              );
            })}
          </div>
        );
    }
  };

  return (
    <div className="a4-page bg-white shadow-2xl border border-slate-200 overflow-hidden" 
         style={{ 
           width: '210mm', 
           minHeight: '297mm', 
           margin: '0 auto',
           fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
         }}>
      
      {/* Header Section */}
      {renderContactInfo()}
      
      {/* Content Sections */}
      <div className="p-8 space-y-8">
        {sections.map(sectionKey => renderSection(sectionKey)).filter(Boolean)}
      </div>
      
      {/* Footer Decoration */}
      <div className="h-2 bg-gradient-to-r from-slate-600 via-slate-500 to-slate-400"></div>
    </div>
  );
};

export default CorporateSteelTemplate;