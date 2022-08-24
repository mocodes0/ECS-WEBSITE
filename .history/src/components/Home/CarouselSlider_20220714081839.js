import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function CarouselSlider() {
  return (
    <Carousel showStatus={false} showThumbs={false} showArrows={true}>
      <div>
        <img
          className="w-full h-[330px] md:h-[560px]"
          src="https://images.pexels.com/photos/3825462/pexels-photo-3825462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="math"
        />
      </div>
      <div>
        <img
          className="w-full h-[330px] md:h-[560px]"
          src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/167881143/original/b518bed44c938e5fea9564511c521cd6712e0a39/explain-university-math-and-answer-all-your-questions.jpg"
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
