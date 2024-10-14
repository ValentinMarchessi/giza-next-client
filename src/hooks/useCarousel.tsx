import { useCallback, useMemo, useRef, useState } from "react";

export default function useCarousel() {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [percentage, setPercentage] = useState(0);

  const scrollLeft = useCallback(() => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollBy({
      left: -carouselRef.current.offsetWidth,
      behavior: "smooth",
    });
  }, []);

  const scrollLeftDisabled = useMemo(
    () =>
      Boolean(
        carouselRef.current?.children.length &&
          percentage + 0.001 <= 1 / (carouselRef.current?.children.length - 1)
      ),
    [percentage]
  );
  const scrollRightDisabled = useMemo(
    () =>
      Boolean(
        carouselRef.current?.children.length &&
          percentage - 0.001 >= 1 - 1 / (carouselRef.current?.children.length - 1)
      ),
    [percentage]
  );

  const scrollRight = useCallback(() => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollBy({
      left: carouselRef.current.offsetWidth,
      behavior: "smooth",
    });
  }, []);

  const ScrollHandlers = {
    onMouseDown: () => {
      setIsDragging(true);
    },
    onMouseMove: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (!isDragging) return;
      const { movementX } = e;
      if (movementX < 0) {
        scrollRight();
      } else if (movementX > 0) {
        scrollLeft();
      }
    },
    onMouseUp: () => {
      setIsDragging(false);
    },
    onMouseLeave: () => {
      setIsDragging(false);
    },
    onScroll: (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
      const { scrollLeft, scrollWidth, offsetWidth } = e.currentTarget;
      setPercentage(scrollLeft / (scrollWidth - offsetWidth));
    },
  };

  return {
    carouselRef,
    ScrollHandlers,
    scrollLeft,
    scrollRight,
    percentage,
    scrollLeftDisabled,
    scrollRightDisabled,
  };
}
