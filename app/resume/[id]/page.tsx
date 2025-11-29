"use client";

import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import { loadResume } from "@/lib/storage";
import { ResumeData } from "@/lib/types";
import ResumePreview from "@/components/ResumePreview";
import PDFDownloadButton from "@/components/PDFDownloadButton";

export default function SharedResumePage() {
  const params = useParams();
  const id = typeof params.id === "string" ? params.id : Array.isArray(params.id) ? params.id[0] : "";
  const [resume, setResume] = useState<ResumeData | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!id) return;
    const data = loadResume(id);
    setResume(data);
  }, [id]);

  if (!resume) {
    return (
      <div className="max-w-xl mx-auto text-center space-y-3">
        <h1 className="text-2xl font-semibold">This resume could not be found</h1>
        <p className="text-sm text-slate-300">
          Make sure the link is correct and was created on this device. (This demo uses localStorage only.)
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Shared Resume – {resume.fullName}</h1>
          <p className="text-xs text-slate-300">
            View-only resume generated with Rezuvi on this device.
          </p>
        </div>
        <PDFDownloadButton targetRef={previewRef} />
      </div>

      <div className="glass-card p-4 md:p-6">
        <ResumePreview resume={resume} ref={previewRef} />
      </div>
    </div>
  );
}


