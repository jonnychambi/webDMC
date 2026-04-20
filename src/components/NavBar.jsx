const links = [
  { label: 'Por qué DMC', href: '#por-que-dmc' },
  { label: 'Rutas', href: '#rutas' },
  { label: 'Metodología', href: '#metodologia' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Contacto', href: '#formulario' }
];

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/95 backdrop-blur">
      <nav className="container-custom flex h-16 items-center justify-between">
        <a href="#inicio" className="text-lg font-bold text-slate-900">
          DMC <span className="text-brand-600">Data & AI</span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-slate-600 transition hover:text-brand-700">
              {link.label}
            </a>
          ))}
          <a href="#formulario" className="btn-primary px-4 py-2 text-xs sm:text-sm">
            Quiero asesoría
          </a>
        </div>

        <a href="#formulario" className="btn-primary px-4 py-2 text-xs md:hidden">
          Asesoría
        </a>
      </nav>
    </header>
  );
}
