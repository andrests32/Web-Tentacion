import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import Facebook from "../icons/ticktock";
import { MdOutlineMenuBook } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="lg:max-w-[1200px] px-12 xl:px-0 w-full mx-auto pb-[100px]  flex flex-col items-center justify-center">
        <img src="public/Camion de entrega.png" alt="" className="w-40 h-40" />
        <p className="text-base font-semibold md:text-[22px] text-center lg:text-left tracking-tight font-jost text-text-gray leading-[33px]">
          ¡ESPERA TU PEDIDO!
        </p>
        <p className="text-base font-semibold md:text-[22px] text-center lg:text-left tracking-tight font-jost text-text-gray leading-[33px]">
          Su pedido ya entro a la cola y llegara en un maximo de 24 horas.
        </p>
      </div>

      <div className="w-full max-w-[1200px] px-12 xl:px-0 mx-auto pb-[5px] grid grid-cols-1 lg:grid-cols-4 md:grid-cols-4 gap-6 text-start">
        <div className="col-span-1 flex flex-col gap-4">
          <h5 className="text-text-blue font-dm text-[22px] lg:text-[25px] leading-loose">
            Tienda
          </h5>
          <div className="flex flex-col gap-6">
            <p className="tracking-tight text-base lg:text-[16px] lg:leading-[33px] font-jost text-text-blue">
              Urb. Enrique López Albujar Mz M L18 - Primera etapa- Sullana,
              Piura
            </p>

            <p className="tracking-tight text-base lg:text-[16px] lg:leading-[33px] font-jost text-text-blue md:text-[14px]">
              modaintimatentacion@gmail.com
            </p>
            <p className="tracking-tight text-base lg:text-[16px] lg:leading-[33px] font-jost text-text-blue">
              (+51) 965 793 184
            </p>
          </div>
        </div>

        <div>
          <h5 className="text-text-blue font-dm text-[22px] lg:text-[25px] leading-loose">
            Medios de pagos
          </h5>

          <p className="tracking-tight text-base lg:text-[16px] lg:leading-[33px] font-jost text-text-blue">
            Aceptamos todas todas las tarjetas de crédito y débito. Seguridad en
            tus transacciones con Visa, Mastercard, American Express, Diners,
            Plin, Yape y muchas más.
          </p>
        </div>

        <div>
          <h5 className="text-text-blue font-dm text-[22px] lg:text-[25px] leading-loose">
            Costos y Tiempos de Envíos
          </h5>

          <p className="tracking-tight text-base lg:text-[16px] lg:leading-[33px] font-jost text-text-blue">
            Retiro en tienda S/.0 Lima Metropolitana S/.12-15. 1-3 dias hábiles
            Provincias S/.20-25 2-7 dias habiles
          </p>
        </div>

        <div>
          <h5 className="text-text-blue font-dm text-[22px] lg:text-[25px] leading-loose">
            Enlaces
          </h5>

          <ul className="lg:text-[16px] font-jost">
            <li>Formas de Pagos</li>
            <li>Envíos</li>
            <li>Cambios y Devoluciones</li>
            <li className="flex items-center gap-2">
              <MdOutlineMenuBook className="text-xl" />
              Libro de Reclamaciones
            </li>
          </ul>
        </div>

        <div className="col-span-1 md:col-span-2 flex flex-col justify-evenly items-center">
          <p className="tracking-tight text-base lg:text-[16px] lg:leading-[33px] font-jost text-text-blue pt-[18px] pb-[33px]">
            No se aceptan devoluciones, ya que las prendas son de uso íntimo.
            Somos comprometidos con brindar un servicio de calidad.
          </p>
        </div>

        <div className="flex flex-col gap-5 md:gap-[54px] justify-center items-center">
          <p className="flex tracking-tight text-base lg:text-[18px] lg:leading-[33px] font-jost text-text-blue pt-[5px] pb-[10px] font-semibold">
            Síguenos en nuestras redes sociales
          </p>
          <div className="flex gap-5">
            <a
              href="https://www.facebook.com/share/Sn1DgXgwqLP2y9K7/?mibextid=qi2Omg"
              target="about_blank"
            >
              <FaFacebookSquare className="text-text-blue text-4xl" />
            </a>
            <a
              href="https://www.instagram.com/tentacion.moda.intima?igsh=NG05NXVodTJkbTdx"
              target="about_blank"
            >
              <FaSquareInstagram className="text-text-blue text-4xl" />
            </a>
            <a
              href="https://www.tiktok.com/@tentacion.moda.int?_t=8mBapsxoREM&_r=1"
              target="about_blank"
            >
              <Facebook />
            </a>
          </div>
          <img src="public/payment.webp" alt="logo-payment" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
