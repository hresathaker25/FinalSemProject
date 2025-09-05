import React from "react";

const MinimalEssentialsTemplate = ({ resumeData, selectedCareer }) => {
  // Helper function to safely get data
  const getData = (section, field = null) => {
    if (!resumeData || !resumeData[section]) return field ? "" : [];
    if (field) return resumeData[section][field] || "";
    return Array.isArray(resumeData[section]) ? resumeData[section] : [resumeData[section]];
  };

  // Helper function to get header data
  const getHeaderData = (field) => getData("header", field);

  // Helper function to check if section has data
  const hasData = (section) => {
    const data = getData(section);
    if (Array.isArray(data)) {
      return data.some(item => 
        Object.values(item || {}).some(value => 
          value && value.toString().trim() !== ""
        )
      );
    }
    return Object.values(data || {}).some(value => 
      value && value.toString().trim() !== ""
    );
  };

  // Section components
  const HeaderSection = () => {
    const name = getHeaderData("Full Name");
    const title = getHeaderData("Professional Title");
    const phone = getHeaderData("Phone Number");
    const email = getHeaderData("Email Address");
    const linkedin = getHeaderData("LinkedIn Profile");
    const github = getHeaderData("Github");
    const portfolio = getHeaderData("Portfolio / Content Link");
    const instagram = getHeaderData("Instagram / YouTube Handle");
    const location = getHeaderData("Location (City, Country)");
    const photo = getHeaderData("Profile Photo");

    return (
      <div className="border-b border-gray-300 pb-6 mb-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h1 className="text-3xl font-light text-gray-900 mb-2 tracking-wide">
              {name || "Your Name"}
            </h1>
            {title && (
              <p className="text-lg text-gray-600 font-light mb-4 tracking-wide">
                {title}
              </p>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
              {phone && (
                <div className="flex items-center">
                  <span className="w-16 text-gray-400 text-xs uppercase tracking-wider">Phone</span>
                  <span className="font-light">{phone}</span>
                </div>
              )}
              {email && (
                <div className="flex items-center">
                  <span className="w-16 text-gray-400 text-xs uppercase tracking-wider">Email</span>
                  <span className="font-light">{email}</span>
                </div>
              )}
              {location && (
                <div className="flex items-center">
                  <span className="w-16 text-gray-400 text-xs uppercase tracking-wider">Location</span>
                  <span className="font-light">{location}</span>
                </div>
              )}
              {linkedin && (
                <div className="flex items-center">
                  <span className="w-16 text-gray-400 text-xs uppercase tracking-wider">LinkedIn</span>
                  <span className="font-light text-xs">{linkedin}</span>
                </div>
              )}
              {github && (
                <div className="flex items-center">
                  <span className="w-16 text-gray-400 text-xs uppercase tracking-wider">Github</span>
                  <span className="font-light text-xs">{github}</span>
                </div>
              )}
              {portfolio && (
                <div className="flex items-center">
                  <span className="w-16 text-gray-400 text-xs uppercase tracking-wider">Portfolio</span>
                  <span className="font-light text-xs">{portfolio}</span>
                </div>
              )}
              {instagram && (
                <div className="flex items-center">
                  <span className="w-16 text-gray-400 text-xs uppercase tracking-wider">Social</span>
                  <span className="font-light text-xs">{instagram}</span>
                </div>
              )}
            </div>
          </div>
          
          {photo && (
            <div className="ml-6 flex-shrink-0">
              <img
                src={photo}
                alt="Profile"
                className="w-24 h-24 object-cover rounded-full border-2 border-gray-200"
              />
            </div>
          )}
        </div>
      </div>
    );
  };

  const SectionTitle = ({ title }) => (
    <h3 className="text-sm font-medium text-gray-900 uppercase tracking-wider mb-4 pb-1 border-b border-gray-200">
      {title}
    </h3>
  );

  const SummarySection = () => {
    const summary = getData("summary", "Summary");
    if (!summary) return null;

    return (
      <div className="mb-6">
        <SectionTitle title="Professional Summary" />
        <p className="text-sm text-gray-700 leading-relaxed font-light">
          {summary}
        </p>
      </div>
    );
  };

  const EducationSection = () => {
    if (!hasData("education")) return null;
    const education = getData("education");

    return (
      <div className="mb-6">
        <SectionTitle title="Education" />
        {Array.isArray(education) ? education.filter(edu => edu && Object.keys(edu).length > 0).map((edu, index) => (
          <div key={index} className="mb-4 last:mb-0">
            <div className="flex justify-between items-start mb-1">
              <h4 className="font-medium text-gray-900 text-sm">
                {edu["Degree Name"] || edu["Degree / Course Name"] || ""}
              </h4>
              <span className="text-xs text-gray-500 font-light">
                {edu["Duration"] || edu["Duration (Start – End or 'Present')"] || ""}
              </span>
            </div>
            <p className="text-sm text-gray-600 font-light mb-1">
              {edu["Institution Name"] || ""}
            </p>
            {edu["CGPA or Percentage"] && (
              <p className="text-xs text-gray-500">
                {edu["CGPA or Percentage"]}
              </p>
            )}
          </div>
        )) : education && Object.keys(education).length > 0 ? (
          <div className="mb-4">
            <div className="flex justify-between items-start mb-1">
              <h4 className="font-medium text-gray-900 text-sm">
                {education["Degree Name"] || education["Degree / Course Name"] || ""}
              </h4>
              <span className="text-xs text-gray-500 font-light">
                {education["Duration"] || education["Duration (Start – End or 'Present')"] || ""}
              </span>
            </div>
            <p className="text-sm text-gray-600 font-light mb-1">
              {education["Institution Name"] || ""}
            </p>
            {education["CGPA or Percentage"] && (
              <p className="text-xs text-gray-500">
                {education["CGPA or Percentage"]}
              </p>
            )}
          </div>
        ) : null}
      </div>
    );
  };

  const WorkSection = () => {
    if (!hasData("work") && !hasData("workExperience") && !hasData("experience") && !hasData("internships")) return null;
    
    let work = [];
    if (hasData("work")) work = getData("work");
    else if (hasData("workExperience")) work = getData("workExperience");
    else if (hasData("experience")) work = getData("experience");
    else if (hasData("internships")) work = getData("internships");

    return (
      <div className="mb-6">
        <SectionTitle title="Work Experience" />
        {work.filter(job => job && Object.keys(job).length > 0).map((job, index) => (
          <div key={index} className="mb-4 last:mb-0">
            <div className="flex justify-between items-start mb-1">
              <h4 className="font-medium text-gray-900 text-sm">
                {job["Job Title"] || job["Role"] || job["Position"] || ""}
              </h4>
              <span className="text-xs text-gray-500 font-light">
                {job["Duration"] || ""}
              </span>
            </div>
            <p className="text-sm text-gray-600 font-light mb-2">
              {job["Company Name"] || job["Company / Client"] || job["Organization / Firm"] || job["Hospital / Clinic Name"] || job["School / Institution"] || ""}
            </p>
            {(job["Responsibilities & Achievements"] || job["Responsibilities"] || job["Duties"] || job["Responsibilities & Legal Work"] || job["Key Responsibilities"]) && (
              <div className="text-xs text-gray-700 leading-relaxed">
                {String(job["Responsibilities & Achievements"] || job["Responsibilities"] || job["Duties"] || job["Responsibilities & Legal Work"] || job["Key Responsibilities"])
                  .split('\n')
                  .filter(item => item && item.trim())
                  .map((item, i) => (
                    <p key={i} className="mb-1 font-light">• {item.trim()}</p>
                  ))}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  const ProjectsSection = () => {
    if (!hasData("projects")) return null;
    const projects = getData("projects");

    return (
      <div className="mb-6">
        <SectionTitle title="Projects" />
        {projects.filter(project => project && Object.keys(project).length > 0).map((project, index) => (
          <div key={index} className="mb-4 last:mb-0">
            <div className="flex justify-between items-start mb-1">
              <h4 className="font-medium text-gray-900 text-sm">
                {project["Project Title"] || project["Project/Campaign Name"] || project["Title"] || ""}
              </h4>
              {(project["Year / Role"] || project["Project Type"]) && (
                <span className="text-xs text-gray-500 font-light">
                  {project["Year / Role"] || project["Project Type"]}
                </span>
              )}
            </div>
            
            {(project["Tools Used"] || project["Tools/Technologies Used"] || project["Platform Used"]) && (
              <p className="text-xs text-gray-600 mb-1 font-light">
                <span className="text-gray-400">Tools: </span>
                {project["Tools Used"] || project["Tools/Technologies Used"] || project["Platform Used"]}
              </p>
            )}
            
            {(project["Description"] || project["Summary & Objective"] || project["Goal / Audience"]) && (
              <p className="text-xs text-gray-700 mb-1 leading-relaxed font-light">
                {project["Description"] || project["Summary & Objective"] || project["Goal / Audience"]}
              </p>
            )}
            
            {(project["Your Contribution"] || project["Description / Contribution"] || project["Key Insights / Results"] || project["Findings"]) && (
              <p className="text-xs text-gray-700 leading-relaxed font-light">
                {project["Your Contribution"] || project["Description / Contribution"] || project["Key Insights / Results"] || project["Findings"]}
              </p>
            )}
          </div>
        ))}
      </div>
    );
  };

  const SkillsSection = () => {
    const techSkills = getData("techSkills");
    const softSkills = getData("softSkills");
    const coreSalesSkills = getData("coreSalesSkills");
    const coreLegalSkills = getData("coreLegalSkills");
    const coreMedicalSkills = getData("coreMedicalSkills");
    const labSkills = getData("labSkills");
    const skills = getData("skills");
    const teachingSkills = getData("teachingSkills");

    const hasAnySkills = hasData("techSkills") || hasData("softSkills") || 
                        hasData("coreSalesSkills") || hasData("coreLegalSkills") ||
                        hasData("coreMedicalSkills") || hasData("labSkills") ||
                        hasData("skills") || hasData("teachingSkills");

    if (!hasAnySkills) return null;

    const renderSkillCategory = (skillData, title) => {
      if (!skillData || !skillData.length) return null;
      
      return (
        <div className="mb-3">
          <h5 className="text-xs font-medium text-gray-800 mb-2 uppercase tracking-wide">{title}</h5>
          <div className="text-xs text-gray-700 space-y-1">
            {skillData.map((skill, index) => {
              const skillText = typeof skill === 'string' ? skill : 
                              skill["Technical Skills"] || skill["Soft Skills"] || 
                              skill["Core Sales Skills"] || skill["Core Legal Skill"] ||
                              skill["Skill"] || skill["Tools/Softwares"] || skill["Soft Skill"] ||
                              Object.values(skill)[0];
              
              if (!skillText) return null;
              
              return (
                <span key={index} className="inline-block bg-gray-50 px-2 py-1 rounded text-xs mr-2 mb-1 font-light">
                  {skillText}
                </span>
              );
            })}
          </div>
        </div>
      );
    };

    return (
      <div className="mb-6">
        <SectionTitle title="Skills" />
        {renderSkillCategory(techSkills, "Technical Skills")}
        {renderSkillCategory(softSkills, "Soft Skills")}
        {renderSkillCategory(coreSalesSkills, "Core Sales Skills")}
        {renderSkillCategory(coreLegalSkills, "Legal Skills")}
        {renderSkillCategory(coreMedicalSkills, "Medical Skills")}
        {renderSkillCategory(labSkills, "Lab & Technical Skills")}
        {renderSkillCategory(skills, "Core Skills")}
        
        {/* Handle teaching skills differently as it might be an object */}
        {hasData("teachingSkills") && teachingSkills && typeof teachingSkills === 'object' && (
          <div className="mb-3">
            <h5 className="text-xs font-medium text-gray-800 mb-2 uppercase tracking-wide">Teaching Skills</h5>
            <div className="text-xs text-gray-700 space-y-1">
              {Object.entries(teachingSkills).filter(([key, value]) => value && String(value).trim()).map(([key, value], index) => (
                <div key={index} className="mb-2">
                  <span className="font-medium text-gray-600">{key}: </span>
                  <span className="font-light">{value}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  const CertificationsSection = () => {
    if (!hasData("certifications")) return null;
    const certifications = getData("certifications");

    return (
      <div className="mb-6">
        <SectionTitle title="Certifications" />
        {certifications.filter(cert => cert && Object.keys(cert).length > 0).map((cert, index) => (
          <div key={index} className="mb-2 last:mb-0 flex justify-between items-start">
            <span className="text-sm text-gray-900 font-light">
              {cert["Course/Certification Name"] || cert["Certification Name"] || cert["Certification Title"] || ""}
            </span>
            <span className="text-xs text-gray-500 font-light ml-4">
              {cert["Date"] || cert["Year"] || ""}
            </span>
          </div>
        ))}
      </div>
    );
  };

  const AchievementsSection = () => {
    if (!hasData("achievements")) return null;
    const achievements = getData("achievements");

    return (
      <div className="mb-6">
        <SectionTitle title="Achievements" />
        {achievements.filter(achievement => achievement && Object.keys(achievement).length > 0).map((achievement, index) => (
          <div key={index} className="mb-3 last:mb-0">
            {achievement["Achievement Title"] || achievement["Title"] ? (
              <div>
                <h5 className="text-sm font-medium text-gray-900 mb-1">
                  {achievement["Achievement Title"] || achievement["Title"]}
                </h5>
                {achievement["Description"] && (
                  <p className="text-xs text-gray-700 font-light leading-relaxed">
                    {achievement["Description"]}
                  </p>
                )}
                {achievement["Year"] && (
                  <span className="text-xs text-gray-500 font-light">
                    {achievement["Year"]}
                  </span>
                )}
              </div>
            ) : (
              <p className="text-sm text-gray-700 font-light">
                • {achievement["Achievements"] || achievement["Achievement"] || (Object.values(achievement)[0] || "")}
              </p>
            )}
          </div>
        ))}
      </div>
    );
  };

  const ActivitiesSection = () => {
    if (!hasData("activities") && !hasData("extracurricular")) return null;
    
    let activities = [];
    if (hasData("activities")) activities = getData("activities");
    else if (hasData("extracurricular")) activities = getData("extracurricular");

    return (
      <div className="mb-6">
        <SectionTitle title="Extracurricular Activities" />
        {activities.filter(activity => activity && Object.keys(activity).length > 0).map((activity, index) => (
          <div key={index} className="mb-3 last:mb-0">
            {activity["Activity Title"] ? (
              <div>
                <h5 className="text-sm font-medium text-gray-900 mb-1">
                  {activity["Activity Title"]}
                </h5>
                {activity["Description"] && (
                  <p className="text-xs text-gray-700 font-light leading-relaxed">
                    {activity["Description"]}
                  </p>
                )}
                {activity["Year"] && (
                  <span className="text-xs text-gray-500 font-light">
                    {activity["Year"]}
                  </span>
                )}
              </div>
            ) : (
              <p className="text-sm text-gray-700 font-light">
                • {activity["Activities"] || activity["Activity"] || (Object.values(activity)[0] || "")}
              </p>
            )}
          </div>
        ))}
      </div>
    );
  };

  const LanguagesSection = () => {
    if (!hasData("languages")) return null;
    const languages = getData("languages");

    return (
      <div className="mb-6">
        <SectionTitle title="Languages" />
        <div className="text-sm text-gray-700 space-x-3">
          {languages.filter(lang => lang && (typeof lang === 'string' || Object.keys(lang).length > 0)).map((lang, index) => (
            <span key={index} className="font-light">
              {typeof lang === 'string' ? lang : lang["Languages"] || lang["Language"] || (Object.values(lang)[0] || "")}
              {index < languages.filter(l => l && (typeof l === 'string' || Object.keys(l).length > 0)).length - 1 && " •"}
            </span>
          ))}
        </div>
      </div>
    );
  };

  const InterestsSection = () => {
    if (!hasData("interests")) return null;
    const interests = getData("interests");

    return (
      <div className="mb-6">
        <SectionTitle title="Interests" />
        <div className="text-sm text-gray-700 space-x-3">
          {interests.filter(interest => interest && (typeof interest === 'string' || Object.keys(interest).length > 0)).map((interest, index) => (
            <span key={index} className="font-light">
              {typeof interest === 'string' ? interest : interest["Interests"] || interest["Interest"] || (Object.values(interest)[0] || "")}
              {index < interests.filter(i => i && (typeof i === 'string' || Object.keys(i).length > 0)).length - 1 && " •"}
            </span>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="a4-page bg-white shadow-lg mx-auto" style={{
      width: '210mm',
      minHeight: '297mm',
      padding: '20mm',
      fontFamily: '"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontSize: '12px',
      lineHeight: '1.4',
      color: '#374151',
      boxSizing: 'border-box'
    }}>
      <HeaderSection />
      <SummarySection />
      
      <div className="grid grid-cols-1 gap-6">
        <EducationSection />
        <WorkSection />
        <ProjectsSection />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <SkillsSection />
            <LanguagesSection />
          </div>
          <div>
            <CertificationsSection />
            <AchievementsSection />
            <ActivitiesSection />
            <InterestsSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinimalEssentialsTemplate;