/* empty css                                 */
import { e as createComponent, k as renderComponent, l as renderScript, r as renderTemplate, m as maybeRenderHead, g as addAttribute } from '../chunks/astro/server_B-2LxKLH.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_6g5RksJP.mjs';
export { renderers } from '../renderers.mjs';

const $$Tour = createComponent(async ($$result, $$props, $$slots) => {
  const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSqqnH6z6qwQdxXZlfU6CMvGHlVZfOCqC8CumlXz_J1Yh3gQjmyt7nIUO0syGNKGHj8mESIT568Efx9/pub?gid=0&single=true&output=csv";
  const response = await fetch(SHEET_URL);
  const csv = await response.text();
  const rows = csv.trim().split("\n").filter((row) => row.trim() !== "");
  const fullSchedule = rows.slice(1).map((row) => {
    const cells = row.match(/(".*?"|[^",\r\n]+)(?=\s*,|\s*$)/g) || [];
    const clean = cells.map((c) => c.replace(/^"|"$/g, "").trim());
    return {
      date: `${clean[0]} ${clean[1]}`.trim(),
      // If clean[2] is the year and clean[3] is time, they are often exported as "2026, 8:00 PM"
      // We ensure we grab the right index even if they are split
      time: clean[3] || "",
      location: `${clean[4]}, ${clean[5]}`,
      // City, State
      venue: clean[6] || "TBA",
      status: clean[7] || "Upcoming",
      tickets: clean[8] || "#"
    };
  });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Tour Schedule" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="pt-40 pb-32 max-w-7xl mx-auto px-8"> <h1 class="font-serif text-6xl text-center text-cream mb-16 border-b border-gold/20 pb-6">
2026 Tour Schedule
</h1> <div class="mb-16 p-6 bg-cream/5 rounded-xl border border-gold/10 shadow-2xl"> <input id="tourSearch" type="text" placeholder="Search by City or Venue..." class="w-full p-4 bg-charcoal text-cream rounded-lg border-2 border-gold/20 focus:border-gold outline-none placeholder-cream/30 transition-all font-sans"> </div> <div class="hidden md:grid md:grid-cols-5 gap-8 font-bold text-gold/60 border-b border-gold/30 pb-4 mb-6 uppercase text-xs tracking-[0.2em]"> <div>Date</div> <div class="col-span-2">Venue</div> <div>Location</div> <div class="text-right">Status</div> </div> <div class="space-y-4"> ${fullSchedule.map((show) => renderTemplate`<div class="tour-row grid md:grid-cols-5 gap-8 py-10 md:py-8 items-center border-b border-cream/5 hover:bg-cream/[0.02] transition-all duration-300 px-6 md:px-0 group"> <div class="md:col-span-1"> <p class="font-serif font-bold text-3xl text-gold uppercase leading-none group-hover:scale-105 transition-transform origin-left">${show.date}</p> <p class="text-xs text-cream/40 mt-2 uppercase tracking-widest font-sans">${show.time}</p> </div> <div class="md:col-span-2"> <a${addAttribute(show.mapLink, "href")} target="_blank" rel="noopener noreferrer" class="inline-block group/link"> <p class="font-semibold text-cream text-2xl leading-tight mb-1 group-hover/link:text-gold transition-colors"> ${show.venue} <span class="inline-block text-gold opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all text-sm align-middle ml-1">↗</span> </p> </a> <p class="md:hidden text-sm text-gold/70 mt-2 font-sans tracking-wide">${show.location}</p> </div> <div class="hidden md:block md:col-span-1"> <p class="text-cream/60 font-sans text-base tracking-wide">${show.location}</p> </div> <div class="md:col-span-1 text-right"> ${show.status.toLowerCase().includes("available") || show.status.toLowerCase().includes("sale") ? renderTemplate`<a${addAttribute(show.tickets, "href")} target="_blank" class="inline-block bg-gold text-charcoal px-8 py-3 rounded-full font-bold text-xs hover:bg-cream hover:scale-105 transition-all uppercase tracking-widest shadow-lg active:scale-95"> ${show.status} </a>` : renderTemplate`<span class="inline-block text-cream/20 px-8 py-3 rounded-full border border-cream/10 text-xs uppercase font-bold tracking-widest"> ${show.status} </span>`} </div> </div>`)} </div> <p class="text-center text-xs text-cream/30 mt-20 italic font-sans uppercase tracking-widest">
* All dates and times are subject to change.
</p> </section> ` })} ${renderScript($$result, "/Users/bradmclaughlin/Projects/romanstreet.com/src/pages/tour.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/bradmclaughlin/Projects/romanstreet.com/src/pages/tour.astro", void 0);

const $$file = "/Users/bradmclaughlin/Projects/romanstreet.com/src/pages/tour.astro";
const $$url = "/tour";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Tour,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
