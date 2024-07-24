import React from 'react'
import slick_1 from "../img/vendor-1.jpg"
import slick_2 from "../img/vendor-2.jpg"
import slick_3 from "../img/vendor-3.jpg"
import slick_4 from "../img/vendor-4.jpg"
import slick_5 from "../img/vendor-5.jpg"

import Slider from "react-slick";
import "./slick.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Slick() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 900,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ],
        
    };
    return (
        <section className='slider2'>
            <Slider {...settings} className='container'>
                <div><img src={slick_1} alt="" /></div>
                <div><img src={slick_2} alt="" /></div>
                <div><img src={slick_3} alt="" /></div>
                <div><img src={slick_4} alt="" /></div>
                <div><img src={slick_5} alt="" /></div>
            </Slider  >
        </section>

    )
}
