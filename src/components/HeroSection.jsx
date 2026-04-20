const trustItems = ['Docentes expertos', 'Casos reales', 'Comunidad activa', 'Programas aplicados al mercado'];

export default function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-white pb-16 pt-12 sm:pt-16 lg:pt-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-brand-100 blur-3xl" />
      </div>

      <div className="container-custom grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="animate-[fadeIn_.7s_ease-out] space-y-6">
          <span className="inline-flex rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
            Inicios próximos disponibles
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Transforma tu carrera en <span className="text-brand-600">Data & AI</span>
          </h1>
          <p className="max-w-xl text-lg text-slate-600">
            Aprende con expertos de la industria, aplica en proyectos reales y acelera tu crecimiento profesional con
            programas diseñados para el mercado laboral.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="#formulario" className="btn-primary">
              Quiero asesoría
            </a>
            <a href="#rutas" className="btn-secondary">
              Ver rutas de aprendizaje
            </a>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
            {trustItems.join(' | ')}
          </div>
        </div>

        <div className="animate-[fadeIn_.9s_ease-out] rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 shadow-soft sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ['+1,200', 'Profesionales formados'],
              ['90%', 'Alumnos aplican lo aprendido en su trabajo'],
              ['3 rutas', 'De crecimiento y reconversión profesional'],
              ['LatAm', 'Comunidad activa en toda la región']
            ].map(([value, label]) => (
              <div key={label} className="rounded-xl border border-slate-200 bg-white p-4">
                <p className="text-2xl font-bold text-brand-700">{value}</p>
                <p className="mt-1 text-sm text-slate-600">{label}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm text-slate-500">Vacantes limitadas en programas seleccionados.</p>
        </div>
      </div>
    </section>
  );
}
