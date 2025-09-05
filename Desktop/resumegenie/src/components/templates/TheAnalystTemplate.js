import React from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Globe, ExternalLink, Award, Calendar, Users, TrendingUp, BarChart3, Target } from "lucide-react";

const TheAnalystTemplate = ({ resumeData, selectedCareer }) => {
  const getSectionConfig = (sectionKey) => {
    // Define section configurations for different careers
    const sectionConfigs = {
      Others: {
        work: { title: "Work Experience", icon: <Users className="w-4 h-4" /> },
        projects: { title: "Projects", icon: <Target className="w-4 h-4" /> },
        education: { title: "Education", icon: <Award className="w-4 h-4" /> },
        techSkills: { title: "Technical Skills", icon: <BarChart3 className="w-4 h-4" /> },
        softSkills: { title: "Soft Skills", icon: <TrendingUp className="w-4 h-4" /> },
        certifications: { title: "Certifications", icon: <Award className="w-4 h-4" /> },
        achievements: { title: "Achievements", icon: <Award className="w-4 h-4" /> },
        activities: { title: "Extracurricular Activities", icon: <Users className="w-4 h-4" /> },
        languages: { title: "Languages", icon: <Globe className="w-4 h-4" /> },
        interests: { title: "Interests", icon: <Target className="w-4 h-4" /> }
      },
      InformationTechnology: {
        work: { title: "Work Experience", icon: <Users className="w-4 h-4" /> },
        projects: { title: "Projects", icon: <Target className="w-4 h-4" /> },
        education: { title: "Education", icon: <Award className="w-4 h-4" /> },
        techSkills: { title: "Technical Skills", icon: <BarChart3 className="w-4 h-4" /> },
        softSkills: { title: "Soft Skills", icon: <TrendingUp className="w-4 h-4" /> },
        certifications: { title: "Certifications", icon: <Award className="w-4 h-4" /> },
        achievements: { title: "Achievements", icon: <Award className="w-4 h-4" /> },
        activities: { title: "Extracurricular Activities", icon: <Users className="w-4 h-4" /> },
        languages: { title: "Languages", icon: <Globe className="w-4 h-4" /> },
        interests: { title: "Interests", icon: <Target className="w-4 h-4" /> }
      },
      Marketing: {
        work: { title: "Work Experience", icon: <Users className="w-4 h-4" /> },
        projects: { title: "Projects / Campaigns", icon: <Target className="w-4 h-4" /> },
        education: { title: "Education", icon: <Award className="w-4 h-4" /> },
        techSkills: { title: "Marketing Skills", icon: <TrendingUp className="w-4 h-4" /> },
        softSkills: { title: "Soft Skills", icon: <Users className="w-4 h-4" /> },
        certifications: { title: "Certifications", icon: <Award className="w-4 h-4" /> },
        achievements: { title: "Achievements", icon: <Award className="w-4 h-4" /> },
        activities: { title: "Extracurricular Activities", icon: <Users className="w-4 h-4" /> },
        languages: { title: "Languages", icon: <Globe className="w-4 h-4" /> },
        interests: { title: "Interests", icon: <Target className="w-4 h-4" /> }
      },
      Law: {
        work: { title: "Work Experience", icon: <Users className="w-4 h-4" /> },
        projects: { title: "Legal Projects", icon: <Target className="w-4 h-4" /> },
        publications: { title: "Legal Writing", icon: <ExternalLink className="w-4 h-4" /> },
        education: { title: "Education", icon: <Award className="w-4 h-4" /> },
        coreLegalSkills: { title: "Core Legal Skills", icon: <BarChart3 className="w-4 h-4" /> },
        otherSkills: { title: "Other Skills", icon: <TrendingUp className="w-4 h-4" /> },
        achievements: { title: "Achievements", icon: <Award className="w-4 h-4" /> },
        activities: { title: "Extracurricular Activities", icon: <Users className="w-4 h-4" /> },
        languages: { title: "Languages", icon: <Globe className="w-4 h-4" /> },
        interests: { title: "Interests", icon: <Target className="w-4 h-4" /> }
      },
      Sales: {
        work: { title: "Work Experience", icon: <Users className="w-4 h-4" /> },
        projects: { title: "Sales Campaigns", icon: <TrendingUp className="w-4 h-4" /> },
        education: { title: "Education", icon: <Award className="w-4 h-4" /> },
        coreSalesSkills: { title: "Core Sales Skills", icon: <Target className="w-4 h-4" /> },
        otherSkills: { title: "Other Skills", icon: <BarChart3 className="w-4 h-4" /> },
        certifications: { title: "Certifications", icon: <Award className="w-4 h-4" /> },
        achievements: { title: "Achievements", icon: <Award className="w-4 h-4" /> },
        activities: { title: "Extracurricular Activities", icon: <Users className="w-4 h-4" /> },
        languages: { title: "Languages", icon: <Globe className="w-4 h-4" /> },
        interests: { title: "Interests", icon: <Target className="w-4 h-4" /> }
      },
      Finance: {
        workExperience: { title: "Work Experience", icon: <Users className="w-4 h-4" /> },
        projects: { title: "Finance Projects", icon: <BarChart3 className="w-4 h-4" /> },
        education: { title: "Education", icon: <Award className="w-4 h-4" /> },
        skills: { title: "Core Finance Skills", icon: <TrendingUp className="w-4 h-4" /> },
        tools: { title: "Finance Tools", icon: <BarChart3 className="w-4 h-4" /> },
        certifications: { title: "Certifications", icon: <Award className="w-4 h-4" /> },
        achievements: { title: "Achievements", icon: <Award className="w-4 h-4" /> },
        extracurricular: { title: "Extracurricular Activities", icon: <Users className="w-4 h-4" /> },
        languages: { title: "Languages", icon: <Globe className="w-4 h-4" /> },
        interests: { title: "Interests", icon: <Target className="w-4 h-4" /> }
      },
      Medical: {
        experience: { title: "Clinical Experience", icon: <Users className="w-4 h-4" /> },
        projects: { title: "Medical Projects", icon: <Target className="w-4 h-4" /> },
        education: { title: "Education", icon: <Award className="w-4 h-4" /> },
        coreMedicalSkills: { title: "Core Medical Skills", icon: <BarChart3 className="w-4 h-4" /> },
        labSkills: { title: "Lab & Technical Skills", icon: <TrendingUp className="w-4 h-4" /> },
        softSkills: { title: "Soft Skills", icon: <Users className="w-4 h-4" /> },
        certifications: { title: "Certifications", icon: <Award className="w-4 h-4" /> },
        achievements: { title: "Achievements", icon: <Award className="w-4 h-4" /> },
        activities: { title: "Activities", icon: <Users className="w-4 h-4" /> },
        languages: { title: "Languages", icon: <Globe className="w-4 h-4" /> },
        interests: { title: "Interests", icon: <Target className="w-4 h-4" /> }
      },
      Educational: {
        internships: { title: "Teaching Practice", icon: <Users className="w-4 h-4" /> },
        projects: { title: "Teaching Projects", icon: <Target className="w-4 h-4" /> },
        education: { title: "Education", icon: <Award className="w-4 h-4" /> },
        schooling: { title: "Schooling", icon: <Award className="w-4 h-4" /> },
        teachingSkills: { title: "Teaching Skills", icon: <BarChart3 className="w-4 h-4" /> },
        certifications: { title: "Certifications", icon: <Award className="w-4 h-4" /> },
        achievements: { title: "Achievements", icon: <Award className="w-4 h-4" /> },
        activities: { title: "Activities", icon: <Users className="w-4 h-4" /> },
        languages: { title: "Languages", icon: <Globe className="w-4 h-4" /> },
        interests: { title: "Interests", icon: <Target className="w-4 h-4" /> }
      }
    };

    const careerConfig = sectionConfigs[selectedCareer] || sectionConfigs.Others;
    return careerConfig[sectionKey] || { title: sectionKey, icon: <Target className="w-4 h-4" /> };
  };

  const renderContactInfo = () => {
    const header = resumeData.header || {};
    const contactItems = [
      { icon: <Phone className="w-4 h-4" />, value: header["Phone Number"] },
      { icon: <Mail className="w-4 h-4" />, value: header["Email Address"] },
      { icon: <MapPin className="w-4 h-4" />, value: header["Location (City, Country)"] },
      { icon: <Linkedin className="w-4 h-4" />, value: header["LinkedIn Profile"] },
      { icon: <Github className="w-4 h-4" />, value: header["Github"] },
      { icon: <Globe className="w-4 h-4" />, value: header["Portfolio / Content Link"] },
      { icon: <Globe className="w-4 h-4" />, value: header["Instagram / YouTube Handle"] }
    ];

    return contactItems
      .filter(item => item.value)
      .map((item, index) => (
        <div key={index} className="flex items-center gap-2 text-slate-600">
          <span className="text-slate-500">{item.icon}</span>
          <span className="text-sm">{item.value}</span>
        </div>
      ));
  };

  const renderSection = (sectionKey, data) => {
    if (!data || (Array.isArray(data) && data.length === 0)) return null;
    if (typeof data === 'object' && !Array.isArray(data) && Object.values(data).every(v => !v)) return null;

    const config = getSectionConfig(sectionKey);

    return (
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4 pb-2 border-b border-slate-200">
          <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-slate-700 to-slate-900 rounded-full text-white text-sm">
            {config.icon}
          </div>
          <h3 className="text-lg font-bold text-slate-800 tracking-wide">
            {config.title}
          </h3>
        </div>

        <div className="space-y-4">
          {Array.isArray(data) ? (
            data.map((item, index) => renderSectionItem(sectionKey, item, index))
          ) : (
            renderSectionItem(sectionKey, data)
          )}
        </div>
      </div>
    );
  };

  const renderSectionItem = (sectionKey, item, index) => {
    if (!item || typeof item !== 'object') return null;

    // Handle different section types based on career
    switch (sectionKey) {
      case 'work':
      case 'workExperience':
      case 'experience':
      case 'internships':
        return renderWorkExperience(item, index);
      
      case 'projects':
        return renderProjects(item, index);
      
      case 'publications':
        return renderPublications(item, index);
      
      case 'education':
        return renderEducation(item, index);
      
      case 'schooling':
        return renderSchooling(item);
      
      case 'teachingSkills':
        return renderTeachingSkills(item, index);
      
      case 'certifications':
        return renderCertifications(item, index);
      
      case 'achievements':
        return renderAchievements(item, index);
      
      case 'activities':
      case 'extracurricular':
        return renderActivities(item, index);
      
      case 'summary':
        return renderSummary(item);
      
      default:
        return renderSkillsOrOther(item, index);
    }
  };

  const renderWorkExperience = (item, index) => {
    const title = item["Job Title"] || item["Role"] || item["Position"] || "";
    const company = item["Company Name"] || item["Company / Client"] || item["Organization / Firm"] || item["Hospital / Clinic Name"] || "";
    const duration = item["Duration"] || "";
    const responsibilities = item["Responsibilities & Achievements"] || item["Responsibilities"] || item["Duties"] || item["Responsibilities & Legal Work"] || item["Key Responsibilities"] || "";
    const departments = item["Departments Rotated"] || "";

    if (!title && !company) return null;

    return (
      <div key={index} className="relative pl-6 pb-6 border-l-2 border-slate-200 last:pb-0">
        <div className="absolute -left-2 top-1 w-4 h-4 bg-gradient-to-br from-slate-600 to-slate-800 rounded-full border-2 border-white"></div>
        
        <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg p-5 shadow-sm border border-slate-200">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-3">
            <div>
              <h4 className="font-bold text-slate-900 text-lg mb-1">{title}</h4>
              <p className="text-slate-700 font-medium text-base">{company}</p>
              {departments && (
                <p className="text-slate-600 text-sm mt-1 italic">{departments}</p>
              )}
            </div>
            {duration && (
              <div className="flex items-center gap-1 mt-2 lg:mt-0">
                <Calendar className="w-4 h-4 text-slate-500" />
                <span className="text-slate-600 text-sm font-medium bg-slate-200 px-2 py-1 rounded-full">
                  {duration}
                </span>
              </div>
            )}
          </div>
          
          {responsibilities && (
            <div className="text-slate-700 text-sm leading-relaxed">
              {responsibilities.split('\n').map((line, i) => (
                line.trim() && (
                  <div key={i} className="flex items-start gap-2 mb-2">
                    <div className="w-1.5 h-1.5 bg-slate-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{line.trim()}</span>
                  </div>
                )
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderProjects = (item, index) => {
    const title = item["Project Title"] || item["Project/Campaign Name"] || item["Title"] || "";
    const tools = item["Tools Used"] || item["Tools/Technologies Used"] || item["Platform Used"] || item["Tools/Softwares"] || "";
    const description = item["Description"] || item["Summary & Objective"] || "";
    const contribution = item["Your Contribution"] || "";
    const goal = item["Goal / Audience"] || "";
    const result = item["Result / Metrics"] || item["Key Insights / Results"] || item["Findings"] || "";
    const year = item["Year / Role"] || item["Project Type"] || "";
    const topic = item["Topic / Area of Law"] || "";
    const channels = item["Channels Used"] || "";
    const stats = item["Conversion / Engagement Stats"] || "";
    const whatSold = item["What You Sold / Promoted"] || "";

    if (!title) return null;

    return (
      <div key={index} className="bg-gradient-to-br from-white to-slate-50 rounded-lg p-5 border-l-4 border-slate-600 shadow-sm mb-4">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-3">
          <h4 className="font-bold text-slate-900 text-lg mb-2">{title}</h4>
          {year && (
            <span className="text-slate-600 text-sm bg-slate-100 px-3 py-1 rounded-full font-medium">
              {year}
            </span>
          )}
        </div>

        <div className="space-y-3">
          {goal && (
            <div>
              <span className="text-slate-600 font-medium text-sm">Goal/Audience:</span>
              <p className="text-slate-700 text-sm mt-1">{goal}</p>
            </div>
          )}

          {whatSold && (
            <div>
              <span className="text-slate-600 font-medium text-sm">Product/Service:</span>
              <p className="text-slate-700 text-sm mt-1">{whatSold}</p>
            </div>
          )}

          {topic && (
            <div>
              <span className="text-slate-600 font-medium text-sm">Area of Law:</span>
              <p className="text-slate-700 text-sm mt-1">{topic}</p>
            </div>
          )}

          {description && (
            <div>
              <span className="text-slate-600 font-medium text-sm">Description:</span>
              <p className="text-slate-700 text-sm mt-1 leading-relaxed">{description}</p>
            </div>
          )}

          {channels && (
            <div>
              <span className="text-slate-600 font-medium text-sm">Channels:</span>
              <p className="text-slate-700 text-sm mt-1">{channels}</p>
            </div>
          )}

          {tools && (
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="text-slate-600 font-medium text-sm mr-2">Tools:</span>
              {tools.split(',').map((tool, i) => (
                <span key={i} className="bg-slate-200 text-slate-700 px-2 py-1 rounded-full text-xs font-medium">
                  {tool.trim()}
                </span>
              ))}
            </div>
          )}

          {(result || stats) && (
            <div>
              <span className="text-slate-600 font-medium text-sm">Results:</span>
              <p className="text-slate-700 text-sm mt-1 font-medium">{result || stats}</p>
            </div>
          )}

          {contribution && (
            <div>
              <span className="text-slate-600 font-medium text-sm">My Contribution:</span>
              <p className="text-slate-700 text-sm mt-1 leading-relaxed">{contribution}</p>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderPublications = (item, index) => {
    const title = item["Article / Blog Title"] || "";
    const platform = item["Platform (if published)"] || "";
    const link = item["Link"] || "";
    const summary = item["Brief Summary"] || "";

    if (!title) return null;

    return (
      <div key={index} className="bg-gradient-to-br from-white to-slate-50 rounded-lg p-5 border border-slate-200 shadow-sm mb-4">
        <div className="flex items-start justify-between mb-3">
          <h4 className="font-bold text-slate-900 text-base flex-1">{title}</h4>
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" className="ml-3">
              <ExternalLink className="w-4 h-4 text-slate-500 hover:text-slate-700" />
            </a>
          )}
        </div>
        
        {platform && (
          <p className="text-slate-600 text-sm font-medium mb-2">Published on: {platform}</p>
        )}
        
        {summary && (
          <p className="text-slate-700 text-sm leading-relaxed">{summary}</p>
        )}
      </div>
    );
  };

  const renderEducation = (item, index) => {
    if (index !== undefined) {
      // Multiple education entries
      const degree = item["Degree Name"] || item["Degree / Course Name"] || "";
      const institution = item["Institution Name"] || "";
      const duration = item["Duration"] || item["Duration (Start – End or 'Present')"] || "";
      const grade = item["CGPA or Percentage"] || item["CGPA / Percentage"] || "";

      if (!degree && !institution) return null;

      return (
        <div key={index} className="bg-gradient-to-br from-white to-slate-50 rounded-lg p-5 border border-slate-200 shadow-sm mb-4">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
            <div className="flex-1">
              <h4 className="font-bold text-slate-900 text-base mb-1">{degree}</h4>
              <p className="text-slate-700 font-medium text-sm mb-2">{institution}</p>
            </div>
            <div className="text-right">
              {duration && (
                <div className="flex items-center gap-1 mb-1">
                  <Calendar className="w-4 h-4 text-slate-500" />
                  <span className="text-slate-600 text-sm">{duration}</span>
                </div>
              )}
              {grade && (
                <span className="text-slate-700 font-medium text-sm bg-slate-100 px-2 py-1 rounded-full">
                  {grade}
                </span>
              )}
            </div>
          </div>
        </div>
      );
    } else {
      // Single education entry (Others career)
      const degree = item["Degree Name"] || "";
      const institution = item["Institution Name"] || "";
      const duration = item["Duration"] || "";
      const grade = item["CGPA or Percentage"] || "";
      const school10 = item["10th Grade School Name & Percentage"] || "";
      const school12 = item["12th Grade School Name & Percentage"] || "";

      return (
        <div className="space-y-4">
          {(degree || institution) && (
            <div className="bg-gradient-to-br from-white to-slate-50 rounded-lg p-5 border border-slate-200 shadow-sm">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
                <div className="flex-1">
                  <h4 className="font-bold text-slate-900 text-base mb-1">{degree}</h4>
                  <p className="text-slate-700 font-medium text-sm mb-2">{institution}</p>
                </div>
                <div className="text-right">
                  {duration && (
                    <div className="flex items-center gap-1 mb-1">
                      <Calendar className="w-4 h-4 text-slate-500" />
                      <span className="text-slate-600 text-sm">{duration}</span>
                    </div>
                  )}
                  {grade && (
                    <span className="text-slate-700 font-medium text-sm bg-slate-100 px-2 py-1 rounded-full">
                      {grade}
                    </span>
                  )}
                </div>
              </div>
            </div>
          )}
          
          {school12 && (
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg p-4 border border-slate-200">
              <h4 className="font-medium text-slate-800 text-sm mb-1">12th Grade</h4>
              <p className="text-slate-700 text-sm">{school12}</p>
            </div>
          )}
          
          {school10 && (
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg p-4 border border-slate-200">
              <h4 className="font-medium text-slate-800 text-sm mb-1">10th Grade</h4>
              <p className="text-slate-700 text-sm">{school10}</p>
            </div>
          )}
        </div>
      );
    }
  };

  const renderSchooling = (item) => {
    const school10Name = item["10th School Name"] || "";
    const school10Percentage = item["10th Percentage"] || "";
    const school12Name = item["12th School Name"] || "";
    const school12Percentage = item["12th Percentage"] || "";

    return (
      <div className="space-y-4">
        {(school12Name || school12Percentage) && (
          <div className="bg-gradient-to-br from-white to-slate-50 rounded-lg p-4 border border-slate-200 shadow-sm">
            <h4 className="font-medium text-slate-800 text-sm mb-1">12th Grade</h4>
            <div className="flex justify-between items-center">
              <p className="text-slate-700 text-sm">{school12Name}</p>
              {school12Percentage && (
                <span className="text-slate-700 font-medium text-sm bg-slate-100 px-2 py-1 rounded-full">
                  {school12Percentage}
                </span>
              )}
            </div>
          </div>
        )}
        
        {(school10Name || school10Percentage) && (
          <div className="bg-gradient-to-br from-white to-slate-50 rounded-lg p-4 border border-slate-200 shadow-sm">
            <h4 className="font-medium text-slate-800 text-sm mb-1">10th Grade</h4>
            <div className="flex justify-between items-center">
              <p className="text-slate-700 text-sm">{school10Name}</p>
              {school10Percentage && (
                <span className="text-slate-700 font-medium text-sm bg-slate-100 px-2 py-1 rounded-full">
                  {school10Percentage}
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderTeachingSkills = (item) => {
    const coreSkills = item["Core Teaching Skills"] || "";
    const digitalTools = item["Digital Tools"] || "";
    const softSkills = item["Soft Skills"] || "";

    return (
      <div className="space-y-4">
        {coreSkills && (
          <div className="bg-gradient-to-br from-white to-slate-50 rounded-lg p-4 border border-slate-200 shadow-sm">
            <h4 className="font-medium text-slate-800 text-sm mb-2">Core Teaching Skills</h4>
            <div className="flex flex-wrap gap-2">
              {coreSkills.split(',').map((skill, i) => (
                <span key={i} className="bg-slate-200 text-slate-700 px-2 py-1 rounded-full text-xs font-medium">
                  {skill.trim()}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {digitalTools && (
          <div className="bg-gradient-to-br from-white to-slate-50 rounded-lg p-4 border border-slate-200 shadow-sm">
            <h4 className="font-medium text-slate-800 text-sm mb-2">Digital Tools</h4>
            <div className="flex flex-wrap gap-2">
              {digitalTools.split(',').map((tool, i) => (
                <span key={i} className="bg-slate-200 text-slate-700 px-2 py-1 rounded-full text-xs font-medium">
                  {tool.trim()}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {softSkills && (
          <div className="bg-gradient-to-br from-white to-slate-50 rounded-lg p-4 border border-slate-200 shadow-sm">
            <h4 className="font-medium text-slate-800 text-sm mb-2">Soft Skills</h4>
            <div className="flex flex-wrap gap-2">
              {softSkills.split(',').map((skill, i) => (
                <span key={i} className="bg-slate-200 text-slate-700 px-2 py-1 rounded-full text-xs font-medium">
                  {skill.trim()}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderCertifications = (item, index) => {
    const name = item["Course/Certification Name"] || item["Certification Name"] || item["Certification Title"] || "";
    const date = item["Date"] || item["Year"] || "";

    if (!name) return null;

    return (
      <div key={index} className="flex items-center justify-between bg-gradient-to-br from-white to-slate-50 rounded-lg p-4 border border-slate-200 shadow-sm mb-3">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
          <span className="text-slate-700 font-medium text-sm">{name}</span>
        </div>
        {date && (
          <span className="text-slate-600 text-xs bg-slate-100 px-2 py-1 rounded-full">
            {date}
          </span>
        )}
      </div>
    );
  };

  const renderAchievements = (item, index) => {
    const achievement = item["Achievements"] || item["Achievement"] || item["Title"] || "";
    const description = item["Description"] || "";
    const year = item["Year"] || "";

    if (!achievement) return null;

    return (
      <div key={index} className="bg-gradient-to-br from-white to-slate-50 rounded-lg p-4 border-l-4 border-amber-500 shadow-sm mb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h4 className="font-medium text-slate-800 text-sm mb-1">{achievement}</h4>
            {description && (
              <p className="text-slate-600 text-xs leading-relaxed">{description}</p>
            )}
          </div>
          {year && (
            <span className="text-slate-600 text-xs bg-amber-100 px-2 py-1 rounded-full ml-3">
              {year}
            </span>
          )}
        </div>
      </div>
    );
  };

  const renderActivities = (item, index) => {
    const activity = item["Activities"] || item["Activity"] || item["Activity Title"] || "";
    const description = item["Description"] || "";
    const year = item["Year"] || "";

    if (!activity) return null;
 
    return (
      <div key={index} className="bg-gradient-to-br from-white to-slate-50 rounded-lg p-4 border border-slate-200 shadow-sm mb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h4 className="font-medium text-slate-800 text-sm mb-1">{activity}</h4>
            {description && (
              <p className="text-slate-600 text-xs leading-relaxed">{description}</p>
            )}
          </div>
          {year && (
            <span className="text-slate-600 text-xs bg-slate-100 px-2 py-1 rounded-full ml-3">
              {year}
            </span>
          )}
        </div>
      </div>
    );
  };

  const renderSummary = (item) => {
    const summary = item["Summary"] || "";
    if (!summary) return null;

    return (
      <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg p-5 border border-slate-200 shadow-sm">
        <p className="text-slate-700 text-sm leading-relaxed whitespace-pre-line">
          {summary}
        </p>
      </div>
    );
  };

  const renderSkillsOrOther = (item, index) => {
    // Handle various skill sections and other miscellaneous sections
    const skillKeys = Object.keys(item).filter(key => item[key]);
    
    if (skillKeys.length === 0) return null;

    return (
      <div key={index} className="mb-4">
        {skillKeys.map((key, keyIndex) => {
          const value = item[key];
          if (!value) return null;

          // Check if it's a skills section that should be rendered as tags
          const isSkillSection = key.toLowerCase().includes('skill') || 
                                key.toLowerCase().includes('language') ||
                                key.toLowerCase().includes('interest') ||
                                key.toLowerCase().includes('tool');

          if (isSkillSection && value.includes(',')) {
            return (
              <div key={keyIndex} className="mb-4">
                {key !== 'Languages' && key !== 'Interests' && key !== 'Technical Skills' && key !== 'Soft Skills' && (
                  <h4 className="font-medium text-slate-800 text-sm mb-2">{key}:</h4>
                )}
                <div className="flex flex-wrap gap-2">
                  {value.split(',').map((skill, skillIndex) => (
                    <span key={skillIndex} className="bg-slate-200 text-slate-700 px-3 py-1 rounded-full text-xs font-medium">
                      {skill.trim()}
                    </span>
                  ))}
                </div>
              </div>
            );
          } else {
            return (
              <div key={keyIndex} className="bg-gradient-to-br from-white to-slate-50 rounded-lg p-4 border border-slate-200 shadow-sm mb-3">
                {key !== 'Languages' && key !== 'Interests' && (
                  <h4 className="font-medium text-slate-800 text-sm mb-2">{key}:</h4>
                )}
                <p className="text-slate-700 text-sm leading-relaxed">
                  {value}
                </p>
              </div>
            );
          }
        })}
      </div>
    );
  };

  const header = resumeData.header || {};
  const fullName = header["Full Name"] || "";
  const professionalTitle = header["Professional Title"] || "";
  const profilePhoto = header["Profile Photo"] || "";

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden">
      {/* Header Section */}
      <div className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 p-8 text-white">
        {/* Geometric Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full transform translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full transform -translate-x-24 translate-y-24"></div>
        </div>
        
        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center gap-6">
          {/* Profile Photo */}
          {profilePhoto && (
            <div className="flex-shrink-0">
              <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-xl overflow-hidden border-4 border-white/20 shadow-xl">
                <img
                  src={profilePhoto}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
          
          {/* Name and Title */}
          <div className="flex-1 min-w-0">
            <h1 className="text-3xl lg:text-4xl font-bold mb-2 tracking-tight">
              {fullName || "Your Name"}
            </h1>
            {professionalTitle && (
              <h2 className="text-xl lg:text-2xl text-slate-200 font-light mb-4 tracking-wide">
                {professionalTitle}
              </h2>
            )}
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 text-sm">
              {renderContactInfo()}
            </div>
          </div>

          {/* Decorative Element */}
          <div className="hidden lg:block flex-shrink-0">
            <div className="w-20 h-20 bg-gradient-to-br from-white/20 to-white/5 rounded-xl flex items-center justify-center">
              <BarChart3 className="w-10 h-10 text-white/60" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-1">
            {/* Professional Summary */}
            {resumeData.summary && renderSection('summary', resumeData.summary)}

            {/* Work Experience */}
            {resumeData.work && renderSection('work', resumeData.work)}
            {resumeData.workExperience && renderSection('workExperience', resumeData.workExperience)}
            {resumeData.experience && renderSection('experience', resumeData.experience)}
            {resumeData.internships && renderSection('internships', resumeData.internships)}

            {/* Projects */}
            {resumeData.projects && renderSection('projects', resumeData.projects)}

            {/* Publications (for Law career) */}
            {resumeData.publications && renderSection('publications', resumeData.publications)}

            {/* Education */}
            {resumeData.education && renderSection('education', resumeData.education)}

            {/* Schooling (for Educational career) */}
            {resumeData.schooling && renderSection('schooling', resumeData.schooling)}
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Skills Sections */}
            {resumeData.techSkills && renderSection('techSkills', resumeData.techSkills)}
            {resumeData.softSkills && renderSection('softSkills', resumeData.softSkills)}
            {resumeData.coreLegalSkills && renderSection('coreLegalSkills', resumeData.coreLegalSkills)}
            {resumeData.coreSalesSkills && renderSection('coreSalesSkills', resumeData.coreSalesSkills)}
            {resumeData.coreMedicalSkills && renderSection('coreMedicalSkills', resumeData.coreMedicalSkills)}
            {resumeData.skills && renderSection('skills', resumeData.skills)}
            {resumeData.tools && renderSection('tools', resumeData.tools)}
            {resumeData.labSkills && renderSection('labSkills', resumeData.labSkills)}
            {resumeData.teachingSkills && renderSection('teachingSkills', resumeData.teachingSkills)}
            {resumeData.otherSkills && renderSection('otherSkills', resumeData.otherSkills)}

            {/* Languages */}
            {resumeData.languages && renderSection('languages', resumeData.languages)}

            {/* Certifications */}
            {resumeData.certifications && renderSection('certifications', resumeData.certifications)}

            {/* Achievements */}
            {resumeData.achievements && renderSection('achievements', resumeData.achievements)}

            {/* Activities */}
            {resumeData.activities && renderSection('activities', resumeData.activities)}
            {resumeData.extracurricular && renderSection('extracurricular', resumeData.extracurricular)}

            {/* Interests */}
            {resumeData.interests && renderSection('interests', resumeData.interests)}
          </div>
        </div>
      </div>

      {/* Footer Accent */}
      <div className="h-2 bg-gradient-to-r from-slate-600 via-slate-700 to-slate-800"></div>
    </div>
  );
};

export default TheAnalystTemplate;