import { useEffect, useState } from 'react';

const PROGRESSING_INTERVAL = 90;
const EACH_BAR = 100;

export default function useProgressbar(
  sideCount: number,
  pause: boolean,
  currentSlide: number,
  firstSlide: number,
) {
  const [init, setInit] = useState(firstSlide * 100);
  const [progress, setProgress] = useState<Array<number>>(Array(sideCount).fill(0));
  const TOTAL = sideCount * EACH_BAR;

  useEffect(() => {
    setInit(currentSlide * 100);
  }, [currentSlide]);

  useEffect(() => {
    if (pause) {
      return;
    }
    const nInterval = setInterval(() => {
      setInit((init) => init + 2);
    }, PROGRESSING_INTERVAL);
    if (init > TOTAL && currentSlide === 0) {
      clearInterval(nInterval);
    }
    return () => clearInterval(nInterval);
  }, [pause, init]);

  useEffect(() => {
    const newProgress = progress.map((e, i) => {
      const start = EACH_BAR * i;
      const n = init - start;
      if (n < 0) return e;
      return n;
    });
    setProgress(newProgress);
  }, [init]);

  return {
    progress,
  };
}
