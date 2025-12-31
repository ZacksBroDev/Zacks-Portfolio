import React from "react";
import Slider from "react-slick";
import { FaQuoteLeft } from "react-icons/fa";
import "./Testimonial.css";
import Reviews from "../../../Utils/Reviews";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
    autoplay: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-12 parent">
      <div className="mb-8">
        <h1 className="text-4xl font-semibold text-center text-primary">
          Testimonials
        </h1>
      </div>

      <div>
        <Slider {...settings}>
          {Reviews.map((review) => (
            <div key={review.id} className="mt-6">
              <div
                className="mx-4 rounded-lg shadow-xl single-blog cursor-pointer border-2 border-primary pt-6 flex flex-col justify-between min-h-[300px]"
                style={{ backgroundColor: "#313131" }}
              >
                <div className="px-6 pb-6">
                  <FaQuoteLeft className="mb-4 text-6xl text-primary"></FaQuoteLeft>
                  <h2 className="text-center">{review.description}</h2>
                </div>
                <div className="flex justify-end px-6 py-2 rounded-b bg-primary">
                  <div className="mr-4 text-right text-gray-200">
                    <h2 className="font-medium leading-none">{review.name}</h2>
                    <p className="text-xs leading-none">{review.bio}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
