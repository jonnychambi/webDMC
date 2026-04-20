const metrics = [
  'Especialistas formados en Data & AI',
  'Comunidad profesional en crecimiento',
  'Metodología 100% práctica',
  'Programas orientados a empleabilidad'
];

const logos = ['Fintech', 'Retail', 'Telecom', 'Consultoría', 'Banca'];

export default function TrustBand() {
  return (
    <section className="border-y border-slate-200 bg-white py-8">
      <div className="container-custom space-y-6">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((item) => (
            <p key={item} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
              {item}
            </p>
          ))}
        </div>
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">Profesionales DMC en empresas de la región</p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
            {logos.map((logo) => (
              <div key={logo} className="rounded-lg border border-dashed border-slate-300 px-3 py-4 text-center text-xs font-semibold text-slate-500">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
