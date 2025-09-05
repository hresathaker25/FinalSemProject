import React from "react";

const RetroResumeTemplate = ({ resumeData, selectedCareer }) => {
  const headerData = resumeData?.header || {};
  
  // Helper function to get section data
  const getSectionData = (sectionKey) => {
    return resumeData[sectionKey] || {};
  };

  // Helper function to get multiple section data
  const getMultipleSectionData = (sectionKey) => {
    const data = resumeData[sectionKey];
    return Array.isArray(data) ? data : [];
  };

  // Helper function to check if a section has content
  const hasSectionContent = (sectionKey, isMultiple = false) => {
    if (isMultiple) {
      const data = getMultipleSectionData(sectionKey);
      return data.some(item => 
        Object.values(item || {}).some(value => 
          typeof value === 'string' && value.trim() !== ''
        )
      );
    } else {
      const data = getSectionData(sectionKey);
      return Object.values(data).some(value => 
        typeof value === 'string' && value.trim() !== ''
      );
    }
  };

  // Helper function to render field value with proper formatting
  const renderFieldValue = (value) => {
    if (!value || typeof value !== 'string') return null;
    
    return value.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < value.split('\n').length - 1 && <br />}
      </React.Fragment>
    ));
  };



  return (
    <div className="a4-page bg-cream-50 font-serif text-gray-800 relative overflow-hidden">
      {/* Retro Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #8B4513 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, #8B4513 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }} />
      </div>

      {/* Decorative Corner Ornaments */}
      <div className="absolute top-4 left-4 w-16 h-16 border-t-4 border-l-4 border-amber-600 opacity-60" />
      <div className="absolute top-4 right-4 w-16 h-16 border-t-4 border-r-4 border-amber-600 opacity-60" />
      <div className="absolute bottom-4 left-4 w-16 h-16 border-b-4 border-l-4 border-amber-600 opacity-60" />
      <div className="absolute bottom-4 right-4 w-16 h-16 border-b-4 border-r-4 border-amber-600 opacity-60" />

      <div className="relative z-10 p-12 space-y-6">
        
        {/* Header Section */}
        <div className="text-center border-b-4 border-double border-amber-700 pb-6 mb-8">
          {/* Profile Photo */}
          {headerData["Profile Photo"] && (
            <div className="mb-6 flex justify-center">
              <div className="w-24 h-24 rounded-full border-4 border-amber-600 shadow-lg overflow-hidden bg-gray-100">
                <img
                  src={headerData["Profile Photo"]}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
          
          {/* Name */}
          {headerData["Full Name"] && (
            <h1 className="text-4xl font-bold mb-2 tracking-wider text-amber-900 font-serif">
              {headerData["Full Name"].toUpperCase()}
            </h1>
          )}
          
          {/* Professional Title */}
          {headerData["Professional Title"] && (
            <div className="mb-4">
              <div className="inline-block bg-amber-100 px-6 py-2 border-2 border-amber-600 shadow-sm">
                <h2 className="text-lg font-semibold text-amber-800 tracking-wide">
                  {headerData["Professional Title"]}
                </h2>
              </div>
            </div>
          )}
          
          {/* Contact Information */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-700 mt-4">
            {headerData["Phone Number"] && (
              <div className="flex items-center gap-1">
                <span className="font-semibold">📞</span>
                <span>{headerData["Phone Number"]}</span>
              </div>
            )}
            {headerData["Email Address"] && (
              <div className="flex items-center gap-1">
                <span className="font-semibold">✉</span>
                <span>{headerData["Email Address"]}</span>
              </div>
            )}
            {headerData["Location (City, Country)"] && (
              <div className="flex items-center gap-1">
                <span className="font-semibold">🏠</span>
                <span>{headerData["Location (City, Country)"]}</span>
              </div>
            )}
            {headerData["LinkedIn Profile"] && (
              <div className="flex items-center gap-1">
                <span className="font-semibold">🔗</span>
                <span className="text-blue-700">{headerData["LinkedIn Profile"]}</span>
              </div>
            )}
            {headerData["Github"] && (
              <div className="flex items-center gap-1">
                <span className="font-semibold">💻</span>
                <span>{headerData["Github"]}</span>
              </div>
            )}
            {headerData["Portfolio / Content Link"] && (
              <div className="flex items-center gap-1">
                <span className="font-semibold">🎨</span>
                <span>{headerData["Portfolio / Content Link"]}</span>
              </div>
            )}
            {headerData["Instagram / YouTube Handle"] && (
              <div className="flex items-center gap-1">
                <span className="font-semibold">📱</span>
                <span>{headerData["Instagram / YouTube Handle"]}</span>
              </div>
            )}
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-3 gap-8">
          
          {/* Left Column - Sidebar */}
          <div className="col-span-1 space-y-6">
            
            {/* Professional Summary */}
            {hasSectionContent('summary') && (
              <div className="bg-amber-50 border-2 border-amber-200 p-4 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold mb-3 text-amber-900 border-b-2 border-amber-300 pb-1 uppercase tracking-wide">
                  About Me
                </h3>
                <div className="text-sm leading-relaxed text-gray-700">
                  {renderFieldValue(getSectionData('summary')["Summary"])}
                </div>
              </div>
            )}

            {/* Skills Sections */}
            {hasSectionContent('techSkills', true) && (
              <div className="bg-gray-50 border-2 border-gray-300 p-4 rounded-lg">
                <h3 className="text-lg font-bold mb-3 text-gray-800 border-b-2 border-gray-400 pb-1 uppercase tracking-wide">
                  Skills
                </h3>
                <div className="space-y-2">
                  {getMultipleSectionData('techSkills').map((skill, index) => (
                    Object.values(skill || {}).some(value => value?.trim()) && (
                      <div key={index} className="text-sm">
                        <div className="bg-amber-100 px-3 py-1 rounded-full border border-amber-300 text-amber-800 font-medium inline-block">
                          {Object.values(skill || {}).filter(v => v?.trim()).join(' • ')}
                        </div>
                      </div>
                    )
                  ))}
                </div>
              </div>
            )}

            {/* Soft Skills */}
            {hasSectionContent('softSkills', true) && (
              <div className="bg-blue-50 border-2 border-blue-200 p-4 rounded-lg">
                <h3 className="text-lg font-bold mb-3 text-blue-900 border-b-2 border-blue-300 pb-1 uppercase tracking-wide">
                  Soft Skills
                </h3>
                <div className="space-y-2">
                  {getMultipleSectionData('softSkills').map((skill, index) => (
                    Object.values(skill || {}).some(value => value?.trim()) && (
                      <div key={index} className="text-sm">
                        <div className="bg-blue-100 px-3 py-1 rounded-full border border-blue-300 text-blue-800 font-medium inline-block">
                          {Object.values(skill || {}).filter(v => v?.trim()).join(' • ')}
                        </div>
                      </div>
                    )
                  ))}
                </div>
              </div>
            )}

            {/* Languages */}
            {hasSectionContent('languages', true) && (
              <div className="bg-green-50 border-2 border-green-200 p-4 rounded-lg">
                <h3 className="text-lg font-bold mb-3 text-green-900 border-b-2 border-green-300 pb-1 uppercase tracking-wide">
                  Languages
                </h3>
                <div className="space-y-1">
                  {getMultipleSectionData('languages').map((lang, index) => (
                    Object.values(lang || {}).some(value => value?.trim()) && (
                      <div key={index} className="text-sm text-green-800">
                        {Object.values(lang || {}).filter(v => v?.trim()).join(' • ')}
                      </div>
                    )
                  ))}
                </div>
              </div>
            )}

            {/* Interests */}
            {hasSectionContent('interests', true) && (
              <div className="bg-purple-50 border-2 border-purple-200 p-4 rounded-lg">
                <h3 className="text-lg font-bold mb-3 text-purple-900 border-b-2 border-purple-300 pb-1 uppercase tracking-wide">
                  Interests
                </h3>
                <div className="flex flex-wrap gap-1">
                  {getMultipleSectionData('interests').map((interest, index) => (
                    Object.values(interest || {}).some(value => value?.trim()) && (
                      <div key={index} className="text-xs">
                        <span className="bg-purple-100 px-2 py-1 rounded-full border border-purple-300 text-purple-800">
                          {Object.values(interest || {}).filter(v => v?.trim()).join(', ')}
                        </span>
                      </div>
                    )
                  ))}
                </div>
              </div>
            )}

            {/* Additional Skills Sections */}
            {hasSectionContent('coreLegalSkills', true) && (
              <div className="bg-indigo-50 border-2 border-indigo-200 p-4 rounded-lg">
                <h3 className="text-lg font-bold mb-3 text-indigo-900 border-b-2 border-indigo-300 pb-1 uppercase tracking-wide">
                  Legal Skills
                </h3>
                <div className="space-y-1">
                  {getMultipleSectionData('coreLegalSkills').map((skill, index) => (
                    Object.values(skill || {}).some(value => value?.trim()) && (
                      <div key={index} className="text-sm text-indigo-800">
                        • {Object.values(skill || {}).filter(v => v?.trim()).join(' • ')}
                      </div>
                    )
                  ))}
                </div>
              </div>
            )}

            {/* Core Sales Skills */}
            {hasSectionContent('coreSalesSkills', true) && (
              <div className="bg-red-50 border-2 border-red-200 p-4 rounded-lg">
                <h3 className="text-lg font-bold mb-3 text-red-900 border-b-2 border-red-300 pb-1 uppercase tracking-wide">
                  Sales Skills
                </h3>
                <div className="space-y-1">
                  {getMultipleSectionData('coreSalesSkills').map((skill, index) => (
                    Object.values(skill || {}).some(value => value?.trim()) && (
                      <div key={index} className="text-sm text-red-800">
                        • {Object.values(skill || {}).filter(v => v?.trim()).join(' • ')}
                      </div>
                    )
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Column - Main Content */}
          <div className="col-span-2 space-y-6">
            
            {/* Education */}
            {hasSectionContent('education') && (
              <div className="bg-white border-2 border-amber-300 rounded-lg shadow-md">
                <div className="bg-amber-600 text-white px-6 py-3 rounded-t-lg">
                  <h3 className="text-xl font-bold uppercase tracking-wide">Education</h3>
                </div>
                <div className="p-6">
                  <div className="border-l-4 border-amber-400 pl-4">
                    {getSectionData('education')["Degree Name"] && (
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">
                        {getSectionData('education')["Degree Name"]}
                      </h4>
                    )}
                    {getSectionData('education')["Institution Name"] && (
                      <p className="text-amber-700 font-medium mb-2">
                        {getSectionData('education')["Institution Name"]}
                      </p>
                    )}
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      {getSectionData('education')["Duration"] && (
                        <span>📅 {getSectionData('education')["Duration"]}</span>
                      )}
                      {getSectionData('education')["CGPA or Percentage"] && (
                        <span>📊 {getSectionData('education')["CGPA or Percentage"]}</span>
                      )}
                    </div>
                    
                    {/* School Education */}
                    {(getSectionData('education')["10th Grade School Name & Percentage"] || 
                      getSectionData('education')["12th Grade School Name & Percentage"]) && (
                      <div className="mt-4 pt-3 border-t border-gray-200 text-sm text-gray-600">
                        {getSectionData('education')["12th Grade School Name & Percentage"] && (
                          <div className="mb-1">12th: {getSectionData('education')["12th Grade School Name & Percentage"]}</div>
                        )}
                        {getSectionData('education')["10th Grade School Name & Percentage"] && (
                          <div>10th: {getSectionData('education')["10th Grade School Name & Percentage"]}</div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Work Experience */}
            {hasSectionContent('work', true) && (
              <div className="bg-white border-2 border-blue-300 rounded-lg shadow-md">
                <div className="bg-blue-600 text-white px-6 py-3 rounded-t-lg">
                  <h3 className="text-xl font-bold uppercase tracking-wide">
                    Work Experience
                  </h3>
                </div>
                <div className="p-6 space-y-4">
                  {getMultipleSectionData('work').map((work, index) => (
                    Object.values(work || {}).some(value => value?.trim()) && (
                      <div key={index} className="border-l-4 border-blue-400 pl-4 pb-4 border-b border-gray-100 last:border-b-0">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            {(work["Job Title"] || work["Role"] || work["Position"]) && (
                              <h4 className="text-lg font-semibold text-gray-800">
                                {work["Job Title"] || work["Role"] || work["Position"]}
                              </h4>
                            )}
                            {(work["Company Name"] || work["Organization / Firm"] || work["Company / Client"] || work["Hospital / Clinic Name"]) && (
                              <p className="text-blue-700 font-medium">
                                {work["Company Name"] || work["Organization / Firm"] || work["Company / Client"] || work["Hospital / Clinic Name"]}
                              </p>
                            )}
                          </div>
                          {work["Duration"] && (
                            <span className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">
                              {work["Duration"]}
                            </span>
                          )}
                        </div>
                        {(work["Responsibilities & Achievements"] || work["Responsibilities & Legal Work"] || work["Responsibilities"] || work["Duties"] || work["Key Responsibilities"]) && (
                          <div className="text-sm text-gray-700 leading-relaxed">
                            {renderFieldValue(
                              work["Responsibilities & Achievements"] || 
                              work["Responsibilities & Legal Work"] || 
                              work["Responsibilities"] || 
                              work["Duties"] || 
                              work["Key Responsibilities"]
                            )}
                          </div>
                        )}
                        {work["Departments Rotated"] && (
                          <div className="text-sm text-gray-600 mt-2">
                            <span className="font-medium">Departments: </span>
                            {work["Departments Rotated"]}
                          </div>
                        )}
                      </div>
                    )
                  ))}
                </div>
              </div>
            )}

            {/* Projects */}
            {hasSectionContent('projects', true) && (
              <div className="bg-white border-2 border-green-300 rounded-lg shadow-md">
                <div className="bg-green-600 text-white px-6 py-3 rounded-t-lg">
                  <h3 className="text-xl font-bold uppercase tracking-wide">
                    Projects
                  </h3>
                </div>
                <div className="p-6 space-y-4">
                  {getMultipleSectionData('projects').map((project, index) => (
                    Object.values(project || {}).some(value => value?.trim()) && (
                      <div key={index} className="border-l-4 border-green-400 pl-4 pb-4 border-b border-gray-100 last:border-b-0">
                        {(project["Project Title"] || project["Project/Campaign Name"] || project["Title"]) && (
                          <h4 className="text-lg font-semibold text-gray-800 mb-2">
                            {project["Project Title"] || project["Project/Campaign Name"] || project["Title"]}
                          </h4>
                        )}
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-600 mb-3">
                          {(project["Tools Used"] || project["Tools/Technologies Used"] || project["Platform Used"]) && (
                            <div>
                              <span className="font-medium">Tools: </span>
                              {project["Tools Used"] || project["Tools/Technologies Used"] || project["Platform Used"]}
                            </div>
                          )}
                          {project["Goal / Audience"] && (
                            <div>
                              <span className="font-medium">Audience: </span>
                              {project["Goal / Audience"]}
                            </div>
                          )}
                          {project["Year / Role"] && (
                            <div>
                              <span className="font-medium">Role: </span>
                              {project["Year / Role"]}
                            </div>
                          )}
                          {project["Topic / Area of Law"] && (
                            <div>
                              <span className="font-medium">Area: </span>
                              {project["Topic / Area of Law"]}
                            </div>
                          )}
                        </div>

                        {project["Description"] && (
                          <div className="text-sm text-gray-700 leading-relaxed mb-2">
                            <span className="font-medium">Description: </span>
                            {renderFieldValue(project["Description"])}
                          </div>
                        )}

                        {(project["Your Contribution"] || project["Description / Contribution"]) && (
                          <div className="text-sm text-gray-700 leading-relaxed">
                            <span className="font-medium">Contribution: </span>
                            {renderFieldValue(project["Your Contribution"] || project["Description / Contribution"])}
                          </div>
                        )}
                      </div>
                    )
                  ))}
                </div>
              </div>
            )}

            {/* Achievements */}
            {hasSectionContent('achievements', true) && (
              <div className="bg-white border-2 border-yellow-300 rounded-lg shadow-md">
                <div className="bg-yellow-600 text-white px-6 py-3 rounded-t-lg">
                  <h3 className="text-xl font-bold uppercase tracking-wide">Achievements</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-2">
                    {getMultipleSectionData('achievements').map((achievement, index) => (
                      Object.values(achievement || {}).some(value => value?.trim()) && (
                        <div key={index} className="flex items-start gap-3">
                          <span className="text-yellow-600 font-bold text-lg">🏆</span>
                          <div className="text-sm text-gray-700">
                            {Object.values(achievement || {}).filter(v => v?.trim()).map((value, i) => (
                              <div key={i}>{renderFieldValue(value)}</div>
                            ))}
                          </div>
                        </div>
                      )
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Certifications */}
            {hasSectionContent('certifications', true) && (
              <div className="bg-white border-2 border-indigo-300 rounded-lg shadow-md">
                <div className="bg-indigo-600 text-white px-6 py-3 rounded-t-lg">
                  <h3 className="text-xl font-bold uppercase tracking-wide">Certifications</h3>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 gap-3">
                    {getMultipleSectionData('certifications').map((cert, index) => (
                      Object.values(cert || {}).some(value => value?.trim()) && (
                        <div key={index} className="flex justify-between items-center p-3 bg-indigo-50 rounded border border-indigo-200">
                          <div>
                            {(cert["Course/Certification Name"] || cert["Certification Name"]) && (
                              <div className="font-medium text-gray-800">
                                {cert["Course/Certification Name"] || cert["Certification Name"]}
                              </div>
                            )}
                          </div>
                          {(cert["Date"] || cert["Year"]) && (
                            <span className="text-sm text-indigo-600 bg-white px-2 py-1 rounded">
                              {cert["Date"] || cert["Year"]}
                            </span>
                          )}
                        </div>
                      )
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Activities */}
            {hasSectionContent('activities', true) && (
              <div className="bg-white border-2 border-purple-300 rounded-lg shadow-md">
                <div className="bg-purple-600 text-white px-6 py-3 rounded-t-lg">
                  <h3 className="text-xl font-bold uppercase tracking-wide">
                    Extracurricular Activities
                  </h3>
                </div>
                <div className="p-6">
                  <div className="space-y-3">
                    {getMultipleSectionData('activities').map((activity, index) => (
                      Object.values(activity || {}).some(value => value?.trim()) && (
                        <div key={index} className="border-l-4 border-purple-400 pl-4">
                          <div className="text-sm text-gray-700">
                            {Object.values(activity || {}).filter(v => v?.trim()).map((value, i) => (
                              <div key={i}>{renderFieldValue(value)}</div>
                            ))}
                          </div>
                        </div>
                      )
                    ))}
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default RetroResumeTemplate;