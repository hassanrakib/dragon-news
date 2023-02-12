import React from "react";
import Carousel from "react-bootstrap/Carousel";

const BrandsCarousel = () => {
  return (
    <Carousel className="mt-4">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://raw.githubusercontent.com/ProgrammingHero1/dragon-news-client-module-63-5/main/src/assets/brands/Brand1.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://raw.githubusercontent.com/ProgrammingHero1/dragon-news-client-module-63-5/main/src/assets/brands/Brand2.png"
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default BrandsCarousel;
