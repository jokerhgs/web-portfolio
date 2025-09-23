import { useEffect, useRef, useState } from "react";

type TextLoopProps = {
  texts: string[];
  interval?: number;
  className?: string;
  transition?: "fade" | "slide-left" | "slide-up";
};

export const TextLoop = ({
  texts,
  interval = 2000,
  className = "",
  transition = "fade",
}: TextLoopProps) => {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setShow(false);
    const fadeOut = setTimeout(() => setShow(true), 50);
    timeoutRef.current = setTimeout(() => {
      setShow(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % texts.length);
        setDirection("next");
        setShow(true);
      }, 200); // match transition-out duration
    }, interval);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      clearTimeout(fadeOut);
    };
  }, [index, texts.length, interval]);

  let transitionClass = "";
  switch (transition) {
    case "fade":
      transitionClass = `transition-opacity duration-300 ease-in-out ${
        show ? "opacity-100" : "opacity-0"
      }`;
      break;
    case "slide-left":
      transitionClass = `transition-all duration-300 ease-in-out ${
        show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
      }`;
      break;
    case "slide-up":
      transitionClass = `transition-all duration-300 ease-in-out ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`;
      break;
    default:
      transitionClass = "";
  }

  return (
    <span className={`inline-block ${transitionClass} ${className}`}>
      {texts[index]}
    </span>
  );
};
