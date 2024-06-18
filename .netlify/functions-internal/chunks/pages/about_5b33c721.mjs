/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, g as addAttribute, h as renderHead, i as renderComponent, j as renderSlot, m as maybeRenderHead } from '../astro_592235c1.mjs';
import 'html-escaper';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaSquareInstagram } from 'react-icons/fa6';
import { MdOutlineMenuBook } from 'react-icons/md';
import { LuShoppingCart } from 'react-icons/lu';
/* empty css                           */
function useMediaQuery(query) {
  const getMatches = (query2) => {
    if (typeof window !== "undefined") {
      return window.matchMedia(query2).matches;
    }
    return false;
  };
  const [matches, setMatches] = useState(getMatches(query));
  function handleChange() {
    setMatches(getMatches(query));
  }
  useEffect(() => {
    const matchMedia = window.matchMedia(query);
    handleChange();
    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange);
    } else {
      matchMedia.addEventListener("change", handleChange);
    }
    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange);
      } else {
        matchMedia.removeEventListener("change", handleChange);
      }
    };
  }, [query]);
  return matches;
}

const Navbar = () => {
  const [toggled, setToggled] = useState(false);
  const matches = useMediaQuery("(min-width: 1280px)");
  const linkStyle = "text-xl leading-6 font-jost text-primary-200 hover:text-[#7e0000]";
  return /* @__PURE__ */ jsxs("div", { className: "max-w-[1200px] px-0 xl:px-10 m-auto w-full py-0 flex justify-between items-center", children: [
    /* @__PURE__ */ jsxs("a", { href: "/", children: [
      " ",
      /* @__PURE__ */ jsx("img", { src: "./public/logonavtentacion.png", className: "w-40 lg:w-80 h-30 bg-center bg-cover" })
    ] }),
    matches && /* @__PURE__ */ jsxs("nav", { className: "flex flex-row gap-6", children: [
      /* @__PURE__ */ jsx("a", { href: "/", className: linkStyle, children: "Inicio" }),
      /* @__PURE__ */ jsx("a", { href: "/services", className: linkStyle, children: "Lencería" }),
      /* @__PURE__ */ jsx("a", { href: "/about", className: linkStyle, children: "Bikinis" }),
      /* @__PURE__ */ jsx("a", { href: "/contact", className: linkStyle, children: "Disfraces" })
    ] }),
    !matches && /* @__PURE__ */ jsxs(
      "div",
      {
        onClick: () => setToggled(!toggled),
        className: "space-y-1 cursor-pointer px-10",
        children: [
          /* @__PURE__ */ jsx(
            motion.span,
            {
              animate: { rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 },
              className: "block h-0.5 w-8 bg-black"
            }
          ),
          /* @__PURE__ */ jsx(
            motion.span,
            {
              animate: { width: toggled ? 0 : 24 },
              className: "block h-0.5 w-6 bg-black"
            }
          ),
          /* @__PURE__ */ jsx(
            motion.span,
            {
              animate: {
                rotateZ: toggled ? -45 : 0,
                y: toggled ? -8 : 0,
                width: toggled ? 32 : 16
              },
              className: "block h-0.5 w-4 bg-black"
            }
          )
        ]
      }
    ),
    toggled && !matches && /* @__PURE__ */ jsxs(
      motion.nav,
      {
        initial: { opacity: 0, x: 25 },
        animate: { opacity: 1, x: 0 },
        className: "flex flex-col fixed h-screen bg-white w-[80%] md:w-[90%] text-black bottom-0 left-0 gap-6 items-center justify-center",
        children: [
          /* @__PURE__ */ jsx("a", { href: "/", className: linkStyle, children: "Inicio" }),
          /* @__PURE__ */ jsx("a", { href: "/about", className: linkStyle, children: "Bikinis" }),
          /* @__PURE__ */ jsx("a", { href: "/services", className: linkStyle, children: "Lencería" }),
          /* @__PURE__ */ jsx("a", { href: "/contact", className: linkStyle, children: "Disfraces" })
        ]
      }
    )
  ] });
};

const Facebook = () => {
  return /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", x: "0px", y: "0px", width: "38", height: "38", viewBox: "0 0 50 50", children: /* @__PURE__ */ jsx("path", { d: "M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z", fill: "#1B2534" }) });
};

const Footer = () => {
  return /* @__PURE__ */ jsxs("footer", { className: "w-full", children: [
    /* @__PURE__ */ jsxs("div", { className: "lg:max-w-[1200px] px-12 xl:px-0 w-full mx-auto pb-[100px]  flex flex-col items-center justify-center", children: [
      /* @__PURE__ */ jsx("img", { src: "public/Camion de entrega.png", alt: "", className: "w-40 h-40" }),
      /* @__PURE__ */ jsx("p", { className: "text-base font-semibold md:text-[22px] text-center lg:text-left tracking-tight font-jost text-text-gray leading-[33px]", children: "¡ESPERA TU PEDIDO!" }),
      /* @__PURE__ */ jsx("p", { className: "text-base font-semibold md:text-[22px] text-center lg:text-left tracking-tight font-jost text-text-gray leading-[33px]", children: "Su pedido ya entro a la cola y llegara en un maximo de 24 horas." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "w-full max-w-[1200px] px-12 xl:px-0 mx-auto pb-[5px] grid grid-cols-1 lg:grid-cols-4 md:grid-cols-4 gap-6 text-start", children: [
      /* @__PURE__ */ jsxs("div", { className: "col-span-1 flex flex-col gap-4", children: [
        /* @__PURE__ */ jsx("h5", { className: "text-text-blue font-dm text-[22px] lg:text-[25px] leading-loose", children: "Tienda" }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ jsx("p", { className: "tracking-tight text-base lg:text-[16px] lg:leading-[33px] font-jost text-text-blue", children: "Urb. Enrique López Albujar - Primera etapa- Sullana, Piura" }),
          /* @__PURE__ */ jsx("p", { className: "tracking-tight text-base lg:text-[16px] lg:leading-[33px] font-jost text-text-blue md:text-[14px]", children: "modaintimatentacion@gmail.com" }),
          /* @__PURE__ */ jsx("p", { className: "tracking-tight text-base lg:text-[16px] lg:leading-[33px] font-jost text-text-blue", children: "(+51) 965 793 184" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h5", { className: "text-text-blue font-dm text-[22px] lg:text-[25px] leading-loose", children: "Medios de pagos" }),
        /* @__PURE__ */ jsx("p", { className: "tracking-tight text-base lg:text-[16px] lg:leading-[33px] font-jost text-text-blue", children: "Aceptamos todas todas las tarjetas de crédito y débito. Seguridad en tus transacciones con Visa, Mastercard, American Express, Diners, Plin, Yape y muchas más." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h5", { className: "text-text-blue font-dm text-[22px] lg:text-[25px] leading-loose", children: "Tiempos de Envíos" }),
        /* @__PURE__ */ jsxs("p", { className: "tracking-tight text-base lg:text-[16px] lg:leading-[33px] font-jost text-text-blue flex flex-col", children: [
          /* @__PURE__ */ jsx("span", { children: "Retiro en tienda - Sullana " }),
          /* @__PURE__ */ jsx("span", { children: "Provincia (12 a 24h)" }),
          /* @__PURE__ */ jsx("span", { children: "Lima Metropolitana (4 a 5 días hábiles)" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h5", { className: "text-text-blue font-dm text-[22px] lg:text-[25px] leading-loose", children: "Enlaces" }),
        /* @__PURE__ */ jsxs("ul", { className: "lg:text-[16px] font-jost", children: [
          /* @__PURE__ */ jsx("li", { children: "Formas de Pagos" }),
          /* @__PURE__ */ jsx("li", { children: "Envíos" }),
          /* @__PURE__ */ jsx("li", { children: "Cambios y Devoluciones" }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(MdOutlineMenuBook, { className: "text-xl" }),
            "Libro de Reclamaciones"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "col-span-1 md:col-span-2 flex flex-col justify-evenly items-center lg:mr-20 md:mr-30", children: /* @__PURE__ */ jsx("p", { className: "tracking-tight text-base lg:text-[20px] md:text-[18px] lg:leading-[33px] font-jost text-text-blue pt-[18px] pb-[33px] font-semibold", children: "No se aceptan cambios ni devoluciones, por ser prendas intimas." }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-5 md:gap-[54px] items-center justify-center w-[260px] lg:w-full", children: [
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { className: "flex tracking-tight text-base lg:text-[18px] lg:leading-[33px] font-jost text-text-blue pt-[5px]  font-semibold", children: "Síguenos en nuestras redes sociales" }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row gap-5 items-center justify-center", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "https://www.facebook.com/share/Sn1DgXgwqLP2y9K7/?mibextid=qi2Omg",
                target: "about_blank",
                children: /* @__PURE__ */ jsx(FaFacebookSquare, { className: "text-text-blue text-4xl" })
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "https://www.instagram.com/tentacion.moda.intima?igsh=NG05NXVodTJkbTdx",
                target: "about_blank",
                children: /* @__PURE__ */ jsx(FaSquareInstagram, { className: "text-text-blue text-4xl" })
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "https://www.tiktok.com/@tentacion.moda.int?_t=8mBapsxoREM&_r=1",
                target: "about_blank",
                children: /* @__PURE__ */ jsx(Facebook, {})
              }
            )
          ] }),
          /* @__PURE__ */ jsx("img", { src: "/public/icons/logopayment.webp", alt: "logo-payment" })
        ] })
      ] })
    ] })
  ] });
};

const $$Astro = createAstro();
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-oksglcfo> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><meta name="description" content="Tentacion"><link rel="shortcut icon" href="/public/icons/faviconbeso.ico" type="image/x-icon"><meta${addAttribute(title, "title")}><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"><title>${title}</title>${renderHead()}</head> <body data-astro-cid-oksglcfo> <main class="mb-10 lg:mb-20" data-astro-cid-oksglcfo> ${renderComponent($$result, "Navbar", Navbar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/andrests/Escritorio/Web-moda/web-site/src/components/navbar.tsx", "client:component-export": "default", "data-astro-cid-oksglcfo": true })} ${renderSlot($$result, $$slots["default"])} </main> <div class="tracking-tight text-base text-center bg-[#f6ebdd]/40 py-10 lg:text-[22px] lg:leading-[33px] font-jost text-text-gray border" data-astro-cid-oksglcfo> ${renderComponent($$result, "Footer", Footer, { "data-astro-cid-oksglcfo": true })} </div> </body></html>`;
}, "/home/andrests/Escritorio/Web-moda/web-site/src/layouts/main-layout.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  const services = [
    {
      img: "public/Bikinis/1.png",
      title: "Tallas",
      text: "M - L",
      priceIco: "src/icons/ico.Price.png",
      price: "80.00",
      link: "https://wa.me/p/7592069657525689/51965793184"
    },
    {
      img: "public/Bikinis/3.png",
      title: "Tallas",
      text: "M - LXXL",
      priceIco: "src/icons/ico.Price.png",
      price: "80.00",
      link: "https://wa.me/p/7411638732296394/51965793184"
    },
    {
      img: "public/Bikinis/4.png",
      title: "Tallas",
      text: "M - L",
      priceIco: "src/icons/ico.Price.png",
      price: "80.00",
      link: "https://wa.me/p/7203088799793331/51965793184"
    },
    {
      img: "public/Bikinis/5.png",
      title: "Tallas",
      text: "M - L",
      priceIco: "src/icons/ico.Price.png",
      price: "80.00",
      link: "https://wa.me/p/7602375013184125/51965793184"
    },
    {
      img: "public/Bikinis/6.png",
      title: "Tallas",
      text: "M - L",
      priceIco: "src/icons/ico.Price.png",
      price: "85.00",
      link: "https://wa.me/p/7663401033746379/51965793184"
    },
    {
      img: "public/Bikinis/7.png",
      title: "Tallas",
      text: "M - L",
      priceIco: "src/icons/ico.Price.png",
      price: "85.00",
      link: "https://wa.me/p/8330898066939181/51965793184"
    },
    {
      img: "public/Bikinis/8.png",
      title: "Tallas",
      text: "M - L",
      priceIco: "src/icons/ico.Price.png",
      price: "85.00",
      link: "https://wa.me/p/7700640683352522/51965793184"
    },
    {
      img: "public/Bikinis/9.1.png",
      title: "Tallas",
      text: "M - L",
      priceIco: "src/icons/ico.Price.png",
      price: "85.00",
      link: "https://wa.me/p/26091420727138457/51965793184"
    },
    {
      img: "public/Bikinis/9.png",
      title: "Tallas",
      text: "M - L",
      priceIco: "src/icons/ico.Price.png",
      price: "85.00",
      link: "https://wa.me/p/8057643870934811/51965793184"
    },
    {
      img: "public/Bikinis/10.png",
      title: "Tallas",
      text: "M - L",
      priceIco: "src/icons/ico.Price.png",
      price: "75.00",
      link: "https://wa.me/p/7744858552228347/51965793184"
    },
    {
      img: "public/Bikinis/11.png",
      title: "Tallas",
      text: "M - L",
      priceIco: "src/icons/ico.Price.png",
      price: "70.00",
      link: "https://wa.me/p/7886545304773395/51965793184"
    },
    {
      img: "public/Bikinis/12.png",
      title: "Tallas",
      text: "M - L",
      priceIco: "src/icons/ico.Price.png",
      price: "85.00",
      link: "https://wa.me/p/7553745658078179/51965793184"
    },
    {
      img: "public/Bikinis/13.png",
      title: "Tallas",
      text: "M - L",
      priceIco: "src/icons/ico.Price.png",
      price: "80.00",
      link: "https://wa.me/p/7936631886375462/51965793184"
    },
    {
      img: "public/Bikinis/14.png",
      title: "Tallas",
      text: "M - L",
      priceIco: "src/icons/ico.Price.png",
      price: "80.00",
      link: "https://wa.me/p/7592069657525689/51965793184"
    },
    {
      img: "public/Bikinis/52.png",
      title: "Tallas",
      text: "M - L - XL",
      priceIco: "src/icons/ico.Price.png",
      price: "120.00",
      link: "https://wa.me/p/7861331247258355/51965793184"
    },
    {
      img: "public/Bikinis/55.png",
      title: "Tallas",
      text: "M - L",
      priceIco: "src/icons/ico.Price.png",
      price: "120.00",
      link: "https://wa.me/p/7206055662833312/51965793184"
    },
    // Bikins 2
    {
      img: "public/Bikins2/WhatsApp Image 2024-06-11 at 21.19.17 (3).jpeg",
      title: "Tallas",
      text: "M - L",
      priceIco: "src/icons/ico.Price.png",
      price: "120.00",
      link: "https://wa.me/p/25912137401733385/51965793184"
    },
    {
      img: "public/Bikins2/WhatsApp Image 2024-06-11 at 21.19.18 (1).jpeg",
      title: "Tallas",
      text: "M - L",
      priceIco: "src/icons/ico.Price.png",
      price: "100.00",
      link: "https://wa.me/p/25747892178190669/51965793184"
    },
    {
      img: "public/Bikins2/WhatsApp Image 2024-06-11 at 21.19.18.jpeg",
      title: "Tallas",
      text: "M - L",
      priceIco: "src/icons/ico.Price.png",
      price: "120.00",
      link: "https://wa.me/p/8085925468094151/51965793184"
    },
    {
      img: "public/Bikins2/WhatsApp Image 2024-06-11 at 21.19.19 (1).jpeg",
      title: "Tallas",
      text: "M - L",
      priceIco: "src/icons/ico.Price.png",
      price: "100.00",
      link: "https://wa.me/p/25747892178190669/51965793184"
    },
    {
      img: "public/Bikins2/WhatsApp Image 2024-06-11 at 21.19.19 (2).jpeg",
      title: "Tallas",
      text: "M - L",
      priceIco: "src/icons/ico.Price.png",
      price: "120.00",
      link: "https://wa.me/p/8036523873034412/51965793184"
    },
    {
      img: "public/Bikins2/WhatsApp Image 2024-06-11 at 21.19.19 (3).jpeg",
      title: "Tallas",
      text: "M - L",
      priceIco: "src/icons/ico.Price.png",
      price: "100.00",
      link: "https://wa.me/p/25921955004117592/51965793184"
    },
    {
      img: "public/Bikins2/WhatsApp Image 2024-06-11 at 21.19.19 (4).jpeg",
      title: "Tallas",
      text: "M - L",
      priceIco: "src/icons/ico.Price.png",
      price: "100.00",
      link: "https://wa.me/p/7645961048803993/51965793184"
    },
    {
      img: "public/Bikins2/WhatsApp Image 2024-06-11 at 21.19.19.jpeg",
      title: "Tallas",
      text: "M - L",
      priceIco: "src/icons/ico.Price.png",
      price: "100.00",
      link: "https://wa.me/p/7565605253553063/51965793184"
    }
  ];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Bikinis", "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="w-full bg-about bg-center bg-cover h-[50vh] flex justify-center items-end" data-astro-cid-kh7btl4r> <div class="py-[30px] lg:py-[41px] px-[60px] lg:px-[152px] flex flex-col justify-center items-center bg-white/70 rounded-tl-[37px] rounded-tr-[37px] gap-2.5" data-astro-cid-kh7btl4r> <h1 class="text-[30px] leading-[40px] lg:text-[50px] lg:leading-[62px] font-dm capitalize text-[#7e0000]" data-astro-cid-kh7btl4r>
Bikinis
</h1> </div> </section> <section class="lg:max-w-[1200px] grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 lg:gap-y-5 xl:px-0 w-full mx-auto pt-[100px] lg:pt-[100px] justify-evenly" data-astro-cid-kh7btl4r> ${services.map((service) => {
    return renderTemplate`<div class="w-[170px] lg:w-full md:w-full col-span-1 max-w-[358px] mx-auto flex rounded-md  hover:bg-[#7e0000]/10 px-2 lg:px-4 py-2 bg-[#f6ebdd]/20   flex-col justify-center items-center gap-2 md:gap-5 md:px-4 md:py-4" data-astro-cid-kh7btl4r> <div class="w-full h-full" data-astro-cid-kh7btl4r> <img${addAttribute(service.img, "src")} class="rounded-md object-cover object-center w-full h-full" data-astro-cid-kh7btl4r> </div> <p class="md:text-[22px] tracking-tight font-jost text-[#7e0000] leading-[33px] text-center  rounded-full px-3 flex gap-2 font-semibold items-center" data-astro-cid-kh7btl4r> ${" "} <img${addAttribute(service.priceIco, "src")} class="object-contain object-center w-6 h-6" data-astro-cid-kh7btl4r> ${service.price} </p> <p class="md:text-[22px] tracking-tight leading-[33px] text-center rounded-xl px-3 text-text-blue font-jost" data-astro-cid-kh7btl4r> ${" "} ${service.text} </p> <p class="flex items-center gap-4 hover:bg-white p-2 rounded-xl" data-astro-cid-kh7btl4r> ${renderComponent($$result2, "LuShoppingCart", LuShoppingCart, { "className": "text-[#7e0000] text-2xl", "data-astro-cid-kh7btl4r": true })} <a${addAttribute(service.link, "href")} class="font-jost text-xl font-medium text-text-blue" data-astro-cid-kh7btl4r>
Comprar
</a> </p> </div>`;
  })} </section> ` })} `;
}, "/home/andrests/Escritorio/Web-moda/web-site/src/pages/about.astro", void 0);

const $$file = "/home/andrests/Escritorio/Web-moda/web-site/src/pages/about.astro";
const $$url = "/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$MainLayout as $, about as a };
