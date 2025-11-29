"use client";

import { useRef, useState } from "react";
import ResumeForm from "@/components/ResumeForm";
import ResumePreview from "@/components/ResumePreview";
import ThemeTabs from "@/components/ThemeTabs";
import PDFDownloadButton from "@/components/PDFDownloadButton";
import LoadingOverlay from "@/components/LoadingOverlay";
import { ResumeData, ResumeFormValues, ResumeTheme, ResumeAISections } from "@/lib/types";

const defaultForm: ResumeFormValues = {
  fullName: "",
  profession: "",
  education: "",
  skills: "",
  experience: "",
  beginnerMode: true,
  customInstructions: ""
};

export default function CreateResumePage() {
  const [theme, setTheme] = useState<ResumeTheme>("professional");
  const [formValues, setFormValues] = useState<ResumeFormValues>(defaultForm);
  const [aiSections, setAiSections] = useState<ResumeAISections | undefined>(undefined);
  const [isGenerating, setIsGenerating] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);

  // Compose the live resume object so the preview + PDF always have the newest inputs and AI data
  const resume: ResumeData = {
    ...formValues,
    theme,
    ai: aiSections
  };

  // Call the /api/generate endpoint and hydrate the AI sections in the preview
  async function handleGenerate() {
    setIsGenerating(true);
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues)
      });

      if (!res.ok) {
        // eslint-disable-next-line no-console
        console.error(await res.text());
        throw new Error("Failed to generate resume");
      }

      const data = (await res.json()) as ResumeAISections;
      setAiSections(data);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      alert("Something went wrong generating your resume. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  }

  return (
    <>
      <LoadingOverlay show={isGenerating} />

      <div className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight mb-1">
              Create your AI-powered resume
            </h1>
            <p className="text-sm text-slate-300 max-w-xl">
              Fill out a few details, let Rezuvi generate the content, then tweak and download as a polished
              PDF.
            </p>
          </div>

          {/* Keep theme selection + download CTA always visible (even before generating) */}
          <div className="flex flex-wrap items-center gap-3">
            <ThemeTabs value={theme} onChange={setTheme} />
            <div className="hidden md:block">
              <PDFDownloadButton targetRef={previewRef} />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1.1fr,1.3fr] gap-8 items-start">
          <div className="glass-card p-5 md:p-6">
            <ResumeForm
              initialValues={defaultForm}
              onChange={(v) => setFormValues(v)}
              onGenerate={handleGenerate}
              isGenerating={isGenerating}
            />
          </div>

          <div className="glass-card p-4 md:p-6">
            <h2 className="text-sm font-medium text-slate-200 mb-3">Live Resume Preview</h2>
            <div className="text-[11px] text-slate-400 mb-2">
              Updates instantly as you type. Switch themes to see different looks.
            </div>
            <div className="mt-2">
              <ResumePreview resume={resume} ref={previewRef} />
            </div>
            <div className="md:hidden mt-4">
              <PDFDownloadButton targetRef={previewRef} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


