export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-8">
      <div className="container-custom flex flex-col gap-3 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-semibold text-slate-800">DMC Data & AI School</p>
        <p>contacto@dmc.edu | +51 999 999 999 | Latinoamérica</p>
        <p>© {new Date().getFullYear()} DMC. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
