/* empty css                           */import { f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead, g as addAttribute } from '../astro_852d4028.mjs';
import 'html-escaper';
import { $ as $$MainLayout } from './about_4220f66e.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { CgChevronRight, CgChevronLeft } from 'react-icons/cg';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
/* empty css                           */
const ArrowSec = () => {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      width: "19",
      height: "17",
      viewBox: "0 0 19 17",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx(
        "path",
        {
          d: "M2 8.43536L15.7232 8.29851M10.6182 1.91132L17.1412 8.4343L10.4868 15.0887",
          stroke: "#fff",
          strokeWidth: "2",
          strokeLinecap: "square",
          strokeLinejoin: "round"
        }
      )
    }
  );
};

const ArrowPri = () => {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      width: "19",
      height: "17",
      viewBox: "0 0 19 17",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx(
        "path",
        {
          d: "M2 8.43536L15.7232 8.29851M10.6182 1.91132L17.1412 8.4343L10.4868 15.0887",
          stroke: "#fff",
          strokeWidth: "2",
          strokeLinecap: "square",
          strokeLinejoin: "round"
        }
      )
    }
  );
};

const ButtonLenceria = (props) => {
  const { variant = "primary", text = "Mas Lenceria", type = "button" } = props;
  const defaultStyles = "rounded-[18px] flex capitalize items-center justify-center gap-[9px] w-fit text-[#7e0000] text-base lg:text-lg font-semibold font-['Jost'] leading-snug tracking-tight px-10 py-5 md:px-[54px] md:py-[26px] hover:bg-[#7e0000] text-white";
  const bgClass = variant === "primary" ? "bg-primary-200" : "bg-primary-100";
  const className = `${defaultStyles} ${bgClass}`;
  return /* @__PURE__ */ jsxs("a", { href: "/services", className, type, children: [
    text,
    variant === "primary" ? /* @__PURE__ */ jsx(ArrowSec, {}) : /* @__PURE__ */ jsx(ArrowPri, {}),
    /* @__PURE__ */ jsx("button", {})
  ] });
};

const ButtonBikinis = (props) => {
  const { variant = "primary", text = "Default Text", type = "button" } = props;
  const defaultStyles = "rounded-[18px] flex capitalize items-center justify-center gap-[9px] w-fit text-[#7e0000] text-base lg:text-lg font-semibold font-['Jost'] leading-snug tracking-tight px-10 py-5 md:px-[54px] md:py-[26px] hover:bg-[#7e0000] text-white";
  const bgClass = variant === "primary" ? "bg-primary-200" : "bg-primary-100";
  const className = `${defaultStyles} ${bgClass}`;
  return /* @__PURE__ */ jsxs("a", { href: "/about", className, type, children: [
    text,
    variant === "primary" ? /* @__PURE__ */ jsx(ArrowSec, {}) : /* @__PURE__ */ jsx(ArrowPri, {}),
    /* @__PURE__ */ jsx("button", {})
  ] });
};

const ButtonDis = (props) => {
  const { variant = "primary", text = "Default Text", type = "button" } = props;
  const defaultStyles = "rounded-[18px] flex capitalize items-center justify-center gap-[9px] w-fit text-[#7e0000] text-base lg:text-lg font-semibold font-['Jost'] leading-snug tracking-tight px-10 py-5 md:px-[54px] md:py-[26px] hover:bg-[#7e0000] text-white";
  const bgClass = variant === "primary" ? "bg-primary-200" : "bg-primary-100";
  const className = `${defaultStyles} ${bgClass}`;
  return /* @__PURE__ */ jsxs("a", { href: "/contact", className, type, children: [
    text,
    variant === "primary" ? /* @__PURE__ */ jsx(ArrowSec, {}) : /* @__PURE__ */ jsx(ArrowPri, {}),
    /* @__PURE__ */ jsx("button", {})
  ] });
};

const Siguenos = (props) => {
  const { variant = "primary", text = "Mas Lenceria", type = "button" } = props;
  const defaultStyles = "rounded-[18px] flex capitalize items-center justify-center gap-[9px] w-fit text-[#7e0000] text-base lg:text-lg font-semibold font-['Jost'] leading-snug tracking-tight px-6 py-4 md:px-[54px] md:py-[26px] hover:bg-primary-200 text-white";
  const bgClass = variant === "primary" ? "bg-[#7e0000]" : "bg-primary-100";
  const className = `${defaultStyles} ${bgClass}`;
  return /* @__PURE__ */ jsxs("a", { href: "https://www.instagram.com/tentacion.moda.intima?igsh=NG05NXVodTJkbTdx", target: "about_blank", className, type, children: [
    text,
    /* @__PURE__ */ jsx("button", {})
  ] });
};

const Button = (props) => {
  const { variant = "primary", type = "button" } = props;
  const defaultStyles = "rounded-full flex w-16 lg:w-20 md:w-20 h-16 lg:h-20 md:h-20 items-center justify-center md:py-5 py-2 px-2 md:px-[21px] hover:bg-[#7e0000 fixed top-[88vh] lg:top-[850px] md:top-[850px] md:left-[85vw] left-[80vw] lg:left-[92vw] z-100";
  const bgClass = variant === "primary" ? "bg-[#7e0000]" : "bg-primary-[#7e0000]";
  const className = `${defaultStyles} ${bgClass}`;
  return /* @__PURE__ */ jsxs(
    "a",
    {
      href: "https://wa.me/c/51965793184",
      className,
      type,
      target: "about_blank",
      children: [
        variant === "primary" ? /* @__PURE__ */ jsx(FaWhatsapp, { className: "text-white text-4xl lg:text-5xl md:text-5xl" }) : /* @__PURE__ */ jsx(FaWhatsapp, {}),
        /* @__PURE__ */ jsx("button", {})
      ]
    }
  );
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const reviews = [
    {
      img: "./public/icons/icolenceria.png",
      name: "Nattasha Mith",
      review: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been."
    }
  ];
  const bikini = [
    {
      img: "./public/icons/icobikinis.png",
      name: "Nattasha Mith",
      review: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been."
    }
  ];
  const disfraces = [
    {
      img: "./public/icons/icolenceria.png",
      name: "Nattasha Mith",
      review: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been."
    }
  ];
  const clientLogos = [
    {
      img: "/promos/promo1.jpeg"
    },
    {
      img: "/promos/promo2.jpeg"
    },
    {
      img: "/promos/promo3.jpeg"
    },
    {
      img: "/promos/promo4.jpeg"
    },
    {
      img: "/promos/promo5.jpeg"
    },
    {
      img: "/promos/promo6.jpeg"
    },
    {
      img: "/promos/promo7.jpeg"
    },
    {
      img: "/promos/promo8.jpeg"
    },
    {
      img: "/promos/promo9.jpeg"
    },
    {
      img: "/promos/promo10.jpeg"
    },
    {
      img: "/promos/promo11.jpeg"
    },
    {
      img: "/promos/promo12.jpeg"
    },
    {
      img: "/promos/promo13.jpeg"
    },
    {
      img: "/promos/promo14.jpeg"
    },
    {
      img: "/promos/promo15.jpeg"
    },
    {
      img: "/promos/promo16.jpeg"
    },
    {
      img: "/promos/promo17.jpeg"
    },
    {
      img: "/promos/promo18.jpeg"
    },
    {
      img: "/promos/promo19.jpeg"
    },
    {
      img: "/promos/promo20.jpeg"
    },
    {
      img: "/promos/promo21.jpeg"
    },
    {
      img: "/promos/promo22.jpeg"
    },
    {
      img: "/promos/promo23.jpeg"
    },
    {
      img: "/promos/promo24.jpeg"
    },
    {
      img: "/promos/promo25.jpeg"
    },
    {
      img: "/promos/promo26.jpeg"
    },
    {
      img: "/promos/promo27.jpeg"
    }
  ];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Tentacion", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<figure class="w-full lg:min-h-[110vh] flex items-center justify-center box-border" data-astro-cid-j7pv25f6> <video muted autoplay loop width="1920" height="1080" data-astro-cid-j7pv25f6> <source src="/bannervideo.mp4" type="video/mp4" data-astro-cid-j7pv25f6> </video> </figure> ${renderComponent($$result2, "Button", Button, { "data-astro-cid-j7pv25f6": true })}  <h2 class="font-dm tracking-wide text-center leading-[37px] lg:leading-[62.50px] text-[22px] lg:text-[60px] md:text-[40px] w-full lg:max-w-[50%] pb-9 mx-auto text-text-blue lg:pt-[100px] pt-10 flex flex-col items-center justify-center" data-astro-cid-j7pv25f6>
Ponte feliz, porque regia ya estas.
<img src="/public//Otros/logonavtentacion.png" alt="iconologo" class="w-60 h-30 lg:w-[380px] lg:h-30 lg:bg-cover" data-astro-cid-j7pv25f6> </h2> <section class="lg:max-w-[1200px] px-12 xl:px-0 w-full mx-auto lg:pt-[20px] lg:flex rounded-xl mb-10 lg:mb-20" data-astro-cid-j7pv25f6> <div class="w-full flex flex-col rounded-[48px] px-6 py-[40px] justify-center items-center" data-astro-cid-j7pv25f6> <h2 class="font-dm tracking-wide text-center leading-[37px] lg:leading-[62.50px] text-[50px] lg:text-[50px] w-full lg:max-w-[50%] pb-9 mx-auto text-text-blue" data-astro-cid-j7pv25f6>
Lencería
</h2> <div class="flex flex-col gap-8 lg:gap-10 lg:flex-row" data-astro-cid-j7pv25f6> ${reviews.map((rev) => {
    return renderTemplate`<div class="w-full max-w-[370px] rounded-4xl mx-auto flex flex-col justify-center gap-4 md:gap-6" data-astro-cid-j7pv25f6> <div class="flex flex-col sm:flex-row gap-6 items-center" data-astro-cid-j7pv25f6> <img${addAttribute(rev.img, "src")} alt="iconolenceria" class="w-full h-full object-cover object-center" data-astro-cid-j7pv25f6> </div> </div>`;
  })} </div> <div class="flex items-center justify-center pt-10" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "ButtonLenceria", ButtonLenceria, { "text": "M\xE1s Lencer\xEDa", "data-astro-cid-j7pv25f6": true })} </div> </div> <div class="w-full flex flex-col rounded-[48px] px-6 py-[40px]" data-astro-cid-j7pv25f6> <h2 class="font-dm tracking-wide text-center leading-[37px] lg:leading-[62.50px] text-[50px] lg:text-[50px] w-full lg:max-w-[50%] pb-9 mx-auto text-text-blue" data-astro-cid-j7pv25f6>
Bikinis
</h2> <div class="flex flex-col gap-8 lg:gap-10 lg:flex-row" data-astro-cid-j7pv25f6> ${bikini.map((rev) => {
    return renderTemplate`<div class="w-full max-w-[370px] rounded-4xl mx-auto flex flex-col justify-center gap-4 md:gap-6" data-astro-cid-j7pv25f6> <div class="flex flex-col sm:flex-row gap-6 items-center" data-astro-cid-j7pv25f6> <img${addAttribute(rev.img, "src")} alt="iconobikinis" class="w-full h-full object-cover object-center" data-astro-cid-j7pv25f6> </div> </div>`;
  })} </div> <div class="flex items-center justify-center pt-10" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "ButtonBikinis", ButtonBikinis, { "text": "M\xE1s bikinis", "data-astro-cid-j7pv25f6": true })} </div> </div> <div class="w-full flex flex-col rounded-[48px] px-6 py-[40px]" data-astro-cid-j7pv25f6> <h2 class="font-dm tracking-wide text-center leading-[37px] lg:leading-[62.50px] text-[50px] lg:text-[50px] w-full lg:max-w-[50%] pb-9 mx-auto text-text-blue" data-astro-cid-j7pv25f6>
Disfraces
</h2> <div class="flex flex-col gap-8 lg:gap-10 lg:flex-row" data-astro-cid-j7pv25f6> ${disfraces.map((rev) => {
    return renderTemplate`<div class="w-full max-w-[370px] rounded-4xl mx-auto flex flex-col justify-center gap-4 md:gap-6" data-astro-cid-j7pv25f6> <div class="flex flex-col sm:flex-row gap-6 items-center" data-astro-cid-j7pv25f6> <img${addAttribute(rev.img, "src")} alt="iconodisfrases" class="w-full h-full object-cover object-center" data-astro-cid-j7pv25f6> </div> </div>`;
  })} </div> <div class="flex items-center justify-center pt-10" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "ButtonDis", ButtonDis, { "text": "M\xE1s Disfraces", "data-astro-cid-j7pv25f6": true })} </div> </div> </section> <section class="w-full bg-[#f6ebdd]/20 h-full lg:min-h-[110vh] px-12 xl:px-40 flex flex-col lg:flex-row items-center justify-evenly mb-10" data-astro-cid-j7pv25f6> <div class="lg:max-w-[800px] w-full mx-auto flex flex-col lg:px-5 py-4 px-4" data-astro-cid-j7pv25f6> <p class="flex items-center gap-4 font-jost text-xl text-[#7e0000]" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "FaInstagram", FaInstagram, { "className": "text-[#7e0000]", "data-astro-cid-j7pv25f6": true })}
Instagram
</p> <p class="text-[25px] lg:text-[30px] leading-[50px] md:text-[60px] xl:text-[50px] pb-4 font-dm md:leading-[75.25px] w-full xl:max-w-[50%] text-text-blue" data-astro-cid-j7pv25f6>
Síguenos en Instagram @tentacion.moda.intima
</p> <p class="font-jost text-[16px] lg:text-[80px] leading-[30px] md:text-[20px] xl:text-[22px] pb-10 w-full xl:max-w-[60%] text-text-blue" data-astro-cid-j7pv25f6>
Lenceria, bikinis, disfraces en todas las tallas. Visitanos en nuestras
        tiendas de Sullana, Piura. Mira nuestro catálogo ¡Y nuestras secciones!
        Salen  productos con grandes precios. ¡Descuentos!
</p> <div class="pb-20" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Siguenos", Siguenos, { "text": "S\xCDGUENOS", "data-astro-cid-j7pv25f6": true })} </div> </div> <div class="w-[90vw] lg:flex items-center justify-center lg:w-[1000] lg:h-[700] pb-20" data-astro-cid-j7pv25f6> <img src="/public//Otros/collageimg.jpeg" alt="imagencollage" class="w-full lg:h-[650px] object-cover object-center rounded-md" data-astro-cid-j7pv25f6> </div> </section> <section class="lg:max-w-[1300px] lh-100 px-3 xl:px-20 w-full mx-auto pb-[100px] lg:pt-[10px] rounded-xl" data-astro-cid-j7pv25f6> <h2 class="font-dm tracking-wide text-center leading-[37px] lg:leading-[62.50px] text-[30px] lg:text-[50px] w-full lg:max-w-[50%] mx-auto text-[#7e0000]" data-astro-cid-j7pv25f6>
Conoce nuestros nuevos modelos
</h2> <h2 class="font-jost tracking-wide text-center leading-[37px] lg:leading-[62.50px] text-[20px] lg:text-[30px] w-full lg:max-w-[50%] pb-9 mx-auto text-text-blue lg:pt-[5px] pt-5 flex flex-col items-center justify-center" data-astro-cid-j7pv25f6>
Prendas nuevas, No te quedes sin la tuya.
</h2> <div class="w-full h-100 flex flex-row justify-between items-center gap-12 max-w-[1200px] overflow-x-scroll no-scrollbar rounded-xl" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "CgChevronRight", CgChevronRight, { "className": "absolute text-6xl right-3 text-text-blue/30", "data-astro-cid-j7pv25f6": true })} ${clientLogos.map((logo) => renderTemplate`<img${addAttribute(logo.img, "src")} alt="imagenespromocion" class="object-contain object-center h-80" data-astro-cid-j7pv25f6>`)} ${renderComponent($$result2, "CgChevronLeft", CgChevronLeft, { "className": "absolute text-6xl left-1 text-text-blue/30", "data-astro-cid-j7pv25f6": true })} </div> </section> ` })} `;
}, "/home/andrests/Escritorio/Web-moda/web-site/src/pages/index.astro", void 0);

const $$file = "/home/andrests/Escritorio/Web-moda/web-site/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
