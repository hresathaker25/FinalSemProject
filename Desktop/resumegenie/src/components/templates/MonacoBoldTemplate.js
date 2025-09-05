import React from "react";
import { Phone, Mail, MapPin, Linkedin, Github, Globe, User, Briefcase, GraduationCap, Award, Target, Code, Heart, Languages, Star } from "lucide-react";

const MonacoBoldTemplate = ({ resumeData, selectedCareer }) => {
  const renderSection = (sectionKey, title, icon, isMultiple = false) => {
    const data = resumeData[sectionKey];
    if (!data || (Array.isArray(data) && data.length === 0) || 
        (typeof data === 'object' && Object.keys(data).length === 0)) {
      return null;
    }

    return (
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-2 rounded-lg">
            {React.createElement(icon, { className: "w-4 h-4 text-white" })}
          </div>
          <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wider">
            {title}
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-indigo-200 to-transparent"></div>
        </div>
        
        <div className="space-y-4">
          {renderSectionContent(sectionKey, data, isMultiple)}
        </div>
      </div>
    );
  };

  const renderSectionContent = (sectionKey, data, isMultiple) => {
    if (isMultiple && Array.isArray(data)) {
      return data.map((item, index) => (
        <div key={index} className="border-l-3 border-indigo-300 pl-4 pb-3">
          {renderSingleItem(sectionKey, item)}
        </div>
      ));
    } else {
      return <div>{renderSingleItem(sectionKey, data)}</div>;
    }
  };

  const renderSingleItem = (sectionKey, item) => {
    if (!item || typeof item !== 'object') return null;

    switch (sectionKey) {
      case 'work':
      case 'workExperience':
        return (
          <div className="group">
            <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-gray-800 text-sm leading-tight">
                  {item['Job Title'] || item['Role'] || item['Position']}
                </h3>
                <p className="font-semibold text-indigo-700 text-sm">
                  {item['Company Name'] || item['Company / Client'] || item['Organization / Firm']}
                </p>
              </div>
              <span className="text-xs font-medium bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full whitespace-nowrap">
                {item['Duration']}
              </span>
            </div>
            {(item['Responsibilities & Achievements'] || item['Responsibilities'] || item['Responsibilities & Legal Work'] || item['Duties']) && (
              <div className="text-xs text-gray-600 leading-relaxed">
                {(item['Responsibilities & Achievements'] || item['Responsibilities'] || item['Responsibilities & Legal Work'] || item['Duties'])
                  .split('\n')
                  .filter(line => line.trim())
                  .map((line, i) => (
                    <div key={i} className="flex items-start gap-2 mb-1">
                      <div className="w-1 h-1 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{line.trim()}</span>
                    </div>
                  ))}
              </div>
            )}
          </div>
        );

      case 'education':
        return (
          <div className="group">
            <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-gray-800 text-sm leading-tight">
                  {item['Degree Name'] || item['Degree / Course Name']}
                </h3>
                <p className="font-semibold text-indigo-700 text-sm">
                  {item['Institution Name']}
                </p>
              </div>
              <div className="text-right">
                <span className="text-xs font-medium bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full block mb-1">
                  {item['Duration'] || item['Duration (Start – End or \'Present\')']}
                </span>
                {item['CGPA or Percentage'] && (
                  <span className="text-xs font-semibold text-gray-600">
                    {item['CGPA or Percentage']}
                  </span>
                )}
              </div>
            </div>
            
            {/* 10th and 12th Grade Info */}
            <div className="mt-3 space-y-1">
              {item['12th Grade School Name & Percentage'] && (
                <p className="text-xs text-gray-600">
                  <span className="font-medium">12th:</span> {item['12th Grade School Name & Percentage']}
                </p>
              )}
              {item['10th Grade School Name & Percentage'] && (
                <p className="text-xs text-gray-600">
                  <span className="font-medium">10th:</span> {item['10th Grade School Name & Percentage']}
                </p>
              )}
            </div>
          </div>
        );

      case 'projects':
        return (
          <div className="group">
            <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
              <h3 className="font-bold text-gray-800 text-sm leading-tight flex-1">
                {item['Project Title'] || item['Project/Campaign Name'] || item['Title']}
              </h3>
              {item['Year / Role'] && (
                <span className="text-xs font-medium bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full">
                  {item['Year / Role']}
                </span>
              )}
            </div>
            
            <div className="space-y-2 text-xs text-gray-600">
              {(item['Tools Used'] || item['Tools/Technologies Used'] || item['Platform Used']) && (
                <p>
                  <span className="font-semibold text-indigo-700">Tech Stack:</span> {item['Tools Used'] || item['Tools/Technologies Used'] || item['Platform Used']}
                </p>
              )}
              
              {item['Description'] && (
                <p className="leading-relaxed">
                  <span className="font-semibold text-indigo-700">Description:</span> {item['Description']}
                </p>
              )}
              
              {item['Your Contribution'] && (
                <p className="leading-relaxed">
                  <span className="font-semibold text-indigo-700">Contribution:</span> {item['Your Contribution']}
                </p>
              )}

              {item['Result / Metrics'] && (
                <p className="leading-relaxed">
                  <span className="font-semibold text-indigo-700">Results:</span> {item['Result / Metrics']}
                </p>
              )}

              {item['Goal / Audience'] && (
                <p className="leading-relaxed">
                  <span className="font-semibold text-indigo-700">Target:</span> {item['Goal / Audience']}
                </p>
              )}
            </div>
          </div>
        );

      case 'certifications':
        return (
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-gray-800 text-sm">
              {item['Course/Certification Name'] || item['Certification Name'] || item['Certification Title']}
            </h3>
            <span className="text-xs font-medium bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full">
              {item['Date'] || item['Year']}
            </span>
          </div>
        );

      case 'achievements':
        return (
          <div className="flex items-start gap-2">
            <Star className="w-3 h-3 text-yellow-500 mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800 text-sm">
                {item['Achievement'] || item['Achievements'] || item['Title']}
              </h3>
              {item['Description'] && (
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  {item['Description']}
                </p>
              )}
              {item['Year'] && (
                <span className="text-xs text-indigo-600 font-medium">
                  {item['Year']}
                </span>
              )}
            </div>
          </div>
        );

      case 'activities':
      case 'extracurricular':
        return (
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-indigo-400 rounded-full mt-1.5 flex-shrink-0"></div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800 text-sm">
                {item['Activity'] || item['Activities'] || item['Activity Title']}
              </h3>
              {item['Description'] && (
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  {item['Description']}
                </p>
              )}
              {item['Year'] && (
                <span className="text-xs text-indigo-600 font-medium">
                  {item['Year']}
                </span>
              )}
            </div>
          </div>
        );

      case 'publications':
        return (
          <div>
            <h3 className="font-semibold text-gray-800 text-sm mb-1">
              {item['Article / Blog Title']}
            </h3>
            {item['Platform (if published)'] && (
              <p className="text-xs text-indigo-700 font-medium mb-1">
                Published on: {item['Platform (if published)']}
              </p>
            )}
            {item['Brief Summary'] && (
              <p className="text-xs text-gray-600 leading-relaxed mb-1">
                {item['Brief Summary']}
              </p>
            )}
            {item['Link'] && (
              <a href={item['Link']} className="text-xs text-blue-600 hover:underline break-all">
                {item['Link']}
              </a>
            )}
          </div>
        );

      default:
        // Generic rendering for other sections
        return (
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full flex-shrink-0"></div>
            <span className="text-sm text-gray-700">
              {typeof item === 'string' ? item : Object.values(item).filter(Boolean).join(' • ')}
            </span>
          </div>
        );
    }
  };

  const headerData = resumeData.header || {};
  const summaryData = resumeData.summary || {};

  return (
    <div className="w-full max-w-4xl mx-auto bg-white shadow-lg">
      <div className="a4-page">
        {/* Header Section */}
        <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 p-6 mb-6">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <div className="flex items-start gap-6">
              {/* Profile Photo */}
              {headerData['Profile Photo'] && (
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white/20 shadow-lg">
                    <img
                      src={headerData['Profile Photo']}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}

              {/* Name and Title */}
              <div className="flex-1 min-w-0">
                <h1 className="text-3xl font-black text-white mb-2 tracking-tight">
                  {headerData['Full Name'] || 'Your Name'}
                </h1>
                <h2 className="text-lg font-bold text-indigo-100 mb-4 tracking-wide">
                  {headerData['Professional Title'] || 'Professional Title'}
                </h2>

                {/* Contact Information */}
                <div className="flex flex-wrap gap-4 text-sm text-indigo-100">
                  {headerData['Phone Number'] && (
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      <span>{headerData['Phone Number']}</span>
                    </div>
                  )}
                  {headerData['Email Address'] && (
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      <span className="break-all">{headerData['Email Address']}</span>
                    </div>
                  )}
                  {headerData['Location (City, Country)'] && (
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{headerData['Location (City, Country)']}</span>
                    </div>
                  )}
                </div>

                {/* Social Links */}
                <div className="flex flex-wrap gap-4 mt-3 text-sm text-indigo-100">
                  {headerData['LinkedIn Profile'] && (
                    <div className="flex items-center gap-2">
                      <Linkedin className="w-4 h-4" />
                      <a href={headerData['LinkedIn Profile']} className="hover:text-white transition-colors break-all">
                        LinkedIn
                      </a>
                    </div>
                  )}
                  {headerData['Github'] && (
                    <div className="flex items-center gap-2">
                      <Github className="w-4 h-4" />
                      <a href={headerData['Github']} className="hover:text-white transition-colors">
                        GitHub
                      </a>
                    </div>
                  )}
                  {headerData['Portfolio / Content Link'] && (
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4" />
                      <a href={headerData['Portfolio / Content Link']} className="hover:text-white transition-colors">
                        Portfolio
                      </a>
                    </div>
                  )}
                  {headerData['Instagram / YouTube Handle'] && (
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4" />
                      <span>{headerData['Instagram / YouTube Handle']}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="px-6 pb-6">
          {/* Professional Summary */}
          {summaryData['Summary'] && (
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-2 rounded-lg">
                  <User className="w-4 h-4 text-white" />
                </div>
                <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wider">
                  Professional Summary
                </h2>
                <div className="flex-1 h-px bg-gradient-to-r from-indigo-200 to-transparent"></div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-lg border-l-4 border-indigo-400">
                {summaryData['Summary']}
              </p>
            </div>
          )}

          {/* Dynamic Sections */}
          <div className="grid grid-cols-1 gap-6">
            {/* Work Experience */}
            {renderSection('work', 'Work Experience', Briefcase, true)}
            {renderSection('workExperience', 'Work Experience', Briefcase, true)}
            
            {/* Education */}
            {renderSection('education', 'Education', GraduationCap, true)}
            
            {/* Projects */}
            {renderSection('projects', 'Projects', Code, true)}
            
            {/* Skills Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {renderSection('techSkills', 'Technical Skills', Code, true)}
              {renderSection('softSkills', 'Soft Skills', Heart, true)}
              {renderSection('skills', 'Core Skills', Star, true)}
              {renderSection('tools', 'Tools & Software', Code, true)}
              {renderSection('coreLegalSkills', 'Core Legal Skills', Award, true)}
              {renderSection('coreSalesSkills', 'Core Sales Skills', Target, true)}
              {renderSection('coreMedicalSkills', 'Core Medical Skills', Heart, true)}
              {renderSection('labSkills', 'Lab & Technical Skills', Code, true)}
              {renderSection('teachingSkills', 'Teaching Skills', GraduationCap, false)}
              {renderSection('otherSkills', 'Other Skills', Star, true)}
            </div>

            {/* Other Sections */}
            {renderSection('certifications', 'Certifications', Award, true)}
            {renderSection('achievements', 'Achievements', Star, true)}
            {renderSection('activities', 'Activities', Heart, true)}
            {renderSection('extracurricular', 'Extracurricular', Heart, true)}
            {renderSection('publications', 'Publications', Award, true)}
            {renderSection('languages', 'Languages', Languages, true)}
            {renderSection('interests', 'Interests', Heart, true)}

            {/* Special Sections for Specific Careers */}
            {renderSection('internships', 'Internships', Briefcase, true)}
            {renderSection('experience', 'Clinical Experience', Briefcase, true)}
            {renderSection('schooling', 'Schooling', GraduationCap, false)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonacoBoldTemplate;