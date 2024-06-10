import { FaWhatsapp } from "react-icons/fa";

export interface ButtonProps {
  variant?: "primary" | "secondary";
  type?: "submit" | "button";
}

const Button = (props: ButtonProps) => {
  const { variant = "primary", type = "button" } = props;

  const defaultStyles =
    "rounded-full flex w-16 lg:w-20 md:w-20 h-16 lg:h-20 md:h-20 items-center justify-center md:py-5 py-2 px-2 md:px-[21px] hover:bg-[#7e0000 fixed top-[88vh] lg:top-[850px] md:top-[850px] md:left-[85vw] left-[80vw] lg:left-[92vw] z-100";
  const bgClass = variant === "primary" ? "bg-[#7e0000]" : "bg-primary-[#7e0000]";
  const className = `${defaultStyles} ${bgClass}`;

  return (
    <a
      href="https://wa.me/c/51965793184"
      className={className}
      type={type}
      target="about_blank"
    >
      {variant === "primary" ? (
        <FaWhatsapp className="text-white text-4xl lg:text-5xl md:text-5xl" />
      ) : (
        <FaWhatsapp />
      )}
      <button></button>
    </a>
  );
};

export default Button;
