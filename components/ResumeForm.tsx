"use client";

import { PROFESSIONS } from "@/data/professions";
import { ResumeFormValues } from "@/lib/types";
import { useState } from "react";

interface Props {
  initialValues: ResumeFormValues;
  onChange: (values: ResumeFormValues) => void;
  onGenerate: () => Promise<void>;
  isGenerating: boolean;
}

const ResumeForm: React.FC<Props> = ({ initialValues, onChange, onGenerate, isGenerating }) => {
  const [local, setLocal] = useState<ResumeFormValues>(initialValues);

  // Mirror every input locally so the preview updates instantly and the parent receives the full object
  function update<K extends keyof ResumeFormValues>(key: K, value: ResumeFormValues[K]) {
    const next = { ...local, [key]: value };
    setLocal(next);
    onChange(next);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await onGenerate();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-sm">
      <div>
        <label className="block text-xs font-medium text-slate-200 mb-1">Full Name</label>
        <input
          required
          type="text"
          value={local.fullName}
          onChange={(e) => update("fullName", e.target.value)}
          placeholder="Alex Rivera"
          className="w-full rounded-xl bg-slate-900/60 border border-slate-700 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-brand"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-medium text-slate-200 mb-1">Profession</label>
          <select
            required
            value={local.profession}
            onChange={(e) => update("profession", e.target.value)}
            className="w-full rounded-xl bg-slate-900/60 border border-slate-700 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-brand"
          >
            <option value="">Select a profession</option>
            {PROFESSIONS.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center gap-2 mt-5 md:mt-7">
          <input
            id="beginner"
            type="checkbox"
            checked={local.beginnerMode}
            onChange={(e) => update("beginnerMode", e.target.checked)}
            className="h-4 w-4 rounded border-slate-600 bg-slate-900/80 text-brand"
          />
          <label htmlFor="beginner" className="text-xs text-slate-300">
            Beginner mode (little or no work experience)
          </label>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-medium text-slate-200 mb-1">
            Phone <span className="text-slate-400">(optional)</span>
          </label>
          <input
            type="tel"
            value={local.phone || ""}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="+1 (555) 123-9876"
            className="w-full rounded-xl bg-slate-900/60 border border-slate-700 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-brand"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-200 mb-1">
            Email <span className="text-slate-400">(optional)</span>
          </label>
          <input
            type="email"
            value={local.email || ""}
            onChange={(e) => update("email", e.target.value)}
            placeholder="you@example.com"
            className="w-full rounded-xl bg-slate-900/60 border border-slate-700 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-brand"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-medium text-slate-200 mb-1">
            Location <span className="text-slate-400">(optional)</span>
          </label>
          <input
            type="text"
            value={local.location || ""}
            onChange={(e) => update("location", e.target.value)}
            placeholder="Toronto, ON"
            className="w-full rounded-xl bg-slate-900/60 border border-slate-700 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-brand"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-200 mb-1">
            LinkedIn URL <span className="text-slate-400">(optional)</span>
          </label>
          <input
            type="url"
            value={local.linkedin || ""}
            onChange={(e) => update("linkedin", e.target.value)}
            placeholder="https://www.linkedin.com/in/you"
            className="w-full rounded-xl bg-slate-900/60 border border-slate-700 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-brand"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium text-slate-200 mb-1">Education</label>
        <textarea
          required
          rows={3}
          value={local.education}
          onChange={(e) => update("education", e.target.value)}
          placeholder="BSc Computer Science, XYZ University, 2021 – 2025. Relevant courses, GPA, projects..."
          className="w-full rounded-xl bg-slate-900/60 border border-slate-700 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-brand resize-none"
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-slate-200 mb-1">
          Skills <span className="text-slate-400">(comma separated)</span>
        </label>
        <textarea
          required
          rows={2}
          value={local.skills}
          onChange={(e) => update("skills", e.target.value)}
          placeholder="JavaScript, React, HTML, CSS, teamwork, communication..."
          className="w-full rounded-xl bg-slate-900/60 border border-slate-700 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-brand resize-none"
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-slate-200 mb-1">
          Experience <span className="text-slate-400">(optional)</span>
        </label>
        <textarea
          rows={3}
          value={local.experience}
          onChange={(e) => update("experience", e.target.value)}
          placeholder="Part-time jobs, internships, school projects, volunteering..."
          className="w-full rounded-xl bg-slate-900/60 border border-slate-700 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-brand resize-none"
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-slate-200 mb-1">
          Detailed AI instructions <span className="text-slate-400">(optional)</span>
        </label>
        <textarea
          rows={3}
          value={local.customInstructions || ""}
          onChange={(e) => update("customInstructions", e.target.value)}
          placeholder="Example: highlight leadership in robotics club, mention award in 2024, emphasize bilingual support skills..."
          className="w-full rounded-xl bg-slate-900/60 border border-slate-700 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-brand resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isGenerating}
        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-brand text-white font-medium text-sm shadow-soft hover:bg-brand-dark transition disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isGenerating && (
          <span className="h-3 w-3 rounded-full border-2 border-white/40 border-t-transparent animate-spin" />
        )}
        Generate Resume with AI
      </button>
    </form>
  );
};

export default ResumeForm;


