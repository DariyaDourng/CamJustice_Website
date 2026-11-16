import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";
import { META_DATA } from '../../constands/metadata';


function HeroSlider({sliders, className}) {
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <Slider className={className} {...settings}>
      {sliders.map((slider, i) => (
        <div key={i} className={`slideWrapper ${slider.images}`}>
          <div className="sliderContent">
            <div className="container">
              <div className="row">
                <div className="col col-lg-8">
                  <p>{slider.text}</p>
                  <h2>
                    <span>{slider.title}</span> <span>{slider.subTitle}</span>
                  </h2>
                  <div className="btnStyle btnStyle3">
                    <a href={META_DATA.telegram} target="_blank" rel="noreferrer">{slider.button}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
export default HeroSlider;
