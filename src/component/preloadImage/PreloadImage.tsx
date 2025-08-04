import { useEffect, useState, useMemo } from "react";

const preloadImage = (src: string): Promise<void> =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => reject(new Error(`Image failed to preload: ${src}`));
    img.src = src;
  });

export default function useImagePreloader(imageList: string[]) {
  // useMemo makes sure that imageList is stable and not rerendered everytime
  const memoizedImageList = useMemo(() => imageList, [JSON.stringify(imageList)]);

  const [imagesPreloaded, setImagesPreloaded] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function preloadAll() {
      try {
        await Promise.all(
          memoizedImageList.map((src) =>
            preloadImage(src).catch((error) => {
              console.error(error);
              // Fehler ignorieren, um Ladefortschritt nicht zu blockieren
            })
          )
        );
        if (!cancelled) setImagesPreloaded(true);
      } catch (error) {
        if (!cancelled) setImagesPreloaded(true);
        console.error("Unexpected error in image preloading:", error);
      }
    }

    preloadAll();

    return () => {
      cancelled = true;
    };
  }, [memoizedImageList]);

  return imagesPreloaded;
}