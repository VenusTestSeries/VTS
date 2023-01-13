/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// import '@splidejs/splide/dist/css/splide.min.css';
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";

type SplideProps = React.ComponentProps<typeof Splide>;

interface ItemsProps {
  imageURL: string;
}

interface ImageSliderProps extends SplideProps {
  items: ItemsProps[];
  slideProps?: React.ComponentProps<typeof SplideSlide>;
  imageProps?: React.ComponentProps<"img">;
}

const ImageSlider = ({
  items,
  slideProps,
  imageProps,
  ...rest
}: ImageSliderProps) => {
  return (
    <Splide {...rest}>
      {items.map((item, index) => {
        return (
          <SplideSlide key={index} {...slideProps}>
            <img src={item.imageURL} alt="Image 1" {...imageProps} />
          </SplideSlide>
        );
      })}
    </Splide>
  );
};
export default ImageSlider;
