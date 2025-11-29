"use client";

import { RefObject, useState } from "react";
import { triggerPdfDownload } from "@/lib/pdf";

interface Props {
  targetRef: RefObject<HTMLDivElement | null>;
}

const PDFDownloadButton: React.FC<Props> = ({ targetRef }) => {
  const [isDownloading, setIsDownloading] = useState(false);

  async function handleDownload() {
    if (isDownloading || !targetRef.current) return;
    try {
      setIsDownloading(true);
      await triggerPdfDownload(targetRef.current, "Rezuvi-Resume.pdf");
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("Failed to generate PDF", err);
      alert("Unable to generate the PDF right now. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleDownload}
      disabled={isDownloading}
      className="px-4 py-2 rounded-full border border-slate-700 text-xs md:text-sm text-slate-100 hover:bg-slate-900/60 transition disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {isDownloading ? "Preparing..." : "Download as PDF"}
    </button>
  );
};

export default PDFDownloadButton;

