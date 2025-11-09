import { useEffect, useRef, useState, ReactNode, ReactElement } from "react";

type TextLoopProps = {
  children: ReactElement[]; // expects multiple <Text> children or similar React elements
  interval?: number;
  className?: string;
  transition?: "fade" | "slide-left" | "slide-up";
};

export const TextLoop = ({
  children,
  interval = 2000,
  className = "",
  transition = "fade",
}: TextLoopProps) => {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Ensure children is always an array
  const childrenArray = Array.isArray(children) ? children : [children];
  const childrenCount = childrenArray.length;

  useEffect(() => {
    setShow(false);
    const fadeOut = setTimeout(() => setShow(true), 50);
    timeoutRef.current = setTimeout(() => {
      setShow(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % childrenCount);
        setDirection("next");
        setShow(true);
      }, 200); // match transition-out duration
    }, interval);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      clearTimeout(fadeOut);
    };
  }, [index, childrenCount, interval]);

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
      {childrenArray[index]}
    </span>
  );
};
