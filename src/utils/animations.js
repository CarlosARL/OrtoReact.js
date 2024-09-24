import { useEffect, useRef, useState } from 'react';

export const useIsVisible = (threshold = 0) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return [ref, isVisible];
};

export const useFadeIn = (duration = 1000, delay = 0) => {
  const [ref, isVisible] = useIsVisible();

  const fadeInStyle = {
    opacity: 0,
    transition: `opacity ${duration}ms ease-in-out ${delay}ms`,
  };

  if (isVisible) {
    fadeInStyle.opacity = 1;
  }

  return [ref, fadeInStyle];
};

export const useSlideIn = (direction = 'left', duration = 1000, delay = 0) => {
  const [ref, isVisible] = useIsVisible();

  const slideInStyle = {
    opacity: 0,
    transform: 
      direction === 'left' ? 'translateX(-50px)' :
      direction === 'right' ? 'translateX(50px)' :
      direction === 'up' ? 'translateY(50px)' :
      'translateY(-50px)',
    transition: `opacity ${duration}ms ease-in-out ${delay}ms, transform ${duration}ms ease-in-out ${delay}ms`,
  };

  if (isVisible) {
    slideInStyle.opacity = 1;
    slideInStyle.transform = 'translate(0)';
  }

  return [ref, slideInStyle];
};

export const useZoomIn = (duration = 1000, delay = 0) => {
  const [ref, isVisible] = useIsVisible();

  const zoomInStyle = {
    opacity: 0,
    transform: 'scale(0.5)',
    transition: `opacity ${duration}ms ease-in-out ${delay}ms, transform ${duration}ms ease-in-out ${delay}ms`,
  };

  if (isVisible) {
    zoomInStyle.opacity = 1;
    zoomInStyle.transform = 'scale(1)';
  }

  return [ref, zoomInStyle];
};

export const useRotate = (degrees = 360, duration = 1000, delay = 0) => {
  const [ref, isVisible] = useIsVisible();

  const rotateStyle = {
    opacity: 0,
    transform: 'rotate(0deg)',
    transition: `opacity ${duration}ms ease-in-out ${delay}ms, transform ${duration}ms ease-in-out ${delay}ms`,
  };

  if (isVisible) {
    rotateStyle.opacity = 1;
    rotateStyle.transform = `rotate(${degrees}deg)`;
  }

  return [ref, rotateStyle];
};