import { e as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate, f as createAstro, l as renderHead, k as renderComponent, n as renderSlot } from './astro/server_DdhnyDlc.mjs';
import 'piccolore';
import 'clsx';
/* empty css                         */

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const navLinks = [
    { title: "HOME", href: "/" },
    { title: "MUSIC", href: "/music" },
    { title: "TOUR", href: "/tour" },
    { title: "VIDEOS", href: "/videos" },
    { title: "ABOUT", href: "/about" },
    { title: "STORE", href: "/store" }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="fixed top-0 w-full z-50 bg-charcoal/90 backdrop-blur-sm shadow-lg"> <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center"> <a href="/" class="font-serif text-3xl text-cream tracking-wider">
ROMAN STREET
</a> <div class="hidden lg:flex space-x-8"> ${navLinks.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="text-cream hover:text-gold transition duration-200 uppercase text-sm font-semibold"> ${link.title} </a>`)} </div> <a href="/booking" class="hidden sm:inline-block bg-gold text-charcoal px-4 py-2 rounded-full font-bold whitespace-nowrap text-sm hover:opacity-90 transition">
BOOKING INQUIRY
</a> </nav> </header>`;
}, "/Users/bradmclaughlin/Projects/romanstreet.com/src/components/common/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "/Users/bradmclaughlin/Projects/romanstreet.com/src/components/common/Footer.astro", void 0);

const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title} | Roman Street</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet"><link rel="stylesheet" href="/src/styles/global.css">${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/bradmclaughlin/Projects/romanstreet.com/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
