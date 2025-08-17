const ResumeFieldsConfig = {
  Others: [
    {
      sectionKey: "header", // used internally
      display: "none", // hide this title in preview
      fields: [
        { label: "Full Name", type: "text" },
        { label: "Professional Title", type: "text" },
        { label: "Phone Number", type: "text" },
        { label: "Email Address", type: "text" },
        { label: "LinkedIn Profile", type: "text" },
        { label: "Location (City, Country)", type: "text" },
        { label: "Profile Photo", type: "file" },
      ],
    },
    {
      sectionKey: "summary",
      title: "Professional Summary",
      fields: [
        {
          label: "Summary",
          type: "textarea",
          placeholder:
            "Who you are\nYour academic background or experience\nWhat you’re looking for\nOne strength/achievement",
        },
      ],
    },
    {
      sectionKey: "languages",
      title: "Languages Known",
      multiple: true,
      fields: [
        {
          label: "Languages",
          type: "text",
          placeholder: "English (Fluent), Hindi (Native), etc.",
        },
      ],
    },
    {
      sectionKey: "interests",
      title: "Interests / Hobbies",
      multiple: true,
      fields: [
        {
          label: "Interests",
          type: "text",
          placeholder: "Reading, Blogging, Traveling, Gaming...",
        },
      ],
    },
    {
      sectionKey: "education",
      title: "Education",
      fields: [
        { label: "Degree Name", type: "text" },
        { label: "Institution Name", type: "text" },
        { label: "Duration", type: "text" },
        { label: "CGPA or Percentage", type: "text" },
        { label: "10th Grade School Name & Percentage", type: "text" },
        { label: "12th Grade School Name & Percentage", type: "text" },
      ],
    },
    {
      sectionKey: "work",
      title: "Work Experience / Internships",
      multiple: true,
      fields: [
        { label: "Job Title", type: "text" },
        { label: "Company Name", type: "text" },
        { label: "Duration", type: "text" },
        {
          label: "Responsibilities & Achievements",
          type: "textarea",
          placeholder: "Use action verbs, write 2–4 points.",
        },
      ],
    },
    {
      sectionKey: "projects",
      title: "Projects",
      multiple: true,
      fields: [
        { label: "Project Title", type: "text" },
        { label: "Tools Used", type: "text" },
        { label: "Description", type: "textarea" },
        { label: "Your Contribution", type: "textarea" },
      ],
    },
    {
      sectionKey: "certifications",
      title: "Certifications",
      multiple: true,
      fields: [
        { label: "Course/Certification Name", type: "text" },
        { label: "Date", type: "text" },
      ],
    },
    {
      sectionKey: "achievements",
      title: "Achievements / Awards",
      multiple: true,
      fields: [
        {
          label: "Achievements",
          type: "text",
          placeholder: "Academic achievements, awards...",
        },
      ],
    },
    {
      sectionKey: "activities",
      title: "Extracurricular Activities",
      multiple: true,
      fields: [
        {
          label: "Activities",
          type: "text",
          placeholder: "Clubs, leadership roles, volunteering...",
        },
      ],
    },
    {
      sectionKey: "techSkills",
      title: "Technical Skills",
      multiple: true,
      fields: [
        {
          label: "Technical Skills",
          type: "text",
          placeholder: "Programming, Frameworks/Tools, Software Proficiency...",
        },
      ],
    },
    {
      sectionKey: "softSkills",
      title: "Soft Skills",
      multiple: true,
      fields: [
        {
          label: "Soft Skills",
          type: "text",
          placeholder:
            "Communication, Teamwork, Problem-Solving, Adaptability...",
        },
      ],
    },
  ],
  InformationTechnology: [
    {
      sectionKey: "header",
      display: "none", // hide title in preview
      fields: [
        { label: "Full Name", type: "text" },
        { label: "Professional Title", type: "text" },
        { label: "Phone Number", type: "text" },
        { label: "Email Address", type: "text" },
        { label: "LinkedIn Profile", type: "text" },
        { label: "Github", type: "text" },
        { label: "Location (City, Country)", type: "text" },
        { label: "Profile Photo", type: "file" }, // NEW for image upload
      ],
    },
    {
      sectionKey: "summary",
      title: "Professional Summary / About Yourself",
      fields: [
        {
          label: "Summary",
          type: "textarea",
          placeholder:
            "Who you are\nYour academic background or experience\nWhat you’re looking for\nOne strength/achievement",
        },
      ],
    },
    {
      sectionKey: "languages",
      title: "Languages Known",
      multiple: true,
      fields: [
        {
          label: "Languages",
          type: "text",
          placeholder: "English (Fluent), Hindi (Native), etc.",
        },
      ],
    },
    {
      sectionKey: "interests",
      title: "Interests / Hobbies",
      multiple: true,
      fields: [
        {
          label: "Interests",
          type: "text",
          placeholder: "Reading, Blogging, Traveling, Gaming...",
        },
      ],
    },
    {
      sectionKey: "education",
      title: "Education",
      fields: [
        { label: "Degree Name", type: "text" },
        { label: "Institution Name", type: "text" },
        { label: "Duration (Start – End or ‘Present’)", type: "text" },
        { label: "CGPA or Percentage", type: "text" },
        { label: "10th Grade School Name & Percentage", type: "text" },
        { label: "12th Grade School Name & Percentage", type: "text" },
      ],
    },
    {
      sectionKey: "work",
      title: "Work Experience / Internships",
      multiple: true,
      fields: [
        { label: "Job Title", type: "text" },
        { label: "Company Name", type: "text" },
        { label: "Duration", type: "text" },
        {
          label: "Responsibilities & Achievements",
          type: "textarea",
          placeholder: "Use action verbs, write 2–4 points.",
        },
      ],
    },
    {
      sectionKey: "projects",
      title: "Projects",
      multiple: true,
      fields: [
        { label: "Project Title", type: "text" },
        { label: "Tools/Technologies Used", type: "text" },
        { label: "Description", type: "textarea" },
        { label: "Your Contribution", type: "textarea" },
      ],
    },
    {
      sectionKey: "certifications",
      title: "Certifications",
      multiple: true,
      fields: [
        { label: "Course/Certification Name", type: "text" },
        { label: "Date", type: "text" },
      ],
    },
    {
      sectionKey: "achievements",
      title: "Achievements / Awards",
      multiple: true,
      fields: [
        {
          label: "Achievements",
          type: "text",
          placeholder: "Academic achievements, awards, Hackathons...",
        },
      ],
    },
    {
      sectionKey: "activities",
      title: "Extracurricular Activities",
      multiple: true,
      fields: [
        {
          label: "Activities",
          type: "text",
          placeholder: "Clubs, leadership roles, volunteering...",
        },
      ],
    },
    {
      sectionKey: "techSkills",
      title: "Technical Skills",
      multiple: true,
      fields: [
        {
          label: "Technical Skills",
          type: "text",
          placeholder:
            "Programming, Frameworks/Tools, Software Proficiency, Other Technical Skills...",
        },
      ],
    },
    {
      sectionKey: "softSkills",
      title: "Soft Skills",
      multiple: true,
      fields: [
        {
          label: "Soft Skills",
          type: "text",
          placeholder:
            "Communication, Teamwork, Problem-Solving, Adaptability...",
        },
      ],
    },
  ],
  Marketing: [
    {
      sectionKey: "header",
      display: "none",
      fields: [
        { label: "Full Name", type: "text" },
        { label: "Professional Title", type: "text" },
        { label: "Phone Number", type: "text" },
        { label: "Email Address", type: "text" },
        { label: "LinkedIn Profile", type: "text" },
        { label: "Portfolio / Content Link", type: "text" },
        { label: "Instagram / YouTube Handle", type: "text" },
        { label: "Location (City, Country)", type: "text" },
        { label: "Profile Photo", type: "file" },
      ],
    },
    {
      sectionKey: "summary",
      title: "Professional Summary / About Yourself",
      fields: [
        {
          label: "Summary",
          type: "textarea",
          placeholder:
            "Who you are\nYour academic background or experience\nWhat you’re looking for\nOne strength/achievement",
        },
      ],
    },
    {
      sectionKey: "languages",
      title: "Languages Known",
      multiple: true,
      fields: [
        {
          label: "Languages",
          type: "text",
          placeholder: "English (Fluent), Hindi (Native), etc.",
        },
      ],
    },
    {
      sectionKey: "interests",
      title: "Interests / Hobbies",
      multiple: true,
      fields: [
        {
          label: "Interests",
          type: "text",
          placeholder: "Reading, Blogging, Traveling, Gaming...",
        },
      ],
    },
    {
      sectionKey: "education",
      title: "Education",
      fields: [
        { label: "Degree Name", type: "text" },
        { label: "Institution Name", type: "text" },
        { label: "Duration", type: "text" },
        { label: "CGPA or Percentage", type: "text" },
        { label: "10th Grade School Name & Percentage", type: "text" },
        { label: "12th Grade School Name & Percentage", type: "text" },
      ],
    },
    {
      sectionKey: "techSkills",
      title: "Marketing / Technical Skills",
      multiple: true,
      fields: [
        {
          label: "Skill",
          type: "text",
          placeholder:
            "Digital marketing, Analytics, Design, SEO, SEM, Tools...",
        },
      ],
    },
    {
      sectionKey: "softSkills",
      title: "Soft Skills",
      multiple: true,
      fields: [
        {
          label: "Soft Skill",
          type: "text",
          placeholder:
            "Communication, Teamwork, Problem-Solving, Adaptability...",
        },
      ],
    },
    {
      sectionKey: "projects",
      title: "Projects / Campaigns",
      multiple: true,
      fields: [
        { label: "Project/Campaign Name", type: "text" },
        { label: "Goal / Audience", type: "text" },
        { label: "Platform Used", type: "text" },
        { label: "Result / Metrics", type: "text" },
        { label: "Tools Used", type: "text" },
        { label: "Your Contribution", type: "textarea" },
      ],
    },
    {
      sectionKey: "work",
      title: "Work Experience / Internships / Freelance",
      multiple: true,
      fields: [
        { label: "Role", type: "text" },
        { label: "Company / Client", type: "text" },
        { label: "Duration", type: "text" },
        {
          label: "Responsibilities",
          type: "textarea",
          placeholder: "Use action verbs, write 2–4 points.",
        },
      ],
    },
    {
      sectionKey: "certifications",
      title: "Certifications",
      multiple: true,
      fields: [
        { label: "Course/Certification Name", type: "text" },
        { label: "Date", type: "text" },
      ],
    },
    {
      sectionKey: "achievements",
      title: "Achievements / Awards",
      multiple: true,
      fields: [
        {
          label: "Achievement",
          type: "text",
          placeholder: "Academic awards, campaign awards, hackathons...",
        },
      ],
    },
    {
      sectionKey: "activities",
      title: "Extracurricular Activities",
      multiple: true,
      fields: [
        {
          label: "Activity",
          type: "text",
          placeholder: "Clubs, leadership roles, volunteering...",
        },
      ],
    },
  ],

  Law: [
    {
      sectionKey: "header",
      display: "none",
      fields: [
        { label: "Full Name", type: "text" },
        { label: "Professional Title", type: "text" },
        { label: "Phone Number", type: "text" },
        { label: "Email Address", type: "text" },
        { label: "LinkedIn Profile", type: "text" },
        { label: "Location (City, Country)", type: "text" },
        { label: "Profile Photo", type: "file" },
      ],
    },
    {
      sectionKey: "summary",
      title: "Professional Summary / About Yourself",
      fields: [
        {
          label: "Summary",
          type: "textarea",
          placeholder:
            "Who you are\nYour academic background or experience\nWhat you’re looking for\nOne strength/achievement",
        },
      ],
    },
    {
      sectionKey: "languages",
      title: "Languages Known",
      multiple: true,
      fields: [
        {
          label: "Languages",
          type: "text",
          placeholder: "English (Fluent), Hindi (Native), etc.",
        },
      ],
    },
    {
      sectionKey: "interests",
      title: "Interests / Hobbies",
      multiple: true,
      fields: [
        {
          label: "Interests",
          type: "text",
          placeholder: "Reading, Mooting, Research, Blogging...",
        },
      ],
    },
    {
      sectionKey: "education",
      title: "Education",
      fields: [
        { label: "Degree Name", type: "text" },
        { label: "Institution Name", type: "text" },
        { label: "Duration", type: "text" },
        { label: "CGPA or Percentage", type: "text" },
        { label: "10th Grade School Name & Percentage", type: "text" },
        { label: "12th Grade School Name & Percentage", type: "text" },
      ],
    },
    {
      sectionKey: "work",
      title: "Work Experience / Internships",
      multiple: true,
      fields: [
        { label: "Position", type: "text" },
        { label: "Organization / Firm", type: "text" },
        { label: "Duration", type: "text" },
        {
          label: "Responsibilities & Legal Work",
          type: "textarea",
          placeholder:
            "Drafted contracts and notices; Researched case law; Assisted in client interviews; Attended court proceedings",
        },
      ],
    },
    {
      sectionKey: "projects", // ✅ unified key (instead of legalProjects)
      title: "Legal Projects / Case Studies",
      multiple: true,
      fields: [
        {
          label: "Title",
          type: "text",
          placeholder: "e.g., Moot Court – XYZ v. State",
        },
        {
          label: "Year / Role",
          type: "text",
          placeholder: "e.g., 2024 – Lead Speaker",
        },
        {
          label: "Topic / Area of Law",
          type: "text",
          placeholder: "e.g., Constitutional Law",
        },
        {
          label: "Description / Contribution",
          type: "textarea",
          placeholder:
            "Drafted memorials; Conducted research; Presented oral arguments; Analyzed judgments",
        },
      ],
    },
    {
      sectionKey: "publications",
      title: "Legal Writing / Publications",
      multiple: true,
      fields: [
        { label: "Article / Blog Title", type: "text" },
        {
          label: "Platform (if published)",
          type: "text",
          placeholder: "e.g., LiveLaw, Medium",
        },
        { label: "Link", type: "text", placeholder: "https://..." },
        {
          label: "Brief Summary",
          type: "textarea",
          placeholder:
            "e.g., Comparative analysis of constitutional principles in India and the US...",
        },
      ],
    },
    {
      sectionKey: "achievements",
      title: "Achievements",
      multiple: true,
      fields: [
        {
          label: "Achievement",
          type: "text",
          placeholder: "Academic awards, moot rankings, scholarships...",
        },
      ],
    },
    {
      sectionKey: "activities",
      title: "Extracurricular Activities",
      multiple: true,
      fields: [
        {
          label: "Activity",
          type: "text",
          placeholder: "Organized fests, NGO volunteering, student bodies...",
        },
      ],
    },
    {
      sectionKey: "coreLegalSkills",
      title: "Core Legal Skills",
      multiple: true,
      fields: [
        {
          label: "Core Legal Skill",
          type: "text",
          placeholder:
            "Legal research, drafting, due diligence, case analysis...",
        },
      ],
    },
    {
      sectionKey: "otherSkills",
      title: "Other Skills",
      multiple: true,
      fields: [
        {
          label: "Tools / Software",
          type: "text",
          placeholder: "MS Word, Legal Databases (SCC, Manupatra), Zotero...",
        },
        {
          label: "Soft Skill",
          type: "text",
          placeholder: "Communication, Negotiation, Adaptability...",
        },
      ],
    },
  ],

  Sales: [
    {
      sectionKey: "header",
      display: "none", // hide this title in preview
      fields: [
        { label: "Full Name", type: "text" },
        { label: "Professional Title", type: "text" },
        { label: "Phone Number", type: "text" },
        { label: "Email Address", type: "text" },
        { label: "LinkedIn Profile", type: "text" },
        { label: "Location (City, Country)", type: "text" },
        { label: "Profile Photo", type: "file" },
      ],
    },
    {
      sectionKey: "summary",
      title: "Professional Summary / About Yourself",
      fields: [
        {
          label: "Summary",
          type: "textarea",
          placeholder:
            "Who you are\nYour academic background or experience\nWhat you’re looking for\nOne strength/achievement",
        },
      ],
    },
    {
      sectionKey: "languages",
      title: "Languages Known",
      multiple: true,
      fields: [
        {
          label: "Languages",
          type: "text",
          placeholder: "English (Fluent), Hindi (Native), etc.",
        },
      ],
    },
    {
      sectionKey: "interests",
      title: "Interests / Hobbies",
      multiple: true,
      fields: [
        {
          label: "Interests",
          type: "text",
          placeholder: "Reading, Blogging, Traveling, Gaming...",
        },
      ],
    },
    {
      sectionKey: "education",
      title: "Education",
      fields: [
        { label: "Degree Name", type: "text" },
        { label: "Institution Name", type: "text" },
        { label: "Duration (Start – End or ‘Present’)", type: "text" },
        { label: "CGPA or Percentage", type: "text" },
        { label: "10th Grade School Name & Percentage", type: "text" },
        { label: "12th Grade School Name & Percentage", type: "text" },
      ],
    },
    {
      sectionKey: "work",
      title: "Work Experience / Internships",
      multiple: true,
      fields: [
        { label: "Role", type: "text" },
        { label: "Company Name", type: "text" },
        { label: "Duration", type: "text" },
        {
          label: "Duties",
          type: "textarea",
          placeholder: "Handling leads, CRM updates, etc...",
        },
      ],
    },
    {
      sectionKey: "projects",
      title: "Projects / Sales Campaigns",
      multiple: true,
      fields: [
        {
          label: "Project Title",
          type: "text",
          placeholder: "e.g., Campus Sales Challenge",
        },
        {
          label: "What You Sold / Promoted",
          type: "text",
          placeholder: "e.g., Webinar Ticket, Ed-Tech Course, SaaS Tool",
        },
        {
          label: "Channels Used",
          type: "text",
          placeholder: "e.g., Cold Email, WhatsApp, Instagram DMs, Phone Calls",
        },
        {
          label: "Conversion / Engagement Stats",
          type: "text",
          placeholder: "e.g., 50 signups, 2000 views, 10 demo calls",
        },
        {
          label: "Tools Used",
          type: "text",
          placeholder: "e.g., Mailchimp, HubSpot, Google Sheets",
        },
      ],
    },
    {
      sectionKey: "certifications",
      title: "Certifications",
      multiple: true,
      fields: [
        { label: "Course/Certification Name", type: "text" },
        { label: "Date", type: "text" },
      ],
    },
    {
      sectionKey: "achievements",
      title: "Achievements / Awards",
      multiple: true,
      fields: [
        {
          label: "Achievements",
          type: "text",
          placeholder: "Sales awards, performance recognition, etc...",
        },
      ],
    },
    {
      sectionKey: "activities",
      title: "Extracurricular Activities",
      multiple: true,
      fields: [
        {
          label: "Activities",
          type: "text",
          placeholder: "Organized fests, volunteer at NGO, etc...",
        },
      ],
    },
    {
      sectionKey: "coreSalesSkills",
      title: "Core Sales Skills",
      multiple: true,
      fields: [
        {
          label: "Core Sales Skills",
          type: "text",
          placeholder: "Lead generation, cold calling, negotiation...",
        },
      ],
    },
    {
      sectionKey: "otherSkills",
      title: "Other Skills",
      multiple: true,
      fields: [
        {
          label: "Tools/Softwares",
          type: "text",
          placeholder: "CRM, MS Excel, Canva, etc...",
        },
        {
          label: "Soft Skills",
          type: "text",
          placeholder: "Communication, Time-Management, etc...",
        },
      ],
    },
  ],

  Finance: [
    {
      sectionKey: "header",
      display: "none",
      fields: [
        { label: "Full Name", type: "text" },
        { label: "Professional Title", type: "text" },
        { label: "Phone Number", type: "text" },
        { label: "Email Address", type: "text" },
        { label: "LinkedIn Profile", type: "text" },
        { label: "Location (City, Country)", type: "text" },
        { label: "Profile Photo", type: "file" },
      ],
    },
    {
      sectionKey: "summary",
      title: "Professional Summary / About Yourself",
      fields: [
        {
          label: "Summary",
          type: "textarea",
          placeholder:
            "Who you are\nYour finance background or specialization\nKey strengths/achievements\nWhat you’re looking for",
        },
      ],
    },
    {
      sectionKey: "education",
      title: "Education",
      multiple: true,
      fields: [
        { label: "Degree Name", type: "text" },
        { label: "Institution Name", type: "text" },
        { label: "Duration (Start – End or ‘Present’)", type: "text" },
        { label: "CGPA or Percentage", type: "text" },
        { label: "10th Grade School Name & Percentage", type: "text" },
        { label: "12th Grade School Name & Percentage", type: "text" },
      ],
    },
    {
      sectionKey: "workExperience",
      title: "Work Experience / Internships",
      multiple: true,
      fields: [
        { label: "Role", type: "text" },
        { label: "Company Name", type: "text" },
        { label: "Duration", type: "text" },
        {
          label: "Responsibilities & Achievements",
          type: "textarea",
          placeholder:
            "Managed bookkeeping & reporting\nPerformed financial analysis\nPrepared monthly/quarterly reports",
        },
      ],
    },
    {
      sectionKey: "projects",
      title: "Finance Projects / Case Studies",
      multiple: true,
      fields: [
        {
          label: "Project Title",
          type: "text",
          placeholder: "e.g., Valuation of XYZ Ltd.",
        },
        {
          label: "Project Type",
          type: "text",
          placeholder: "e.g., Academic, Internship, Research",
        },
        {
          label: "Key Insights / Results",
          type: "textarea",
          placeholder: "e.g., Identified cost leakages, improved ROI by 12%",
        },
        {
          label: "Tools Used",
          type: "text",
          placeholder: "e.g., Excel, SAP, QuickBooks",
        },
      ],
    },
    {
      sectionKey: "skills",
      title: "Core Finance & Accounting Skills",
      multiple: true,
      fields: [
        {
          label: "Skill",
          type: "text",
          placeholder: "e.g., Budgeting & Forecasting",
        },
      ],
    },
    {
      sectionKey: "tools",
      title: "Finance Tools & Software",
      multiple: true,
      fields: [
        {
          label: "Tool/Software",
          type: "text",
          placeholder: "e.g., Excel (Advanced), Tally, SAP",
        },
      ],
    },
    {
      sectionKey: "certifications",
      title: "Certifications",
      multiple: true,
      fields: [
        { label: "Course/Certification Name", type: "text" },
        { label: "Date", type: "text" },
      ],
    },
    {
      sectionKey: "achievements",
      title: "Achievements",
      multiple: true,
      fields: [
        {
          label: "Achievement",
          type: "textarea",
          placeholder:
            "e.g., Secured 1st place in National Finance Case Study Competition",
        },
      ],
    },
    {
      sectionKey: "extracurricular",
      title: "Extracurricular Activities",
      multiple: true,
      fields: [
        {
          label: "Activity",
          type: "textarea",
          placeholder:
            "e.g., Member of Finance Club, Organized investment workshops",
        },
      ],
    },
    {
      sectionKey: "languages",
      title: "Languages Known",
      multiple: true,
      fields: [
        {
          label: "Language",
          type: "text",
          placeholder: "English (Fluent), Hindi (Native), etc.",
        },
      ],
    },
    {
      sectionKey: "interests",
      title: "Interests / Hobbies",
      multiple: true,
      fields: [
        {
          label: "Interest",
          type: "text",
          placeholder: "Reading, Blogging, Investing, Traveling...",
        },
      ],
    },
  ],

  Medical: [
    {
      sectionKey: "header",
      display: "none", // hidden title
      fields: [
        { label: "Full Name", type: "text" },
        { label: "Professional Title", type: "text" },
        { label: "Phone Number", type: "text" },
        { label: "Email Address", type: "text" },
        { label: "LinkedIn Profile", type: "text" },
        { label: "Location (City, Country)", type: "text" },
        { label: "Profile Photo", type: "file" },
      ],
    },
    {
      sectionKey: "summary",
      title: "Professional Summary",
      fields: [
        {
          label: "Summary",
          type: "textarea",
          placeholder:
            "Who you are\nYour medical background or education\nSpecializations\nCareer goal or strength",
        },
      ],
    },
    {
      sectionKey: "education",
      title: "Education",
      multiple: true,
      fields: [
        {
          label: "Degree Name",
          type: "text",
          placeholder: "MBBS, B.Sc Nursing",
        },
        { label: "Institution Name", type: "text" },
        { label: "Duration (Start – End or ‘Present’)", type: "text" },
        { label: "CGPA or Percentage", type: "text" },
      ],
    },
    {
      sectionKey: "experience",
      title: "Internships / Clinical Experience",
      multiple: true,
      fields: [
        { label: "Role", type: "text", placeholder: "e.g., Nursing Intern" },
        { label: "Hospital / Clinic Name", type: "text" },
        {
          label: "Departments Rotated",
          type: "text",
          placeholder: "e.g., ICU, Pediatrics, General Surgery",
        },
        {
          label: "Key Responsibilities",
          type: "textarea",
          placeholder:
            "e.g., Recorded vitals, assisted in patient care, maintained case files",
        },
      ],
    },
    {
      sectionKey: "projects",
      title: "Medical Projects / Research",
      multiple: true,
      fields: [
        { label: "Project Title", type: "text" },
        { label: "Institution / Guide", type: "text" },
        { label: "Summary & Objective", type: "textarea" },
        { label: "Findings", type: "textarea" },
      ],
    },
    {
      sectionKey: "certifications",
      title: "Certifications",
      multiple: true,
      fields: [
        {
          label: "Certification Name",
          type: "text",
          placeholder: "e.g., CPR / BLS",
        },
        { label: "Year", type: "text" },
      ],
    },
    {
      sectionKey: "achievements",
      title: "Achievements",
      multiple: true,
      fields: [
        { label: "Title", type: "text" },
        { label: "Description", type: "textarea" },
        { label: "Year", type: "text" },
      ],
    },
    {
      sectionKey: "activities",
      title: "Extracurricular Activities",
      multiple: true,
      fields: [
        { label: "Activity Title", type: "text" },
        { label: "Description", type: "textarea" },
        { label: "Year", type: "text" },
      ],
    },
    {
      sectionKey: "coreMedicalSkills",
      title: "Core Medical Skills",
      multiple: true,
      fields: [
        {
          label: "Skill",
          type: "text",
          placeholder: "e.g., Patient Care, Emergency Response",
        },
      ],
    },
    {
      sectionKey: "labSkills",
      title: "Lab & Technical Skills",
      multiple: true,
      fields: [
        {
          label: "Skill",
          type: "text",
          placeholder: "e.g., Blood Sampling, EMR Software",
        },
      ],
    },
    {
      sectionKey: "softSkills",
      title: "Soft Skills",
      multiple: true,
      fields: [
        {
          label: "Skill",
          type: "text",
          placeholder: "e.g., Empathy, Teamwork",
        },
      ],
    },
    {
      sectionKey: "languages",
      title: "Languages Known",
      multiple: true,
      fields: [
        { label: "Language", type: "text", placeholder: "English (Fluent)" },
      ],
    },
    {
      sectionKey: "interests",
      title: "Interests / Hobbies",
      multiple: true,
      fields: [
        { label: "Interest", type: "text", placeholder: "Reading, Traveling" },
      ],
    },
  ],

  Educational: [
    {
      sectionKey: "header",
      display: "none",
      fields: [
        { label: "Full Name", type: "text" },
        { label: "Professional Title", type: "text" },
        { label: "Phone Number", type: "text" },
        { label: "Email Address", type: "text" },
        { label: "LinkedIn Profile", type: "text" },
        { label: "Location (City, Country)", type: "text" },
        { label: "Profile Photo", type: "file" },
      ],
    },
    {
      sectionKey: "summary",
      title: "Professional Summary / About Yourself",
      fields: [
        {
          label: "Summary",
          type: "textarea",
          placeholder:
            "Who you are\nYour academic background or experience\nWhat you’re looking for\nOne strength/achievement",
        },
      ],
    },
    {
      sectionKey: "education",
      title: "Education",
      multiple: true,
      fields: [
        {
          label: "Degree / Course Name",
          type: "text",
          placeholder: "B.Ed, M.A. in English, etc.",
        },
        {
          label: "Institution Name",
          type: "text",
          placeholder: "e.g., Delhi University",
        },
        { label: "Duration", type: "text", placeholder: "e.g., 2020 – 2023" },
        {
          label: "CGPA / Percentage",
          type: "text",
          placeholder: "e.g., 8.2 CGPA or 82%",
        },
      ],
    },
    {
      sectionKey: "schooling",
      title: "Schooling (10th & 12th)",
      fields: [
        {
          label: "10th School Name",
          type: "text",
          placeholder: "e.g., St. Xavier's High School",
        },
        { label: "10th Percentage", type: "text", placeholder: "e.g., 85%" },
        {
          label: "12th School Name",
          type: "text",
          placeholder: "e.g., Little Flower School",
        },
        { label: "12th Percentage", type: "text", placeholder: "e.g., 88%" },
      ],
    },
    {
      sectionKey: "internships",
      title: "Internships / Teaching Practice",
      multiple: true,
      fields: [
        { label: "Role", type: "text", placeholder: "e.g., Student Teacher" },
        {
          label: "School / Institution",
          type: "text",
          placeholder: "e.g., Little Scholars School",
        },
        {
          label: "Duration",
          type: "text",
          placeholder: "e.g., Jan 2024 – Apr 2024",
        },
        {
          label: "Key Responsibilities",
          type: "textarea",
          placeholder:
            "Delivered lessons in EVS and English; assisted in assessments, etc.",
        },
      ],
    },
    {
      sectionKey: "projects",
      title: "Projects / Teaching Portfolios",
      multiple: true,
      fields: [
        {
          label: "Project Title",
          type: "text",
          placeholder: "e.g., Innovative Teaching Methods for Grade 4 Science",
        },
        {
          label: "Description",
          type: "textarea",
          placeholder:
            "Developed lesson plans using storytelling and visuals; conducted real-life experiments; led student discussions.",
        },
      ],
    },
    {
      sectionKey: "certifications",
      title: "Certifications",
      multiple: true,
      fields: [
        {
          label: "Certification Title",
          type: "text",
          placeholder: "e.g., Digital Teaching Tools – CBSE",
        },
        { label: "Year", type: "text", placeholder: "e.g., 2024" },
      ],
    },
    {
      sectionKey: "achievements",
      title: "Achievements",
      multiple: true,
      fields: [
        {
          label: "Achievement Title",
          type: "text",
          placeholder: "e.g., Best Student Teacher Award",
        },
        {
          label: "Description",
          type: "textarea",
          placeholder:
            "Recognized for creative teaching methods during internship; awarded by principal.",
        },
        { label: "Year", type: "text", placeholder: "e.g., 2024" },
      ],
    },
    {
      sectionKey: "activities",
      title: "Extracurricular Activities",
      multiple: true,
      fields: [
        {
          label: "Activity Title",
          type: "text",
          placeholder: "e.g., Volunteer Teacher at NGO",
        },
        {
          label: "Description",
          type: "textarea",
          placeholder: "Taught literacy and math to children weekly.",
        },
        { label: "Year", type: "text", placeholder: "e.g., 2023" },
      ],
    },
    {
      sectionKey: "teachingSkills",
      title: "Teaching Skills",
      fields: [
        {
          label: "Core Teaching Skills",
          type: "textarea",
          placeholder:
            "Lesson Planning, Classroom Management, Child Psychology, etc.",
        },
        {
          label: "Digital Tools",
          type: "textarea",
          placeholder: "Google Classroom, Zoom, Canva for Education, etc.",
        },
        {
          label: "Soft Skills",
          type: "textarea",
          placeholder: "Patience, Communication, Leadership, etc.",
        },
      ],
    },
    {
      sectionKey: "languages",
      title: "Languages Known",
      multiple: true,
      fields: [
        {
          label: "Language",
          type: "text",
          placeholder: "English (Fluent), Hindi (Native), etc.",
        },
      ],
    },
    {
      sectionKey: "interests",
      title: "Interests / Hobbies",
      multiple: true,
      fields: [
        {
          label: "Interest",
          type: "text",
          placeholder: "Reading, Blogging, Traveling, Gaming...",
        },
      ],
    },
  ],
};
export default ResumeFieldsConfig;
