export interface ButtonProps {
  variant?: "primary" | "secondary";
  text: string;
  type?: "submit" | "button";
}

const Siguenos = (props: ButtonProps) => {
  const { variant = "primary", text = "Mas Lenceria", type = "button" } = props;

  const defaultStyles =
    "rounded-[18px] flex capitalize items-center justify-center gap-[9px] w-fit text-[#7e0000] text-base lg:text-lg font-semibold font-['Jost'] leading-snug tracking-tight px-6 py-4 md:px-[54px] md:py-[26px] hover:bg-primary-200 text-white";
  const bgClass = variant === "primary" ? "bg-[#7e0000]" : "bg-primary-100";
  const className = `${defaultStyles} ${bgClass}`;

  return (
    <a  href="https://www.instagram.com/tentacion.moda.intima?igsh=NG05NXVodTJkbTdx" target="about_blank" className={className} type={type}>
      {text}
    <button >
    </button>
    </a>
  );
};

export default Siguenos;