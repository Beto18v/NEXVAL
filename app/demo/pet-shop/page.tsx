import Image from "next/image";
import type { Metadata } from "next";
import { FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

const business = {
  name: "PET SHOP",
  subtitle: "Peluqueria canina y productos para mascotas",
  description:
    "Peluqueria canina, alimentos y productos esenciales para mascotas con atencion cercana y contacto rapido por WhatsApp.",
  whatsappNumber: "314 480 1167",
  whatsappUrl:
    "https://wa.me/573144801167?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20sus%20servicios%20y%20productos",
  cityLabel: "Bogota, Colombia",
  address: "Cl. 65 Sur #81c23, Bogota",
  mapsReferenceUrl:
    "https://www.google.com/maps/place/PET+SHOP/@4.6113523,-74.1873041,19z/data=!4m11!1m3!2m2!1spets!6e6!3m6!1s0x8e3f9fdd420d8f25:0xffd7c980e664aba2!8m2!3d4.6112796!4d-74.1874076!15sCgRwZXRzWgYiBHBldHOSAQlwZXRfc3RvcmXgAQA!16s%2Fg%2F11nmlz3p_j?entry=ttu&g_ep=EgoyMDI2MDMxNS4wIKXMDSoASAFQAw%3D%3D",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=4.6112796,-74.1874076&z=18&output=embed",
} as const;

const navigation = [
  { label: "Servicios", href: "#servicios" },
  { label: "Galeria", href: "#galeria" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Contacto", href: "#contacto" },
] as const;

const heroBadges = [
  "Atencion por WhatsApp",
  "Peluqueria canina",
  "Productos para el dia a dia",
] as const;

const services = [
  {
    emoji: "PC",
    title: "Peluqueria canina",
    description:
      "Servicio pensado para quienes buscan mantener a su perrito limpio, arreglado y bien atendido con un trato cercano.",
  },
  {
    emoji: "AL",
    title: "Alimentos para perros y gatos",
    description:
      "Una categoria clave para compras frecuentes, reposicion rapida y pedidos practicos por WhatsApp.",
  },
  {
    emoji: "AC",
    title: "Accesorios para mascotas",
    description:
      "Productos utiles para complementar la compra diaria con opciones sencillas y faciles de consultar.",
  },
  {
    emoji: "CU",
    title: "Productos de cuidado",
    description:
      "Elementos basicos para higiene y bienestar de tu mascota, presentados de forma clara y comercial.",
  },
  {
    emoji: "WA",
    title: "Atencion por WhatsApp",
    description:
      "Ideal para preguntar por servicios, validar productos disponibles y concretar pedidos sin complicaciones.",
  },
] as const;

const galleryImages = [
  {
    src: "/images/pet-shop/fachada.jpg",
    alt: "Fachada principal de PET SHOP",
    title: "Fachada principal",
    description:
      "La presencia fisica del negocio transmite cercania y ayuda a generar confianza desde la primera visita.",
  },
  {
    src: "/images/pet-shop/fachada2.jpeg",
    alt: "Otra vista de la fachada de PET SHOP",
    title: "Negocio visible y local",
    description:
      "Una presentacion directa para dejar claro que se trata de un pet shop real, cercano y facil de ubicar.",
  },
  {
    src: "/images/pet-shop/alimentos.jpeg",
    alt: "Productos de alimento para mascotas en PET SHOP",
    title: "Productos para compra diaria",
    description:
      "Contenido visual util para mostrar variedad y apoyar decisiones de compra sin sobreexplicar.",
  },
  {
    src: "/images/pet-shop/alimentos2.jpeg",
    alt: "Mas productos para mascotas en PET SHOP",
    title: "Apoyo para pedidos por WhatsApp",
    description:
      "Fotos listas para reforzar consultas, promociones y pedidos rapidos desde el celular.",
  },
] as const;

const benefits = [
  {
    number: "01",
    title: "Atencion cercana",
    description:
      "La pagina se siente de negocio local real, con un tono simple y directo que ayuda a generar confianza.",
  },
  {
    number: "02",
    title: "Productos para el dia a dia",
    description:
      "Se resaltan servicios y categorias que una familia con mascota necesita con frecuencia y quiere resolver rapido.",
  },
  {
    number: "03",
    title: "Contacto rapido por WhatsApp",
    description:
      "El CTA principal esta visible desde arriba y se repite al final para no perder oportunidades de contacto.",
  },
] as const;

const reviews = [
  {
    name: "Diana Castillo",
    text: "Llevo a mi perrito a peluqueria y siempre queda muy bien. Son muy cuidadosos y el precio es justo. Ademas tienen todo lo basico para mascotas.",
    source: "Google Maps",
    rating: 5,
  },
  {
    name: "Jhon Perez",
    text: "Buen lugar para comprar concentrado y accesorios. Me gusta porque es cerca y atienden rapido, tambien responden por WhatsApp sin problema.",
    source: "Google Maps",
    rating: 4,
  },
  {
    name: "Sandra Mendez",
    text: "Excelente atencion, muy amables. Tienen variedad de productos y la peluqueria canina es muy buena, mi perrita quedo hermosa.",
    source: "Google Maps",
    rating: 5,
  },
] as const;

const primaryButtonClass =
  "inline-flex items-center justify-center gap-2 rounded-full bg-[#F97316] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#F97316]/25 transition hover:-translate-y-0.5 hover:bg-[#EA580C]";

const secondaryButtonClass =
  "inline-flex items-center justify-center gap-2 rounded-full border border-[#1E3A8A]/15 bg-white px-6 py-3.5 text-sm font-semibold text-[#1F2937] shadow-sm transition hover:-translate-y-0.5 hover:border-[#1E3A8A]/30";

export const metadata: Metadata = {
  title: "PET SHOP | Peluqueria canina y productos para mascotas",
  description:
    "PET SHOP en Bogota: peluqueria canina, alimentos, accesorios y atencion por WhatsApp para mascotas.",
  keywords: [
    "pet shop",
    "peluqueria canina",
    "productos para mascotas",
    "alimentos para mascotas",
    "accesorios para mascotas",
    "whatsapp pet shop",
  ],
  openGraph: {
    title: "PET SHOP | Peluqueria canina y productos para mascotas",
    description:
      "Cuidado, alimentos y accesorios para tu mascota con atencion cercana por WhatsApp.",
    type: "website",
    locale: "es_CO",
    siteName: "PET SHOP",
  },
  twitter: {
    card: "summary_large_image",
    title: "PET SHOP | Peluqueria canina y productos para mascotas",
    description:
      "Peluqueria canina, productos para mascotas y contacto rapido por WhatsApp.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PetShopPage() {
  return (
    <main className="min-h-screen bg-[#FFF7ED] text-[#1F2937]">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(249,115,22,0.18),rgba(250,204,21,0.16),rgba(255,247,237,0.92))]" />
        <div className="absolute -left-10 top-10 h-64 w-64 rounded-full bg-[#F97316]/20 blur-3xl" />
        <div className="absolute right-0 top-16 h-72 w-72 rounded-full bg-[#FACC15]/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-5 sm:px-6 lg:px-8 lg:pb-24 lg:pt-8">
          <div className="rounded-[28px] border border-white/80 bg-white/80 px-4 py-4 shadow-lg shadow-orange-100/60 backdrop-blur">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#1E3A8A]">
                  PET SHOP
                </p>
                <p className="mt-2 text-sm text-[#6B7280]">
                  Peluqueria canina y productos para mascotas
                </p>
              </div>

              <nav className="hidden items-center gap-5 lg:flex">
                {navigation.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-sm font-medium text-[#6B7280] transition hover:text-[#1F2937]"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <a
                href={business.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className={`${primaryButtonClass} px-5 py-3`}
              >
                <FaWhatsapp className="text-base" />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-[40px] border border-[#FED7AA] bg-white shadow-2xl shadow-orange-100/70">
            <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
              <div className="relative border-b border-[#FED7AA] bg-[linear-gradient(180deg,#FFF7ED_0%,#FFEDD5_100%)] p-7 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
                <div className="inline-flex rounded-full bg-[#1E3A8A] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-sm">
                  Negocio local para tu mascota
                </div>

                <div className="mt-8 rounded-[32px] border border-[#FDBA74] bg-white px-6 py-6 shadow-lg shadow-orange-100/60">
                  <h1 className="mt-4 text-5xl font-black uppercase leading-none text-[#1F2937] sm:text-6xl lg:text-7xl">
                    {business.name}
                  </h1>
                  <p className="mt-4 max-w-xl text-xl font-bold leading-8 text-[#F97316] sm:text-2xl">
                    {business.subtitle}
                  </p>
                </div>

                <p className="mt-8 max-w-2xl text-base leading-8 text-[#6B7280] sm:text-lg">
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
                    Escribenos por WhatsApp
                  </a>
                  <a href="#servicios" className={secondaryButtonClass}>
                    Ver servicios
                  </a>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {heroBadges.map((badge) => (
                    <div
                      key={badge}
                      className="rounded-[22px] border border-[#FED7AA] bg-white px-4 py-4 shadow-sm"
                    >
                      <p className="text-sm font-semibold leading-6 text-[#1F2937]">
                        {badge}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-[26px] border border-[#FDE68A] bg-[#FFFAF0] p-5 shadow-sm">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E3A8A]">
                        WhatsApp
                      </p>
                      <p className="mt-2 text-lg font-black text-[#1F2937]">
                        {business.whatsappNumber}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E3A8A]">
                        Direccion
                      </p>
                      <p className="mt-2 text-sm font-semibold leading-6 text-[#1F2937]">
                        {business.address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#FFF4E8] p-5 sm:p-6 lg:p-8">
                <div className="rounded-[30px] border border-[#FED7AA] bg-white p-3 shadow-lg shadow-orange-100/60">
                  <div className="relative h-[280px] overflow-hidden rounded-[24px] sm:h-[340px]">
                    <Image
                      src="/images/pet-shop/fachada.jpg"
                      alt="Fachada de PET SHOP"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 520px"
                      className="object-cover"
                    />
                  </div>
                  <div className="grid gap-3 p-3 sm:grid-cols-[1.1fr_0.9fr]">
                    <div className="rounded-[22px] bg-[#FFF7ED] p-4">
                      <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E3A8A]">
                        Servicio cercano
                      </p>
                      <p className="mt-3 text-sm leading-7 text-[#6B7280]">
                        Un pet shop de barrio que mezcla peluqueria canina,
                        alimentos y atencion rapida sin pasos complicados.
                      </p>
                    </div>
                    <div className="rounded-[22px] bg-[#1E3A8A] p-4 text-white">
                      <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/80">
                        Ubicacion
                      </p>
                      <p className="mt-3 text-sm font-semibold leading-7 text-white">
                        Cl. 65 Sur #81c23
                        <br />
                        Bogota
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="overflow-hidden rounded-[24px] border border-[#FED7AA] bg-white shadow-md shadow-orange-100/50">
                    <div className="relative h-44">
                      <Image
                        src="/images/pet-shop/fachada2.jpeg"
                        alt="Otra vista de PET SHOP"
                        fill
                        sizes="(max-width: 1024px) 100vw, 260px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-[24px] border border-[#FED7AA] bg-white shadow-md shadow-orange-100/50">
                    <div className="relative h-44">
                      <Image
                        src="/images/pet-shop/alimentos.jpeg"
                        alt="Productos de PET SHOP"
                        fill
                        sizes="(max-width: 1024px) 100vw, 260px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre nosotros */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8">
          <div>
            <span className="inline-flex rounded-full bg-[#FDE68A] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#1E3A8A]">
              Sobre nosotros
            </span>
            <h2 className="mt-5 max-w-2xl text-3xl font-black text-[#1F2937] sm:text-4xl">
              Una pagina pensada para mostrar un pet shop cercano, util y facil
              de contactar
            </h2>
          </div>

          <div className="rounded-[28px] border border-[#F97316]/10 bg-white p-6 shadow-lg shadow-orange-100/60">
            <p className="text-base leading-8 text-[#6B7280]">
              PET SHOP presenta una oferta simple y comercial para familias que
              buscan peluqueria canina, alimento para mascotas, accesorios y
              productos basicos. El tono de la pagina evita verse frio o
              corporativo y prioriza la sensacion de negocio local real.
            </p>
            <p className="mt-4 text-base leading-8 text-[#6B7280]">
              La idea es que un cliente pueda entender rapido que hace el
              negocio, ver que existe fisicamente y pasar directo al WhatsApp
              para pedir informacion o resolver una compra.
            </p>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section
        id="servicios"
        className="border-y border-[#FED7AA] bg-white/70 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-[#FFEDD5] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#1E3A8A]">
              Servicios y categorias
            </span>
            <h2 className="mt-5 text-3xl font-black text-[#1F2937] sm:text-4xl">
              Todo lo necesario para presentar el negocio de forma clara
            </h2>
            <p className="mt-4 text-base leading-7 text-[#6B7280]">
              Estas tarjetas ayudan a explicar rapidamente que ofrece el negocio
              y por que vale la pena escribir por WhatsApp.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-[28px] border border-[#FED7AA] bg-white p-6 shadow-lg shadow-orange-100/60 transition hover:-translate-y-1"
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF7ED] text-sm font-black tracking-[0.18em] text-[#1E3A8A] shadow-sm">
                  {service.emoji}
                </div>
                <h3 className="mt-5 text-xl font-bold text-[#1F2937]">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#6B7280]">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section id="galeria" className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-[#FDE68A] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#1E3A8A]">
              Galeria del negocio
            </span>
            <h2 className="mt-5 text-3xl font-black text-[#1F2937] sm:text-4xl">
              Fachada, tienda y productos para que la pagina se sienta real
            </h2>
            <p className="mt-4 text-base leading-7 text-[#6B7280]">
              Las imagenes se dejaron organizadas en un array local para que sea
              sencillo reemplazarlas o agregar nuevas fotos del negocio luego.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-12 lg:items-stretch">
            <article className="flex h-full flex-col overflow-hidden rounded-[32px] border border-[#FED7AA] bg-white shadow-lg shadow-orange-100/60 lg:col-span-7">
              <div className="relative h-80 sm:h-96 lg:min-h-[430px] lg:flex-1">
                <Image
                  src={galleryImages[0].src}
                  alt={galleryImages[0].alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 700px"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <p className="text-lg font-bold text-[#1F2937]">
                  {galleryImages[0].title}
                </p>
                <p className="mt-2 text-sm leading-7 text-[#6B7280]">
                  {galleryImages[0].description}
                </p>
              </div>
            </article>

            <div className="grid gap-5 lg:col-span-5">
              {galleryImages.slice(1).map((image) => (
                <article
                  key={image.src}
                  className="overflow-hidden rounded-[28px] border border-[#FED7AA] bg-white shadow-lg shadow-orange-100/60"
                >
                  <div className="relative h-56">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 420px"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-base font-bold text-[#1F2937]">
                      {image.title}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[#6B7280]">
                      {image.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section id="beneficios" className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[36px] border border-[#FED7AA] bg-[linear-gradient(135deg,#FFF7ED_0%,#FFFFFF_45%,#FFEDD5_100%)] p-6 shadow-xl shadow-orange-100/60 sm:p-8 lg:p-10">
            <div className="max-w-3xl">
              <span className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#1E3A8A] shadow-sm">
                Beneficios visibles
              </span>
              <h2 className="mt-5 text-3xl font-black text-[#1F2937] sm:text-4xl">
                Una estructura sencilla para vender confianza y cercania
              </h2>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {benefits.map((benefit) => (
                <article
                  key={benefit.number}
                  className="rounded-[28px] border border-[#FED7AA] bg-white p-6 shadow-md shadow-orange-100/50"
                >
                  <p className="text-sm font-black uppercase tracking-[0.22em] text-[#F97316]">
                    {benefit.number}
                  </p>
                  <h3 className="mt-4 text-xl font-bold text-[#1F2937]">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#6B7280]">
                    {benefit.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resenas */}
      <section className="border-y border-[#FED7AA] bg-white/70 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-[#FFEDD5] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#1E3A8A]">
              Resenas
            </span>
            <h2 className="mt-5 text-3xl font-black text-[#1F2937] sm:text-4xl">
              Comentarios de clientes sobre el negocio
            </h2>
            <p className="mt-4 text-base leading-7 text-[#6B7280]">
              Una seccion pensada para reforzar confianza con experiencias
              positivas sobre la atencion, la peluqueria canina y los productos
              disponibles.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {reviews.map((review) => (
              <article
                key={review.name}
                className="rounded-[28px] border border-[#FED7AA] bg-white p-6 shadow-lg shadow-orange-100/60"
              >
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#F97316]">
                  Calificacion lista: {review.rating}/5
                </p>
                <p className="mt-5 text-lg font-bold text-[#1F2937]">
                  {review.name}
                </p>
                <p className="mt-1 text-sm font-medium text-[#1E3A8A]">
                  {review.source}
                </p>
                <p className="mt-4 text-sm leading-7 text-[#6B7280]">
                  {review.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto / ubicacion */}
      <section id="contacto" className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-8">
          <div>
            <span className="inline-flex rounded-full bg-[#FDE68A] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#1E3A8A]">
              Contacto y ubicacion
            </span>
            <h2 className="mt-5 text-3xl font-black text-[#1F2937] sm:text-4xl">
              Un bloque directo para escribir, preguntar y visitar
            </h2>
            <p className="mt-4 text-base leading-7 text-[#6B7280]">
              Aqui ya se muestra el punto de referencia del negocio con
              direccion clara, WhatsApp visible y mapa para facilitar visitas o
              consultas.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-[28px] border border-[#FED7AA] bg-white p-6 shadow-lg shadow-orange-100/60">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1E3A8A]">
                  WhatsApp
                </p>
                <p className="mt-3 text-2xl font-black text-[#1F2937]">
                  {business.whatsappNumber}
                </p>
                <p className="mt-2 text-sm leading-7 text-[#6B7280]">
                  Haz tu pedido o consulta por WhatsApp para recibir informacion
                  sobre productos y servicios.
                </p>
              </div>

              <div className="rounded-[28px] border border-[#FED7AA] bg-white p-6 shadow-lg shadow-orange-100/60">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1E3A8A]">
                  Direccion
                </p>
                <p className="mt-3 text-lg font-semibold text-[#1F2937]">
                  {business.address}
                </p>
                <p className="mt-2 text-sm leading-7 text-[#6B7280]">
                  Punto de referencia listo para que el cliente ubique el
                  negocio con mas facilidad.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={business.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className={primaryButtonClass}
              >
                <FaWhatsapp className="text-base" />
                Escribir por WhatsApp
              </a>
              <a
                href={business.mapsReferenceUrl}
                target="_blank"
                rel="noreferrer"
                className={secondaryButtonClass}
              >
                <FaMapMarkerAlt className="text-[#1E3A8A]" />
                Ver referencia de ubicacion
              </a>
            </div>
          </div>

          <div className="w-full self-center overflow-hidden rounded-[34px] border border-[#FED7AA] bg-white shadow-xl shadow-orange-100/60 lg:mx-auto lg:max-w-[620px]">
            <div className="border-b border-[#FED7AA] bg-[#FFF7ED] px-6 py-4">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E3A8A]">
                Ubicacion real
              </p>
              <p className="mt-2 text-sm font-semibold text-[#1F2937]">
                {business.address}, {business.cityLabel}
              </p>
            </div>
            <iframe
              title="Mapa de PET SHOP"
              src={business.mapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-[440px] w-full border-0 sm:h-[500px]"
            />
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="pb-16 pt-2 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[36px] bg-[linear-gradient(135deg,#F97316_0%,#FB923C_45%,#FACC15_100%)] px-6 py-10 text-white shadow-2xl shadow-orange-200/60 sm:px-10 sm:py-14">
            <div className="max-w-3xl">
              <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/85">
                CTA final
              </span>
              <h2 className="mt-5 text-3xl font-black sm:text-4xl">
                Escribenos por WhatsApp y conoce nuestros productos y servicios
              </h2>
              <p className="mt-4 text-base leading-7 text-white/90">
                Una llamada a la accion clara para cerrar la visita con el paso
                mas importante: hacer contacto directo con el negocio.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={business.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#1F2937] shadow-lg transition hover:-translate-y-0.5"
                >
                  <FaWhatsapp className="text-[#F97316]" />
                  Quiero informacion por WhatsApp
                </a>
                <a
                  href="#servicios"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/15"
                >
                  Ver servicios
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#FED7AA] bg-white py-10">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div>
            <p className="text-xl font-black uppercase tracking-[0.18em] text-[#1F2937]">
              {business.name}
            </p>
            <p className="mt-2 text-sm font-semibold text-[#F97316]">
              {business.subtitle}
            </p>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[#6B7280]">
              Peluqueria canina, productos para mascotas y atencion cercana por
              WhatsApp para resolver compras y consultas de forma practica.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1E3A8A]">
                Contacto
              </p>
              <div className="mt-3 space-y-2 text-sm leading-7 text-[#6B7280]">
                <p>WhatsApp: {business.whatsappNumber}</p>
                <p>{business.cityLabel}</p>
              </div>
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1E3A8A]">
                Ubicacion
              </p>
              <div className="mt-3 space-y-2 text-sm leading-7 text-[#6B7280]">
                <p>{business.address}</p>
                <p>{business.cityLabel}</p>
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
        aria-label="Hablar por WhatsApp con PET SHOP"
        className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-3 rounded-full bg-[#F97316] px-5 py-3 text-sm font-semibold text-white shadow-2xl shadow-[#F97316]/35 transition hover:-translate-y-0.5 hover:bg-[#EA580C] sm:bottom-6 sm:right-6"
      >
        <FaWhatsapp className="text-lg" />
        <span>WhatsApp</span>
      </a>
    </main>
  );
}
