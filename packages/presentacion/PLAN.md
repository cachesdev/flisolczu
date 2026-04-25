# Plan de Presentación — FLISOL Caaguazú 2026, Parte 2: El Sitio Web

> **Framework**: Animotion (Svelte 5, reveal.js, TailwindCSS 4, View Transitions API)
> **Idioma**: Español — audiencia paraguaya
> **Slide engine**: File-based slides (`src/slides/{numero}/slide.svelte`)
> **Duración estimada**: 40-60 minutos (~36 slides)

---

## Configuración visual global

### Theme tokens (importar en `app.css`)

Usar los mismos tokens CSS definidos en `packages/flisolczu/src/routes/layout.css`:

```css
:root {
	--flisol-blue-400: rgb(0 85 212);
	--flisol-blue-300: rgb(0 113 222);
	--flisol-blue-600: rgb(0 44 128);
	--flisol-lime-400: rgb(204 255 0);
	--flisol-orange-400: rgb(255 163 65);
	--flisol-orange-500: rgb(255 142 42);
}
```

### Fuentes

- **Principal**: Geist Variable (`@fontsource-variable/geist`) — mismos imports que flisolczu
- **Cursiva**: Satisfy (`@fontsource/satisfy`) — solo para el nombre en el demo de certificado
- **Código**: Monaspace Neon (ya presente en el proyecto Animotion base)

### Assets a copiar/symlinking a `static/`

Desde `packages/flisolczu/src/lib/assets/`:

- `logo-hero.svg` — logo FLISOL para portada y slides de sección
- `certificado.png` — imagen del certificado para el demo
- `sponsors/*.png` — logos reales de patrocinadores (16 imágenes)

### Dependencias a agregar en `package.json`

```
@fontsource-variable/geist
@fontsource/satisfy
```

---

## Bloques de Slides

### Bloque 0: Apertura y Contexto

| Slide   | Título                    | Contenido                                                                                                                                                                                                                                              | Interactividad | Animotion features                       |
| ------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------- | ---------------------------------------- |
| **100** | **Portada**               | `<img src={LogoHero}>` centrado (`max-w-96`). Debajo: "Parte 2: El Sitio Web de FLISOL Caaguazú 2026" + nombre del orador + "UTIC Caaguazú". Fondo oscuro con blur circles (`bg-flisol-lime-400/26`, `bg-flisol-orange-400/26`) al estilo hero-section | —              | `<Slide>`, Tailwind                      |
| **200** | **¿Qué construimos?**     | 3 bullets: (1) Landing page del evento con info, agenda, countdown, sponsors. (2) Formulario de certificados con validación. (3) Stack moderno construido en 10-15h entre clases y tiempo libre. Tipografía Geist                                      | —              | `<Transition>` stagger reveal per bullet |
| **300** | **Arquitectura monorepo** | Diagrama ASCII/dibujo: `packages/flisolczu` (web app) + `packages/presentacion` (slides). PNPM workspace, `.svelte.ts` compartidos, preparado para escalar a FLISOL 2027, 2028, etc.                                                                   | —              | `<Transition>` elementos apareciendo     |
| **400** | **Roadmap de la charla**  | Lista compacta: Stack → Svelte + Runes → Remote Functions → Tailwind → Drizzle → Valibot → Demos en vivo (Countdown, Sponsors, Certificado) → Infra → Bonus Meta                                                                                       | —              | Números de sección animados con `tween`  |

---

### Bloque 1: El Stack Completo

| Slide   | Título                                                   | Contenido                                                                                                                                                                                                                                                                                                                                                                                                                        | Interactividad                                                                                                 | Animotion features                                |
| ------- | -------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| **500** | **Diagrama del stack**                                   | Tres columnas: **Frontend** (SvelteKit, Tailwind 4, BitsUI, NumberFlow, TextMorph/torph, AnimeJS, Valibot), **Backend** (node-pg-migrate, Drizzle ORM v1 beta, Remote Functions, Valibot, GeoIP, Rate Limiting), **Infra** (Railway free trial, Docker compose, adapter-node). Flechas conectando mostrando type safety de punta a punta. Usar colores FLISOL para cada columna                                                  | —                                                                                                              | `<Transition>` per columna con `order`            |
| **600** | **Comparativa: LAMP vs Laravel vs Next.js vs SvelteKit** | Tabla comparativa con 8 filas. Columnas: LAMP (PHP+Apache+MySQL), Laravel, Next.js, SvelteKit. Filas: Backend runtime, ORM, Frontend framework, Reactividad, Estado global, Migraciones, Validación, Type Safety. Destacar que LAMP no tiene ORM ni migraciones nativas, Laravel separa validación front/back, Next.js requiere Server Components para async, SvelteKit unifica todo con Remote Functions + Valibot compartido   | `<Action>` revela cada fila progresivamente. Última fila resalta en `bg-flisol-lime-400/20` con `<Transition>` | `<Action do={...}>`, `<Transition>`               |
| **700** | **¿Por qué SvelteKit?**                                  | 4 principios: (1) Reactividad compilada — el compilador genera JS vanilla optimizado, no hay virtual DOM. (2) Runes como keywords del lenguaje — `$state`, `$derived` sin imports ni wrappers. (3) Server-first — Remote Functions eliminan la frontera API REST. (4) TypeScript de fábrica — no necesita configuración extra como Next.js. Stats: bundle pequeño (~3 KB hello world). Cita visual: "Menos código, más features" | —                                                                                                              | `<Code>` mostrando bundle size comparison animado |

---

### Bloque 2: Svelte — Reactividad con Runes

| Slide    | Título                                      | Contenido                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Interactividad                                                                                                                                                                                 | Animotion features                                                     |
| -------- | ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| **800**  | **$state — Reactividad al estilo Svelte**   | Panel izquierdo: código Svelte `let count = $state(0)`, `<button>` con `count++` y `{count}`. Panel central: comparación React `const [count, setCount] = useState(0)`. Panel derecho: comparación PHP: recargar página entera para actualizar un número. Resaltar: `count` es una variable normal, no un getter/setter. **Para un dev PHP/LAMP, esto parece magia.**                                                                                                                     | **Botón contador interactivo**: botón "Incrementar" que usa `$state` y muestra el número animado con `tween` de `@animotion/motion`. El número hace tween visual al cambiar                    | `tween()`, `<Action>`, `<Code>` con `selectLines`                      |
| **900**  | **Reactividad profunda y clases reactivas** | Explicar: `$state` convierte arrays/objetos en proxies reactivos. `todos[0].done = true` dispara actualizaciones sin `.map()` ni spread. Clases: campos con `$state` en clase + getters `$derived`. Archivos `.svelte.ts` exportan estado global (ej: `eventState`). Mostrar código de `event.svelte.ts`: clase `EventState` con `now = $state(Date.now())`, getter `countdown` derivado de `now`. **Esto reemplaza context providers + reducers en React y $\_SESSION + reload en PHP.** | **Mini demo de TODOs**: lista de 4 items con checkbox. Checkbox hace `todo.done = !todo.done` directo, sin crear nuevo array. Botón "Agregar" hace `todos.push(...)`. Todo reactivo automático | `<Code>` con `update`, checkboxes interactivos                         |
| **1000** | **$derived y comparaciones**                | `$derived(count * 2)` — se recalcula automáticamente cuando `count` cambia. `$derived.by()` para lógica compleja. Comparación con código side-by-side: Svelte `$derived` vs React `useMemo` vs Laravel Livewire `computed`. Mostrar cómo Svelte gana en simplicidad y performance (solo recalcula si las dependencias cambian granularmente)                                                                                                                                              | Código animado con `<Code>` `update`: transformar código base entre los 3 frameworks. Highlights en las diferencias clave                                                                      | `<Code>` con `update` + `selectLines` animados, `<Action>` orquestando |
| **1100** | **$props + snippets**                       | `let { title, count } = $props()` — props tipados sin decorator ni TypeScript genérico. `{#snippet}` + `{@render}` reemplazan `<slot>` para composición. Comparar: Svelte `$props()` vs React PropTypes/interface vs Laravel Blade `@yield/@section`. Beneficio: autocompletado, type-safe en tiempo de compilación                                                                                                                                                                       | Código con `<Code>` mostrando evolución de un componente card en cada framework                                                                                                                | `<Code>` con `codes` array encadenado                                  |

---

### Bloque 3: Remote Functions + Top-Level Await

| Slide    | Título                                           | Contenido                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Interactividad                                                                                                                                                  | Animotion features                                                                            |
| -------- | ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| **1200** | **Remote Functions: el puente cliente-servidor** | Concepto: archivos `.remote.ts`. Exportás funciones que se llaman del cliente pero **siempre se ejecutan en el servidor**. Cuatro sabores: `query` (lectura), `form` (escritura con `<form>`), `command` (escritura desde cualquier lado), `prerender` (datos cuasi-estáticos). Type-safe: el tipo de retorno está disponible en el cliente sin generar API types. Mostrar código: `export const getPosts = query(async () => { ... })` — tan simple como eso. **Para un dev Laravel: esto reemplaza controllers + API routes + fetch/axios.**                                                                                                        | —                                                                                                                                                               | `<Code>`, `<Transition>`                                                                      |
| **1300** | **Top-Level Await y cómo reemplaza `{#await}`**  | `experimental.async`: `await` directo en `<script>`, en `$derived`, y en el markup. El código: `const posts = $derived(await getPosts())` — no más `onMount` + fetch, no más `load` functions. `<svelte:boundary>` con `pending` snippet reemplaza `{#await}` para loading states. El `failed` snippet reemplaza `{:catch}`. **Synchronized updates**: cambios de estado no se reflejan hasta que el async termina — la UI nunca queda inconsistente.                                                                                                                                                                                                 | Código animado: mostrar versión Svelte 4 con `{#await}` y `onMount`, luego `update` a versión Svelte 5 con `await` directo. Animación de transición entre ambas | `<Code>` con `update` + magic move. `<Transition>` entre versiones                            |
| **1400** | **SvelteKit vs Next.js App Router**              | Comparación directa lado a lado. Izquierda: Svelte `form(schema, handler)` + `{...form}` en `<form>`. Derecha: Next.js `"use server"` + `action={serverAction}`. Puntos: (1) Svelte no necesita directive `"use server"` — el archivo `.remote.ts` lo define solo. (2) Svelte usa Standard Schema (Valibot/Zod) como primer argumento — validación integrada, no manual. (3) `form` devuelve un objeto con `method`, `action`, `fields`, `issues()` — spread directo en `<form>`, funciona sin JS. (4) `query.batch()` resuelve n+1 automático. (5) Remix y Next.js requieren `useFormState` / `useActionState` — Svelte no.                          | Slide partido con `<Code>` mostrando ambos lados. `<Action>` highlights progresivos en cada diferencia                                                          | `<Code>` dual, `<Action>` orquestando highlights                                              |
| **1500** | **Por qué Svelte es superior**                   | 4 razones: (1) En Next.js, Server Components son SU COMPONENTES ENTEROS async — no podés tener `await` en un componente cliente. En Svelte, `await` se mezcla naturalmente con cualquier variable reactiva en el `<script>`, en `$derived`, o en markup. (2) **Synchronized updates**: la UI espera al async sin estados intermedios inconsistentes. En React, necesitás `Suspense` + skeletons manualmente. (3) **Una sola sintaxis**: `await` funciona igual en server y client. En Next.js, `await` en client components no hace server fetch. (4) SSR asíncrono nativo: `await render(App)` — sin streaming manual, sin `renderToPipeableStream`. | —                                                                                                                                                               | `<Transition>` per razón, reveladas secuencialmente                                           |
| **1600** | **Tradeoffs y limitaciones**                     | Ser honesto: (1) `experimental.async` y `experimental.remoteFunctions` — flags experimentales que pueden romper en updates. (2) Deduplication scope — las queries se cachean solo mientras hay contexto reactivo activo. No se puede llamar `await getData()` fuera de un `.svelte` o `$derived`. Usar `.run()` para one-off. (3) `command` no soporta `redirect()` — hay que devolver `{redirect: url}` y manejarlo manual. (4) $state en `.svelte.ts` no puede exportarse directamente si se reasigna. (5) Para proyectos que ya están en Next.js/Laravel, migrar tiene costo. Evaluar si el beneficio lo justifica.                                | —                                                                                                                                                               | `<Transition>` per limitación, estilo warning/advertencia con color `bg-flisol-orange-400/15` |

---

### Bloque 4: Demo en Vivo — Countdown

| Slide    | Título                             | Contenido                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Interactividad                                                                                                                                                                               | Animotion features                                                                             |
| -------- | ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| **1700** | **Demo: Countdown en tiempo real** | Componente que replica `countdown.svelte` del sitio real. Subtítulo: "Este componente corre en vivo con Svelte". Muestra: clase `EventState` con `now = $state(Date.now())`, getter `countdown` computando `{days, hours, minutes, seconds}`, `NumberFlow` animando cada dígito, `setInterval` corriendo cada 1s. Cards con borde `border-flisol-blue-300/20`, texto `text-flisol-blue-600`, blur circles decorativos con colores FLISOL. **La audiencia ve Svelte reaccionar en tiempo real.** | Contador decreciente real con interval. Números animados vía NumberFlow. Si la fecha del evento ya pasó, mostrar mensaje "El evento ya comenzó" — tal cual el componente real. Todo reactivo | `tween` para animar valores, `<Transition>` para revelar el componente. `NumberFlow` integrado |

---

### Bloque 5: Tailwind CSS

| Slide    | Título                                 | Contenido                                                                                                                                                                                                                                                                                                                                                                                                          | Interactividad                                                                                                                                                        | Animotion features                                                  |
| -------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| **1800** | **Tailwind CSS 4: Utility-First**      | ¿Qué es? Clases utilitarias vs CSS tradicional. `flex items-center gap-4` en vez de 10 líneas de CSS. Tailwind 4 usa motor CSS nativo (`@tailwindcss/vite`), no PostCSS. Ventajas: consistencia visual, design system implícito, responsive (`sm:`, `md:`, `lg:`), sin nombres de clases inventados. **Para devs PHP/LAMP: es como Bootstrap moderno pero sin componentes predefinidos.**                          | Toggle con `<Action>` que aplica/remueve clases Tailwind a un div, mostrando el cambio visual. Ejemplo: `rounded-none bg-gray-500` → `rounded-3xl bg-flisol-blue-600` | `<Action do>` toggle, `<Transition>` layout animation entre cambios |
| **1900** | **Tokens FLISOL en esta presentación** | Mostrar los theme tokens reales: `--flisol-blue-600` (azul oscuro, `rgb(0 44 128)`), `--flisol-lime-400` (verde lima, `rgb(204 255 0)`), `--flisol-orange-500` (naranja, `rgb(255 142 42)`). Panel visual con swatches: cada color con su nombre, valor RGB, y clase de Tailwind. Señalar que **toda esta presentación usa exactamente los mismos tokens** — consistencia visual total entre el sitio y los slides | —                                                                                                                                                                     | `<Transition>` revelando cada swatch con `order` secuencial         |

---

### Bloque 6: Drizzle ORM y Migraciones

| Slide    | Título                                             | Contenido                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Interactividad                                                                                                                                          | Animotion features                                                        |
| -------- | -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| **2000** | **node-pg-migrate + Drizzle**                      | Separación de concerns: `node-pg-migrate` maneja migraciones (up/down como Laravel). Drizzle hace `pull` del schema actual de la DB y genera tipos TypeScript. Script: `db:pull` corre drizzle introspect y genera definiciones de tablas tipadas. Explicar: no es ORM-first ni migration-first — es hibrido. `db:migrate:up`, `db:migrate:down`, `db:migrate:create`                                                                                                                                                     | —                                                                                                                                                       | `<Code>` mostrando comandos npm, `<Transition>` para cada paso            |
| **2100** | **¿Por qué migraciones?**                          | Escenario real: 3 devs trabajando. Sin migraciones: phpMyAdmin manual, "che pasame el script SQL por WhatsApp", drift entre environments. Con migraciones: cada cambio de schema es un archivo versionado en git. Rollback con `down`. CI/CD ejecuta migraciones automáticamente. **Comparar con Laravel migrations que son el gold standard en PHP.**                                                                                                                                                                    | —                                                                                                                                                       | `<Transition>` mostrando antes/después, `<Code>` con ejemplo de migración |
| **2200** | **Relations API v2: queries relacionales sin SQL** | `defineRelations()` centraliza todas las relaciones del schema en un solo lugar. Sintaxis: `r.one.users({from: r.posts.authorId, to: r.users.id})`. Luego `db.query.users.findMany({with: {posts: true}})` — sin JOINs a mano, sin SQL embebido, resultado tipado con posts anidados. **Relational queries v2 vs v1**: v1 requería definir relaciones separadas por tabla. v2 las centraliza con autocompletado. Mostrar código evolutivo: SQL raw → Drizzle query builder → Drizzle relational v1 → Drizzle relations v2 | Código animado evolucionando de SQL raw hasta relations v2. Cada `<Action>` hace `update` al `<Code>` y `selectLines` del punto relevante               | `<Code>` con múltiples `update` encadenados, `<Action>` orquestando       |
| **2300** | **Type drift eliminado**                           | El problema clásico: cambiás la DB y el código se desincroniza. Con Drizzle: (1) `db:pull` regenera los tipos desde la DB real. (2) Valibot schema (`certificationRegistrationSchema`) se importa tanto en el frontend (preflight) como en la remote function (validación server). (3) El mismo tipo de Valibot genera `CertificationRegistrationInput` que es lo que la DB espera. Tres capas (DB, server, cliente) hablando el mismo idioma.                                                                            | Diagrama de 3 capas: PostgreSQL → Drizzle types → Valibot schema → Form + Remote Function. Flechas bidireccionales indicando que todo está sincronizado | `<Transition>` revelando cada capa + flecha progresivamente               |

---

### Bloque 7: Valibot — Un Schema, Dos Mundos

| Slide    | Título                                           | Contenido                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Interactividad                                                                                                                                                | Animotion features                                                                                               |
| -------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| **2400** | **Mismo schema, cliente y servidor**             | Mostrar el archivo real `certification-registration.ts`: `v.object({cedula, nombre, apellido, metodoPago})`. Este mismo objeto se usa en: (A) `<form {...form.preflight(schema)}>` — validación client-side sin enviar al servidor. (B) `form(schema, handler)` en `certification.remote.ts` — validación server-side antes de tocar la DB. Resultado: una sola fuente de verdad, cero duplicación. **Comparar con Laravel: Form Requests + reglas JS en el frontend separadas.**                                               | Input interactivo: campo de cédula que valida `minLength(3)` en `oninput`. Muestra mensaje de error/éxito en tiempo real usando `form.fields.cedula.issues()` | `$state` para el valor del input, `<Transition>` para mostrar/ocultar errores, colores FLISOL para success/error |
| **2500** | **Remote Form con Valibot + GeoIP + Rate Limit** | Código completo de `certification.remote.ts` paso a paso: (1) `form(schema, handler)` encapsula todo. (2) Verifica `eventState.registrationsClosed` (cierre reactivo). (3) `getRealClientIP(event)` extrae IP real (detrás de proxy/Railway). (4) `getCountryFromIP(event)` + `isFromParaguay()` — bloquea no-py. (5) `checkRateLimit(ip)` con `rate-limiter-flexible` — 15 min cooldown. (6) `db.insert(listado)` con Drizzle + `onConflictDoUpdate` (upsert). (7) Retorno tipado que aparece como `form.result` en el cliente | Código con highlights progresivos por `<Action>`. Cada paso revela una sección del archivo                                                                    | `<Code>` con `selectLines` secuenciales, `<Action>` orquestando                                                  |

---

### Bloque 8: Demo en Vivo — Certificado Dinámico

| Slide    | Título                                 | Contenido                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Interactividad                                                                                                                                                         | Animotion features                                                                     |
| -------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| **2600** | **Demo: Certificado dinámico en vivo** | Replica el preview del certificado de `certification-registration-section.svelte`. Layout: izquierda — imagen `certificado.png` con overlay de texto. Derecha — formulario parcial (nombre y apellido). Al tipear, **TextMorph** actualiza el nombre sobre el certificado con animación suave. Fuente: Satisfy (`font-satisfy`). Validación: Valibot preflight en `oninput`. Muestra `issues()` en rojo. Botón submit **no** envía realmente (es un demo), pero muestra el loading state animado. **Esto es exactamente lo que el sitio hace en producción.** | Inputs de nombre/apellido actualizan dinámicamente el overlay cursivo sobre la imagen del certificado vía TextMorph. Validación en vivo con feedback visual de Valibot | `<Transition>` para el layout dual, `tween` opcional para animar el botón submit state |

---

### Bloque 9: Librerías de Animación

| Slide    | Título                             | Contenido                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Interactividad                                                                                                                                                                                                              | Animotion features                                           |
| -------- | ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| **2700** | **NumberFlow, TextMorph, AnimeJS** | Cada librería con su propósito: (1) **NumberFlow** (`@number-flow/svelte`) — anima dígitos individuales con transiciones suaves, usado en el countdown. Wrapper local `number-flow.svelte` por bug de tipos en el upstream. (2) **TextMorph** (`torph/dist/svelte/TextMorph.svelte`) — morphing de texto carácter por carácter, usado en el nombre del certificado. (3) **AnimeJS** (`animejs` v4) — animaciones imperativas para cosas que CSS no puede (scroll infinito del sponsor ticker) | Mini demos: texto que cambia con TextMorph (transition suave carácter a carácter), número que anima con NumberFlow (spin de dígitos), círculo que se mueve con AnimeJS (scroll infinito). Cada demo activado por `<Action>` | `tween`, `<Action>` disparando cada librería, `<Transition>` |
| **2800** | **BitsUI + Phosphor Icons**        | BitsUI: componentes headless para Svelte (simil ShadCN para React). `Label.Root`, `Select.Root`, `Select.Portal`. Accesibilidad incorporada (keyboard nav, ARIA). Phosphor: 6 estilos por ícono (thin, light, regular, bold, fill, duotone). `Phosphor-svelte` para usar como componentes. Ejemplo real: schedule-section usa `NotebookIcon`, `PresentationChartIcon`. Certificado usa `Select.Root/Trigger/Content/Item`                                                                     | —                                                                                                                                                                                                                           | `<Transition>` mostrando componentes visualmente             |

---

### Bloque 10: Demo en Vivo — Sponsor Band

| Slide    | Título                                  | Contenido                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Interactividad                                                                                                                           | Animotion features                                                                      |
| -------- | --------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| **2900** | **Demo: Banda de sponsors con AnimeJS** | Replica `sponsor-band.svelte`. Título: "Patrocinan esta edición" (`text-flisol-blue-600`). Carrusel infinito: logos duplicados (`[...sponsors, ...sponsors]`). AnimeJS anima `scrollLeft` de 0 a `scrollWidth/2` en loop infinito. **Accesibilidad**: `prefers-reduced-motion` pausa el scroll. Pausa en hover/focus (`onpointerenter`, `onfocusin`). Gradientes en bordes para fade-out. Los logos son los 16 patrocinadores reales de FLISOL Caaguazú 2026. **Todo esto corre en el navegador ahora mismo.** | Banda de sponsors scrolleando infinitamente. Hover/focus pausa la animación. Los logos son imágenes reales optimizadas (no placeholders) | `<Transition>` para revelar el componente, AnimeJS integrado en `@attach sponsorTicker` |

---

### Bloque 11: Infraestructura y Seguridad

| Slide    | Título                               | Contenido                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Interactividad | Animotion features                                                                                      |
| -------- | ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | ------------------------------------------------------------------------------------------------------- |
| **3000** | **Docker + Deploy**                  | Dos entornos: dev (docker compose con DB local) y prod (docker compose con DB persistente). `@sveltejs/adapter-node` genera bundle Node.js standalone. Railway free trial para hosting (por ahora), preparado para VPS/Droplet via `docker compose up -d`. Scripts: `docker:dev:up`, `docker:prod:build`, `docker:prod:up`. `.env` con dotenvx                                                                                                                                                                    | —              | `<Code>` mostrando docker compose snippets                                                              |
| **3100** | **Seguridad: GeoIP + Rate Limiting** | Tres capas de protección en la remote function: (1) **GeoIP**: `getCountryFromIP()` usando IP real (cabeceras de proxy). Bloquea requests no-Paraguay. (2) **Rate Limiting**: `rate-limiter-flexible` con IP como key, 15 min de cooldown tras múltiples intentos. Persistido (no en memoria) para sobrevivir deploys. (3) **Validación**: schema Valibot antes de cualquier operación de DB. Código real del check: `if (!isDev) { check geoIP, check rateLimit }` — desarrollo rápido sin bloqueos              | —              | `<Code>` con `selectLines` secuenciales de `certification.remote.ts`, resaltando cada capa de seguridad |
| **3200** | **Lecciones aprendidas**             | 5 lecciones: (1) SvelteKit redujo el boilerplate drásticamente vs Laravel/Next.js. (2) Remote Functions eliminaron la necesidad de endpoints REST manuales. (3) Valibot schema compartido evitó bugs de validación front/back. (4) Drizzle v1 beta funciona bien pero `pull` no soporta todo (se usa ts-morph preprocessing). (5) Construir un sitio completo en 10-15h con un solo dev es viable con el stack correcto. **El tiempo más perdido fue con bugs de tipos de NumberFlow, no con lógica de negocio.** | —              | `<Transition>` por lección con `order`. Último bullet en `text-flisol-lime-400`                         |

---

### Bloque 12: Meta — Esta Presentación es SvelteKit

| Slide    | Título                                  | Contenido                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Interactividad                                                                                                                                                                                                                             | Animotion features                              |
| -------- | --------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------- |
| **3300** | **🪄 Todo esto funciona con SvelteKit** | Revelación: Animotion corre sobre Svelte 5 + reveal.js. Cada slide es un `.svelte` component corriendo en el navegador. Las animaciones que vieron (`<Transition>`, `<Code>`, `tween()`) son View Transitions API + `@animotion/motion`. Los colores FLISOL que ven son los mismos tokens CSS del sitio. El countdown, el certificado y los sponsors corren en vivo. Navegación entre slides es SPA routing (sin recarga de página). **La audiencia estuvo viendo SvelteKit en acción los últimos 40 minutos sin darse cuenta.** | Presionar `ESC` muestra el reveal.js overview deck (webapp real). Presionar `S` abre speaker notes. Demostrar: navegación fluida, view transitions entre slides, animaciones de layout. Opcional: abrir DevTools y mostrar el DOM reactivo | Demostración en tiempo real del framework mismo |

| **3400** | **Créditos del stack de presentación** | Lista de software open source usado para los slides: [Animotion](https://animotion.pages.dev) (`@animotion/core`, `@animotion/motion`), reveal.js (motor de slides), Shiki + shiki-magic-move (syntax highlighting animado), TailwindCSS 4, Vite, PNPM, TypeScript, Geist Variable + Satisfy + Monaspace Neon (fuentes). Todos los logos de patrocinadores usados con permiso de FLISOL Caaguazú 2026. | — | `<Transition>` por elemento de crédito con `order` secuencial |

---

### Bloque 13: Cierre

| Slide    | Título                          | Contenido                                                                                                                                                                                                                                                     | Interactividad               | Animotion features                                                                                      |
| -------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------- |
| **3500** | **Demo en vivo: el sitio real** | Slide de transición. Título: "Veamos el sitio funcionando en producción". Navegar en vivo a la URL del sitio (o mostrar screenshots si no hay internet). Recorrer: hero, countdown, sponsors, agenda, formulario de certificado con validación real.          | Demo navegando el sitio real | `<Slide>` con transición especial (fade)                                                                |
| **3600** | **¡Gracias! + Preguntas**       | Logo FLISOL héroe. "¿Preguntas?" en grande. QR code al repo GitHub (generado con qrcode o embed). Links: /sveltejs/kit, /drizzle-team/drizzle-orm, /valibot, /animotion. Contacto del speaker. "Gracias a UTIC Caaguazú por la sede" + logos institucionales. | —                            | `<Transition>` fade-in de elementos. Opcional: animación de confeti con AnimeJS activada por `<Action>` |

---

## Estructura de archivos generada

```
src/slides/
  0100/slide.svelte     # Portada
  0200/slide.svelte     # Qué construimos
  0300/slide.svelte     # Arquitectura monorepo
  0400/slide.svelte     # Roadmap
  0500/slide.svelte     # Diagrama stack
  0600/slide.svelte     # Comparativa LAMP/Laravel/Next/SvelteKit
  0700/slide.svelte     # Por qué SvelteKit
  0800/slide.svelte     # $state reactividad
  0900/slide.svelte     # Reactividad profunda + clases
  1000/slide.svelte     # $derived comparaciones
  1100/slide.svelte     # $props + snippets
  1200/slide.svelte     # Remote Functions concepto
  1300/slide.svelte     # Top-Level Await vs {#await}
  1400/slide.svelte     # SvelteKit vs Next.js App Router
  1500/slide.svelte     # Superioridad Svelte
  1600/slide.svelte     # Tradeoffs
  1700/slide.svelte     # [DEMO] Countdown en vivo
  1800/slide.svelte     # Tailwind CSS 4
  1900/slide.svelte     # Theme tokens FLISOL
  2000/slide.svelte     # Migraciones + Drizzle
  2100/slide.svelte     # Por qué migraciones
  2200/slide.svelte     # Relations API v2
  2300/slide.svelte     # Type drift eliminado
  2400/slide.svelte     # Valibot schema compartido
  2500/slide.svelte     # Remote Form completo
  2600/slide.svelte     # [DEMO] Certificado dinámico
  2700/slide.svelte     # NumberFlow + TextMorph + AnimeJS
  2800/slide.svelte     # BitsUI + Phosphor
  2900/slide.svelte     # [DEMO] Sponsor band
  3000/slide.svelte     # Docker + Deploy
  3100/slide.svelte     # Seguridad
  3200/slide.svelte     # Lecciones aprendidas
  3300/slide.svelte     # [META] Animotion es SvelteKit
  3400/slide.svelte     # Créditos slides
  3500/slide.svelte     # Demo en vivo sitio real
  3600/slide.svelte     # Gracias + QR
```

### Archivos de soporte

```
src/lib/
  demos/
    CountdownDemo.svelte     # Componente countdown autocontenido para slide 1700
    SponsorBandDemo.svelte   # Componente sponsor band para slide 2900
    CertificateDemo.svelte   # Componente certificado para slide 2600
static/
  logo-hero.svg              # Desde flisolczu/src/lib/assets/logo-hero.svg
  certificado.png            # Desde flisolczu/src/lib/assets/certificado.png
  sponsors/                  # Desde flisolczu/src/lib/assets/sponsors/*.png
    silvi_modas.png
    sin_fronteras.png
    sg creaciones.png
    pizzeria_campeonato.png
    servicentro_tajy.png
    montana.png
    md_veterinaria.png
    mabuplay.png
    lapachos.png
    la fortuna.png
    kaa soft.png
    jt_consulting.png
    drv_seguros.png
    dicosta.png
    agrope_santa_rita.png
```

---

## Checklist de revisión final

- [x] Slides en español, targeting audiencia paraguaya
- [x] Cubre público principiante + devs PHP/LAMP/WordPress + Laravel + React/Next.js
- [x] Usa Animotion (`<Slide>`, `<Transition>`, `<Action>`, `<Code>`, `tween`, `all`)
- [x] Toda la documentación de Svelte consultada vía MCP (runes, remote functions, boundaries, await)
- [x] Todas las partes del stack cubiertas (frontend, backend, infra, seguridad)
- [x] Comparativa LAMP vs Laravel vs Next.js vs SvelteKit detallada (slide 600)
- [x] Remote Functions explicadas con comparación a Next.js Server Actions (slides 1200-1500)
- [x] Top-level await comparado con `{#await}`, sincronized updates explicado (slides 1300, 1500)
- [x] `<svelte:boundary>` y cómo reemplaza pending/error handling de `{#await}` (slides 1300, 2600)
- [x] Tradeoffs documentados (slide 1600)
- [x] Sección Tailwind completa (slides 1800-1900)
- [x] Drizzle: migraciones, type drift, relations API v2 vs v1 (slides 2000-2300)
- [x] Valibot: schema compartido frontend + backend + demo real (slides 2400-2500)
- [x] Countdown demo interactivo con reactive classes y NumberFlow (slide 1700)
- [x] Certificado dinámico con TextMorph + Valibot preflight (slide 2600)
- [x] Sponsor band con AnimeJS + `@attach` + logos reales (slide 2900)
- [x] Fuentes: Geist Variable (principal), Satisfy (cursiva certificado) cubiertas
- [x] Theme tokens FLISOL usados en toda la presentación
- [x] Logos y assets reales del sitio
- [x] GeoIP y rate limiting explicados (slide 3100)
- [x] Docker compose + Railway/VPS (slide 3000)
- [x] Slides bonus meta: Animotion es SvelteKit + créditos (slides 3300-3400)
- [x] Slide de gracias con QR + demo en vivo (slides 3500-3600)
- [x] Interactividad marcada para cada slide que la tiene
- [x] Slide numbering en incrementos de 100 (4 dígitos)
- [x] Notas de implementación para cada slide
