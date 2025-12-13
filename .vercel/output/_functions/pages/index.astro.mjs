/* empty css                                 */
import { e as createComponent, m as maybeRenderHead, r as renderTemplate, h as addAttribute, k as renderComponent } from '../chunks/astro/server_DUl7M3rT.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Db1UAkey.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative h-[75vh] w-full overflow-hidden mt-16 flex items-center justify-start"> <img src="https://placehold.co/1920x1080/1e212b/c3b47f?text=ROMAN+STREET+HERO" alt="Placeholder image for Roman Street live performance." class="absolute inset-0 w-full h-full object-cover"> <div class="absolute inset-0 bg-charcoal/40"></div> <div class="relative max-w-7xl mx-auto px-8 z-10 text-left"> <h1 class="font-serif text-6xl md:text-8xl text-cream tracking-widest leading-none mb-4">
ROMAN <br> STREET
</h1> <p class="text-xl text-cream opacity-80 mb-6">
The Next Generation of Jazz Fusion
</p> <a href="/music#baltic" class="inline-block bg-gold text-charcoal px-6 py-3 rounded-full font-bold uppercase text-sm 
				   hover:bg-opacity-80 transition duration-300 shadow-xl">
LATEST ALBUM: BALTIC — LISTEN NOW
</a> </div> </section>`;
}, "/Users/bradmclaughlin/Projects/romanstreet.com/src/components/home/Hero.astro", void 0);

const $$TourList = createComponent(($$result, $$props, $$slots) => {
  const upcomingDates = [
    { id: 1, date: "JAN 20", venue: "Lobby Lounge", location: "Slidell, LA", tickets: "#" },
    { id: 2, date: "MAR 22", venue: "Dave Koz and Friends at Sea", location: "Caribbean Cruise", tickets: "#" },
    { id: 3, date: 4, date: "APR 05", venue: "The Velvet Note Jazz Club", location: "Atlanta, GA", tickets: "#" }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="bg-charcoal py-20"> <div class="max-w-7xl mx-auto px-8"> <h2 class="text-4xl font-serif text-center mb-12 text-cream">Upcoming Shows</h2> <div class="grid md:grid-cols-3 gap-8"> ${upcomingDates.map((show) => renderTemplate`<div class="bg-cream/5 hover:bg-cream/10 transition duration-300 p-6 rounded-lg border border-gold/20 flex flex-col justify-between"> <div> <p class="text-4xl font-bold text-cream mb-2">${show.date}</p> <h3 class="text-xl font-semibold text-cream mb-1">${show.venue}</h3> <p class="text-sm text-cream opacity-70">${show.location}</p> </div> <a${addAttribute(show.tickets, "href")} target="_blank" class="mt-6 self-start bg-gold text-charcoal px-4 py-2 rounded-full font-bold text-sm 
							   hover:bg-opacity-80 transition block text-center">
GET TICKETS
</a> </div>`)} </div> <div class="text-center mt-12"> <a href="/tour" class="text-lg font-bold text-gold hover:text-cream transition underline underline-offset-4">
View Full Tour Schedule →
</a> </div> </div> </section>`;
}, "/Users/bradmclaughlin/Projects/romanstreet.com/src/components/home/TourList.astro", void 0);

const $$VideoGrid = createComponent(($$result, $$props, $$slots) => {
  const videoPlaceholderUrl = "https://placehold.co/800x450/1e212b/c3b47f?text=FEATURED+VIDEO";
  const instagramPlaceholderUrl = "https://placehold.co/400x400/c3b47f/1e212b?text=@ROMANSTREETMUSIC";
  return renderTemplate`${maybeRenderHead()}<section class="bg-charcoal py-20 px-8"> <div class="max-w-7xl mx-auto"> <h2 class="text-4xl font-serif text-center mb-12 text-cream">Media & Moments</h2> <div class="grid md:grid-cols-2 gap-10"> <div class="p-6 bg-cream/5 rounded-lg border border-cream/10"> <h3 class="text-2xl font-semibold mb-4 text-gold">Latest Live Performance</h3> <div class="aspect-video w-full relative bg-charcoal flex items-center justify-center"> <img${addAttribute(videoPlaceholderUrl, "src")} alt="Placeholder for latest Roman Street live video" class="w-full h-full object-cover rounded"> </div> <div class="mt-4 text-center"> <a href="/videos" class="text-lg font-bold text-cream hover:text-gold transition underline underline-offset-4">
Watch All Videos →
</a> </div> </div> <div class="grid grid-rows-2 gap-10"> <a href="https://instagram.com/romanstreetmusic" target="_blank" class="bg-gold text-charcoal p-8 rounded-lg flex flex-col items-center justify-center 
						   text-center hover:opacity-90 transition shadow-xl"> <h3 class="text-3xl font-serif font-bold mb-2">Follow The Journey</h3> <p class="text-lg font-semibold mb-4">@ROMANSTREETMUSIC</p> <img${addAttribute(instagramPlaceholderUrl, "src")} alt="Instagram Feed Placeholder" class="w-32 h-32 object-cover rounded-md shadow-lg"> <span class="mt-4 text-sm font-bold underline">VIEW INSTAGRAM FEED →</span> </a> <div class="p-8 bg-cream/5 rounded-lg flex flex-col items-center justify-center border border-gold/30"> <h3 class="text-3xl font-serif text-cream mb-4">Book Roman Street</h3> <p class="text-lg text-cream/80 text-center mb-6">
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
