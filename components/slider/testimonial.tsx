/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// import '@splidejs/splide/dist/css/splide.min.css';
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";

type SplideProps = React.ComponentProps<typeof Splide>;

interface ItemsProps {
  element: React.ReactNode | React.ReactNode[];
}

interface ImageSliderProps extends SplideProps {
  items: ItemsProps[];
  slideProps?: React.ComponentProps<typeof SplideSlide>;
}

const TestimonialSlider = ({
  items,
  slideProps,
  ...rest
}: ImageSliderProps) => {
  return (
    <Splide {...rest}>
      {items.map((item, index) => {
        return (
          <SplideSlide key={index} {...slideProps}>
            {item.element}
          </SplideSlide>
        );
      })}
    </Splide>
  );
};
export default TestimonialSlider;
