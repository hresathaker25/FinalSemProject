import React from 'react';

const YouthStartupTemplate = ({ resumeData = {}, selectedCareer = 'Others' }) => {
  // Updated comprehensive config that matches your resume builder
  const ResumeFieldsConfig = {
    Others: [
      { sectionKey: "header", display: "none" },
      { sectionKey: "summary", title: "Professional Summary" },
      { sectionKey: "education", title: "Education" },
      { sectionKey: "work", title: "Work Experience / Internships", multiple: true },
      { sectionKey: "projects", title: "Projects", multiple: true },
      { sectionKey: "certifications", title: "Certifications", multiple: true },
      { sectionKey: "achievements", title: "Achievements / Awards", multiple: true },
      { sectionKey: "activities", title: "Extracurricular Activities", multiple: true },
      { sectionKey: "techSkills", title: "Technical Skills", multiple: true },
      { sectionKey: "softSkills", title: "Soft Skills", multiple: true },
      { sectionKey: "languages", title: "Languages Known", multiple: true },
      { sectionKey: "interests", title: "Interests / Hobbies", multiple: true },
    ],
    InformationTechnology: [
      { sectionKey: "header", display: "none" },
      { sectionKey: "summary", title: "Professional Summary / About Yourself" },
      { sectionKey: "education", title: "Education" },
      { sectionKey: "work", title: "Work Experience / Internships", multiple: true },
      { sectionKey: "projects", title: "Projects", multiple: true },
      { sectionKey: "certifications", title: "Certifications", multiple: true },
      { sectionKey: "achievements", title: "Achievements / Awards", multiple: true },
      { sectionKey: "activities", title: "Extracurricular Activities", multiple: true },
      { sectionKey: "techSkills", title: "Technical Skills", multiple: true },
      { sectionKey: "softSkills", title: "Soft Skills", multiple: true },
      { sectionKey: "languages", title: "Languages Known", multiple: true },
      { sectionKey: "interests", title: "Interests / Hobbies", multiple: true },
    ],
    Marketing: [
      { sectionKey: "header", display: "none" },
      { sectionKey: "summary", title: "Professional Summary / About Yourself" },
      { sectionKey: "education", title: "Education" },
      { sectionKey: "techSkills", title: "Marketing / Technical Skills", multiple: true },
      { sectionKey: "softSkills", title: "Soft Skills", multiple: true },
      { sectionKey: "projects", title: "Projects / Campaigns", multiple: true },
      { sectionKey: "work", title: "Work Experience / Internships / Freelance", multiple: true },
      { sectionKey: "certifications", title: "Certifications", multiple: true },
      { sectionKey: "achievements", title: "Achievements / Awards", multiple: true },
      { sectionKey: "activities", title: "Extracurricular Activities", multiple: true },
      { sectionKey: "languages", title: "Languages Known", multiple: true },
      { sectionKey: "interests", title: "Interests / Hobbies", multiple: true },
    ],
    Law: [
      { sectionKey: "header", display: "none" },
      { sectionKey: "summary", title: "Professional Summary / About Yourself" },
      { sectionKey: "education", title: "Education" },
      { sectionKey: "work", title: "Work Experience / Internships", multiple: true },
      { sectionKey: "projects", title: "Legal Projects / Case Studies", multiple: true },
      { sectionKey: "publications", title: "Legal Writing / Publications", multiple: true },
      { sectionKey: "achievements", title: "Achievements", multiple: true },
      { sectionKey: "activities", title: "Extracurricular Activities", multiple: true },
      { sectionKey: "coreLegalSkills", title: "Core Legal Skills", multiple: true },
      { sectionKey: "otherSkills", title: "Other Skills", multiple: true },
      { sectionKey: "languages", title: "Languages Known", multiple: true },
      { sectionKey: "interests", title: "Interests / Hobbies", multiple: true },
    ],
    Sales: [
      { sectionKey: "header", display: "none" },
      { sectionKey: "summary", title: "Professional Summary / About Yourself" },
      { sectionKey: "education", title: "Education" },
      { sectionKey: "work", title: "Work Experience / Internships", multiple: true },
      { sectionKey: "projects", title: "Projects / Sales Campaigns", multiple: true },
      { sectionKey: "certifications", title: "Certifications", multiple: true },
      { sectionKey: "achievements", title: "Achievements / Awards", multiple: true },
      { sectionKey: "activities", title: "Extracurricular Activities", multiple: true },
      { sectionKey: "coreSalesSkills", title: "Core Sales Skills", multiple: true },
      { sectionKey: "otherSkills", title: "Other Skills", multiple: true },
      { sectionKey: "languages", title: "Languages Known", multiple: true },
      { sectionKey: "interests", title: "Interests / Hobbies", multiple: true },
    ],
    Finance: [
      { sectionKey: "header", display: "none" },
      { sectionKey: "summary", title: "Professional Summary / About Yourself" },
      { sectionKey: "education", title: "Education", multiple: true },
      { sectionKey: "workExperience", title: "Work Experience / Internships", multiple: true },
      { sectionKey: "projects", title: "Finance Projects / Case Studies", multiple: true },
      { sectionKey: "skills", title: "Core Finance & Accounting Skills", multiple: true },
      { sectionKey: "tools", title: "Finance Tools & Software", multiple: true },
      { sectionKey: "certifications", title: "Certifications", multiple: true },
      { sectionKey: "achievements", title: "Achievements", multiple: true },
      { sectionKey: "extracurricular", title: "Extracurricular Activities", multiple: true },
      { sectionKey: "languages", title: "Languages Known", multiple: true },
      { sectionKey: "interests", title: "Interests / Hobbies", multiple: true },
    ],
    Medical: [
      { sectionKey: "header", display: "none" },
      { sectionKey: "summary", title: "Professional Summary" },
      { sectionKey: "education", title: "Education", multiple: true },
      { sectionKey: "experience", title: "Internships / Clinical Experience", multiple: true },
      { sectionKey: "projects", title: "Medical Projects / Research", multiple: true },
      { sectionKey: "certifications", title: "Certifications", multiple: true },
      { sectionKey: "achievements", title: "Achievements", multiple: true },
      { sectionKey: "activities", title: "Extracurricular Activities", multiple: true },
      { sectionKey: "coreMedicalSkills", title: "Core Medical Skills", multiple: true },
      { sectionKey: "labSkills", title: "Lab & Technical Skills", multiple: true },
      { sectionKey: "softSkills", title: "Soft Skills", multiple: true },
      { sectionKey: "languages", title: "Languages Known", multiple: true },
      { sectionKey: "interests", title: "Interests / Hobbies", multiple: true },
    ],
    Educational: [
      { sectionKey: "header", display: "none" },
      { sectionKey: "summary", title: "Professional Summary / About Yourself" },
      { sectionKey: "education", title: "Education", multiple: true },
      { sectionKey: "schooling", title: "Schooling (10th & 12th)" },
      { sectionKey: "internships", title: "Internships / Teaching Practice", multiple: true },
      { sectionKey: "projects", title: "Projects / Teaching Portfolios", multiple: true },
      { sectionKey: "certifications", title: "Certifications", multiple: true },
      { sectionKey: "achievements", title: "Achievements", multiple: true },
      { sectionKey: "activities", title: "Extracurricular Activities", multiple: true },
      { sectionKey: "teachingSkills", title: "Teaching Skills" },
      { sectionKey: "languages", title: "Languages Known", multiple: true },
      { sectionKey: "interests", title: "Interests / Hobbies", multiple: true },
    ],
  };

  const config = ResumeFieldsConfig[selectedCareer] || ResumeFieldsConfig.Others;
  const headerData = resumeData?.header || {};

  // Check if section has data
  const hasData = (sectionData, isMultiple) => {
    if (!sectionData) return false;
    
    if (isMultiple) {
      return Array.isArray(sectionData) && sectionData.some(item => 
        item && Object.values(item).some(val => val && val.toString().trim())
      );
    } else {
      return Object.values(sectionData).some(val => val && val.toString().trim());
    }
  };

  // Render main content sections
  const renderMainSection = (section) => {
    if (section.sectionKey === 'header' || !resumeData[section.sectionKey]) return null;
    
    const sectionData = resumeData[section.sectionKey];
    if (!hasData(sectionData, section.multiple)) return null;

    return (
      <div key={section.sectionKey} className="mb-6">
        <div className="flex items-center mb-4">
          <div className="w-1 h-6 bg-gradient-to-b from-orange-400 to-pink-500 rounded-full mr-3"></div>
          <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wide">
            {section.title}
          </h2>
        </div>
        
        {section.multiple ? renderMultipleItems(sectionData, section.sectionKey) : renderSingleItem(sectionData, section.sectionKey)}
      </div>
    );
  };

  const renderMultipleItems = (data, sectionKey) => {
    if (!Array.isArray(data)) return null;
    
    return (
      <div className="space-y-4">
        {data.map((item, index) => {
          if (!item || !Object.values(item).some(val => val && val.toString().trim())) return null;
          
          return (
            <div key={index} className="relative pl-4 border-l-2 border-orange-200">
              <div className="absolute -left-1.5 top-2 w-3 h-3 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full border-2 border-white"></div>
              {renderItemContent(item, sectionKey)}
            </div>
          );
        })}
      </div>
    );
  };

  const renderSingleItem = (data, sectionKey) => {
    if (!data || typeof data !== 'object') return null;
    
    return (
      <div className="pl-4 border-l-2 border-orange-200 relative">
        <div className="absolute -left-1.5 top-2 w-3 h-3 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full border-2 border-white"></div>
        {renderItemContent(data, sectionKey)}
      </div>
    );
  };

  const renderItemContent = (item, sectionKey) => {
    if (!item || typeof item !== 'object') return null;
    
    // Work/Experience sections
    if (['work', 'experience', 'workExperience', 'internships'].includes(sectionKey)) {
      return (
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-100">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
            <h3 className="font-bold text-gray-800 text-base">
              {item['Job Title'] || item['Role'] || item['Position'] || 'Position'}
            </h3>
            {item['Duration'] && (
              <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full mt-1 sm:mt-0 self-start">
                {item['Duration']}
              </span>
            )}
          </div>
          <p className="text-sm font-medium text-blue-700 mb-3">
            {item['Company Name'] || item['Company / Client'] || item['Organization / Firm'] || item['School / Institution'] || 'Company'}
          </p>
          {(item['Responsibilities & Achievements'] || item['Responsibilities'] || item['Duties'] || item['Responsibilities & Legal Work'] || item['Key Responsibilities']) && (
            <div className="text-sm text-gray-700 leading-relaxed whitespace-pre-line bg-white/80 p-3 rounded">
              {item['Responsibilities & Achievements'] || item['Responsibilities'] || item['Duties'] || item['Responsibilities & Legal Work'] || item['Key Responsibilities']}
            </div>
          )}
        </div>
      );
    }

    // Projects sections
    if (sectionKey === 'projects') {
      return (
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border border-purple-100">
          <h3 className="font-bold text-gray-800 mb-2 text-base">
            {item['Project Title'] || item['Project/Campaign Name'] || item['Title'] || 'Project'}
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3 text-xs">
            {(item['Tools Used'] || item['Tools/Technologies Used'] || item['Tools/Softwares'] || item['Tools']) && (
              <div className="bg-white/80 p-2 rounded">
                <span className="font-medium text-purple-600">Tools:</span>
                <span className="ml-1 text-gray-600">{item['Tools Used'] || item['Tools/Technologies Used'] || item['Tools/Softwares'] || item['Tools']}</span>
              </div>
            )}
            {item['Duration'] && (
              <div className="bg-white/80 p-2 rounded">
                <span className="font-medium text-purple-600">Duration:</span>
                <span className="ml-1 text-gray-600">{item['Duration']}</span>
              </div>
            )}
          </div>
          
          {(item['Description'] || item['Your Contribution'] || item['Summary & Objective']) && (
            <div className="text-sm text-gray-700 leading-relaxed whitespace-pre-line bg-white/80 p-3 rounded">
              {item['Description'] || item['Your Contribution'] || item['Summary & Objective']}
            </div>
          )}
        </div>
      );
    }

    // Education section
    if (['education', 'schooling'].includes(sectionKey)) {
      return (
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-100">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
            <h3 className="font-bold text-gray-800 text-base">
              {item['Degree Name'] || item['Degree / Course Name'] || 'Degree'}
            </h3>
            {(item['CGPA or Percentage'] || item['CGPA / Percentage']) && (
              <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full mt-1 sm:mt-0 self-start">
                {item['CGPA or Percentage'] || item['CGPA / Percentage']}
              </span>
            )}
          </div>
          <p className="text-sm font-medium text-green-700 mb-2">
            {item['Institution Name'] || 'Institution'}
          </p>
          <p className="text-xs text-green-600">
            {item['Duration'] || item['Duration (Start – End or \'Present\')'] || 'Duration'}
          </p>
          
          {/* Additional education fields */}
          {(item['10th Grade School Name & Percentage'] || item['10th School Name']) && (
            <div className="mt-2 text-xs text-gray-600 bg-white/60 p-2 rounded">
              <span className="font-medium">10th:</span> {item['10th Grade School Name & Percentage'] || `${item['10th School Name']} - ${item['10th Percentage']}`}
            </div>
          )}
          {(item['12th Grade School Name & Percentage'] || item['12th School Name']) && (
            <div className="mt-1 text-xs text-gray-600 bg-white/60 p-2 rounded">
              <span className="font-medium">12th:</span> {item['12th Grade School Name & Percentage'] || `${item['12th School Name']} - ${item['12th Percentage']}`}
            </div>
          )}
        </div>
      );
    }

    // Generic rendering for other sections
    return (
      <div className="bg-gradient-to-r from-gray-50 to-white p-4 rounded-lg border border-gray-100">
        {Object.entries(item).map(([key, value]) => {
          if (!value || !value.toString().trim()) return null;
          
          if (key.toLowerCase().includes('description') || 
              key.toLowerCase().includes('responsibilities') ||
              key.toLowerCase().includes('summary') ||
              value.length > 100) {
            return (
              <div key={key} className="text-sm text-gray-700 leading-relaxed whitespace-pre-line bg-white/70 p-3 rounded mb-2 last:mb-0">
                {value}
              </div>
            );
          }
          
          return (
            <div key={key} className="text-sm mb-2 last:mb-0">
              <span className="font-medium text-gray-800">{key}:</span>
              <span className="ml-2 text-gray-700">{value}</span>
            </div>
          );
        })}
      </div>
    );
  };

  // Render skills as tags
  const renderSkillTags = (skillData, bgColor = 'orange') => {
    if (!Array.isArray(skillData)) return null;
    
    const colorClasses = {
      orange: 'bg-orange-100 text-orange-700 border-orange-200',
      blue: 'bg-blue-100 text-blue-700 border-blue-200',
      green: 'bg-green-100 text-green-700 border-green-200',
      purple: 'bg-purple-100 text-purple-700 border-purple-200'
    };

    return (
      <div className="flex flex-wrap gap-2">
        {skillData.map((item, index) => 
          Object.values(item || {}).map((skill, skillIndex) => {
            if (!skill || !skill.toString().trim()) return null;
            return (
              <span key={`${index}-${skillIndex}`} className={`${colorClasses[bgColor]} px-2 py-1 rounded-full text-xs font-medium border`}>
                {skill}
              </span>
            );
          })
        )}
      </div>
    );
  };

  // Filter sections for sidebar and main content
  const skillSections = ['techSkills', 'softSkills', 'coreSalesSkills', 'coreLegalSkills', 'coreMedicalSkills', 'labSkills', 'skills', 'tools', 'otherSkills'];
  const infoSections = ['languages', 'interests'];
  const mainSections = config.filter(section => 
    !skillSections.includes(section.sectionKey) && 
    !infoSections.includes(section.sectionKey) &&
    section.sectionKey !== 'header'
  );

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden" style={{ minHeight: '297mm' }}>
      {/* Header Section */}
      <div className="relative bg-gradient-to-br from-orange-100 via-pink-100 to-purple-100 p-6">
        <div className="absolute top-4 right-8 w-20 h-20 bg-gradient-to-br from-orange-300 to-pink-400 rounded-full opacity-20"></div>
        <div className="absolute bottom-4 left-8 w-16 h-16 bg-gradient-to-br from-purple-300 to-indigo-400 rounded-full opacity-20"></div>
        
        <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start gap-6">
          {/* Profile Photo */}
          <div className="flex-shrink-0">
            {headerData['Profile Photo'] ? (
              <img 
                src={headerData['Profile Photo']} 
                alt="Profile" 
                className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg"
              />
            ) : (
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 border-4 border-white shadow-lg flex items-center justify-center">
                <span className="text-3xl font-bold text-white">
                  {headerData['Full Name'] ? headerData['Full Name'].charAt(0).toUpperCase() : 'U'}
                </span>
              </div>
            )}
          </div>
          
          {/* Name and Contact Info */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-3xl lg:text-4xl font-bold mb-2 text-gray-800">
              {headerData['Full Name'] || 'Your Full Name'}
            </h1>
            
            <p className="text-lg text-gray-600 mb-4 font-medium">
              {headerData['Professional Title'] || 'Your Professional Title'}
            </p>
            
            {/* Contact Information */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-4">
              {headerData['Phone Number'] && (
                <div className="flex items-center bg-white/80 rounded-full px-3 py-1 text-sm">
                  📞 {headerData['Phone Number']}
                </div>
              )}
              {headerData['Email Address'] && (
                <div className="flex items-center bg-white/80 rounded-full px-3 py-1 text-sm">
                  ✉️ {headerData['Email Address']}
                </div>
              )}
              {headerData['Location (City, Country)'] && (
                <div className="flex items-center bg-white/80 rounded-full px-3 py-1 text-sm">
                  📍 {headerData['Location (City, Country)']}
                </div>
              )}
            </div>
            
            {/* Social Links */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 text-sm">
              {headerData['LinkedIn Profile'] && (
                <span className="text-gray-700 bg-white/60 px-3 py-1 rounded-full">
                  💼 LinkedIn
                </span>
              )}
              {headerData['Github'] && (
                <span className="text-gray-700 bg-white/60 px-3 py-1 rounded-full">
                  🐙 GitHub
                </span>
              )}
              {(headerData['Portfolio / Content Link'] || headerData['Instagram / YouTube Handle']) && (
                <span className="text-gray-700 bg-white/60 px-3 py-1 rounded-full">
                  🎨 Portfolio
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-4">
            {/* Skills Sections */}
            {skillSections.map(skillKey => {
              const skillData = resumeData[skillKey];
              if (!hasData(skillData, true)) return null;
              
              const section = config.find(s => s.sectionKey === skillKey);
              if (!section) return null;
              
              return (
                <div key={skillKey} className="bg-gradient-to-r from-gray-50 to-white p-4 rounded-lg border border-gray-200">
                  <h3 className="font-bold text-gray-800 mb-3 text-sm uppercase tracking-wider flex items-center">
                    <span className="w-2 h-2 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full mr-2"></span>
                    {section.title}
                  </h3>
                  {renderSkillTags(skillData, 'orange')}
                </div>
              );
            })}

            {/* Languages */}
            {resumeData.languages && hasData(resumeData.languages, true) && (
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200">
                <h3 className="font-bold text-gray-800 mb-3 text-sm uppercase tracking-wider flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Languages
                </h3>
                {renderSkillTags(resumeData.languages, 'blue')}
              </div>
            )}

            {/* Interests */}
            {resumeData.interests && hasData(resumeData.interests, true) && (
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200">
                <h3 className="font-bold text-gray-800 mb-3 text-sm uppercase tracking-wider flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Interests
                </h3>
                {renderSkillTags(resumeData.interests, 'green')}
              </div>
            )}
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            {mainSections.map(renderMainSection)}
          </div>
        </div>
      </div>

      {/* Footer accent */}
      <div className="h-2 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500"></div>
    </div>
  );
};
 
export default YouthStartupTemplate;