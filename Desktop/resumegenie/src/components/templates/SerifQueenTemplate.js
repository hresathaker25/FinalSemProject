import React from "react";
import { MapPin, Phone, Mail, Linkedin, Github, Globe, Award, Briefcase, GraduationCap, Code, User, Star } from "lucide-react";

const SerifQueenTemplate = ({ resumeData, selectedCareer }) => {
  const getFieldValue = (sectionKey, fieldLabel, itemIndex = null) => {
    if (itemIndex !== null) {
      return resumeData[sectionKey]?.[itemIndex]?.[fieldLabel] || "";
    }
    return resumeData[sectionKey]?.[fieldLabel] || "";
  };

  const getArrayData = (sectionKey) => {
    const data = resumeData[sectionKey];
    return Array.isArray(data) ? data : [];
  };

  const hasContent = (sectionKey, itemIndex = null) => {
    if (itemIndex !== null) {
      const item = resumeData[sectionKey]?.[itemIndex];
      return item && Object.values(item).some(val => val && val.toString().trim() !== "");
    }
    const section = resumeData[sectionKey];
    return section && Object.values(section).some(val => val && val.toString().trim() !== "");
  };

  const formatText = (text) => {
    if (!text) return [];
    return text.split('\n').filter(line => line.trim() !== '');
  };

  // Header Section
  const renderHeader = () => {
    const name = getFieldValue("header", "Full Name");
    const title = getFieldValue("header", "Professional Title");
    const phone = getFieldValue("header", "Phone Number");
    const email = getFieldValue("header", "Email Address");
    const linkedin = getFieldValue("header", "LinkedIn Profile");
    const github = getFieldValue("header", "Github");
    const location = getFieldValue("header", "Location (City, Country)");
    const profilePhoto = getFieldValue("header", "Profile Photo");
    const portfolio = getFieldValue("header", "Portfolio / Content Link");
    const instagram = getFieldValue("header", "Instagram / YouTube Handle");

    if (!name && !title && !phone && !email) return null;

    return (
      <div className="serif-queen-header bg-gradient-to-br from-rose-50 via-pink-25 to-purple-50 p-8 rounded-t-2xl border-b-4 border-rose-200">
        <div className="flex items-center gap-8">
          {profilePhoto && (
            <div className="flex-shrink-0">
              <img
                src={profilePhoto}
                alt="Profile"
                className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg ring-2 ring-rose-200"
              />
            </div>
          )}
          
          <div className="flex-1 min-w-0">
            {name && (
              <h1 className="text-4xl font-serif font-bold text-gray-800 mb-2 leading-tight">
                {name}
              </h1>
            )}
            {title && (
              <h2 className="text-xl font-serif text-rose-600 mb-4 font-medium italic">
                {title}
              </h2>
            )}
            
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              {phone && (
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-rose-500 flex-shrink-0" />
                  <span className="font-medium">{phone}</span>
                </div>
              )}
              {email && (
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-rose-500 flex-shrink-0" />
                  <span className="break-all font-medium">{email}</span>
                </div>
              )}
              {location && (
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-rose-500 flex-shrink-0" />
                  <span className="font-medium">{location}</span>
                </div>
              )}
              {linkedin && (
                <div className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4 text-rose-500 flex-shrink-0" />
                  <span className="break-all font-medium text-blue-600">{linkedin}</span>
                </div>
              )}
              {github && (
                <div className="flex items-center gap-2">
                  <Github className="w-4 h-4 text-rose-500 flex-shrink-0" />
                  <span className="break-all font-medium text-purple-600">{github}</span>
                </div>
              )}
              {portfolio && (
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-rose-500 flex-shrink-0" />
                  <span className="break-all font-medium text-green-600">{portfolio}</span>
                </div>
              )}
              {instagram && (
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-rose-500 flex-shrink-0" />
                  <span className="break-all font-medium text-pink-600">{instagram}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Professional Summary
  const renderSummary = () => {
    if (!hasContent("summary")) return null;
    
    const summary = getFieldValue("summary", "Summary");
    if (!summary) return null;

    return (
      <div className="serif-queen-section mb-8">
        <h3 className="serif-queen-section-title text-2xl font-serif font-bold text-gray-800 mb-4 pb-2 border-b-2 border-rose-200 flex items-center gap-2">
          <User className="w-6 h-6 text-rose-500" />
          Professional Summary
        </h3>
        <div className="bg-rose-25 p-6 rounded-xl border border-rose-100">
          {formatText(summary).map((line, index) => (
            <p key={index} className="text-gray-700 leading-relaxed font-serif text-base mb-2 last:mb-0">
              {line}
            </p>
          ))}
        </div>
      </div>
    );
  };

  // Education Section
  const renderEducation = () => {
    if (!hasContent("education")) return null;

    const degree = getFieldValue("education", "Degree Name") || getFieldValue("education", "Degree / Course Name");
    const institution = getFieldValue("education", "Institution Name");
    const duration = getFieldValue("education", "Duration") || getFieldValue("education", "Duration (Start – End or 'Present')");
    const grade = getFieldValue("education", "CGPA or Percentage") || getFieldValue("education", "CGPA / Percentage");
    const school10 = getFieldValue("education", "10th Grade School Name & Percentage") || getFieldValue("education", "10th School Name");
    const grade10 = getFieldValue("education", "10th Percentage");
    const school12 = getFieldValue("education", "12th Grade School Name & Percentage") || getFieldValue("education", "12th School Name");
    const grade12 = getFieldValue("education", "12th Percentage");

    const hasMainEducation = degree || institution || duration || grade;
    const hasSchooling = school10 || school12 || grade10 || grade12;

    if (!hasMainEducation && !hasSchooling) return null;

    return (
      <div className="serif-queen-section mb-8">
        <h3 className="serif-queen-section-title text-2xl font-serif font-bold text-gray-800 mb-4 pb-2 border-b-2 border-rose-200 flex items-center gap-2">
          <GraduationCap className="w-6 h-6 text-rose-500" />
          Education
        </h3>
        
        {hasMainEducation && (
          <div className="bg-gradient-to-r from-rose-25 to-pink-25 p-6 rounded-xl border border-rose-100 mb-4">
            {degree && (
              <h4 className="text-lg font-serif font-bold text-gray-800 mb-1">{degree}</h4>
            )}
            {institution && (
              <p className="text-rose-600 font-medium font-serif mb-2">{institution}</p>
            )}
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              {duration && (
                <span className="bg-white px-3 py-1 rounded-full font-medium">{duration}</span>
              )}
              {grade && (
                <span className="bg-rose-100 text-rose-700 px-3 py-1 rounded-full font-medium">{grade}</span>
              )}
            </div>
          </div>
        )}

        {hasSchooling && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(school10 || grade10) && (
              <div className="bg-white p-4 rounded-lg border border-rose-100 shadow-sm">
                <h5 className="font-serif font-semibold text-gray-800 mb-1">10th Grade</h5>
                {school10 && (
                  <p className="text-gray-600 text-sm mb-1">{school10}</p>
                )}
                {grade10 && (
                  <span className="bg-rose-50 text-rose-600 px-2 py-1 rounded text-xs font-medium">{grade10}</span>
                )}
              </div>
            )}
            {(school12 || grade12) && (
              <div className="bg-white p-4 rounded-lg border border-rose-100 shadow-sm">
                <h5 className="font-serif font-semibold text-gray-800 mb-1">12th Grade</h5>
                {school12 && (
                  <p className="text-gray-600 text-sm mb-1">{school12}</p>
                )}
                {grade12 && (
                  <span className="bg-rose-50 text-rose-600 px-2 py-1 rounded text-xs font-medium">{grade12}</span>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  // Work Experience
  const renderWorkExperience = () => {
    const workData = getArrayData("work");
    const validWork = workData.filter((_, index) => hasContent("work", index));
    
    if (validWork.length === 0) return null;

    return (
      <div className="serif-queen-section mb-8">
        <h3 className="serif-queen-section-title text-2xl font-serif font-bold text-gray-800 mb-4 pb-2 border-b-2 border-rose-200 flex items-center gap-2">
          <Briefcase className="w-6 h-6 text-rose-500" />
          Work Experience
        </h3>
        
        <div className="space-y-6">
          {validWork.map((_, index) => {
            const jobTitle = getFieldValue("work", "Job Title", index) || getFieldValue("work", "Role", index) || getFieldValue("work", "Position", index);
            const company = getFieldValue("work", "Company Name", index) || getFieldValue("work", "Company / Client", index) || getFieldValue("work", "Organization / Firm", index);
            const duration = getFieldValue("work", "Duration", index);
            const responsibilities = getFieldValue("work", "Responsibilities & Achievements", index) || getFieldValue("work", "Responsibilities", index) || getFieldValue("work", "Duties", index) || getFieldValue("work", "Responsibilities & Legal Work", index);

            return (
              <div key={index} className="bg-gradient-to-r from-purple-25 to-rose-25 p-6 rounded-xl border border-rose-100">
                {jobTitle && (
                  <h4 className="text-lg font-serif font-bold text-gray-800 mb-1">{jobTitle}</h4>
                )}
                {company && (
                  <p className="text-rose-600 font-medium font-serif mb-2">{company}</p>
                )}
                {duration && (
                  <span className="bg-white text-gray-600 px-3 py-1 rounded-full text-sm font-medium mb-3 inline-block">{duration}</span>
                )}
                {responsibilities && (
                  <div className="mt-3">
                    {formatText(responsibilities).map((line, lineIndex) => (
                      <p key={lineIndex} className="text-gray-700 text-sm leading-relaxed mb-1 font-serif">
                        • {line}
                      </p>
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

  // Projects
  const renderProjects = () => {
    const projectsData = getArrayData("projects");
    const validProjects = projectsData.filter((_, index) => hasContent("projects", index));
    
    if (validProjects.length === 0) return null;

    return (
      <div className="serif-queen-section mb-8">
        <h3 className="serif-queen-section-title text-2xl font-serif font-bold text-gray-800 mb-4 pb-2 border-b-2 border-rose-200 flex items-center gap-2">
          <Code className="w-6 h-6 text-rose-500" />
          Projects
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {validProjects.map((_, index) => {
            const title = getFieldValue("projects", "Project Title", index) || getFieldValue("projects", "Title", index) || getFieldValue("projects", "Project/Campaign Name", index) || getFieldValue("projects", "Project Title", index);
            const tools = getFieldValue("projects", "Tools Used", index) || getFieldValue("projects", "Tools/Technologies Used", index) || getFieldValue("projects", "Platform Used", index);
            const description = getFieldValue("projects", "Description", index) || getFieldValue("projects", "Description / Contribution", index);
            const contribution = getFieldValue("projects", "Your Contribution", index);
            const goal = getFieldValue("projects", "Goal / Audience", index);
            const result = getFieldValue("projects", "Result / Metrics", index);

            return (
              <div key={index} className="bg-white p-6 rounded-xl border border-rose-200 shadow-sm hover:shadow-md transition-shadow">
                {title && (
                  <h4 className="text-lg font-serif font-bold text-gray-800 mb-2">{title}</h4>
                )}
                {tools && (
                  <div className="flex flex-wrap gap-1 mb-3">
                    {tools.split(',').map((tool, toolIndex) => (
                      <span key={toolIndex} className="bg-rose-100 text-rose-700 px-2 py-1 rounded text-xs font-medium">
                        {tool.trim()}
                      </span>
                    ))}
                  </div>
                )}
                {goal && (
                  <p className="text-purple-600 text-sm font-medium mb-2">Goal: {goal}</p>
                )}
                {result && (
                  <p className="text-green-600 text-sm font-medium mb-2">Result: {result}</p>
                )}
                {description && (
                  <div className="mb-3">
                    {formatText(description).map((line, lineIndex) => (
                      <p key={lineIndex} className="text-gray-600 text-sm leading-relaxed mb-1 font-serif">
                        {line}
                      </p>
                    ))}
                  </div>
                )}
                {contribution && (
                  <div className="border-t border-rose-100 pt-3">
                    <p className="text-xs font-semibold text-rose-600 mb-1">Your Contribution:</p>
                    {formatText(contribution).map((line, lineIndex) => (
                      <p key={lineIndex} className="text-gray-600 text-sm leading-relaxed font-serif">
                        • {line}
                      </p>
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

  // Skills Section
  const renderSkills = () => {
    const techSkills = getArrayData("techSkills");
    const softSkills = getArrayData("softSkills");
    const coreSkills = getArrayData("coreLegalSkills") || getArrayData("coreSalesSkills") || getArrayData("coreMedicalSkills") || getArrayData("skills");
    const otherSkills = getArrayData("otherSkills") || getArrayData("tools") || getArrayData("labSkills");
    const teachingSkills = resumeData["teachingSkills"];

    const hasAnySkills = techSkills.length > 0 || softSkills.length > 0 || coreSkills.length > 0 || otherSkills.length > 0 || teachingSkills;

    if (!hasAnySkills) return null;

    return (
      <div className="serif-queen-section mb-8">
        <h3 className="serif-queen-section-title text-2xl font-serif font-bold text-gray-800 mb-4 pb-2 border-b-2 border-rose-200 flex items-center gap-2">
          <Star className="w-6 h-6 text-rose-500" />
          Skills
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Technical/Core Skills */}
          {(techSkills.length > 0 || coreSkills.length > 0) && (
            <div className="bg-gradient-to-br from-blue-25 to-purple-25 p-5 rounded-xl border border-blue-100">
              <h4 className="font-serif font-bold text-gray-800 mb-3">
                {techSkills.length > 0 ? "Technical Skills" : "Core Skills"}
              </h4>
              <div className="flex flex-wrap gap-2">
                {(techSkills.length > 0 ? techSkills : coreSkills).map((skillObj, index) => {
                  const skillText = skillObj?.["Technical Skills"] || skillObj?.["Core Legal Skill"] || skillObj?.["Core Sales Skills"] || skillObj?.["Skill"] || skillObj?.["Core Medical Skills"] || "";
                  return skillText ? (
                    <span key={index} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                      {skillText}
                    </span>
                  ) : null;
                })}
              </div>
            </div>
          )}

          {/* Soft Skills */}
          {softSkills.length > 0 && (
            <div className="bg-gradient-to-br from-green-25 to-teal-25 p-5 rounded-xl border border-green-100">
              <h4 className="font-serif font-bold text-gray-800 mb-3">Soft Skills</h4>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skillObj, index) => {
                  const skillText = skillObj?.["Soft Skills"] || skillObj?.["Soft Skill"] || skillObj?.["Skill"] || "";
                  return skillText ? (
                    <span key={index} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                      {skillText}
                    </span>
                  ) : null;
                })}
              </div>
            </div>
          )}

          {/* Other Skills/Tools */}
          {otherSkills.length > 0 && (
            <div className="bg-gradient-to-br from-purple-25 to-pink-25 p-5 rounded-xl border border-purple-100">
              <h4 className="font-serif font-bold text-gray-800 mb-3">Tools & Software</h4>
              <div className="flex flex-wrap gap-2">
                {otherSkills.map((skillObj, index) => {
                  const skillText = skillObj?.["Tools / Software"] || skillObj?.["Tools/Softwares"] || skillObj?.["Tool/Software"] || skillObj?.["Skill"] || "";
                  return skillText ? (
                    <span key={index} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                      {skillText}
                    </span>
                  ) : null;
                })}
              </div>
            </div>
          )}

          {/* Teaching Skills (for Educational career) */}
          {teachingSkills && (
            <div className="bg-gradient-to-br from-orange-25 to-rose-25 p-5 rounded-xl border border-orange-100 md:col-span-2">
              <h4 className="font-serif font-bold text-gray-800 mb-3">Teaching Skills</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {teachingSkills["Core Teaching Skills"] && (
                  <div>
                    <h5 className="font-semibold text-gray-700 mb-2 text-sm">Core Teaching Skills</h5>
                    <p className="text-gray-600 text-sm font-serif">{teachingSkills["Core Teaching Skills"]}</p>
                  </div>
                )}
                {teachingSkills["Digital Tools"] && (
                  <div>
                    <h5 className="font-semibold text-gray-700 mb-2 text-sm">Digital Tools</h5>
                    <p className="text-gray-600 text-sm font-serif">{teachingSkills["Digital Tools"]}</p>
                  </div>
                )}
                {teachingSkills["Soft Skills"] && (
                  <div>
                    <h5 className="font-semibold text-gray-700 mb-2 text-sm">Soft Skills</h5>
                    <p className="text-gray-600 text-sm font-serif">{teachingSkills["Soft Skills"]}</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  // Additional Sections (Achievements, Certifications, etc.)
  const renderAdditionalSections = () => {
    const achievements = getArrayData("achievements");
    const certifications = getArrayData("certifications");
    const publications = getArrayData("publications");

    const sections = [];

    // Achievements
    if (achievements.some((_, index) => hasContent("achievements", index))) {
      sections.push(
        <div key="achievements" className="bg-gradient-to-r from-yellow-25 to-orange-25 p-6 rounded-xl border border-yellow-100">
          <h4 className="font-serif font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Award className="w-5 h-5 text-orange-500" />
            Achievements
          </h4>
          <div className="space-y-3">
            {achievements.map((achievementObj, index) => {
              const achievement = achievementObj?.["Achievements"] || achievementObj?.["Achievement"] || achievementObj?.["Title"] || "";
              const description = achievementObj?.["Description"] || "";
              const year = achievementObj?.["Year"] || "";
              
              if (!achievement) return null;
              
              return (
                <div key={index} className="border-l-3 border-orange-300 pl-4">
                  <div className="flex justify-between items-start">
                    <h5 className="font-semibold text-gray-800 font-serif">{achievement}</h5>
                    {year && <span className="text-sm text-gray-500 bg-white px-2 py-1 rounded">{year}</span>}
                  </div>
                  {description && (
                    <p className="text-gray-600 text-sm mt-1 font-serif">{description}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      );
    }

    // Certifications
    if (certifications.some((_, index) => hasContent("certifications", index))) {
      sections.push(
        <div key="certifications" className="bg-gradient-to-r from-green-25 to-emerald-25 p-6 rounded-xl border border-green-100">
          <h4 className="font-serif font-bold text-gray-800 mb-4">Certifications</h4>
          <div className="space-y-2">
            {certifications.map((certObj, index) => {
              const certName = certObj?.["Course/Certification Name"] || certObj?.["Certification Name"] || certObj?.["Certification Title"] || "";
              const date = certObj?.["Date"] || certObj?.["Year"] || "";
              
              if (!certName) return null;
              
              return (
                <div key={index} className="flex justify-between items-center bg-white p-3 rounded-lg">
                  <span className="font-medium text-gray-800 font-serif">{certName}</span>
                  {date && <span className="text-sm text-gray-500 bg-green-50 px-2 py-1 rounded">{date}</span>}
                </div>
              );
            })}
          </div>
        </div>
      );
    }

    // Publications (for Law career)
    if (publications.some((_, index) => hasContent("publications", index))) {
      sections.push(
        <div key="publications" className="bg-gradient-to-r from-indigo-25 to-blue-25 p-6 rounded-xl border border-indigo-100">
          <h4 className="font-serif font-bold text-gray-800 mb-4">Publications</h4>
          <div className="space-y-4">
            {publications.map((pubObj, index) => {
              const title = pubObj?.["Article / Blog Title"] || "";
              const platform = pubObj?.["Platform (if published)"] || "";
              const link = pubObj?.["Link"] || "";
              const summary = pubObj?.["Brief Summary"] || "";
              
              if (!title) return null;
              
              return (
                <div key={index} className="bg-white p-4 rounded-lg border border-indigo-100">
                  <h5 className="font-semibold text-gray-800 font-serif mb-1">{title}</h5>
                  {platform && (
                    <p className="text-indigo-600 text-sm font-medium mb-2">{platform}</p>
                  )}
                  {link && (
                    <p className="text-blue-600 text-sm break-all mb-2">{link}</p>
                  )}
                  {summary && (
                    <p className="text-gray-600 text-sm font-serif">{summary}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      );
    }

    return sections.length > 0 ? (
      <div className="serif-queen-section mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections}
        </div>
      </div>
    ) : null;
  };

  // Languages and Interests
  const renderPersonalInfo = () => {
    const languages = getArrayData("languages");
    const interests = getArrayData("interests");
    const activities = getArrayData("activities") || getArrayData("extracurricular");

    const hasLanguages = languages.some(lang => lang?.["Languages"] || lang?.["Language"]);
    const hasInterests = interests.some(int => int?.["Interests"] || int?.["Interest"]);
    const hasActivities = activities.some((_, index) => hasContent("activities", index) || hasContent("extracurricular", index));

    if (!hasLanguages && !hasInterests && !hasActivities) return null;

    return (
      <div className="serif-queen-section mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {hasLanguages && (
            <div className="bg-gradient-to-br from-teal-25 to-cyan-25 p-5 rounded-xl border border-teal-100">
              <h4 className="font-serif font-bold text-gray-800 mb-3">Languages</h4>
              <div className="space-y-2">
                {languages.map((langObj, index) => {
                  const language = langObj?.["Languages"] || langObj?.["Language"] || "";
                  return language ? (
                    <span key={index} className="block bg-teal-100 text-teal-700 px-3 py-1 rounded text-sm font-medium">
                      {language}
                    </span>
                  ) : null;
                })}
              </div>
            </div>
          )}

          {hasInterests && (
            <div className="bg-gradient-to-br from-pink-25 to-rose-25 p-5 rounded-xl border border-pink-100">
              <h4 className="font-serif font-bold text-gray-800 mb-3">Interests</h4>
              <div className="flex flex-wrap gap-2">
                {interests.map((intObj, index) => {
                  const interest = intObj?.["Interests"] || intObj?.["Interest"] || "";
                  return interest ? (
                    <span key={index} className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                      {interest}
                    </span>
                  ) : null;
                })}
              </div>
            </div>
          )}

          {hasActivities && (
            <div className="bg-gradient-to-br from-violet-25 to-purple-25 p-5 rounded-xl border border-violet-100">
              <h4 className="font-serif font-bold text-gray-800 mb-3">Activities</h4>
              <div className="space-y-2">
                {activities.map((actObj, index) => {
                  const activity = actObj?.["Activities"] || actObj?.["Activity"] || actObj?.["Activity Title"] || "";
                  const description = actObj?.["Description"] || "";
                  const year = actObj?.["Year"] || "";
                  
                  if (!activity) return null;
                  
                  return (
                    <div key={index} className="bg-white p-3 rounded-lg">
                      <div className="flex justify-between items-start">
                        <span className="font-medium text-gray-800 font-serif text-sm">{activity}</span>
                        {year && <span className="text-xs text-gray-500">{year}</span>}
                      </div>
                      {description && (
                        <p className="text-gray-600 text-xs mt-1 font-serif">{description}</p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="serif-queen-template w-full max-w-4xl mx-auto bg-white shadow-lg overflow-hidden">
      {/* Custom Styles */}
      <style jsx>{`
        .serif-queen-template {
          font-family: 'Times New Roman', 'Georgia', serif;
          line-height: 1.6;
          color: #374151;
        }
        
        .serif-queen-template * {
          box-sizing: border-box;
        }
        
        .serif-queen-header {
          page-break-inside: avoid;
        }
        
        .serif-queen-section {
          page-break-inside: avoid;
          break-inside: avoid;
        }
        
        .serif-queen-section-title {
          page-break-after: avoid;
        }
        
        /* Overflow handling */
        .serif-queen-template .break-all {
          word-break: break-all;
          overflow-wrap: break-word;
        }
        
        .serif-queen-template .truncate {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        
        /* Responsive text sizing */
        @media (max-width: 768px) {
          .serif-queen-template h1 {
            font-size: 2rem;
          }
          .serif-queen-template h2 {
            font-size: 1.25rem;
          }
          .serif-queen-template h3 {
            font-size: 1.5rem;
          }
        }
        
        /* Print optimization */
        @media print {
          .serif-queen-template {
            shadow: none;
            max-width: 100%;
          }
          
          .serif-queen-section {
            page-break-inside: avoid;
          }
        }
        
        /* Gradient color classes for better browser compatibility */
        .rose-25 { background-color: #fdf2f8; }
        .pink-25 { background-color: #fdf2f8; }
        .purple-25 { background-color: #faf5ff; }
        .blue-25 { background-color: #eff6ff; }
        .green-25 { background-color: #f0fdf4; }
        .yellow-25 { background-color: #fefce8; }
        .orange-25 { background-color: #fff7ed; }
        .teal-25 { background-color: #f0fdfa; }
        .cyan-25 { background-color: #ecfeff; }
        .indigo-25 { background-color: #eef2ff; }
        .violet-25 { background-color: #f5f3ff; }
        .emerald-25 { background-color: #ecfdf5; }
      `}</style>

      {/* Header */}
      {renderHeader()}
      
      {/* Main Content */}
      <div className="p-8 space-y-0">
        {renderSummary()}
        {renderEducation()}
        {renderWorkExperience()}
        {renderProjects()}
        {renderSkills()}
        {renderAdditionalSections()}
        {renderPersonalInfo()}
      </div>
      
      {/* Elegant Footer */}
      <div className="bg-gradient-to-r from-rose-50 to-purple-50 p-4 text-center border-t border-rose-200">
        <p className="text-xs text-gray-500 font-serif italic">
          Crafted with elegance • Resume generated with care
        </p>
      </div>
    </div>
  );
};

export default SerifQueenTemplate;