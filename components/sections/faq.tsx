import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";

const faqs = [
  {
    question: "¿Cuánto tarda la entrega?",
    answer:
      "Depende del plan y de la rapidez con la que recibamos tu información. En promedio, Start se entrega más rápido y Pro/Elite requieren más iteraciones estratégicas.",
  },
  {
    question: "¿Incluye dominio y hosting?",
    answer:
      "No están incluidos por defecto para que mantengas el control total de tus cuentas, pero podemos gestionarlo por ti como extra opcional.",
  },
  {
    question: "¿Puedo pagar por cuotas?",
    answer:
      "Sí. Podemos definir un esquema por etapas del proyecto para que avances con comodidad y claridad.",
  },
  {
    question: "¿Qué pasa si quiero agregar más secciones?",
    answer:
      "Lo podemos ampliar en cualquier momento. Te compartimos una propuesta adicional según el alcance nuevo.",
  },
  {
    question: "¿Puedo pedir cambios después de la entrega?",
    answer:
      "Sí. Cada plan incluye rondas de cambios y, luego de eso, puedes solicitar ajustes adicionales o contratar mantenimiento.",
  },
  {
    question: "¿Incluye posicionamiento en Google?",
    answer:
      "Todos los planes salen con una base optimizada. En Pro trabajamos SEO básico y en Elite una optimización SEO avanzada inicial.",
  },
];

export function Faq() {
  return (
    <Section
      id="faq"
      className="border-slate-800/80 bg-slate-900 text-slate-100]"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-medium uppercase tracking-wider text-cyan-300">
          Preguntas frecuentes
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance text-slate-100 md:text-4xl">
          Resolvemos tus dudas antes de empezar
        </h2>
        <p className="mt-4 text-slate-300/90">
          Estas respuestas te ayudan a tomar una decisión informada y segura.
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-6xl gap-4 md:grid-cols-2">
        {faqs.map((faq) => (
          <Card
            key={faq.question}
            className="rounded-lg border border-cyan-400/50 bg-slate-900/60 p-6"
          >
            <h3 className="text-base font-semibold text-slate-100">
              {faq.question}
            </h3>
            <p className="mt-2 text-sm text-slate-300/85">{faq.answer}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
