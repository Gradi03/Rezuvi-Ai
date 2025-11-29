export async function generateResumePdfBlob(
  element: HTMLElement,
  fileName = "Rezuvi-Resume.pdf"
): Promise<Blob> {
  const html2pdf = (await import("html2pdf.js")).default;

  const instance = html2pdf().set({
    margin: 10,
    filename: fileName,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
  });

  return instance.from(element).outputPdf("blob");
}

export async function triggerPdfDownload(element: HTMLElement, fileName?: string) {
  const blob = await generateResumePdfBlob(element, fileName);
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName || "Rezuvi-Resume.pdf";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  return blob;
}


