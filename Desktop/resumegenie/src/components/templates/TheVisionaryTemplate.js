import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Globe, Award, Briefcase, GraduationCap, Code, Users, Calendar, ExternalLink, Star, Target, Zap, BookOpen, Eye } from 'lucide-react';

const TheVisionaryTemplate = ({ resumeData, selectedCareer }) => {
  // Safe data access with fallbacks
  const header = resumeData?.header || {};
  const summary = resumeData?.summary || {};
  const education = resumeData?.education || {};
  const work = resumeData?.work || [];
  const projects = resumeData?.projects || [];
  const certifications = resumeData?.certifications || [];
  const achievements = resumeData?.achievements || [];
  const techSkills = resumeData?.techSkills || [];
  const softSkills = resumeData?.softSkills || [];
  const languages = resumeData?.languages || [];
  const interests = resumeData?.interests || [];
  
  // Career-specific data mapping
  const coreLegalSkills = resumeData?.coreLegalSkills || [];
  const coreSalesSkills = resumeData?.coreSalesSkills || [];
  const publications = resumeData?.publications || [];
  const coreMedicalSkills = resumeData?.coreMedicalSkills || [];
  const labSkills = resumeData?.labSkills || [];
  const internships = resumeData?.internships || [];
  const schooling = resumeData?.schooling || {};
  const skills = resumeData?.skills || [];
  const tools = resumeData?.tools || [];
  const workExperience = resumeData?.workExperience || [];
  const experience = resumeData?.experience || [];

  // Icon mapping for different sections
  const getContactIcon = (label) => {
    if (!label) return <ExternalLink className="w-3 h-3" />;
    const lowerLabel = label.toLowerCase();
    if (lowerLabel.includes('phone')) return <Phone className="w-3 h-3" />;
    if (lowerLabel.includes('email')) return <Mail className="w-3 h-3" />;
    if (lowerLabel.includes('linkedin')) return <Linkedin className="w-3 h-3" />;
    if (lowerLabel.includes('github')) return <Github className="w-3 h-3" />;
    if (lowerLabel.includes('location')) return <MapPin className="w-3 h-3" />;
    if (lowerLabel.includes('portfolio') || lowerLabel.includes('link')) return <Globe className="w-3 h-3" />;
    return <ExternalLink className="w-3 h-3" />;
  };

  const renderSkillBar = (skill, index, level = 80) => {
    const skillText = typeof skill === 'string' ? skill : skill?.name || Object.values(skill || {})[0] || '';
    if (!skillText) return null;
    
    return (
      <div key={index} className="mb-3">
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs font-medium text-gray-700">{skillText}</span>
          <span className="text-xs text-gray-500">{level}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1.5">
          <div 
            className="bg-gradient-to-r from-indigo-500 to-purple-600 h-1.5 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${level}%` }}
          ></div>
        </div>
      </div>
    );
  };

  const renderSkillPill = (skill, index, color = "bg-gray-100 text-gray-700") => {
    const skillText = typeof skill === 'string' ? skill : skill?.name || Object.values(skill || {})[0] || '';
    if (!skillText) return null;
    
    return (
      <span
        key={index}
        className={`inline-block px-2 py-1 ${color} text-xs font-medium rounded-full mr-2 mb-2 border`}
      >
        {skillText}
      </span>
    );
  };

  const formatText = (text) => {
    if (!text) return null;
    return text.split('\n').map((line, index) => (
      <div key={index} className={index > 0 ? 'mt-1' : ''}>
        {line.startsWith('•') || line.startsWith('-') ? (
          <div className="flex items-start">
            <div className="w-1 h-1 bg-indigo-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
            <span className="text-xs leading-relaxed text-gray-700">{line.replace(/^[•-]\s*/, '')}</span>
          </div>
        ) : (
          <span className="text-xs leading-relaxed text-gray-700">{line}</span>
        )}
      </div>
    ));
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

  return (
    <div className="a4-page content-flow">
      {/* Background Design Elements */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-indigo-100 to-transparent rounded-full opacity-50 -translate-y-24 translate-x-24"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-100 to-transparent rounded-full opacity-50 translate-y-16 -translate-x-16"></div>
      
      {/* Header Section */}
      <div className="section relative bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 text-white p-6 mb-6 rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <h1 className="text-2xl lg:text-3xl font-bold mb-2 text-wrap-anywhere">
                {header['Full Name'] || 'Your Name'}
              </h1>
              <p className="text-lg text-indigo-200 mb-4 text-wrap-anywhere">
                {header['Professional Title'] || 'Professional Title'}
              </p>
              
              {/* Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                {Object.entries(header).map(([key, value]) => {
                  if (!value || key === 'Full Name' || key === 'Professional Title' || key === 'Profile Photo') return null;
                  return (
                    <div key={key} className="flex items-center space-x-2 text-indigo-200 min-w-0 overflow-hidden">
                      <div className="flex-shrink-0">
                        {getContactIcon(key)}
                      </div>
                      <span className="text-wrap-anywhere truncate">{value}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Profile Photo */}
            {header['Profile Photo'] && (
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-lg overflow-hidden border-4 border-white/20 shadow-lg">
                  <img
                    src={header['Profile Photo']}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Professional Summary */}
      {summary['Summary'] && (
        <div className="section bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-4 border-l-4 border-indigo-500 mb-4">
          <h3 className="text-lg font-bold text-indigo-900 mb-3 flex items-center">
            <Eye className="w-5 h-5 mr-2 flex-shrink-0" />
            Professional Summary
          </h3>
          <div className="text-indigo-800 leading-relaxed text-wrap-anywhere text-sm">
            {formatText(summary['Summary'])}
          </div>
        </div>
      )}

      {/* Two Column Layout */}
      <div className="grid-3-col">
        {/* Left Column - Skills */}
        <div className="space-y-4">
          {/* Technical Skills */}
          {techSkills.length > 0 && (
            <div className="section bg-white rounded-lg p-4 shadow-sm border border-gray-200 mb-4">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <Code className="w-5 h-5 mr-2 flex-shrink-0" />
                Technical Skills
              </h3>
              <div className="space-y-3">
                {techSkills.map((skill, index) => 
                  renderSkillBar(skill, index, 85 + (index % 15))
                )}
              </div>
            </div>
          )}

          {/* Career-specific Skills */}
          {coreLegalSkills.length > 0 && (
            <div className="section bg-white rounded-lg p-4 shadow-sm border border-gray-200 mb-4">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <BookOpen className="w-5 h-5 mr-2 flex-shrink-0" />
                Legal Skills
              </h3>
              <div className="space-y-3">
                {coreLegalSkills.map((skill, index) => 
                  renderSkillBar(skill, index, 80 + (index % 20))
                )}
              </div>
            </div>
          )}

          {coreSalesSkills.length > 0 && (
            <div className="section bg-white rounded-lg p-4 shadow-sm border border-gray-200 mb-4">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <Target className="w-5 h-5 mr-2 flex-shrink-0" />
                Sales Skills
              </h3>
              <div className="space-y-3">
                {coreSalesSkills.map((skill, index) => 
                  renderSkillBar(skill, index, 75 + (index % 25))
                )}
              </div>
            </div>
          )}

          {coreMedicalSkills.length > 0 && (
            <div className="section bg-white rounded-lg p-4 shadow-sm border border-gray-200 mb-4">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <Zap className="w-5 h-5 mr-2 flex-shrink-0" />
                Medical Skills
              </h3>
              <div className="space-y-3">
                {coreMedicalSkills.map((skill, index) => 
                  renderSkillBar(skill, index, 80 + (index % 20))
                )}
              </div>
            </div>
          )}

          {skills.length > 0 && (
            <div className="section bg-white rounded-lg p-4 shadow-sm border border-gray-200 mb-4">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <Star className="w-5 h-5 mr-2 flex-shrink-0" />
                Core Skills
              </h3>
              <div className="space-y-3">
                {skills.map((skill, index) => 
                  renderSkillBar(skill, index, 70 + (index % 30))
                )}
              </div>
            </div>
          )}

          {/* Soft Skills */}
          {softSkills.length > 0 && (
            <div className="section bg-white rounded-lg p-4 shadow-sm border border-gray-200 mb-4">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <Users className="w-5 h-5 mr-2 flex-shrink-0" />
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, index) => 
                  renderSkillPill(skill, index, "bg-indigo-100 text-indigo-800 border-indigo-200")
                )}
              </div>
            </div>
          )}

          {/* Tools & Software */}
          {(tools.length > 0 || labSkills.length > 0) && (
            <div className="section bg-white rounded-lg p-4 shadow-sm border border-gray-200 mb-4">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <Code className="w-5 h-5 mr-2 flex-shrink-0" />
                {tools.length > 0 ? "Tools & Software" : "Lab & Technical Skills"}
              </h3>
              <div className="flex flex-wrap gap-2">
                {(tools.length > 0 ? tools : labSkills).map((tool, index) => 
                  renderSkillPill(tool, index, "bg-purple-100 text-purple-800 border-purple-200")
                )}
              </div>
            </div>
          )}

          {/* Languages */}
          {languages.length > 0 && (
            <div className="section bg-white rounded-lg p-4 shadow-sm border border-gray-200 mb-4">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <Globe className="w-5 h-5 mr-2 flex-shrink-0" />
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {languages.map((language, index) => 
                  renderSkillPill(language, index, "bg-green-100 text-green-800 border-green-200")
                )}
              </div>
            </div>
          )}

          {/* Certifications */}
          {certifications.length > 0 && (
            <div className="section bg-white rounded-lg p-4 shadow-sm border border-gray-200 mb-4">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <Award className="w-5 h-5 mr-2 flex-shrink-0" />
                Certifications
              </h3>
              <div className="space-y-2">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-gray-50 rounded p-2 border border-gray-200">
                    <h5 className="font-medium text-gray-800 text-sm text-wrap-anywhere">
                      {cert['Course/Certification Name'] || cert['Certification Name'] || cert['Certification Title'] || 'Certification'}
                    </h5>
                    <p className="text-gray-600 text-xs text-wrap-anywhere">
                      {cert['Date'] || cert['Year'] || 'Date'}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Achievements */}
          {achievements.length > 0 && (
            <div className="section bg-white rounded-lg p-4 shadow-sm border border-gray-200 mb-4">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <Star className="w-5 h-5 mr-2 flex-shrink-0" />
                Achievements
              </h3>
              <div className="space-y-2">
                {achievements.map((achievement, index) => {
                  const achievementText = typeof achievement === 'string' ? achievement :
                    achievement['Achievement'] || achievement['Achievements'] || achievement['Title'] ||
                    Object.values(achievement || {})[0] || 'Achievement';
                  
                  return (
                    <div key={index} className="bg-gray-50 rounded p-2 border border-gray-200">
                      <p className="text-gray-700 text-sm font-medium text-wrap-anywhere">
                        {achievementText}
                      </p>
                      {achievement['Year'] && (
                        <p className="text-gray-500 text-xs mt-1 text-wrap-anywhere">{achievement['Year']}</p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Interests */}
          {interests.length > 0 && (
            <div className="section bg-white rounded-lg p-4 shadow-sm border border-gray-200 mb-4">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <Users className="w-5 h-5 mr-2 flex-shrink-0" />
                Interests
              </h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => 
                  renderSkillPill(interest, index, "bg-pink-100 text-pink-800 border-pink-200")
                )}
              </div>
            </div>
          )}
        </div>

        {/* Right Column - Main Content */}
        <div className="lg:col-span-2 space-y-4">
          {/* Work Experience */}
          {getWorkExperience().length > 0 && (
            <div className="section bg-white rounded-lg p-4 shadow-sm border border-gray-200 mb-4">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <Briefcase className="w-5 h-5 mr-2 flex-shrink-0" />
                Experience
              </h3>
              
              <div className="space-y-4">
                {getWorkExperience().map((job, index) => (
                  <div key={index} className="relative pl-4 border-l-2 border-indigo-200 last:border-l-0">
                    <div className="absolute w-2 h-2 bg-indigo-500 rounded-full -left-1 top-2"></div>
                    <div className="pb-3">
                      <h4 className="text-lg font-semibold text-gray-800 text-wrap-anywhere">
                        {job['Job Title'] || job['Role'] || job['Position'] || 'Job Title'}
                      </h4>
                      <p className="text-gray-600 font-medium text-wrap-anywhere">
                        {job['Company Name'] || job['Organization / Firm'] || job['Hospital / Clinic Name'] || 'Company'}
                      </p>
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <Calendar className="w-4 h-4 mr-1 flex-shrink-0" />
                        <span className="text-wrap-anywhere">{job['Duration'] || 'Duration'}</span>
                      </div>
                      <div className="text-gray-700 text-sm leading-relaxed text-wrap-anywhere">
                        {formatText(job['Responsibilities & Achievements'] || job['Responsibilities'] || job['Responsibilities & Legal Work'] || job['Key Responsibilities'] || job['Duties'] || '')}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          {(getEducationData()['Degree Name'] || getEducationData()['Institution Name']) && (
            <div className="section bg-white rounded-lg p-4 shadow-sm border border-gray-200 mb-4">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <GraduationCap className="w-5 h-5 mr-2 flex-shrink-0" />
                Education
              </h3>
              
              <div className="space-y-3">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 text-wrap-anywhere">
                    {getEducationData()['Degree Name'] || getEducationData()['Degree / Course Name'] || 'Degree'}
                  </h4>
                  <p className="text-gray-600 font-medium text-wrap-anywhere">
                    {getEducationData()['Institution Name'] || 'Institution'}
                  </p>
                  <div className="flex flex-wrap items-center justify-between text-sm text-gray-500 mt-1 gap-2">
                    <span className="text-wrap-anywhere">{getEducationData()['Duration'] || getEducationData()['Duration (Start – End or \'Present\')'] || 'Duration'}</span>
                    {(getEducationData()['CGPA or Percentage'] || getEducationData()['CGPA / Percentage']) && (
                      <span className="font-medium text-wrap-anywhere">
                        {getEducationData()['CGPA or Percentage'] || getEducationData()['CGPA / Percentage']}
                      </span>
                    )}
                  </div>
                </div>
                
                {/* 10th & 12th Grade */}
                {(getEducationData()['10th Grade School Name & Percentage'] || schooling['10th School Name']) && (
                  <div className="pt-3 border-t border-gray-100">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                      {(getEducationData()['12th Grade School Name & Percentage'] || schooling['12th School Name']) && (
                        <div className="text-wrap-anywhere min-w-0">
                          <span className="font-medium text-gray-700">12th Grade:</span>
                          <p className="text-gray-600 text-wrap-anywhere">
                            {getEducationData()['12th Grade School Name & Percentage'] || 
                             `${schooling['12th School Name']} - ${schooling['12th Percentage']}`}
                          </p>
                        </div>
                      )}
                      <div className="text-wrap-anywhere min-w-0">
                        <span className="font-medium text-gray-700">10th Grade:</span>
                        <p className="text-gray-600 text-wrap-anywhere">
                          {getEducationData()['10th Grade School Name & Percentage'] || 
                           `${schooling['10th School Name']} - ${schooling['10th Percentage']}`}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Projects */}
          {projects.length > 0 && (
            <div className="section bg-white rounded-lg p-4 shadow-sm border border-gray-200 mb-4">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <Code className="w-5 h-5 mr-2 flex-shrink-0" />
                Projects
              </h3>
              
              <div className="grid grid-cols-1 gap-3">
                {projects.map((project, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-3">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2 text-wrap-anywhere">
                      {project['Project Title'] || project['Title'] || project['Project/Campaign Name'] || 'Project Title'}
                    </h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm mb-2">
                      {(project['Tools Used'] || project['Tools/Technologies Used'] || project['Platform Used']) && (
                        <div className="text-wrap-anywhere min-w-0">
                          <span className="font-medium text-gray-700">Tools:</span>
                          <p className="text-gray-600 text-wrap-anywhere">
                            {project['Tools Used'] || project['Tools/Technologies Used'] || project['Platform Used']}
                          </p>
                        </div>
                      )}
                      {(project['Year / Role'] || project['Goal / Audience'] || project['Project Type']) && (
                        <div className="text-wrap-anywhere min-w-0">
                          <span className="font-medium text-gray-700">Details:</span>
                          <p className="text-gray-600 text-wrap-anywhere">
                            {project['Year / Role'] || project['Goal / Audience'] || project['Project Type']}
                          </p>
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      {project['Description'] && (
                        <div className="text-gray-700 text-sm text-wrap-anywhere">
                          {formatText(project['Description'])}
                        </div>
                      )}
                      {project['Your Contribution'] && (
                        <div className="text-gray-700 text-sm text-wrap-anywhere">
                          <span className="font-medium">Contribution: </span>
                          {formatText(project['Your Contribution'])}
                        </div>
                      )}
                      {(project['Result / Metrics'] || project['Key Insights / Results'] || project['Conversion / Engagement Stats']) && (
                        <div className="text-gray-700 text-sm text-wrap-anywhere">
                          <span className="font-medium">Results: </span>
                          {project['Result / Metrics'] || project['Key Insights / Results'] || project['Conversion / Engagement Stats']}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Publications (for Law career) */}
          {publications.length > 0 && (
            <div className="section bg-white rounded-lg p-4 shadow-sm border border-gray-200 mb-4">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <BookOpen className="w-5 h-5 mr-2 flex-shrink-0" />
                Publications
              </h3>
              
              <div className="space-y-3">
                {publications.map((pub, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-3">
                    <h4 className="font-semibold text-gray-800 text-wrap-anywhere">
                      {pub['Article / Blog Title'] || 'Publication Title'}
                    </h4>
                    {pub['Platform (if published)'] && (
                      <p className="text-gray-600 text-sm text-wrap-anywhere">{pub['Platform (if published)']}</p>
                    )}
                    {pub['Link'] && (
                      <a href={pub['Link']} className="text-blue-600 hover:text-blue-800 text-sm flex items-center mt-1 break-all" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 mr-1 flex-shrink-0" />
                        View Publication
                      </a>
                    )}
                    {pub['Brief Summary'] && (
                      <p className="text-gray-700 text-sm mt-2 text-wrap-anywhere">{pub['Brief Summary']}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TheVisionaryTemplate;