export default function FinalCTASection() {
  return (
    <section className="bg-white py-16">
      <div className="container-custom rounded-3xl border border-slate-200 bg-gradient-to-br from-brand-900 to-brand-700 px-6 py-12 text-center text-white sm:px-10">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Transforma tu carrera en Data & AI</h2>
        <p className="mx-auto mt-3 max-w-2xl text-blue-100">
          El mejor momento para desarrollar habilidades de alto impacto es ahora.
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <a href="#formulario" className="btn-primary bg-white text-brand-900 hover:bg-slate-100">
            Quiero asesoría
          </a>
          <a href="#rutas" className="btn-secondary border-blue-200 bg-brand-800 text-white hover:bg-brand-700">
            Ver rutas
          </a>
        </div>
      </div>
    </section>
  );
}
