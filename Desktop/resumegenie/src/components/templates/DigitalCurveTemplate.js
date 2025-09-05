import React from "react";

const DigitalCurveTemplate = ({ resumeData, selectedCareer }) => {
  // Helper function to safely get data
  const getData = (sectionKey, field = null, index = null) => {
    if (!resumeData || !resumeData[sectionKey]) return "";
    
    if (index !== null && Array.isArray(resumeData[sectionKey])) {
      const item = resumeData[sectionKey][index];
      return field ? (item?.[field] || "") : item;
    }
    
    if (Array.isArray(resumeData[sectionKey])) {
      return resumeData[sectionKey];
    }
    
    return field ? (resumeData[sectionKey][field] || "") : resumeData[sectionKey];
  };

  // Get header data
  const headerData = getData("header") || {};
  const fullName = headerData["Full Name"] || "";
  const professionalTitle = headerData["Professional Title"] || "";
  const phone = headerData["Phone Number"] || "";
  const email = headerData["Email Address"] || "";
  const linkedin = headerData["LinkedIn Profile"] || "";
  const github = headerData["Github"] || "";
  const location = headerData["Location (City, Country)"] || "";
  const profilePhoto = headerData["Profile Photo"] || "";

  // Get summary
  const summaryData = getData("summary") || {};
  const summary = summaryData["Summary"] || "";

  // Render sections dynamically based on career
  const renderSection = (sectionKey, title, isMultiple = false) => {
    const sectionData = getData(sectionKey);
    if (!sectionData || (Array.isArray(sectionData) && sectionData.length === 0)) return null;

    return (
      <div className="mb-8">
        <div className="relative mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-2 relative z-10">
            {title}
          </h2>
          <div className="absolute -left-4 top-0 w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
          <div className="absolute -left-2 top-2 w-16 h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent rounded-full"></div>
        </div>

        {isMultiple ? (
          <div className="space-y-6">
            {Array.isArray(sectionData) && sectionData.map((item, index) => (
              <div key={index} className="relative">
                {renderSectionContent(sectionKey, item, index)}
              </div>
            ))}
          </div>
        ) : (
          <div>{renderSectionContent(sectionKey, sectionData)}</div>
        )}
      </div>
    );
  };

  const renderSectionContent = (sectionKey, data, index = null) => {
    if (!data || typeof data !== 'object') return null;

    switch (sectionKey) {
      case "work":
      case "workExperience":
        return (
          <div className="relative pl-8 border-l-2 border-gradient-to-b from-blue-200 to-purple-200">
            <div className="absolute -left-2 top-2 w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-sm"></div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="flex flex-wrap items-start justify-between mb-3">
                <h3 className="font-bold text-lg text-gray-800">
                  {data["Job Title"] || data["Role"] || ""}
                </h3>
                <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  {data["Duration"] || ""}
                </span>
              </div>
              <p className="font-medium text-gray-700 mb-3">
                {data["Company Name"] || ""}
              </p>
              <div className="text-gray-600 text-sm leading-relaxed">
                {(data["Responsibilities & Achievements"] || data["Duties"] || "").split('\n').map((line, i) => 
                  line.trim() && (
                    <p key={i} className="mb-1 flex items-start">
                      <span className="w-2 h-2 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      {line.trim()}
                    </p>
                  )
                )}
              </div>
            </div>
          </div>
        );

      case "projects":
        return (
          <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-all duration-300">
            <h3 className="font-bold text-lg text-gray-800 mb-2">
              {data["Project Title"] || data["Project/Campaign Name"] || ""}
            </h3>
            <div className="flex flex-wrap gap-2 mb-3">
              {(data["Tools Used"] || data["Tools/Technologies Used"] || data["Platform Used"] || "").split(',').map((tool, i) => 
                tool.trim() && (
                  <span key={i} className="text-xs font-medium bg-gradient-to-r from-blue-500 to-purple-600 text-white px-2 py-1 rounded-full">
                    {tool.trim()}
                  </span>
                )
              )}
            </div>
            <p className="text-gray-700 mb-3 leading-relaxed">
              {data["Description"] || ""}
            </p>
            {data["Your Contribution"] && (
              <div className="mt-3 p-3 bg-white/80 rounded-lg border-l-4 border-gradient-to-b from-blue-500 to-purple-600">
                <p className="text-sm text-gray-600 leading-relaxed">
                  <strong>Contribution:</strong> {data["Your Contribution"]}
                </p>
              </div>
            )}
            {data["Result / Metrics"] && (
              <div className="mt-3 p-3 bg-green-50/80 rounded-lg border-l-4 border-green-500">
                <p className="text-sm text-gray-600">
                  <strong>Results:</strong> {data["Result / Metrics"]}
                </p>
              </div>
            )}
          </div>
        );

      case "education":
        return (
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-bold text-lg text-gray-800">
                  {data["Degree Name"] || data["Degree / Course Name"] || ""}
                </h3>
                <p className="font-medium text-gray-700">
                  {data["Institution Name"] || ""}
                </p>
              </div>
              <div className="text-right">
                <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  {data["Duration"] || data["Duration (Start – End or 'Present')"] || ""}
                </span>
                {data["CGPA or Percentage"] && (
                  <p className="text-sm text-gray-600 mt-1">
                    {data["CGPA or Percentage"]}
                  </p>
                )}
              </div>
            </div>
          </div>
        );

      case "certifications":
        return (
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mr-3"></div>
              <span className="font-medium text-gray-800">
                {data["Course/Certification Name"] || data["Certification Name"] || data["Certification Title"] || ""}
              </span>
            </div>
            <span className="text-sm text-gray-600 font-medium">
              {data["Date"] || data["Year"] || ""}
            </span>
          </div>
        );

      case "achievements":
        return (
          <div className="flex items-start p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
            <div className="w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mr-3 mt-0.5 flex-shrink-0"></div>
            <div className="flex-1">
              <p className="font-medium text-gray-800">
                {data["Achievements"] || data["Achievement"] || data["Achievement Title"] || data["Title"] || ""}
              </p>
              {data["Description"] && (
                <p className="text-sm text-gray-600 mt-1">{data["Description"]}</p>
              )}
            </div>
          </div>
        );

      default:
        // Handle skills and other simple list items
        if (typeof data === 'string') {
          return (
            <span className="inline-block bg-gradient-to-r from-gray-100 to-blue-50 text-gray-700 px-3 py-2 rounded-lg text-sm font-medium mr-2 mb-2 border border-gray-200 hover:shadow-sm transition-shadow">
              {data}
            </span>
          );
        }
        
        // Handle object data
        const values = Object.values(data).filter(v => v && typeof v === 'string');
        return values.map((value, i) => (
          <span key={i} className="inline-block bg-gradient-to-r from-gray-100 to-blue-50 text-gray-700 px-3 py-2 rounded-lg text-sm font-medium mr-2 mb-2 border border-gray-200 hover:shadow-sm transition-shadow">
            {value}
          </span>
        ));
    }
  };

  return (
    <div className="a4-page bg-white relative overflow-hidden">
      {/* Background Curves */}
      <div className="absolute inset-0 pointer-events-none">
        <svg viewBox="0 0 400 600" className="absolute top-0 right-0 w-64 h-96 opacity-5">
          <path d="M400,0 C350,50 320,100 340,150 C360,200 380,250 360,300 C340,350 300,400 320,450 C340,500 380,550 400,600 L400,0 Z" fill="url(#gradient1)" />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
        </svg>
        
        <svg viewBox="0 0 400 600" className="absolute bottom-0 left-0 w-48 h-72 opacity-5">
          <path d="M0,600 C50,550 80,500 60,450 C40,400 20,350 40,300 C60,250 100,200 80,150 C60,100 20,50 0,0 L0,600 Z" fill="url(#gradient2)" />
          <defs>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <header className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white overflow-hidden">
          {/* Curved bottom edge */}
          <svg viewBox="0 0 1200 120" className="absolute bottom-0 left-0 w-full h-auto">
            <path d="M0,0 C150,100 350,100 600,80 C850,60 1050,60 1200,20 L1200,120 L0,120 Z" fill="white" />
          </svg>
          
          <div className="relative z-10 px-12 py-10">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h1 className="text-4xl font-bold mb-2 leading-tight">
                  {fullName || "Your Name"}
                </h1>
                <p className="text-xl font-light text-blue-100 mb-6">
                  {professionalTitle || "Professional Title"}
                </p>
                
                {/* Contact Info with curved containers */}
                <div className="flex flex-wrap gap-4 text-sm">
                  {phone && (
                    <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                      <span className="w-2 h-2 bg-blue-300 rounded-full mr-2"></span>
                      {phone}
                    </div>
                  )}
                  {email && (
                    <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                      <span className="w-2 h-2 bg-purple-300 rounded-full mr-2"></span>
                      {email}
                    </div>
                  )}
                  {linkedin && (
                    <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                      <span className="w-2 h-2 bg-blue-300 rounded-full mr-2"></span>
                      LinkedIn
                    </div>
                  )}
                  {github && (
                    <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                      <span className="w-2 h-2 bg-purple-300 rounded-full mr-2"></span>
                      GitHub
                    </div>
                  )}
                  {location && (
                    <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                      <span className="w-2 h-2 bg-blue-300 rounded-full mr-2"></span>
                      {location}
                    </div>
                  )}
                </div>
              </div>
              
              {/* Profile Photo */}
              {profilePhoto && (
                <div className="ml-8">
                  <div className="w-32 h-32 rounded-full border-4 border-white/20 p-1 bg-gradient-to-br from-blue-400 to-purple-500">
                    <img
                      src={profilePhoto}
                      alt="Profile"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="px-12 py-8">
          {/* Professional Summary */}
          {summary && (
            <section className="mb-10">
              <div className="relative mb-6">
                <h2 className="text-xl font-bold text-gray-800 mb-2 relative z-10">
                  Professional Summary
                </h2>
                <div className="absolute -left-4 top-0 w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
                <div className="absolute -left-2 top-2 w-16 h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent rounded-full"></div>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path d="M20,20 Q80,20 80,50 Q80,80 50,80 Q20,80 20,50 Q20,20 20,20 Z" fill="currentColor" />
                  </svg>
                </div>
                <p className="text-gray-700 leading-relaxed relative z-10">{summary}</p>
              </div>
            </section>
          )}

          {/* Dynamic sections based on career */}
          <div className="grid grid-cols-1 gap-8">
            {/* Work Experience */}
            {renderSection("work", "Work Experience", true) || renderSection("workExperience", "Work Experience", true)}
            
            {/* Projects */}
            {renderSection("projects", "Projects", true)}
            
            {/* Education */}
            {renderSection("education", "Education", Array.isArray(getData("education")))}
            
            {/* Skills sections */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                {renderSection("techSkills", "Technical Skills", true)}
                {renderSection("skills", "Core Skills", true)}
                {renderSection("coreMedicalSkills", "Core Medical Skills", true)}
                {renderSection("coreLegalSkills", "Core Legal Skills", true)}
                {renderSection("coreSalesSkills", "Core Sales Skills", true)}
                {renderSection("teachingSkills", "Teaching Skills", false)}
              </div>
              
              <div>
                {renderSection("softSkills", "Soft Skills", true)}
                {renderSection("otherSkills", "Other Skills", true)}
                {renderSection("tools", "Tools & Software", true)}
                {renderSection("labSkills", "Lab & Technical Skills", true)}
              </div>
            </div>
            
            {/* Other sections */}
            {renderSection("certifications", "Certifications", true)}
            {renderSection("achievements", "Achievements", true)}
            {renderSection("activities", "Extracurricular Activities", true)}
            {renderSection("extracurricular", "Extracurricular Activities", true)}
            {renderSection("publications", "Publications", true)}
            {renderSection("languages", "Languages", true)}
            {renderSection("interests", "Interests", true)}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DigitalCurveTemplate;