import { useLayoutEffect } from 'react';

interface UsePreloadBackgroundProps {
  src: string;
}

function usePreloadBackground({ src }: UsePreloadBackgroundProps) {
  useLayoutEffect(() => {
    const img = new Image();
    img.src = src;
  }, []);
}

export default usePreloadBackground;
