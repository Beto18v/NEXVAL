import Link from "next/link";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { siteBanner, sitePricing } from "@/data/site";

const plans = [
  {
    name: "Plan Start",
    price: "Desde $900.000 COP",
    idealFor: "Emprendimientos y negocios pequeños",
    pitch:
      "Empieza con una presencia web profesional que genere confianza y te traiga contactos desde el primer día.",
    included: [
      "Landing profesional (1 página)",
      "WhatsApp integrado",
      "Secciones personalizadas",
      "Diseño responsive (móvil/tablet/PC)",
      "Formulario de contacto",
      "Ubicación en Google Maps",
      "Entrega rápida",
    ],
    whatsappText:
      "Hola, quiero cotizar el Plan Start (desde $900.000 COP). Mi negocio es: ____. Quiero lanzar mi web lo antes posible.",
    featured: false,
  },
  {
    name: "Plan Pro",
    price: "Desde $1.500.000 COP",
    idealFor: "Negocios que quieren captar clientes y verse premium",
    pitch:
      "La opción más elegida para crecer con una web que vende, posiciona tu marca y comunica valor real.",
    included: [
      "Todo lo del Plan Start",
      "Diseño premium tipo los demos",
      "Sección de testimonios",
      "Sección de servicios avanzada",
      "SEO básico (h1/h2 + meta title + descripción)",
      "Optimización de velocidad",
      "Copy mejorado (texto persuasivo)",
      "2 rondas de cambios",
    ],
    whatsappText:
      "Hola, quiero cotizar el Plan Pro (desde $1.500.000 COP). Busco una web premium que me ayude a captar más clientes.",
    featured: true,
  },
  {
    name: "Plan Elite",
    price: "Desde $2.800.000 COP",
    idealFor: "Marcas que quieren escalar y posicionarse en Google",
    pitch:
      "Pensado para marcas ambiciosas que necesitan una estructura más robusta y una base sólida de crecimiento digital.",
    included: [
      "Todo lo del Plan Pro",
      "Sitio multi-sección o multi-página",
      "Blog básico o sección de artículos",
      "Google Analytics + Search Console",
      "Optimización SEO avanzada inicial",
      "Integración de agenda / reservas",
      "4 rondas de cambios",
      "Prioridad en soporte",
    ],
    whatsappText:
      "Hola, quiero cotizar el Plan Elite (desde $2.800.000 COP). Quiero escalar mi marca y posicionarme mejor en Google.",
    featured: false,
  },
];

const includedByPlan = [
  {
    item: "Diseño profesional y responsive",
    start: true,
    pro: true,
    elite: true,
  },
  {
    item: "WhatsApp, formulario y mapa integrados",
    start: true,
    pro: true,
    elite: true,
  },
  {
    item: "Copy persuasivo optimizado",
    start: false,
    pro: true,
    elite: true,
  },
  {
    item: "SEO técnico inicial",
    start: false,
    pro: true,
    elite: true,
  },
  {
    item: "Blog / artículos",
    start: false,
    pro: false,
    elite: true,
  },
  {
    item: "Rondas de cambios",
    start: false,
    pro: true,
    elite: true,
  },
  {
    item: "Prioridad de soporte",
    start: false,
    pro: false,
    elite: true,
  },
];

const optionalExtras = [
  {
    name: "Dominio + Hosting Gestionado",
    icon: "🌐",
    description:
      "Asegura una base técnica confiable para que tu web se vea profesional desde el primer día.",
    includes: [
      "Dominio (.com o .com.co) + hosting rápido con SSL",
      "Configuración completa para salir en línea sin fricción",
      "Soporte básico inicial para acompañar el arranque",
    ],
    price: "Desde $250.000 COP / año",
  },
  {
    name: "Mantenimiento y Soporte Mensual",
    icon: "🛠️",
    description:
      "Mantén tu sitio actualizado, seguro y ágil sin distraerte de la operación del negocio.",
    includes: [
      "Cambios pequeños de contenido cuando lo necesites",
      "Actualizaciones y seguridad para una web estable",
      "Soporte por WhatsApp con ajustes rápidos",
    ],
    price: "Desde $150.000 COP / mes",
  },
  {
    name: "Pack de Reels Publicitarios (Instagram/TikTok)",
    icon: "🎬",
    description:
      "Contenido corto pensado para captar atención y reforzar tu presencia comercial en redes.",
    includes: [
      "3 a 5 videos verticales (15-30 segundos)",
      "Producción rápida con herramientas modernas (IA + edición)",
      "Texto promocional y edición dinámica lista para publicar",
    ],
    price: "Desde $450.000 COP",
  },
  {
    name: "Pack de Contenido para Redes Sociales",
    icon: "📣",
    description:
      "Publica con más consistencia y una imagen de marca clara para mejorar tu comunicación.",
    includes: [
      "10 diseños de posts listos para usar",
      "5 historias (stories) en formato de alto impacto",
      "Estilo de marca y textos listos para publicar",
    ],
    price: "Desde $350.000 COP",
  },
];

function getWhatsAppUrl(text: string) {
  return `https://wa.me/${siteBanner.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export function Pricing() {
  return (
    <Section
      id={sitePricing.sectionId}
      className="border-slate-800/80 bg-slate-950 text-slate-100"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-medium uppercase tracking-wider text-cyan-300">
          Inversión estratégica
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance text-slate-100 md:text-4xl">
          Planes diseñados para vender más y posicionar tu marca
        </h2>
        <p className="mt-4 text-slate-300/90">
          Elige el nivel de ejecución que necesita tu negocio hoy, con una
          propuesta visual premium y enfoque en conversiones reales.
        </p>
      </div>

      <div className="mt-14 grid gap-7 md:grid-cols-3">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={`group relative flex h-full flex-col rounded-lg border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.35),0_12px_30px_rgba(34,211,238,0.18)] ${
              plan.featured
                ? "border-cyan-400/60 bg-slate-900/80 shadow-[0_0_0_1px_rgba(34,211,238,0.35),0_20px_40px_rgba(34,211,238,0.2)] scale-[1.02]"
                : "border-slate-800/80 bg-slate-900/60"
            }`}
          >
            {plan.featured && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-cyan-400/40 bg-cyan-400/15 px-3 py-1 text-xs font-semibold text-cyan-100 backdrop-blur">
                Más vendido
              </div>
            )}

            <div className="flex-1">
              <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                {plan.featured ? "Plan recomendado" : "Plan"}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-slate-100">
                {plan.name}
              </h3>
              <p className="mt-3 text-3xl font-bold text-slate-100">
                {plan.price}
              </p>
              <p className="mt-3 text-sm text-slate-300">
                Ideal para: {plan.idealFor}
              </p>
              <p className="mt-4 text-sm text-slate-300/90">{plan.pitch}</p>

              <ul className="mt-6 space-y-3">
                {plan.included.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
                    <span className="text-sm text-slate-300/90">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-7">
              <Button
                asChild
                variant={plan.featured ? "default" : "outline"}
                className="w-full"
              >
                <Link href={getWhatsAppUrl(plan.whatsappText)}>
                  Quiero este plan
                </Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-8 rounded-lg border border-cyan-400/35 bg-cyan-400/10 px-5 py-4 text-center shadow-[0_0_0_1px_rgba(34,211,238,0.16)]">
        <p className="text-sm font-medium text-cyan-100">
          Si no te gusta el diseño inicial, lo ajustamos hasta que te encante.
        </p>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-semibold tracking-tight text-slate-100 text-center">
          ¿Qué incluye cada plan?
        </h3>
        <p className="mt-3 text-center text-slate-400">
          Compara rápidamente el alcance y toma una decisión con claridad.
        </p>

        <div className="mt-6 rounded-lg border border-slate-800/80 bg-slate-900/60 p-5 md:p-6">
          <div className="grid grid-cols-4 border-b border-slate-800 pb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
            <span>Incluye</span>
            <span className="text-center">Start</span>
            <span className="text-center text-cyan-200">Pro</span>
            <span className="text-center">Elite</span>
          </div>

          <div className="mt-3 space-y-2">
            {includedByPlan.map((row) => (
              <div
                key={row.item}
                className="grid grid-cols-4 items-center rounded-md px-2 py-2 text-sm text-slate-300 transition-colors hover:bg-slate-800/50"
              >
                <span className="pr-3">{row.item}</span>
                <span className="text-center">{row.start ? "✔" : "—"}</span>
                <span className="text-center text-cyan-200">
                  {row.pro ? "✔" : "—"}
                </span>
                <span className="text-center">{row.elite ? "✔" : "—"}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-semibold tracking-tight text-slate-100 text-center">
          Extras opcionales para potenciar tu negocio
        </h3>
        <p className="mt-3 text-center text-slate-400">
          Puedes agregarlos ahora o más adelante
        </p>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {optionalExtras.map((extra) => (
            <Card
              key={extra.name}
              className="rounded-lg border border-slate-800/80 bg-slate-900/65 p-6 shadow-[0_10px_30px_rgba(15,23,42,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:shadow-[0_14px_34px_rgba(34,211,238,0.14)]"
            >
              <div className="flex h-full flex-col">
                <p className="text-xs font-medium uppercase tracking-wider text-cyan-200/90">
                  Complemento opcional
                </p>

                <div className="mt-3 flex items-start gap-3">
                  <span className="text-xl leading-none" aria-hidden="true">
                    {extra.icon}
                  </span>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-100">
                      {extra.name}
                    </h4>
                  </div>
                </div>
                <p className="mt-2 text-sm text-slate-300/90">
                  {extra.description}
                </p>

                <ul className="mt-5 space-y-2">
                  {extra.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                      <span className="text-sm text-slate-300/90">{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-5 text-sm font-semibold text-cyan-100">
                  {extra.price}
                </p>

                <div className="mt-4">
                  <Button
                    asChild
                    size="sm"
                    variant="secondary"
                    className="bg-green-600 border-b-green-800 hover:bg-amber-500 hover:border-b-amber-900"
                  >
                    <Link
                      href={getWhatsAppUrl(
                        `Hola, me interesa el extra ${extra.name}. Quisiera más información y el precio final.`,
                      )}
                    >
                      Agregar a mi plan
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-12 rounded-lg border border-cyan-400/35 bg-slate-900/80 p-7 text-center shadow-[0_0_0_1px_rgba(34,211,238,0.2),0_18px_40px_rgba(34,211,238,0.12)]">
        <p className="text-lg font-semibold text-slate-100">
          Agenda una asesoría gratis por WhatsApp y te digo qué plan te
          conviene.
        </p>
        <p className="mt-2 text-sm text-slate-300/85">
          Te orientamos sin compromiso para que inviertas de forma inteligente y
          con objetivos claros.
        </p>
        <div className="mt-5">
          <Button asChild className="px-7">
            <Link
              href={getWhatsAppUrl(
                "Hola, quiero agendar una asesoría gratis para saber qué plan web me conviene para mi negocio.",
              )}
            >
              Agendar asesoría gratis
            </Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
