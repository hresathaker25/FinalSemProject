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
          placeholder:
            "Programming, Frameworks/Tools, Software Proficiency...",
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
]
};
export default ResumeFieldsConfig;
