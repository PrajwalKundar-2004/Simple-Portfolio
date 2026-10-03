import { useEffect } from 'react';
import Lenis from 'lenis';

export const useSmoothScroll = () => {
  useEffect(() => {
    // Only enable Lenis on desktop devices with a fine mouse pointer
    // Intercepting touch scrolling on mobile degrades native 120Hz/60Hz momentum scrolling
    const isTouchOrMobile =
      typeof window !== 'undefined' &&
      (window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 1024);

    if (isTouchOrMobile) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);
};

