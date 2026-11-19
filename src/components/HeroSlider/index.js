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
    arrows: false,
    fade: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    pauseOnFocus: false,
  };
  return (
    <Slider className={className} {...settings}>
      {sliders.map((slider, i) => (
        <div key={i} className={`slideWrapper ${slider.images}`}>
          <div className="slideBackground" aria-hidden="true" />
          <div className="heroBrandMark" aria-hidden="true">
            <span>CAMJUSTICE</span>
            <strong>Trusted legal counsel in Cambodia</strong>
          </div>
          <div className="sliderContent">
            <div className="container">
              <div className="row">
                <div className="col col-lg-8">
                  {slider.text && <p>{slider.text}</p>}
                  {(slider.title || slider.subTitle) && (
                    <h2>
                      {slider.title && <span>{slider.title}</span>}
                      {slider.subTitle && <span>{slider.subTitle}</span>}
                    </h2>
                  )}
                  {slider.description && (
                    <p className="slideDescription">{slider.description}</p>
                  )}
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
