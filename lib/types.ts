export type ResumeTheme = "professional" | "modern" | "creative";

export interface ResumeAISections {
  summary: string;
  experience: string;
  skills: string;
  achievements: string;
  keywords: string[];
}

export interface ResumeFormValues {
  fullName: string;
  profession: string;
  education: string;
  skills: string;
  experience?: string;
  beginnerMode: boolean;
  phone?: string;
  email?: string;
  location?: string;
  linkedin?: string;
  customInstructions?: string;
}

export interface ResumeData extends ResumeFormValues {
  theme: ResumeTheme;
  ai?: ResumeAISections;
  id?: string;
}


