import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import {
  ChevronDown,
  Eye,
  Download,
  Sparkles,
  Save,
  Plus,
  Trash2,
  FileText,
  Palette,
} from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { resumeService } from "../services/resumeService";
import ModernBlueTemplate from "../components/templates/ModernBlueTemplate";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import YouthStartupTemplate from "../components/templates/YouthStartupTemplate";
import VogueScriptTemplate from "../components/templates/VogueScriptTemplate";
import UrbanSlateTemplate from "../components/templates/UrbanSlateTemplate";
import UrbanMonochromeTemplate from "../components/templates/UrbanMonochromeTemplate";
import TokyoGridTemplate from "../components/templates/TokyoGridTemplate";
import TheVisionaryTemplate from "../components/templates/TheVisionaryTemplate";
import TheAnalystTemplate from "../components/templates/TheAnalystTemplate";
import BoldNoirTemplate from "../components/templates/BoldNoirTemplate";
import BrushstrokeBoldTemplate from "../components/templates/BrushstrokeBoldTemplate";
import TechGridTemplate from "../components/templates/TechGridTemplate";
import StartupFreshTemplate from "../components/templates/StartupFreshTemplate";
import SpectrumVibeTemplate from "../components/templates/SpectrumVibeTemplate";
import AuroraHighlightTemplate from "../components/templates/AuroraHighlightTemplate";
import SkylineBlueTemplate from "../components/templates/SkylineBlueTemplate";
import SimpleSleekTemplate from "../components/templates/SimpleSleekTemplate";
import SerifQueenTemplate from "../components/templates/SerifQueenTemplate";
import ScandinavianTouchTemplate from "../components/templates/ScandinavianTouchTemplate";
import RoundedClassicTemplate from "../components/templates/RoundedClassicTemplate";
import RetroResumeTemplate from "../components/templates/RetroResumeTemplate";
import ResumeRoyaleTemplate from "../components/templates/ResumeRoyaleTemplate";
import ProfessionalMintTemplate from "../components/templates/ProfessionalMintTemplate";
import PrestigeGrayTemplate from "../components/templates/PrestigeGrayTemplate";
import PearlWhiteTemplate from "../components/templates/PearlWhiteTemplate";
import ParisianClassTemplate from "../components/templates/ParisianClassTemplate";
import OxfordCharmTemplate from "../components/templates/OxfordCharmTemplate";
import MonarchSignatureTemplate from "../components/templates/MonarchSignatureTemplate";
import MonacoBoldTemplate from "../components/templates/MonacoBoldTemplate";
import MinimalGraphiteTemplate from "../components/templates/MinimalGraphiteTemplate";
import MinimalEssentialsTemplate from "../components/templates/MinimalEssentialsTemplate";
import MidnightFocusTemplate from "../components/templates/MidnightFocusTemplate";
import IvorySerifTemplate from "../components/templates/IvorySerifTemplate";
import IconicCompactTemplate from "../components/templates/IconicCompactTemplate";
import IndigoShadowTemplate from "../components/templates/IndigoShadowTemplate";
import GridProTemplate from "../components/templates/GridProTemplate";
import FuturisticGlowTemplate from "../components/templates/FuturisticGlowTemplate";
import ElegantRoseTemplate from "../components/templates/ElegantRoseTemplate";
import ElegantDivideTemplate from "../components/templates/ElegantDivideTemplate";
import DigitalMinimalistTemplate from "../components/templates/DigitalMinimalistTemplate";
import DigitalCurveTemplate from "../components/templates/DigitalCurveTemplate";
import CreativeMuseTemplate from "../components/templates/CreativeMuseTemplate";
import CorporateSteelTemplate from "../components/templates/CorporateSteelTemplate";
import CleanVectorTemplate from "../components/templates/CleanVectorTemplate";
import CleanTimelineTemplate from "../components/templates/CleanTimelineTemplate";
import ClassicIvoryTemplate from "../components/templates/ClassicIvoryTemplate";
import DesignerGlowTemplate from "../components/templates/DesignerGlowTemplate";
import CrimsonPrestigeTemplate from "../components/templates/CrimsonPrestigeTemplate";
import CrimsonLineTemplate from "../components/templates/CrimsonLineTemplate";
import EmeraldCleanTemplate from "../components/templates/EmeraldCleanTemplate";
import ExecutiveLuxeTemplate from "../components/templates/ExecutiveLuxeTemplate";
import FormalBrillianceTemplate from "../components/templates/FormalBrillianceTemplate";
import FreelancePopTemplate from "../components/templates/FreelancePopTemplate";
import "../styles/TemplateStyles.css";
// Add this import near your other imports
import AIImprovementModal from '../components/AIImprovementModal';

export const ResumeFieldsConfig = {
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
            "Who you are\nYour academic background or experience\nWhat you're looking for\nOne strength/achievement",
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
            "Who you are\nYour academic background or experience\nWhat you're looking for\nOne strength/achievement",
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
        { label: "Duration (Start – End or 'Present')", type: "text" },
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
            "Who you are\nYour academic background or experience\nWhat you're looking for\nOne strength/achievement",
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
            "Who you are\nYour academic background or experience\nWhat you're looking for\nOne strength/achievement",
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
            "Who you are\nYour academic background or experience\nWhat you're looking for\nOne strength/achievement",
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
        { label: "Duration (Start – End or 'Present')", type: "text" },
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
            "Who you are\nYour finance background or specialization\nKey strengths/achievements\nWhat you're looking for",
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
        { label: "Duration (Start – End or 'Present')", type: "text" },
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
        { label: "Duration (Start – End or 'Present')", type: "text" },
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
            "Who you are\nYour academic background or experience\nWhat you're looking for\nOne strength/achievement",
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
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [selectedCareer, setSelectedCareer] = useState("Others");
  const [resumeData, setResumeData] = useState({});
  const [showPreview, setShowPreview] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(() => {
    // Get template from URL params, fallback to localStorage, then default to modernblue
    const urlTemplate = searchParams.get('template');
    const storedTemplate = localStorage.getItem('selectedTemplate');
    return urlTemplate || storedTemplate || "modernblue";
  });
  const [showAIModal, setShowAIModal] = useState(false);
  const [isImproving, setIsImproving] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [currentResumeId, setCurrentResumeId] = useState(null);

  // Initialize resume data based on selected career
  useEffect(() => {
    const config = ResumeFieldsConfig[selectedCareer];
    if (!config || !Array.isArray(config)) {
      setResumeData({});
      return;
    }

    const initialData = {};

    config.forEach((section) => {
      if (section && section.sectionKey && section.fields) {
      if (section.multiple) {
        initialData[section.sectionKey] = [{}];
      } else {
        const sectionData = {};
        section.fields.forEach((field) => {
            if (field && field.label) {
          sectionData[field.label] = "";
            }
        });
        initialData[section.sectionKey] = sectionData;
        }
      }
    });

    setResumeData(initialData);
  }, [selectedCareer]);

  // Update template when URL params change and save to localStorage
  useEffect(() => {
    const urlTemplate = searchParams.get('template');
    if (urlTemplate && urlTemplate !== selectedTemplate) {
      setSelectedTemplate(urlTemplate);
      localStorage.setItem('selectedTemplate', urlTemplate);
    }
  }, [searchParams, selectedTemplate]);


  // Load existing resume if ID is provided
  useEffect(() => {
    const resumeId = searchParams.get('id');
    if (resumeId && isAuthenticated) {
      loadResume(resumeId);
    }
  }, [searchParams, isAuthenticated]);

  const loadResume = async (id) => {
    try {
      const resume = await resumeService.getResume(id);
      setResumeData(resume.resumeData);
      setSelectedCareer(resume.career);
      setSelectedTemplate(resume.template);
      setCurrentResumeId(id);
    } catch (error) {
      console.error('Error loading resume:', error);
      alert('Failed to load resume');
    }
  };

  const handleSave = async () => {
    if (!isAuthenticated) {
      alert('Please login to save your resume');
      navigate('/login');
      return;
    }

    if (!resumeData || Object.keys(resumeData).length === 0) {
      alert('Please fill in some resume information before saving');
      return;
    }

    setIsSaving(true);
    try {
      const resumePayload = {
        title: resumeData.header?.['Full Name'] ?
          `${resumeData.header['Full Name']}'s Resume` :
          'Untitled Resume',
        career: selectedCareer,
        template: selectedTemplate,
        resumeData
      };

      if (currentResumeId) {
        // Update existing resume
        await resumeService.updateResume(currentResumeId, resumePayload);
        alert('Resume updated successfully!');
      } else {
        // Create new resume
        const result = await resumeService.createResume(resumePayload);
        setCurrentResumeId(result.resume.id);
        alert('Resume saved successfully!');
      }
    } catch (error) {
      console.error('Error saving resume:', error);
      alert('Failed to save resume. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleDownload = async () => {
    const input = document.getElementById("resume-preview");
    if (!input) {
      alert("Resume preview not found. Please try again.");
      return;
    }

    try {
      setIsDownloading(true);

      // Debug: Check if resume has content
      console.log("Resume data:", resumeData);
      console.log("Element found:", input);
      console.log("Element innerHTML length:", input.innerHTML.length);
      console.log("Element offsetHeight:", input.offsetHeight);
      console.log("Element offsetWidth:", input.offsetWidth);

      if (!resumeData || Object.keys(resumeData).length === 0) {
        alert("Please fill in some resume information before downloading.");
        return;
      }

      if (input.innerHTML.length < 100) {
        alert("Template appears to be empty. Please check if your template is rendering correctly.");
        return;
      }

      // Store original styles
      const originalStyles = {
        transform: input.style.transform,
        width: input.style.width,
        height: input.style.height,
        position: input.style.position,
        overflow: input.style.overflow,
        maxWidth: input.style.maxWidth,
        boxShadow: input.style.boxShadow
      };

      // Prepare element for high-quality capture
      const A4_WIDTH_PX = 794;
      const SCALE = 2; // Higher scale for better quality

      // Add more comprehensive original styles
      originalStyles.fontSize = input.style.fontSize;
      originalStyles.lineHeight = input.style.lineHeight;
      originalStyles.letterSpacing = input.style.letterSpacing;
      originalStyles.backgroundColor = input.style.backgroundColor;
      originalStyles.color = input.style.color;
      originalStyles.border = input.style.border;
      originalStyles.borderRadius = input.style.borderRadius;

      // Set styles for PDF capture
      input.style.transform = 'none';
      input.style.width = `${A4_WIDTH_PX}px`;
      input.style.height = 'auto';
      input.style.position = 'static';
      input.style.overflow = 'visible';
      input.style.maxWidth = 'none';
      input.style.boxShadow = 'none';
      input.style.margin = '0';
      input.style.padding = '0';

      // Force reflow and wait for rendering
      void input.offsetHeight;
      await new Promise(resolve => setTimeout(resolve, 1000));

      console.log("After style changes - Element height:", input.offsetHeight);

      // Capture with high-quality settings to match live preview
      const canvas = await html2canvas(input, {
        scale: SCALE,
        width: A4_WIDTH_PX,
        height: input.scrollHeight,
        useCORS: true,
        allowTaint: false,
        backgroundColor: '#ffffff',
        logging: true,
        removeContainer: false,
        foreignObjectRendering: false, // Disable for better compatibility
        imageTimeout: 0,
        onclone: (clonedDoc) => {
          // Ensure styles are preserved in cloned document
          const clonedElement = clonedDoc.getElementById('resume-preview');
          if (clonedElement) {
            clonedElement.style.width = `${A4_WIDTH_PX}px`;
            clonedElement.style.height = 'auto';
            clonedElement.style.transform = 'none';
            clonedElement.style.position = 'static';
            clonedElement.style.overflow = 'visible';
            clonedElement.style.maxWidth = 'none';
            clonedElement.style.boxShadow = 'none';
            clonedElement.style.margin = '0';
            clonedElement.style.padding = '0';
          }
        }
      });

      console.log("Canvas created:", canvas.width, "x", canvas.height);

      // Restore styles
      Object.keys(originalStyles).forEach(key => {
        if (originalStyles[key]) {
          input.style[key] = originalStyles[key];
        } else {
          input.style.removeProperty(key);
        }
      });

      // Check if canvas has actual content
      const ctx = canvas.getContext('2d');
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imageData.data;
      let hasContent = false;

      // Check if canvas is not just white
      for (let i = 0; i < pixels.length; i += 4) {
        const r = pixels[i];
        const g = pixels[i + 1];
        const b = pixels[i + 2];
        if (r !== 255 || g !== 255 || b !== 255) {
          hasContent = true;
          break;
        }
      }

      console.log("Canvas has content:", hasContent);

      if (!hasContent) {
        alert("Unable to capture resume content. Please ensure your resume has content and try again.");
        return;
      }

      // Create PDF with high quality
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
        compress: true
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      // Calculate dimensions to maintain aspect ratio
      const canvasAspectRatio = canvas.height / canvas.width;
      const pdfAspectRatio = pdfHeight / pdfWidth;

      let imgWidth, imgHeight, xOffset, yOffset;

      if (canvasAspectRatio > pdfAspectRatio) {
        // Content is taller - fit to height
        imgHeight = pdfHeight;
        imgWidth = pdfHeight / canvasAspectRatio;
        xOffset = (pdfWidth - imgWidth) / 2;
        yOffset = 0;
      } else {
        // Content is wider - fit to width
        imgWidth = pdfWidth;
        imgHeight = pdfWidth * canvasAspectRatio;
        xOffset = 0;
        yOffset = (pdfHeight - imgHeight) / 2;
      }

      // Add image to PDF with high quality
      pdf.addImage(
        canvas.toDataURL('image/jpeg', 0.95),
        'JPEG',
        xOffset,
        yOffset,
        imgWidth,
        imgHeight
      );

      // Generate proper filename
      const fileName = resumeData.header?.['Full Name']
        ? `${resumeData.header['Full Name'].replace(/[^a-zA-Z0-9\s]/g, '_')}_Resume.pdf`
        : `Resume_${new Date().toISOString().slice(0, 10)}.pdf`;
      pdf.save(fileName);

      console.log('PDF generated successfully with filename:', fileName);

    } catch (error) {
      console.error("Detailed error:", error);
      alert(`Error generating PDF: ${error.message}`);
    } finally {
      setIsDownloading(false);
    }
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
      [sectionKey]: Array.isArray(prev[sectionKey]) ? [...prev[sectionKey], {}] : [{}],
    }));
  };

  const removeMultipleItem = (sectionKey, index) => {
    setResumeData((prev) => ({
      ...prev,
      [sectionKey]: Array.isArray(prev[sectionKey]) ? prev[sectionKey].filter((_, i) => i !== index) : [],
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
    
    // Safety check: ensure section data exists
    if (!section || !section.fields) {
      return null;
    }

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

        {isMultiple ? (
          // Handle multiple items
          (Array.isArray(resumeData[section.sectionKey]) ? resumeData[section.sectionKey] : [{}]).map((item, index) => (
          <div
            key={index}
              className={`${index > 0 ? "border-t pt-4 mt-4" : ""}`}
          >
              {Array.isArray(resumeData[section.sectionKey]) && resumeData[section.sectionKey].length > 1 && (
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
                      index
                  )}
                </div>
              ))}
            </div>
            </div>
          ))
        ) : (
          // Handle single item
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
                  null
                )}
          </div>
        ))}
          </div>
        )}
      </div>
    );
  };



  const renderSelectedTemplate = () => {
    switch (selectedTemplate) {
      case "youthstartup":
    return (
          <YouthStartupTemplate
            resumeData={resumeData}
            selectedCareer={selectedCareer}
          />
        );
      case "voguescript":
          return (
          <VogueScriptTemplate
            resumeData={resumeData}
            selectedCareer={selectedCareer}
          />
        );
      case "urbanslate":
                    return (
          <UrbanSlateTemplate
            resumeData={resumeData}
            selectedCareer={selectedCareer}
          />
        );
      case "urbanmonochrome":
                          return (
          <UrbanMonochromeTemplate
            resumeData={resumeData}
            selectedCareer={selectedCareer}
          />
        );
      case "tokyogrid":
        return (
          <TokyoGridTemplate
            resumeData={resumeData}
            selectedCareer={selectedCareer}
          />
        );
      case "thevisionary":
                    return (
          <TheVisionaryTemplate
            resumeData={resumeData}
            selectedCareer={selectedCareer}
          />
        );
      case "theanalyst":
        return (
          <TheAnalystTemplate
            resumeData={resumeData}
            selectedCareer={selectedCareer}
          />
        );
      case "boldnoir":
        return (
          <BoldNoirTemplate
            resumeData={resumeData}
            selectedCareer={selectedCareer}
          />
        );
      case "brushstrokebold":
        return (
          <BrushstrokeBoldTemplate
            resumeData={resumeData}
            selectedCareer={selectedCareer}
          />
        );
      case "techgrid":
        return (
          <TechGridTemplate
            resumeData={resumeData}
            selectedCareer={selectedCareer}
          />
        );
      case "startupfresh":
        return (
          <StartupFreshTemplate
            resumeData={resumeData}
            selectedCareer={selectedCareer}
          />
        );
      case "spectrumvibe":
        return (
          <SpectrumVibeTemplate
            resumeData={resumeData}
            selectedCareer={selectedCareer}
          />
        );
      case "aurorahighlight":
        return (
          <AuroraHighlightTemplate
            resumeData={resumeData}
            selectedCareer={selectedCareer}
          />
        );
      case "skylineblue":
        return (
          <SkylineBlueTemplate
            resumeData={resumeData}
            selectedCareer={selectedCareer}
          />
        );
      case "simplesleek":
        return (
          <SimpleSleekTemplate
            resumeData={resumeData}
            selectedCareer={selectedCareer}
          />
        );
      case "serifqueen":
        return (
          <SerifQueenTemplate
            resumeData={resumeData}
            selectedCareer={selectedCareer}
          />
        );
      case "scandinavian":
        return (
          <ScandinavianTouchTemplate
            resumeData={resumeData}
            selectedCareer={selectedCareer}
          />
        );
      case "roundedclassic":
        return (
          <RoundedClassicTemplate
            resumeData={resumeData}
            selectedCareer={selectedCareer}
          />
        );
      case "retroresume":
        return (
          <RetroResumeTemplate
            resumeData={resumeData}
            selectedCareer={selectedCareer}
          />
        );
      case "resumeroyale":
        return (
          <ResumeRoyaleTemplate
            resumeData={resumeData}
            selectedCareer={selectedCareer}
          />
        );
      case "professionalmint":
        return (
          <ProfessionalMintTemplate
            resumeData={resumeData}
            selectedCareer={selectedCareer}
          />
        );
      case "prestigegray":
        return (
          <PrestigeGrayTemplate
            resumeData={resumeData}
            selectedCareer={selectedCareer}
          />
        );
      case "pearlwhite":
        return (
          <PearlWhiteTemplate
            resumeData={resumeData}
            selectedCareer={selectedCareer}
          />
        );
      case "parisianclass":
        return (
          <ParisianClassTemplate
            resumeData={resumeData}
            selectedCareer={selectedCareer}
          />
        );
      case "oxfordcharm":
        return (
          <OxfordCharmTemplate
            resumeData={resumeData}
            selectedCareer={selectedCareer}
          />
        );
      case "monarchsignature":
        return (
          <MonarchSignatureTemplate
            resumeData={resumeData}
            selectedCareer={selectedCareer}
          />
        );
      case "monacobold":
        return (
          <MonacoBoldTemplate
            resumeData={resumeData}
            selectedCareer={selectedCareer}
          />
        );
      case "minimalgraphite":
        return (
          <MinimalGraphiteTemplate
            resumeData={resumeData}
            selectedCareer={selectedCareer}
          />
        );
      case "minimalessentials":
        return (
          <MinimalEssentialsTemplate
            resumeData={resumeData}
            selectedCareer={selectedCareer}
          />
        );
      case "midnightfocus":
        return (
          <MidnightFocusTemplate
            resumeData={resumeData}
            selectedCareer={selectedCareer}
          />
        );
      case "ivoryserif":
        return (
          <IvorySerifTemplate
            resumeData={resumeData}
            selectedCareer={selectedCareer}
          />
        );
      case "iconiccompact":
        return (
          <IconicCompactTemplate
            resumeData={resumeData}
            selectedCareer={selectedCareer}
          />
        );
      case "indigoshadow":
        return (
          <IndigoShadowTemplate
            resumeData={resumeData}
            selectedCareer={selectedCareer}
          />
        );
      case "gridpro":
        return (
          <GridProTemplate
            resumeData={resumeData}
            selectedCareer={selectedCareer}
          />
        );
      case "futuristicglow":
        return (
          <FuturisticGlowTemplate
            resumeData={resumeData}
            selectedCareer={selectedCareer}
          />
        );
      case "elegantrose":
        return (
          <ElegantRoseTemplate
            resumeData={resumeData}
            selectedCareer={selectedCareer}
          />
        );
      case "elegantdivide":
        return (
          <ElegantDivideTemplate
            resumeData={resumeData}
            selectedCareer={selectedCareer}
          />
        );
      case "digitalminimalist":
        return (
          <DigitalMinimalistTemplate
            resumeData={resumeData}
            selectedCareer={selectedCareer}
          />
        );
      case "digitalcurve":
        return (
          <DigitalCurveTemplate
            resumeData={resumeData}
            selectedCareer={selectedCareer}
          />
        );
      case "designerglow":
        return (
          <DesignerGlowTemplate
            resumeData={resumeData}
            selectedCareer={selectedCareer}
          />
        );
      case "crimsonprestige":
        return (
          <CrimsonPrestigeTemplate
            resumeData={resumeData}
            selectedCareer={selectedCareer}
          />
        );
      case "crimsonline":
        return (
          <CrimsonLineTemplate
            resumeData={resumeData}
            selectedCareer={selectedCareer}
          />
        );
      case "creativemuse":
        return (
          <CreativeMuseTemplate
            resumeData={resumeData}
            selectedCareer={selectedCareer}
          />
        );
      case "corporatesteel":
        return (
          <CorporateSteelTemplate
            resumeData={resumeData}
            selectedCareer={selectedCareer}
          />
        );
      case "cleanvector":
        return (
          <CleanVectorTemplate
            resumeData={resumeData}
            selectedCareer={selectedCareer}
          />
        );
      case "cleantimeline":
        return (
          <CleanTimelineTemplate
            resumeData={resumeData}
            selectedCareer={selectedCareer}
          />
        );
      case "classicivory":
        return (
          <ClassicIvoryTemplate
            resumeData={resumeData}
            selectedCareer={selectedCareer}
          />
        );
      case "emeraldclean":
        return (
          <EmeraldCleanTemplate
            resumeData={resumeData}
            selectedCareer={selectedCareer}
          />
        );
      case "executiveluxe":
        return (
          <ExecutiveLuxeTemplate
            resumeData={resumeData}
            selectedCareer={selectedCareer}
          />
        );
      case "formalbrilliance":
        return (
          <FormalBrillianceTemplate
            resumeData={resumeData}
            selectedCareer={selectedCareer}
          />
        );
      case "freelancepop":
        return (
          <FreelancePopTemplate
            resumeData={resumeData}
            selectedCareer={selectedCareer}
          />
        );
      case "modernblue":
      default:
        return (
          <ModernBlueTemplate
            resumeData={resumeData}
            selectedCareer={selectedCareer}
          />
        );
    }
  };

  const handleApplyImprovements = (improvements) => {
    setResumeData(prev => {
      const newData = { ...prev };

      improvements.forEach(improvement => {
        const { section, field, itemIndex, improved } = improvement;

        if (itemIndex !== null) {
          // Handle array data (multiple items)
          if (!newData[section]) newData[section] = [];
          if (!newData[section][itemIndex]) newData[section][itemIndex] = {};
          newData[section][itemIndex][field] = improved;
        } else {
          // Handle object data (single items)
          if (!newData[section]) newData[section] = {};
          newData[section][field] = improved;
        }
      });

      return newData;
    });
  };

  const careerOptions = Object.keys(ResumeFieldsConfig);
  const templateOptions = [
    { value: "modernblue", label: "Modern Blue", icon: "🔵" },
    { value: "youthstartup", label: "Youth Startup", icon: "🚀" },
    { value: "voguescript", label: "Vogue Script", icon: "✨" },
    { value: "urbanslate", label: "Urban Slate", icon: "🏙️" },
    { value: "urbanmonochrome", label: "Urban Monochrome", icon: "⚫" },
    { value: "tokyogrid", label: "Tokyo Grid", icon: "🗾" },
    { value: "thevisionary", label: "The Visionary", icon: "🔮" },
    { value: "theanalyst", label: "The Analyst", icon: "📊" },
    { value: "boldnoir", label: "Bold Noir", icon: "⚫" },
    { value: "brushstrokebold", label: "Brushstroke Bold", icon: "🎨" },
    { value: "techgrid", label: "Tech Grid", icon: "💻" },
    { value: "startupfresh", label: "Startup Fresh", icon: "🌱" },
    { value: "spectrumvibe", label: "Spectrum Vibe", icon: "🎨" },
    { value: "aurorahighlight", label: "Aurora Highlight", icon: "🌈" },
    { value: "skylineblue", label: "Skyline Blue", icon: "🌤️" },
    { value: "simplesleek", label: "Simple Sleek", icon: "👔" },
    { value: "serifqueen", label: "Serif Queen", icon: "👑" },
    { value: "scandinavian", label: "Scandinavian", icon: "🇸🇪" },
    { value: "roundedclassic", label: "Rounded Classic", icon: "🔘" },
    { value: "retroresume", label: "Retro Resume", icon: "🎨" },
    { value: "resumeroyale", label: "Resume Royale", icon: "👑" },
    { value: "professionalmint", label: "Professional Mint", icon: "💰" },
    { value: "prestigegray", label: "Prestige Gray", icon: "🖤" },
    { value: "pearlwhite", label: "Pearl White", icon: "🐚" },
    { value: "parisianclass", label: "Parisian Class", icon: "🇫🇷" },
    { value: "oxfordcharm", label: "Oxford Charm", icon: "🇬🇧" },
    { value: "monarchsignature", label: "Monarch Signature", icon: "👑" },
    { value: "monacobold", label: "Monaco Bold", icon: "💼" },
    { value: "minimalgraphite", label: "Minimal Graphite", icon: "⚫" },
    { value: "minimalessentials", label: "Minimal Essentials", icon: "📋" },
    { value: "midnightfocus", label: "Midnight Focus", icon: "🌙" },
    { value: "ivoryserif", label: "Ivory Serif", icon: "🦢" },
    { value: "iconiccompact", label: "Iconic Compact", icon: "📐" },
    { value: "indigoshadow", label: "Indigo Shadow", icon: "🟦" },
    { value: "gridpro", label: "Grid Pro", icon: "🗂️" },
    { value: "futuristicglow", label: "Futuristic Glow", icon: "⚡" },
    { value: "elegantrose", label: "Elegant Rose", icon: "🌹" },
    { value: "elegantdivide", label: "Elegant Divide", icon: "✨" },
    { value: "digitalminimalist", label: "Digital Minimalist", icon: "📱" },
    { value: "digitalcurve", label: "Digital Curve", icon: "🌊" },
    { value: "designerglow", label: "Designer Glow", icon: "✨" },
    { value: "crimsonprestige", label: "Crimson Prestige", icon: "🔴" },
    { value: "crimsonline", label: "Crimson Line", icon: "📏" },
    { value: "creativemuse", label: "Creative Muse", icon: "🎨" },
    { value: "corporatesteel", label: "Corporate Steel", icon: "🏢" },
    { value: "cleanvector", label: "Clean Vector", icon: "🔺" },
    { value: "cleantimeline", label: "Clean Timeline", icon: "📅" },
    { value: "classicivory", label: "Classic Ivory", icon: "📜" },
    { value: "emeraldclean", label: "Emerald Clean", icon: "💚" },
    { value: "executiveluxe", label: "Executive Luxe", icon: "👑" },
    { value: "formalbrilliance", label: "Formal Brilliance", icon: "💼" },
    { value: "freelancepop", label: "Freelance Pop", icon: "🎨" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <style>{`
        .a4-preview-container {
          font-smoothing: antialiased;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .keep-overflow {
          /* Add this class to elements that should keep overflow hidden */
        }

        @media print {
          .a4-preview-container {
            transform: none !important;
            width: auto !important;
            height: auto !important;
          }
        }
      `}</style>

      {/* Resume Builder Header */}
      <div className="bg-white shadow-sm border-b border-gray-200 sticky top-20 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FileText className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-800">
                Resume Builder
              </h1>
            </div>

            <div className="flex items-center gap-4">
              {/* Current Template Display */}
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-2 px-4 py-2 bg-purple-50 border border-purple-200 rounded-lg">
                  <Palette className="w-4 h-4 text-purple-600" />
                  <span className="font-medium text-purple-700">
                    {templateOptions.find(t => t.value === selectedTemplate)?.label || "Modern Blue"}
                  </span>
                </div>
                <span className="text-xs text-gray-500 mt-1">
                  {searchParams.get('template') ? (
                    <span>Template selected from Gallery • <button onClick={() => navigate('/templates')} className="text-blue-600 hover:underline">Change Template</button></span>
                  ) : (
                    <span>Change template from <button onClick={() => navigate('/templates')} className="text-blue-600 hover:underline">Template Gallery</button></span>
                  )}
                </span>
              </div>

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

                <button
                  onClick={() => setShowAIModal(true)}
                  disabled={isImproving}
                  className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-green-400 transition-colors"
                >
                  <Sparkles className="w-4 h-4" />
                  {isImproving ? 'Improving...' : 'AI Improve'}
                </button>

                <button
                  onClick={handleSave}
                  disabled={isSaving}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-400 transition-colors"
                >
                  <Save className="w-4 h-4" />
                  {isSaving ? 'Saving...' : 'Save'}
                </button>

                <button
                  onClick={handleDownload}
                  disabled={isDownloading}
                  data-download="true"
                  className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:bg-purple-400 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  {isDownloading ? 'Generating PDF...' : 'Download'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-4 pt-4">
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

            {ResumeFieldsConfig[selectedCareer] && Array.isArray(ResumeFieldsConfig[selectedCareer]) 
              ? ResumeFieldsConfig[selectedCareer].map(renderFormSection)
              : <div className="text-center text-gray-500 py-8">Loading career configuration...</div>
            }
          </div>

          {/* Preview Section */}
          {showPreview && (
            <div className="lg:sticky lg:top-44 lg:h-fit">
              <div className="bg-gray-100 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <Eye className="w-5 h-5" />
                  Live Preview - {templateOptions.find(t => t.value === selectedTemplate)?.label}
                  </h3>
                <div
                  id="resume-preview"
                  className="a4-preview-container"
                >
                  {renderSelectedTemplate()}
                </div>
                <div className="text-center text-sm text-gray-500 mt-2">
                  A4 Size Preview (Scaled to fit screen)
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* AI Improvement Modal */}
      <AIImprovementModal
        isOpen={showAIModal}
        onClose={() => setShowAIModal(false)}
        resumeData={resumeData}
        onApplyImprovements={handleApplyImprovements}
        setIsImproving={setIsImproving}
      />
    </div>
  );
};

export default ResumeBuilder;