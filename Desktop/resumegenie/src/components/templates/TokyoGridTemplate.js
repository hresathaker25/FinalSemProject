import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Globe, Award, Briefcase, GraduationCap, Code, Users, Calendar, ExternalLink, Star, Target, Zap, BookOpen, User } from 'lucide-react';

const TokyoGridTemplate = ({ resumeData, selectedCareer }) => {
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

  // Icon mapping for different sections
  const getContactIcon = (label) => {
    if (!label) return <ExternalLink className="w-4 h-4" />;
    const lowerLabel = label.toLowerCase();
    if (lowerLabel.includes('phone')) return <Phone className="w-4 h-4" />;
    if (lowerLabel.includes('email')) return <Mail className="w-4 h-4" />;
    if (lowerLabel.includes('linkedin')) return <Linkedin className="w-4 h-4" />;
    if (lowerLabel.includes('github')) return <Github className="w-4 h-4" />;
    if (lowerLabel.includes('location')) return <MapPin className="w-4 h-4" />;
    if (lowerLabel.includes('portfolio') || lowerLabel.includes('link')) return <Globe className="w-4 h-4" />;
    return <ExternalLink className="w-4 h-4" />;
  };

  const renderSkillPill = (skill, index, color = "bg-gray-50 text-gray-700") => {
    const skillText = typeof skill === 'string' ? skill : skill?.name || Object.values(skill || {})[0] || '';
    if (!skillText) return null;
    
    return (
      <span
        key={index}
        className={`inline-block px-3 py-1 ${color} text-xs font-medium rounded-md mr-2 mb-1 border border-gray-200`}
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
            <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
            <span className="text-sm leading-relaxed">{line.replace(/^[•-]\s*/, '')}</span>
          </div>
        ) : (
          <span className="text-sm leading-relaxed">{line}</span>
        )}
      </div>
    ));
  };

  const GridCard = ({ children, className = "", span = 1 }) => (
    <div 
      className={`bg-white rounded-lg border border-gray-200 p-4 shadow-sm ${className}`} 
      style={{ gridColumn: `span ${span}` }}
    >
      {children}
    </div>
  );

  const SectionHeader = ({ title, icon, accent = "bg-gray-600" }) => (
    <div className="flex items-center mb-3">
      <div className={`${accent} rounded-lg p-2 mr-3`}>
        <div className="text-white">{icon}</div>
      </div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
    </div>
  );

  return (
    <div className="a4-page content-flow">
      {/* Grid Container */}
      <div className="grid grid-cols-12 gap-3 auto-rows-min h-full">
        
        {/* Header Section - Full Width */}
        <GridCard span={12} className="section bg-gray-900 text-white mb-4">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <h1 className="text-2xl lg:text-3xl font-bold mb-2 text-wrap-anywhere">
                {header['Full Name'] || 'Your Name'}
              </h1>
              <p className="text-base text-gray-300 mb-3 text-wrap-anywhere">
                {header['Professional Title'] || 'Professional Title'}
              </p>
              
              {/* Contact Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {Object.entries(header).map(([key, value]) => {
                  if (!value || key === 'Full Name' || key === 'Professional Title' || key === 'Profile Photo') return null;
                  return (
                    <div key={key} className="flex items-center space-x-2">
                      <div className="text-gray-400 flex-shrink-0">
                        {getContactIcon(key)}
                      </div>
                      <span className="text-xs text-gray-300 text-wrap-anywhere truncate">{value}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Profile Photo */}
            {header['Profile Photo'] && (
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-lg overflow-hidden border-2 border-gray-700">
                  <img
                    src={header['Profile Photo']}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
          </div>
        </GridCard>

        {/* Summary Section - Full Width */}
        {summary['Summary'] && (
          <GridCard span={12} className="section border-l-4 border-blue-500 mb-4">
            <SectionHeader title="Professional Summary" icon={<User className="w-4 h-4" />} accent="bg-blue-500" />
            <div className="text-gray-700 text-sm leading-relaxed text-wrap-anywhere">
              {formatText(summary['Summary'])}
            </div>
          </GridCard>
        )}

        {/* Skills Section - Left Column */}
        <div className="col-span-12 lg:col-span-4 space-y-3">
          {/* Technical Skills */}
          {techSkills.length > 0 && (
            <GridCard className="section border-l-4 border-purple-500 mb-3">
              <SectionHeader title="Technical Skills" icon={<Code className="w-4 h-4" />} accent="bg-purple-500" />
              <div className="flex flex-wrap gap-1">
                {techSkills.map((skill, index) => 
                  renderSkillPill(skill, index, "bg-purple-50 text-purple-700")
                )}
              </div>
            </GridCard>
          )}

          {/* Career-specific Skills */}
          {coreLegalSkills.length > 0 && (
            <GridCard className="section border-l-4 border-green-500 mb-3">
              <SectionHeader title="Legal Skills" icon={<BookOpen className="w-4 h-4" />} accent="bg-green-500" />
              <div className="flex flex-wrap gap-1">
                {coreLegalSkills.map((skill, index) => 
                  renderSkillPill(skill, index, "bg-green-50 text-green-700")
                )}
              </div>
            </GridCard>
          )}

          {coreSalesSkills.length > 0 && (
            <GridCard className="section border-l-4 border-orange-500 mb-3">
              <SectionHeader title="Sales Skills" icon={<Target className="w-4 h-4" />} accent="bg-orange-500" />
              <div className="flex flex-wrap gap-1">
                {coreSalesSkills.map((skill, index) => 
                  renderSkillPill(skill, index, "bg-orange-50 text-orange-700")
                )}
              </div>
            </GridCard>
          )}

          {coreMedicalSkills.length > 0 && (
            <GridCard className="section border-l-4 border-red-500 mb-3">
              <SectionHeader title="Medical Skills" icon={<Zap className="w-4 h-4" />} accent="bg-red-500" />
              <div className="flex flex-wrap gap-1">
                {coreMedicalSkills.map((skill, index) => 
                  renderSkillPill(skill, index, "bg-red-50 text-red-700")
                )}
              </div>
            </GridCard>
          )}

          {skills.length > 0 && (
            <GridCard className="section border-l-4 border-indigo-500 mb-3">
              <SectionHeader title="Core Skills" icon={<Star className="w-4 h-4" />} accent="bg-indigo-500" />
              <div className="flex flex-wrap gap-1">
                {skills.map((skill, index) => 
                  renderSkillPill(skill, index, "bg-indigo-50 text-indigo-700")
                )}
              </div>
            </GridCard>
          )}

          {/* Soft Skills */}
          {softSkills.length > 0 && (
            <GridCard className="section border-l-4 border-teal-500 mb-3">
              <SectionHeader title="Soft Skills" icon={<Users className="w-4 h-4" />} accent="bg-teal-500" />
              <div className="flex flex-wrap gap-1">
                {softSkills.map((skill, index) => 
                  renderSkillPill(skill, index, "bg-teal-50 text-teal-700")
                )}
              </div>
            </GridCard>
          )}

          {/* Tools & Software */}
          {(tools.length > 0 || labSkills.length > 0) && (
            <GridCard className="section border-l-4 border-yellow-500 mb-3">
              <SectionHeader 
                title={tools.length > 0 ? "Tools & Software" : "Lab & Technical Skills"} 
                icon={<Code className="w-4 h-4" />} 
                accent="bg-yellow-500" 
              />
              <div className="flex flex-wrap gap-1">
                {(tools.length > 0 ? tools : labSkills).map((tool, index) => 
                  renderSkillPill(tool, index, "bg-yellow-50 text-yellow-700")
                )}
              </div>
            </GridCard>
          )}

          {/* Languages */}
          {languages.length > 0 && (
            <GridCard className="section border-l-4 border-pink-500 mb-3">
              <SectionHeader title="Languages" icon={<Globe className="w-4 h-4" />} accent="bg-pink-500" />
              <div className="flex flex-wrap gap-1">
                {languages.map((language, index) => 
                  renderSkillPill(language, index, "bg-pink-50 text-pink-700")
                )}
              </div>
            </GridCard>
          )}

          {/* Certifications */}
          {certifications.length > 0 && (
            <GridCard className="section border-l-4 border-cyan-500 mb-3">
              <SectionHeader title="Certifications" icon={<Award className="w-4 h-4" />} accent="bg-cyan-500" />
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
            </GridCard>
          )}

          {/* Achievements */}
          {achievements.length > 0 && (
            <GridCard className="section border-l-4 border-emerald-500 mb-3">
              <SectionHeader title="Achievements" icon={<Star className="w-4 h-4" />} accent="bg-emerald-500" />
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
            </GridCard>
          )}

          {/* Interests */}
          {interests.length > 0 && (
            <GridCard className="section border-l-4 border-violet-500 mb-3">
              <SectionHeader title="Interests" icon={<Users className="w-4 h-4" />} accent="bg-violet-500" />
              <div className="flex flex-wrap gap-1">
                {interests.map((interest, index) => 
                  renderSkillPill(interest, index, "bg-violet-50 text-violet-700")
                )}
              </div>
            </GridCard>
          )}
        </div>

        {/* Main Content - Right Column */}
        <div className="col-span-12 lg:col-span-8 space-y-3">
          {/* Work Experience */}
          {getWorkExperience().length > 0 && (
            <GridCard span={12} className="section border-l-4 border-blue-500 mb-3">
              <SectionHeader title="Experience" icon={<Briefcase className="w-4 h-4" />} accent="bg-blue-500" />
              
              <div className="space-y-4">
                {getWorkExperience().map((job, index) => (
                  <div key={index} className="relative pl-4 border-l-2 border-gray-200 last:border-l-0">
                    <div className="absolute w-2 h-2 bg-blue-500 rounded-full -left-1 top-2"></div>
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
            </GridCard>
          )}

          {/* Education */}
          {(getEducationData()['Degree Name'] || getEducationData()['Institution Name']) && (
            <GridCard span={12} className="section border-l-4 border-green-500 mb-3">
              <SectionHeader title="Education" icon={<GraduationCap className="w-4 h-4" />} accent="bg-green-500" />
              
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
            </GridCard>
          )}

          {/* Projects */}
          {projects.length > 0 && (
            <GridCard span={12} className="section border-l-4 border-purple-500 mb-3">
              <SectionHeader title="Projects" icon={<Code className="w-4 h-4" />} accent="bg-purple-500" />
              
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
            </GridCard>
          )}

          {/* Publications (for Law career) */}
          {publications.length > 0 && (
            <GridCard span={12} className="section border-l-4 border-indigo-500 mb-3">
              <SectionHeader title="Publications" icon={<BookOpen className="w-4 h-4" />} accent="bg-indigo-500" />
              
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
            </GridCard>
          )}
        </div>
      </div>
    </div>
  );
};

export default TokyoGridTemplate;