# DMC Landing (React + Tailwind)

Landing page de DMC orientada a conversión para profesionales de Latinoamérica.

## Desarrollo local

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
npm run preview
```

## Publicar en GitHub Pages

Este repositorio ya incluye workflow automático en `.github/workflows/deploy-pages.yml`.

### Pasos (una sola vez)
1. Ir a **Settings → Pages**.
2. En **Source**, seleccionar **GitHub Actions**.
3. Hacer push a la rama `main`.
4. El workflow **Deploy to GitHub Pages** construirá y publicará el sitio.

> Nota: la base de Vite se ajusta automáticamente en GitHub Actions usando el nombre del repositorio.
