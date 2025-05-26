import { useScroll, useTransform } from 'framer-motion';
import { RefObject } from 'react';

export const useScrollAnimation = (ref: RefObject<HTMLDivElement>) => {
  const { scrollYProgress } = useScroll({
    target: ref as RefObject<HTMLElement>,
    offset: ['start end', 'end start']
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

  return { opacity, y };
};

export default useScrollAnimation; 