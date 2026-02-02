/* empty css                                 */
import { e as createComponent, m as maybeRenderHead, r as renderTemplate, g as addAttribute, h as createAstro, k as renderComponent } from '../chunks/astro/server_B-2LxKLH.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DSOK1L8C.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative h-[75vh] w-full overflow-hidden flex items-center justify-start"> <img src="https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/470217815_10170144120355632_742817811171311136_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=myb0jtNBNfUQ7kNvwEiz2m_&_nc_oc=Admrri4782QnfHYT5s_1VK-vJdZ_qEJdA4D43szUUVJFlf7dt9Po6Kkrn-yDCTR70rR1i4k4HkzXfpHuGZdvTg3h&_nc_zt=23&_nc_ht=scontent-atl3-1.xx&_nc_gid=ic0-Jx7Vg10rs1RO8dNzew&oh=00_AfkTlVZykDkdO2v_vA9NZ-mrj85Dpy8mckibiEvqaCoZbQ&oe=6943A39C" alt="Placeholder image for Roman Street live performance." class="absolute inset-0 w-full h-full object-cover object-[50%_19%]"> <div class="absolute inset-0 bg-charcoal/40"></div> <div class="relative max-w-7xl mx-auto px-8 z-5 text-left"> <h1 class="font-serif text-6xl md:text-8xl text-cream tracking-widest leading-none mb-4">
ROMAN <br> STREET
</h1> <p class="text-xl text-cream opacity-80 mb-6">
The Next Generation of Jazz Fusion
</p> <a href="/music#baltic" class="inline-block bg-gold text-charcoal px-6 py-3 rounded-full font-bold uppercase text-sm 
				   hover:bg-opacity-80 transition duration-300 shadow-xl">
LATEST ALBUM: BALCONY OF THE WORLD — LISTEN NOW
</a> </div> </section>`;
}, "/Users/bradmclaughlin/Projects/romanstreet.com/src/components/home/Hero.astro", void 0);

const $$TourList = createComponent(async ($$result, $$props, $$slots) => {
  const SHEET_ID = "1cCpkONhojr2Pw0WNxwXNPeoQfho_kWMkqQ-XDiOmSkI";
  const CSV_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv`;
  let shows = [];
  try {
    const response = await fetch(CSV_URL);
    const csv = await response.text();
    const rows = csv.trim().split("\n").filter((row) => row.trim() !== "");
    const dataRows = rows.slice(1);
    shows = dataRows.map((row) => {
      const cells = row.match(/(".*?"|[^",\r\n]+)(?=\s*,|\s*$)/g) || [];
      const clean = cells.map((c) => c.replace(/^"|"$/g, "").trim());
      const month = clean[0] || "";
      const day = clean[1] || "";
      const year = clean[2] || "";
      const time = clean[3] || "";
      const city = clean[4] || "";
      const state = clean[5] || "";
      const venue = clean[6] || "";
      const status = clean[7] || "TBA";
      const link = clean[8] || "#";
      return {
        dateDisplay: `${month} ${day}`,
        venue,
        location: `${city}, ${state}`,
        time,
        status,
        tickets: link
      };
    }).slice(0, 3);
  } catch (e) {
    console.error("Sheet parsing error:", e);
  }
  return renderTemplate`${maybeRenderHead()}<section class="bg-charcoal py-20"> <div class="max-w-7xl mx-auto px-8"> <h2 class="text-4xl font-serif text-center mb-12 text-cream">
Upcoming Shows
</h2> <div class="grid md:grid-cols-3 gap-8"> ${shows.map((show) => renderTemplate`<article class="bg-cream/5 p-6 rounded-lg border border-gold/20 flex flex-col justify-between hover:border-gold/50 transition-colors"> <div> <p class="text-4xl font-bold text-cream mb-2 uppercase font-sans"> ${show.dateDisplay} </p> <h3 class="text-xl font-semibold text-cream mb-1 font-serif italic"> ${show.venue} </h3> <p class="text-sm text-cream/70 font-sans"> ${show.location} ${show.time && `| ${show.time}`} </p> </div> <div class="mt-6"> ${show.status.toLowerCase().includes("tickets") || show.status.toLowerCase().includes("sale") ? renderTemplate`<a${addAttribute(show.tickets, "href")} target="_blank" rel="noopener noreferrer" class="block w-full bg-gold text-charcoal px-4 py-2 rounded-full font-bold text-sm hover:bg-cream transition text-center uppercase tracking-wider font-sans">
Get Tickets
</a>` : renderTemplate`<span class="block w-full text-center py-2 px-4 rounded-full border border-cream/20 text-cream/40 text-sm font-bold uppercase font-sans"> ${show.status} </span>`} </div> </article>`)} </div> <div class="text-center mt-12"> <a href="/tour" class="text-lg font-bold text-gold hover:text-cream transition underline underline-offset-8 decoration-gold/30 hover:decoration-cream font-sans">
View Full Tour Schedule →
</a> </div> </div> </section>`;
}, "/Users/bradmclaughlin/Projects/romanstreet.com/src/components/home/TourList.astro", void 0);

const $$Astro = createAstro();
const $$VideoGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$VideoGrid;
  const instagramPlaceholderUrl = "https://placehold.co/400x400/c3b47f/1e212b?text=@ROMANSTREETBAND";
  const { url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="bg-charcoal py-20 px-8"> <div class="max-w-7xl mx-auto"> <h2 class="text-4xl font-serif text-center mb-12 text-cream">Media & Moments</h2> <div class="grid md:grid-cols-2 gap-10"> <div class="p-6 bg-cream/5 rounded-lg border border-cream/10"> <h3 class="text-2xl font-semibold mb-4 text-gold">Latest Live Performance</h3> <div class="aspect-video w-full relative bg-charcoal flex items-center justify-center"></div> <div class="relative w-full aspect-video overflow-hidden rounded-md bg-black"> <iframe class="absolute inset-0 w-full h-full" src="https://www.youtube.com/embed/s0jdmZM4Zws"></iframe> </div> <div class="mt-4 text-center"> <a href="/videos" class="text-lg font-bold text-cream hover:text-gold transition underline underline-offset-4">
Watch All Videos →
</a> </div> </div> <div class="grid grid-rows-2 gap-10"> <a href="https://instagram.com/romanstreetband" target="_blank" class="bg-gold text-charcoal p-8 rounded-lg flex flex-col items-center justify-center 
						   text-center hover:opacity-90 transition shadow-xl"> <h3 class="text-3xl font-serif font-bold mb-2">Follow The Journey</h3> <p class="text-lg font-semibold mb-4">@ROMANSTREETBAND</p> <img${addAttribute(instagramPlaceholderUrl, "src")} alt="Instagram Feed Placeholder" class="w-32 h-32 object-cover rounded-md shadow-lg"> <span class="mt-4 text-sm font-bold underline">VIEW INSTAGRAM FEED →</span> </a> <div class="p-8 bg-cream/5 rounded-lg flex flex-col items-center justify-center border border-gold/30"> <h3 class="text-3xl font-serif text-cream mb-4">Book Roman Street</h3> <p class="text-lg text-cream/80 text-center mb-6">
Available for concerts, festivals, private events, and weddings.
</p> <a href="/booking" class="bg-gold text-charcoal px-6 py-3 rounded-full font-bold uppercase text-sm 
							   hover:opacity-90 transition shadow-xl">
SEND BOOKING INQUIRY
</a> </div> </div> </div> </div> </section>`;
}, "/Users/bradmclaughlin/Projects/romanstreet.com/src/components/home/VideoGrid.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Home" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "TourList", $$TourList, {})} ${renderComponent($$result2, "VideoGrid", $$VideoGrid, {})} ${maybeRenderHead()}<section class="py-20 px-8 max-w-7xl mx-auto"> <h2 class="text-4xl font-serif text-center mb-12">
Experience The Fusion
</h2> <div class="grid md:grid-cols-2 gap-10"> <div class="p-8 border border-gold/30 rounded-lg"> <h3 class="text-3xl font-serif mb-4">About the Sound</h3> <p class="text-lg opacity-80">
Named for an old Roman street in the Alps, Roman Street specializes in an improvisational blend of Classical, Gypsy, and Contemporary Jazz, Latin, and Nuevo Flamenco. It is the organic sound of acoustic instruments played by brothers Noah and Josh Thompson.
</p> <a href="/about" class="inline-block mt-4 text-gold hover:text-cream transition">Read Our Full Story →</a> </div> <div class="bg-cream/10 p-8 rounded-lg flex items-center justify-center"> <p class="text-xl italic font-serif text-gold">
"The Next Generation of Jazz Fusion."
</p> </div> </div> </section> ` })}`;
}, "/Users/bradmclaughlin/Projects/romanstreet.com/src/pages/index.astro", void 0);

const $$file = "/Users/bradmclaughlin/Projects/romanstreet.com/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
