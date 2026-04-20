import SectionHeader from './SectionHeader';

const faqs = [
  {
    q: '¿Necesito experiencia previa?',
    a: 'No necesariamente. Tenemos rutas para quienes inician y para quienes ya tienen base analítica. En la asesoría te orientamos según tu nivel actual.'
  },
  {
    q: '¿Qué ruta me conviene si recién empiezo?',
    a: 'Generalmente Data Analyst es la mejor puerta de entrada. Te da fundamentos sólidos para analizar información y crear valor desde el negocio.'
  },
  {
    q: '¿Las clases son prácticas?',
    a: 'Sí. Trabajamos con ejercicios aplicados, casos reales y proyectos guiados para que aprendas con contexto profesional.'
  },
  {
    q: '¿Recibiré acompañamiento?',
    a: 'Sí. Contarás con docentes, mentores y comunidad para resolver dudas, validar avances y acelerar tu crecimiento.'
  },
  {
    q: '¿Cómo me ayudan a elegir el programa adecuado?',
    a: 'A través de una asesoría personalizada evaluamos tu perfil, experiencia y objetivo profesional para recomendarte la ruta más estratégica.'
  }
];

export default function FaqSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="container-custom space-y-10">
        <SectionHeader eyebrow="FAQ" title="Preguntas frecuentes" description="Resolvemos las dudas más comunes antes de que tomes tu decisión." />

        <div className="space-y-3">
          {faqs.map((faq) => (
            <details key={faq.q} className="group rounded-xl border border-slate-200 bg-white p-5">
              <summary className="cursor-pointer list-none text-sm font-semibold text-slate-900">
                {faq.q}
                <span className="float-right text-brand-600 transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm text-slate-600">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
