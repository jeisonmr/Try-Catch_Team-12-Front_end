import React from 'react'
import imgBanner_1 from '/public/img/sliders/banner-avg.png';
import imgBanner_2 from '/public/img/sliders/banner-promo.png';
import imgBanner_3 from '/public/img/sliders/colfilms.png';
import imgBanner_4 from '/public/img/sliders/dc.png';
import imgBanner_5 from '/public/img/sliders/encanto.png';
import imgBanner_6 from '/public/img/sliders/la-monja.png';
import imgBanner_7 from '/public/img/sliders/marvel.png';
export const Slider = () => {
  return (
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={imgBanner_1} className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src={imgBanner_2} className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src={imgBanner_3} className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src={imgBanner_4} className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src={imgBanner_5} className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src={imgBanner_6} className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src={imgBanner_7} className="d-block w-100" alt="..."/>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  )
}
