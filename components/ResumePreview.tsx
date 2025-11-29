"use client";

import { ResumeData, ResumeTheme } from "@/lib/types";
import { forwardRef } from "react";

function themeClasses(theme: ResumeTheme) {
  switch (theme) {
    case "professional":
      return "bg-white text-slate-900 border-slate-200";
    case "modern":
      return "bg-slate-900 text-slate-50 border-slate-800";
    case "creative":
      return "bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-slate-50 border-slate-700";
    default:
      return "";
  }
}

interface Props {
  resume: ResumeData;
}

const ResumePreview = forwardRef<HTMLDivElement, Props>(({ resume }, ref) => {
  const { fullName, profession, education, skills, ai, phone, email, location, linkedin } = resume;
  const theme = resume.theme;

  const skillList = ai?.skills || skills;
  const summary = ai?.summary || "Your AI-generated summary will appear here.";
  const experience = ai?.experience || "Your experience or projects will appear here.";
  const achievements = ai?.achievements || "Standout achievements or impact statements will appear here.";
  const keywords = ai?.keywords || [];

  return (
    <div
      ref={ref}
      className={`w-full aspect-[1/1.414] max-h-[900px] mx-auto rounded-2xl border shadow-soft overflow-hidden ${themeClasses(
        theme
      )}`}
    >
      <div className="h-full flex flex-col p-6 md:p-8 text-xs md:text-sm">
        <header className="border-b pb-3 mb-3 flex flex-col gap-1">
          <h1 className="text-xl md:text-2xl font-semibold tracking-tight">
            {fullName || "Your Name"}
          </h1>
          <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
            {profession || "Target Profession"}
          </p>
          <div className="flex flex-wrap gap-2 text-[10px] text-slate-500">
            {location && <span>{location}</span>}
            {phone && <span>{phone}</span>}
            {email && <span>{email}</span>}
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-brand underline"
              >
                LinkedIn
              </a>
            )}
          </div>
        </header>

        <section className="space-y-3 flex-1 overflow-auto pr-1">
          <div>
            <h2 className="font-semibold text-[11px] tracking-[0.24em] uppercase mb-1 text-slate-500">
              Professional Summary
            </h2>
            <p className="leading-relaxed whitespace-pre-line">{summary}</p>
          </div>

          <div>
            <h2 className="font-semibold text-[11px] tracking-[0.24em] uppercase mb-1 text-slate-500">
              Experience &amp; Projects
            </h2>
            <p className="leading-relaxed whitespace-pre-line">{experience}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-3">
            <div>
              <h2 className="font-semibold text-[11px] tracking-[0.24em] uppercase mb-1 text-slate-500">
                Education
              </h2>
              <p className="leading-relaxed whitespace-pre-line">
                {education || "Add your school, program and graduation year."}
              </p>
            </div>
            <div>
              <h2 className="font-semibold text-[11px] tracking-[0.24em] uppercase mb-1 text-slate-500">
                Skills
              </h2>
              <p className="leading-relaxed whitespace-pre-line">
                {skillList || "List your technical, creative and soft skills."}
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-semibold text-[11px] tracking-[0.24em] uppercase mb-1 text-slate-500">
              Achievements
            </h2>
            <p className="leading-relaxed whitespace-pre-line">{achievements}</p>
          </div>
        </section>

        {keywords.length > 0 && (
          <footer className="border-t pt-2 mt-2">
            <h2 className="font-semibold text-[10px] tracking-[0.24em] uppercase mb-1 text-slate-500">
              Application Keywords
            </h2>
            <p className="text-[11px] leading-snug">{keywords.join(" • ")}</p>
          </footer>
        )}
      </div>
    </div>
  );
});

ResumePreview.displayName = "ResumePreview";

export default ResumePreview;


