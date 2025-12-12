/* empty css                                 */
import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_DdhnyDlc.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DBahohPd.mjs';
export { renderers } from '../renderers.mjs';

const $$Music = createComponent(($$result, $$props, $$slots) => {
  const discography = [
    {
      id: "baltic",
      title: "Baltic",
      year: 2024,
      art: "https://placehold.co/400x400/c3b47f/1e212b?text=BALTIC+ALBUM+ART",
      tracks: ["Baltic", "San Jose", "Windjammer", "Dark Eyes", "Track 5", "Track 6"],
      links: { spotify: "#", apple: "#", store: "#" }
    },
    {
      id: "atlantic",
      title: "Atlantic",
      year: 2022,
      art: "https://placehold.co/400x400/1e212b/c3b47f?text=ATLANTIC+ALBUM+ART",
      tracks: ["B\xE9same Mucho (Live)", "Elizabeth", "Gypsy Dance", "Track 4", "Track 5"],
      links: { spotify: "#", apple: "#", store: "#" }
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Music" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="pt-32 pb-20 max-w-7xl mx-auto px-8"> <h1 class="font-serif text-5xl text-center text-cream mb-12 border-b border-gold/30 pb-3">
Discography
</h1> <div class="space-y-16"> ${discography.map((album) => renderTemplate`<div${addAttribute(album.id, "id")} class="bg-cream/5 p-8 rounded-xl shadow-2xl border border-gold/20"> <div class="grid md:grid-cols-3 gap-10 items-start"> <div class="col-span-1"> <img${addAttribute(album.art, "src")}${addAttribute(`Album art for ${album.title}`, "alt")} class="w-full aspect-square object-cover rounded-lg shadow-xl"> </div> <div class="md:col-span-2"> <h2 class="font-serif text-4xl text-cream mb-2"> ${album.title} <span class="text-xl text-gold ml-3">(${album.year})</span> </h2> <p class="text-lg text-cream/70 mb-6">
Album description goes here. This album showcases the band's blend of ${album.id === "baltic" ? "Eastern European and Gypsy sounds." : "classic Latin and flamenco rhythms."} </p> <h3 class="text-xl font-semibold mb-3 border-b border-cream/20 pb-1">Tracklist</h3> <div class="grid grid-cols-2 gap-x-6"> <ol class="list-decimal pl-5 space-y-1 text-cream/80"> ${album.tracks.map((track, index) => renderTemplate`<li class="hover:text-gold transition cursor-default"> ${track} </li>`)} </ol> </div> <div class="mt-8 flex space-x-4"> <a${addAttribute(album.links.spotify, "href")} target="_blank" class="flex items-center bg-gold text-charcoal px-4 py-2 rounded-full font-bold text-sm hover:opacity-90 transition"> 
LISTEN ON SPOTIFY
</a> <a${addAttribute(album.links.apple, "href")} target="_blank" class="flex items-center border border-gold text-gold px-4 py-2 rounded-full font-bold text-sm hover:bg-gold hover:text-charcoal transition"> 
APPLE MUSIC
</a> <a${addAttribute(album.links.store, "href")} class="flex items-center bg-cream text-charcoal px-4 py-2 rounded-full font-bold text-sm hover:opacity-80 transition">
BUY CD/VINYL
</a> </div> </div> </div> </div>`)} </div> </section> ` })}`;
}, "/Users/bradmclaughlin/Projects/romanstreet.com/src/pages/music.astro", void 0);

const $$file = "/Users/bradmclaughlin/Projects/romanstreet.com/src/pages/music.astro";
const $$url = "/music";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Music,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
