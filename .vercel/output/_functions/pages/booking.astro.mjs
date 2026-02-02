/* empty css                                 */
import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, l as renderScript } from '../chunks/astro/server_DUl7M3rT.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DPTYWPb5.mjs';
export { renderers } from '../renderers.mjs';

const $$Booking = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Contact" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="pt-36 pb-20 max-w-7xl mx-auto px-8"> <h1 class="font-serif text-5xl text-center text-cream mb-12 border-b border-gold/30 pb-3">
Get In Touch
</h1> <div class="grid md:grid-cols-3 gap-12"> <!-- Left contact info --> <div class="md:col-span-1 p-6 bg-cream/5 rounded-lg border border-gold/20 h-fit"> <h2 class="font-serif text-3xl text-gold mb-4">Inquiries</h2> <p class="text-lg text-cream/80 mb-6">
For all booking and press-related questions, please use the contacts below or fill out the form.
</p> <ul class="space-y-4"> <li> <h3 class="font-semibold text-cream">Booking & Management</h3> <a href="mailto:booking@romanstreet.com" class="text-gold hover:text-cream transition">booking@romanstreet.com</a> </li> <li> <h3 class="font-semibold text-cream">Press & Media</h3> <a href="mailto:press@romanstreet.com" class="text-gold hover:text-cream transition">press@romanstreet.com</a> </li> <li> <h3 class="font-semibold text-cream">General Questions</h3> <a href="mailto:info@romanstreet.com" class="text-gold hover:text-cream transition">info@romanstreet.com</a> </li> </ul> </div> <!-- Right form --> <div class="md:col-span-2"> <form id="contact-form" class="space-y-6 bg-charcoal/20 p-8 rounded-lg border border-gold/20 shadow-lg"> <div> <label for="name" class="block text-cream font-semibold mb-2">Name</label> <input type="text" id="name" name="name" required class="w-full bg-charcoal/50 text-cream border border-gold/50 focus:border-gold p-3 rounded outline-none"> </div> <div> <label for="email" class="block text-cream font-semibold mb-2">Email</label> <input type="email" id="email" name="email" required class="w-full bg-charcoal/50 text-cream border border-gold/50 focus:border-gold p-3 rounded outline-none"> </div> <div> <label for="subject" class="block text-cream font-semibold mb-2">Inquiry Type</label> <select id="subject" name="subject" class="w-full bg-charcoal/50 text-cream border border-gold/50 focus:border-gold p-3 rounded outline-none appearance-none"> <option value="general">General Question</option> <option value="booking">Booking Inquiry</option> <option value="press">Press/Media Request</option> </select> </div> <div> <label for="message" class="block text-cream font-semibold mb-2">Message</label> <textarea id="message" name="message" rows="5" required class="w-full bg-charcoal/50 text-cream border border-gold/50 focus:border-gold p-3 rounded outline-none resize-none"></textarea> </div> <button type="submit" class="bg-gold text-charcoal px-6 py-3 rounded-full font-bold uppercase hover:opacity-90 transition shadow-lg">
Send Message
</button> <p id="form-status" class="text-cream font-semibold mt-2 hidden"></p> </form> </div> </div> </section> ${renderScript($$result2, "/Users/bradmclaughlin/Projects/romanstreet.com/src/pages/booking.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/Users/bradmclaughlin/Projects/romanstreet.com/src/pages/booking.astro", void 0);

const $$file = "/Users/bradmclaughlin/Projects/romanstreet.com/src/pages/booking.astro";
const $$url = "/booking";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Booking,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
