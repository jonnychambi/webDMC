export default function CTABand() {
  return (
    <section className="bg-brand-900 py-12 text-white">
      <div className="container-custom flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
        <div>
          <p className="text-2xl font-bold tracking-tight">Empieza a construir tu siguiente nivel profesional hoy</p>
          <p className="mt-2 text-sm text-blue-100">Asesoría personalizada para elegir la ruta que mejor se adapta a tu perfil y objetivos.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href="#formulario" className="btn-primary bg-white text-brand-900 hover:bg-slate-100">
            Solicitar información
          </a>
          <a
            href="https://wa.me/51999999999?text=Hola%20DMC%2C%20quiero%20asesor%C3%ADa%20sobre%20sus%20programas"
            className="btn-secondary border-blue-200 bg-brand-900 text-white hover:bg-brand-700"
          >
            Hablar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
