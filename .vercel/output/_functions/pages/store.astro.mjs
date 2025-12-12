/* empty css                                 */
import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_DdhnyDlc.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DBahohPd.mjs';
export { renderers } from '../renderers.mjs';

const $$Store = createComponent(($$result, $$props, $$slots) => {
  const products = [
    { category: "Albums", title: "Baltic - Vinyl LP", price: "35.00", image: "https://placehold.co/400x400/c3b47f/1e212b?text=VINYL+LP" },
    { category: "Albums", title: "Atlantic - CD", price: "15.00", image: "https://placehold.co/400x400/1e212b/c3b47f?text=COMPACT+DISC" },
    { category: "Apparel", title: "Roman Street Logo T-Shirt", price: "25.00", image: "https://placehold.co/400x400/1e212b/c3b47f?text=T-SHIRT" },
    { category: "Apparel", title: "Gypsy Jazz Hoodie", price: "55.00", image: "https://placehold.co/400x400/c3b47f/1e212b?text=HOODIE" },
    { category: "Merch", title: "Signature Guitar Pick Set", price: "10.00", image: "https://placehold.co/400x400/1e212b/c3b47f?text=GUITAR+PICKS" },
    { category: "Merch", title: "Signed Poster (Baltic)", price: "20.00", image: "https://placehold.co/400x400/c3b47f/1e212b?text=POSTER" }
  ];
  const categories = [...new Set(products.map((p) => p.category))];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Store" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="pt-32 pb-20 max-w-7xl mx-auto px-8"> <h1 class="font-serif text-5xl text-center text-cream mb-12 border-b border-gold/30 pb-3">
Official Merch Shop
</h1> <div class="grid md:grid-cols-4 gap-10"> <aside class="md:col-span-1 p-6 bg-cream/5 rounded-lg h-fit border border-gold/20"> <h2 class="font-semibold text-xl text-gold mb-4 border-b border-gold/30 pb-2">
Categories
</h2> <ul class="space-y-2"> <li class="font-bold text-cream hover:text-gold cursor-pointer transition">All Products</li> ${categories.map((category) => renderTemplate`<li class="text-cream/80 hover:text-gold cursor-pointer transition">${category}</li>`)} </ul> <div class="mt-8 pt-4 border-t border-cream/20"> <p class="text-sm text-cream/70">Secure checkout handled by Shopify/Bandcamp.</p> </div> </aside> <div class="md:col-span-3"> <div class="grid grid-cols-2 lg:grid-cols-3 gap-6"> ${products.map((product) => renderTemplate`<div class="bg-cream/5 p-4 rounded-lg shadow-md border border-cream/10 flex flex-col items-center text-center"> <img${addAttribute(product.image, "src")}${addAttribute(product.title, "alt")} class="w-full h-auto object-cover rounded-md mb-4 shadow-lg"> <h3 class="font-semibold text-lg text-cream mb-1">${product.title}</h3> <p class="text-gold font-bold mb-3">$${product.price}</p> <button class="w-full bg-gold text-charcoal px-3 py-1.5 rounded-full font-bold text-sm 
									   hover:bg-opacity-80 transition uppercase">
Add to Cart
</button> </div>`)} </div> </div> </div> </section> ` })}`;
}, "/Users/bradmclaughlin/Projects/romanstreet.com/src/pages/store.astro", void 0);

const $$file = "/Users/bradmclaughlin/Projects/romanstreet.com/src/pages/store.astro";
const $$url = "/store";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Store,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
