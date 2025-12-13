/* empty css                                 */
import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_DdhnyDlc.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_w1bXWVH1.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  const bioImage1 = "https://placehold.co/800x600/1e212b/c3b47f?text=BROTHERS+JOSH+AND+NOAH";
  const bioImage2 = "https://placehold.co/800x600/c3b47f/1e212b?text=ACOUSTIC+GUITARS";
  const keyQuote = "\u201CWhen brothers Joshua and Noah... made their Catalina Island JazzTrax Festival debut... we were blown away. They outsold ALL other bands CD's at the JazzTrax store.\u201D - Art Good, Producer, JazzTrax";
  const accolades = [
    "Opened for George Benson, The Gipsy Kings, Dave Koz, Ziggy Marley, and Maroon 5.",
    "Notable performances at: St. Lucia Jazz Festival, Jazztrax Catalina Island, The Hangout Music Festival, and two tours in central Europe.",
    "International airplay on over 200 stations including Sirius XM Watercolors Satellite Radio."
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "About Roman Street" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="pt-32 pb-20 max-w-7xl mx-auto px-8"> <h1 class="font-serif text-5xl text-center text-cream mb-16 border-b border-gold/30 pb-3">
The Roman Street Story
</h1> <div class="grid md:grid-cols-2 gap-12 items-center mb-20"> <div> <h2 class="font-serif text-3xl text-gold mb-4">Born from a Brotherly Jam</h2> <p class="text-lg mb-6 text-cream/80">
Roman Street was formed by brothers Noah and Josh Thompson, who first put their guitars together during their college years. Named for an old Roman street where they studied guitar in the Alps, their sound is a direct reflection of their diverse international training.
</p> <p class="text-lg text-cream/80">
A departure from over-produced trends, the band specializes in an improvisational fusion of **Classical, Gypsy and Contemporary Jazz, Latin, and Nuevo Flamenco.** They keep it simple: the beautifully organic sound of acoustic instruments played by talented musicians who love what they are doing.
</p> </div> <div> <img${addAttribute(bioImage1, "src")} alt="Brothers Noah and Josh Thompson playing acoustic guitars." class="w-full h-auto object-cover rounded-lg shadow-xl border border-gold/20"> </div> </div> <div class="bg-gold/10 p-10 rounded-lg border-l-4 border-gold mb-20"> <h2 class="font-serif text-3xl text-cream mb-6">Critical Acclaim: The Next Generation</h2> <blockquote class="italic text-xl text-cream/90 mb-6">
“${keyQuote}”
</blockquote> <p class="text-sm text-gold">— Art Good, Producer, JazzTrax Catalina Island</p> </div> <h2 class="font-serif text-3xl text-gold mb-6">Accolades & Appearances</h2> <div class="grid md:grid-cols-2 gap-10"> <div> <img${addAttribute(bioImage2, "src")} alt="Roman Street playing live on stage." class="w-full h-auto object-cover rounded-lg shadow-lg border border-cream/10"> </div> <div> <ul class="space-y-4 text-lg text-cream/90"> ${accolades.map((item) => renderTemplate`<li class="flex items-start"> <span class="text-gold text-2xl mr-3 font-bold">&bull;</span> ${item} </li>`)} </ul> <a href="/booking" class="mt-8 inline-block bg-gold text-charcoal px-6 py-3 rounded-full font-bold uppercase text-sm hover:opacity-90 transition shadow-xl">
BOOKING INQUIRY
</a> </div> </div> </section> ` })}`;
}, "/Users/bradmclaughlin/Projects/romanstreet.com/src/pages/about.astro", void 0);

const $$file = "/Users/bradmclaughlin/Projects/romanstreet.com/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
