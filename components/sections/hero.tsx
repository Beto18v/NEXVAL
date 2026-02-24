"use client";

import { useEffect, useMemo, useState } from "react";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { siteHero, companyName } from "@/data/site";
import { LayoutGroup, motion, useReducedMotion } from "framer-motion";

import { ArrowRight } from "lucide-react";
import {
  MdWhatsapp,
  MdFlashOn,
  MdAttachMoney,
  MdLocationOn,
  MdDesktopWindows,
  MdLaptopMac,
  MdTabletMac,
  MdPhoneIphone,
} from "react-icons/md";

type DeviceKey = "desktop" | "laptop" | "tablet" | "phone";

function ResponsiveDeviceMorph() {
  const shouldReduceMotion = useReducedMotion();
  const sequence = useMemo(
    () => [
      { key: "desktop" as const, label: "PC", Icon: MdDesktopWindows },
      { key: "laptop" as const, label: "Laptop", Icon: MdLaptopMac },
      { key: "tablet" as const, label: "Tablet", Icon: MdTabletMac },
      { key: "phone" as const, label: "Celular", Icon: MdPhoneIphone },
    ],
    [],
  );

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) return;

    const intervalId = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % sequence.length);
    }, 1600);

    return () => window.clearInterval(intervalId);
  }, [sequence.length, shouldReduceMotion]);

  const active = sequence[activeIndex];

  const frameByDevice: Record<DeviceKey, { w: number; h: number; r: number }> =
    {
      desktop: { w: 440, h: 270, r: 20 },
      laptop: { w: 420, h: 260, r: 20 },
      tablet: { w: 310, h: 390, r: 26 },
      phone: { w: 220, h: 420, r: 34 },
    };

  const blockLayouts: Record<
    DeviceKey,
    Record<
      "topbar" | "hero" | "cardA" | "cardB" | "cardC" | "cta",
      {
        left: string;
        top: string;
        width: string;
        height: string;
        radius?: number;
      }
    >
  > = {
    desktop: {
      topbar: {
        left: "6%",
        top: "8%",
        width: "88%",
        height: "10%",
        radius: 10,
      },
      hero: { left: "6%", top: "22%", width: "58%", height: "18%", radius: 12 },
      cta: { left: "6%", top: "44%", width: "40%", height: "10%", radius: 999 },
      cardA: {
        left: "6%",
        top: "62%",
        width: "27%",
        height: "22%",
        radius: 14,
      },
      cardB: {
        left: "36%",
        top: "62%",
        width: "27%",
        height: "22%",
        radius: 14,
      },
      cardC: {
        left: "66%",
        top: "22%",
        width: "28%",
        height: "62%",
        radius: 14,
      },
    },
    laptop: {
      topbar: {
        left: "6%",
        top: "8%",
        width: "88%",
        height: "10%",
        radius: 10,
      },
      hero: { left: "6%", top: "22%", width: "64%", height: "18%", radius: 12 },
      cta: { left: "6%", top: "44%", width: "46%", height: "10%", radius: 999 },
      cardA: {
        left: "6%",
        top: "62%",
        width: "30%",
        height: "22%",
        radius: 14,
      },
      cardB: {
        left: "39%",
        top: "62%",
        width: "31%",
        height: "22%",
        radius: 14,
      },
      cardC: {
        left: "73%",
        top: "22%",
        width: "21%",
        height: "62%",
        radius: 14,
      },
    },
    tablet: {
      topbar: { left: "8%", top: "7%", width: "84%", height: "9%", radius: 12 },
      hero: { left: "8%", top: "20%", width: "84%", height: "16%", radius: 14 },
      cta: { left: "8%", top: "40%", width: "58%", height: "9%", radius: 999 },
      cardA: {
        left: "8%",
        top: "54%",
        width: "84%",
        height: "13%",
        radius: 16,
      },
      cardB: {
        left: "8%",
        top: "70%",
        width: "40%",
        height: "19%",
        radius: 16,
      },
      cardC: {
        left: "52%",
        top: "70%",
        width: "40%",
        height: "19%",
        radius: 16,
      },
    },
    phone: {
      topbar: {
        left: "10%",
        top: "7%",
        width: "80%",
        height: "8%",
        radius: 14,
      },
      hero: {
        left: "10%",
        top: "19%",
        width: "80%",
        height: "16%",
        radius: 16,
      },
      cta: { left: "10%", top: "38%", width: "72%", height: "8%", radius: 999 },
      cardA: {
        left: "10%",
        top: "52%",
        width: "80%",
        height: "12%",
        radius: 18,
      },
      cardB: {
        left: "10%",
        top: "67%",
        width: "80%",
        height: "12%",
        radius: 18,
      },
      cardC: {
        left: "10%",
        top: "82%",
        width: "80%",
        height: "12%",
        radius: 18,
      },
    },
  };

  const frame = frameByDevice[active.key];
  const layout = blockLayouts[active.key];

  return (
    <div className="w-full flex justify-center lg:justify-end">
      <div className="relative w-full max-w-130" style={{ height: 480 }}>
        <div className="absolute inset-0 rounded-3xl" />

        {/* Thin line + device label (kept outside the morphing frame so it doesn't jump) */}
        <div className="absolute left-0 right-0 z-10 flex items-center justify-center gap-3 px-4">
          <div className="h-px w-16 bg-slate-700/80" />
          <motion.div
            key={active.key}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22 }}
            className="flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-950/70 px-3 py-1 text-slate-100 shadow-sm"
          >
            <active.Icon className="text-cyan-400" />
            <span className="text-xs font-semibold tracking-wide text-slate-200">
              {active.label}
            </span>
          </motion.div>
          <div className="h-px w-16 bg-slate-700/80" />
        </div>

        <LayoutGroup>
          <motion.div
            className="absolute left-1/2 top-1/2 border border-slate-700/70 bg-slate-950/40 shadow-sm overflow-hidden"
            style={{ translateX: "-50%", translateY: "-50%" }}
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    width: frame.w,
                    height: frame.h,
                    borderRadius: frame.r,
                  }
            }
            transition={{ type: "spring", stiffness: 140, damping: 18 }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_top,rgba(56,189,248,0.06),transparent_55%)]" />

            {/* Responsive "content" blocks that reflow */}
            <div className="relative h-full w-full">
              {[
                { id: "topbar" as const, tone: "bg-slate-100/5" },
                { id: "hero" as const, tone: "bg-slate-100/7" },
                { id: "cta" as const, tone: "bg-cyan-500/20" },
                { id: "cardA" as const, tone: "bg-slate-100/5" },
                { id: "cardB" as const, tone: "bg-slate-100/5" },
                { id: "cardC" as const, tone: "bg-slate-100/5" },
              ].map((block) => (
                <motion.div
                  key={block.id}
                  className={
                    "absolute border border-slate-700/70 " +
                    block.tone +
                    " backdrop-blur-xs"
                  }
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : {
                          left: layout[block.id].left,
                          top: layout[block.id].top,
                          width: layout[block.id].width,
                          height: layout[block.id].height,
                          borderRadius: layout[block.id].radius,
                        }
                  }
                  transition={{ type: "spring", stiffness: 170, damping: 20 }}
                >
                  {/* inner lines */}
                  <div className="h-full w-full p-3 flex flex-col justify-center gap-2">
                    <div className="h-1.5 w-3/4 rounded-full bg-slate-200/10" />
                    <div className="h-1.5 w-2/3 rounded-full bg-slate-200/10" />
                    <div className="h-1.5 w-1/2 rounded-full bg-slate-200/10" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </LayoutGroup>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <Section
      id={siteHero.sectionId}
      className="mt-18 md:mt-12 border-slate-800/80 bg-slate-950 text-slate-100 bg-[radial-gradient(1200px_circle_at_top,rgba(56,189,248,0.1),transparent_60%)] scroll-mt-28"
    >
      <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] items-start">
        <div className="max-w-3xl md:mt-10">
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

        <div className="lg:pt-10">
          <ResponsiveDeviceMorph />
        </div>
      </div>

      {/* Stats or Trust Indicators */}
      <div className="mt-20 pt-10 border-t border-slate-800/80">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {siteHero.stats.map((stat, idx) => {
            const icons = {
              MdWhatsapp: MdWhatsapp,
              MdFlashOn: MdFlashOn,
              MdAttachMoney: MdAttachMoney,
              MdLocationOn: MdLocationOn,
            };
            const IconComponent = icons[stat.icon as keyof typeof icons];
            return (
              <motion.div
                key={idx}
                className="group bg-slate-900/70 border border-slate-700 rounded-xl p-5 flex flex-col items-center text-center shadow-md transition-all duration-200 hover:scale-105 hover:border-cyan-400/70 hover:bg-slate-800/80 cursor-pointer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.3 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <span className="text-3xl md:text-4xl mb-2 transition-colors group-hover:text-cyan-400">
                  {IconComponent && <IconComponent />}
                </span>
                <p className="font-semibold text-base md:text-lg text-slate-100 group-hover:text-cyan-300">
                  {stat.title}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
