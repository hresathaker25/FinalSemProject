import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Globe, Award, Briefcase, GraduationCap, Code, Users, Calendar, ExternalLink, Star, Target, Zap, BookOpen, FileText, Activity } from 'lucide-react';

const UrbanMonochromeTemplate = ({ resumeData, selectedCareer }) => {
  // Safe data access with fallbacks
  const header = resumeData?.header || {};
  const summary = resumeData?.summary || {};
  const education = resumeData?.education || {};
  const work = resumeData?.work || [];
  const projects = resumeData?.projects || [];
  const certifications = resumeData?.certifications || [];
  const achievements = resumeData?.achievements || [];
  const activities = resumeData?.activities || [];
  const techSkills = resumeData?.techSkills || [];
  const softSkills = resumeData?.softSkills || [];
  const languages = resumeData?.languages || [];
  const interests = resumeData?.interests || [];

  // Career-specific data mapping
  const coreLegalSkills = resumeData?.coreLegalSkills || [];
  const otherSkills = resumeData?.otherSkills || [];
  const coreSalesSkills = resumeData?.coreSalesSkills || [];
  const publications = resumeData?.publications || [];
  const coreMedicalSkills = resumeData?.coreMedicalSkills || [];
  const labSkills = resumeData?.labSkills || [];
  const teachingSkills = resumeData?.teachingSkills || {};
  const internships = resumeData?.internships || [];
  const schooling = resumeData?.schooling || {};
  const skills = resumeData?.skills || [];
  const tools = resumeData?.tools || [];
  const workExperience = resumeData?.workExperience || [];
  const experience = resumeData?.experience || [];
  const extracurricular = resumeData?.extracurricular || [];

  // Icon mapping for different sections
  const getContactIcon = (label) => {
    if (!label) return <ExternalLink className="w-4 h-4" />;
    const lowerLabel = label.toLowerCase();
    if (lowerLabel.includes('phone')) return <Phone className="w-4 h-4" />;
    if (lowerLabel.includes('email')) return <Mail className="w-4 h-4" />;
    if (lowerLabel.includes('linkedin')) return <Linkedin className="w-4 h-4" />;
    if (lowerLabel.includes('github')) return <Github className="w-4 h-4" />;
    if (lowerLabel.includes('location')) return <MapPin className="w-4 h-4" />;
    if (lowerLabel.includes('portfolio') || lowerLabel.includes('link') || lowerLabel.includes('instagram') || lowerLabel.includes('youtube')) return <Globe className="w-4 h-4" />;
    return <ExternalLink className="w-4 h-4" />;
  };

  // Get work experience data based on career type
  const getWorkExperience = () => {
    if (work.length > 0) return work;
    if (workExperience.length > 0) return workExperience;
    if (experience.length > 0) return experience;
    if (internships.length > 0) return internships;
    return [];
  };

  // Get education data with proper fallbacks
  const getEducationData = () => {
    // Handle multiple education entries (Finance career)
    if (Array.isArray(education) && education.length > 0) {
      return education[0]; // Use first education entry
    }
    // Handle single education object
    if (education && typeof education === 'object') {
      return education;
    }
    return {};
  };

  const renderSkillBar = (skill, index, level = null) => {
    const skillText = typeof skill === 'string' ? skill : 
                    skill?.Skill || skill?.['Core Legal Skill'] || skill?.['Technical Skills'] || 
                    skill?.name || Object.values(skill || {})[0] || '';
    if (!skillText) return null;
    
    // Generate consistent level based on skill name if not provided
    const calculatedLevel = level || (75 + (skillText.length % 20));
    
    return (
      <div key={index} className="mb-4">
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm font-medium text-gray-800 truncate pr-2">{skillText}</span>
          <span className="text-xs text-gray-500 flex-shrink-0">{calculatedLevel}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-black h-2 rounded-full transition-all duration-700 ease-out"
            style={{ width: `${calculatedLevel}%` }}
          ></div>
        </div>
      </div>
    );
  };

  const renderSkillPill = (skill, index) => {
    const skillText = typeof skill === 'string' ? skill : 
                    skill?.Skill || skill?.['Core Sales Skills'] || skill?.['Tool/Software'] || 
                    skill?.['Soft Skill'] || skill?.name || Object.values(skill || {})[0] || '';
    if (!skillText) return null;
    
    return (
      <span
        key={index}
        className="inline-block px-3 py-2 bg-black text-white text-xs font-medium rounded-full mr-2 mb-2 transition-all duration-300 hover:bg-gray-800 hover:scale-105 hover:shadow-lg break-words"
      >
        {skillText}
      </span>
    );
  };

  const formatText = (text) => {
    if (!text) return null;
    return text.split('\n').map((line, index) => (
      <div key={index} className={index > 0 ? 'mt-2' : ''}>
        {line.startsWith('•') || line.startsWith('-') ? (
          <div className="flex items-start">
            <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span className="break-words">{line.replace(/^[•-]\s*/, '')}</span>
          </div>
        ) : (
          <span className="break-words">{line}</span>
        )}
      </div>
    ));
  };

  const renderSection = (title, content, icon, className = "") => {
    if (!content || (Array.isArray(content) && content.length === 0)) return null;
    
    return (
      <div className={`mb-6 ${className}`}>
        <div className="flex items-center mb-4 relative">
          <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center mr-3 shadow-lg flex-shrink-0">
            <div className="text-white">{icon}</div>
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-lg font-bold text-black tracking-tight uppercase truncate">
              {title}
            </h2>
            <div className="w-16 h-0.5 bg-black mt-1"></div>
          </div>
        </div>
        <div className="ml-13">
          {content}
        </div>
      </div>
    );
  };

  const educationData = getEducationData();
  const workData = getWorkExperience();

  return (
    <div className="max-w-4xl mx-auto bg-white font-sans relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 border border-gray-200 rounded-full transform translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 border border-gray-200 rounded-full transform -translate-x-24 translate-y-24"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 border border-gray-200 transform -translate-x-12 -translate-y-12 rotate-45"></div>
      </div>

      {/* Header Section */}
      <div className="relative z-10 bg-white border-b-2 border-black">
        <div className="p-6">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-6">
            <div className="flex-1 min-w-0">
              {/* Name with Dramatic Typography */}
              <div className="mb-4">
                <h1 className="text-3xl lg:text-4xl font-black text-black mb-2 tracking-tighter leading-tight break-words">
                  {(header['Full Name'] || 'YOUR NAME').toUpperCase()}
                </h1>
                <div className="relative">
                  <h2 className="text-base lg:text-lg font-light text-gray-600 tracking-widest uppercase break-words">
                    {header['Professional Title'] || 'Professional Title'}
                  </h2>
                  <div className="absolute -bottom-1 left-0 w-24 h-0.5 bg-black"></div>
                </div>
              </div>
              
              {/* Contact Grid with Modern Layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                {Object.entries(header).map(([key, value]) => {
                  if (!value || key === 'Full Name' || key === 'Professional Title' || key === 'Profile Photo') return null;
                  return (
                    <div key={key} className="flex items-center space-x-3 group min-w-0">
                      <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300 flex-shrink-0">
                        {getContactIcon(key)}
                      </div>
                      <span className="text-gray-700 text-sm font-medium group-hover:text-black transition-colors duration-300 truncate">
                        {value}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Profile Photo with Artistic Frame */}
            {header['Profile Photo'] && (
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-24 h-24 bg-black rounded-full p-1">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <img
                        src={header['Profile Photo']}
                        alt="Profile"
                        className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 border-2 border-black bg-white rounded-full"></div>
                  <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-black rounded-full"></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 p-6">
        {/* Professional Summary with Quote-like Design */}
        {summary['Summary'] && (
          <div className="mb-8">
            <div className="relative bg-gray-50 p-6 rounded-lg border-l-4 border-black">
              <div className="absolute top-3 left-3 text-4xl font-black text-gray-200">"</div>
              <div className="relative z-10 ml-6">
                <h2 className="text-lg font-bold text-black mb-3 uppercase tracking-wide">About Me</h2>
                <div className="text-gray-700 leading-relaxed text-sm">
                  {formatText(summary['Summary'])}
                </div>
              </div>
              <div className="absolute bottom-3 right-3 text-4xl font-black text-gray-200 transform rotate-180">"</div>
            </div>
          </div>
        )}

        {/* Experience Section */}
        {workData.length > 0 && renderSection(
          "Experience",
          <div className="space-y-6">
            {workData.map((job, index) => (
              <div key={index} className="relative bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-all duration-300 group">
                <div className="absolute top-0 left-0 w-1 h-full bg-black rounded-l-lg group-hover:w-2 transition-all duration-300"></div>
                <div className="ml-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                    <div className="min-w-0">
                      <h3 className="text-lg font-bold text-black group-hover:text-gray-800 transition-colors break-words">
                        {job['Job Title'] || job['Role'] || job['Position'] || 'Job Title'}
                      </h3>
                      <p className="text-gray-600 font-semibold break-words">
                        {job['Company Name'] || job['Company / Client'] || job['Organization / Firm'] || 
                         job['Hospital / Clinic Name'] || job['School / Institution'] || 'Company'}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="flex items-center text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        <Calendar className="w-3 h-3 mr-1" />
                        <span className="break-words">{job['Duration'] || 'Duration'}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-gray-700 leading-relaxed text-sm">
                    {formatText(
                      job['Responsibilities & Achievements'] || 
                      job['Responsibilities'] || 
                      job['Responsibilities & Legal Work'] || 
                      job['Key Responsibilities'] || 
                      job['Duties'] || 
                      ''
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>,
          <Briefcase className="w-5 h-5" />
        )}

        {/* Two Column Layout for Skills and Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {/* Skills Column */}
          <div className="lg:col-span-1 space-y-6">
            {/* Technical Skills with Progress Bars */}
            {techSkills.length > 0 && renderSection(
              selectedCareer === 'Marketing' ? "Marketing Skills" : 
              selectedCareer === 'Finance' ? "Finance Skills" : "Technical Skills",
              <div className="space-y-3">
                {techSkills.slice(0, 8).map((skill, index) => 
                  renderSkillBar(skill, index, Math.floor(Math.random() * 20) + 75)
                )}
              </div>,
              <Code className="w-5 h-5" />,
              "mb-4"
            )}

            {/* Career-specific Skills */}
            {coreLegalSkills.length > 0 && renderSection(
              "Legal Skills",
              <div className="flex flex-wrap">
                {coreLegalSkills.map((skill, index) => renderSkillPill(skill, index))}
              </div>,
              <BookOpen className="w-5 h-5" />,
              "mb-4"
            )}

            {coreSalesSkills.length > 0 && renderSection(
              "Sales Skills",
              <div className="flex flex-wrap">
                {coreSalesSkills.map((skill, index) => renderSkillPill(skill, index))}
              </div>,
              <Target className="w-5 h-5" />,
              "mb-4"
            )}

            {coreMedicalSkills.length > 0 && renderSection(
              "Medical Skills",
              <div className="flex flex-wrap">
                {coreMedicalSkills.map((skill, index) => renderSkillPill(skill, index))}
              </div>,
              <Zap className="w-5 h-5" />,
              "mb-4"
            )}

            {skills.length > 0 && renderSection(
              "Core Skills",
              <div className="flex flex-wrap">
                {skills.map((skill, index) => renderSkillPill(skill, index))}
              </div>,
              <Star className="w-5 h-5" />,
              "mb-4"
            )}

            {/* Lab Skills for Medical */}
            {labSkills.length > 0 && renderSection(
              "Lab & Technical Skills",
              <div className="flex flex-wrap">
                {labSkills.map((skill, index) => renderSkillPill(skill, index))}
              </div>,
              <FileText className="w-5 h-5" />,
              "mb-4"
            )}

            {/* Tools/Software */}
            {tools.length > 0 && renderSection(
              "Tools & Software",
              <div className="flex flex-wrap">
                {tools.map((tool, index) => renderSkillPill(tool, index))}
              </div>,
              <Code className="w-5 h-5" />,
              "mb-4"
            )}

            {/* Other Skills (for Law career) */}
            {otherSkills.length > 0 && renderSection(
              "Additional Skills",
              <div className="space-y-3">
                {otherSkills.map((skill, index) => 
                  renderSkillBar(skill, index, Math.floor(Math.random() * 15) + 80)
                )}
              </div>,
              <Star className="w-5 h-5" />,
              "mb-4"
            )}

            {/* Teaching Skills (Educational career) */}
            {Object.keys(teachingSkills).length > 0 && renderSection(
              "Teaching Skills",
              <div className="space-y-4">
                {teachingSkills['Core Teaching Skills'] && (
                  <div>
                    <h4 className="font-semibold text-black text-sm mb-2">Core Skills</h4>
                    <div className="text-gray-700 text-sm">
                      {formatText(teachingSkills['Core Teaching Skills'])}
                    </div>
                  </div>
                )}
                {teachingSkills['Digital Tools'] && (
                  <div>
                    <h4 className="font-semibold text-black text-sm mb-2">Digital Tools</h4>
                    <div className="text-gray-700 text-sm">
                      {formatText(teachingSkills['Digital Tools'])}
                    </div>
                  </div>
                )}
                {teachingSkills['Soft Skills'] && (
                  <div>
                    <h4 className="font-semibold text-black text-sm mb-2">Soft Skills</h4>
                    <div className="text-gray-700 text-sm">
                      {formatText(teachingSkills['Soft Skills'])}
                    </div>
                  </div>
                )}
              </div>,
              <Users className="w-5 h-5" />,
              "mb-4"
            )}

            {/* Languages */}
            {languages.length > 0 && renderSection(
              "Languages",
              <div className="space-y-2">
                {languages.map((language, index) => {
                  const langText = typeof language === 'string' ? language : 
                                 language?.Languages || language?.Language || 
                                 language?.name || Object.values(language || {})[0] || '';
                  return (
                    <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-800 text-sm truncate">
                        {langText}
                      </span>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className={`w-1.5 h-1.5 rounded-full ${i < 4 ? 'bg-black' : 'bg-gray-300'}`}></div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>,
              <Globe className="w-5 h-5" />,
              "mb-4"
            )}

            {/* Soft Skills */}
            {softSkills.length > 0 && renderSection(
              "Soft Skills",
              <div className="space-y-2">
                {softSkills.map((skill, index) => {
                  const skillText = typeof skill === 'string' ? skill : 
                                  skill?.['Soft Skills'] || skill?.['Soft Skill'] || 
                                  skill?.name || Object.values(skill || {})[0] || '';
                  return (
                    <div key={index} className="bg-white border border-gray-300 rounded-lg p-2 text-center hover:bg-black hover:text-white transition-all duration-300 cursor-default">
                      <span className="text-xs font-medium break-words">
                        {skillText}
                      </span>
                    </div>
                  );
                })}
              </div>,
              <Users className="w-5 h-5" />,
              "mb-4"
            )}
          </div>

          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Education */}
            {(educationData['Degree Name'] || educationData['Degree / Course Name'] || educationData['Institution Name']) && renderSection(
              "Education",
              <div className="bg-gray-50 rounded-lg p-4 border-2 border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-black mb-1 break-words">
                      {educationData['Degree Name'] || educationData['Degree / Course Name'] || 'Degree'}
                    </h3>
                    <p className="text-gray-600 font-semibold mb-2 break-words">
                      {educationData['Institution Name'] || 'Institution'}
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-3 h-3 mr-2" />
                      <span className="break-words">
                        {educationData['Duration'] || educationData['Duration (Start – End or \'Present\')'] || 'Duration'}
                      </span>
                    </div>
                  </div>
                  {(educationData['CGPA or Percentage'] || educationData['CGPA / Percentage']) && (
                    <div className="bg-black text-white px-3 py-1 rounded-full flex-shrink-0">
                      <span className="font-bold text-sm">
                        {educationData['CGPA or Percentage'] || educationData['CGPA / Percentage']}
                      </span>
                    </div>
                  )}
                </div>
                
                {/* 10th & 12th Grade */}
                {(educationData['10th Grade School Name & Percentage'] || schooling['10th School Name']) && (
                  <div className="mt-4 pt-3 border-t border-gray-300">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {(educationData['12th Grade School Name & Percentage'] || schooling['12th School Name']) && (
                        <div className="bg-white p-3 rounded-lg">
                          <span className="font-bold text-black text-sm">12th Grade</span>
                          <p className="text-gray-600 text-xs mt-1 break-words">
                            {educationData['12th Grade School Name & Percentage'] || 
                             `${schooling['12th School Name']} - ${schooling['12th Percentage']}`}
                          </p>
                        </div>
                      )}
                      <div className="bg-white p-3 rounded-lg">
                        <span className="font-bold text-black text-sm">10th Grade</span>
                        <p className="text-gray-600 text-xs mt-1 break-words">
                          {educationData['10th Grade School Name & Percentage'] || 
                           `${schooling['10th School Name']} - ${schooling['10th Percentage']}`}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>,
              <GraduationCap className="w-5 h-5" />
            )}

            {/* Projects */}
            {projects.length > 0 && renderSection(
              selectedCareer === 'Law' ? "Legal Projects" :
              selectedCareer === 'Marketing' ? "Marketing Campaigns" :
              selectedCareer === 'Finance' ? "Finance Projects" :
              selectedCareer === 'Medical' ? "Medical Projects" :
              selectedCareer === 'Educational' ? "Teaching Projects" : "Projects",
              <div className="grid grid-cols-1 gap-4">
                {projects.map((project, index) => (
                  <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-black transition-all duration-300 group">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                      <h3 className="text-lg font-bold text-black group-hover:underline break-words">
                        {project['Project Title'] || project['Title'] || project['Project/Campaign Name'] || 
                         project['Project Title'] || 'Project Title'}
                      </h3>
                      {(project['Tools Used'] || project['Tools/Technologies Used'] || project['Platform Used'] || 
                        project['Tools/Software'] || project['Platform']) && (
                        <div className="flex flex-wrap gap-1">
                          {(project['Tools Used'] || project['Tools/Technologies Used'] || project['Platform Used'] || 
                            project['Tools/Software'] || project['Platform']).split(',').slice(0, 3).map((tool, i) => (
                            <span key={i} className="px-2 py-1 bg-gray-100 text-xs font-medium rounded break-words">
                              {tool.trim()}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-3">
                      {/* Project Description */}
                      {(project['Description'] || project['Summary & Objective']) && (
                        <div className="text-gray-700 text-sm">
                          {formatText(project['Description'] || project['Summary & Objective'])}
                        </div>
                      )}

                      {/* Additional Project Fields */}
                      {project['Goal / Audience'] && (
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <span className="font-semibold text-black text-sm">Target:</span>
                          <span className="text-gray-700 ml-2 text-sm">{project['Goal / Audience']}</span>
                        </div>
                      )}

                      {project['Year / Role'] && (
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <span className="font-semibold text-black text-sm">Role:</span>
                          <span className="text-gray-700 ml-2 text-sm">{project['Year / Role']}</span>
                        </div>
                      )}

                      {project['Topic / Area of Law'] && (
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <span className="font-semibold text-black text-sm">Area of Law:</span>
                          <span className="text-gray-700 ml-2 text-sm">{project['Topic / Area of Law']}</span>
                        </div>
                      )}

                      {/* Contribution */}
                      {(project['Your Contribution'] || project['Description / Contribution']) && (
                        <div className="bg-gray-50 p-3 rounded-lg border-l-4 border-black">
                          <span className="font-semibold text-black text-sm">My Contribution:</span>
                          <div className="text-gray-700 mt-1 text-sm">
                            {formatText(project['Your Contribution'] || project['Description / Contribution'])}
                          </div>
                        </div>
                      )}

                      {/* Results/Findings */}
                      {(project['Result / Metrics'] || project['Key Insights / Results'] || 
                        project['Conversion / Engagement Stats'] || project['Findings']) && (
                        <div className="flex items-start space-x-2">
                          <Star className="w-3 h-3 text-black mt-1 flex-shrink-0" />
                          <span className="text-gray-700 text-sm break-words">
                            <span className="font-semibold">Results: </span>
                            {project['Result / Metrics'] || project['Key Insights / Results'] || 
                             project['Conversion / Engagement Stats'] || project['Findings']}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>,
              <Code className="w-5 h-5" />
            )}

            {/* Publications (for Law career) */}
            {publications.length > 0 && renderSection(
              "Publications",
              <div className="space-y-3">
                {publications.map((pub, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-3 hover:shadow-lg transition-all duration-300">
                    <h4 className="font-bold text-black mb-2 break-words">
                      {pub['Article / Blog Title'] || 'Publication Title'}
                    </h4>
                    {pub['Platform (if published)'] && (
                      <p className="text-gray-600 font-medium text-sm mb-2 break-words">{pub['Platform (if published)']}</p>
                    )}
                    {pub['Link'] && (
                      <a href={pub['Link']} className="inline-flex items-center text-black hover:underline text-sm font-medium mb-2 break-words">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        View Publication
                      </a>
                    )}
                    {pub['Brief Summary'] && (
                      <p className="text-gray-700 text-sm leading-relaxed break-words">{pub['Brief Summary']}</p>
                    )}
                  </div>
                ))}
              </div>,
              <Award className="w-5 h-5" />
            )}

            {/* Certifications & Achievements Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Certifications */}
              {certifications.length > 0 && (
                <div>
                  <h3 className="text-lg font-bold text-black mb-3 flex items-center">
                    <Award className="w-4 h-4 mr-2" />
                    Certifications
                  </h3>
                  <div className="space-y-2">
                    {certifications.map((cert, index) => (
                      <div key={index} className="bg-gray-50 p-3 rounded-lg border-l-4 border-black">
                        <h5 className="font-semibold text-black text-sm break-words">
                          {cert['Course/Certification Name'] || cert['Certification Name'] || 
                           cert['Certification Title'] || 'Certification'}
                        </h5>
                        <p className="text-gray-500 text-xs mt-1">
                          {cert['Date'] || cert['Year'] || 'Date'}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Achievements */}
              {achievements.length > 0 && (
                <div>
                  <h3 className="text-lg font-bold text-black mb-3 flex items-center">
                    <Star className="w-4 h-4 mr-2" />
                    Achievements
                  </h3>
                  <div className="space-y-2">
                    {achievements.map((achievement, index) => {
                      const achievementTitle = typeof achievement === 'string' ? achievement :
                                             achievement['Achievement'] || achievement['Achievements'] || 
                                             achievement['Title'] || achievement['Achievement Title'] ||
                                             Object.values(achievement || {})[0] || 'Achievement';
                      return (
                        <div key={index} className="bg-gray-50 p-3 rounded-lg">
                          <p className="text-black font-medium text-sm break-words">
                            {achievementTitle}
                          </p>
                          {achievement['Description'] && (
                            <p className="text-gray-600 text-xs mt-1 break-words">{achievement['Description']}</p>
                          )}
                          {achievement['Year'] && (
                            <p className="text-gray-500 text-xs mt-1">{achievement['Year']}</p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Extracurricular Activities */}
            {(activities.length > 0 || extracurricular.length > 0) && renderSection(
              "Activities",
              <div className="space-y-3">
                {(activities.length > 0 ? activities : extracurricular).map((activity, index) => {
                  const activityTitle = typeof activity === 'string' ? activity :
                                       activity['Activities'] || activity['Activity'] || 
                                       activity['Activity Title'] || Object.values(activity || {})[0] || 'Activity';
                  return (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-3 hover:shadow-md transition-all duration-300">
                      <h4 className="font-semibold text-black text-sm mb-1 break-words">
                        {activityTitle}
                      </h4>
                      {activity['Description'] && (
                        <p className="text-gray-700 text-sm break-words">{activity['Description']}</p>
                      )}
                      {activity['Year'] && (
                        <p className="text-gray-500 text-xs mt-1">{activity['Year']}</p>
                      )}
                    </div>
                  );
                })}
              </div>,
              <Activity className="w-5 h-5" />
            )}
          </div>
        </div>
      </div>

      {/* Footer with Interests */}
      {interests.length > 0 && (
        <div className="bg-black text-white p-6 mt-6">
          <h3 className="text-lg font-bold mb-3 uppercase tracking-wide">Interests & Hobbies</h3>
          <div className="flex flex-wrap gap-2">
            {interests.map((interest, index) => {
              const interestText = typeof interest === 'string' ? interest : 
                                 interest?.Interests || interest?.Interest || 
                                 interest?.name || Object.values(interest || {})[0] || '';
              return (
                <span
                  key={index}
                  className="px-3 py-1 bg-white/10 text-white rounded-full text-sm font-medium hover:bg-white/20 transition-all duration-300 break-words"
                >
                  {interestText}
                </span>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
 
export default UrbanMonochromeTemplate;