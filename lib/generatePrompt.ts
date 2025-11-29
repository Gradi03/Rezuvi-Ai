import { ResumeFormValues } from "./types";

export function buildResumePrompt(values: ResumeFormValues): string {
  const {
    fullName,
    profession,
    education,
    skills,
    experience,
    beginnerMode,
    phone,
    email,
    location,
    linkedin,
    customInstructions
  } = values;

  return `
You are an expert career coach writing resumes for youth.

Create a JSON object ONLY (no extra text) with the following shape:
{
  "summary": string,
  "experience": string,
  "skills": string,
  "achievements": string,
  "keywords": string[]
}

Guidelines:
- Tone: ${beginnerMode ? "encouraging, potential-focused, beginner friendly" : "professional and confident"}.
- Target profession: "${profession}".
- Candidate name: "${fullName}".

Education:
${education}

Contact details (include if relevant):
- Phone: ${phone || "Not provided"}
- Email: ${email || "Not provided"}
- Location: ${location || "Not provided"}
- LinkedIn: ${linkedin || "Not provided"}

Skills (comma-separated from user):
${skills}

Experience (may be empty or short):
${experience || "No formal work experience provided. Focus on projects, volunteering, and transferable skills."}

Additional user instructions to follow closely:
${customInstructions?.trim() || "No extra instructions provided. Make reasonable assumptions."}

Make sure:
- Use concise bullet-like paragraphs suitable for a 1-page resume.
- Keep keywords relevant to entry-level or early-career roles in this profession.
- Do NOT include markdown, just plain text and a JSON object.
`;
}


