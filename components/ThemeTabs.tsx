"use client";

import { ResumeTheme } from "@/lib/types";
import clsx from "classnames";

const LABELS: { id: ResumeTheme; label: string }[] = [
  { id: "professional", label: "Professional" },
  { id: "modern", label: "Modern" },
  { id: "creative", label: "Creative" }
];

interface Props {
  value: ResumeTheme;
  onChange: (theme: ResumeTheme) => void;
}

const ThemeTabs: React.FC<Props> = ({ value, onChange }) => {
  return (
    <div className="inline-flex items-center rounded-full bg-slate-900/70 border border-slate-700 p-1 text-xs">
      {LABELS.map((t) => (
        <button
          key={t.id}
          type="button"
          onClick={() => onChange(t.id)}
          className={clsx(
            "px-3 py-1.5 rounded-full transition",
            value === t.id
              ? "bg-brand text-white shadow-soft"
              : "text-slate-300 hover:bg-slate-800/70"
          )}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
};

export default ThemeTabs;


