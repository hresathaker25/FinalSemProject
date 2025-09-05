import React from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Link, User, Briefcase, GraduationCap, Award, Star, Globe, Heart, Zap, Target, Users, Code, Lightbulb, Trophy, FileText, BookOpen } from "lucide-react";

const PearlWhiteTemplate = ({ resumeData, selectedCareer }) => {
  const ResumeFieldsConfig = {
    Others: [
      { sectionKey: "header", display: "none", fields: [] },
      { sectionKey: "summary", title: "Professional Summary" },
      { sectionKey: "languages", title: "Languages Known", multiple: true },
      { sectionKey: "interests", title: "Interests / Hobbies", multiple: true },
      { sectionKey: "education", title: "Education" },
      { sectionKey: "work", title: "Work Experience / Internships", multiple: true },
      { sectionKey: "projects", title: "Projects", multiple: true },
      { sectionKey: "certifications", title: "Certifications", multiple: true },
      { sectionKey: "achievements", title: "Achievements / Awards", multiple: true },
      { sectionKey: "activities", title: "Extracurricular Activities", multiple: true },
      { sectionKey: "techSkills", title: "Technical Skills", multiple: true },
      { sectionKey: "softSkills", title: "Soft Skills", multiple: true }
    ],
    InformationTechnology: [
      { sectionKey: "header", display: "none", fields: [] },
      { sectionKey: "summary", title: "Professional Summary / About Yourself" },
      { sectionKey: "languages", title: "Languages Known", multiple: true },
      { sectionKey: "interests", title: "Interests / Hobbies", multiple: true },
      { sectionKey: "education", title: "Education" },
      { sectionKey: "work", title: "Work Experience / Internships", multiple: true },
      { sectionKey: "projects", title: "Projects", multiple: true },
      { sectionKey: "certifications", title: "Certifications", multiple: true },
      { sectionKey: "achievements", title: "Achievements / Awards", multiple: true },
      { sectionKey: "activities", title: "Extracurricular Activities", multiple: true },
      { sectionKey: "techSkills", title: "Technical Skills", multiple: true },
      { sectionKey: "softSkills", title: "Soft Skills", multiple: true }
    ],
    Marketing: [
      { sectionKey: "header", display: "none", fields: [] },
      { sectionKey: "summary", title: "Professional Summary / About Yourself" },
      { sectionKey: "languages", title: "Languages Known", multiple: true },
      { sectionKey: "interests", title: "Interests / Hobbies", multiple: true },
      { sectionKey: "education", title: "Education" },
      { sectionKey: "techSkills", title: "Marketing / Technical Skills", multiple: true },
      { sectionKey: "softSkills", title: "Soft Skills", multiple: true },
      { sectionKey: "projects", title: "Projects / Campaigns", multiple: true },
      { sectionKey: "work", title: "Work Experience / Internships / Freelance", multiple: true },
      { sectionKey: "certifications", title: "Certifications", multiple: true },
      { sectionKey: "achievements", title: "Achievements / Awards", multiple: true },
      { sectionKey: "activities", title: "Extracurricular Activities", multiple: true }
    ],
    Law: [
      { sectionKey: "header", display: "none", fields: [] },
      { sectionKey: "summary", title: "Professional Summary / About Yourself" },
      { sectionKey: "languages", title: "Languages Known", multiple: true },
      { sectionKey: "interests", title: "Interests / Hobbies", multiple: true },
      { sectionKey: "education", title: "Education" },
      { sectionKey: "work", title: "Work Experience / Internships", multiple: true },
      { sectionKey: "projects", title: "Legal Projects / Case Studies", multiple: true },
      { sectionKey: "publications", title: "Legal Writing / Publications", multiple: true },
      { sectionKey: "achievements", title: "Achievements", multiple: true },
      { sectionKey: "activities", title: "Extracurricular Activities", multiple: true },
      { sectionKey: "coreLegalSkills", title: "Core Legal Skills", multiple: true },
      { sectionKey: "otherSkills", title: "Other Skills", multiple: true }
    ],
    Sales: [
      { sectionKey: "header", display: "none", fields: [] },
      { sectionKey: "summary", title: "Professional Summary / About Yourself" },
      { sectionKey: "languages", title: "Languages Known", multiple: true },
      { sectionKey: "interests", title: "Interests / Hobbies", multiple: true },
      { sectionKey: "education", title: "Education" },
      { sectionKey: "work", title: "Work Experience / Internships", multiple: true },
      { sectionKey: "projects", title: "Projects / Sales Campaigns", multiple: true },
      { sectionKey: "certifications", title: "Certifications", multiple: true },
      { sectionKey: "achievements", title: "Achievements / Awards", multiple: true },
      { sectionKey: "activities", title: "Extracurricular Activities", multiple: true },
      { sectionKey: "coreSalesSkills", title: "Core Sales Skills", multiple: true },
      { sectionKey: "otherSkills", title: "Other Skills", multiple: true }
    ],
    Finance: [
      { sectionKey: "header", display: "none", fields: [] },
      { sectionKey: "summary", title: "Professional Summary / About Yourself" },
      { sectionKey: "education", title: "Education", multiple: true },
      { sectionKey: "workExperience", title: "Work Experience / Internships", multiple: true },
      { sectionKey: "projects", title: "Finance Projects / Case Studies", multiple: true },
      { sectionKey: "skills", title: "Core Finance & Accounting Skills", multiple: true },
      { sectionKey: "tools", title: "Finance Tools & Software", multiple: true },
      { sectionKey: "certifications", title: "Certifications", multiple: true },
      { sectionKey: "achievements", title: "Achievements", multiple: true },
      { sectionKey: "extracurricular", title: "Extracurricular Activities", multiple: true },
      { sectionKey: "languages", title: "Languages Known", multiple: true },
      { sectionKey: "interests", title: "Interests / Hobbies", multiple: true }
    ],
    Medical: [
      { sectionKey: "header", display: "none", fields: [] },
      { sectionKey: "summary", title: "Professional Summary" },
      { sectionKey: "education", title: "Education", multiple: true },
      { sectionKey: "experience", title: "Internships / Clinical Experience", multiple: true },
      { sectionKey: "projects", title: "Medical Projects / Research", multiple: true },
      { sectionKey: "certifications", title: "Certifications", multiple: true },
      { sectionKey: "achievements", title: "Achievements", multiple: true },
      { sectionKey: "activities", title: "Extracurricular Activities", multiple: true },
      { sectionKey: "coreMedicalSkills", title: "Core Medical Skills", multiple: true },
      { sectionKey: "labSkills", title: "Lab & Technical Skills", multiple: true },
      { sectionKey: "softSkills", title: "Soft Skills", multiple: true },
      { sectionKey: "languages", title: "Languages Known", multiple: true },
      { sectionKey: "interests", title: "Interests / Hobbies", multiple: true }
    ],
    Educational: [
      { sectionKey: "header", display: "none", fields: [] },
      { sectionKey: "summary", title: "Professional Summary / About Yourself" },
      { sectionKey: "education", title: "Education", multiple: true },
      { sectionKey: "schooling", title: "Schooling (10th & 12th)" },
      { sectionKey: "internships", title: "Internships / Teaching Practice", multiple: true },
      { sectionKey: "projects", title: "Projects / Teaching Portfolios", multiple: true },
      { sectionKey: "certifications", title: "Certifications", multiple: true },
      { sectionKey: "achievements", title: "Achievements", multiple: true },
      { sectionKey: "activities", title: "Extracurricular Activities", multiple: true },
      { sectionKey: "teachingSkills", title: "Teaching Skills" },
      { sectionKey: "languages", title: "Languages Known", multiple: true },
      { sectionKey: "interests", title: "Interests / Hobbies", multiple: true }
    ]
  };

  const sections = ResumeFieldsConfig[selectedCareer] || ResumeFieldsConfig.Others;

  // Get section icon based on section key
  const getSectionIcon = (sectionKey, title) => {
    const iconMap = {
      summary: User,
      education: GraduationCap,
      work: Briefcase,
      experience: Briefcase,
      workExperience: Briefcase,
      internships: Briefcase,
      projects: Lightbulb,
      certifications: Award,
      achievements: Trophy,
      activities: Users,
      extracurricular: Users,
      techSkills: Code,
      softSkills: Heart,
      coreLegalSkills: FileText,
      coreSalesSkills: Target,
      coreMedicalSkills: User,
      labSkills: Zap,
      teachingSkills: BookOpen,
      skills: Star,
      tools: Code,
      otherSkills: Star,
      languages: Globe,
      interests: Heart,
      publications: FileText,
      schooling: GraduationCap
    };
    
    return iconMap[sectionKey] || Star;
  };

  // Safe data access helper
  const safeGet = (obj, path, defaultValue = '') => {
    if (!obj || typeof obj !== 'object') return defaultValue;
    return obj[path] || defaultValue;
  };

  // Get contact info with safe access
  const getContactInfo = () => {
    const header = resumeData?.header || {};
    return {
      fullName: safeGet(header, 'Full Name', 'Your Name'),
      title: safeGet(header, 'Professional Title', 'Professional Title'),
      phone: safeGet(header, 'Phone Number'),
      email: safeGet(header, 'Email Address'),
      linkedin: safeGet(header, 'LinkedIn Profile'),
      github: safeGet(header, 'Github'),
      portfolio: safeGet(header, 'Portfolio / Content Link'),
      instagram: safeGet(header, 'Instagram / YouTube Handle'),
      location: safeGet(header, 'Location (City, Country)'),
      photo: safeGet(header, 'Profile Photo')
    };
  };

  const contactInfo = getContactInfo();

  // Render section content with overflow handling
  const renderSection = (section) => {
    const data = resumeData[section.sectionKey];
    if (!data) return null;

    // Handle different section types
    if (section.sectionKey === 'summary') {
      const summaryText = typeof data === 'object' ? (data.Summary || data.summary || '') : data;
      if (!summaryText.trim()) return null;
      
      return (
        <div key={section.sectionKey} className="mb-8 break-inside-avoid">
          <div className="flex items-center mb-4 pb-2 border-b border-gray-200">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center mr-3 shadow-sm">
              <User className="w-5 h-5 text-gray-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-800 tracking-wide">{section.title}</h2>
          </div>
          <div className="ml-13 text-gray-700 leading-relaxed whitespace-pre-wrap break-words">
            {summaryText}
          </div>
        </div>
      );
    }

    // Handle teaching skills section (special case with nested structure)
    if (section.sectionKey === 'teachingSkills') {
      const skills = data;
      if (!skills || typeof skills !== 'object') return null;
      
      const hasContent = Object.values(skills).some(value => value && value.toString().trim());
      if (!hasContent) return null;

      return (
        <div key={section.sectionKey} className="mb-8 break-inside-avoid">
          <div className="flex items-center mb-4 pb-2 border-b border-gray-200">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center mr-3 shadow-sm">
              <BookOpen className="w-5 h-5 text-gray-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-800 tracking-wide">{section.title}</h2>
          </div>
          <div className="ml-13 space-y-4">
            {Object.entries(skills).map(([key, value]) => {
              if (!value || !value.toString().trim()) return null;
              return (
                <div key={key} className="break-words">
                  <h4 className="font-semibold text-gray-800 mb-2 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</h4>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{value}</p>
                </div>
              );
            })}
          </div>
        </div>
      );
    }

    // Handle schooling section (special case)
    if (section.sectionKey === 'schooling') {
      const schoolData = data;
      if (!schoolData || typeof schoolData !== 'object') return null;
      
      const hasContent = Object.values(schoolData).some(value => value && value.toString().trim());
      if (!hasContent) return null;

      return (
        <div key={section.sectionKey} className="mb-8 break-inside-avoid">
          <div className="flex items-center mb-4 pb-2 border-b border-gray-200">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center mr-3 shadow-sm">
              <GraduationCap className="w-5 h-5 text-gray-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-800 tracking-wide">{section.title}</h2>
          </div>
          <div className="ml-13 space-y-3">
            {schoolData['10th School Name'] && (
              <div className="break-words">
                <span className="font-medium text-gray-800">10th Grade: </span>
                <span className="text-gray-700">{schoolData['10th School Name']}</span>
                {schoolData['10th Percentage'] && (
                  <span className="text-gray-600 ml-2">({schoolData['10th Percentage']})</span>
                )}
              </div>
            )}
            {schoolData['12th School Name'] && (
              <div className="break-words">
                <span className="font-medium text-gray-800">12th Grade: </span>
                <span className="text-gray-700">{schoolData['12th School Name']}</span>
                {schoolData['12th Percentage'] && (
                  <span className="text-gray-600 ml-2">({schoolData['12th Percentage']})</span>
                )}
              </div>
            )}
          </div>
        </div>
      );
    }

    // Handle multiple items sections
    if (section.multiple && Array.isArray(data)) {
      const validItems = data.filter(item => {
        if (!item || typeof item !== 'object') return false;
        return Object.values(item).some(value => value && value.toString().trim());
      });

      if (validItems.length === 0) return null;

      const SectionIcon = getSectionIcon(section.sectionKey, section.title);

      return (
        <div key={section.sectionKey} className="mb-8 break-inside-avoid">
          <div className="flex items-center mb-4 pb-2 border-b border-gray-200">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center mr-3 shadow-sm">
              <SectionIcon className="w-5 h-5 text-gray-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-800 tracking-wide">{section.title}</h2>
          </div>
          <div className="ml-13 space-y-6">
            {validItems.map((item, index) => (
              <div key={index} className="break-inside-avoid">
                {renderSectionItem(section.sectionKey, item)}
              </div>
            ))}
          </div>
        </div>
      );
    }

    // Handle single item sections (like education)
    if (typeof data === 'object' && !Array.isArray(data)) {
      const hasContent = Object.values(data).some(value => value && value.toString().trim());
      if (!hasContent) return null;

      const SectionIcon = getSectionIcon(section.sectionKey, section.title);

      return (
        <div key={section.sectionKey} className="mb-8 break-inside-avoid">
          <div className="flex items-center mb-4 pb-2 border-b border-gray-200">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center mr-3 shadow-sm">
              <SectionIcon className="w-5 h-5 text-gray-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-800 tracking-wide">{section.title}</h2>
          </div>
          <div className="ml-13">
            {renderSectionItem(section.sectionKey, data)}
          </div>
        </div>
      );
    }

    return null;
  };

  // Render individual section items with proper formatting
  const renderSectionItem = (sectionKey, item) => {
    if (!item || typeof item !== 'object') return null;

    // Work/Experience sections
    if (['work', 'experience', 'workExperience', 'internships'].includes(sectionKey)) {
      const role = item['Job Title'] || item['Role'] || item['Position'] || '';
      const company = item['Company Name'] || item['Organization / Firm'] || item['Hospital / Clinic Name'] || item['School / Institution'] || '';
      const duration = item['Duration'] || '';
      const responsibilities = item['Responsibilities & Achievements'] || item['Responsibilities'] || item['Responsibilities & Legal Work'] || item['Key Responsibilities'] || item['Duties'] || '';
      const departments = item['Departments Rotated'] || '';

      return (
        <div className="space-y-2 break-words">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div className="min-w-0 flex-1">
              <h4 className="font-bold text-gray-900 leading-tight break-words">{role}</h4>
              <p className="text-gray-700 font-medium break-words">{company}</p>
            </div>
            {duration && (
              <span className="text-sm text-gray-600 bg-gray-50 px-3 py-1 rounded-full whitespace-nowrap flex-shrink-0">
                {duration}
              </span>
            )}
          </div>
          {departments && (
            <p className="text-gray-600 text-sm break-words">
              <span className="font-medium">Departments: </span>{departments}
            </p>
          )}
          {responsibilities && (
            <div className="text-gray-700 leading-relaxed whitespace-pre-wrap break-words">
              {responsibilities}
            </div>
          )}
        </div>
      );
    }

    // Projects section
    if (sectionKey === 'projects') {
      const title = item['Project Title'] || item['Project/Campaign Name'] || item['Title'] || item['Project Title'] || '';
      const tools = item['Tools Used'] || item['Tools/Technologies Used'] || item['Platform Used'] || item['Tools/Software'] || item['Year / Role'] || '';
      const description = item['Description'] || item['Goal / Audience'] || item['Topic / Area of Law'] || item['Summary & Objective'] || '';
      const contribution = item['Your Contribution'] || item['Description / Contribution'] || '';
      const result = item['Result / Metrics'] || item['Conversion / Engagement Stats'] || item['Key Insights / Results'] || item['Findings'] || '';
      const projectType = item['Project Type'] || '';
      const channels = item['Channels Used'] || '';
      const whatSold = item['What You Sold / Promoted'] || '';

      return (
        <div className="space-y-3 break-words">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <h4 className="font-bold text-gray-900 leading-tight break-words flex-1 min-w-0">{title}</h4>
            {projectType && (
              <span className="text-sm text-gray-600 bg-gray-50 px-3 py-1 rounded-full whitespace-nowrap flex-shrink-0">
                {projectType}
              </span>
            )}
          </div>
          
          {tools && (
            <p className="text-gray-600 break-words">
              <span className="font-medium text-gray-800">Tools: </span>{tools}
            </p>
          )}
          
          {whatSold && (
            <p className="text-gray-600 break-words">
              <span className="font-medium text-gray-800">Product/Service: </span>{whatSold}
            </p>
          )}
          
          {channels && (
            <p className="text-gray-600 break-words">
              <span className="font-medium text-gray-800">Channels: </span>{channels}
            </p>
          )}
          
          {description && (
            <div className="text-gray-700 leading-relaxed whitespace-pre-wrap break-words">{description}</div>
          )}
          
          {contribution && (
            <div className="text-gray-700 leading-relaxed whitespace-pre-wrap break-words">
              <span className="font-medium text-gray-800">Contribution: </span>{contribution}
            </div>
          )}
          
          {result && (
            <div className="text-gray-700 leading-relaxed break-words">
              <span className="font-medium text-gray-800">Results: </span>{result}
            </div>
          )}
        </div>
      );
    }

    // Publications section
    if (sectionKey === 'publications') {
      const title = item['Article / Blog Title'] || '';
      const platform = item['Platform (if published)'] || '';
      const link = item['Link'] || '';
      const summary = item['Brief Summary'] || '';

      return (
        <div className="space-y-2 break-words">
          <h4 className="font-bold text-gray-900 break-words">{title}</h4>
          {platform && <p className="text-gray-700 font-medium break-words">{platform}</p>}
          {link && (
            <a href={link} className="text-blue-600 hover:text-blue-800 text-sm break-all inline-flex items-center gap-1">
              <Link className="w-3 h-3 flex-shrink-0" />
              {link}
            </a>
          )}
          {summary && <div className="text-gray-700 leading-relaxed whitespace-pre-wrap break-words">{summary}</div>}
        </div>
      );
    }

    // Education section
    if (['education'].includes(sectionKey)) {
      const degree = item['Degree Name'] || item['Degree / Course Name'] || '';
      const institution = item['Institution Name'] || '';
      const duration = item['Duration'] || item['Duration (Start – End or \'Present\')'] || '';
      const grade = item['CGPA or Percentage'] || item['CGPA / Percentage'] || '';
      const tenth = item['10th Grade School Name & Percentage'] || '';
      const twelfth = item['12th Grade School Name & Percentage'] || '';

      return (
        <div className="space-y-2 break-words">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div className="min-w-0 flex-1">
              <h4 className="font-bold text-gray-900 leading-tight break-words">{degree}</h4>
              <p className="text-gray-700 font-medium break-words">{institution}</p>
            </div>
            {duration && (
              <span className="text-sm text-gray-600 bg-gray-50 px-3 py-1 rounded-full whitespace-nowrap flex-shrink-0">
                {duration}
              </span>
            )}
          </div>
          {grade && <p className="text-gray-600 break-words"><span className="font-medium">Grade: </span>{grade}</p>}
          {tenth && <p className="text-gray-600 text-sm break-words">10th: {tenth}</p>}
          {twelfth && <p className="text-gray-600 text-sm break-words">12th: {twelfth}</p>}
        </div>
      );
    }

    // Achievements section
    if (['achievements'].includes(sectionKey)) {
      const achievement = item['Achievements'] || item['Achievement'] || item['Title'] || '';
      const description = item['Description'] || '';
      const year = item['Year'] || '';

      return (
        <div className="flex items-start gap-3 break-words">
          <div className="w-2 h-2 rounded-full bg-gray-400 mt-2 flex-shrink-0"></div>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <p className="text-gray-700 leading-relaxed break-words flex-1 min-w-0">{achievement}</p>
              {year && (
                <span className="text-sm text-gray-500 whitespace-nowrap flex-shrink-0">{year}</span>
              )}
            </div>
            {description && (
              <div className="text-gray-600 text-sm mt-1 leading-relaxed whitespace-pre-wrap break-words">{description}</div>
            )}
          </div>
        </div>
      );
    }

    // Certifications section
    if (['certifications'].includes(sectionKey)) {
      const name = item['Course/Certification Name'] || item['Certification Name'] || item['Certification Title'] || '';
      const date = item['Date'] || item['Year'] || '';

      return (
        <div className="flex items-center justify-between gap-4 break-words">
          <p className="text-gray-700 font-medium break-words flex-1 min-w-0">{name}</p>
          {date && (
            <span className="text-sm text-gray-600 bg-gray-50 px-3 py-1 rounded-full whitespace-nowrap flex-shrink-0">
              {date}
            </span>
          )}
        </div>
      );
    }

    // Skills sections
    if (['techSkills', 'softSkills', 'coreLegalSkills', 'coreSalesSkills', 'coreMedicalSkills', 'labSkills', 'skills', 'tools', 'otherSkills'].includes(sectionKey)) {
      const skill = item['Technical Skills'] || item['Soft Skills'] || item['Core Legal Skill'] || item['Core Sales Skills'] || item['Skill'] || item['Tool/Software'] || item['Tools/Softwares'] || Object.values(item)[0] || '';

      return (
        <div className="flex items-center gap-3 break-words">
          <div className="w-2 h-2 rounded-full bg-gray-400 flex-shrink-0"></div>
          <p className="text-gray-700 break-words">{skill}</p>
        </div>
      );
    }

    // Activities section
    if (['activities', 'extracurricular'].includes(sectionKey)) {
      const activity = item['Activities'] || item['Activity'] || item['Activity Title'] || '';
      const description = item['Description'] || '';
      const year = item['Year'] || '';

      return (
        <div className="flex items-start gap-3 break-words">
          <div className="w-2 h-2 rounded-full bg-gray-400 mt-2 flex-shrink-0"></div>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <p className="text-gray-700 font-medium break-words flex-1 min-w-0">{activity}</p>
              {year && (
                <span className="text-sm text-gray-500 whitespace-nowrap flex-shrink-0">{year}</span>
              )}
            </div>
            {description && (
              <div className="text-gray-600 text-sm mt-1 leading-relaxed whitespace-pre-wrap break-words">{description}</div>
            )}
          </div>
        </div>
      );
    }

    // Languages and Interests sections
    if (['languages', 'interests'].includes(sectionKey)) {
      const content = item['Languages'] || item['Language'] || item['Interests'] || item['Interest'] || Object.values(item)[0] || '';

      return (
        <div className="flex items-center gap-3 break-words">
          <div className="w-2 h-2 rounded-full bg-gray-400 flex-shrink-0"></div>
          <p className="text-gray-700 break-words">{content}</p>
        </div>
      );
    }

    // Default rendering for any other section
    const entries = Object.entries(item).filter(([_, value]) => value && value.toString().trim());
    if (entries.length === 0) return null;

    return (
      <div className="space-y-2 break-words">
        {entries.map(([key, value]) => (
          <div key={key} className="break-words">
            <span className="font-medium text-gray-800 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}: </span>
            <span className="text-gray-700">{value}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="a4-page bg-white shadow-2xl mx-auto overflow-hidden" style={{ 
      width: '210mm', 
      minHeight: '297mm',
      maxWidth: '100%',
      fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      {/* Elegant Pearl White Header with Subtle Gradient */}
      <div className="relative bg-gradient-to-r from-gray-50 via-white to-gray-50 border-b border-gray-100">
        {/* Decorative top border */}
        <div className="h-1 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200"></div>
        
        <div className="px-12 py-10">
          <div className="flex items-start gap-8">
            {/* Profile Photo */}
            {contactInfo.photo && (
              <div className="flex-shrink-0">
                <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-xl bg-gradient-to-br from-gray-100 to-gray-200">
                  <img
                    src={contactInfo.photo}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
            
            {/* Name and Title */}
            <div className="flex-1 min-w-0">
              <h1 className="text-4xl font-bold text-gray-900 mb-3 leading-tight break-words">
                {contactInfo.fullName}
              </h1>
              <p className="text-xl text-gray-600 font-light mb-6 break-words">
                {contactInfo.title}
              </p>
              
              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                {contactInfo.email && (
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-gray-600" />
                    </div>
                    <span className="break-all">{contactInfo.email}</span>
                  </div>
                )}
                
                {contactInfo.phone && (
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 text-gray-600" />
                    </div>
                    <span className="break-all">{contactInfo.phone}</span>
                  </div>
                )}
                
                {contactInfo.location && (
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-gray-600" />
                    </div>
                    <span className="break-words">{contactInfo.location}</span>
                  </div>
                )}
                
                {contactInfo.linkedin && (
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                      <Linkedin className="w-4 h-4 text-gray-600" />
                    </div>
                    <span className="break-all">{contactInfo.linkedin.replace(/^https?:\/\//, '')}</span>
                  </div>
                )}
                
                {contactInfo.github && (
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                      <Github className="w-4 h-4 text-gray-600" />
                    </div>
                    <span className="break-all">{contactInfo.github.replace(/^https?:\/\//, '')}</span>
                  </div>
                )}
                
                {contactInfo.portfolio && (
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                      <Link className="w-4 h-4 text-gray-600" />
                    </div>
                    <span className="break-all">{contactInfo.portfolio.replace(/^https?:\/\//, '')}</span>
                  </div>
                )}
                
                {contactInfo.instagram && (
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                      <Link className="w-4 h-4 text-gray-600" />
                    </div>
                    <span className="break-all">{contactInfo.instagram}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Subtle bottom decoration */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="px-12 py-8">
        <div className="space-y-0">
          {sections.map(section => {
            if (section.display === "none") return null;
            return renderSection(section);
          })}
        </div>
      </div>

      {/* Elegant Footer */}
      <div className="mt-auto">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        <div className="px-12 py-6 text-center">
          <div className="flex items-center justify-center gap-2 text-gray-400 text-xs">
            <div className="w-1 h-1 rounded-full bg-gray-300"></div>
            <span>Professional Resume</span>
            <div className="w-1 h-1 rounded-full bg-gray-300"></div>
            <span>{new Date().getFullYear()}</span>
            <div className="w-1 h-1 rounded-full bg-gray-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PearlWhiteTemplate;