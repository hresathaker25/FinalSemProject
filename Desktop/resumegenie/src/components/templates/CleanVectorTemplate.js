import React from "react";
import { ResumeFieldsConfig } from "../../pages/ResumeBuilder";

const CleanVectorTemplate = ({ resumeData, selectedCareer }) => {
  const config = ResumeFieldsConfig[selectedCareer] || [];

  // Helper function to get section data
  const getSectionData = (sectionKey) => {
    return resumeData[sectionKey] || {};
  };

  // Helper function to get multiple section data
  const getMultipleSectionData = (sectionKey) => {
    const data = resumeData[sectionKey];
    return Array.isArray(data) ? data : [{}];
  };

  // Check if a section has any content
  const hasContent = (sectionKey, isMultiple = false) => {
    if (isMultiple) {
      const data = getMultipleSectionData(sectionKey);
      return data.some(item => 
        Object.values(item || {}).some(value => 
          value && typeof value === 'string' && value.trim() !== ''
        )
      );
    } else {
      const data = getSectionData(sectionKey);
      return Object.values(data || {}).some(value => 
        value && typeof value === 'string' && value.trim() !== ''
      );
    }
  };

  // Get header data
  const headerData = getSectionData("header");

  return (
    <div className="a4-page bg-white shadow-lg" style={{ 
      width: '210mm', 
      minHeight: '297mm', 
      padding: '20mm',
      margin: '0 auto',
      fontFamily: '"Inter", "Segoe UI", sans-serif',
      fontSize: '10pt',
      lineHeight: '1.4',
      color: '#2d3748',
      boxSizing: 'border-box',
      overflow: 'hidden'
    }}>
      {/* Header Section */}
      <header className="relative mb-8">
        {/* Elegant top border with gradient */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full"></div>
        
        <div className="pt-6 flex items-start justify-between">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">
              {headerData["Full Name"] || "Your Name"}
            </h1>
            <p className="text-lg text-blue-600 font-medium mb-4">
              {headerData["Professional Title"] || "Your Professional Title"}
            </p>
            
            {/* Contact Info in elegant grid */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
              {headerData["Phone Number"] && (
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mr-3"></div>
                  <span className="text-gray-700">{headerData["Phone Number"]}</span>
                </div>
              )}
              {headerData["Email Address"] && (
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-indigo-500 mr-3"></div>
                  <span className="text-gray-700">{headerData["Email Address"]}</span>
                </div>
              )}
              {headerData["LinkedIn Profile"] && (
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mr-3"></div>
                  <span className="text-gray-700">{headerData["LinkedIn Profile"]}</span>
                </div>
              )}
              {headerData["Github"] && (
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-gray-600 mr-3"></div>
                  <span className="text-gray-700">{headerData["Github"]}</span>
                </div>
              )}
              {headerData["Portfolio / Content Link"] && (
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-3"></div>
                  <span className="text-gray-700">{headerData["Portfolio / Content Link"]}</span>
                </div>
              )}
              {headerData["Instagram / YouTube Handle"] && (
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-pink-500 mr-3"></div>
                  <span className="text-gray-700">{headerData["Instagram / YouTube Handle"]}</span>
                </div>
              )}
              {headerData["Location (City, Country)"] && (
                <div className="flex items-center col-span-2">
                  <div className="w-2 h-2 rounded-full bg-red-500 mr-3"></div>
                  <span className="text-gray-700">{headerData["Location (City, Country)"]}</span>
                </div>
              )}
            </div>
          </div>

          {/* Profile Photo */}
          {headerData["Profile Photo"] && (
            <div className="ml-6 flex-shrink-0">
              <div className="relative w-28 h-28">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full p-1">
                  <div className="w-full h-full bg-white rounded-full overflow-hidden">
                    <img
                      src={headerData["Profile Photo"]}
                      alt="Profile"
                      className="w-full h-full object-cover"
                      style={{ maxWidth: '100%', height: 'auto' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <div className="space-y-7">
        {config.map((section) => {
          if (!section || section.sectionKey === "header" || !section.fields) return null;
          
          const isMultiple = section.multiple;
          const sectionHasContent = hasContent(section.sectionKey, isMultiple);
          
          if (!sectionHasContent) return null;

          return (
            <section key={section.sectionKey} className="relative">
              {/* Section Title with elegant underline */}
              <div className="mb-4">
                <h2 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 mr-3"></div>
                  {section.title}
                </h2>
                <div className="h-px bg-gradient-to-r from-gray-300 via-blue-200 to-transparent"></div>
              </div>

              {/* Section Content */}
              <div className="pl-6">
                {isMultiple ? (
                  <div className="space-y-5">
                    {getMultipleSectionData(section.sectionKey).map((item, index) => {
                      const itemHasContent = Object.values(item || {}).some(value => 
                        value && typeof value === 'string' && value.trim() !== ''
                      );
                      
                      if (!itemHasContent) return null;

                      return (
                        <div key={index} className="relative">
                          {/* Content based on section type */}
                          {section.sectionKey === "work" || section.sectionKey === "internships" || section.sectionKey === "experience" ? (
                            <div className="border-l-2 border-blue-200 pl-4">
                              <div className="mb-2">
                                <h3 className="font-semibold text-gray-900">
                                  {item["Job Title"] || item["Role"] || item["Position"] || ""}
                                </h3>
                                <div className="flex items-center text-blue-600 font-medium text-sm mt-1">
                                  <span>{item["Company Name"] || item["Company / Client"] || item["Organization / Firm"] || item["Hospital / Clinic Name"] || ""}</span>
                                  {item["Duration"] && (
                                    <>
                                      <span className="mx-2">•</span>
                                      <span>{item["Duration"]}</span>
                                    </>
                                  )}
                                </div>
                              </div>
                              {(item["Responsibilities & Achievements"] || item["Responsibilities"] || item["Duties"] || item["Responsibilities & Legal Work"] || item["Key Responsibilities"]) && (
                                <div className="text-gray-700 text-sm leading-relaxed">
                                  {(item["Responsibilities & Achievements"] || item["Responsibilities"] || item["Duties"] || item["Responsibilities & Legal Work"] || item["Key Responsibilities"]).split('\n').map((line, i) => (
                                    line.trim() && (
                                      <div key={i} className="flex items-start mb-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 mr-2 flex-shrink-0"></div>
                                        <span>{line.trim()}</span>
                                      </div>
                                    )
                                  ))}
                                </div>
                              )}
                              {item["Departments Rotated"] && (
                                <div className="mt-2 text-sm">
                                  <span className="text-gray-600 font-medium">Departments: </span>
                                  <span className="text-gray-700">{item["Departments Rotated"]}</span>
                                </div>
                              )}
                            </div>
                          ) : section.sectionKey === "projects" ? (
                            <div className="border-l-2 border-indigo-200 pl-4">
                              <div className="mb-2">
                                <h3 className="font-semibold text-gray-900">
                                  {item["Project Title"] || item["Project/Campaign Name"] || item["Title"] || ""}
                                </h3>
                                <div className="flex flex-wrap items-center text-indigo-600 text-sm mt-1 gap-2">
                                  {item["Tools Used"] && (
                                    <span className="bg-indigo-50 px-2 py-1 rounded text-xs">
                                      {item["Tools Used"]}
                                    </span>
                                  )}
                                  {item["Tools/Technologies Used"] && (
                                    <span className="bg-indigo-50 px-2 py-1 rounded text-xs">
                                      {item["Tools/Technologies Used"]}
                                    </span>
                                  )}
                                  {item["Platform Used"] && (
                                    <span className="bg-indigo-50 px-2 py-1 rounded text-xs">
                                      {item["Platform Used"]}
                                    </span>
                                  )}
                                  {item["Year / Role"] && (
                                    <span className="text-gray-600">{item["Year / Role"]}</span>
                                  )}
                                  {item["Project Type"] && (
                                    <span className="text-gray-600">{item["Project Type"]}</span>
                                  )}
                                </div>
                              </div>
                              <div className="space-y-2 text-sm">
                                {item["Description"] && (
                                  <p className="text-gray-700">{item["Description"]}</p>
                                )}
                                {item["Your Contribution"] && (
                                  <div className="text-gray-700">
                                    <span className="font-medium">Contribution: </span>
                                    {item["Your Contribution"]}
                                  </div>
                                )}
                                {item["Summary & Objective"] && (
                                  <p className="text-gray-700">{item["Summary & Objective"]}</p>
                                )}
                                {item["Findings"] && (
                                  <div className="text-gray-700">
                                    <span className="font-medium">Findings: </span>
                                    {item["Findings"]}
                                  </div>
                                )}
                                {item["Goal / Audience"] && (
                                  <div className="text-gray-700">
                                    <span className="font-medium">Target: </span>
                                    {item["Goal / Audience"]}
                                  </div>
                                )}
                                {item["Result / Metrics"] && (
                                  <div className="text-gray-700">
                                    <span className="font-medium">Results: </span>
                                    {item["Result / Metrics"]}
                                  </div>
                                )}
                                {item["Key Insights / Results"] && (
                                  <div className="text-gray-700">
                                    <span className="font-medium">Key Insights: </span>
                                    {item["Key Insights / Results"]}
                                  </div>
                                )}
                                {item["Conversion / Engagement Stats"] && (
                                  <div className="text-gray-700">
                                    <span className="font-medium">Performance: </span>
                                    {item["Conversion / Engagement Stats"]}
                                  </div>
                                )}
                                {item["What You Sold / Promoted"] && (
                                  <div className="text-gray-700">
                                    <span className="font-medium">Focus: </span>
                                    {item["What You Sold / Promoted"]}
                                  </div>
                                )}
                                {item["Channels Used"] && (
                                  <div className="text-gray-700">
                                    <span className="font-medium">Channels: </span>
                                    {item["Channels Used"]}
                                  </div>
                                )}
                                {item["Topic / Area of Law"] && (
                                  <div className="text-gray-700">
                                    <span className="font-medium">Area of Law: </span>
                                    {item["Topic / Area of Law"]}
                                  </div>
                                )}
                                {item["Description / Contribution"] && (
                                  <div className="text-gray-700">
                                    {item["Description / Contribution"].split('\n').map((line, i) => (
                                      line.trim() && (
                                        <div key={i} className="flex items-start mb-1">
                                          <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 mr-2 flex-shrink-0"></div>
                                          <span>{line.trim()}</span>
                                        </div>
                                      )
                                    ))}
                                  </div>
                                )}
                              </div>
                            </div>
                          ) : section.sectionKey === "education" ? (
                            <div className="border-l-2 border-green-200 pl-4">
                              <div className="mb-2">
                                <h3 className="font-semibold text-gray-900">
                                  {item["Degree Name"] || item["Degree / Course Name"] || ""}
                                </h3>
                                <div className="flex items-center text-green-600 font-medium text-sm mt-1">
                                  <span>{item["Institution Name"] || ""}</span>
                                  {(item["Duration"] || item["Duration (Start – End or 'Present')"]) && (
                                    <>
                                      <span className="mx-2">•</span>
                                      <span>{item["Duration"] || item["Duration (Start – End or 'Present')"]}</span>
                                    </>
                                  )}
                                </div>
                              </div>
                              {item["CGPA or Percentage"] && (
                                <div className="text-sm text-gray-700">
                                  <span className="font-medium">Grade: </span>
                                  {item["CGPA or Percentage"]}
                                </div>
                              )}
                            </div>
                          ) : section.sectionKey === "publications" ? (
                            <div className="border-l-2 border-purple-200 pl-4">
                              <div className="mb-2">
                                <h3 className="font-semibold text-gray-900">
                                  {item["Article / Blog Title"] || ""}
                                </h3>
                                <div className="flex items-center text-purple-600 text-sm mt-1 gap-2">
                                  {item["Platform (if published)"] && (
                                    <span className="bg-purple-50 px-2 py-1 rounded text-xs">
                                      {item["Platform (if published)"]}
                                    </span>
                                  )}
                                  {item["Link"] && (
                                    <span className="text-gray-600 text-xs break-all">{item["Link"]}</span>
                                  )}
                                </div>
                              </div>
                              {item["Brief Summary"] && (
                                <p className="text-sm text-gray-700">{item["Brief Summary"]}</p>
                              )}
                            </div>
                          ) : (
                            // Generic rendering for other multiple sections
                            <div className="space-y-2">
                              {Object.entries(item || {}).map(([key, value]) => {
                                if (!value || typeof value !== 'string' || value.trim() === '') return null;
                                
                                return (
                                  <div key={key} className="text-sm">
                                    {section.fields?.length > 1 ? (
                                      <div className="flex items-start">
                                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 mr-3 flex-shrink-0"></div>
                                        <div>
                                          <span className="font-medium text-gray-800">{key}: </span>
                                          <span className="text-gray-700">{value}</span>
                                        </div>
                                      </div>
                                    ) : (
                                      <div className="flex items-start">
                                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 mr-3 flex-shrink-0"></div>
                                        <span className="text-gray-700">{value}</span>
                                      </div>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  // Single section rendering
                  <div>
                    {section.sectionKey === "summary" ? (
                      <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {getSectionData(section.sectionKey)["Summary"] || ""}
                        </p>
                      </div>
                    ) : section.sectionKey === "education" ? (
                      <div className="border-l-2 border-green-200 pl-4">
                        <div className="mb-3">
                          <h3 className="font-semibold text-gray-900">
                            {getSectionData(section.sectionKey)["Degree Name"] || getSectionData(section.sectionKey)["Degree / Course Name"] || ""}
                          </h3>
                          <div className="flex items-center text-green-600 font-medium text-sm mt-1">
                            <span>{getSectionData(section.sectionKey)["Institution Name"] || ""}</span>
                            {(getSectionData(section.sectionKey)["Duration"] || getSectionData(section.sectionKey)["Duration (Start – End or 'Present')"]) && (
                              <>
                                <span className="mx-2">•</span>
                                <span>{getSectionData(section.sectionKey)["Duration"] || getSectionData(section.sectionKey)["Duration (Start – End or 'Present')"]}</span>
                              </>
                            )}
                          </div>
                        </div>
                        <div className="grid grid-cols-1 gap-2 text-sm">
                          {getSectionData(section.sectionKey)["CGPA or Percentage"] && (
                            <div>
                              <span className="text-gray-600 font-medium">Grade: </span>
                              <span className="text-gray-700">{getSectionData(section.sectionKey)["CGPA or Percentage"]}</span>
                            </div>
                          )}
                          {getSectionData(section.sectionKey)["10th Grade School Name & Percentage"] && (
                            <div>
                              <span className="text-gray-600 font-medium">10th Grade: </span>
                              <span className="text-gray-700">{getSectionData(section.sectionKey)["10th Grade School Name & Percentage"]}</span>
                            </div>
                          )}
                          {getSectionData(section.sectionKey)["12th Grade School Name & Percentage"] && (
                            <div>
                              <span className="text-gray-600 font-medium">12th Grade: </span>
                              <span className="text-gray-700">{getSectionData(section.sectionKey)["12th Grade School Name & Percentage"]}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    ) : section.sectionKey === "schooling" ? (
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="border-l-2 border-green-200 pl-3">
                          <div className="font-medium text-gray-800">10th Grade</div>
                          <div className="text-gray-700">{getSectionData(section.sectionKey)["10th School Name"] || ""}</div>
                          <div className="text-green-600 font-medium">{getSectionData(section.sectionKey)["10th Percentage"] || ""}</div>
                        </div>
                        <div className="border-l-2 border-green-200 pl-3">
                          <div className="font-medium text-gray-800">12th Grade</div>
                          <div className="text-gray-700">{getSectionData(section.sectionKey)["12th School Name"] || ""}</div>
                          <div className="text-green-600 font-medium">{getSectionData(section.sectionKey)["12th Percentage"] || ""}</div>
                        </div>
                      </div>
                    ) : section.sectionKey === "teachingSkills" ? (
                      <div className="grid grid-cols-1 gap-4">
                        {getSectionData(section.sectionKey)["Core Teaching Skills"] && (
                          <div>
                            <h4 className="font-medium text-gray-800 mb-2">Core Teaching Skills</h4>
                            <div className="flex flex-wrap gap-2">
                              {getSectionData(section.sectionKey)["Core Teaching Skills"].split(',').map((skill, i) => (
                                skill.trim() && (
                                  <span key={i} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                                    {skill.trim()}
                                  </span>
                                )
                              ))}
                            </div>
                          </div>
                        )}
                        {getSectionData(section.sectionKey)["Digital Tools"] && (
                          <div>
                            <h4 className="font-medium text-gray-800 mb-2">Digital Tools</h4>
                            <div className="flex flex-wrap gap-2">
                              {getSectionData(section.sectionKey)["Digital Tools"].split(',').map((tool, i) => (
                                tool.trim() && (
                                  <span key={i} className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-medium">
                                    {tool.trim()}
                                  </span>
                                )
                              ))}
                            </div>
                          </div>
                        )}
                        {getSectionData(section.sectionKey)["Soft Skills"] && (
                          <div>
                            <h4 className="font-medium text-gray-800 mb-2">Soft Skills</h4>
                            <div className="flex flex-wrap gap-2">
                              {getSectionData(section.sectionKey)["Soft Skills"].split(',').map((skill, i) => (
                                skill.trim() && (
                                  <span key={i} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">
                                    {skill.trim()}
                                  </span>
                                )
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      // Generic single section rendering
                      <div className="space-y-2">
                        {Object.entries(getSectionData(section.sectionKey) || {}).map(([key, value]) => {
                          if (!value || typeof value !== 'string' || value.trim() === '') return null;
                          
                          return (
                            <div key={key} className="text-sm">
                              {section.fields?.length > 1 ? (
                                <div>
                                  <span className="font-medium text-gray-800">{key}: </span>
                                  <span className="text-gray-700">{value}</span>
                                </div>
                              ) : (
                                <span className="text-gray-700">{value}</span>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </section>
          );
        })}

        {/* Special handling for skills sections with pill styling */}
        {config.filter(section => 
          section?.sectionKey?.toLowerCase().includes('skill') ||
          section?.sectionKey === 'tools'
        ).map((section) => {
          if (!hasContent(section.sectionKey, section.multiple)) return null;
          
          return (
            <section key={`${section.sectionKey}-pills`} className="relative">
              <div className="mb-4">
                <h2 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 mr-3"></div>
                  {section.title}
                </h2>
                <div className="h-px bg-gradient-to-r from-gray-300 via-purple-200 to-transparent"></div>
              </div>
              
              <div className="pl-6">
                {section.multiple ? (
                  <div className="flex flex-wrap gap-2">
                    {getMultipleSectionData(section.sectionKey).map((item, index) => (
                      Object.values(item || {}).map((skill, skillIndex) => 
                        skill && typeof skill === 'string' && skill.trim() !== '' && (
                          skill.split(',').map((individualSkill, splitIndex) => (
                            individualSkill.trim() && (
                              <span 
                                key={`${index}-${skillIndex}-${splitIndex}`}
                                className="bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium border border-blue-200"
                              >
                                {individualSkill.trim()}
                              </span>
                            )
                          ))
                        )
                      )
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {Object.values(getSectionData(section.sectionKey) || {}).map((skill, index) => 
                      skill && typeof skill === 'string' && skill.trim() !== '' && (
                        skill.split(',').map((individualSkill, splitIndex) => (
                          individualSkill.trim() && (
                            <span 
                              key={`${index}-${splitIndex}`}
                              className="bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium border border-blue-200"
                            >
                              {individualSkill.trim()}
                            </span>
                          )
                        ))
                      )
                    )}
                  </div>
                )}
              </div>
            </section>
          );
        })}

        {/* Languages and Interests with special pill styling */}
        {['languages', 'interests'].map((sectionKey) => {
          const section = config.find(s => s.sectionKey === sectionKey);
          if (!section || !hasContent(sectionKey, section.multiple)) return null;

          return (
            <section key={sectionKey} className="relative">
              <div className="mb-4">
                <h2 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                  <div className={`w-3 h-3 rounded-full mr-3 ${
                    sectionKey === 'languages' 
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-600' 
                      : 'bg-gradient-to-r from-orange-500 to-red-600'
                  }`}></div>
                  {section.title}
                </h2>
                <div className={`h-px bg-gradient-to-r from-gray-300 to-transparent ${
                  sectionKey === 'languages' ? 'via-emerald-200' : 'via-orange-200'
                }`}></div>
              </div>
              
              <div className="pl-6">
                <div className="flex flex-wrap gap-2">
                  {section.multiple ? (
                    getMultipleSectionData(sectionKey).map((item, index) => (
                      Object.values(item || {}).map((value, valueIndex) => 
                        value && typeof value === 'string' && value.trim() !== '' && (
                          value.split(',').map((individualValue, splitIndex) => (
                            individualValue.trim() && (
                              <span 
                                key={`${index}-${valueIndex}-${splitIndex}`}
                                className={`px-3 py-1 rounded-full text-xs font-medium border ${
                                  sectionKey === 'languages'
                                    ? 'bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 border-emerald-200'
                                    : 'bg-gradient-to-r from-orange-50 to-red-50 text-orange-700 border-orange-200'
                                }`}
                              >
                                {individualValue.trim()}
                              </span>
                            )
                          ))
                        )
                      )
                    ))
                  ) : (
                    Object.values(getSectionData(sectionKey) || {}).map((value, index) => 
                      value && typeof value === 'string' && value.trim() !== '' && (
                        value.split(',').map((individualValue, splitIndex) => (
                          individualValue.trim() && (
                            <span 
                              key={`${index}-${splitIndex}`}
                              className={`px-3 py-1 rounded-full text-xs font-medium border ${
                                sectionKey === 'languages'
                                  ? 'bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 border-emerald-200'
                                  : 'bg-gradient-to-r from-orange-50 to-red-50 text-orange-700 border-orange-200'
                              }`}
                            >
                              {individualValue.trim()}
                            </span>
                          )
                        ))
                      )
                    )
                  )}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Elegant footer with subtle branding */}
      <div className="mt-12 pt-6 border-t border-gray-200">
        <div className="text-center">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto mb-3"></div>
          <p className="text-xs text-gray-400 font-light tracking-wide">
            Created with ResumeGenie
          </p>
        </div>
      </div>
    </div>
  );
};

export default CleanVectorTemplate;