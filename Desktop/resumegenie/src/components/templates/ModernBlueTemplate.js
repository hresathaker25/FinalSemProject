import React, { useEffect } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Globe } from 'lucide-react';

const ModernBlueTemplate = ({ resumeData, selectedCareer }) => {
  const headerData = resumeData.header || {};

  // Handle PDF mode adjustments
  useEffect(() => {
    const element = document.getElementById('resume-preview');
    if (element && element.classList.contains('pdf-generation-mode')) {
      // Apply PDF-specific adjustments
      element.style.fontFamily = 'Arial, sans-serif';
      element.style.fontSize = '11pt';
    }
  }, []);

  const renderSection = (sectionKey, sectionTitle, customRenderer = null) => {
    const sectionData = resumeData[sectionKey];
    if (!sectionData) return null;

    // Check if section has data
    const hasData = Array.isArray(sectionData) 
      ? sectionData.some(item => Object.values(item).some(val => val))
      : Object.values(sectionData).some(val => val);
    
    if (!hasData) return null;

    return (
      <div key={sectionKey} className="mb-8">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 pb-2 border-b border-blue-200">
            {sectionTitle}
          </h2>
        </div>
        
        {customRenderer ? customRenderer(sectionData) : renderDefaultSection(sectionData, Array.isArray(sectionData))}
      </div>
    );
  };

  const renderDefaultSection = (data, isMultiple) => {
    if (isMultiple) {
      return (
        <div className="space-y-4">
          {data.map((item, index) => {
            const hasItemData = Object.values(item).some(val => val);
            if (!hasItemData) return null;
            
            return (
              <div key={`item-${index}`} className="bg-white p-5 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                {Object.entries(item).map(([key, value]) => {
                  if (!value) return null;
                  return (
                    <div key={`${key}-${index}`} className="mb-3 last:mb-0">
                      {key.toLowerCase().includes('description') || 
                       key.toLowerCase().includes('responsibilities') ||
                       key.toLowerCase().includes('contribution') ||
                       key.toLowerCase().includes('duties') ? (
                        <div className="text-gray-700 leading-relaxed">
                          {value.split('\n').map((line, i) => (
                            <div key={`line-${index}-${i}`} className="flex items-start mb-2 last:mb-0">
                              <div className="w-1 h-1 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></div>
                              <span>{line}</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                            {key}:
                          </span>
                          <span className="text-gray-800 font-medium">{value}</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      );
    } else {
      return (
        <div className="bg-white p-5 rounded-lg border border-gray-200">
          {Object.entries(data).map(([key, value]) => {
            if (!value) return null;
            return (
              <div key={key} className="text-gray-700 leading-relaxed whitespace-pre-line">
                {value}
              </div>
            );
          })}
        </div>
      );
    }
  };

  const renderWorkExperience = (data) => {
    return (
      <div className="space-y-6">
        {data.map((item, index) => {
          const hasItemData = Object.values(item).some(val => val);
          if (!hasItemData) return null;
          
          return (
            <div key={`work-${index}`} className="relative pl-6">
              {/* Timeline dot */}
              <div className="absolute left-0 top-1 w-2 h-2 bg-blue-500 rounded-full"></div>
              {index !== data.length - 1 && (
                <div className="absolute left-1 top-3 w-0.5 h-16 bg-gray-200"></div>
              )}
              
              <div className="bg-white p-5 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                <div className="flex flex-wrap justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item['Job Title'] || item['Role'] || item['Position']}
                  </h3>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm font-medium">
                    {item['Duration']}
                  </span>
                </div>
                
                <p className="text-blue-600 font-medium mb-3">
                  {item['Company Name'] || item['Organization / Firm'] || item['Company / Client']}
                </p>
                
                {(item['Responsibilities & Achievements'] || item['Responsibilities & Legal Work'] || item['Duties']) && (
                  <div className="space-y-2">
                    {(item['Responsibilities & Achievements'] || item['Responsibilities & Legal Work'] || item['Duties']).split('\n').filter(line => line.trim()).map((line, i) => (
                      <div key={`resp-${index}-${i}`} className="flex items-start">
                        <div className="w-1 h-1 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">{line.trim()}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const renderEducation = (data) => {
    const educationData = Array.isArray(data) ? data : [data];
    
    return (
      <div className="grid gap-4">
        {educationData.map((item, index) => {
          const hasItemData = Object.values(item).some(val => val);
          if (!hasItemData) return null;
          
          return (
            <div key={`edu-${index}`} className="bg-white p-5 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
              <div className="flex flex-wrap justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item['Degree Name'] || item['Degree / Course Name']}
                </h3>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm font-medium">
                  {item['Duration'] || item['Duration (Start – End or \'Present\')']}
                </span>
              </div>
              
              <p className="text-blue-600 font-medium mb-2">
                {item['Institution Name']}
              </p>
              
              {(item['CGPA or Percentage'] || item['CGPA / Percentage']) && (
                <p className="text-gray-600">
                  <span className="font-medium">Grade: </span>
                  {item['CGPA or Percentage'] || item['CGPA / Percentage']}
                </p>
              )}
            </div>
          );
        })}
        
        {/* School Education */}
        {(data['10th Grade School Name & Percentage'] || data['10th School Name']) && (
          <div className="grid md:grid-cols-2 gap-4 mt-4" key="school-education">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-gray-800 mb-2">10th Grade</h4>
              <p className="text-sm text-gray-600">
                {data['10th Grade School Name & Percentage'] || data['10th School Name']}
                {data['10th Percentage'] && ` - ${data['10th Percentage']}`}
              </p>
            </div>
            
            {(data['12th Grade School Name & Percentage'] || data['12th School Name']) && (
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-2">12th Grade</h4>
                <p className="text-sm text-gray-600">
                  {data['12th Grade School Name & Percentage'] || data['12th School Name']}
                  {data['12th Percentage'] && ` - ${data['12th Percentage']}`}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  const renderSkills = (data, title) => {
    return (
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          {title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {data.map((item, index) => {
            const skillText = Object.values(item)[0];
            if (!skillText) return null;
            
            return (
              <span key={`skill-${index}`}
                    className="bg-blue-50 text-blue-700 px-3 py-1 rounded-md text-sm font-medium border border-blue-200 hover:bg-blue-100 transition-colors">
                {skillText}
              </span>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="flex flex-col md:flex-row items-center p-8 md:p-10">
          {/* Profile Photo */}
          <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
            {headerData['Profile Photo'] ? (
              <img 
                src={headerData['Profile Photo']} 
                alt="Profile" 
                className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-3 border-white shadow-lg"
              />
            ) : (
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-white/20 border-3 border-white flex items-center justify-center">
                <span className="text-4xl text-white/70">👤</span>
              </div>
            )}
          </div>
          
          {/* Name and Title */}
          <div className="text-center md:text-left flex-1">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 leading-tight">
              {headerData['Full Name'] || 'Your Name'}
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-6 font-normal">
              {headerData['Professional Title'] || 'Professional Title'}
            </p>
            
            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
              {headerData['Phone Number'] && (
                <div className="flex items-center justify-center md:justify-start">
                  <Phone className="w-4 h-4 mr-2 opacity-80" />
                  <span>{headerData['Phone Number']}</span>
                </div>
              )}
              {headerData['Email Address'] && (
                <div className="flex items-center justify-center md:justify-start">
                  <Mail className="w-4 h-4 mr-2 opacity-80" />
                  <span>{headerData['Email Address']}</span>
                </div>
              )}
              {headerData['Location (City, Country)'] && (
                <div className="flex items-center justify-center md:justify-start">
                  <MapPin className="w-4 h-4 mr-2 opacity-80" />
                  <span>{headerData['Location (City, Country)']}</span>
                </div>
              )}
              {headerData['LinkedIn Profile'] && (
                <div className="flex items-center justify-center md:justify-start">
                  <Linkedin className="w-4 h-4 mr-2 opacity-80" />
                  <span>{headerData['LinkedIn Profile']}</span>
                </div>
              )}
              {headerData['Github'] && (
                <div className="flex items-center justify-center md:justify-start">
                  <Github className="w-4 h-4 mr-2 opacity-80" />
                  <span>{headerData['Github']}</span>
                </div>
              )}
              {(headerData['Portfolio / Content Link'] || headerData['Instagram / YouTube Handle']) && (
                <div className="flex items-center justify-center md:justify-start">
                  <Globe className="w-4 h-4 mr-2 opacity-80" />
                  <span>{headerData['Portfolio / Content Link'] || headerData['Instagram / YouTube Handle']}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8 md:p-10 bg-gray-50">
        {/* Professional Summary */}
        {renderSection('summary', 'Professional Summary', (data) => (
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <p className="text-gray-700 leading-relaxed text-base">
              {data.Summary}
            </p>
          </div>
        ))}

        {/* Work Experience */}
        {(resumeData.work || resumeData.workExperience || resumeData.internships || resumeData.experience) && 
          renderSection(
            resumeData.work ? 'work' : resumeData.workExperience ? 'workExperience' : resumeData.internships ? 'internships' : 'experience',
            'Professional Experience', 
            renderWorkExperience
          )
        }

        {/* Education */}
        {(resumeData.education || resumeData.schooling) && 
          renderSection('education', 'Education', renderEducation)
        }

        {/* Projects */}
        {renderSection('projects', 'Projects & Portfolio')}

        {/* Skills Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            {resumeData.techSkills && renderSkills(resumeData.techSkills, 'Technical Skills')}
            {resumeData.skills && renderSkills(resumeData.skills, 'Core Skills')}
            {resumeData.coreLegalSkills && renderSkills(resumeData.coreLegalSkills, 'Legal Skills')}
            {resumeData.coreSalesSkills && renderSkills(resumeData.coreSalesSkills, 'Sales Skills')}
            {resumeData.coreMedicalSkills && renderSkills(resumeData.coreMedicalSkills, 'Medical Skills')}
            {resumeData.teachingSkills && resumeData.teachingSkills['Core Teaching Skills'] && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Teaching Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {resumeData.teachingSkills['Core Teaching Skills'].split(',').map((skill, index) => (
                    <span key={`teaching-${index}`}
                          className="bg-blue-50 text-blue-700 px-3 py-1 rounded-md text-sm font-medium border border-blue-200">
                      {skill.trim()}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <div>
            {resumeData.softSkills && renderSkills(resumeData.softSkills, 'Soft Skills')}
            {resumeData.otherSkills && renderSkills(resumeData.otherSkills, 'Additional Skills')}
            {resumeData.tools && renderSkills(resumeData.tools, 'Tools & Software')}
            {resumeData.labSkills && renderSkills(resumeData.labSkills, 'Lab & Technical Skills')}
          </div>
        </div>

        {/* Additional Sections */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            {renderSection('certifications', 'Certifications')}
            {renderSection('achievements', 'Achievements & Awards')}
            {renderSection('publications', 'Publications')}
          </div>
          
          <div>
            {renderSection('activities', 'Activities & Leadership')}
            {renderSection('languages', 'Languages')}
            {renderSection('interests', 'Interests & Hobbies')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernBlueTemplate;