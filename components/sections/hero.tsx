"use client";

import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { siteHero, companyName } from "@/data/site";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <Section
      id={siteHero.sectionId}
      className="mt-18 md:mt-12 border-slate-800/80 bg-slate-950 text-slate-100 bg-[radial-gradient(1200px_circle_at_top,rgba(56,189,248,0.1),transparent_60%)] scroll-mt-28"
    >
      <div className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-100 leading-tight tracking-tight text-balance">
            {(() => {
              const parts = siteHero.title.split(companyName);
              return (
                <>
                  {parts[0]}
                  <span
                    className="bg-linear-to-r from-purple-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_2px_16px_rgba(56,189,248,0.7)] font-extrabold"
                    style={{
                      WebkitTextStroke: "1px rgba(56,189,248,0.25)",
                      filter:
                        "drop-shadow(0 0 8px #7c3aed) drop-shadow(0 0 16px #38bdf8)",
                    }}
                  >
                    {companyName}
                  </span>
                  {parts[1]}
                </>
              );
            })()}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-300/80 leading-relaxed max-w-2xl">
            {siteHero.subtitle}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="group bg-cyan-500 text-slate-950 hover:bg-cyan-400"
            >
              <a href={siteHero.cta.primary.href}>
                {siteHero.cta.primary.label}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-slate-700 text-slate-600 hover:bg-slate-100/60 hover:text-slate-100"
            >
              <a href={siteHero.cta.secondary.href}>
                {siteHero.cta.secondary.label}
              </a>
            </Button>
          </div>
          <div className="flex flex-wrap gap-2 mt-3">
            {siteHero.disclaimer.map((item, idx) => (
              <span
                key={idx}
                className="text-xs md:text-sm text-cyan-400 bg-slate-800/60 rounded-full px-3 py-1 border border-cyan-500/30 shadow-sm font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Stats or Trust Indicators */}
      <div className="mt-20 pt-10 border-t border-slate-800/80">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {siteHero.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="group bg-slate-900/70 border border-slate-700 rounded-xl p-5 flex flex-col items-center text-center shadow-md transition-all duration-200 hover:scale-105 hover:border-cyan-400/70 hover:bg-slate-800/80 cursor-pointer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <span className="text-3xl md:text-4xl mb-2 transition-colors group-hover:text-cyan-400">
                {stat.icon}
              </span>
              <p className="font-semibold text-base md:text-lg text-slate-100 group-hover:text-cyan-300">
                {stat.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
