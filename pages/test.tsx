import React from "react";
import ImageSlider from "components/slider";
const Test = () => {
  return (
    <div>
      <ImageSlider
        options={{
          rewind: true,
        }}
        style={{
          display: "flex",
        }}
        imageProps={{
          style: {
            height: "100%",
            width: "100%",
            objectFit: "cover",
          },
        }}
        items={[
          {
            imageURL:
              "https://cdn.pixabay.com/photo/2022/11/14/20/14/compass-7592447_1280.jpg",
          },
          {
            imageURL:
              "https://cdn.pixabay.com/photo/2022/11/16/18/38/mexico-7596566_1280.jpg",
          },
          {
            imageURL:
              "https://cdn.pixabay.com/photo/2023/01/01/13/47/street-7690119_1280.jpg",
          },
        ]}
      />
    </div>
  );
};
export default Test;
