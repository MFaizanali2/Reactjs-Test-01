// import { bannerData } from '../utils/constant/BannerData'
// import Button from '../Common/Button';
import React from "react";
// import Slider from "react-slick";
import './Header.css';

const Banner = () => {
  // let settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   arrows: false,
  //   pauseOnHover: false,
  // };
  return (
    // <div className="slider-container px-10 rounded-xl w-full">
    //   <Slider {...settings}>
    //     {bannerData.slice(0, 3).map((item, key) => (
    //       <div key={key} className=" h-[800px]">
    //         <img className=" rounded-xl object-cover" src={item.images} alt="banner logo" />
    //       </div>
    //     ))}
    //     <div>
    //       <img src="/assets/img/bannerimg1.png" alt="" />
    //     </div>
    //     <div>
    //     <img src="/assets/img/bannerimg2.png" alt="" />
    //     </div>
    //     <div>
    //     <img src="/assets/img/bannerimg3.png" alt="" />
    //     </div>
    //   </Slider>
    // </div>
    <div className="banner">
      <img src="/assets/img/bannerimg1.png" alt="" />
    </div>
  )
}

export default Banner