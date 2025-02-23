import { type RefObject, useCallback } from 'react';
import useIntersectionEffect from '@/hooks/useIntersectionEffect';
import { getLandingKeyframesArray } from '@/utils';

interface UseIntersectionSlideEffectProps {
  spyRef: RefObject<HTMLElement | null>;
  targetRef: RefObject<HTMLElement | null>;
  reverse?: boolean;
  delay?: number;
}

function useIntersectionSlideEffect({ spyRef, targetRef, reverse, delay }: UseIntersectionSlideEffectProps) {
  const effectCallback = useCallback(() => {
    if (! targetRef.current)
      return;

    const keyframes = getLandingKeyframesArray();
    targetRef.current.animate(keyframes, {
      easing: 'ease-in-out',
      duration: 500,
      fill: 'forwards',
      delay: delay || 0,
    });
  }, [targetRef, reverse]);
  useIntersectionEffect({ spyRef, threshold: 0.8, callback: effectCallback, triggerOnce: true });
}

export default useIntersectionSlideEffect;
