import React from 'react';
 
const StartupFreshTemplate = ({ resumeData = {}, selectedCareer = 'Others' }) => {
  // Comprehensive config matching your resume builder
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

  // Clean section divider
  const SectionDivider = () => (
    <div className="my-8">
      <div className="w-full h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent"></div>
    </div>
  );

  // Render main content sections
  const renderMainSection = (section) => {
    if (section.sectionKey === 'header' || !resumeData[section.sectionKey]) return null;
    
    const sectionData = resumeData[section.sectionKey];
    if (!hasData(sectionData, section.multiple)) return null;

    return (
      <div key={section.sectionKey} className="mb-8">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-2 pb-2 border-b-2 border-emerald-400">
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
      <div className="space-y-6">
        {data.map((item, index) => {
          if (!item || !Object.values(item).some(val => val && val.toString().trim())) return null;
          
          return (
            <div key={index} className="relative">
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
      <div className="relative">
        {renderItemContent(data, sectionKey)}
      </div>
    );
  };

  const renderItemContent = (item, sectionKey) => {
    if (!item || typeof item !== 'object') return null;
    
    // Work/Experience sections
    if (['work', 'experience', 'workExperience', 'internships'].includes(sectionKey)) {
      return (
        <div className="bg-white rounded-lg border-l-4 border-emerald-500 p-5 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {item['Job Title'] || item['Role'] || item['Position'] || 'Position'}
              </h3>
              <p className="text-emerald-600 font-medium mb-2">
                {item['Company Name'] || item['Company / Client'] || item['Organization / Firm'] || item['School / Institution'] || 'Company'}
              </p>
            </div>
            {item['Duration'] && (
              <div className="bg-emerald-100 text-emerald-700 text-sm font-medium px-3 py-1 rounded-full">
                {item['Duration']}
              </div>
            )}
          </div>
          
          {(item['Responsibilities & Achievements'] || item['Responsibilities'] || item['Duties'] || item['Responsibilities & Legal Work'] || item['Key Responsibilities']) && (
            <div className="text-gray-700 text-sm leading-relaxed whitespace-pre-line bg-gray-50 rounded p-3">
              {item['Responsibilities & Achievements'] || item['Responsibilities'] || item['Duties'] || item['Responsibilities & Legal Work'] || item['Key Responsibilities']}
            </div>
          )}
        </div>
      );
    }

    // Projects sections
    if (sectionKey === 'projects') {
      return (
        <div className="bg-white rounded-lg border-l-4 border-blue-500 p-5 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            {item['Project Title'] || item['Project/Campaign Name'] || item['Title'] || 'Project'}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3 text-sm">
            {(item['Tools Used'] || item['Tools/Technologies Used'] || item['Tools/Softwares'] || item['Tools']) && (
              <div className="bg-blue-50 rounded p-2">
                <span className="font-medium text-blue-700">Tech Stack:</span>
                <div className="text-gray-700 mt-1">{item['Tools Used'] || item['Tools/Technologies Used'] || item['Tools/Softwares'] || item['Tools']}</div>
              </div>
            )}
            {item['Duration'] && (
              <div className="bg-green-50 rounded p-2">
                <span className="font-medium text-green-700">Duration:</span>
                <div className="text-gray-700 mt-1">{item['Duration']}</div>
              </div>
            )}
            {(item['Goal / Audience'] || item['Project Type']) && (
              <div className="bg-purple-50 rounded p-2">
                <span className="font-medium text-purple-700">Type:</span>
                <div className="text-gray-700 mt-1">{item['Goal / Audience'] || item['Project Type']}</div>
              </div>
            )}
          </div>
          
          {(item['Description'] || item['Your Contribution'] || item['Summary & Objective']) && (
            <div className="text-gray-700 text-sm leading-relaxed whitespace-pre-line bg-gray-50 rounded p-3">
              {item['Description'] || item['Your Contribution'] || item['Summary & Objective']}
            </div>
          )}
        </div>
      );
    }

    // Education section
    if (['education', 'schooling'].includes(sectionKey)) {
      return (
        <div className="bg-white rounded-lg border-l-4 border-indigo-500 p-5 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {item['Degree Name'] || item['Degree / Course Name'] || 'Degree'}
              </h3>
              <p className="text-indigo-600 font-medium">
                {item['Institution Name'] || 'Institution'}
              </p>
            </div>
            <div className="text-sm text-gray-600 md:text-right mt-2 md:mt-0">
              <div className="bg-indigo-100 text-indigo-700 font-medium px-3 py-1 rounded-full mb-1">
                {item['Duration'] || item['Duration (Start – End or \'Present\')'] || 'Duration'}
              </div>
              {(item['CGPA or Percentage'] || item['CGPA / Percentage']) && (
                <div className="bg-green-100 text-green-700 font-bold px-3 py-1 rounded-full">
                  {item['CGPA or Percentage'] || item['CGPA / Percentage']}
                </div>
              )}
            </div>
          </div>
          
          {/* Additional education fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            {(item['10th Grade School Name & Percentage'] || item['10th School Name']) && (
              <div className="bg-gray-50 rounded p-2">
                <span className="font-medium text-gray-600">Class 10th:</span>
                <div className="text-gray-700">
                  {item['10th Grade School Name & Percentage'] || `${item['10th School Name']} - ${item['10th Percentage']}`}
                </div>
              </div>
            )}
            {(item['12th Grade School Name & Percentage'] || item['12th School Name']) && (
              <div className="bg-gray-50 rounded p-2">
                <span className="font-medium text-gray-600">Class 12th:</span>
                <div className="text-gray-700">
                  {item['12th Grade School Name & Percentage'] || `${item['12th School Name']} - ${item['12th Percentage']}`}
                </div>
              </div>
            )}
          </div>
        </div>
      );
    }

    // Summary section special handling
    if (sectionKey === 'summary') {
      return (
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-6 border border-emerald-200">
          <div className="text-gray-700 leading-relaxed whitespace-pre-line">
            {item['Summary'] || 'Professional summary not provided.'}
          </div>
        </div>
      );
    }

    // Generic rendering for other sections
    return (
      <div className="bg-white rounded-lg border-l-4 border-gray-400 p-5 shadow-sm hover:shadow-md transition-shadow">
        <div className="space-y-3">
          {Object.entries(item).map(([key, value]) => {
            if (!value || !value.toString().trim()) return null;
            
            if (key.toLowerCase().includes('description') || 
                key.toLowerCase().includes('responsibilities') ||
                key.toLowerCase().includes('summary') ||
                value.length > 100) {
              return (
                <div key={key} className="text-gray-700 text-sm leading-relaxed whitespace-pre-line bg-gray-50 rounded p-3">
                  {value}
                </div>
              );
            }
            
            return (
              <div key={key} className="flex">
                <span className="text-sm font-medium text-gray-600 min-w-0 w-32 flex-shrink-0">{key}:</span>
                <span className="text-sm text-gray-700 flex-1">{value}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  // Render skills with clean design
  const renderSkillsSection = (skillKey, title) => {
    const skillData = resumeData[skillKey];
    if (!hasData(skillData, true)) return null;
    
    const skills = [];
    if (Array.isArray(skillData)) {
      skillData.forEach((item) => {
        if (item && typeof item === 'object') {
          Object.values(item).forEach((skill) => {
            if (skill && skill.toString().trim()) {
              skills.push(skill.toString().trim());
            }
          });
        }
      });
    }

    if (skills.length === 0) return null;
    
    return (
      <div key={skillKey} className="mb-6">
        <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-3 pb-1 border-b border-emerald-300">
          {title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span 
              key={index}
              className="inline-block bg-emerald-100 text-emerald-800 text-xs font-medium px-2 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
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
    <div className="max-w-5xl mx-auto bg-white shadow-lg" style={{ minHeight: '297mm' }}>
      {/* Header Section - Fixed and Simplified */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Profile Photo */}
          <div className="flex-shrink-0">
            {headerData['Profile Photo'] ? (
              <img 
                src={headerData['Profile Photo']} 
                alt="Profile" 
                className="w-24 h-24 object-cover rounded-full border-4 border-white shadow-lg"
              />
            ) : (
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                <span className="text-2xl font-bold text-emerald-600">
                  {(headerData['Full Name'] || 'John Doe').charAt(0).toUpperCase()}
                </span>
              </div>
            )}
          </div>
          
          {/* Name and Contact */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              {headerData['Full Name'] || 'Your Full Name'}
            </h1>
            
            <p className="text-xl text-emerald-100 mb-4">
              {headerData['Professional Title'] || 'Professional Title'}
            </p>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              {headerData['Phone Number'] && (
                <div className="flex items-center justify-center md:justify-start">
                  <span className="mr-2">📞</span>
                  {headerData['Phone Number']}
                </div>
              )}
              {headerData['Email Address'] && (
                <div className="flex items-center justify-center md:justify-start">
                  <span className="mr-2">✉️</span>
                  {headerData['Email Address']}
                </div>
              )}
              {headerData['Location (City, Country)'] && (
                <div className="flex items-center justify-center md:justify-start">
                  <span className="mr-2">📍</span>
                  {headerData['Location (City, Country)']}
                </div>
              )}
              {headerData['LinkedIn Profile'] && (
                <div className="flex items-center justify-center md:justify-start">
                  <span className="mr-2">💼</span>
                  LinkedIn Profile
                </div>
              )}
              {headerData['Github'] && (
                <div className="flex items-center justify-center md:justify-start">
                  <span className="mr-2">🔗</span>
                  GitHub Profile
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6">
              {/* Skills Sections */}
              {skillSections.map(skillKey => {
                const section = config.find(s => s.sectionKey === skillKey);
                if (!section) return null;
                return renderSkillsSection(skillKey, section.title);
              })}

              {/* Languages */}
              {renderSkillsSection('languages', 'Languages')}

              {/* Interests */}
              {renderSkillsSection('interests', 'Interests')}
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {mainSections.map((section, index) => (
              <div key={section.sectionKey}>
                {renderMainSection(section)}
                {index < mainSections.length - 1 && <SectionDivider />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupFreshTemplate;