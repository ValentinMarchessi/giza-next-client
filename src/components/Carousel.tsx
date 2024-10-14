// import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import "./Carousel.css";
import useCarousel from "@/hooks/useCarousel";
import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";

interface Props {
  children: React.ReactNode[];
  onLeftScroll?: () => void;
  onRightScroll?: () => void;
}

export default function Carousel({ children }: Props) {
  const { carouselRef, ScrollHandlers, percentage, scrollLeft, scrollRight } =
    useCarousel();

  return (
    <>
      <div className="grid relative w-full h-full">
        <progress
          className="h-[3px] absolute w-full z-0 bg-gradient-to-r"
          value={percentage * 100}
          max={100}
        >
          {percentage * 100}%
        </progress>
        <div
          ref={carouselRef}
          {...ScrollHandlers}
          className="carousel no-scrollbar h-full pb-4"
        >
          {children.map((element, index) => (
            <div
              key={index}
              id={`carousel-item-${index}`}
              className="carousel-item"
            >
              {element}
            </div>
          ))}
        </div>
        {percentage > 0 && (
          <button
            type="button"
            className="box-content !text-white !bg-none absolute left-2 top-1/2 -translate-y-1/2"
            onClick={scrollLeft}
          >
            <ArrowBackIos />
          </button>
        )}
        {percentage < 1 && (
          <button
            type="button"
            className="box-content !text-white !bg-none absolute right-2 top-1/2 -translate-y-1/2"
            onClick={scrollRight}
          >
            <ArrowForwardIos />
          </button>
        )}
      </div>
    </>
  );
}
