import SectionHeader from './SectionHeader';

const interestOptions = ['Ahora mismo', 'Próximo mes', 'En tres meses o más', 'Solo información'];

export default function LeadFormSection() {
  return (
    <section id="formulario" className="bg-white py-16 sm:py-20">
      <div className="container-custom grid gap-10 lg:grid-cols-2 lg:items-start">
        <SectionHeader
          eyebrow="Solicita asesoría"
          title="Te ayudamos a elegir la mejor ruta para tu objetivo profesional"
          description="Completa tus datos y un asesor académico te contactará para diseñar contigo un plan de crecimiento en Data & AI."
        />

        <form className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm" data-analytics-form="lead_capture">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-medium text-slate-700">
              Nombre
              <input className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" name="nombre" type="text" required />
            </label>
            <label className="text-sm font-medium text-slate-700">
              Apellidos
              <input className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" name="apellidos" type="text" required />
            </label>
            <label className="text-sm font-medium text-slate-700">
              Teléfono
              <input className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" name="telefono" type="tel" required />
            </label>
            <label className="text-sm font-medium text-slate-700">
              Correo
              <input className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" name="correo" type="email" required />
            </label>
          </div>

          <label className="mt-4 block text-sm font-medium text-slate-700">
            Programa o ruta de interés
            <select className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" name="programa" defaultValue="">
              <option value="" disabled>
                Selecciona una ruta
              </option>
              <option>Data Analyst</option>
              <option>Data Scientist</option>
              <option>Business Analytics</option>
              <option>Quiero orientación personalizada</option>
            </select>
          </label>

          <label className="mt-4 block text-sm font-medium text-slate-700">
            Nivel de interés
            <select className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" name="nivel_interes" defaultValue="Ahora mismo">
              {interestOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>

          <button type="submit" className="btn-primary mt-6 w-full" data-analytics-click="cta_form_submit">
            Quiero asesoría
          </button>
          <p className="mt-3 text-xs text-slate-500">
            Un asesor académico te contactará para ayudarte a elegir la mejor ruta según tu perfil.
          </p>
        </form>
      </div>
    </section>
  );
}
