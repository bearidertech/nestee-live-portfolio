import { useEffect, useState } from "react";
import { ReactNode } from "react";

interface AnimatedTextProps {
  text: string | ReactNode;
  delay?: number;
  className?: string;
}

const AnimatedText = ({ text, delay = 0, className = "" }: AnimatedTextProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } ${className}`}
    >
      {text}
    </div>
  );
};

export default AnimatedText;