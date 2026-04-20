import SectionHeader from './SectionHeader';

const testimonials = [
  {
    name: 'Camila Rojas',
    role: 'Analista Comercial → Data Analyst',
    company: 'Retail regional',
    quote:
      'En 5 meses pasé de reportes manuales a construir dashboards ejecutivos. Hoy participo en decisiones de pricing y expansión.'
  },
  {
    name: 'Jorge Velásquez',
    role: 'Ingeniero Industrial',
    company: 'Logística & Operaciones',
    quote:
      'La metodología fue clave: cada clase terminaba con una aplicación real. Logré migrar a un rol de analítica dentro de mi empresa.'
  },
  {
    name: 'Daniela Paredes',
    role: 'Especialista de Marketing',
    company: 'Fintech',
    quote:
      'Lo que más valoro es el nivel de los docentes. No solo enseñan herramientas, te enseñan a pensar y priorizar con datos.'
  },
  {
    name: 'Mauricio Gutiérrez',
    role: 'Business Manager',
    company: 'Consultoría',
    quote:
      'Con Business Analytics mejoré mi capacidad para sustentar decisiones ante dirección. El impacto fue inmediato en mis proyectos.'
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonios" className="bg-slate-50 py-16 sm:py-20">
      <div className="container-custom space-y-10">
        <SectionHeader
          eyebrow="Prueba social"
          title="Historias reales de profesionales que decidieron crecer con Data & AI"
          description="Resultados concretos en empleabilidad, cambio de rol y confianza para liderar proyectos basados en datos."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {testimonials.map((t) => (
            <article key={t.name} className="card">
              <p className="text-slate-700">“{t.quote}”</p>
              <p className="mt-4 text-sm font-semibold text-slate-900">{t.name}</p>
              <p className="text-sm text-slate-500">
                {t.role} · {t.company}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
