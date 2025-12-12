/* empty css                                 */
import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_DdhnyDlc.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DBahohPd.mjs';
export { renderers } from '../renderers.mjs';

const $$Tour = createComponent(($$result, $$props, $$slots) => {
  const fullSchedule = [
    { date: "JAN 20, 2026", city: "Slidell", state: "LA", venue: "Lobby Lounge", status: "Tickets On Sale", tickets: "#" },
    { date: "FEB 15, 2026", city: "Birmingham", state: "AL", venue: "Lyric Theatre", status: "Tickets On Sale", tickets: "#" },
    { date: "MAR 22, 2026", city: "Caribbean", state: "N/A", venue: "Dave Koz Cruise", status: "Sold Out", tickets: null },
    { date: "APR 05, 2026", city: "Atlanta", state: "GA", venue: "The Velvet Note Jazz Club", status: "Tickets On Sale", tickets: "#" },
    { date: "MAY 10, 2026", city: "Pensacola", state: "FL", venue: "Pensacola Jazz Festival", status: "Tickets On Sale", tickets: "#" },
    { date: "JUN 01, 2026", city: "Beverly Hills", state: "CA", venue: "Spaghettini", status: "Tickets On Sale", tickets: "#" },
    { date: "JUL 18, 2026", city: "St. Louis", state: "MO", venue: "Blue Strawberry", status: "Tickets On Sale", tickets: "#" },
    { date: "AUG 29, 2026", city: "Chicago", state: "IL", venue: "City Winery", status: "Tickets On Sale", tickets: "#" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Tour Schedule" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="pt-32 pb-20 max-w-7xl mx-auto px-8"> <h1 class="font-serif text-5xl text-center text-cream mb-12 border-b border-gold/30 pb-3">
2026 Tour Schedule
</h1> <div class="mb-10 p-4 bg-cream/5 rounded-lg border border-gold/10"> <input type="text" placeholder="Search by City or Venue..." class="w-full p-3 bg-charcoal text-cream rounded border-2 border-gold/30 focus:border-gold outline-none placeholder-cream/50"> </div> <div class="hidden md:grid md:grid-cols-5 gap-4 font-bold text-gold border-b-2 border-gold/50 pb-2 mb-4 uppercase text-sm tracking-wider"> <div>Date</div> <div class="col-span-2">Venue</div> <div>Location</div> <div class="text-right">Tickets</div> </div> <div class="space-y-2"> ${fullSchedule.map((show) => renderTemplate`<div class="grid md:grid-cols-5 gap-4 py-4 md:py-3 items-center border-b border-cream/10 hover:bg-cream/5 transition duration-150 rounded-lg md:rounded-none px-4 md:px-0"> <div class="md:col-span-1"> <p class="font-serif font-bold text-xl text-gold">${show.date.split(",")[0]}</p> <p class="md:hidden text-sm text-cream/70 mt-1">${show.venue}, ${show.city}, ${show.state}</p> </div> <div class="hidden md:col-span-2 md:block"> <p class="font-semibold text-cream">${show.venue}</p> </div> <div class="hidden md:col-span-1 md:block"> <p class="text-cream/80">${show.city}, ${show.state}</p> </div> <div class="md:col-span-1 text-right"> ${show.status === "Tickets On Sale" ? renderTemplate`<a${addAttribute(show.tickets, "href")} target="_blank" class="inline-block bg-gold text-charcoal px-4 py-2 rounded-full font-bold text-sm hover:opacity-90 transition"> ${show.status} </a>` : renderTemplate`<span class="inline-block text-cream/40 px-4 py-2 rounded-full border border-cream/20 text-sm"> ${show.status} </span>`} </div> </div>`)} </div> <p class="text-center text-sm text-cream/60 mt-10">
*All dates and times are subject to change. Check venue websites for latest information.
</p> </section> ` })}`;
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
