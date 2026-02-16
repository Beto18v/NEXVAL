import { FaWhatsapp } from "react-icons/fa";

const whatsappNumber = "573142482943";
const message = encodeURIComponent(
  "Hola, vi tu página y quiero cotizar una página web.\n\nMi negocio es: \nCiudad: \nTengo WhatsApp Business: Sí/No\nTengo dominio: Sí/No\n\n¿Qué información adicional necesitas?",
);

export function WhatsappFloat() {
  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="
        fixed bottom-6 right-6 z-50
        w-15 h-15
        rounded-full bg-[#25D366]
        flex items-center justify-center
        shadow-lg hover:scale-110
        transition-transform
      "
    >
      <FaWhatsapp size={34} color="white" className="translate-y-px" />
    </a>
  );
}
