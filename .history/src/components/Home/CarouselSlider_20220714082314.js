import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function CarouselSlider() {
  return (
    <Carousel showStatus={false} showThumbs={false} showArrows={true}>
      <div>
        <img
          className="w-full h-[330px] md:h-[560px]"
          src="https://thumbs.dreamstime.com/b/man-working-computer-table-office-closeup-banner-design-179886094.jpg"
          alt="math"
        />
      </div>
      <div>
        <img
          className="w-full h-[330px] md:h-[560px]"
          src="https://thumbs.dreamstime.com/b/woman-using-laptop-computer-credit-card-cafe-banner-business-online-shopping-e-commerce-concept-woman-using-laptop-242523774.jpg"
          alt="group-of-pepole"
        />
      </div>
      <div>
        <img
          className="w-full h-[330px] md:h-[560px]"
          src="https://images.pexels.com/photos/714699/pexels-photo-714699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="mathematics"
        />
      </div>
    </Carousel>
  );
}

export default CarouselSlider;
