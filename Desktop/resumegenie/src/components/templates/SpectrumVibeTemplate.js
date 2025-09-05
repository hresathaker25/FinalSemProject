import React from "react";
import ResumeFieldsConfig from "../../data/ResumeFieldsConfig";

const SpectrumVibeTemplate = ({ resumeData, selectedCareer }) => {
  const config = ResumeFieldsConfig[selectedCareer] || [];
  
  // Helper function to get section data
  const getSectionData = (sectionKey) => {
    return resumeData[sectionKey] || {};
  };

  // Helper function to get array section data
  const getArraySectionData = (sectionKey) => {
    return Array.isArray(resumeData[sectionKey]) ? resumeData[sectionKey] : [];
  };

  // Helper function to check if section has data
  const hasData = (sectionKey) => {
    const data = resumeData[sectionKey];
    if (Array.isArray(data)) {
      return data.length > 0 && data.some(item => 
        Object.values(item).some(value => value && value.toString().trim() !== "")
      );
    }
    return data && Object.values(data).some(value => value && value.toString().trim() !== "");
  };

  // Get header data
  const headerData = getSectionData("header");
  const summaryData = getSectionData("summary");

  // Split skills into left and right columns for better layout
  const leftColumnSections = [];
  const rightColumnSections = [];
  
  config.forEach((section) => {
    if (section.sectionKey !== "header" && section.sectionKey !== "summary" && hasData(section.sectionKey)) {
      // Distribute sections based on type for better balance
      if (['education', 'work', 'experience', 'workExperience', 'internships'].includes(section.sectionKey)) {
        leftColumnSections.push(section);
      } else {
        rightColumnSections.push(section);
      }
    }
  });

  const renderProfileImage = () => {
    const profilePhoto = headerData["Profile Photo"];
    if (profilePhoto) {
      return (
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg flex-shrink-0 bg-gradient-to-br from-purple-400 to-pink-400">
          <img 
            src={profilePhoto} 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
      );
    }
    return (
      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 flex items-center justify-center text-white text-2xl font-bold shadow-lg flex-shrink-0">
        {(headerData["Full Name"] || "").charAt(0)}
      </div>
    );
  };

  const renderHeader = () => (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white p-8 rounded-t-2xl">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-20 -translate-y-20"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-white rounded-full translate-x-16 translate-y-16"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white rounded-full"></div>
      </div>
      
      <div className="relative z-10 flex items-start gap-6">
        {renderProfileImage()}
        
        <div className="flex-1 min-w-0">
          <h1 className="text-4xl font-bold mb-2 text-white leading-tight">
            {headerData["Full Name"] || "Your Name"}
          </h1>
          
          <div className="text-xl text-purple-100 mb-4 font-medium">
            {headerData["Professional Title"] || "Professional Title"}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            {headerData["Email Address"] && (
              <div className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2 backdrop-blur-sm">
                <span className="text-purple-200">✉</span>
                <span className="truncate">{headerData["Email Address"]}</span>
              </div>
            )}
            {headerData["Phone Number"] && (
              <div className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2 backdrop-blur-sm">
                <span className="text-purple-200">📞</span>
                <span className="truncate">{headerData["Phone Number"]}</span>
              </div>
            )}
            {headerData["LinkedIn Profile"] && (
              <div className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2 backdrop-blur-sm">
                <span className="text-purple-200">💼</span>
                <span className="truncate">{headerData["LinkedIn Profile"]}</span>
              </div>
            )}
            {headerData["Location (City, Country)"] && (
              <div className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2 backdrop-blur-sm">
                <span className="text-purple-200">📍</span>
                <span className="truncate">{headerData["Location (City, Country)"]}</span>
              </div>
            )}
            {headerData["Github"] && (
              <div className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2 backdrop-blur-sm">
                <span className="text-purple-200">🔗</span>
                <span className="truncate">{headerData["Github"]}</span>
              </div>
            )}
            {headerData["Portfolio / Content Link"] && (
              <div className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2 backdrop-blur-sm">
                <span className="text-purple-200">🌐</span>
                <span className="truncate">{headerData["Portfolio / Content Link"]}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const renderSummary = () => {
    if (!hasData("summary")) return null;
    
    return (
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 border-l-4 border-gradient-to-b from-blue-400 to-purple-400 rounded-r-xl">
        <h2 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
          <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
            <span className="text-white text-xs">✨</span>
          </div>
          Professional Summary
        </h2>
        <div className="text-gray-700 leading-relaxed whitespace-pre-line text-sm">
          {summaryData["Summary"] || ""}
        </div>
      </div>
    );
  };

  const getGradientForSection = (index) => {
    const gradients = [
      "from-pink-400 to-red-400",
      "from-purple-400 to-indigo-400", 
      "from-blue-400 to-cyan-400",
      "from-green-400 to-teal-400",
      "from-yellow-400 to-orange-400",
      "from-indigo-400 to-purple-400",
      "from-teal-400 to-green-400",
      "from-orange-400 to-pink-400"
    ];
    return gradients[index % gradients.length];
  };

  const getSectionIcon = (sectionKey) => {
    const icons = {
      education: "🎓",
      work: "💼", 
      workExperience: "💼",
      experience: "💼",
      internships: "🎯",
      projects: "🚀",
      techSkills: "⚡",
      coreLegalSkills: "⚖️",
      coreSalesSkills: "📈",
      coreMedicalSkills: "🏥",
      teachingSkills: "📚",
      skills: "🛠️",
      tools: "🔧",
      softSkills: "🤝",
      otherSkills: "🌟",
      certifications: "🏆",
      achievements: "🏅",
      activities: "🎭",
      extracurricular: "🎪",
      languages: "🌍",
      interests: "❤️",
      publications: "📝",
      legalProjects: "📋",
      default: "📌"
    };
    return icons[sectionKey] || icons.default;
  };

  const renderSection = (section, index) => {
    if (!hasData(section.sectionKey)) return null;

    const isMultiple = section.multiple;
    const gradient = getGradientForSection(index);
    const icon = getSectionIcon(section.sectionKey);
    
    return (
      <div key={section.sectionKey} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-4">
        <div className={`bg-gradient-to-r ${gradient} px-4 py-3`}>
          <h3 className="text-white font-semibold flex items-center gap-2 text-sm">
            <span className="text-base">{icon}</span>
            {section.title}
          </h3>
        </div>
        
        <div className="p-4">
          {isMultiple ? (
            <div className="space-y-4">
              {getArraySectionData(section.sectionKey).map((item, itemIndex) => {
                const hasItemData = Object.values(item).some(value => 
                  value && value.toString().trim() !== ""
                );
                if (!hasItemData) return null;
                
                return (
                  <div key={itemIndex} className={`${itemIndex > 0 ? 'border-t pt-4' : ''}`}>
                    <div className="space-y-2">
                      {section.fields.map((field) => {
                        const value = item[field.label];
                        if (!value || value.toString().trim() === "") return null;
                        
                        return (
                          <div key={field.label} className="text-sm">
                            {field.type === "textarea" ? (
                              <div>
                                <div className="font-medium text-gray-800 text-xs uppercase tracking-wide mb-1">
                                  {field.label}
                                </div>
                                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                                  {value}
                                </div>
                              </div>
                            ) : (
                              <div className="flex items-start gap-2">
                                <div className="font-medium text-gray-800 min-w-0 flex-shrink-0 text-xs uppercase tracking-wide">
                                  {field.label}:
                                </div>
                                <div className="text-gray-700 min-w-0 break-words">
                                  {value}
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="space-y-2">
              {section.fields.map((field) => {
                const value = getSectionData(section.sectionKey)[field.label];
                if (!value || value.toString().trim() === "") return null;
                
                return (
                  <div key={field.label} className="text-sm">
                    {field.type === "textarea" ? (
                      <div>
                        <div className="font-medium text-gray-800 text-xs uppercase tracking-wide mb-1">
                          {field.label}
                        </div>
                        <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                          {value}
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-start gap-2">
                        <div className="font-medium text-gray-800 min-w-0 flex-shrink-0 text-xs uppercase tracking-wide">
                          {field.label}:
                        </div>
                        <div className="text-gray-700 min-w-0 break-words">
                          {value}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="a4-page bg-white shadow-xl mx-auto relative overflow-hidden">
      {/* Header Section */}
      {renderHeader()}
      
      {/* Summary Section */}
      <div className="px-8 py-6">
        {renderSummary()}
      </div>
      
      {/* Main Content - Two Columns */}
      <div className="px-8 pb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-4">
          {leftColumnSections.map((section, index) => renderSection(section, index))}
        </div>
        
        {/* Right Column */}
        <div className="space-y-4">
          {rightColumnSections.map((section, index) => renderSection(section, leftColumnSections.length + index))}
        </div>
      </div>
      
      {/* Decorative Footer */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500"></div>
    </div>
  );
};

export default SpectrumVibeTemplate;