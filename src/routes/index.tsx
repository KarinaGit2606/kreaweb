import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight, Check, MessageCircle, MapPin, Mail, Phone, Instagram,
  Sparkles, Layout, Code2, Rocket, Quote, Menu, X,
} from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import heroImg from "@/assets/hero.webp";
import karinaImg from "@/assets/karina.webp";
import p1 from "@/assets/p1.webp";
import p2 from "@/assets/p2.webp";
import p3 from "@/assets/p3.webp";
import p4 from "@/assets/p4.webp";
import p5 from "@/assets/p5.webp";
import p6 from "@/assets/p6.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KreaWeb — Diseño y desarrollo web profesional en Buenos Aires" },
      { name: "description", content: "Diseñamos páginas web modernas, rápidas y elegantes para pequeños negocios y profesionales en Buenos Aires. Paquetes desde básico a premium, mantenimiento y soporte." },
      { name: "keywords", content: "diseño web Buenos Aires, desarrollo web, páginas web profesionales, sitios web pequeños negocios, KreaWeb, diseño web Argentina" },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "KreaWeb" },
      { property: "og:title", content: "KreaWeb — Diseño y desarrollo web profesional en Buenos Aires" },
      { property: "og:description", content: "Páginas web modernas, claras y efectivas para hacer crecer tu negocio. Diseño elegante, desarrollo a medida y soporte continuo." },
      { property: "og:type", content: "website" },
      /*
       * CORRECCIÓN CRÍTICA #1: og:url cambiado de URL relativa "/" a URL absoluta.
       * ANTES: { property: "og:url", content: "/" }
       * AHORA: URL absoluta con protocolo y dominio.
       * Google puede ignorar o malinterpretar un og:url relativo.
       */
      { property: "og:url", content: "https://kreaweb.com.ar/" },
      { property: "og:locale", content: "es_AR" },
      { property: "og:site_name", content: "KreaWeb" },
      { property: "og:image", content: heroImg },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "KreaWeb — Diseño web profesional en Buenos Aires" },
      { name: "twitter:description", content: "Páginas web modernas, claras y efectivas para hacer crecer tu negocio." },
      { name: "twitter:image", content: heroImg },
    ],
    links: [
      /*
       * CORRECCIÓN CRÍTICA #1: canonical cambiado de URL relativa a URL absoluta.
       * ANTES: { rel: "canonical", href: "/" }
       * AHORA: URL absoluta con protocolo y dominio completo.
       * Sin esto, Google puede ignorar el canonical o malinterpretarlo.
       */
      { rel: "canonical", href: "https://kreaweb.com.ar/" },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "KreaWeb",
        description: "Diseño y desarrollo de páginas web profesionales para pequeños negocios y profesionales en Buenos Aires.",
        areaServed: "Buenos Aires, Argentina",
        address: { "@type": "PostalAddress", addressLocality: "Buenos Aires", addressCountry: "AR" },
        telephone: "+54 11 2563-4589",
        /*
         * CORRECCIÓN MEDIO #7: Schema.org completado con campos faltantes.
         * Se añaden: email, sameAs (Instagram), openingHours y AggregateRating.
         * AggregateRating activa las estrellas en los resultados de Google (rich snippets),
         * lo que puede multiplicar el CTR significativamente.
         * ACCIÓN REQUERIDA: reemplazar la URL de Instagram con la real.
         * ACCIÓN REQUERIDA: actualizar ratingValue y reviewCount con datos reales.
         */
        email: "hola@kreaweb.com.ar",
        sameAs: [
          "https://www.instagram.com/kreaweb.com.ar", // ACCIÓN: reemplazar con URL real de Instagram
        ],
        openingHours: "Mo-Fr 09:00-18:00",
        priceRange: "$$",
        /*
         * CORRECCIÓN MEDIO #7 (cont.): URL del Schema también era relativa.
         * ANTES: url: "/"
         * AHORA: URL absoluta consistente con canonical y og:url.
         */
        url: "https://kreaweb.com.ar/",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5",
          reviewCount: "12", // ACCIÓN: actualizar con el número real de reseñas verificadas
          bestRating: "5",
          worstRating: "1",
        },
      }),
    }],
  }),
  component: Home,
});

const WHATSAPP = "5491125634589";
const waLink = (msg = "Hola Karina, quiero info sobre KreaWeb.") =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    ["Servicios", "#paquetes"],
    ["Portafolio", "#portafolio"],
    ["Proceso", "#proceso"],
    ["Sobre mí", "#sobre"],
    ["Contacto", "#contacto"],
  ];
  return (
    <header className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${scrolled ? "bg-background/85 backdrop-blur-md border-b border-border" : ""}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-accent" />
          <span className="font-display text-xl font-semibold tracking-tight">Krea<span className="text-accent-deep">Web</span></span>
        </a>
        <nav className="hidden md:flex items-center gap-9 text-sm text-muted-foreground">
          {links.map(([l, h]) => (
            <a key={h} href={h} className="hover:text-foreground transition-colors">{l}</a>
          ))}
        </nav>
        <a href="#contacto" className="hidden md:inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition">
          Pedir cotización <ArrowRight className="size-4" />
        </a>
        <button onClick={() => setOpen(v => !v)} className="md:hidden p-2" aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-background border-t border-border px-6 py-6 space-y-4">
          {links.map(([l, h]) => (
            <a key={h} href={h} onClick={() => setOpen(false)} className="block text-base">{l}</a>
          ))}
          <a href="#contacto" onClick={() => setOpen(false)} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground">
            Pedir cotización <ArrowRight className="size-4" />
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-32 lg:pt-40 pb-24 lg:pb-32 overflow-hidden">
      <div className="absolute -top-32 -right-32 size-[520px] rounded-full bg-accent/15 blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card/60 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <Sparkles className="size-3.5 text-accent-deep" /> Diseño web · Buenos Aires
          </div>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[0.98] tracking-tight text-balance">
            Páginas web profesionales y sencillas para
            <span className="font-serif italic font-normal text-accent-deep"> hacer crecer </span>
            tu negocio.
          </h1>
          <p className="mt-7 text-lg text-muted-foreground max-w-xl text-pretty">
            Diseño web claro, moderno y efectivo para pequeños negocios y profesionales independientes en Buenos Aires.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#paquetes" className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-gold text-foreground font-medium shadow-soft hover:shadow-lift transition-all">
              Ver paquetes y precios
              <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a href="#portafolio" className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-foreground/15 hover:border-foreground/40 transition">
              Ver portafolio
            </a>
          </div>
          <div className="mt-12 flex items-center gap-8 text-sm text-muted-foreground">
            <div><span className="text-foreground font-semibold text-2xl font-display">50+</span><br/>Proyectos entregados</div>
            <div className="h-10 w-px bg-border" />
            <div><span className="text-foreground font-semibold text-2xl font-display">4-18</span><br/>Días promedio</div>
            <div className="h-10 w-px bg-border hidden sm:block" />
            <div className="hidden sm:block"><span className="text-foreground font-semibold text-2xl font-display">100%</span><br/>Responsive</div>
          </div>
        </div>

        <div className="lg:col-span-5 relative reveal">
          <div className="relative rounded-3xl overflow-hidden shadow-lift">
            {/*
              * CORRECCIÓN ALTO IMPACTO #4: Imagen hero optimizada.
              * ANTES: sin fetchpriority, sin width/height explícitos para evitar CLS.
              * AHORA:
              *  - fetchpriority="high" para que el browser la descargue antes (mejora LCP).
              *  - loading="eager" explícito (es la imagen above-the-fold).
              *  - width y height declarados para que el browser reserve espacio
              *    y evite el layout shift (CLS penalizado en Core Web Vitals).
              *
              * ACCIÓN RECOMENDADA: convertir hero.jpg a WebP para reducir peso ~30%.
              * Herramienta: npx squoosh-cli --webp auto src/assets/hero.jpg
              */}
            <img
              src={heroImg}
              alt="Diseño web minimalista elegante para negocios en Buenos Aires"
              width={1600}
              height={1200}
              loading="eager"
              fetchPriority="high"
              className="w-full h-[520px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl p-5 shadow-soft max-w-[240px]">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-accent-deep font-medium">
              <span className="size-1.5 rounded-full bg-accent-deep animate-pulse" /> Disponible
            </div>
            <p className="mt-2 text-sm">Cupos de octubre abiertos. Reservá tu proyecto.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5 lg:col-start-1 reveal">
          <div className="relative">
            {/*
              * CORRECCIÓN ALTO IMPACTO #4: Imagen de Karina optimizada.
              * ANTES: alt genérico poco descriptivo para una persona real.
              * AHORA: alt más descriptivo que identifica a la persona y su rol.
              * También se añaden width y height para evitar CLS.
              *
              * ACCIÓN RECOMENDADA: convertir karina.jpg a WebP.
              */}
            <img
              src={karinaImg}
              alt="Karina, fundadora y diseñadora web de KreaWeb, Buenos Aires"
              width={900}
              height={1100}
              loading="lazy"
              className="rounded-3xl shadow-lift w-full max-w-md object-cover"
            />
            <div className="absolute -bottom-5 -right-5 bg-accent rounded-2xl px-5 py-4">
              <p className="font-display text-2xl font-semibold">Karina</p>
              <p className="text-xs uppercase tracking-widest">Fundadora · Diseñadora</p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-6 lg:col-start-7 reveal">
          <span className="text-xs uppercase tracking-[0.22em] text-accent-deep">Sobre KreaWeb</span>
          {/*
            * CORRECCIÓN MEDIO #8: Jerarquía de encabezados corregida.
            * Google usa la jerarquía de headings para entender la estructura temática.
            * En esta sección no había problema de jerarquía (h2 es correcto aquí),
            * pero se verificó que todos los h3 internos de secciones sean consistentes.
            */}
          <h2 className="mt-4 font-display text-4xl lg:text-5xl font-semibold leading-tight text-balance">
            Diseño con intención, <span className="font-serif italic font-normal">cercanía</span> y resultados.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Soy Karina, creadora de KreaWeb. Me especializo en diseñar páginas web profesionales,
            limpias y efectivas para pequeños negocios y profesionales independientes en Buenos Aires.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Trabajo con cada cliente como si fuera el único: escucho, propongo y construyo sitios
            que se ven hermosos y, sobre todo, que generan resultados reales.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {["Atención personalizada", "Diseño hecho a medida", "Plazos cumplidos", "Precios claros"].map((t) => (
              <div key={t} className="flex items-center gap-3 text-sm">
                <span className="size-7 rounded-full bg-accent/20 grid place-items-center"><Check className="size-4 text-accent-deep" /></span>
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const packages = [
  {
    name: "Básico",
    price: "$290.000",
    usd: "≈ $260 USD",
    time: "4 – 7 días",
    desc: "Ideal para empezar con presencia profesional online.",
    features: [
      "Sitio de 5–6 secciones (One Page / Landing)",
      "Diseño limpio y profesional",
      "Hero, Sobre el negocio, Servicios, Testimonios y Contacto",
      "Formulario de contacto + botón flotante de WhatsApp",
      "Google Maps e íconos de redes",
      "Dominio .com.ar + Hosting 1 año",
      "2 rondas de cambios",
    ],
    featured: false,
  },
  {
    name: "Profesional",
    price: "$490.000",
    usd: "≈ $440 USD",
    time: "8 – 12 días",
    desc: "El más elegido por negocios que quieren destacar.",
    features: [
      "Todo lo del Básico, más:",
      "Hasta 9–10 secciones + 1–2 páginas internas",
      "Portfolio / Galería o Menú",
      "Formularios avanzados",
      "SEO básico",
      "Integración Instagram",
      "4 rondas de cambios",
      "Capacitación breve",
    ],
    featured: true,
  },
  {
    name: "Premium",
    price: "$790.000",
    usd: "≈ $710 USD",
    time: "14 – 18 días",
    desc: "Sitio a medida con animaciones y SEO completo.",
    features: [
      "Todo lo del Profesional, más:",
      "Diseño personalizado con animaciones sutiles",
      "Hasta 12–15 secciones",
      "Galería avanzada o blog simple",
      "WhatsApp Business + Google Analytics",
      "SEO completo",
      "6 rondas de cambios",
      "1 mes de soporte gratis",
    ],
    featured: false,
  },
];

function Packages() {
  return (
    <section id="paquetes" className="py-28 lg:py-36 bg-secondary/40 relative grain">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        <div className="max-w-3xl reveal">
          <span className="text-xs uppercase tracking-[0.22em] text-accent-deep">Servicios y paquetes</span>
          <h2 className="mt-4 font-display text-4xl lg:text-5xl font-semibold leading-tight text-balance">
            Precios claros. <span className="font-serif italic font-normal">Sin sorpresas.</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Elegí el paquete que mejor se ajusta a tu negocio. Todos incluyen diseño responsive y atención personalizada.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-3 gap-6">
          {packages.map((p) => (
            <div
              key={p.name}
              className={`relative reveal rounded-3xl p-8 lg:p-9 border transition-all duration-500 ${
                p.featured
                  ? "bg-primary text-primary-foreground border-primary shadow-lift lg:-translate-y-4"
                  : "bg-card border-border hover:shadow-soft hover:-translate-y-1"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-8 px-3 py-1 rounded-full bg-accent text-xs font-medium uppercase tracking-widest text-foreground">
                  Más elegido
                </span>
              )}
              <p className={`text-xs uppercase tracking-[0.22em] ${p.featured ? "text-accent" : "text-accent-deep"}`}>Paquete</p>
              {/*
                * CORRECCIÓN MEDIO #8: h3 como encabezado de cada card de paquete.
                * Jerarquía correcta: h1 (hero) > h2 (sección) > h3 (card individual).
                */}
              <h3 className="mt-2 font-display text-3xl font-semibold">{p.name}</h3>
              <p className={`mt-2 text-sm ${p.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{p.desc}</p>

              <div className="mt-7 flex items-end gap-2">
                <span className="font-display text-4xl font-semibold">{p.price}</span>
                <span className={`text-sm pb-1.5 ${p.featured ? "text-primary-foreground/60" : "text-muted-foreground"}`}>ARS</span>
              </div>
              <p className={`text-sm ${p.featured ? "text-primary-foreground/60" : "text-muted-foreground"}`}>{p.usd} · Entrega en {p.time}</p>

              <div className={`my-7 h-px ${p.featured ? "bg-primary-foreground/15" : "bg-border"}`} />

              <ul className="space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm">
                    <Check className={`size-4 mt-0.5 shrink-0 ${p.featured ? "text-accent" : "text-accent-deep"}`} />
                    <span className={p.featured ? "text-primary-foreground/90" : ""}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={waLink(`Hola Karina, me interesa el Paquete ${p.name}.`)}
                target="_blank" rel="noreferrer"
                className={`mt-9 inline-flex w-full items-center justify-center gap-2 px-6 py-3.5 rounded-full font-medium transition ${
                  p.featured
                    ? "bg-accent text-foreground hover:bg-accent-deep"
                    : "bg-foreground text-background hover:bg-foreground/90"
                }`}
              >
                Quiero este paquete <ArrowRight className="size-4" />
              </a>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          <span className="text-accent-deep font-medium">10% de descuento</span> si pagás el 50% por adelantado · Precios en ARS se ajustan por inflación.
        </p>
      </div>
    </section>
  );
}

function Maintenance() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="reveal rounded-3xl bg-foreground text-background p-10 lg:p-16 grid lg:grid-cols-12 gap-10 items-center relative overflow-hidden">
          <div className="absolute -top-24 -right-24 size-[400px] rounded-full bg-accent/20 blur-3xl" />
          <div className="lg:col-span-7 relative">
            <span className="text-xs uppercase tracking-[0.22em] text-accent">Mantenimiento</span>
            <h2 className="mt-4 font-display text-4xl lg:text-5xl font-semibold text-balance">
              Tu sitio, siempre <span className="font-serif italic font-normal text-accent">impecable</span>.
            </h2>
            <p className="mt-5 text-background/70 max-w-lg">
              Actualizaciones, backups, soporte y mejoras continuas para que solo te ocupes de tu negocio.
            </p>
          </div>
          <div className="lg:col-span-5 grid sm:grid-cols-2 gap-4 relative">
            <div className="rounded-2xl bg-background/5 border border-background/10 p-6">
              <p className="text-xs uppercase tracking-widest text-accent">Mensual</p>
              <p className="mt-3 font-display text-2xl font-semibold">$65k – $95k</p>
              <p className="text-sm text-background/60">ARS / mes</p>
            </div>
            <div className="rounded-2xl bg-accent text-foreground p-6">
              <p className="text-xs uppercase tracking-widest">Anual</p>
              <p className="mt-3 font-display text-2xl font-semibold">$650.000</p>
              <p className="text-sm">Ahorrás 20%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/*
 * CORRECCIÓN MEDIO #9: Portfolio con aria-label únicos por proyecto.
 * ANTES: todos los links apuntaban a #contacto con el mismo contenido semántico.
 *   Google los veía como 8 links idénticos al mismo destino, sin valor diferencial.
 * AHORA: cada proyecto tiene un aria-label único descriptivo del tipo
 *   "Ver proyecto [Nombre]" para que Google entienda que cada link es diferente.
 *
 * ACCIÓN IDEAL: crear páginas o secciones individuales por proyecto para
 *   que cada link apunte a un destino único (/portafolio/casa-olivar, etc.)
 *   Esto maximizaría el SEO. 
 *   Agrego la url a todas las imagenes, de manera que cuando se agreguen, se actualiza automaticamente
 *   El aria-label es la corrección mínima viable.
 */

// AGREGAR antes de: const projects = [
// TypeScript necesita saber que url existe en el tipo para que no tire error cuando lo usés en el JSX.

type Project = {
  img: string;
  name: string;
  tag: string;
  url: string | null;
};

const projects: Project[] = [
  { img: p1, name: "Elenas Kitchen", tag: "Restaurante", url: "https://portafolio1.kreaweb.com.ar" },
  { img: p2, name: "Studio Lumen", tag: "Peluquería", url: null },
  { img: p3, name: "Forma Fit", tag: "Entrenador personal" , url: null },
  { img: p4, name: "Méndez & Asoc.", tag: "Abogados", url: null },
  { img: p5, name: "Café Recoleta", tag: "Cafetería", url: null },
  { img: p6, name: "Atelier Sur", tag: "Boutique", url: null },
  { img: p1, name: "Botánica Verde", tag: "Vivero", url: null },
  { img: p2, name: "Dra. Soler", tag: "Consultorio", url: null },
];

function Portfolio() {
  return (
    <section id="portafolio" className="py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6 reveal">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.22em] text-accent-deep">Portafolio</span>
            <h2 className="mt-4 font-display text-4xl lg:text-5xl font-semibold leading-tight text-balance">
              Negocios reales, <span className="font-serif italic font-normal">resultados reales</span>.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Una selección de proyectos diseñados y desarrollados a medida.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <a
  key={i}
  href={p.url ?? "#contacto"}
   /*
   * CORRECCIÓN MEDIO #9: aria-label único por proyecto.         
   * ANTES: sin aria-label — todos los links idénticos para 
   *Google.
   * AHORA: cada link es semánticamente diferenciado.
   * Si el proyecto tiene URL real, abre en nueva pestaña con target="_blank" y el rel="noreferrer" por seguridad 
   * (evita que el sitio de destino acceda a datos de referencia). Si no tiene URL, sigue yendo a #contacto como antes.
   */
  target={p.url ? "_blank" : undefined}
  rel={p.url ? "noreferrer" : undefined}
  aria-label={`Ver proyecto ${p.name} — ${p.tag}`}
  className={`group reveal relative overflow-hidden rounded-3xl bg-card border border-border ${
    i % 5 === 0 ? "lg:row-span-2 lg:aspect-auto" : ""
  }`}
  >
              <div className={`overflow-hidden ${i % 5 === 0 ? "lg:h-[640px]" : "aspect-[4/3]"}`}>
			  
                {/*
                  * CORRECCIÓN ALTO IMPACTO #4: Imágenes de portfolio con width/height.
                  * ANTES: sin width y height declarados → genera layout shift (CLS penalizado).
                  * AHORA: dimensiones declaradas para que el browser reserve el espacio correcto.
                  *
                  * ACCIÓN RECOMENDADA: convertir todas las imágenes p1-p6 a WebP.
                  */}
                <img
                  src={p.img}
                  alt={`Proyecto de diseño web para ${p.name} — ${p.tag} en Buenos Aires`}
                  width={1000}
                  height={800}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="absolute bottom-0 inset-x-0 p-6 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-xs uppercase tracking-widest text-accent">{p.tag}</p>
                <div className="flex items-center justify-between mt-1">
                  <h3 className="font-display text-2xl text-background font-semibold">{p.name}</h3>
                  <span className="inline-flex items-center gap-1 text-sm text-background">Ver proyecto <ArrowRight className="size-4" /></span>
                </div>
              </div>
              <div className="p-5 group-hover:opacity-0 transition flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-widest text-accent-deep">{p.tag}</p>
                  <h3 className="font-display text-xl font-semibold mt-0.5">{p.name}</h3>
                </div>
                <ArrowRight className="size-4 text-muted-foreground" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  { n: "01", t: "Reunión inicial", d: "Conversamos sobre tu negocio, objetivos y referencias. Te envío una propuesta clara.", icon: MessageCircle },
  { n: "02", t: "Diseño", d: "Diseño visual a medida, con foco en claridad, marca y conversión.", icon: Layout },
  { n: "03", t: "Desarrollo", d: "Programación rápida, optimizada y 100% responsive en todos los dispositivos.", icon: Code2 },
  { n: "04", t: "Entrega y capacitación", d: "Publicamos el sitio, te capacito y te acompaño en los primeros pasos.", icon: Rocket },
];

function Process() {
  return (
    <section id="proceso" className="py-28 lg:py-36 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl reveal">
          <span className="text-xs uppercase tracking-[0.22em] text-accent-deep">Proceso</span>
          <h2 className="mt-4 font-display text-4xl lg:text-5xl font-semibold leading-tight text-balance">
            Simple, <span className="font-serif italic font-normal">claro</span> y ordenado.
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <div key={s.n} className="reveal group relative rounded-3xl bg-card border border-border p-7 hover:border-accent transition" style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="flex items-center justify-between">
                <span className="font-display text-sm text-accent-deep tracking-widest">{s.n}</span>
                <s.icon className="size-5 text-muted-foreground group-hover:text-accent-deep transition" />
              </div>
              {/*
                * CORRECCIÓN MEDIO #8: h3 correcto en cards de proceso.
                * La jerarquía h1 > h2 > h3 se mantiene consistente en todas las secciones.
                */}
              <h3 className="mt-8 font-display text-xl font-semibold">{s.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  { name: "Lucía Martínez", biz: "Pastelería Mila", text: "Karina entendió perfecto lo que necesitaba. La web quedó hermosa y aumentaron mucho las consultas por WhatsApp." },
  { name: "Federico Álvarez", biz: "Estudio Jurídico Álvarez", text: "Profesionalismo total. Plazos cumplidos, diseño impecable y un trato cálido en todo el proceso." },
  { name: "Sofía Ramírez", biz: "Sofía Yoga Studio", text: "Mi web refleja exactamente la energía de mi estudio. Recomiendo KreaWeb con los ojos cerrados." },
  { name: "Diego Pereyra", biz: "Tallarines del Abasto", text: "Sencillo, rápido y muy bien hecho. Ahora los clientes encuentran el menú y reservan en segundos." },
];

function Testimonials() {
  return (
    <section className="py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-end reveal">
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-[0.22em] text-accent-deep">Testimonios</span>
            <h2 className="mt-4 font-display text-4xl lg:text-5xl font-semibold leading-tight text-balance">
              Lo que dicen quienes ya <span className="font-serif italic font-normal">trabajaron conmigo</span>.
            </h2>
          </div>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <figure key={i} className={`reveal rounded-3xl p-8 lg:p-10 border border-border bg-card relative ${i % 3 === 0 ? "md:translate-y-6" : ""}`}>
              <Quote className="size-8 text-accent-deep/40" />
              <blockquote className="mt-5 text-lg leading-relaxed text-pretty">"{t.text}"</blockquote>
              <figcaption className="mt-7 flex items-center gap-4">
                <div className="size-12 rounded-full bg-gradient-gold grid place-items-center font-display font-semibold text-foreground">
                  {t.name.split(" ").map(n => n[0]).join("").slice(0,2)}
                </div>
                <div>
                  <p className="font-medium">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.biz}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const msg = `Hola Karina, soy ${f.get("name")} (${f.get("email")}). ${f.get("message")}`;
    window.open(waLink(msg), "_blank");
    setSent(true);
  };
  return (
    <section id="contacto" className="py-28 lg:py-36 bg-foreground text-background relative overflow-hidden">
      <div className="absolute top-0 right-0 size-[600px] rounded-full bg-accent/15 blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-14 relative">
        <div className="lg:col-span-5">
          <span className="text-xs uppercase tracking-[0.22em] text-accent">Contacto</span>
          <h2 className="mt-4 font-display text-4xl lg:text-5xl font-semibold leading-tight text-balance">
            Hagamos tu sitio <span className="font-serif italic font-normal text-accent">realidad</span>.
          </h2>
          <p className="mt-6 text-background/70 max-w-md">
            Contame sobre tu proyecto y te respondo en menos de 24 horas con una propuesta personalizada.
          </p>

          <div className="mt-10 space-y-5 text-sm">
            <a href={waLink()} target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
              <span className="size-11 rounded-full bg-accent grid place-items-center text-foreground"><MessageCircle className="size-5" /></span>
              <div>
                <p className="text-xs uppercase tracking-widest text-accent">WhatsApp</p>
                <p className="text-base group-hover:text-accent transition">+54 11 2563-4589</p>
              </div>
            </a>
            <div className="flex items-center gap-4">
              <span className="size-11 rounded-full bg-background/10 grid place-items-center"><Mail className="size-5" /></span>
              <div>
                <p className="text-xs uppercase tracking-widest text-background/50">Email</p>
                <p>hola@kreaweb.com.ar</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="size-11 rounded-full bg-background/10 grid place-items-center"><MapPin className="size-5" /></span>
              <div>
                <p className="text-xs uppercase tracking-widest text-background/50">Ubicación</p>
                <p>Buenos Aires, Argentina</p>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="lg:col-span-7 rounded-3xl bg-background text-foreground p-8 lg:p-10 shadow-lift">
          <div className="grid sm:grid-cols-2 gap-5">
            <label className="block">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Nombre</span>
              <input required name="name" maxLength={80} className="mt-2 w-full px-4 py-3.5 rounded-xl border border-border bg-background focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 transition" placeholder="Tu nombre" />
            </label>
            <label className="block">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Email</span>
              <input required name="email" type="email" maxLength={120} className="mt-2 w-full px-4 py-3.5 rounded-xl border border-border bg-background focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 transition" placeholder="tu@email.com" />
            </label>
            <label className="block sm:col-span-2">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Negocio</span>
              <input name="business" maxLength={100} className="mt-2 w-full px-4 py-3.5 rounded-xl border border-border bg-background focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 transition" placeholder="Nombre o rubro" />
            </label>
            <label className="block sm:col-span-2">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Mensaje</span>
              <textarea required name="message" rows={5} maxLength={1000} className="mt-2 w-full px-4 py-3.5 rounded-xl border border-border bg-background focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 transition resize-none" placeholder="Contame brevemente tu proyecto, paquete de interés y plazos…" />
            </label>
          </div>
          <button type="submit" className="mt-6 inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-gold text-foreground font-medium shadow-soft hover:shadow-lift transition">
            {sent ? "¡Gracias! Te respondo pronto" : "Enviar mensaje"} <ArrowRight className="size-4" />
          </button>
          <p className="mt-3 text-xs text-muted-foreground">Al enviar, abriremos WhatsApp con tu mensaje listo.</p>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-accent" />
            <span className="font-display text-xl font-semibold">Krea<span className="text-accent-deep">Web</span></span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm">
            Diseño y desarrollo web para pequeños negocios y profesionales en Buenos Aires.
          </p>
          <div className="mt-6 flex gap-3">
            <a href={waLink()} target="_blank" rel="noreferrer" aria-label="Escribir por WhatsApp" className="size-10 rounded-full border border-border grid place-items-center hover:bg-accent hover:border-accent transition"><MessageCircle className="size-4" /></a>
            {/*
              * CORRECCIÓN MEDIO #7: Link de Instagram actualizado.
              * ANTES: href="#" — link vacío sin destino real.
              * AHORA: placeholder con URL de Instagram.
              * ACCIÓN REQUERIDA: reemplazar con la URL real del perfil de Instagram de KreaWeb.
              * Este link también está referenciado en el Schema.org sameAs.
              */}
            <a href="https://www.instagram.com/kreaweb.com.ar" target="_blank" rel="noreferrer" aria-label="Instagram de KreaWeb" className="size-10 rounded-full border border-border grid place-items-center hover:bg-accent hover:border-accent transition"><Instagram className="size-4" /></a>
            <a href="mailto:hola@kreaweb.com.ar" aria-label="Enviar email a KreaWeb" className="size-10 rounded-full border border-border grid place-items-center hover:bg-accent hover:border-accent transition"><Mail className="size-4" /></a>
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-accent-deep">Navegación</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#paquetes" className="hover:text-accent-deep">Paquetes</a></li>
            <li><a href="#portafolio" className="hover:text-accent-deep">Portafolio</a></li>
            <li><a href="#proceso" className="hover:text-accent-deep">Proceso</a></li>
            <li><a href="#contacto" className="hover:text-accent-deep">Contacto</a></li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-accent-deep">Contacto</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Phone className="size-3.5" /> +54 11 2563-4589</li>
            <li className="flex items-center gap-2"><Mail className="size-3.5" /> hola@kreaweb.com.ar</li>
            <li className="flex items-center gap-2"><MapPin className="size-3.5" /> Buenos Aires, Argentina</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} KreaWeb · Diseñado con cuidado en Buenos Aires.
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={waLink()}
      target="_blank" rel="noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 pl-4 pr-5 py-3.5 rounded-full bg-gradient-gold text-foreground font-medium shadow-lift hover:scale-105 transition-transform"
    >
      <MessageCircle className="size-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}

function Home() {
  useReveal();
  return (
    <div className="bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Packages />
        <Maintenance />
        <Portfolio />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
