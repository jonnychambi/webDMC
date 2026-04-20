import SectionHeader from './SectionHeader';

const before = [
  'Tomas decisiones por intuición.',
  'Dependes de otros para analizar información.',
  'Tu perfil profesional no destaca en procesos competitivos.'
];

const after = [
  'Analizas con criterio y herramientas reales.',
  'Tomas decisiones basadas en datos y evidencia.',
  'Potencias tu perfil con habilidades de alta demanda.'
];

export default function TransformationSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-custom space-y-10">
        <SectionHeader
          eyebrow="Transformación"
          title="Del estancamiento profesional al liderazgo con datos"
          description="DMC te acompaña para pasar de la teoría a la acción, con resultados visibles en tu carrera."
        />

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6">
            <h3 className="text-lg font-semibold text-rose-700">Antes</h3>
            <ul className="mt-4 space-y-3 text-sm text-rose-900">
              {before.map((point) => (
                <li key={point}>• {point}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
            <h3 className="text-lg font-semibold text-emerald-700">Después</h3>
            <ul className="mt-4 space-y-3 text-sm text-emerald-900">
              {after.map((point) => (
                <li key={point}>• {point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
