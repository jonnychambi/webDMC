import SectionHeader from './SectionHeader';

const routes = [
  {
    title: 'Data Analyst',
    audience: 'Para quienes quieren iniciar o consolidar su perfil analítico.',
    learn: 'Excel, SQL, Power BI, storytelling con datos y análisis de negocio.',
    outcome: 'Construyes dashboards, generas insights y participas en decisiones estratégicas.'
  },
  {
    title: 'Data Scientist',
    audience: 'Para perfiles que buscan escalar hacia modelado avanzado y AI aplicada.',
    learn: 'Python, estadística aplicada, machine learning, experimentación y despliegue básico.',
    outcome: 'Desarrollas modelos predictivos con impacto en producto, marketing y operaciones.'
  },
  {
    title: 'Business Analytics',
    audience: 'Para profesionales de negocio que quieren decidir con evidencia y foco en resultados.',
    learn: 'Métricas de negocio, análisis de cohorts, visualización ejecutiva y frameworks de decisión.',
    outcome: 'Conectas datos con estrategia y lideras iniciativas con visión analítica.'
  }
];

export default function LearningPathsSection() {
  return (
    <section id="rutas" className="bg-slate-50 py-16 sm:py-20">
      <div className="container-custom space-y-10">
        <SectionHeader
          eyebrow="Rutas de aprendizaje"
          title="Elige la ruta que potencia tu siguiente etapa profesional"
          description="Programas estructurados para distintos perfiles, enfocados en empleabilidad, impacto y crecimiento sostenible."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {routes.map((route) => (
            <article key={route.title} className="card flex h-full flex-col">
              <h3 className="text-xl font-semibold text-slate-900">{route.title}</h3>
              <dl className="mt-4 space-y-3 text-sm text-slate-600">
                <div>
                  <dt className="font-semibold text-slate-900">Para quién es</dt>
                  <dd>{route.audience}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-900">Qué aprenderá</dt>
                  <dd>{route.learn}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-900">Resultado esperado</dt>
                  <dd>{route.outcome}</dd>
                </div>
              </dl>
              <a href="#formulario" className="btn-primary mt-6 w-full">
                Quiero esta ruta
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
