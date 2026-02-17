"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { siteBanner, siteExamples } from "@/data/site";

type DemoItem = {
  name: string;
  category: string;
  href: string;
  image: string;
  shortDescription: string;
  longDescription: string;
  features: string[];
};

const demoItems: DemoItem[] = [
  {
    name: "Restaurante Élite",
    category: "Restaurante",
    href: "/demo/restaurant",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=80",
    shortDescription:
      "Landing premium para reservas y pedidos directos por WhatsApp.",
    longDescription:
      "Diseño web profesional para restaurantes que quieren verse exclusivos, captar más reservas y convertir visitas en clientes con una experiencia clara desde celular.",
    features: ["Botón de WhatsApp", "Módulo de reservas", "SEO local"],
  },
  {
    name: "Spa Serenity",
    category: "Spa",
    href: "/demo/spa",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1400&q=80",
    shortDescription:
      "Web elegante que transmite confianza y aumenta solicitudes de cita.",
    longDescription:
      "Página orientada a tratamientos premium con bloques de servicios, testimonios y llamadas a la acción para generar más conversiones en negocios de bienestar.",
    features: ["Agenda por WhatsApp", "Sección de servicios", "Copy comercial"],
  },
  {
    name: "Gym Performance",
    category: "Gimnasio",
    href: "/demo/gym",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=80",
    shortDescription:
      "Sitio de alto impacto para captar leads de clases y planes mensuales.",
    longDescription:
      "Ejemplo de landing premium para gimnasios que necesitan más prospectos, mejor posicionamiento y una propuesta clara para convertir tráfico en membresías.",
    features: [
      "Formulario de contacto",
      "Planes destacados",
      "SEO para Google",
    ],
  },
  {
    name: "Barbería Clásica",
    category: "Barbería",
    href: "/demo/barberia",
    image:
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1400&q=80",
    shortDescription:
      "Imagen sólida de marca para barberías que buscan vender más citas.",
    longDescription:
      "Demo de páginas web para negocios de barbería con identidad visual fuerte, acceso rápido a WhatsApp y estructura enfocada en cerrar clientes desde móvil.",
    features: ["Reserva rápida", "Galería de estilos", "Integración WhatsApp"],
  },
  {
    name: "Beauty Studio",
    category: "Belleza",
    href: "/demo/beauty",
    image:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1400&q=80",
    shortDescription:
      "Diseño aspiracional para salones que quieren elevar su percepción premium.",
    longDescription:
      "Propuesta de diseño web profesional para marcas de belleza que desean posicionarse con autoridad, mostrar resultados y generar más consultas.",
    features: ["Portafolio visual", "CTA de cotización", "Optimización mobile"],
  },
  {
    name: "Clínica Dental Pro",
    category: "Dental",
    href: "/demo/dental",
    image:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1400&q=80",
    shortDescription:
      "Web confiable para clínicas que quieren más citas agendadas.",
    longDescription:
      "Ejemplo pensado para clínicas odontológicas que necesitan transmitir seguridad, explicar procedimientos y aumentar conversiones con una experiencia simple.",
    features: [
      "Agenda de citas",
      "Sección de tratamientos",
      "SEO local profesional",
    ],
  },
];

const buildWhatsappLink = (demoName: string) => {
  const message = `Hola, quiero una página web para negocios similar al demo ${demoName}. Quiero una landing premium y diseño web profesional para mi marca.`;
  return `https://wa.me/${siteBanner.whatsappNumber}?text=${encodeURIComponent(message)}`;
};

export function Examples() {
  const [activeDemo, setActiveDemo] = useState<DemoItem | null>(null);

  useEffect(() => {
    if (!activeDemo) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveDemo(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [activeDemo]);

  return (
    <Section
      id={siteExamples.sectionId}
      className="border-slate-800/80 bg-slate-900 text-slate-100"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-medium uppercase tracking-wider text-cyan-300">
          Portafolio de demos
        </p>
        <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl">
          Ejemplos de diseño premium
        </h2>
        <p className="mt-5 text-pretty text-base text-slate-300 md:text-lg">
          Estos son demos creados para negocios reales. Tu web puede verse así o
          mejor.
        </p>
        <p className="mt-3 text-sm text-slate-400 md:text-base">
          Creamos páginas web para negocios con enfoque en conversión, diseño
          web profesional y landing premium optimizada para atraer clientes.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {demoItems.map((demo) => (
          <Card
            key={demo.href}
            role="button"
            tabIndex={0}
            onClick={() => setActiveDemo(demo)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setActiveDemo(demo);
              }
            }}
            className="group cursor-pointer overflow-hidden border border-slate-800 bg-slate-900/70 p-0 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/70 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.35),0_20px_40px_rgba(15,23,42,0.65)]"
          >
            <div className="relative h-52 w-full overflow-hidden">
              <Image
                src={demo.image}
                alt={`Demo ${demo.category}`}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                quality={75}
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/55 to-slate-950/15" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300/90">
                  {demo.category}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-white">
                  {demo.name}
                </h3>
              </div>
            </div>

            <div className="space-y-5 px-5 pb-5 pt-4">
              <p className="text-sm text-slate-300">{demo.shortDescription}</p>

              <ul className="space-y-2 text-sm text-slate-200">
                {demo.features.map((feature) => (
                  <li key={`${demo.name}-${feature}`} className="flex gap-2">
                    <span className="text-cyan-300">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-3 pt-1">
                <Button
                  asChild
                  className="w-full bg-fuchsia-700 hover:bg-fuchsia-950"
                  size="sm"
                >
                  <Link
                    href={demo.href}
                    onClick={(event) => event.stopPropagation()}
                  >
                    Ver Demo
                  </Link>
                </Button>

                <Button
                  asChild
                  size="sm"
                  className="w-full bg-indigo-700 hover:bg-indigo-950"
                >
                  <a
                    href={buildWhatsappLink(demo.name)}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(event) => event.stopPropagation()}
                  >
                    Quiero una web así
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-16 rounded-2xl border border-cyan-400/30 bg-linear-to-r from-cyan-500/12 to-blue-500/12 p-8 text-center shadow-[0_16px_50px_rgba(15,23,42,0.45)]">
        <h3 className="text-2xl font-semibold text-white md:text-3xl">
          ¿Quieres una web como estas?
        </h3>
        <p className="mx-auto mt-3 max-w-2xl text-slate-300">
          Te diseñamos una página a medida con estructura de venta, branding
          sólido y enfoque de resultados para tu negocio.
        </p>
        <Button
          asChild
          size="lg"
          className="mt-6 min-w-64 text-base bg-cyan-600 hover:bg-cyan-700"
        >
          <a href={siteBanner.whatsappUrl} target="_blank" rel="noreferrer">
            Cotizar por WhatsApp
          </a>
        </Button>
      </div>

      {activeDemo ? (
        <div
          className="fixed inset-0 z-100 flex items-end justify-center bg-slate-950/75 p-4 md:items-center"
          onClick={() => setActiveDemo(null)}
        >
          <div
            className="w-full max-w-2xl rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative h-52 w-full overflow-hidden rounded-t-2xl">
              <Image
                src={activeDemo.image}
                alt={activeDemo.name}
                fill
                sizes="(min-width: 768px) 700px, 100vw"
                className="object-cover"
                quality={75}
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-900/50 to-slate-950/10" />
              <button
                type="button"
                onClick={() => setActiveDemo(null)}
                className="absolute right-3 top-3 rounded-md bg-slate-950/70 px-2.5 py-1 text-sm text-slate-100 transition hover:bg-slate-800"
                aria-label="Cerrar detalle"
              >
                Cerrar
              </button>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300/90">
                  {activeDemo.category}
                </p>
                <p className="mt-1 text-2xl font-semibold text-white">
                  {activeDemo.name}
                </p>
              </div>
            </div>

            <div className="space-y-5 p-6">
              <p className="text-slate-300">{activeDemo.longDescription}</p>

              <ul className="space-y-2 text-sm text-slate-200">
                {activeDemo.features.map((feature) => (
                  <li key={`modal-${activeDemo.name}-${feature}`}>
                    • {feature}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <Button asChild className="flex-1">
                  <Link href={activeDemo.href}>Abrir demo</Link>
                </Button>
                <Button asChild variant="outline" className="flex-1">
                  <a
                    href={buildWhatsappLink(activeDemo.name)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Cotizar por WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </Section>
  );
}
