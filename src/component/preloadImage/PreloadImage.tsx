// to prevent images for titles to be not shown until languageToggle

import { useEffect, useState } from 'react';

const preloadImage = (src: string): Promise<void> =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => reject();
    img.src = src;
  });

export default function useImagePreloader(imageList: string[]) {
  const [imagesPreloaded, setImagesPreloaded] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function preloadAll() {
      try {
        await Promise.all(imageList.map(preloadImage));
        if (!cancelled) setImagesPreloaded(true);
      } catch {
        if (!cancelled) setImagesPreloaded(true); // Fehler ignorieren, trotzdem weiter
      }
    }

    preloadAll();

    return () => {
      cancelled = true;
    };
  }, [imageList]);

  return imagesPreloaded;
}
