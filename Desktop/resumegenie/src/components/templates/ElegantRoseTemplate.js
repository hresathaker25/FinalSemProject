import React from "react";

const ElegantRoseTemplate = ({ resumeData, selectedCareer }) => {
  // Get career configuration
  const getCareerConfig = () => {
    const configs = {
      Others: ["summary", "education", "work", "projects", "certifications", "achievements", "activities", "techSkills", "softSkills", "languages", "interests"],
      InformationTechnology: ["summary", "education", "work", "projects", "certifications", "achievements", "activities", "techSkills", "softSkills", "languages", "interests"],
      Marketing: ["summary", "education", "techSkills", "softSkills", "projects", "work", "certifications", "achievements", "activities", "languages", "interests"],
      Law: ["summary", "education", "work", "projects", "publications", "achievements", "activities", "coreLegalSkills", "otherSkills", "languages", "interests"],
      Sales: ["summary", "education", "work", "projects", "certifications", "achievements", "activities", "coreSalesSkills", "otherSkills", "languages", "interests"],
      Finance: ["summary", "education", "workExperience", "projects", "skills", "tools", "certifications", "achievements", "extracurricular", "languages", "interests"],
      Medical: ["summary", "education", "experience", "projects", "certifications", "achievements", "activities", "coreMedicalSkills", "labSkills", "softSkills", "languages", "interests"],
      Educational: ["summary", "education", "schooling", "internships", "projects", "certifications", "achievements", "activities", "teachingSkills", "languages", "interests"]
    };
    return configs[selectedCareer] || configs.Others;
  };

  const sectionOrder = getCareerConfig();

  // Header Section
  const renderHeader = () => {
    const header = resumeData.header || {};
    return (
      <div className="relative bg-gradient-to-r from-rose-50 to-pink-50 p-8 mb-6 border-b-4 border-rose-200">
        <div className="flex items-center gap-6">
          {/* Profile Photo */}
          {header["Profile Photo"] && (
            <div className="flex-shrink-0">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg bg-white">
                <img
                  src={header["Profile Photo"]}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
          
          {/* Name and Title */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-gray-800 mb-2 tracking-tight">
              {header["Full Name"] || "Your Name"}
            </h1>
            <p className="text-xl text-rose-600 font-medium mb-4 tracking-wide">
              {header["Professional Title"] || "Your Professional Title"}
            </p>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              {header["Phone Number"] && (
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-rose-400 rounded-full"></div>
                  <span className="text-gray-700">{header["Phone Number"]}</span>
                </div>
              )}
              {header["Email Address"] && (
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-rose-400 rounded-full"></div>
                  <span className="text-gray-700">{header["Email Address"]}</span>
                </div>
              )}
              {header["LinkedIn Profile"] && (
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-rose-400 rounded-full"></div>
                  <span className="text-gray-700">{header["LinkedIn Profile"]}</span>
                </div>
              )}
              {header["Location (City, Country)"] && (
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-rose-400 rounded-full"></div>
                  <span className="text-gray-700">{header["Location (City, Country)"]}</span>
                </div>
              )}
              {header["Github"] && (
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-rose-400 rounded-full"></div>
                  <span className="text-gray-700">{header["Github"]}</span>
                </div>
              )}
              {header["Portfolio / Content Link"] && (
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-rose-400 rounded-full"></div>
                  <span className="text-gray-700">{header["Portfolio / Content Link"]}</span>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Decorative rose accent */}
        <div className="absolute top-4 right-4 opacity-10">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rose-300 to-pink-400"></div>
        </div>
      </div>
    );
  };

  // Section Title Component
  const SectionTitle = ({ title }) => (
    <div className="relative mb-4">
      <h2 className="text-xl font-bold text-gray-800 uppercase tracking-wider border-b-2 border-rose-200 pb-2 relative">
        {title}
        <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-rose-500"></div>
      </h2>
    </div>
  );

  // Professional Summary
  const renderSummary = () => {
    const summary = resumeData.summary?.Summary;
    if (!summary) return null;

    return (
      <div className="mb-6">
        <SectionTitle title="Professional Summary" />
        <div className="bg-rose-50 p-5 rounded-lg border-l-4 border-rose-400">
          <p className="text-gray-700 leading-relaxed text-justify italic">
            "{summary}"
          </p>
        </div>
      </div>
    );
  };

  // Education Section
  const renderEducation = () => {
    const education = resumeData.education;
    if (!education) return null;

    // Handle both single education object and array of education items
    const eduItems = Array.isArray(education) ? education : [education];
    const validEduItems = eduItems.filter(item => 
      item && Object.values(item).some(val => val && val.toString().trim())
    );

    if (validEduItems.length === 0) return null;

    return (
      <div className="mb-6">
        <SectionTitle title="Education" />
        <div className="space-y-4">
          {validEduItems.map((edu, index) => (
            <div key={index} className="bg-white p-5 rounded-lg shadow-sm border border-rose-100">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-gray-800 text-lg">
                  {edu["Degree Name"] || edu["Degree / Course Name"] || "Degree"}
                </h3>
                <span className="text-rose-600 font-medium text-sm bg-rose-50 px-3 py-1 rounded-full">
                  {edu["Duration"] || edu["Duration (Start – End or 'Present')"] || "Duration"}
                </span>
              </div>
              <p className="text-gray-700 font-medium mb-1">
                {edu["Institution Name"] || "Institution"}
              </p>
              {edu["CGPA or Percentage"] && (
                <p className="text-gray-600 text-sm">
                  Grade: {edu["CGPA or Percentage"]}
                </p>
              )}
              
              {/* School Information */}
              {(edu["10th Grade School Name & Percentage"] || edu["10th School Name"]) && (
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
                    {(edu["10th Grade School Name & Percentage"] || edu["10th School Name"]) && (
                      <div>
                        <span className="font-medium">10th: </span>
                        {edu["10th Grade School Name & Percentage"] || 
                         `${edu["10th School Name"]} - ${edu["10th Percentage"] || ""}`}
                      </div>
                    )}
                    {(edu["12th Grade School Name & Percentage"] || edu["12th School Name"]) && (
                      <div>
                        <span className="font-medium">12th: </span>
                        {edu["12th Grade School Name & Percentage"] || 
                         `${edu["12th School Name"]} - ${edu["12th Percentage"] || ""}`}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Work Experience
  const renderWork = () => {
    const workKey = selectedCareer === 'Finance' ? 'workExperience' : 
                   selectedCareer === 'Medical' ? 'experience' : 
                   selectedCareer === 'Educational' ? 'internships' : 'work';
    const work = resumeData[workKey];
    
    if (!work || !Array.isArray(work)) return null;
    
    const validWork = work.filter(item => 
      item && Object.values(item).some(val => val && val.toString().trim())
    );
    
    if (validWork.length === 0) return null;

    const getWorkTitle = () => {
      switch (selectedCareer) {
        case 'Medical': return 'Clinical Experience';
        case 'Educational': return 'Teaching Experience';
        case 'Finance': return 'Work Experience';
        default: return 'Work Experience';
      }
    };

    return (
      <div className="mb-6">
        <SectionTitle title={getWorkTitle()} />
        <div className="space-y-4">
          {validWork.map((job, index) => (
            <div key={index} className="bg-white p-5 rounded-lg shadow-sm border border-rose-100">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-bold text-gray-800 text-lg">
                    {job["Job Title"] || job["Role"] || job["Position"] || "Position"}
                  </h3>
                  <p className="text-rose-600 font-medium">
                    {job["Company Name"] || job["Organization / Firm"] || job["Hospital / Clinic Name"] || job["School / Institution"] || "Company"}
                  </p>
                </div>
                <span className="text-gray-600 text-sm bg-gray-50 px-3 py-1 rounded-full">
                  {job["Duration"] || "Duration"}
                </span>
              </div>
              
              {/* Responsibilities */}
              {(job["Responsibilities & Achievements"] || job["Responsibilities"] || job["Duties"] || job["Responsibilities & Legal Work"] || job["Key Responsibilities"]) && (
                <div className="text-gray-700">
                  <p className="whitespace-pre-line leading-relaxed">
                    {job["Responsibilities & Achievements"] || job["Responsibilities"] || job["Duties"] || job["Responsibilities & Legal Work"] || job["Key Responsibilities"]}
                  </p>
                </div>
              )}
              
              {/* Additional fields for Medical */}
              {job["Departments Rotated"] && (
                <div className="mt-2">
                  <span className="font-medium text-gray-800">Departments: </span>
                  <span className="text-gray-700">{job["Departments Rotated"]}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Projects Section
  const renderProjects = () => {
    const projects = resumeData.projects;
    if (!projects || !Array.isArray(projects)) return null;
    
    const validProjects = projects.filter(item => 
      item && Object.values(item).some(val => val && val.toString().trim())
    );
    
    if (validProjects.length === 0) return null;

    const getProjectTitle = () => {
      switch (selectedCareer) {
        case 'Law': return 'Legal Projects';
        case 'Marketing': return 'Projects & Campaigns';
        case 'Sales': return 'Sales Projects';
        case 'Finance': return 'Finance Projects';
        case 'Medical': return 'Medical Projects';
        case 'Educational': return 'Teaching Projects';
        default: return 'Projects';
      }
    };

    return (
      <div className="mb-6">
        <SectionTitle title={getProjectTitle()} />
        <div className="space-y-4">
          {validProjects.map((project, index) => (
            <div key={index} className="bg-white p-5 rounded-lg shadow-sm border border-rose-100">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-gray-800 text-lg">
                  {project["Project Title"] || project["Project/Campaign Name"] || project["Title"] || "Project Title"}
                </h3>
                {(project["Year / Role"] || project["Year"]) && (
                  <span className="text-gray-600 text-sm bg-gray-50 px-3 py-1 rounded-full">
                    {project["Year / Role"] || project["Year"]}
                  </span>
                )}
              </div>
              
              {/* Project details grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3 text-sm">
                {project["Tools Used"] && (
                  <div>
                    <span className="font-medium text-rose-600">Tools: </span>
                    <span className="text-gray-700">{project["Tools Used"]}</span>
                  </div>
                )}
                {project["Tools/Technologies Used"] && (
                  <div>
                    <span className="font-medium text-rose-600">Technologies: </span>
                    <span className="text-gray-700">{project["Tools/Technologies Used"]}</span>
                  </div>
                )}
                {project["Goal / Audience"] && (
                  <div>
                    <span className="font-medium text-rose-600">Goal: </span>
                    <span className="text-gray-700">{project["Goal / Audience"]}</span>
                  </div>
                )}
                {project["Platform Used"] && (
                  <div>
                    <span className="font-medium text-rose-600">Platform: </span>
                    <span className="text-gray-700">{project["Platform Used"]}</span>
                  </div>
                )}
                {project["Topic / Area of Law"] && (
                  <div>
                    <span className="font-medium text-rose-600">Area of Law: </span>
                    <span className="text-gray-700">{project["Topic / Area of Law"]}</span>
                  </div>
                )}
                {project["Project Type"] && (
                  <div>
                    <span className="font-medium text-rose-600">Type: </span>
                    <span className="text-gray-700">{project["Project Type"]}</span>
                  </div>
                )}
                {project["Institution / Guide"] && (
                  <div>
                    <span className="font-medium text-rose-600">Institution: </span>
                    <span className="text-gray-700">{project["Institution / Guide"]}</span>
                  </div>
                )}
              </div>
              
              {/* Description */}
              {(project["Description"] || project["Summary & Objective"]) && (
                <div className="mb-3">
                  <p className="text-gray-700 leading-relaxed">
                    {project["Description"] || project["Summary & Objective"]}
                  </p>
                </div>
              )}
              
              {/* Contribution/Results */}
              {(project["Your Contribution"] || project["Key Insights / Results"] || project["Result / Metrics"] || project["Findings"]) && (
                <div className="bg-rose-50 p-3 rounded-lg">
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-medium text-rose-700">Contribution & Results: </span>
                    {project["Your Contribution"] || project["Key Insights / Results"] || project["Result / Metrics"] || project["Findings"]}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Skills Section (Combined)
  const renderSkills = () => {
    const skillSections = [];
    
    // Technical Skills
    const techSkills = resumeData.techSkills || resumeData.skills || resumeData.coreLegalSkills || 
                      resumeData.coreSalesSkills || resumeData.coreMedicalSkills || resumeData.teachingSkills;
    if (techSkills) {
      if (Array.isArray(techSkills)) {
        const validTechSkills = techSkills.filter(item => 
          item && Object.values(item).some(val => val && val.toString().trim())
        );
        if (validTechSkills.length > 0) {
          skillSections.push({
            title: selectedCareer === 'Law' ? 'Legal Skills' : 
                   selectedCareer === 'Sales' ? 'Sales Skills' : 
                   selectedCareer === 'Medical' ? 'Medical Skills' : 
                   selectedCareer === 'Educational' ? 'Teaching Skills' : 'Technical Skills',
            skills: validTechSkills.map(skill => 
              skill["Technical Skills"] || skill["Skill"] || skill["Core Legal Skill"] || 
              skill["Core Sales Skills"] || skill["Core Teaching Skills"] || 
              Object.values(skill)[0]
            ).filter(Boolean)
          });
        }
      } else if (typeof techSkills === 'object') {
        const skillsText = techSkills["Core Teaching Skills"] || Object.values(techSkills)[0];
        if (skillsText) {
          skillSections.push({
            title: 'Teaching Skills',
            skills: skillsText.split(',').map(s => s.trim()).filter(Boolean)
          });
        }
      }
    }

    // Soft Skills
    const softSkills = resumeData.softSkills || resumeData.otherSkills;
    if (softSkills) {
      if (Array.isArray(softSkills)) {
        const validSoftSkills = softSkills.filter(item => 
          item && Object.values(item).some(val => val && val.toString().trim())
        );
        if (validSoftSkills.length > 0) {
          skillSections.push({
            title: 'Soft Skills',
            skills: validSoftSkills.map(skill => 
              skill["Soft Skills"] || skill["Soft Skill"] || Object.values(skill)[0]
            ).filter(Boolean)
          });
        }
      } else if (typeof softSkills === 'object') {
        const skillsText = softSkills["Soft Skills"] || Object.values(softSkills)[0];
        if (skillsText) {
          skillSections.push({
            title: 'Soft Skills',
            skills: skillsText.split(',').map(s => s.trim()).filter(Boolean)
          });
        }
      }
    }

    // Tools/Software
    const tools = resumeData.tools || resumeData.labSkills;
    if (tools && Array.isArray(tools)) {
      const validTools = tools.filter(item => 
        item && Object.values(item).some(val => val && val.toString().trim())
      );
      if (validTools.length > 0) {
        skillSections.push({
          title: selectedCareer === 'Medical' ? 'Lab & Technical Skills' : 'Tools & Software',
          skills: validTools.map(tool => 
            tool["Tool/Software"] || tool["Skill"] || Object.values(tool)[0]
          ).filter(Boolean)
        });
      }
    }

    if (skillSections.length === 0) return null;

    return (
      <div className="mb-6">
        <SectionTitle title="Skills & Expertise" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skillSections.map((section, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-rose-100">
              <h4 className="font-semibold text-rose-600 mb-3 text-center">
                {section.title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {section.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-rose-50 text-rose-700 rounded-full text-sm font-medium border border-rose-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Generic list section renderer
  const renderListSection = (sectionKey, title) => {
    const data = resumeData[sectionKey];
    if (!data || !Array.isArray(data)) return null;
    
    const validData = data.filter(item => 
      item && Object.values(item).some(val => val && val.toString().trim())
    );
    
    if (validData.length === 0) return null;

    return (
      <div className="mb-6">
        <SectionTitle title={title} />
        <div className="bg-white p-5 rounded-lg shadow-sm border border-rose-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {validData.map((item, index) => {
              const value = Object.values(item)[0];
              return value ? (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-rose-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{value}</span>
                </div>
              ) : null;
            })}
          </div>
        </div>
      </div>
    );
  };

  // Certifications
  const renderCertifications = () => {
    const certifications = resumeData.certifications;
    if (!certifications || !Array.isArray(certifications)) return null;
    
    const validCerts = certifications.filter(item => 
      item && Object.values(item).some(val => val && val.toString().trim())
    );
    
    if (validCerts.length === 0) return null;

    return (
      <div className="mb-6">
        <SectionTitle title="Certifications" />
        <div className="bg-white p-5 rounded-lg shadow-sm border border-rose-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {validCerts.map((cert, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-rose-50 rounded-lg">
                <span className="font-medium text-gray-800">
                  {cert["Course/Certification Name"] || cert["Certification Name"] || cert["Certification Title"] || "Certification"}
                </span>
                <span className="text-rose-600 text-sm font-medium">
                  {cert["Date"] || cert["Year"] || "Year"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Achievements
  const renderAchievements = () => {
    const achievements = resumeData.achievements;
    if (!achievements || !Array.isArray(achievements)) return null;
    
    const validAchievements = achievements.filter(item => 
      item && Object.values(item).some(val => val && val.toString().trim())
    );
    
    if (validAchievements.length === 0) return null;

    return (
      <div className="mb-6">
        <SectionTitle title="Achievements & Awards" />
        <div className="space-y-3">
          {validAchievements.map((achievement, index) => {
            const title = achievement["Achievement"] || achievement["Achievements"] || achievement["Title"] || achievement["Achievement Title"];
            const description = achievement["Description"];
            const year = achievement["Year"];
            
            return (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-rose-100 flex items-start gap-4">
                <div className="w-3 h-3 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full mt-1 flex-shrink-0"></div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h4 className="font-semibold text-gray-800">{title}</h4>
                    {year && (
                      <span className="text-rose-600 text-sm font-medium">{year}</span>
                    )}
                  </div>
                  {description && (
                    <p className="text-gray-700 text-sm mt-1 leading-relaxed">{description}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  // Publications (for Law)
  const renderPublications = () => {
    const publications = resumeData.publications;
    if (!publications || !Array.isArray(publications)) return null;
    
    const validPublications = publications.filter(item => 
      item && Object.values(item).some(val => val && val.toString().trim())
    );
    
    if (validPublications.length === 0) return null;

    return (
      <div className="mb-6">
        <SectionTitle title="Publications & Writing" />
        <div className="space-y-4">
          {validPublications.map((pub, index) => (
            <div key={index} className="bg-white p-5 rounded-lg shadow-sm border border-rose-100">
              <h4 className="font-bold text-gray-800 mb-2">
                {pub["Article / Blog Title"] || "Publication Title"}
              </h4>
              {pub["Platform (if published)"] && (
                <p className="text-rose-600 font-medium text-sm mb-2">
                  Published on: {pub["Platform (if published)"]}
                </p>
              )}
              {pub["Link"] && (
                <p className="text-blue-600 text-sm mb-2 break-all">
                  {pub["Link"]}
                </p>
              )}
              {pub["Brief Summary"] && (
                <p className="text-gray-700 leading-relaxed">
                  {pub["Brief Summary"]}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Helper function to render sections based on career type
  const renderSection = (sectionKey) => {
    switch (sectionKey) {
      case 'summary':
        return renderSummary();
      case 'education':
      case 'schooling':
        return renderEducation();
      case 'work':
      case 'workExperience':
      case 'experience':
      case 'internships':
        return renderWork();
      case 'projects':
        return renderProjects();
      case 'publications':
        return renderPublications();
      case 'certifications':
        return renderCertifications();
      case 'achievements':
        return renderAchievements();
      case 'activities':
      case 'extracurricular':
        return renderListSection(sectionKey, 'Extracurricular Activities');
      case 'techSkills':
      case 'softSkills':
      case 'skills':
      case 'tools':
      case 'coreLegalSkills':
      case 'otherSkills':
      case 'coreSalesSkills':
      case 'coreMedicalSkills':
      case 'labSkills':
      case 'teachingSkills':
        return null; // Handled in renderSkills()
      case 'languages':
        return renderListSection(sectionKey, 'Languages');
      case 'interests':
        return renderListSection(sectionKey, 'Interests & Hobbies');
      default:
        return null;
    }
  };

  return (
    <div className="a4-page bg-white shadow-lg mx-auto" style={{
      width: '210mm',
      minHeight: '297mm',
      padding: '20mm',
      margin: '0 auto',
      boxSizing: 'border-box',
      fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif"
    }}>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-gradient-to-br from-rose-300 to-pink-400"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 rounded-full bg-gradient-to-br from-rose-200 to-pink-300"></div>
      </div>
      
      <div className="relative z-10">
        {renderHeader()}
        
        <div className="space-y-6">
          {/* Render sections in order, with skills combined */}
          {sectionOrder.map(sectionKey => {
            if (['techSkills', 'softSkills', 'skills', 'tools', 'coreLegalSkills', 'otherSkills', 'coreSalesSkills', 'coreMedicalSkills', 'labSkills', 'teachingSkills'].includes(sectionKey)) {
              return null; // Skip individual skill sections - they're handled in renderSkills()
            }
            return renderSection(sectionKey);
          })}
          
          {/* Render combined skills section */}
          {renderSkills()}
        </div>
      </div>
    </div>
  );
};

export default ElegantRoseTemplate;