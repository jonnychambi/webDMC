import SectionHeader from './SectionHeader';

const pillars = [
  {
    icon: '🎯',
    title: 'Docentes expertos de la industria',
    description: 'Aprende con líderes que hoy implementan analítica y AI en empresas reales de Latinoamérica.'
  },
  {
    icon: '📊',
    title: 'Aprendizaje basado en casos reales',
    description: 'Cada módulo conecta con desafíos de negocio para que domines herramientas y criterio profesional.'
  },
  {
    icon: '⚙️',
    title: 'Learning Agile / Learning by Doing',
    description: 'Progresas con sprints prácticos, feedback constante y entregables aplicables a tu rol actual.'
  },
  {
    icon: '🤝',
    title: 'Comunidad DMCina que impulsa tu crecimiento',
    description: 'Accede a networking, mentoría y oportunidades que aceleran tu desarrollo y empleabilidad.'
  }
];

export default function WhyDmcSection() {
  return (
    <section id="por-que-dmc" className="bg-white py-16 sm:py-20">
      <div className="container-custom space-y-10">
        <SectionHeader
          eyebrow="¿Por qué DMC?"
          title="Formación diseñada para crecimiento profesional real"
          description="No enseñamos teoría aislada. Construimos habilidades que te ayudan a aportar valor, destacar y liderar con datos."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="card">
              <span className="text-2xl" aria-hidden="true">
                {pillar.icon}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{pillar.title}</h3>
              <p className="mt-2 text-slate-600">{pillar.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
