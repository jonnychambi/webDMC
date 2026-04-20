export default function WhatsAppStickyButton() {
  return (
    <a
      href="https://wa.me/51999999999?text=Hola%20DMC%2C%20quiero%20resolver%20mis%20dudas%20sobre%20los%20programas"
      className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
      aria-label="Resuelve tus dudas por WhatsApp"
    >
      <span aria-hidden="true">💬</span>
      <span className="hidden sm:inline">Habla con un asesor</span>
    </a>
  );
}
