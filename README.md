# Rezuvi – AI Resume Builder

Rezuvi is a Next.js (App Router) application that helps students and early-career professionals generate polished resumes in minutes. Users fill out a short form, provide optional AI instructions, and Rezuvi uses OpenAI’s GPT-5 mini model to craft tailored resume sections with live preview, theme switching, and PDF export.

## Features

- **Create Resume Form** – Collects personal details, education, skills, experience, and optional contact info (phone, email, location, LinkedIn).
- **Detailed AI Instructions** – Let users tell the model exactly what to emphasize in the resume output.
- **GPT-5 mini Generation** – `/api/generate` sends form data to OpenAI and returns summary, experience, skills, achievements, and keywords.
- **Live Preview** – Instant updates with multiple Tailwind themes (Professional, Modern, Creative).
- **PDF Download** – Uses `html2pdf.js` to export the preview as an A4 PDF.

## Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Language**: TypeScript + React
- **Styling**: Tailwind CSS
- **UI**: Custom components + framer-motion
- **PDF**: `html2pdf.js`
- **AI**: OpenAI Node SDK (`gpt-5-mini`)

## Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Set environment variables**
   Create `.env.local` at the project root:
   ```env
   OPENAI_API_KEY=sk-your-openai-key
   ```

3. **Run the dev server**
   ```bash
   npm run dev
   ```
   Visit http://localhost:3000 to use the app.

4. **Production build**
   ```bash
   npm run build
   npm run start
   ```

## Project Structure

```
app/
  page.tsx               # Home page
  create-resume/page.tsx # Main builder view
  api/generate/route.ts  # OpenAI endpoint
components/
  *.tsx                  # UI components (Navbar, Hero, ResumeForm, etc.)
lib/
  generatePrompt.ts      # Builds AI prompt
  types.ts               # Shared TypeScript types
  pdf.ts                 # PDF helper via html2pdf.js
data/
  professions.ts         # Profession dropdown list
```

## Notes

- You need a paid OpenAI account (or prepaid credits) to call GPT-5 mini.
- Tailwind is using the classic PostCSS pipeline (`@tailwindcss/postcss` isn’t required).
- `.env.local` is ignored by Git so your API keys stay private.

Enjoy building standout resumes with Rezuvi!


