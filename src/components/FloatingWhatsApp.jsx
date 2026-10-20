import WhatsAppIcon from "./WhatsAppIcon";
import { whatsappUrl } from "../data/school";

export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition hover:scale-110 hover:bg-green-600 active:scale-95"
    >
      <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-40 motion-safe:animate-ping" />
      <WhatsAppIcon className="relative h-7 w-7" />
    </a>
  );
}
