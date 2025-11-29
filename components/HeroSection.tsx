"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="grid md:grid-cols-[1.3fr,1fr] gap-10 items-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700 text-xs text-slate-300 mb-4">
          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Built for students, grads &amp; first jobs
        </p>

        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
          Turn your <span className="text-brand">first steps</span> into a standout resume with AI.
        </h1>
        <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-xl mb-6">
          Rezuvi helps youth instantly transform school projects, part-time jobs and passion work into a
          clean, professional resume tailored to their dream role.
        </p>

        <div className="flex flex-wrap items-center gap-4 mb-3">
          <Link
            href="/create-resume"
            className="px-6 py-2.5 rounded-full bg-brand text-white font-medium text-sm shadow-soft hover:bg-brand-dark transition transform hover:-translate-y-0.5"
          >
            Create Resume
          </Link>
          <button
            type="button"
            className="px-4 py-2 rounded-full border border-slate-700 text-xs md:text-sm text-slate-200 hover:bg-slate-900/60 transition"
          >
            Watch a 30s demo (coming soon)
          </button>
        </div>

        <p className="text-[11px] text-slate-400">
          You stay in control – edit everything before you download.
        </p>
      </motion.div>

      <motion.div
        className="glass-card p-4 md:p-6 relative overflow-hidden"
        initial={{ opacity: 0, x: 32 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
      >
        <div className="absolute -right-10 -top-10 h-32 w-32 bg-brand/40 rounded-full blur-3xl opacity-60" />
        <div className="absolute -left-12 bottom-0 h-28 w-28 bg-cyan-400/40 rounded-full blur-3xl opacity-40" />

        <div className="relative">
          <p className="text-[11px] text-slate-300 mb-2">Live AI preview</p>
          <div className="bg-slate-950/80 border border-slate-700 rounded-2xl p-4 text-xs text-slate-200 space-y-2">
            <div className="flex items-center justify-between text-[10px] text-slate-400">
              <span>Resume – Software Developer</span>
              <span>Rezuvi AI</span>
            </div>
            <div className="h-px w-full bg-gradient-to-r from-brand/60 via-cyan-400/50 to-transparent mb-1" />
            <p className="font-semibold text-slate-50">Professional Summary</p>
            <p>
              Curious, self-driven developer with hands-on projects in JavaScript and React, eager to turn
              ideas into real products and grow with a supportive engineering team.
            </p>
            <p className="font-semibold text-slate-50 pt-1.5">Key Skills</p>
            <p>JavaScript • React • Git • Teamwork • Problem solving • Communication</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;


