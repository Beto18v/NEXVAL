import Image from "next/image";
import type { Metadata } from "next";
import type { IconType } from "react-icons";
import {
  FaBone,
  FaInstagram,
  FaMapMarkerAlt,
  FaMotorcycle,
  FaPills,
  FaShippingFast,
  FaStar,
  FaWhatsapp,
} from "react-icons/fa";
import { GiDogBowl } from "react-icons/gi";

const business = {
  name: "Tienda Pets",
  category: "Tienda de productos para mascotas en Bogota",
  headline:
    "Productos para mascotas en Bogota con atencion rapida por WhatsApp",
  supportingLine:
    "Alimentos, accesorios, medicamentos, domicilios en Bogota y envios nacionales contra entrega.",
  description:
    "Tienda Pets facilita la compra de productos para mascotas con respuesta agil por WhatsApp, ubicacion fisica clara y opciones de entrega para clientes en Bogota y otras ciudades.",
  instagramUrl: "https://www.instagram.com/tiendapets_col/",
  instagramUser: "@tiendapets_col",
  whatsappNumber: "316 482 2444",
  whatsappUrl:
    "https://wa.me/573164822444?text=Hola%20Tienda%20Pets%2C%20quiero%20informaci%C3%B3n%20sobre%20sus%20productos",
  mapsUrl:
    "https://www.google.com/maps/place/Tienda+Pets/@4.6483941,-74.0886246,14z/data=!4m11!1m3!2m2!1spets!6e6!3m6!1s0x8e3f9b193ac318bf:0x65d41b88ed84d792!8m2!3d4.648387!4d-74.0887896!15sCgRwZXRzWgYiBHBldHOSARBwZXRfc3VwcGx5X3N0b3Jl4AEA!16s%2Fg%2F11y464nj5v?entry=ttu&g_ep=EgoyMDI2MDMxNS4wIKXMDSoASAFQAw%3D%3D",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=4.648387,-74.0887896&z=15&output=embed",
  primaryAddress: "Cra 54 #46-44 Local 3 (La Esmeralda), Bogota, Colombia",
  secondaryAddress: "Calle 57 #57-10 (Pablo Sexto), Bogota, Colombia",
} as const;

const navigation = [
  { label: "Servicios", href: "#servicios" },
  { label: "Galeria", href: "#galeria" },
  { label: "Ubicacion", href: "#ubicacion" },
  { label: "Contacto", href: "#cta-final" },
] as const;

const heroCards = [
  {
    title: "WhatsApp directo",
    description:
      "Un canal claro para consultar disponibilidad, coordinar pedidos y resolver compras sin vueltas.",
  },
  {
    title: "Dos puntos de atencion",
    description:
      "Direcciones visibles para clientes que prefieren comprar cerca o ubicar la tienda rapido.",
  },
  {
    title: "Cobertura comercial",
    description:
      "Domicilios en Bogota y envios nacionales contra entrega para ampliar alcance.",
  },
] as const;

const services: Array<{
  icon: IconType;
  title: string;
  description: string;
}> = [
  {
    icon: GiDogBowl,
    title: "Alimentos para mascotas",
    description:
      "Compra alimentos para mascotas con atencion rapida por WhatsApp para confirmar pedido, entrega o visita a tienda.",
  },
  {
    icon: FaBone,
    title: "Accesorios",
    description:
      "Una categoria clave para clientes que buscan complementar la compra con productos utiles para el dia a dia de su mascota.",
  },
  {
    icon: FaPills,
    title: "Medicamentos",
    description:
      "Consulta por medicamentos y recibe respuesta directa para avanzar la compra con mas rapidez y mejor orientacion comercial.",
  },
  {
    icon: FaMotorcycle,
    title: "Domicilios en Bogota",
    description:
      "Ideal para pedidos recurrentes o compras urgentes sin salir de casa, con coordinacion directa por WhatsApp.",
  },
  {
    icon: FaShippingFast,
    title: "Envios nacionales / contra entrega",
    description:
      "Una opcion comercial valiosa para vender fuera de Bogota y facilitar el cierre de pedidos en otras zonas.",
  },
];

const galleryImages = [
  {
    src: "/images/tienda-pets/fachada.jpg",
    alt: "Fachada de Tienda Pets en Bogota",
    title: "Fachada y punto de atencion",
    description:
      "Una imagen que ayuda a ubicar el negocio y a reforzar confianza desde el primer vistazo.",
  },
  {
    src: "/images/tienda-pets/productos.jpg",
    alt: "Productos para mascotas en Tienda Pets",
    title: "Inventario y categorias visibles",
    description:
      "Contenido visual pensado para mostrar variedad y facilitar decisiones de compra.",
  },
  {
    src: "/images/tienda-pets/pet1.jpg",
    alt: "Mascota en Tienda Pets",
    title: "Una marca cercana",
    description:
      "El tono visual transmite un negocio local amable, confiable y enfocado en atencion.",
  },
  {
    src: "/images/tienda-pets/pet2.jpg",
    alt: "Mascota junto a productos de Tienda Pets",
    title: "Contenido que conecta",
    description:
      "Fotos del negocio y de mascotas ayudan a vender mejor la experiencia y la relacion con clientes.",
  },
] as const;

const reviews = [
  {
    name: "Laura Gomez",
    text: "Muy buen servicio, lleve a mi perrito a peluqueria y quedo hermoso. Ademas tienen buena variedad de alimentos y precios accesibles. Super recomendados.",
    source: "Google Maps",
    rating: 5,
  },
  {
    name: "Carlos Rodriguez",
    text: "Siempre compro el concentrado aqui. Me gusta porque atienden rapido y por WhatsApp responden de una. Tambien hacen domicilios y eso ayuda mucho.",
    source: "Google Maps",
    rating: 5,
  },
  {
    name: "Andrea Martinez",
    text: "Tienen de todo para las mascotas, desde comida hasta accesorios. La atencion es muy amable y se nota que conocen bien los productos.",
    source: "Google Maps",
    rating: 4,
  },
] as const;

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: business.name,
  description: business.description,
  telephone: "+573164822444",
  image: galleryImages.map((image) => image.src),
  address: {
    "@type": "PostalAddress",
    streetAddress: business.primaryAddress,
    addressLocality: "Bogota",
    addressCountry: "CO",
  },
  sameAs: [business.instagramUrl, business.mapsUrl],
  hasMap: business.mapsUrl,
  areaServed: ["Bogota", "Colombia"],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+573164822444",
    contactType: "customer service",
    availableLanguage: ["Spanish"],
  },
  knowsAbout: [
    "Alimentos para mascotas",
    "Accesorios",
    "Medicamentos",
    "Domicilios en Bogota",
    "Envios nacionales contra entrega",
  ],
};

const primaryButtonClass =
  "inline-flex items-center justify-center gap-2 rounded-full bg-[#22C55E] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#22C55E]/25 transition hover:-translate-y-0.5 hover:bg-[#16A34A] focus:outline-none focus:ring-2 focus:ring-[#22C55E] focus:ring-offset-2";

const secondaryButtonClass =
  "inline-flex items-center justify-center gap-2 rounded-full border border-[#0EA5E9]/20 bg-white/90 px-6 py-3.5 text-sm font-semibold text-[#0F172A] shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-[#0EA5E9]/40 hover:bg-white";

export const metadata: Metadata = {
  title: "Tienda Pets | Productos para mascotas en Bogota",
  description:
    "Tienda Pets en Bogota: alimentos, accesorios, medicamentos, domicilios en Bogota, envios nacionales contra entrega y atencion directa por WhatsApp.",
  keywords: [
    "Tienda Pets",
    "tienda de mascotas en Bogota",
    "productos para mascotas en Bogota",
    "alimentos para mascotas en Bogota",
    "medicamentos para mascotas en Bogota",
    "domicilios para mascotas en Bogota",
    "envios nacionales contra entrega mascotas",
  ],
  openGraph: {
    title: "Tienda Pets | Productos para mascotas en Bogota",
    description:
      "Alimentos, accesorios, medicamentos, domicilios en Bogota y atencion rapida por WhatsApp.",
    type: "website",
    locale: "es_CO",
    siteName: "Tienda Pets",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tienda Pets | Productos para mascotas en Bogota",
    description:
      "Atencion por WhatsApp, domicilios en Bogota y envios nacionales contra entrega.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TiendaPetsPage() {
  return (
    <>
      <style>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
        {/* Header */}
        <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
            <a href="#inicio" className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <Image
                  src="/images/tienda-pets/logo.png"
                  alt="Logo de Tienda Pets"
                  fill
                  priority
                  sizes="48px"
                  className="object-contain p-1.5"
                />
              </div>
              <div>
                <p className="text-base font-black leading-none text-[#0F172A]">
                  {business.name}
                </p>
                <p className="mt-1 text-sm text-[#475569]">
                  Productos para mascotas en Bogota
                </p>
              </div>
            </a>

            <nav className="hidden items-center gap-6 lg:flex">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-[#475569] transition hover:text-[#0F172A]"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href={business.instagramUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Abrir Instagram de Tienda Pets"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#0EA5E9]/20 bg-white text-[#0EA5E9] shadow-sm transition hover:-translate-y-0.5 hover:border-[#0EA5E9]/40 sm:hidden"
              >
                <FaInstagram className="text-lg" />
              </a>
              <a
                href={business.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center justify-center gap-2 rounded-full border border-[#0EA5E9]/20 bg-white px-4 py-2.5 text-sm font-semibold text-[#0F172A] shadow-sm transition hover:-translate-y-0.5 hover:border-[#0EA5E9]/40"
              >
                <FaInstagram className="text-[#0EA5E9]" />
                Instagram
              </a>
              <a
                href={business.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center justify-center gap-2 rounded-full bg-[#22C55E] px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#22C55E]/20 transition hover:-translate-y-0.5 hover:bg-[#16A34A]"
              >
                <FaWhatsapp className="text-base" />
                WhatsApp
              </a>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section id="inicio" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(34,197,94,0.14),rgba(14,165,233,0.10),rgba(139,92,246,0.12))]" />
          <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#22C55E]/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#8B5CF6]/18 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16">
            <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <span className="inline-flex rounded-full border border-[#22C55E]/20 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#15803D] shadow-sm">
                  Tienda fisica + ventas por WhatsApp
                </span>

                <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight text-[#0F172A] sm:text-5xl lg:text-6xl">
                  {business.headline}
                </h1>

                <p className="mt-5 max-w-2xl text-xl font-semibold leading-8 text-[#0F172A]">
                  {business.supportingLine}
                </p>

                <p className="mt-5 max-w-2xl text-base leading-7 text-[#475569] sm:text-lg">
                  {business.description}
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={business.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={primaryButtonClass}
                  >
                    <FaWhatsapp className="text-base" />
                    Pedir por WhatsApp
                  </a>
                  <a
                    href={business.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={secondaryButtonClass}
                  >
                    <FaInstagram className="text-[#0EA5E9]" />
                    Ver Instagram
                  </a>
                  <a href="#ubicacion" className={secondaryButtonClass}>
                    <FaMapMarkerAlt className="text-[#8B5CF6]" />
                    Ver ubicacion
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="inline-flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-[#0F172A] shadow-sm ring-1 ring-slate-200">
                    Cra 54 #46-44 Local 3
                  </span>
                  <span className="inline-flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-[#0F172A] shadow-sm ring-1 ring-slate-200">
                    Calle 57 #57-10
                  </span>
                  <span className="inline-flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-[#0F172A] shadow-sm ring-1 ring-slate-200">
                    Envios nacionales / contra entrega
                  </span>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  {heroCards.map((card) => (
                    <div
                      key={card.title}
                      className="rounded-[24px] border border-white/80 bg-white/90 p-5 shadow-lg shadow-slate-200/50"
                    >
                      <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#0EA5E9]">
                        {card.title}
                      </p>
                      <p className="mt-3 text-sm leading-6 text-[#475569]">
                        {card.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute -right-4 -top-6 h-24 w-24 rounded-full bg-[#0EA5E9]/20 blur-2xl" />
                <div className="absolute -bottom-6 left-0 h-28 w-28 rounded-full bg-[#22C55E]/20 blur-2xl" />

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="relative overflow-hidden rounded-[32px] border border-white/80 bg-white shadow-2xl shadow-sky-200/40 sm:col-span-2">
                    <div className="relative h-[340px] sm:h-[400px]">
                      <Image
                        src="/images/tienda-pets/fachada.jpg"
                        alt="Fachada principal de Tienda Pets en Bogota"
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 560px"
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/35 to-transparent p-6 text-white">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/75">
                        Ubicacion visible
                      </p>
                      <p className="mt-2 text-2xl font-bold">
                        Tienda fisica con presencia clara desde la primera
                        pantalla
                      </p>
                      <p className="mt-2 max-w-lg text-sm leading-6 text-white/85">
                        El enfoque visual combina confianza local, direccion
                        facil de encontrar y un canal directo para pasar de la
                        visita al pedido.
                      </p>
                    </div>
                  </div>

                  <div className="relative overflow-hidden rounded-[28px] border border-white/80 bg-white shadow-lg shadow-slate-200/50">
                    <div className="relative h-52">
                      <Image
                        src="/images/tienda-pets/productos.jpg"
                        alt="Productos para mascotas disponibles en Tienda Pets"
                        fill
                        sizes="(max-width: 1024px) 100vw, 280px"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-sm font-semibold text-[#0F172A]">
                        Compra mas clara
                      </p>
                      <p className="mt-1 text-sm leading-6 text-[#475569]">
                        Fotos utiles para mostrar categorias y facilitar
                        contacto.
                      </p>
                    </div>
                  </div>

                  <div className="relative overflow-hidden rounded-[28px] border border-white/80 bg-white shadow-lg shadow-slate-200/50">
                    <div className="relative h-52">
                      <Image
                        src="/images/tienda-pets/pet1.jpg"
                        alt="Mascota en Tienda Pets"
                        fill
                        sizes="(max-width: 1024px) 100vw, 280px"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-sm font-semibold text-[#0F172A]">
                        Una marca cercana
                      </p>
                      <p className="mt-1 text-sm leading-6 text-[#475569]">
                        El tono visual conecta mejor con clientes de negocio
                        local.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Servicios */}
        <section id="servicios" className="scroll-mt-20 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-flex rounded-full bg-[#E0F2FE] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#0369A1]">
                Servicios
              </span>
              <h2 className="mt-5 text-3xl font-black text-[#0F172A] sm:text-4xl">
                Categorias visibles para que el cliente entienda rapido que
                puede pedir
              </h2>
              <p className="mt-4 text-base leading-7 text-[#475569]">
                La presentacion esta orientada a negocio real: explicar que
                vende Tienda Pets, facilitar la decision y llevar al usuario al
                canal que convierte mejor.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <article
                    key={service.title}
                    className="group rounded-[28px] bg-white p-6 shadow-lg shadow-slate-200/50 ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(34,197,94,0.16),rgba(14,165,233,0.16),rgba(139,92,246,0.16))] text-[#0F172A]">
                      <Icon className="text-2xl" />
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-[#0F172A]">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#475569]">
                      {service.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Galeria */}
        <section
          id="galeria"
          className="scroll-mt-20 border-y border-slate-200/70 bg-white/60 py-16 sm:py-20"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <span className="inline-flex rounded-full bg-[#F3E8FF] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#7C3AED]">
                  Galeria
                </span>
                <h2 className="mt-5 text-3xl font-black text-[#0F172A] sm:text-4xl">
                  Fotos del negocio para reforzar confianza y facilitar
                  conversion
                </h2>
                <p className="mt-4 text-base leading-7 text-[#475569]">
                  La galeria queda organizada con rutas locales y texto
                  comercial claro para que sea sencillo reemplazar imagenes sin
                  tocar otros archivos del proyecto.
                </p>
              </div>

              <a
                href={business.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className={secondaryButtonClass}
              >
                <FaInstagram className="text-[#0EA5E9]" />
                {business.instagramUser}
              </a>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {galleryImages.map((image) => (
                <article
                  key={image.src}
                  className="overflow-hidden rounded-[30px] bg-white shadow-lg shadow-slate-200/50 ring-1 ring-slate-100"
                >
                  <div className="relative h-72">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-lg font-bold text-[#0F172A]">
                      {image.title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[#475569]">
                      {image.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Resenas */}
        <section id="resenas" className="scroll-mt-20 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-flex rounded-full bg-[#FFF7ED] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#C2410C]">
                Resenas
              </span>
              <h2 className="mt-5 text-3xl font-black text-[#0F172A] sm:text-4xl">
                Lo que destacan clientes sobre Tienda Pets
              </h2>
              <p className="mt-4 text-base leading-7 text-[#475569]">
                Estas resenas refuerzan rapidez en la atencion, variedad de
                productos y una experiencia cercana para clientes que buscan una
                tienda de mascotas confiable en Bogota.
              </p>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {reviews.map((review) => (
                <article
                  key={review.name}
                  className="rounded-[28px] bg-white p-6 shadow-lg shadow-slate-200/50 ring-1 ring-slate-100"
                >
                  <div className="flex items-center gap-1 text-[#F59E0B]">
                    {Array.from({ length: review.rating }).map((_, index) => (
                      <FaStar
                        key={`${review.name}-${index}`}
                        className="text-sm"
                      />
                    ))}
                  </div>

                  <p className="mt-5 text-lg font-bold text-[#0F172A]">
                    {review.name}
                  </p>
                  <p className="mt-1 text-sm font-medium text-[#0EA5E9]">
                    {review.source}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-[#475569]">
                    {review.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Ubicacion */}
        <section
          id="ubicacion"
          className="scroll-mt-20 border-y border-slate-200/70 bg-white/60 py-16 sm:py-20"
        >
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
            <div>
              <span className="inline-flex rounded-full bg-[#E0F2FE] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#0369A1]">
                Ubicacion
              </span>
              <h2 className="mt-5 text-3xl font-black text-[#0F172A] sm:text-4xl">
                Direcciones claras para comprar en tienda o pedir con mas
                confianza
              </h2>
              <p className="mt-4 text-base leading-7 text-[#475569]">
                La ubicacion no queda escondida: se muestra con direccion
                principal, sede adicional, mapa embebido y botones directos para
                abrir ruta o escribir por WhatsApp.
              </p>

              <div className="mt-8 space-y-4">
                <div className="rounded-[28px] bg-white p-6 shadow-lg shadow-slate-200/50 ring-1 ring-slate-100">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8B5CF6]">
                    Direccion principal
                  </p>
                  <address className="mt-3 not-italic text-base font-semibold leading-7 text-[#0F172A]">
                    {business.primaryAddress}
                  </address>
                </div>

                <div className="rounded-[28px] bg-white p-6 shadow-lg shadow-slate-200/50 ring-1 ring-slate-100">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0EA5E9]">
                    Sede adicional
                  </p>
                  <address className="mt-3 not-italic text-base font-semibold leading-7 text-[#0F172A]">
                    {business.secondaryAddress}
                  </address>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={business.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={secondaryButtonClass}
                >
                  <FaMapMarkerAlt className="text-[#0EA5E9]" />
                  Abrir ubicacion
                </a>
                <a
                  href={business.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={primaryButtonClass}
                >
                  <FaWhatsapp className="text-base" />
                  Preguntar por WhatsApp
                </a>
              </div>
            </div>

            <div className="mx-auto h-[420px] w-full self-center overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-xl shadow-slate-200/50 sm:h-[460px] lg:max-w-[620px]">
              <iframe
                title="Mapa de Tienda Pets"
                src={business.mapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block h-full w-full border-0"
              />
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section id="cta-final" className="scroll-mt-20 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-[36px] bg-[linear-gradient(135deg,#0F172A_0%,#0EA5E9_55%,#22C55E_100%)] px-6 py-10 text-white shadow-2xl shadow-sky-200/30 sm:px-10 sm:py-14">
              <div className="absolute -right-10 top-0 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
              <div className="absolute -bottom-10 left-0 h-48 w-48 rounded-full bg-[#8B5CF6]/25 blur-3xl" />

              <div className="relative max-w-3xl">
                <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
                  Contacto directo
                </span>
                <h2 className="mt-5 text-3xl font-black sm:text-4xl">
                  Habla con Tienda Pets por WhatsApp y recibe atencion rapida
                </h2>
                <p className="mt-4 text-base leading-7 text-white/85">
                  Una pagina clara, local y orientada a conversion funciona
                  mejor cuando deja visible el siguiente paso: escribir,
                  preguntar y cerrar el pedido.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={business.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#0F172A] shadow-lg transition hover:-translate-y-0.5"
                  >
                    <FaWhatsapp className="text-[#22C55E]" />
                    Escribir ahora por WhatsApp
                  </a>
                  <a
                    href={business.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15"
                  >
                    <FaInstagram />
                    Ver Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-200/70 bg-white py-10">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
            <div>
              <p className="text-lg font-black text-[#0F172A]">
                {business.name}
              </p>
              <p className="mt-2 text-sm font-medium text-[#0EA5E9]">
                {business.category}
              </p>
              <p className="mt-3 max-w-xl text-sm leading-6 text-[#475569]">
                Alimentos, accesorios, medicamentos, domicilios en Bogota y
                atencion por WhatsApp para resolver compras de forma mas rapida.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8B5CF6]">
                  Contacto
                </p>
                <div className="mt-3 space-y-2 text-sm text-[#475569]">
                  <p>
                    <a
                      href={business.instagramUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 font-semibold text-[#0F172A] underline decoration-[#0EA5E9]/40 underline-offset-4"
                    >
                      <FaInstagram className="text-[#0EA5E9]" />
                      {business.instagramUser}
                    </a>
                  </p>
                  <p>
                    <a
                      href={business.whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 font-semibold text-[#0F172A] underline decoration-[#22C55E]/40 underline-offset-4"
                    >
                      <FaWhatsapp className="text-[#22C55E]" />
                      {business.whatsappNumber}
                    </a>
                  </p>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0EA5E9]">
                  Direcciones
                </p>
                <div className="mt-3 space-y-2 text-sm leading-6 text-[#475569]">
                  <p>{business.primaryAddress}</p>
                  <p>{business.secondaryAddress}</p>
                </div>
              </div>
            </div>
          </div>
        </footer>

        {/* Boton flotante de WhatsApp */}
        <a
          href={business.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Hablar por WhatsApp con Tienda Pets"
          className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-3 rounded-full bg-[#22C55E] px-3 py-3 text-sm font-semibold text-white shadow-2xl shadow-[#22C55E]/35 transition hover:-translate-y-0.5 hover:bg-[#16A34A] sm:bottom-6 sm:right-6"
        >
          <FaWhatsapp className="h-6 w-6" />
        </a>
      </main>
    </>
  );
}
