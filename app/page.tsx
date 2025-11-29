import HeroSection from "@/components/HeroSection";

export default function HomePage() {
  return (
    <div className="space-y-16">
      <HeroSection />

      <section className="grid md:grid-cols-3 gap-6 mt-10 text-sm">
        <div className="glass-card p-5">
          <p className="text-xs font-medium text-brand mb-1">01</p>
          <h2 className="font-semibold mb-2">Tell Rezuvi who you are</h2>
          <p className="text-slate-300">
            Choose your profession, list your education, skills, and any experience – even school projects
            or volunteering.
          </p>
        </div>
        <div className="glass-card p-5">
          <p className="text-xs font-medium text-brand mb-1">02</p>
          <h2 className="font-semibold mb-2">AI builds your resume</h2>
          <p className="text-slate-300">
            Our AI turns your info into a professional summary, experience section, and tailored keywords.
          </p>
        </div>
        <div className="glass-card p-5">
          <p className="text-xs font-medium text-brand mb-1">03</p>
          <h2 className="font-semibold mb-2">Preview & download as PDF</h2>
          <p className="text-slate-300">
            Switch between Professional, Modern or Creative themes and download a clean PDF in one click.
          </p>
        </div>
      </section>
    </div>
  );
}


