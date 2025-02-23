import { useEffect, useState } from 'react';

type ImageModule = { default: string };

function useActivityCardImage() {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const imageMods = import.meta.glob('../../assets/icons/activity/*.svg');
    Promise.all(Object.entries(imageMods).map(([, image]) => {
      return image();
    })).then(modules => {
      setImages(modules.map((module) => ((module as ImageModule).default)));
    });
  }, []);

  return { images };
}

export default useActivityCardImage;
