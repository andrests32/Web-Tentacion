import ArrowSec from "../icons/arrow-sec.tsx";
import ArrowPri from "../icons/arrow-pri.tsx";

export interface ButtonProps {
  variant?: "primary" | "secondary";
  text: string;
  type?: "submit" | "button";
}

const ButtonDis = (props: ButtonProps) => {
  const { variant = "primary", text = "Default Text", type = "button" } = props;

  const defaultStyles =
    "rounded-[18px] flex capitalize items-center justify-center gap-[9px] w-fit text-[#7e0000] text-base lg:text-lg font-semibold font-['Jost'] leading-snug tracking-tight px-10 py-5 md:px-[54px] md:py-[26px] hover:bg-[#7e0000] text-white";
  const bgClass = variant === "primary" ? "bg-primary-200" : "bg-primary-100";
  const className = `${defaultStyles} ${bgClass}`;

  return (
    <a  href="/contact" className={className} type={type}>
      {text}
      {variant === "primary" ? <ArrowSec /> : <ArrowPri />}
    <button >
    </button>
    </a>
  );
};

export default ButtonDis;