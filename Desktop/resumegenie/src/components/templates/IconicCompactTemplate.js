 import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Github,
  Instagram,
  Briefcase,
  GraduationCap,
  Award,
  Users,
  Lightbulb,
  Code,
  Heart,
  Globe,
  FileText,
  Target,
  Stethoscope,
  Scale,
  TrendingUp,
  BookOpen,
  Star
} from "lucide-react";

const IconicCompactTemplate = ({ resumeData, selectedCareer }) => {
  // Helper function to safely get nested data
  const getFieldValue = (section, field, index = null) => {
    if (!resumeData || !resumeData[section]) return "";
    if (index !== null) {
      return resumeData[section][index]?.[field] || "";
    }
    return resumeData[section][field] || "";
  };

  // Helper function to get array data safely
  const getArrayData = (section) => {
    if (!resumeData || !resumeData[section]) return [];
    return Array.isArray(resumeData[section]) ? resumeData[section] : [];
  };

  // Get profile photo
  const profilePhoto = getFieldValue("header", "Profile Photo");

  // Icon mapping for different careers
  const getCareerIcon = (career) => {
    const iconMap = {
      "InformationTechnology": <Code className="w-5 h-5" />,
      "Marketing": <TrendingUp className="w-5 h-5" />,
      "Law": <Scale className="w-5 h-5" />,
      "Finance": <Target className="w-5 h-5" />,
      "Medical": <Stethoscope className="w-5 h-5" />,
      "Educational": <BookOpen className="w-5 h-5" />,
      "Sales": <TrendingUp className="w-5 h-5" />,
      "Others": <Star className="w-5 h-5" />
    };
    return iconMap[career] || <Star className="w-5 h-5" />;
  };

  // Section rendering helpers
  const renderContactInfo = () => {
    const contacts = [
      { icon: <Phone className="w-4 h-4" />, value: getFieldValue("header", "Phone Number") },
      { icon: <Mail className="w-4 h-4" />, value: getFieldValue("header", "Email Address") },
      { icon: <MapPin className="w-4 h-4" />, value: getFieldValue("header", "Location (City, Country)") },
      { icon: <Linkedin className="w-4 h-4" />, value: getFieldValue("header", "LinkedIn Profile") },
      { icon: <Github className="w-4 h-4" />, value: getFieldValue("header", "Github") },
      { icon: <Instagram className="w-4 h-4" />, value: getFieldValue("header", "Instagram / YouTube Handle") },
      { icon: <FileText className="w-4 h-4" />, value: getFieldValue("header", "Portfolio / Content Link") }
    ].filter(contact => contact.value);

    return contacts.map((contact, index) => (
      <div key={index} className="flex items-center gap-2 text-gray-600 text-sm">
        <span className="text-indigo-600">{contact.icon}</span>
        <span className="truncate">{contact.value}</span>
      </div>
    ));
  };

  const renderSection = (title, icon, children, className = "") => {
    if (!children || (Array.isArray(children) && children.length === 0)) return null;
    
    return (
      <div className={`mb-6 ${className}`}>
        <div className="flex items-center gap-2 mb-3 pb-2 border-b-2 border-indigo-100">
          <span className="text-indigo-600">{icon}</span>
          <h3 className="font-bold text-gray-800 text-sm uppercase tracking-wide">{title}</h3>
        </div>
        <div className="space-y-3">
          {children}
        </div>
      </div>
    );
  };

  const renderEducation = () => {
    const education = resumeData.education;
    if (!education) return null;

    const content = [];

    // Main degree
    if (education["Degree Name"] || education["Institution Name"]) {
      content.push(
        <div key="main-degree" className="border-l-3 border-indigo-200 pl-3">
          <div className="font-semibold text-gray-800 text-sm">
            {education["Degree Name"]}
          </div>
          <div className="text-gray-600 text-sm">{education["Institution Name"]}</div>
          <div className="flex justify-between items-center text-xs text-gray-500 mt-1">
            <span>{education["Duration"] || education["Duration (Start – End or 'Present')"]}</span>
            {education["CGPA or Percentage"] && (
              <span className="font-medium">{education["CGPA or Percentage"]}</span>
            )}
          </div>
        </div>
      );
    }

    // 12th grade
    if (education["12th Grade School Name & Percentage"]) {
      content.push(
        <div key="12th" className="text-xs text-gray-600 pl-3">
          <span className="font-medium">12th:</span> {education["12th Grade School Name & Percentage"]}
        </div>
      );
    }

    // 10th grade
    if (education["10th Grade School Name & Percentage"]) {
      content.push(
        <div key="10th" className="text-xs text-gray-600 pl-3">
          <span className="font-medium">10th:</span> {education["10th Grade School Name & Percentage"]}
        </div>
      );
    }

    return content;
  };

  const renderWorkExperience = () => {
    const workKey = selectedCareer === "Educational" ? "internships" : 
                    selectedCareer === "Medical" ? "experience" : 
                    selectedCareer === "Finance" ? "workExperience" : "work";
    
    const workData = getArrayData(workKey);
    
    return workData.map((work, index) => {
      const title = work["Job Title"] || work["Role"] || work["Position"];
      const company = work["Company Name"] || work["Company / Client"] || work["Organization / Firm"] || work["School / Institution"] || work["Hospital / Clinic Name"];
      const duration = work["Duration"];
      const responsibilities = work["Responsibilities & Achievements"] || work["Responsibilities"] || work["Duties"] || work["Responsibilities & Legal Work"] || work["Key Responsibilities"];
      const departments = work["Departments Rotated"];

      if (!title && !company) return null;

      return (
        <div key={index} className="border-l-3 border-indigo-200 pl-3">
          <div className="font-semibold text-gray-800 text-sm">{title}</div>
          <div className="text-gray-600 text-sm">{company}</div>
          {departments && <div className="text-gray-500 text-xs italic">Departments: {departments}</div>}
          <div className="text-xs text-gray-500 mb-2">{duration}</div>
          {responsibilities && (
            <div className="text-xs text-gray-700 leading-relaxed">
              {responsibilities.split('\n').filter(line => line.trim()).map((line, i) => (
                <div key={i} className="mb-1">• {line.trim()}</div>
              ))}
            </div>
          )}
        </div>
      );
    });
  };

  const renderProjects = () => {
    const projectsData = getArrayData("projects");
    
    return projectsData.map((project, index) => {
      const title = project["Project Title"] || project["Project/Campaign Name"] || project["Title"];
      const tools = project["Tools Used"] || project["Tools/Technologies Used"] || project["Platform Used"];
      const description = project["Description"] || project["Summary & Objective"];
      const contribution = project["Your Contribution"];
      const results = project["Result / Metrics"] || project["Key Insights / Results"] || project["Findings"];
      const goal = project["Goal / Audience"];
      const topic = project["Topic / Area of Law"];
      const year = project["Year / Role"];
      const projectType = project["Project Type"];

      if (!title) return null;

      return (
        <div key={index} className="border-l-3 border-indigo-200 pl-3">
          <div className="font-semibold text-gray-800 text-sm">{title}</div>
          {year && <div className="text-gray-600 text-xs">{year}</div>}
          {topic && <div className="text-indigo-600 text-xs font-medium">{topic}</div>}
          {goal && <div className="text-gray-600 text-xs">Target: {goal}</div>}
          {projectType && <div className="text-gray-500 text-xs">{projectType}</div>}
          {tools && <div className="text-gray-500 text-xs mb-1">Tools: {tools}</div>}
          {description && <div className="text-xs text-gray-700 leading-relaxed mb-1">{description}</div>}
          {contribution && <div className="text-xs text-gray-700 leading-relaxed mb-1">{contribution}</div>}
          {results && <div className="text-xs text-green-700 font-medium">Results: {results}</div>}
        </div>
      );
    });
  };

  const renderSkillsList = (skillsArray, className = "") => {
    const validSkills = skillsArray.filter(skill => skill.trim());
    if (validSkills.length === 0) return null;

    return (
      <div className={`flex flex-wrap gap-1 ${className}`}>
        {validSkills.map((skill, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded text-xs font-medium border border-indigo-100"
          >
            {skill.trim()}
          </span>
        ))}
      </div>
    );
  };

  const renderTechnicalSkills = () => {
    const techSkills = getArrayData("techSkills").map(item => 
      item["Technical Skills"] || item["Skill"] || ""
    );
    return renderSkillsList(techSkills);
  };

  const renderSoftSkills = () => {
    const softSkills = getArrayData("softSkills").map(item => 
      item["Soft Skills"] || item["Soft Skill"] || item["Skill"] || ""
    );
    return renderSkillsList(softSkills);
  };

  const renderCareerSpecificSkills = () => {
    let skills = [];
    
    switch (selectedCareer) {
      case "Law":
        skills = [
          ...getArrayData("coreLegalSkills").map(item => item["Core Legal Skill"] || ""),
          ...getArrayData("otherSkills").map(item => item["Tools / Software"] || "")
        ];
        break;
      case "Sales":
        skills = getArrayData("coreSalesSkills").map(item => item["Core Sales Skills"] || "");
        break;
      case "Finance":
        skills = [
          ...getArrayData("skills").map(item => item["Skill"] || ""),
          ...getArrayData("tools").map(item => item["Tool/Software"] || "")
        ];
        break;
      case "Medical":
        skills = [
          ...getArrayData("coreMedicalSkills").map(item => item["Skill"] || ""),
          ...getArrayData("labSkills").map(item => item["Skill"] || "")
        ];
        break;
      case "Educational":
        if (resumeData.teachingSkills) {
          skills = [
            resumeData.teachingSkills["Core Teaching Skills"] || "",
            resumeData.teachingSkills["Digital Tools"] || ""
          ].filter(skill => skill.trim());
        }
        break;
      case "Marketing":
        skills = getArrayData("techSkills").map(item => item["Skill"] || "");
        break;
      default:
        return null;
    }
    
    return renderSkillsList(skills.filter(skill => skill.trim()));
  };

  const renderSimpleList = (sectionKey, fieldKey, emptyMessage = "") => {
    const items = getArrayData(sectionKey).map(item => 
      item[fieldKey] || item["Achievement"] || item["Activity"] || item["Languages"] || item["Interests"] || item["Language"] || item["Interest"] || ""
    ).filter(item => item.trim());

    if (items.length === 0) return null;

    return (
      <div className="space-y-1">
        {items.map((item, index) => (
          <div key={index} className="text-sm text-gray-700 leading-relaxed">
            • {item}
          </div>
        ))}
      </div>
    );
  };

  const renderCertifications = () => {
    const certs = getArrayData("certifications");
    
    return certs.map((cert, index) => {
      const name = cert["Course/Certification Name"] || cert["Certification Name"] || cert["Certification Title"];
      const date = cert["Date"] || cert["Year"];
      
      if (!name) return null;
      
      return (
        <div key={index} className="flex justify-between items-start text-sm">
          <span className="text-gray-700 flex-1 mr-2">{name}</span>
          {date && <span className="text-gray-500 text-xs whitespace-nowrap">{date}</span>}
        </div>
      );
    });
  };

  return (
    <div className="a4-page bg-white shadow-xl overflow-hidden" style={{
      width: '210mm',
      minHeight: '297mm',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Header Section */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 text-white p-6 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12"></div>
        </div>
        
        <div className="relative z-10 flex items-start gap-6">
          {/* Profile Photo */}
          <div className="flex-shrink-0">
            {profilePhoto ? (
              <div className="w-20 h-20 rounded-full overflow-hidden border-3 border-white shadow-lg">
                <img
                  src={profilePhoto}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="w-20 h-20 rounded-full bg-white/20 border-3 border-white flex items-center justify-center">
                {getCareerIcon(selectedCareer)}
              </div>
            )}
          </div>

          {/* Name and Title */}
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl font-bold mb-1 text-white truncate">
              {getFieldValue("header", "Full Name") || "Your Name"}
            </h1>
            <h2 className="text-lg text-indigo-100 mb-3 truncate">
              {getFieldValue("header", "Professional Title") || "Professional Title"}
            </h2>
            
            {/* Contact Info in Header */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-1">
              {renderContactInfo()}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 grid grid-cols-12 gap-6">
        {/* Left Column */}
        <div className="col-span-7 space-y-6">
          {/* Professional Summary */}
          {getFieldValue("summary", "Summary") && renderSection(
            "Professional Summary",
            <User className="w-4 h-4" />,
            <div className="text-sm text-gray-700 leading-relaxed">
              {getFieldValue("summary", "Summary").split('\n').map((line, index) => (
                <p key={index} className="mb-2 last:mb-0">{line}</p>
              ))}
            </div>
          )}

          {/* Work Experience */}
          {renderSection(
            "Experience",
            <Briefcase className="w-4 h-4" />,
            renderWorkExperience()
          )}

          {/* Projects */}
          {renderSection(
            selectedCareer === "Marketing" ? "Campaigns & Projects" : 
            selectedCareer === "Law" ? "Legal Projects" :
            selectedCareer === "Medical" ? "Research & Projects" :
            selectedCareer === "Educational" ? "Teaching Portfolio" :
            selectedCareer === "Finance" ? "Finance Projects" : "Projects",
            <Lightbulb className="w-4 h-4" />,
            renderProjects()
          )}

          {/* Legal Publications (Law specific) */}
          {selectedCareer === "Law" && renderSection(
            "Publications",
            <FileText className="w-4 h-4" />,
            getArrayData("publications").map((pub, index) => {
              const title = pub["Article / Blog Title"];
              const platform = pub["Platform (if published)"];
              const link = pub["Link"];
              const summary = pub["Brief Summary"];
              
              if (!title) return null;
              
              return (
                <div key={index} className="border-l-3 border-indigo-200 pl-3">
                  <div className="font-semibold text-gray-800 text-sm">{title}</div>
                  {platform && <div className="text-gray-600 text-xs">{platform}</div>}
                  {link && <div className="text-indigo-600 text-xs truncate">{link}</div>}
                  {summary && <div className="text-xs text-gray-700 mt-1 leading-relaxed">{summary}</div>}
                </div>
              );
            })
          )}
        </div>

        {/* Right Column */}
        <div className="col-span-5 space-y-6">
          {/* Education */}
          {renderSection(
            "Education",
            <GraduationCap className="w-4 h-4" />,
            renderEducation()
          )}

          {/* Career-specific Skills */}
          {renderSection(
            selectedCareer === "Law" ? "Legal Skills" :
            selectedCareer === "Sales" ? "Sales Skills" :
            selectedCareer === "Finance" ? "Finance Skills" :
            selectedCareer === "Medical" ? "Medical Skills" :
            selectedCareer === "Educational" ? "Teaching Skills" :
            selectedCareer === "Marketing" ? "Marketing Skills" : "Technical Skills",
            <Code className="w-4 h-4" />,
            renderCareerSpecificSkills()
          )}

          {/* Technical Skills */}
          {selectedCareer !== "Educational" && renderSection(
            "Technical Skills",
            <Code className="w-4 h-4" />,
            renderTechnicalSkills()
          )}

          {/* Soft Skills */}
          {renderSection(
            "Soft Skills",
            <Heart className="w-4 h-4" />,
            renderSoftSkills()
          )}

          {/* Certifications */}
          {renderSection(
            "Certifications",
            <Award className="w-4 h-4" />,
            renderCertifications()
          )}

          {/* Achievements */}
          {renderSection(
            "Achievements",
            <Star className="w-4 h-4" />,
            getArrayData("achievements").map((achievement, index) => {
              const title = achievement["Achievement"] || achievement["Achievements"] || achievement["Title"];
              const description = achievement["Description"];
              const year = achievement["Year"];
              
              if (!title) return null;
              
              return (
                <div key={index} className="text-sm">
                  <div className="text-gray-800 font-medium">{title}</div>
                  {description && <div className="text-gray-600 text-xs mt-1">{description}</div>}
                  {year && <div className="text-gray-500 text-xs">{year}</div>}
                </div>
              );
            })
          )}

          {/* Languages */}
          {renderSection(
            "Languages",
            <Globe className="w-4 h-4" />,
            renderSimpleList("languages", "Languages")
          )}

          {/* Interests */}
          {renderSection(
            "Interests",
            <Heart className="w-4 h-4" />,
            renderSimpleList("interests", "Interests")
          )}

          {/* Extracurricular Activities */}
          {renderSection(
            "Activities",
            <Users className="w-4 h-4" />,
            getArrayData("activities").map((activity, index) => {
              const title = activity["Activities"] || activity["Activity"] || activity["Activity Title"];
              const description = activity["Description"];
              const year = activity["Year"];
              
              if (!title) return null;
              
              return (
                <div key={index} className="text-sm">
                  <div className="text-gray-800 font-medium">{title}</div>
                  {description && <div className="text-gray-600 text-xs mt-1">{description}</div>}
                  {year && <div className="text-gray-500 text-xs">{year}</div>}
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto p-4 bg-gray-50 text-center">
        <div className="text-xs text-gray-400">
          Created with ResumeGenie • Iconic Compact Template
        </div>
      </div>
    </div>
  );
};

// Fix: Import User icon from lucide-react
const User = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

export default IconicCompactTemplate;