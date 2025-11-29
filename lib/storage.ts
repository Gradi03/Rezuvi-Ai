"use client";

import { ResumeData } from "./types";

const STORAGE_KEY = "rezuvi-resumes";

export function saveResume(resume: ResumeData): string {
  if (typeof window === "undefined") return "";
  const id = resume.id || (typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(16).slice(2)}`);
  const existingRaw = window.localStorage.getItem(STORAGE_KEY);
  const existing = existingRaw ? (JSON.parse(existingRaw) as Record<string, ResumeData>) : {};
  existing[id] = { ...resume, id };
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
  return id;
}

export function loadResume(id: string): ResumeData | null {
  if (typeof window === "undefined") return null;
  const existingRaw = window.localStorage.getItem(STORAGE_KEY);
  if (!existingRaw) return null;
  const existing = JSON.parse(existingRaw) as Record<string, ResumeData>;
  return existing[id] ?? null;
}


