/* empty css                                 */
import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute } from '../chunks/astro/server_B-2LxKLH.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_6g5RksJP.mjs';
export { renderers } from '../renderers.mjs';

const $$Videos = createComponent(($$result, $$props, $$slots) => {
  const featuredVideo = {
    title: "San Jose (Official Music Video)",
    url: "https://placehold.co/1280x720/1e212b/c3b47f?text=FEATURED+VIDEO+SAN+JOSE",
    // Placeholder for embed URL/Thumbnail
    description: 'The official video for the single "San Jose" from the album Baltic. Filmed on location in beautiful...'
  };
  const videoList = [
    { title: "Live at The Velvet Note", url: "https://placehold.co/640x360/c3b47f/1e212b?text=LIVE+1", type: "Live Performance" },
    { title: "Windjammer Studio Session", url: "https://placehold.co/640x360/1e212b/c3b47f?text=STUDIO+2", type: "Studio Session" },
    { title: "Gypsy Dance Acoustic", url: "https://placehold.co/640x360/c3b47f/1e212b?text=ACOUSTIC+3", type: "Acoustic Cover" },
    { title: "Baltic Album Trailer", url: "https://placehold.co/640x360/1e212b/c3b47f?text=TRAILER+4", type: "Trailer" },
    { title: "Behind the Scenes: Tour", url: "https://placehold.co/640x360/c3b47f/1e212b?text=BTS+5", type: "BTS" },
    { title: "Interview with JazzTrax", url: "https://placehold.co/640x360/1e212b/c3b47f?text=INTERVIEW+6", type: "Interview" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Videos" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="pt-32 pb-20 max-w-7xl mx-auto px-8"> <h1 class="font-serif text-5xl text-center text-cream mb-12 border-b border-gold/30 pb-3">
Official Videos
</h1> <div class="mb-16"> <h2 class="text-3xl font-serif text-gold mb-4">${featuredVideo.title}</h2> <div class="aspect-video w-full bg-charcoal rounded-lg shadow-2xl relative"> <img${addAttribute(featuredVideo.url, "src")}${addAttribute(featuredVideo.title, "alt")} class="w-full h-full object-cover rounded-lg"> </div> <p class="mt-4 text-cream/70 text-lg">${featuredVideo.description}</p> </div> <h2 class="text-3xl font-serif text-cream mb-8 border-b border-cream/20 pb-2">
All Clips
</h2> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> ${videoList.map((video) => renderTemplate`<a href="#" class="bg-cream/5 rounded-lg overflow-hidden transition duration-300 hover:shadow-xl hover:shadow-gold/20 block group"> <div class="aspect-video w-full relative bg-charcoal"> <img${addAttribute(video.url, "src")}${addAttribute(video.title, "alt")} class="w-full h-full object-cover group-hover:opacity-80 transition"> <div class="absolute inset-0 flex items-center justify-center text-gold opacity-0 group-hover:opacity-100 transition"> <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" viewBox="0 0 16 16"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"></path> </svg> </div> </div> <div class="p-4"> <p class="text-xs text-gold font-semibold uppercase mb-1">${video.type}</p> <h3 class="text-lg font-semibold text-cream group-hover:text-gold transition"> ${video.title} </h3> </div> </a>`)} </div> </section> ` })}`;
}, "/Users/bradmclaughlin/Projects/romanstreet.com/src/pages/videos.astro", void 0);

const $$file = "/Users/bradmclaughlin/Projects/romanstreet.com/src/pages/videos.astro";
const $$url = "/videos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Videos,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
