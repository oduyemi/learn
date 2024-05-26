import React, { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import "../assets/css/typewriter.css";

export const Typewriter = () => {
  const [showText, setShowText] = useState(false);
  const [text, setText] = useState("");
  const fullText = "Welcome to ProGrowing, where innovation meets mentorship";

  useEffect(() => {
    let timeout;
    let currentIndex = 0;

    const animateText = () => {
      setText(fullText.substring(0, currentIndex));

      if (currentIndex < fullText.length) {
        timeout = setTimeout(animateText, 100);
        currentIndex++;
      } else {
        setShowText(true);
      }
    };

    timeout = setTimeout(animateText, 100);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="flex items-center justify-center h-14 bg-white text-blu">
      <Transition
        show={showText}
        enter="transition-opacity duration-1000"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        as="div"
        className="text-xl font-bold"
      >
        {text}
      </Transition>
    </div>
  );
};
