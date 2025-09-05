import React from "react";

const BrushstrokeBoldTemplate = ({ resumeData, selectedCareer }) => {
  // Helper function to safely get data
  const getData = (section, field) => {
    if (!resumeData[section]) return "";
    if (typeof resumeData[section] === "object" && !Array.isArray(resumeData[section])) {
      return resumeData[section][field] || "";
    }
    return resumeData[section] || "";
  };

  // Helper function to get array data
  const getArrayData = (section) => {
    if (!resumeData[section] || !Array.isArray(resumeData[section])) return [];
    return resumeData[section].filter(item => item && Object.keys(item).length > 0);
  };

  // Helper function to render section with items
  const renderSection = (title, items, renderItem) => {
    if (!items || items.length === 0) return null;
    
    return (
      <div className="mb-6">
        <div className="relative mb-4">
          <h2 className="text-xl font-bold text-gray-800 relative z-10 bg-white inline-block pr-4">
            {title}
          </h2>
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 transform -translate-y-1/2"></div>
        </div>
        <div className="space-y-4">
          {items.map((item, index) => renderItem(item, index))}
        </div>
      </div>
    );
  };

  // Get header data
  const fullName = getData("header", "Full Name");
  const professionalTitle = getData("header", "Professional Title");
  const phoneNumber = getData("header", "Phone Number");
  const emailAddress = getData("header", "Email Address");
  const linkedinProfile = getData("header", "LinkedIn Profile");
  const location = getData("header", "Location (City, Country)");
  const profilePhoto = getData("header", "Profile Photo");
  const github = getData("header", "Github");
  const portfolio = getData("header", "Portfolio / Content Link");
  const instagram = getData("header", "Instagram / YouTube Handle");

  // Get summary
  const summary = getData("summary", "Summary");

  return (
    <div className="a4-page bg-white shadow-lg" style={{ 
      width: '210mm', 
      minHeight: '297mm', 
      padding: '15mm',
      margin: '0 auto',
      fontFamily: 'Georgia, serif',
      lineHeight: '1.5',
      fontSize: '11px',
      color: '#2d3748',
      boxSizing: 'border-box',
      overflow: 'hidden',
      position: 'relative'
    }}>
      
      {/* Decorative brush stroke elements */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
        <div className="w-full h-full bg-gradient-to-bl from-amber-400 via-orange-400 to-red-400 rounded-full blur-xl"></div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-24 h-24 opacity-10">
        <div className="w-full h-full bg-gradient-to-tr from-red-400 via-orange-400 to-amber-400 rounded-full blur-xl"></div>
      </div>

      {/* Header Section */}
      <div className="relative z-10 mb-8">
        <div className="flex items-start gap-6">
          {profilePhoto && (
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-full border-4 border-gradient-to-r from-amber-400 to-red-400 overflow-hidden shadow-lg">
                <img
                  src={profilePhoto}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
          
          <div className="flex-grow">
            <div className="relative">
              <h1 className="text-3xl font-bold text-gray-800 mb-2 relative">
                {fullName || "Your Name"}
                <div className="absolute -bottom-1 left-0 w-16 h-1 bg-gradient-to-r from-amber-400 to-red-400 rounded-full"></div>
              </h1>
              
              {professionalTitle && (
                <p className="text-lg text-gray-600 font-medium mb-4 italic">
                  {professionalTitle}
                </p>
              )}
              
              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                {phoneNumber && (
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                    <span className="text-gray-700">{phoneNumber}</span>
                  </div>
                )}
                {emailAddress && (
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                    <span className="text-gray-700 break-all">{emailAddress}</span>
                  </div>
                )}
                {linkedinProfile && (
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                    <span className="text-gray-700 break-all">{linkedinProfile}</span>
                  </div>
                )}
                {github && (
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                    <span className="text-gray-700 break-all">{github}</span>
                  </div>
                )}
                {portfolio && (
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    <span className="text-gray-700 break-all">{portfolio}</span>
                  </div>
                )}
                {instagram && (
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    <span className="text-gray-700 break-all">{instagram}</span>
                  </div>
                )}
                {location && (
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                    <span className="text-gray-700">{location}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Summary */}
      {summary && (
        <div className="mb-6">
          <div className="relative mb-3">
            <h2 className="text-xl font-bold text-gray-800 relative z-10 bg-white inline-block pr-4">
              Professional Summary
            </h2>
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 transform -translate-y-1/2"></div>
          </div>
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-lg border-l-4 border-amber-400">
            <p className="text-gray-700 leading-relaxed text-justify">
              {summary}
            </p>
          </div>
        </div>
      )}

      {/* Education */}
      {(getData("education", "Degree Name") || getData("education", "10th Grade School Name & Percentage")) && (
        <div className="mb-6">
          <div className="relative mb-3">
            <h2 className="text-xl font-bold text-gray-800 relative z-10 bg-white inline-block pr-4">
              Education
            </h2>
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 transform -translate-y-1/2"></div>
          </div>
          
          <div className="space-y-3">
            {getData("education", "Degree Name") && (
              <div className="border-l-3 border-amber-400 pl-4 bg-gradient-to-r from-amber-50 to-transparent p-3 rounded-r-lg">
                <h3 className="font-semibold text-gray-800">
                  {getData("education", "Degree Name")}
                </h3>
                {getData("education", "Institution Name") && (
                  <p className="text-gray-600 font-medium">
                    {getData("education", "Institution Name")}
                  </p>
                )}
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mt-1">
                  {getData("education", "Duration") && (
                    <span>{getData("education", "Duration")}</span>
                  )}
                  {getData("education", "CGPA or Percentage") && (
                    <span>• {getData("education", "CGPA or Percentage")}</span>
                  )}
                </div>
              </div>
            )}
            
            {(getData("education", "10th Grade School Name & Percentage") || getData("education", "12th Grade School Name & Percentage")) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                {getData("education", "12th Grade School Name & Percentage") && (
                  <div className="border-l-2 border-orange-400 pl-3 bg-orange-50 p-2 rounded-r">
                    <p className="font-medium text-gray-700">12th Grade</p>
                    <p className="text-gray-600">{getData("education", "12th Grade School Name & Percentage")}</p>
                  </div>
                )}
                {getData("education", "10th Grade School Name & Percentage") && (
                  <div className="border-l-2 border-red-400 pl-3 bg-red-50 p-2 rounded-r">
                    <p className="font-medium text-gray-700">10th Grade</p>
                    <p className="text-gray-600">{getData("education", "10th Grade School Name & Percentage")}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Work Experience */}
      {renderSection(
        selectedCareer === "Medical" ? "Clinical Experience" : "Work Experience",
        getArrayData("work").concat(getArrayData("experience")).concat(getArrayData("workExperience")).concat(getArrayData("internships")),
        (item, index) => (
          <div key={index} className="border-l-3 border-orange-400 pl-4 bg-gradient-to-r from-orange-50 to-transparent p-3 rounded-r-lg">
            <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
              <div>
                <h3 className="font-semibold text-gray-800">
                  {item["Job Title"] || item["Role"] || item["Position"] || "Position"}
                </h3>
                <p className="text-gray-600 font-medium">
                  {item["Company Name"] || item["Organization / Firm"] || item["Hospital / Clinic Name"] || item["School / Institution"] || "Organization"}
                </p>
              </div>
              {item["Duration"] && (
                <span className="text-sm text-gray-500 bg-white px-2 py-1 rounded border">
                  {item["Duration"]}
                </span>
              )}
            </div>
            
            {(item["Responsibilities & Achievements"] || item["Responsibilities & Legal Work"] || item["Key Responsibilities"] || item["Duties"]) && (
              <div className="text-gray-700 text-sm">
                <p className="whitespace-pre-line">
                  {item["Responsibilities & Achievements"] || 
                   item["Responsibilities & Legal Work"] || 
                   item["Key Responsibilities"] || 
                   item["Duties"]}
                </p>
              </div>
            )}
            
            {item["Departments Rotated"] && (
              <p className="text-sm text-gray-600 mt-2">
                <strong>Departments:</strong> {item["Departments Rotated"]}
              </p>
            )}
          </div>
        )
      )}

      {/* Projects */}
      {renderSection(
        selectedCareer === "Law" ? "Legal Projects" : 
        selectedCareer === "Medical" ? "Medical Projects" : 
        selectedCareer === "Finance" ? "Finance Projects" : 
        selectedCareer === "Educational" ? "Teaching Projects" :
        "Projects",
        getArrayData("projects"),
        (item, index) => (
          <div key={index} className="border-l-3 border-red-400 pl-4 bg-gradient-to-r from-red-50 to-transparent p-3 rounded-r-lg">
            <h3 className="font-semibold text-gray-800 mb-2">
              {item["Project Title"] || item["Project/Campaign Name"] || item["Title"] || "Project"}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm mb-3">
              {(item["Tools Used"] || item["Tools/Technologies Used"] || item["Platform Used"]) && (
                <div>
                  <span className="font-medium text-gray-600">Tools: </span>
                  <span className="text-gray-700">
                    {item["Tools Used"] || item["Tools/Technologies Used"] || item["Platform Used"]}
                  </span>
                </div>
              )}
              
              {(item["Year / Role"] || item["Project Type"] || item["Goal / Audience"]) && (
                <div>
                  <span className="font-medium text-gray-600">Type: </span>
                  <span className="text-gray-700">
                    {item["Year / Role"] || item["Project Type"] || item["Goal / Audience"]}
                  </span>
                </div>
              )}
            </div>
            
            {(item["Description"] || item["Summary & Objective"]) && (
              <p className="text-gray-700 text-sm mb-2 whitespace-pre-line">
                {item["Description"] || item["Summary & Objective"]}
              </p>
            )}
            
            {(item["Your Contribution"] || item["Key Insights / Results"] || item["Findings"]) && (
              <p className="text-gray-700 text-sm whitespace-pre-line">
                <strong>Contribution/Results:</strong> {item["Your Contribution"] || item["Key Insights / Results"] || item["Findings"]}
              </p>
            )}
          </div>
        )
      )}

      {/* Publications (for Law career) */}
      {selectedCareer === "Law" && renderSection(
        "Publications",
        getArrayData("publications"),
        (item, index) => (
          <div key={index} className="border-l-3 border-amber-500 pl-4 bg-gradient-to-r from-amber-50 to-transparent p-3 rounded-r-lg">
            <h3 className="font-semibold text-gray-800">
              {item["Article / Blog Title"] || "Publication"}
            </h3>
            {item["Platform (if published)"] && (
              <p className="text-gray-600 text-sm">
                Published on: {item["Platform (if published)"]}
              </p>
            )}
            {item["Brief Summary"] && (
              <p className="text-gray-700 text-sm mt-2">
                {item["Brief Summary"]}
              </p>
            )}
          </div>
        )
      )}

      {/* Skills Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Technical Skills */}
        {(getArrayData("techSkills").length > 0 || getArrayData("skills").length > 0 || getArrayData("coreMedicalSkills").length > 0 || getArrayData("coreLegalSkills").length > 0 || getArrayData("coreSalesSkills").length > 0) && (
          <div>
            <div className="relative mb-3">
              <h2 className="text-lg font-bold text-gray-800 relative z-10 bg-white inline-block pr-4">
                {selectedCareer === "Medical" ? "Medical Skills" :
                 selectedCareer === "Law" ? "Legal Skills" :
                 selectedCareer === "Sales" ? "Sales Skills" :
                 "Technical Skills"}
              </h2>
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 transform -translate-y-1/2"></div>
            </div>
            <div className="space-y-2">
              {[...getArrayData("techSkills"), ...getArrayData("skills"), ...getArrayData("coreMedicalSkills"), ...getArrayData("coreLegalSkills"), ...getArrayData("coreSalesSkills")]
                .filter(item => Object.values(item).some(val => val))
                .map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-amber-400 rounded-full"></span>
                  <span className="text-sm text-gray-700">
                    {Object.values(item).find(val => val) || ""}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Soft Skills / Other Skills */}
        {(getArrayData("softSkills").length > 0 || getArrayData("otherSkills").length > 0 || getArrayData("tools").length > 0 || getArrayData("labSkills").length > 0) && (
          <div>
            <div className="relative mb-3">
              <h2 className="text-lg font-bold text-gray-800 relative z-10 bg-white inline-block pr-4">
                {getArrayData("tools").length > 0 ? "Tools & Software" : "Soft Skills"}
              </h2>
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-orange-400 to-red-400 transform -translate-y-1/2"></div>
            </div>
            <div className="space-y-2">
              {[...getArrayData("softSkills"), ...getArrayData("otherSkills"), ...getArrayData("tools"), ...getArrayData("labSkills")]
                .filter(item => Object.values(item).some(val => val))
                .map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-red-400 rounded-full"></span>
                  <span className="text-sm text-gray-700">
                    {Object.values(item).find(val => val) || ""}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom section with remaining items */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Certifications */}
        {getArrayData("certifications").length > 0 && (
          <div>
            <div className="relative mb-3">
              <h2 className="text-lg font-bold text-gray-800 relative z-10 bg-white inline-block pr-4">
                Certifications
              </h2>
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 transform -translate-y-1/2"></div>
            </div>
            <div className="space-y-2">
              {getArrayData("certifications").map((item, index) => (
                <div key={index} className="text-sm">
                  <p className="font-medium text-gray-800">
                    {item["Course/Certification Name"] || item["Certification Name"] || item["Certification Title"] || "Certification"}
                  </p>
                  {(item["Date"] || item["Year"]) && (
                    <p className="text-gray-600">
                      {item["Date"] || item["Year"]}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Languages */}
        {getArrayData("languages").length > 0 && (
          <div>
            <div className="relative mb-3">
              <h2 className="text-lg font-bold text-gray-800 relative z-10 bg-white inline-block pr-4">
                Languages
              </h2>
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-orange-400 to-red-400 transform -translate-y-1/2"></div>
            </div>
            <div className="space-y-1">
              {getArrayData("languages").map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                  <span className="text-sm text-gray-700">
                    {item["Languages"] || item["Language"] || ""}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Achievements and Activities */}
      {(getArrayData("achievements").length > 0 || getArrayData("activities").length > 0 || getArrayData("extracurricular").length > 0) && (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {getArrayData("achievements").length > 0 && (
            <div>
              <div className="relative mb-3">
                <h2 className="text-lg font-bold text-gray-800 relative z-10 bg-white inline-block pr-4">
                  Achievements
                </h2>
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-amber-400 to-red-400 transform -translate-y-1/2"></div>
              </div>
              <div className="space-y-2">
                {getArrayData("achievements").map((item, index) => (
                  <div key={index} className="text-sm">
                    <p className="text-gray-700">
                      {item["Achievements"] || item["Achievement"] || item["Achievement Title"] || item["Title"] || ""}
                    </p>
                    {(item["Description"] || item["Year"]) && (
                      <p className="text-gray-600 text-xs">
                        {item["Description"] || item["Year"]}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {(getArrayData("activities").length > 0 || getArrayData("extracurricular").length > 0) && (
            <div>
              <div className="relative mb-3">
                <h2 className="text-lg font-bold text-gray-800 relative z-10 bg-white inline-block pr-4">
                  Activities
                </h2>
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-orange-400 to-red-400 transform -translate-y-1/2"></div>
              </div>
              <div className="space-y-2">
                {[...getArrayData("activities"), ...getArrayData("extracurricular")].map((item, index) => (
                  <div key={index} className="text-sm">
                    <p className="text-gray-700">
                      {item["Activities"] || item["Activity"] || item["Activity Title"] || ""}
                    </p>
                    {(item["Description"] || item["Year"]) && (
                      <p className="text-gray-600 text-xs">
                        {item["Description"] || item["Year"]}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Interests */}
      {getArrayData("interests").length > 0 && (
        <div className="mt-6">
          <div className="relative mb-3">
            <h2 className="text-lg font-bold text-gray-800 relative z-10 bg-white inline-block pr-4">
              Interests
            </h2>
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 transform -translate-y-1/2"></div>
          </div>
          <div className="flex flex-wrap gap-2">
            {getArrayData("interests").map((item, index) => (
              <span key={index} className="inline-block bg-gradient-to-r from-amber-100 to-orange-100 text-gray-700 px-3 py-1 rounded-full text-sm border border-amber-200">
                {item["Interests"] || item["Interest"] || ""}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BrushstrokeBoldTemplate;