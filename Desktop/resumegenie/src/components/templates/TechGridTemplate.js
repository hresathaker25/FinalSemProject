import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  ExternalLink,
  Code,
  Briefcase,
  GraduationCap,
  Award,
  User,
  Globe,
  Heart,
  FileText,
  Zap,
  Users
} from "lucide-react";

const TechGridTemplate = ({ resumeData, selectedCareer }) => {
  // Helper function to safely get data
  const getFieldValue = (section, field, index = null) => {
    if (!resumeData || !resumeData[section]) return "";
    if (index !== null) {
      return resumeData[section][index]?.[field] || "";
    }
    return resumeData[section][field] || "";
  };

  // Helper function to get array data
  const getArrayData = (section) => {
    if (!resumeData || !resumeData[section]) return [];
    return Array.isArray(resumeData[section]) ? resumeData[section] : [];
  };

  // Helper function to check if section has data
  const hasData = (section, field = null) => {
    if (!resumeData || !resumeData[section]) return false;
    if (field) {
      return Boolean(resumeData[section][field]);
    }
    if (Array.isArray(resumeData[section])) {
      return resumeData[section].length > 0 && 
             resumeData[section].some(item => Object.values(item).some(val => val));
    }
    return Object.values(resumeData[section]).some(val => val);
  };

  // Get header information
  const fullName = getFieldValue("header", "Full Name");
  const professionalTitle = getFieldValue("header", "Professional Title");
  const phone = getFieldValue("header", "Phone Number");
  const email = getFieldValue("header", "Email Address");
  const linkedin = getFieldValue("header", "LinkedIn Profile");
  const github = getFieldValue("header", "Github");
  const location = getFieldValue("header", "Location (City, Country)");
  const profilePhoto = getFieldValue("header", "Profile Photo");

  // Technical skills for grid display
  const techSkills = getArrayData("techSkills");
  const softSkills = getArrayData("softSkills");

  // Contact component
  const ContactInfo = () => (
    <div className="bg-gray-900 text-white p-6 space-y-4">
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
          <User className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-bold text-lg">Contact</h3>
          <div className="w-12 h-0.5 bg-blue-500"></div>
        </div>
      </div>
      
      <div className="space-y-3">
        {phone && (
          <div className="flex items-center space-x-3">
            <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
            <span className="text-sm">{phone}</span>
          </div>
        )}
        {email && (
          <div className="flex items-center space-x-3">
            <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
            <span className="text-sm break-all">{email}</span>
          </div>
        )}
        {location && (
          <div className="flex items-center space-x-3">
            <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0" />
            <span className="text-sm">{location}</span>
          </div>
        )}
        {linkedin && (
          <div className="flex items-center space-x-3">
            <Linkedin className="w-4 h-4 text-blue-400 flex-shrink-0" />
            <span className="text-sm break-all">{linkedin}</span>
          </div>
        )}
        {github && (
          <div className="flex items-center space-x-3">
            <Github className="w-4 h-4 text-blue-400 flex-shrink-0" />
            <span className="text-sm break-all">{github}</span>
          </div>
        )}
      </div>
    </div>
  );

  // Skills Grid Component
  const SkillsGrid = ({ skills, title, icon: Icon, bgColor = "bg-blue-100", textColor = "text-blue-800" }) => {
    if (skills.length === 0) return null;

    const skillItems = skills.flatMap(skill => {
      const skillText = skill["Technical Skills"] || skill["Skill"] || skill["Technical Skill"] || 
                      skill["Core Sales Skills"] || skill["Core Legal Skills"] || skill["Soft Skills"] || 
                      skill["Soft Skill"] || skill["Tools/Softwares"] || skill["Tools/Software"] || 
                      skill["Tool/Software"] || Object.values(skill)[0] || "";
      
      return skillText.split(',').map(s => s.trim()).filter(s => s);
    });

    return (
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className={`w-10 h-10 ${bgColor} rounded-lg flex items-center justify-center`}>
            <Icon className={`w-5 h-5 ${textColor}`} />
          </div>
          <div>
            <h3 className="font-bold text-gray-900">{title}</h3>
            <div className="w-12 h-0.5 bg-blue-500"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-2">
          {skillItems.map((skill, index) => (
            <div
              key={index}
              className={`${bgColor} ${textColor} px-3 py-2 rounded-lg text-sm font-medium text-center`}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Experience/Work Component
  const ExperienceSection = () => {
    const workData = getArrayData("work") || getArrayData("workExperience") || [];
    if (workData.length === 0) return null;

    return (
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
            <Briefcase className="w-5 h-5 text-green-800" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900">Experience</h3>
            <div className="w-12 h-0.5 bg-blue-500"></div>
          </div>
        </div>

        <div className="space-y-6">
          {workData.map((work, index) => {
            const jobTitle = work["Job Title"] || work["Role"] || work["Position"] || "";
            const company = work["Company Name"] || work["Company / Client"] || work["Organization / Firm"] || work["Hospital / Clinic Name"] || "";
            const duration = work["Duration"] || "";
            const responsibilities = work["Responsibilities & Achievements"] || work["Responsibilities"] || work["Duties"] || work["Key Responsibilities"] || work["Responsibilities & Legal Work"] || "";

            if (!jobTitle && !company) return null;

            return (
              <div key={index} className="border-l-4 border-blue-500 pl-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-gray-900">{jobTitle}</h4>
                  {duration && (
                    <span className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">
                      {duration}
                    </span>
                  )}
                </div>
                {company && (
                  <p className="text-blue-600 font-medium mb-2">{company}</p>
                )}
                {responsibilities && (
                  <div className="text-sm text-gray-700">
                    {responsibilities.split('\n').map((resp, respIndex) => (
                      <p key={respIndex} className="mb-1">• {resp.trim()}</p>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  // Projects Component
  const ProjectsSection = () => {
    const projectsData = getArrayData("projects");
    if (projectsData.length === 0) return null;

    return (
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
            <Code className="w-5 h-5 text-purple-800" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900">Projects</h3>
            <div className="w-12 h-0.5 bg-blue-500"></div>
          </div>
        </div>

        <div className="grid gap-4">
          {projectsData.map((project, index) => {
            const title = project["Project Title"] || project["Project/Campaign Name"] || project["Title"] || "";
            const tools = project["Tools Used"] || project["Tools/Technologies Used"] || project["Platform Used"] || project["Tools/Software"] || "";
            const description = project["Description"] || project["Summary & Objective"] || "";
            const contribution = project["Your Contribution"] || project["Key Insights / Results"] || "";

            if (!title) return null;

            return (
              <div key={index} className="bg-gray-50 rounded-lg p-4 border-l-4 border-purple-500">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-gray-900">{title}</h4>
                  <ExternalLink className="w-4 h-4 text-gray-400" />
                </div>
                {tools && (
                  <div className="mb-2">
                    <div className="flex flex-wrap gap-1">
                      {tools.split(',').map((tool, toolIndex) => (
                        <span
                          key={toolIndex}
                          className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full"
                        >
                          {tool.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {description && (
                  <p className="text-sm text-gray-700 mb-2">{description}</p>
                )}
                {contribution && (
                  <p className="text-sm text-gray-600">{contribution}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  // Education Component
  const EducationSection = () => {
    if (!hasData("education")) return null;

    const education = resumeData.education || {};
    const degree = education["Degree Name"] || education["Degree / Course Name"] || "";
    const institution = education["Institution Name"] || "";
    const duration = education["Duration"] || education["Duration (Start – End or 'Present')"] || "";
    const grade = education["CGPA or Percentage"] || education["CGPA / Percentage"] || "";

    return (
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-indigo-800" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900">Education</h3>
            <div className="w-12 h-0.5 bg-blue-500"></div>
          </div>
        </div>

        <div className="space-y-4">
          {(degree || institution) && (
            <div className="border-l-4 border-indigo-500 pl-4">
              <div className="flex justify-between items-start mb-1">
                <h4 className="font-semibold text-gray-900">{degree}</h4>
                {duration && (
                  <span className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">
                    {duration}
                  </span>
                )}
              </div>
              {institution && (
                <p className="text-indigo-600 font-medium mb-1">{institution}</p>
              )}
              {grade && (
                <p className="text-sm text-gray-700">Grade: {grade}</p>
              )}
            </div>
          )}

          {/* 10th and 12th grades */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-gray-200">
            {education["10th Grade School Name & Percentage"] && (
              <div className="text-sm">
                <p className="font-medium text-gray-900">10th Grade</p>
                <p className="text-gray-700">{education["10th Grade School Name & Percentage"]}</p>
              </div>
            )}
            {education["12th Grade School Name & Percentage"] && (
              <div className="text-sm">
                <p className="font-medium text-gray-900">12th Grade</p>
                <p className="text-gray-700">{education["12th Grade School Name & Percentage"]}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Additional sections component
  const AdditionalSections = () => {
    const achievements = getArrayData("achievements");
    const certifications = getArrayData("certifications");
    const languages = getArrayData("languages");
    const interests = getArrayData("interests");

    return (
      <div className="space-y-6">
        {/* Achievements */}
        {achievements.length > 0 && (
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Award className="w-5 h-5 text-yellow-800" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Achievements</h3>
                <div className="w-12 h-0.5 bg-blue-500"></div>
              </div>
            </div>
            <div className="space-y-2">
              {achievements.map((achievement, index) => {
                const text = achievement["Achievements"] || achievement["Achievement"] || achievement["Title"] || "";
                if (!text) return null;
                return (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-gray-700">{text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Certifications */}
        {certifications.length > 0 && (
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-green-800" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Certifications</h3>
                <div className="w-12 h-0.5 bg-blue-500"></div>
              </div>
            </div>
            <div className="space-y-3">
              {certifications.map((cert, index) => {
                const name = cert["Course/Certification Name"] || cert["Certification Name"] || cert["Certification Title"] || "";
                const date = cert["Date"] || cert["Year"] || "";
                if (!name) return null;
                return (
                  <div key={index} className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                    <span className="text-sm font-medium text-gray-900">{name}</span>
                    {date && (
                      <span className="text-xs text-gray-600 bg-white px-2 py-1 rounded">
                        {date}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Languages and Interests Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Languages */}
          {languages.length > 0 && (
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-blue-800" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Languages</h3>
                  <div className="w-12 h-0.5 bg-blue-500"></div>
                </div>
              </div>
              <div className="space-y-2">
                {languages.map((lang, index) => {
                  const text = lang["Languages"] || lang["Language"] || "";
                  if (!text) return null;
                  return (
                    <div key={index} className="bg-blue-50 text-blue-800 px-3 py-2 rounded-lg text-sm">
                      {text}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Interests */}
          {interests.length > 0 && (
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-red-800" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Interests</h3>
                  <div className="w-12 h-0.5 bg-blue-500"></div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => {
                  const text = interest["Interests"] || interest["Interest"] || "";
                  if (!text) return null;
                  return text.split(',').map((item, itemIndex) => (
                    <span
                      key={`${index}-${itemIndex}`}
                      className="bg-red-50 text-red-800 px-3 py-1 rounded-full text-sm"
                    >
                      {item.trim()}
                    </span>
                  ));
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="a4-page bg-white text-gray-900 font-sans leading-relaxed">
      <div className="min-h-full p-8 space-y-8">
        {/* Header Section */}
        <div className="relative bg-gradient-to-r from-gray-900 to-blue-900 text-white p-8 rounded-xl overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-6 gap-4 h-full">
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} className="bg-white rounded"></div>
              ))}
            </div>
          </div>
          
          <div className="relative flex items-center space-x-6">
            {profilePhoto && (
              <div className="w-24 h-24 rounded-xl overflow-hidden border-4 border-blue-400 flex-shrink-0">
                <img
                  src={profilePhoto}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-2">{fullName}</h1>
              {professionalTitle && (
                <p className="text-xl text-blue-300 mb-4">{professionalTitle}</p>
              )}
              
              {/* Professional Summary */}
              {hasData("summary", "Summary") && (
                <p className="text-blue-100 leading-relaxed max-w-3xl">
                  {getFieldValue("summary", "Summary")}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-12 gap-8">
          {/* Left Sidebar - Contact & Skills */}
          <div className="col-span-12 lg:col-span-4 space-y-6">
            <ContactInfo />
            
            {/* Technical Skills */}
            <SkillsGrid
              skills={techSkills}
              title="Technical Skills"
              icon={Code}
              bgColor="bg-blue-100"
              textColor="text-blue-800"
            />
            
            {/* Soft Skills */}
            <SkillsGrid
              skills={softSkills}
              title="Soft Skills"
              icon={Users}
              bgColor="bg-green-100"
              textColor="text-green-800"
            />
          </div>

          {/* Right Content Area */}
          <div className="col-span-12 lg:col-span-8 space-y-6">
            <ExperienceSection />
            <ProjectsSection />
            <EducationSection />
            <AdditionalSections />
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm border-t border-gray-200 pt-4">
          <div className="flex items-center justify-center space-x-2">
            <Zap className="w-4 h-4" />
            <span>Built with TechGrid Template</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechGridTemplate;