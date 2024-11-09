import { bannerData } from '../utils/constant/BannerData'
// import Button from '../Common/Button';
import React from "react";
import Slider from "react-slick";

const Banner = () => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: false,
  };
  return (
    <div className="slider-container px-10 rounded-xl">
      <Slider {...settings}>
        {bannerData.slice(0, 3).map((item, key) => (
          <div key={key} className=" h-[800px]">
            <img className=" rounded-xl object-cover" src={item.images} alt="banner logo" />
          </div>
        ))}
        {/* <div>
          <img src="/assets/" alt="" />
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div> */}
      </Slider>
    </div>
  )
}

export default Banner