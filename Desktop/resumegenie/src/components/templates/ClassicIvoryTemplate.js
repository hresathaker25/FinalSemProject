import React from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Globe } from "lucide-react";

const ClassicIvoryTemplate = ({ resumeData, selectedCareer }) => {
  // Helper function to safely get nested data
  const getData = (section, field, index = null) => {
    if (!resumeData[section]) return "";
    if (index !== null) {
      if (!Array.isArray(resumeData[section]) || !resumeData[section][index]) return "";
      return resumeData[section][index][field] || "";
    }
    return resumeData[section][field] || "";
  };

  // Helper function to get array data
  const getArrayData = (section) => {
    if (!resumeData[section] || !Array.isArray(resumeData[section])) return [];
    return resumeData[section].filter(item => item && Object.values(item).some(value => value?.toString().trim()));
  };

  // Helper function to check if section has data
  const hasData = (section) => {
    if (!resumeData[section]) return false;
    if (Array.isArray(resumeData[section])) {
      return resumeData[section].some(item => 
        item && Object.values(item).some(value => value?.toString().trim())
      );
    }
    return Object.values(resumeData[section]).some(value => value?.toString().trim());
  };

  // Get header data
  const fullName = getData("header", "Full Name");
  const professionalTitle = getData("header", "Professional Title");
  const phone = getData("header", "Phone Number");
  const email = getData("header", "Email Address");
  const linkedin = getData("header", "LinkedIn Profile");
  const github = getData("header", "Github");
  const portfolio = getData("header", "Portfolio / Content Link");
  const instagram = getData("header", "Instagram / YouTube Handle");
  const location = getData("header", "Location (City, Country)");
  const profilePhoto = getData("header", "Profile Photo");

  const renderContactInfo = () => {
    const contacts = [
      { icon: Mail, value: email, href: `mailto:${email}` },
      { icon: Phone, value: phone, href: `tel:${phone}` },
      { icon: MapPin, value: location },
      { icon: Linkedin, value: linkedin, href: linkedin },
      { icon: Github, value: github, href: github },
      { icon: Globe, value: portfolio, href: portfolio },
      { icon: Globe, value: instagram, href: instagram },
    ].filter(contact => contact.value);

    return contacts.map((contact, index) => {
      const IconComponent = contact.icon;
      return (
        <div key={index} className="flex items-center gap-2 mb-2 text-sm">
          <IconComponent className="w-4 h-4 text-amber-700 flex-shrink-0" />
          {contact.href ? (
            <a 
              href={contact.href} 
              className="text-slate-700 hover:text-amber-700 transition-colors break-all"
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {contact.value}
            </a>
          ) : (
            <span className="text-slate-700 break-words">{contact.value}</span>
          )}
        </div>
      );
    });
  };

  const renderSection = (title, content, className = "") => {
    if (!content || (Array.isArray(content) && content.length === 0)) return null;
    
    return (
      <div className={`mb-6 ${className}`}>
        <h3 className="text-lg font-bold text-amber-800 mb-3 pb-1 border-b-2 border-amber-200 uppercase tracking-wide">
          {title}
        </h3>
        <div className="space-y-3">
          {content}
        </div>
      </div>
    );
  };

  const renderEducation = () => {
    if (!hasData("education")) return null;

    const degreeContent = (
      <div className="space-y-2">
        <div className="flex flex-wrap justify-between items-start gap-2">
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-slate-800 break-words">
              {getData("education", "Degree Name") || getData("education", "Degree / Course Name")}
            </h4>
            <p className="text-slate-600 break-words">
              {getData("education", "Institution Name")}
            </p>
          </div>
          <div className="text-right flex-shrink-0">
            <p className="text-sm text-slate-500 whitespace-nowrap">
              {getData("education", "Duration") || getData("education", "Duration (Start – End or 'Present')")}
            </p>
            {getData("education", "CGPA or Percentage") && (
              <p className="text-sm font-medium text-amber-700">
                {getData("education", "CGPA or Percentage")}
              </p>
            )}
          </div>
        </div>
      </div>
    );

    const schoolingContent = (
      <div className="space-y-1 mt-3 pt-3 border-t border-gray-200">
        {getData("education", "12th Grade School Name & Percentage") && (
          <p className="text-sm text-slate-600">
            <span className="font-medium">12th:</span> {getData("education", "12th Grade School Name & Percentage")}
          </p>
        )}
        {getData("education", "10th Grade School Name & Percentage") && (
          <p className="text-sm text-slate-600">
            <span className="font-medium">10th:</span> {getData("education", "10th Grade School Name & Percentage")}
          </p>
        )}
        {/* Handle separate schooling section for Educational career */}
        {getData("schooling", "12th School Name") && (
          <p className="text-sm text-slate-600">
            <span className="font-medium">12th:</span> {getData("schooling", "12th School Name")} - {getData("schooling", "12th Percentage")}
          </p>
        )}
        {getData("schooling", "10th School Name") && (
          <p className="text-sm text-slate-600">
            <span className="font-medium">10th:</span> {getData("schooling", "10th School Name")} - {getData("schooling", "10th Percentage")}
          </p>
        )}
      </div>
    );

    return (
      <>
        {degreeContent}
        {schoolingContent}
      </>
    );
  };

  const renderWorkExperience = () => {
    const workData = getArrayData("work") || getArrayData("workExperience") || getArrayData("experience") || getArrayData("internships");
    if (workData.length === 0) return null;

    return workData.map((work, index) => (
      <div key={index} className="mb-4 last:mb-0">
        <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-slate-800 break-words">
              {work["Job Title"] || work["Role"] || work["Position"] || "Position"}
            </h4>
            <p className="text-amber-700 font-medium break-words">
              {work["Company Name"] || work["Company / Client"] || work["Organization / Firm"] || work["Hospital / Clinic Name"] || work["School / Institution"]}
            </p>
            {work["Departments Rotated"] && (
              <p className="text-sm text-slate-600 italic">
                Departments: {work["Departments Rotated"]}
              </p>
            )}
          </div>
          <p className="text-sm text-slate-500 flex-shrink-0 whitespace-nowrap">
            {work["Duration"]}
          </p>
        </div>
        <div className="text-sm text-slate-700 space-y-1">
          {(work["Responsibilities & Achievements"] || work["Responsibilities"] || work["Responsibilities & Legal Work"] || work["Key Responsibilities"] || work["Duties"])?.split('\n').map((resp, idx) => (
            resp.trim() && (
              <p key={idx} className="flex items-start gap-2 break-words">
                <span className="text-amber-600 mt-1 flex-shrink-0">•</span>
                <span className="flex-1">{resp.trim()}</span>
              </p>
            )
          ))}
        </div>
      </div>
    ));
  };

  const renderProjects = () => {
    const projectsData = getArrayData("projects");
    if (projectsData.length === 0) return null;

    return projectsData.map((project, index) => (
      <div key={index} className="mb-4 last:mb-0">
        <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-slate-800 break-words">
              {project["Project Title"] || project["Project/Campaign Name"] || project["Title"] || "Project"}
            </h4>
            <div className="flex flex-wrap gap-4 text-sm text-slate-600 mt-1">
              {project["Tools Used"] && (
                <span><span className="font-medium">Tools:</span> {project["Tools Used"]}</span>
              )}
              {project["Tools/Technologies Used"] && (
                <span><span className="font-medium">Tech:</span> {project["Tools/Technologies Used"]}</span>
              )}
              {project["Platform Used"] && (
                <span><span className="font-medium">Platform:</span> {project["Platform Used"]}</span>
              )}
              {project["Goal / Audience"] && (
                <span><span className="font-medium">Goal:</span> {project["Goal / Audience"]}</span>
              )}
              {project["Year / Role"] && (
                <span className="text-amber-700 font-medium">{project["Year / Role"]}</span>
              )}
            </div>
          </div>
        </div>
        
        <div className="text-sm text-slate-700 space-y-2">
          {project["Description"] && (
            <p className="break-words">{project["Description"]}</p>
          )}
          
          {project["Your Contribution"] && (
            <div>
              <span className="font-medium text-slate-800">Contribution:</span>
              <div className="mt-1 space-y-1">
                {project["Your Contribution"].split('\n').map((contrib, idx) => (
                  contrib.trim() && (
                    <p key={idx} className="flex items-start gap-2 break-words">
                      <span className="text-amber-600 mt-1 flex-shrink-0">•</span>
                      <span className="flex-1">{contrib.trim()}</span>
                    </p>
                  )
                ))}
              </div>
            </div>
          )}
          
          {project["Result / Metrics"] && (
            <p><span className="font-medium text-slate-800">Results:</span> {project["Result / Metrics"]}</p>
          )}
          
          {project["Conversion / Engagement Stats"] && (
            <p><span className="font-medium text-slate-800">Stats:</span> {project["Conversion / Engagement Stats"]}</p>
          )}
          
          {project["Key Insights / Results"] && (
            <p><span className="font-medium text-slate-800">Insights:</span> {project["Key Insights / Results"]}</p>
          )}
          
          {project["Topic / Area of Law"] && (
            <p><span className="font-medium text-slate-800">Area:</span> {project["Topic / Area of Law"]}</p>
          )}
          
          {project["Summary & Objective"] && (
            <p><span className="font-medium text-slate-800">Objective:</span> {project["Summary & Objective"]}</p>
          )}
          
          {project["Findings"] && (
            <p><span className="font-medium text-slate-800">Findings:</span> {project["Findings"]}</p>
          )}
        </div>
      </div>
    ));
  };

  const renderSkillsSection = (title, skillKey) => {
    const skillsData = getArrayData(skillKey);
    if (skillsData.length === 0) return null;

    const skills = skillsData
      .map(skill => skill[Object.keys(skill)[0]] || skill["Skill"] || skill["Technical Skills"] || skill["Soft Skills"])
      .filter(skill => skill?.trim());

    if (skills.length === 0) return null;

    return (
      <div className="mb-4">
        <h4 className="font-semibold text-slate-800 mb-2">{title}</h4>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-amber-50 text-amber-800 text-sm rounded-full border border-amber-200 break-words"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    );
  };

  const renderListSection = (title, sectionKey, fieldKey) => {
    const data = getArrayData(sectionKey);
    if (data.length === 0) return null;

    const items = data
      .map(item => item[fieldKey] || item[Object.keys(item)[0]])
      .filter(item => item?.trim());

    if (items.length === 0) return null;

    return items.map((item, index) => (
      <div key={index} className="flex items-start gap-2 mb-2 last:mb-0">
        <span className="text-amber-600 mt-1 flex-shrink-0">•</span>
        <span className="text-sm text-slate-700 break-words">{item}</span>
      </div>
    ));
  };

  const renderCertifications = () => {
    const certData = getArrayData("certifications");
    if (certData.length === 0) return null;

    return certData.map((cert, index) => (
      <div key={index} className="flex flex-wrap justify-between items-center gap-2 mb-2 last:mb-0">
        <span className="text-sm text-slate-700 font-medium break-words flex-1">
          {cert["Course/Certification Name"] || cert["Certification Name"] || cert["Certification Title"]}
        </span>
        <span className="text-sm text-amber-700 flex-shrink-0">
          {cert["Date"] || cert["Year"]}
        </span>
      </div>
    ));
  };

  const renderPublications = () => {
    const pubData = getArrayData("publications");
    if (pubData.length === 0) return null;

    return pubData.map((pub, index) => (
      <div key={index} className="mb-3 last:mb-0">
        <h4 className="font-semibold text-slate-800 break-words">
          {pub["Article / Blog Title"]}
        </h4>
        {pub["Platform (if published)"] && (
          <p className="text-sm text-amber-700 font-medium">
            Published on: {pub["Platform (if published)"]}
          </p>
        )}
        {pub["Link"] && (
          <a 
            href={pub["Link"]} 
            className="text-sm text-blue-600 hover:underline break-all"
            target="_blank" 
            rel="noopener noreferrer"
          >
            {pub["Link"]}
          </a>
        )}
        {pub["Brief Summary"] && (
          <p className="text-sm text-slate-700 mt-1 break-words">
            {pub["Brief Summary"]}
          </p>
        )}
      </div>
    ));
  };

  return (
    <div className="a4-page bg-gradient-to-br from-yellow-50 to-amber-50 text-slate-900 shadow-xl border border-amber-100">
      <div className="p-8 space-y-6">
        {/* Header Section */}
        <div className="border-b-4 border-amber-200 pb-6">
          <div className="flex items-start gap-6">
            {/* Profile Photo */}
            {profilePhoto && (
              <div className="flex-shrink-0">
                <img
                  src={profilePhoto}
                  alt="Profile"
                  className="w-24 h-24 rounded-full object-cover border-4 border-amber-200 shadow-lg"
                />
              </div>
            )}

            {/* Main Header Content */}
            <div className="flex-1 min-w-0">
              <div className="mb-4">
                <h1 className="text-4xl font-bold text-amber-900 mb-2 break-words leading-tight">
                  {fullName || "Your Name"}
                </h1>
                {professionalTitle && (
                  <h2 className="text-xl font-medium text-slate-700 break-words">
                    {professionalTitle}
                  </h2>
                )}
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1">
                {renderContactInfo()}
              </div>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        {hasData("summary") && renderSection(
          "Professional Summary",
          <p className="text-sm text-slate-700 leading-relaxed break-words whitespace-pre-line">
            {getData("summary", "Summary")}
          </p>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Education */}
            {hasData("education") && renderSection("Education", renderEducation())}

            {/* Work Experience */}
            {(hasData("work") || hasData("workExperience") || hasData("experience") || hasData("internships")) && 
             renderSection("Professional Experience", renderWorkExperience())}

            {/* Projects */}
            {hasData("projects") && renderSection("Projects", renderProjects())}

            {/* Legal Publications */}
            {hasData("publications") && renderSection("Publications", renderPublications())}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Technical Skills */}
            {hasData("techSkills") && renderSection(
              "Technical Skills",
              renderSkillsSection("", "techSkills")
            )}

            {/* Core Skills based on career */}
            {hasData("coreLegalSkills") && renderSection(
              "Legal Skills",
              renderSkillsSection("", "coreLegalSkills")
            )}
            
            {hasData("coreSalesSkills") && renderSection(
              "Sales Skills", 
              renderSkillsSection("", "coreSalesSkills")
            )}
            
            {hasData("coreMedicalSkills") && renderSection(
              "Medical Skills",
              renderSkillsSection("", "coreMedicalSkills")
            )}
            
            {hasData("teachingSkills") && renderSection(
              "Teaching Skills",
              <div className="space-y-3 text-sm">
                {getData("teachingSkills", "Core Teaching Skills") && (
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Core Skills</h4>
                    <p className="text-slate-700 break-words">{getData("teachingSkills", "Core Teaching Skills")}</p>
                  </div>
                )}
                {getData("teachingSkills", "Digital Tools") && (
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Digital Tools</h4>
                    <p className="text-slate-700 break-words">{getData("teachingSkills", "Digital Tools")}</p>
                  </div>
                )}
                {getData("teachingSkills", "Soft Skills") && (
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Soft Skills</h4>
                    <p className="text-slate-700 break-words">{getData("teachingSkills", "Soft Skills")}</p>
                  </div>
                )}
              </div>
            )}

            {/* Other Skills */}
            {hasData("softSkills") && renderSection(
              "Soft Skills",
              renderSkillsSection("", "softSkills")
            )}

            {hasData("otherSkills") && renderSection(
              "Additional Skills",
              renderSkillsSection("", "otherSkills")
            )}

            {hasData("skills") && renderSection(
              "Core Skills",
              renderSkillsSection("", "skills")
            )}

            {hasData("tools") && renderSection(
              "Tools & Software",
              renderSkillsSection("", "tools")
            )}

            {hasData("labSkills") && renderSection(
              "Lab Skills",
              renderSkillsSection("", "labSkills")
            )}

            {/* Certifications */}
            {hasData("certifications") && renderSection("Certifications", renderCertifications())}

            {/* Languages */}
            {hasData("languages") && renderSection(
              "Languages",
              renderListSection("Languages", "languages", "Languages")
            )}

            {/* Achievements */}
            {hasData("achievements") && renderSection(
              "Achievements",
              renderListSection("Achievements", "achievements", "Achievements")
            )}

            {/* Activities */}
            {hasData("activities") && renderSection(
              "Activities",
              renderListSection("Activities", "activities", "Activities")
            )}

            {hasData("extracurricular") && renderSection(
              "Extracurricular",
              renderListSection("Extracurricular", "extracurricular", "Activity")
            )}

            {/* Interests */}
            {hasData("interests") && renderSection(
              "Interests",
              renderListSection("Interests", "interests", "Interests")
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassicIvoryTemplate;