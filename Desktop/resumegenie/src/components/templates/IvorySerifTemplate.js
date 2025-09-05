import React from "react";

const IvorySerifTemplate = ({ resumeData, selectedCareer }) => {
  // Get section configurations based on career
  const getSectionConfig = () => {
    const configs = {
      Others: [
        'summary', 'education', 'work', 'projects', 'techSkills', 'softSkills',
        'certifications', 'achievements', 'activities', 'languages', 'interests'
      ],
      InformationTechnology: [
        'summary', 'education', 'work', 'projects', 'techSkills', 'softSkills',
        'certifications', 'achievements', 'activities', 'languages', 'interests'
      ],
      Marketing: [
        'summary', 'education', 'techSkills', 'softSkills', 'projects', 'work',
        'certifications', 'achievements', 'activities', 'languages', 'interests'
      ],
      Law: [
        'summary', 'education', 'work', 'projects', 'publications', 'achievements',
        'activities', 'coreLegalSkills', 'otherSkills', 'languages', 'interests'
      ],
      Sales: [
        'summary', 'education', 'work', 'projects', 'certifications', 'achievements',
        'activities', 'coreSalesSkills', 'otherSkills', 'languages', 'interests'
      ],
      Finance: [
        'summary', 'education', 'workExperience', 'projects', 'skills', 'tools',
        'certifications', 'achievements', 'extracurricular', 'languages', 'interests'
      ],
      Medical: [
        'summary', 'education', 'experience', 'projects', 'certifications',
        'achievements', 'activities', 'coreMedicalSkills', 'labSkills', 'softSkills',
        'languages', 'interests'
      ],
      Educational: [
        'summary', 'education', 'schooling', 'internships', 'projects',
        'certifications', 'achievements', 'activities', 'teachingSkills',
        'languages', 'interests'
      ]
    };
    return configs[selectedCareer] || configs.Others;
  };

  // Section title mappings
  const sectionTitles = {
    summary: "Professional Summary",
    education: "Education",
    schooling: "Academic Background",
    work: "Experience",
    workExperience: "Professional Experience",
    experience: "Clinical Experience",
    internships: "Teaching Practice",
    projects: selectedCareer === 'Law' ? "Legal Projects" : 
               selectedCareer === 'Sales' ? "Sales Campaigns" : 
               selectedCareer === 'Marketing' ? "Campaigns" :
               selectedCareer === 'Medical' ? "Research" :
               selectedCareer === 'Finance' ? "Case Studies" : "Projects",
    publications: "Publications",
    techSkills: selectedCareer === 'Marketing' ? "Marketing Skills" : "Technical Skills",
    softSkills: "Core Competencies",
    coreLegalSkills: "Legal Expertise",
    coreSalesSkills: "Sales Excellence",
    coreMedicalSkills: "Clinical Skills",
    labSkills: "Laboratory Skills",
    teachingSkills: "Teaching Competencies",
    skills: "Core Skills",
    tools: "Professional Tools",
    otherSkills: "Additional Skills",
    certifications: "Certifications",
    achievements: "Achievements",
    activities: "Leadership & Activities",
    extracurricular: "Professional Activities",
    languages: "Languages",
    interests: "Interests"
  };

  const headerData = resumeData.header || {};
  const sections = getSectionConfig();

  // Helper function to render array data
  const renderArrayItems = (items, sectionKey) => {
    if (!Array.isArray(items) || items.length === 0) return null;

    return items.map((item, index) => {
      if (!item || typeof item !== 'object') return null;

      const itemEntries = Object.entries(item).filter(([key, value]) => 
        value && value.toString().trim() !== ''
      );

      if (itemEntries.length === 0) return null;

      return (
        <div key={index} className="mb-4 last:mb-0">
          {sectionKey === 'education' && (
            <div>
              {item["Degree Name"] && (
                <div className="font-medium text-gray-800 mb-1">{item["Degree Name"]}</div>
              )}
              {item["Institution Name"] && (
                <div className="text-gray-700 mb-1">{item["Institution Name"]}</div>
              )}
              <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-2">
                {item["Duration"] && <span>{item["Duration"]}</span>}
                {item["CGPA or Percentage"] && <span>Grade: {item["CGPA or Percentage"]}</span>}
              </div>
              {(item["10th Grade School Name & Percentage"] || item["12th Grade School Name & Percentage"]) && (
                <div className="text-xs text-gray-500 space-y-1">
                  {item["10th Grade School Name & Percentage"] && (
                    <div>Secondary: {item["10th Grade School Name & Percentage"]}</div>
                  )}
                  {item["12th Grade School Name & Percentage"] && (
                    <div>Higher Secondary: {item["12th Grade School Name & Percentage"]}</div>
                  )}
                </div>
              )}
            </div>
          )}

          {(sectionKey === 'work' || sectionKey === 'workExperience' || sectionKey === 'experience' || sectionKey === 'internships') && (
            <div>
              {(item["Job Title"] || item["Role"] || item["Position"]) && (
                <div className="font-medium text-gray-800 mb-1">
                  {item["Job Title"] || item["Role"] || item["Position"]}
                </div>
              )}
              {(item["Company Name"] || item["Organization / Firm"] || item["Hospital / Clinic Name"] || item["School / Institution"]) && (
                <div className="text-gray-700 mb-1">
                  {item["Company Name"] || item["Organization / Firm"] || item["Hospital / Clinic Name"] || item["School / Institution"]}
                </div>
              )}
              {item["Duration"] && (
                <div className="text-sm text-gray-600 mb-2">{item["Duration"]}</div>
              )}
              {item["Departments Rotated"] && (
                <div className="text-sm text-gray-600 mb-2">
                  <span className="font-medium">Departments:</span> {item["Departments Rotated"]}
                </div>
              )}
              {(item["Responsibilities & Achievements"] || item["Responsibilities & Legal Work"] || item["Key Responsibilities"] || item["Duties"]) && (
                <div className="text-sm text-gray-700 whitespace-pre-line leading-relaxed">
                  {item["Responsibilities & Achievements"] || item["Responsibilities & Legal Work"] || item["Key Responsibilities"] || item["Duties"]}
                </div>
              )}
            </div>
          )}

          {sectionKey === 'projects' && (
            <div>
              {(item["Project Title"] || item["Project/Campaign Name"] || item["Title"]) && (
                <div className="font-medium text-gray-800 mb-1">
                  {item["Project Title"] || item["Project/Campaign Name"] || item["Title"]}
                </div>
              )}
              <div className="text-sm text-gray-600 space-y-1 mb-2">
                {(item["Tools Used"] || item["Tools/Technologies Used"] || item["Platform Used"] || item["Tools/Softwares"]) && (
                  <div>
                    <span className="font-medium">Tools:</span> {item["Tools Used"] || item["Tools/Technologies Used"] || item["Platform Used"] || item["Tools/Softwares"]}
                  </div>
                )}
                {(item["Goal / Audience"] || item["What You Sold / Promoted"] || item["Year / Role"] || item["Topic / Area of Law"]) && (
                  <div>
                    {item["Goal / Audience"] && <span><span className="font-medium">Target:</span> {item["Goal / Audience"]}</span>}
                    {item["What You Sold / Promoted"] && <span><span className="font-medium">Focus:</span> {item["What You Sold / Promoted"]}</span>}
                    {item["Year / Role"] && <span><span className="font-medium">Role:</span> {item["Year / Role"]}</span>}
                    {item["Topic / Area of Law"] && <span><span className="font-medium">Area:</span> {item["Topic / Area of Law"]}</span>}
                  </div>
                )}
                {(item["Result / Metrics"] || item["Conversion / Engagement Stats"]) && (
                  <div>
                    <span className="font-medium">Results:</span> {item["Result / Metrics"] || item["Conversion / Engagement Stats"]}
                  </div>
                )}
              </div>
              {(item["Description"] || item["Your Contribution"] || item["Description / Contribution"]) && (
                <div className="text-sm text-gray-700 whitespace-pre-line leading-relaxed">
                  {item["Description"] || item["Your Contribution"] || item["Description / Contribution"]}
                </div>
              )}
            </div>
          )}

          {sectionKey === 'publications' && (
            <div>
              {item["Article / Blog Title"] && (
                <div className="font-medium text-gray-800 mb-1">{item["Article / Blog Title"]}</div>
              )}
              {item["Platform (if published)"] && (
                <div className="text-gray-700 mb-1">{item["Platform (if published)"]}</div>
              )}
              {item["Link"] && (
                <div className="text-blue-600 text-sm mb-2 break-all">{item["Link"]}</div>
              )}
              {item["Brief Summary"] && (
                <div className="text-sm text-gray-700 leading-relaxed">{item["Brief Summary"]}</div>
              )}
            </div>
          )}

          {sectionKey === 'teachingSkills' && (
            <div className="space-y-3">
              {item["Core Teaching Skills"] && (
                <div>
                  <div className="font-medium text-gray-800 mb-1">Core Skills</div>
                  <div className="text-sm text-gray-700">{item["Core Teaching Skills"]}</div>
                </div>
              )}
              {item["Digital Tools"] && (
                <div>
                  <div className="font-medium text-gray-800 mb-1">Digital Proficiency</div>
                  <div className="text-sm text-gray-700">{item["Digital Tools"]}</div>
                </div>
              )}
              {item["Soft Skills"] && (
                <div>
                  <div className="font-medium text-gray-800 mb-1">Personal Attributes</div>
                  <div className="text-sm text-gray-700">{item["Soft Skills"]}</div>
                </div>
              )}
            </div>
          )}

          {/* Default handling for simple entries */}
          {!['education', 'work', 'workExperience', 'experience', 'internships', 'projects', 'publications', 'teachingSkills'].includes(sectionKey) && (
            <div>
              {itemEntries.map(([key, value], entryIndex) => (
                <div key={entryIndex} className="text-sm text-gray-700 mb-1 last:mb-0">
                  {itemEntries.length > 1 ? (
                    <span><span className="font-medium">{key}:</span> {value}</span>
                  ) : (
                    <span>{value}</span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      );
    });
  };

  // Helper function to render single object data
  const renderSingleObject = (data, sectionKey) => {
    if (!data || typeof data !== 'object') return null;

    const entries = Object.entries(data).filter(([key, value]) => 
      value && value.toString().trim() !== ''
    );

    if (entries.length === 0) return null;

    if (sectionKey === 'summary') {
      return (
        <div className="text-gray-700 leading-relaxed whitespace-pre-line text-justify">
          {data.Summary || data.summary || entries[0][1]}
        </div>
      );
    }

    return (
      <div className="space-y-2">
        {entries.map(([key, value], index) => (
          <div key={index} className="text-sm text-gray-700">
            {entries.length > 1 ? (
              <span><span className="font-medium">{key}:</span> {value}</span>
            ) : (
              <span>{value}</span>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="a4-page bg-gradient-to-br from-yellow-50 to-amber-50 p-8" 
         style={{ 
           fontFamily: "'Playfair Display', 'Times New Roman', serif",
           minHeight: '297mm',
           width: '210mm',
           boxSizing: 'border-box',
           margin: '0 auto',
           boxShadow: '0 0 10px rgba(0,0,0,0.1)'
         }}>
      
      {/* Elegant Header with Decorative Border */}
      <header className="text-center mb-8 pb-6 border-b-2 border-amber-300 relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
        
        <div className="flex items-center justify-center gap-6">
          {headerData["Profile Photo"] && (
            <div className="flex-shrink-0">
              <img
                src={headerData["Profile Photo"]}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>
          )}
          
          <div className="text-center">
            {headerData["Full Name"] && (
              <h1 className="text-4xl font-bold text-gray-800 mb-2 tracking-wide">
                {headerData["Full Name"]}
              </h1>
            )}
            
            {headerData["Professional Title"] && (
              <h2 className="text-xl text-amber-700 font-medium mb-4 italic">
                {headerData["Professional Title"]}
              </h2>
            )}
            
            {/* Contact Information in Elegant Grid */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-600">
              {headerData["Phone Number"] && (
                <span className="flex items-center gap-1">
                  <span className="w-1 h-1 bg-amber-400 rounded-full"></span>
                  {headerData["Phone Number"]}
                </span>
              )}
              {headerData["Email Address"] && (
                <span className="flex items-center gap-1">
                  <span className="w-1 h-1 bg-amber-400 rounded-full"></span>
                  {headerData["Email Address"]}
                </span>
              )}
              {headerData["LinkedIn Profile"] && (
                <span className="flex items-center gap-1">
                  <span className="w-1 h-1 bg-amber-400 rounded-full"></span>
                  LinkedIn
                </span>
              )}
              {headerData["Github"] && (
                <span className="flex items-center gap-1">
                  <span className="w-1 h-1 bg-amber-400 rounded-full"></span>
                  GitHub
                </span>
              )}
              {headerData["Location (City, Country)"] && (
                <span className="flex items-center gap-1">
                  <span className="w-1 h-1 bg-amber-400 rounded-full"></span>
                  {headerData["Location (City, Country)"]}
                </span>
              )}
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
      </header>

      {/* Main Content in Two Columns */}
      <main className="grid grid-cols-3 gap-8">
        
        {/* Left Column - Key Sections */}
        <div className="col-span-2 space-y-6">
          {sections.slice(0, Math.ceil(sections.length * 0.6)).map(sectionKey => {
            const sectionData = resumeData[sectionKey];
            if (!sectionData) return null;

            const isEmpty = Array.isArray(sectionData) 
              ? sectionData.length === 0 || sectionData.every(item => 
                  !item || Object.values(item).every(val => !val || val.toString().trim() === ''))
              : !sectionData || (typeof sectionData === 'object' && 
                  Object.values(sectionData).every(val => !val || val.toString().trim() === ''));

            if (isEmpty) return null;

            return (
              <section key={sectionKey} className="mb-6">
                <div className="flex items-center mb-4">
                  <h3 className="text-xl font-bold text-gray-800 mr-4">
                    {sectionTitles[sectionKey] || sectionKey.toUpperCase()}
                  </h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-amber-300 to-transparent"></div>
                </div>
                
                <div className="pl-4 border-l-2 border-amber-200">
                  {Array.isArray(sectionData) 
                    ? renderArrayItems(sectionData, sectionKey)
                    : renderSingleObject(sectionData, sectionKey)
                  }
                </div>
              </section>
            );
          })}
        </div>

        {/* Right Column - Supporting Sections */}
        <div className="space-y-6">
          {sections.slice(Math.ceil(sections.length * 0.6)).map(sectionKey => {
            const sectionData = resumeData[sectionKey];
            if (!sectionData) return null;

            const isEmpty = Array.isArray(sectionData) 
              ? sectionData.length === 0 || sectionData.every(item => 
                  !item || Object.values(item).every(val => !val || val.toString().trim() === ''))
              : !sectionData || (typeof sectionData === 'object' && 
                  Object.values(sectionData).every(val => !val || val.toString().trim() === ''));

            if (isEmpty) return null;

            return (
              <section key={sectionKey} className="mb-6">
                <div className="flex items-center mb-3">
                  <h3 className="text-lg font-bold text-gray-800 mr-3">
                    {sectionTitles[sectionKey] || sectionKey.toUpperCase()}
                  </h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-amber-300 to-transparent"></div>
                </div>
                
                <div className="pl-3 border-l border-amber-200">
                  {Array.isArray(sectionData) 
                    ? renderArrayItems(sectionData, sectionKey)
                    : renderSingleObject(sectionData, sectionKey)
                  }
                </div>
              </section>
            );
          })}
        </div>
      </main>

      {/* Decorative Footer */}
      <footer className="mt-8 pt-4 border-t border-amber-200 text-center">
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto"></div>
      </footer>
    </div>
  );
};

export default IvorySerifTemplate;