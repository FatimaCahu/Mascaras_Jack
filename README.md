# Máscaras Jack — sitio web

Sitio web en **Angular 17 (standalone components)** para un negocio de
máscaras y ropa de lucha libre. Incluye página de inicio, sección de la
marca, galería de productos filtrable y un formulario de contacto.
Totalmente responsivo (celular, tablet y escritorio).

## Requisitos

- Node.js 18.13 o superior
- npm 9 o superior

## Instalación

```bash
cd mascaras-jack
npm install
```

## Levantar en desarrollo

```bash
npm start
```

Abre `http://localhost:4200` en el navegador. Los cambios se recargan
automáticamente.

## Compilar para producción

```bash
npm run build
```

Los archivos listos para subir a hosting quedan en `dist/mascaras-jack/`.
Puedes subir esa carpeta a cualquier hosting estático (Netlify, Vercel,
GitHub Pages, cPanel, etc.).

## Estructura del proyecto

```
src/app/
  components/
    navbar/     -> menú superior, con hamburguesa en móvil
    hero/       -> portada con ilustración SVG de máscara
    about/      -> historia del taller y proceso de trabajo
    gallery/    -> catálogo de productos con filtros por categoría
    contact/    -> formulario de contacto (Reactive Forms)
    footer/     -> pie de página y redes sociales
  data/products.ts    -> catálogo de ejemplo (edítalo con tus productos)
  models/product.model.ts
```

## Personalizar

- **Productos**: edita `src/app/data/products.ts`. Cada producto tiene
  nombre, categoría, descripción, precio y una paleta de 3 colores que
  se usa para dibujar su icono.
- **Datos de contacto**: edita el HTML de
  `src/app/components/contact/contact.component.html` (dirección,
  teléfono, correo, horario) y `footer.component.html` (redes sociales).
- **Formulario**: en `contact.component.ts`, el método `onSubmit()` es
  donde debes conectar tu backend, EmailJS, Formspree o el servicio de
  correo que uses; ahora mismo solo muestra un mensaje de confirmación
  en pantalla.
- **Colores y tipografía**: los tokens de diseño (colores, fuentes)
  están centralizados en `src/styles.scss`, en la sección `:root`.

## Notas

Este proyecto se generó con los archivos fuente de Angular pero sin
`node_modules` ni `package-lock.json` (para mantener el paquete
liviano). El primer `npm install` los generará.
