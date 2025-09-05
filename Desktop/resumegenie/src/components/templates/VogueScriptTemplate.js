import React from 'react';
 
const VogueScriptTemplate = ({ resumeData = {}, selectedCareer = 'Others' }) => {
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

  // Elegant section divider component
  const SectionDivider = () => (
    <div className="flex items-center my-8">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      <div className="mx-4">
        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
      </div>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
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
          <h2 className="text-xl font-light text-gray-800 tracking-[0.2em] uppercase mb-2 relative">
            {section.title}
            <div className="absolute bottom-0 left-0 w-16 h-px bg-gray-800"></div>
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
        <div className="border-l-2 border-gray-200 pl-6 pb-6 relative">
          <div className="absolute -left-2 top-0 w-4 h-4 bg-white border-2 border-gray-400 rounded-full"></div>
          
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-3">
            <div className="flex-1">
              <h3 className="text-lg font-medium text-gray-800 mb-1">
                {item['Job Title'] || item['Role'] || item['Position'] || 'Position'}
              </h3>
              <p className="text-base text-gray-600 font-light italic mb-2">
                {item['Company Name'] || item['Company / Client'] || item['Organization / Firm'] || item['School / Institution'] || 'Company'}
              </p>
            </div>
            {item['Duration'] && (
              <div className="text-sm text-gray-500 font-light tracking-wide lg:text-right">
                {item['Duration']}
              </div>
            )}
          </div>
          
          {(item['Responsibilities & Achievements'] || item['Responsibilities'] || item['Duties'] || item['Responsibilities & Legal Work'] || item['Key Responsibilities']) && (
            <div className="text-sm text-gray-700 leading-relaxed font-light whitespace-pre-line">
              {item['Responsibilities & Achievements'] || item['Responsibilities'] || item['Duties'] || item['Responsibilities & Legal Work'] || item['Key Responsibilities']}
            </div>
          )}
        </div>
      );
    }

    // Projects sections
    if (sectionKey === 'projects') {
      return (
        <div className="border-l-2 border-gray-200 pl-6 pb-6 relative">
          <div className="absolute -left-2 top-0 w-4 h-4 bg-white border-2 border-gray-400 rounded-full"></div>
          
          <h3 className="text-lg font-medium text-gray-800 mb-2">
            {item['Project Title'] || item['Project/Campaign Name'] || item['Title'] || 'Project'}
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-3 text-sm text-gray-600">
            {(item['Tools Used'] || item['Tools/Technologies Used'] || item['Tools/Softwares'] || item['Tools']) && (
              <div>
                <span className="font-medium text-gray-700">Technologies:</span>
                <div className="font-light italic">{item['Tools Used'] || item['Tools/Technologies Used'] || item['Tools/Softwares'] || item['Tools']}</div>
              </div>
            )}
            {item['Duration'] && (
              <div>
                <span className="font-medium text-gray-700">Duration:</span>
                <div className="font-light italic">{item['Duration']}</div>
              </div>
            )}
            {(item['Goal / Audience'] || item['Project Type']) && (
              <div>
                <span className="font-medium text-gray-700">Scope:</span>
                <div className="font-light italic">{item['Goal / Audience'] || item['Project Type']}</div>
              </div>
            )}
          </div>
          
          {(item['Description'] || item['Your Contribution'] || item['Summary & Objective']) && (
            <div className="text-sm text-gray-700 leading-relaxed font-light whitespace-pre-line">
              {item['Description'] || item['Your Contribution'] || item['Summary & Objective']}
            </div>
          )}
        </div>
      );
    }

    // Education section
    if (['education', 'schooling'].includes(sectionKey)) {
      return (
        <div className="border-l-2 border-gray-200 pl-6 pb-6 relative">
          <div className="absolute -left-2 top-0 w-4 h-4 bg-white border-2 border-gray-400 rounded-full"></div>
          
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-2">
            <div className="flex-1">
              <h3 className="text-lg font-medium text-gray-800 mb-1">
                {item['Degree Name'] || item['Degree / Course Name'] || 'Degree'}
              </h3>
              <p className="text-base text-gray-600 font-light italic">
                {item['Institution Name'] || 'Institution'}
              </p>
            </div>
            <div className="text-sm text-gray-500 font-light tracking-wide lg:text-right">
              <div>{item['Duration'] || item['Duration (Start – End or \'Present\')'] || 'Duration'}</div>
              {(item['CGPA or Percentage'] || item['CGPA / Percentage']) && (
                <div className="font-medium text-gray-700 mt-1">
                  {item['CGPA or Percentage'] || item['CGPA / Percentage']}
                </div>
              )}
            </div>
          </div>
          
          {/* Additional education fields */}
          {(item['10th Grade School Name & Percentage'] || item['10th School Name']) && (
            <div className="text-sm text-gray-600 font-light mt-2">
              <span className="font-medium">Secondary School:</span> {item['10th Grade School Name & Percentage'] || `${item['10th School Name']} - ${item['10th Percentage']}`}
            </div>
          )}
          {(item['12th Grade School Name & Percentage'] || item['12th School Name']) && (
            <div className="text-sm text-gray-600 font-light mt-1">
              <span className="font-medium">Higher Secondary:</span> {item['12th Grade School Name & Percentage'] || `${item['12th School Name']} - ${item['12th Percentage']}`}
            </div>
          )}
        </div>
      );
    }

    // Generic rendering for other sections
    return (
      <div className="border-l-2 border-gray-200 pl-6 pb-6 relative">
        <div className="absolute -left-2 top-0 w-4 h-4 bg-white border-2 border-gray-400 rounded-full"></div>
        
        {Object.entries(item).map(([key, value]) => {
          if (!value || !value.toString().trim()) return null;
          
          if (key.toLowerCase().includes('description') || 
              key.toLowerCase().includes('responsibilities') ||
              key.toLowerCase().includes('summary') ||
              value.length > 100) {
            return (
              <div key={key} className="text-sm text-gray-700 leading-relaxed font-light whitespace-pre-line mb-3">
                {value}
              </div>
            );
          }
          
          return (
            <div key={key} className="text-sm mb-2 text-gray-600">
              <span className="font-medium text-gray-700">{key}:</span>
              <span className="ml-2 font-light">{value}</span>
            </div>
          );
        })}
      </div>
    );
  };

  // Render skills elegantly
  const renderSkillsSection = (skillKey, title) => {
    const skillData = resumeData[skillKey];
    if (!hasData(skillData, true)) return null;
    
    return (
      <div key={skillKey} className="mb-6">
        <h3 className="text-sm font-medium text-gray-700 tracking-[0.15em] uppercase mb-3">
          {title}
        </h3>
        <div className="text-sm text-gray-600 font-light leading-relaxed">
          {skillData.map((item, index) => 
            Object.values(item || {}).map((skill, skillIndex) => {
              if (!skill || !skill.toString().trim()) return null;
              return (
                <span key={`${index}-${skillIndex}`} className="inline-block mr-4 mb-2">
                  {skill}
                  {skillIndex < Object.values(item).length - 1 && skillIndex !== Object.values(item).filter(Boolean).length - 1 && ' •'}
                </span>
              );
            })
          )}
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
    <div className="max-w-5xl mx-auto bg-white shadow-2xl" style={{ minHeight: '297mm' }}>
      {/* Header Section */}
      <div className="relative bg-white p-12 border-b border-gray-100">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
          {/* Profile Photo */}
          <div className="flex-shrink-0 order-2 lg:order-1">
            {headerData['Profile Photo'] ? (
              <div className="relative">
                <img 
                  src={headerData['Profile Photo']} 
                  alt="Profile" 
                  className="w-32 h-32 object-cover border border-gray-200 shadow-lg"
                  style={{ clipPath: 'polygon(0% 0%, 100% 0%, 85% 100%, 0% 85%)' }}
                />
                <div className="absolute inset-0 border border-gray-300" style={{ clipPath: 'polygon(0% 0%, 100% 0%, 85% 100%, 0% 85%)' }}></div>
              </div>
            ) : (
              <div 
                className="w-32 h-32 bg-gray-100 border border-gray-200 shadow-lg flex items-center justify-center"
                style={{ clipPath: 'polygon(0% 0%, 100% 0%, 85% 100%, 0% 85%)' }}
              >
                <span className="text-3xl font-light text-gray-400">
                  {headerData['Full Name'] ? headerData['Full Name'].charAt(0).toUpperCase() : 'V'}
                </span>
              </div>
            )}
          </div>
          
          {/* Name and Title */}
          <div className="flex-1 text-center lg:text-left order-1 lg:order-2">
            <h1 className="text-4xl lg:text-5xl font-thin text-gray-900 mb-3 tracking-wide">
              {headerData['Full Name'] || 'Your Full Name'}
            </h1>
            
            <p className="text-lg text-gray-600 font-light tracking-[0.1em] uppercase mb-6">
              {headerData['Professional Title'] || 'Your Professional Title'}
            </p>
            
            {/* Contact Information Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 text-sm text-gray-600 font-light">
              {headerData['Phone Number'] && (
                <div className="flex items-center justify-center lg:justify-start">
                  <span className="w-1 h-1 bg-gray-400 rounded-full mr-3"></span>
                  {headerData['Phone Number']}
                </div>
              )}
              {headerData['Email Address'] && (
                <div className="flex items-center justify-center lg:justify-start">
                  <span className="w-1 h-1 bg-gray-400 rounded-full mr-3"></span>
                  {headerData['Email Address']}
                </div>
              )}
              {headerData['Location (City, Country)'] && (
                <div className="flex items-center justify-center lg:justify-start">
                  <span className="w-1 h-1 bg-gray-400 rounded-full mr-3"></span>
                  {headerData['Location (City, Country)']}
                </div>
              )}
              {headerData['LinkedIn Profile'] && (
                <div className="flex items-center justify-center lg:justify-start">
                  <span className="w-1 h-1 bg-gray-400 rounded-full mr-3"></span>
                  LinkedIn Profile
                </div>
              )}
              {headerData['Github'] && (
                <div className="flex items-center justify-center lg:justify-start">
                  <span className="w-1 h-1 bg-gray-400 rounded-full mr-3"></span>
                  GitHub Profile
                </div>
              )}
              {(headerData['Portfolio / Content Link'] || headerData['Instagram / YouTube Handle']) && (
                <div className="flex items-center justify-center lg:justify-start">
                  <span className="w-1 h-1 bg-gray-400 rounded-full mr-3"></span>
                  Portfolio
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Elegant line separator */}
        <div className="absolute bottom-0 left-12 right-12 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="p-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
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

      {/* Elegant footer */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-12"></div>
      <div className="h-6"></div>
    </div>
  );
};

export default VogueScriptTemplate;