/* empty css                           */import { f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead, g as addAttribute } from '../astro_852d4028.mjs';
import 'html-escaper';
import { $ as $$MainLayout } from './about_4464f30f.mjs';
import { LuShoppingCart } from 'react-icons/lu';
/* empty css                             */
const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const services = [
    {
      img: "../assets/Disfraces/disfraces1.png",
      title: "Tallas",
      text: "M - L",
      priceIco: "/public/icons/icoprice.png",
      price: "80.00",
      link: "https://wa.me/p/5925680704222638/51965793184"
    },
    {
      img: "../assets/Disfraces/disfraces2.png",
      title: "Tallas",
      text: "M - L",
      priceIco: "/public/icons/icoprice.png",
      price: "80.00",
      link: "https://wa.me/p/7753371591389103/51965793184"
    },
    {
      img: "../assets/Disfraces/disfraces3.png",
      title: "Tallas",
      text: "M - L",
      priceIco: "/public/icons/icoprice.png",
      price: "89.00",
      link: "https://wa.me/p/8258166680863090/51965793184"
    },
    {
      img: "../assets/Disfraces/disfraces4.png",
      title: "Tallas",
      text: "M - L",
      priceIco: "/public/icons/icoprice.png",
      price: "80.00",
      link: "https://wa.me/p/7839920059381146/51965793184"
    },
    {
      img: "../assets/Disfraces/disfraces5.png",
      title: "Tallas",
      text: "M - L",
      priceIco: "/public/icons/icoprice.png",
      price: "80.00",
      link: "https://wa.me/p/7541552422589709/51965793184"
    },
    {
      img: "../assets/Disfraces/disfraces6.png",
      title: "Tallas",
      text: "M - L",
      priceIco: "/public/icons/icoprice.png",
      price: "89.00",
      link: "https://wa.me/p/7441217375991080/51965793184"
    },
    {
      img: "../assets/Disfraces/disfraces7.png",
      title: "Tallas",
      text: "M - L",
      priceIco: "/public/icons/icoprice.png",
      price: "89.00",
      link: "https://wa.me/p/7719441081458547/51965793184"
    },
    {
      img: "../assets/Disfraces/disfraces8.png",
      title: "Tallas",
      text: "M - L",
      priceIco: "/public/icons/icoprice.png",
      price: "89.00",
      link: "https://wa.me/p/7904633602927253/51965793184"
    },
    {
      img: "../assets/Disfraces/disfraces9.png",
      title: "Tallas",
      text: "M - L",
      priceIco: "/public/icons/icoprice.png",
      price: "85.00",
      link: "https://wa.me/p/7318488944946477/51965793184"
    },
    {
      img: "../assets/Disfraces/disfraces10.png",
      title: "Tallas",
      text: "M - L",
      priceIco: "/public/icons/icoprice.png",
      price: "89.00",
      link: "https://wa.me/p/7590430294327896/51965793184"
    },
    {
      img: "../assets/Disfraces/disfraces11.png",
      title: "Tallas",
      text: "M - L",
      priceIco: "/public/icons/icoprice.png",
      price: "80.00",
      link: "https://wa.me/p/26230782623175645/51965793184"
    },
    {
      img: "../assets/Disfraces/disfraces12.png",
      title: "Tallas",
      text: "M - L",
      priceIco: "/public/icons/icoprice.png",
      price: "89.00",
      link: "https://wa.me/p/7760186490728007/51965793184"
    }
  ];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Disfraces", "data-astro-cid-uw5kdbxl": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="w-full bg-contact bg-start bg-cover h-[50vh] flex justify-center items-end" data-astro-cid-uw5kdbxl> <div class="py-[30px] lg:py-[41px] px-[60px] lg:px-[152px] flex flex-col justify-center items-center bg-white/70 rounded-tl-[37px] rounded-tr-[37px] gap-2.5" data-astro-cid-uw5kdbxl> <h1 class="text-[30px] leading-[40px] lg:text-[50px] lg:leading-[62px] font-dm capitalize text-[#7e0000]" data-astro-cid-uw5kdbxl>
Disfraces
</h1> </div> </section> <section class="lg:max-w-[1200px] grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 lg:gap-y-5 xl:px-0 w-full mx-auto pt-[100px] lg:pt-[100px] justify-evenly" data-astro-cid-uw5kdbxl> ${services.map((service) => {
    return renderTemplate`<div class="w-[170px] lg:w-full md:w-full col-span-1 max-w-[358px] mx-auto flex rounded-md  hover:bg-[#7e0000]/10 px-2 lg:px-4 py-2 bg-[#f6ebdd]/20   flex-col justify-center items-center gap-2 md:gap-5 md:px-4 md:py-4" data-astro-cid-uw5kdbxl> <div class="w-full h-full" data-astro-cid-uw5kdbxl> <img${addAttribute(service.img, "src")} class="rounded-md object-cover object-center w-full h-full" data-astro-cid-uw5kdbxl> </div> <p class="md:text-[22px] tracking-tight font-jost text-[#7e0000] leading-[33px] text-center  rounded-full px-3 flex gap-2 font-semibold items-center" data-astro-cid-uw5kdbxl> ${" "} <img${addAttribute(service.priceIco, "src")} class="object-contain object-center w-6 h-6" data-astro-cid-uw5kdbxl> ${service.price} </p> <p class="md:text-[22px] tracking-tight leading-[33px] text-center rounded-xl px-3 text-text-blue font-jost" data-astro-cid-uw5kdbxl> ${" "} ${service.text} </p> <p class="flex items-center gap-4 hover:bg-white p-2 rounded-xl" data-astro-cid-uw5kdbxl> ${renderComponent($$result2, "LuShoppingCart", LuShoppingCart, { "className": "text-[#7e0000] text-2xl", "data-astro-cid-uw5kdbxl": true })} <a${addAttribute(service.link, "href")} class="font-jost text-xl font-medium text-text-blue" data-astro-cid-uw5kdbxl>
Comprar
</a> </p> </div>`;
  })} </section> ` })} `;
}, "/home/andrests/Escritorio/Web-moda/web-site/src/pages/contact.astro", void 0);

const $$file = "/home/andrests/Escritorio/Web-moda/web-site/src/pages/contact.astro";
const $$url = "/contact";

export { $$Contact as default, $$file as file, $$url as url };
