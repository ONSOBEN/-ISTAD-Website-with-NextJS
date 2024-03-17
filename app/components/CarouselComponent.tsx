import { Carousel } from "flowbite-react";

const CarouselComponent = () => {
  return (
    <>
      <section className="h-[90vh]">
        <Carousel>
          <img
            src="https://istad.co/resources/img/slide/slide-1.jpg"
            alt="..."
          />
          <img
            src="https://istad.co/resources/img/slide/slide-2.jpg"
            alt="..."
          />
          <img
            src="https://istad.co/resources/img/slide/slide-3.jpg"
            alt="..."
          />
        </Carousel>
      </section>
    </>
  );
};
export default CarouselComponent;
