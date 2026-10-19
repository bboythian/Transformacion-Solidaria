/**
 * Hook personalizado para manejar animaciones cuando elementos entran en vista
 * Utiliza Intersection Observer para detectar visibilidad y activar animaciones
 */

import { useEffect, useRef, useState } from "react";

interface UseInViewAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useInViewAnimation = <T extends HTMLElement = HTMLElement>(
  options: UseInViewAnimationOptions = {},
) => {
  const { threshold = 0.1, rootMargin = "0px", triggerOnce = false } = options;

  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) {
            setHasTriggered(true);
          }
        } else {
          // Solo resetear si no es triggerOnce o si no ha sido triggered
          if (!triggerOnce || !hasTriggered) {
            setIsInView(false);
          }
        }
      },
      {
        threshold,
        rootMargin,
      },
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce, hasTriggered]);

  return { ref, isInView };
};
