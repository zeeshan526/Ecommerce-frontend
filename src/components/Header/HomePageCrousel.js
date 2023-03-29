import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        <div className="h-screen bg-gray-100 flex justify-center items-center">
        <img src='https://thegenuineleather.com/wp-content/uploads/2019/11/mens-swearters.webp' alt='...'/>
        </div>
        <div className="h-screen bg-gray-200 flex justify-center items-center">
        <img src='https://thegenuineleather.com/wp-content/uploads/2022/09/Banner-AVIATOR-JACKETs.webp' alt='...'/>
        </div>
        <div className="h-screen bg-gray-300 flex justify-center items-center">
        <img src='https://thegenuineleather.com/wp-content/uploads/2022/10/HOODIES-collection-tgl.webp' alt='...'/>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
