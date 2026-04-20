import SectionHeader from './SectionHeader';

const steps = ['Conceptos claros', 'Exploración guiada', 'Aplicación práctica', 'Casos reales', 'Acompañamiento'];

export default function MethodologySection() {
  return (
    <section id="metodologia" className="bg-white py-16 sm:py-20">
      <div className="container-custom space-y-10">
        <SectionHeader
          eyebrow="Metodología DMC"
          title="Aprendes haciendo, con estructura y foco en resultados"
          description="Un recorrido claro para que conviertas conocimiento en habilidades accionables desde la primera semana."
        />

        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, idx) => (
            <li key={step} className="relative rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center">
              <span className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-brand-600 text-xs font-bold text-white">
                {idx + 1}
              </span>
              <p className="mt-3 text-sm font-semibold text-slate-900">{step}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
