import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Eye,
  Download,
  Sparkles,
  Save,
  Plus,
  Trash2,
  FileText,
} from "lucide-react";
import ModernBlueTemplate from "../components/templates/ModernBlueTemplate";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import YouthStartupTemplate from "../components/templates/YouthStartupTemplate";

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

const ResumeBuilder = () => {
  const [selectedCareer, setSelectedCareer] = useState("Others");
  const [resumeData, setResumeData] = useState({});
  const [showPreview, setShowPreview] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Initialize resume data based on selected career
  useEffect(() => {
    const config = ResumeFieldsConfig[selectedCareer];
    const initialData = {};

    config.forEach((section) => {
      if (section.multiple) {
        initialData[section.sectionKey] = [{}];
      } else {
        const sectionData = {};
        section.fields.forEach((field) => {
          sectionData[field.label] = "";
        });
        initialData[section.sectionKey] = sectionData;
      }
    });

    setResumeData(initialData);
  }, [selectedCareer]);

  const handleDownload = async () => {
    const input = document.getElementById("resume-preview");
    if (!input) return;

    const canvas = await html2canvas(input, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("resume.pdf");
  };

  const handleFieldChange = (
    sectionKey,
    fieldLabel,
    value,
    itemIndex = null
  ) => {
    setResumeData((prev) => {
      const newData = { ...prev };

      if (itemIndex !== null) {
        // Handle multiple items
        if (!newData[sectionKey]) newData[sectionKey] = [];
        if (!newData[sectionKey][itemIndex])
          newData[sectionKey][itemIndex] = {};
        newData[sectionKey][itemIndex][fieldLabel] = value;
      } else {
        // Handle single item
        if (!newData[sectionKey]) newData[sectionKey] = {};
        newData[sectionKey][fieldLabel] = value;
      }

      return newData;
    });
  };

  const addMultipleItem = (sectionKey) => {
    setResumeData((prev) => ({
      ...prev,
      [sectionKey]: [...(prev[sectionKey] || []), {}],
    }));
  };

  const removeMultipleItem = (sectionKey, index) => {
    setResumeData((prev) => ({
      ...prev,
      [sectionKey]: prev[sectionKey].filter((_, i) => i !== index),
    }));
  };

  const renderField = (field, sectionKey, itemIndex = null) => {
    const fieldId = `${sectionKey}-${field.label}${
      itemIndex !== null ? `-${itemIndex}` : ""
    }`;
    const value =
      itemIndex !== null
        ? resumeData[sectionKey]?.[itemIndex]?.[field.label] || ""
        : resumeData[sectionKey]?.[field.label] || "";

    const commonClasses =
      "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all";

    if (field.type === "textarea") {
      return (
        <textarea
          key={fieldId}
          id={fieldId}
          placeholder={field.placeholder}
          value={value}
          onChange={(e) =>
            handleFieldChange(
              sectionKey,
              field.label,
              e.target.value,
              itemIndex
            )
          }
          className={`${commonClasses} min-h-[80px] resize-y`}
          rows={3}
        />
      );
    }

    if (field.type === "file") {
      return (
        <input
          key={fieldId}
          id={fieldId}
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              const reader = new FileReader();
              reader.onload = (e) => {
                handleFieldChange(
                  sectionKey,
                  field.label,
                  e.target?.result,
                  itemIndex
                );
              };
              reader.readAsDataURL(file);
            }
          }}
          className={`${commonClasses} file:mr-4 file:py-1 file:px-3 file:rounded file:border-0 file:text-sm file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100`}
        />
      );
    }

    return (
      <input
        key={fieldId}
        id={fieldId}
        type="text"
        placeholder={field.placeholder}
        value={value}
        onChange={(e) =>
          handleFieldChange(sectionKey, field.label, e.target.value, itemIndex)
        }
        className={commonClasses}
      />
    );
  };

  const renderFormSection = (section) => {
    const isMultiple = section.multiple;
    const items = isMultiple ? resumeData[section.sectionKey] || [{}] : [null];

    return (
      <div
        key={section.sectionKey}
        className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6"
      >
        {section.title && (
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">
              {section.title}
            </h3>
            {isMultiple && (
              <button
                onClick={() => addMultipleItem(section.sectionKey)}
                className="flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <Plus className="w-4 h-4" />
                Add
              </button>
            )}
          </div>
        )}

        {items.map((item, index) => (
          <div
            key={index}
            className={`${isMultiple && index > 0 ? "border-t pt-4 mt-4" : ""}`}
          >
            {isMultiple && items.length > 1 && (
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-medium text-gray-600">
                  {section.title} {index + 1}
                </span>
                <button
                  onClick={() => removeMultipleItem(section.sectionKey, index)}
                  className="p-1 text-red-500 hover:bg-red-50 rounded"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {section.fields.map((field) => (
                <div
                  key={field.label}
                  className={field.type === "textarea" ? "md:col-span-2" : ""}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {field.label}
                  </label>
                  {renderField(
                    field,
                    section.sectionKey,
                    isMultiple ? index : null
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderPreview = () => {
    const headerData = resumeData.header || {};

    return (
      <div className="bg-white shadow-lg rounded-lg p-8 min-h-[800px] max-w-[210mm] mx-auto">
        {/* Header Section */}
        <div className="text-center border-b-2 border-gray-200 pb-6 mb-6">
          {headerData["Profile Photo"] && (
            <img
              src={headerData["Profile Photo"]}
              alt="Profile"
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-gray-200"
            />
          )}
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {headerData["Full Name"] || "Your Name"}
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            {headerData["Professional Title"] || "Professional Title"}
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            {headerData["Phone Number"] && (
              <span>📞 {headerData["Phone Number"]}</span>
            )}
            {headerData["Email Address"] && (
              <span>✉️ {headerData["Email Address"]}</span>
            )}
            {headerData["Location (City, Country)"] && (
              <span>📍 {headerData["Location (City, Country)"]}</span>
            )}
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-2 text-sm text-blue-600">
            {headerData["LinkedIn Profile"] && (
               <span> {headerData["LinkedIn Profile"]}</span>
            )}
            {headerData["Github"] && (
              <span>📍 {headerData["Github"]}</span>
            )}
          </div>
        </div>

        {/* Dynamic Sections */}
        {ResumeFieldsConfig[selectedCareer].map((section) => {
          if (
            section.sectionKey === "header" ||
            !resumeData[section.sectionKey]
          )
            return null;

          const sectionData = resumeData[section.sectionKey];
          const hasData = section.multiple
            ? Array.isArray(sectionData) &&
              sectionData.some((item) => Object.values(item).some((val) => val))
            : Object.values(sectionData).some((val) => val);

          if (!hasData) return null;

          return (
            <div key={section.sectionKey} className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-3 pb-1 border-b border-gray-300">
                {section.title}
              </h2>

              {section.multiple ? (
                <div className="space-y-4">
                  {sectionData.map((item, index) => {
                    const hasItemData = Object.values(item).some((val) => val);
                    if (!hasItemData) return null;

                    return (
                      <div key={index} className="pl-4">
                        {Object.entries(item).map(([key, value]) => {
                          if (!value) return null;
                          return (
                            <div key={key} className="mb-2">
                              {key.toLowerCase().includes("description") ||
                              key.toLowerCase().includes("responsibilities") ||
                              key.toLowerCase().includes("contribution") ? (
                                <div className="text-gray-700 whitespace-pre-line leading-relaxed">
                                  {value}
                                </div>
                              ) : (
                                <div>
                                  <span className="font-medium text-gray-800">
                                    {key}:
                                  </span>
                                  <span className="ml-2 text-gray-700">
                                    {value}
                                  </span>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="pl-4 space-y-2">
                  {Object.entries(sectionData).map(([key, value]) => {
                    if (!value) return null;
                    return (
                      <div
                        key={key}
                        className="text-gray-700 whitespace-pre-line leading-relaxed"
                      >
                        {value}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  const careerOptions = Object.keys(ResumeFieldsConfig);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FileText className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-800">
                Resume Builder
              </h1>
            </div>

            <div className="flex items-center gap-4">
              {/* Career Selection */}
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 transition-all"
                >
                  <span className="font-medium">
                    {selectedCareer.replace(/([A-Z])/g, " $1").trim()}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
                    <div className="py-1">
                      {careerOptions.map((career) => (
                        <button
                          key={career}
                          onClick={() => {
                            setSelectedCareer(career);
                            setIsDropdownOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors ${
                            selectedCareer === career
                              ? "bg-blue-50 text-blue-600"
                              : "text-gray-700"
                          }`}
                        >
                          {career.replace(/([A-Z])/g, " $1").trim()}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowPreview(!showPreview)}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <Eye className="w-4 h-4" />
                  {showPreview ? "Hide Preview" : "Show Preview"}
                </button>

                <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  <Sparkles className="w-4 h-4" />
                  AI Improve
                </button>

                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <Save className="w-4 h-4" />
                  Save
                </button>

                <button
                  onClick={handleDownload}
                  className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-4">
        <div
          className={`grid gap-6 ${
            showPreview ? "lg:grid-cols-2" : "lg:grid-cols-1"
          }`}
        >
          {/* Form Section */}
          <div className="space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h2 className="font-semibold text-blue-800 mb-2">
                {selectedCareer.replace(/([A-Z])/g, " $1").trim()} Resume
              </h2>
              <p className="text-blue-600 text-sm">
                Fill out the sections below to create your professional resume.
                All fields are customized for your career.
              </p>
            </div>

            {ResumeFieldsConfig[selectedCareer].map(renderFormSection)}
          </div>

          {/* Preview Section */}
          {showPreview && (
            <div className="lg:sticky lg:top-24 lg:h-fit">
              <div className="bg-gray-100 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <Eye className="w-5 h-5" />
                  Live Preview
                </h3>
                <div
                  id="resume-preview"
                  className="bg-white rounded-lg p-2 shadow-sm max-h-[800px] overflow-y-auto"
                >
                  <ModernBlueTemplate
                    resumeData={resumeData}
                    selectedCareer={selectedCareer}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
