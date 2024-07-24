import React from 'react'
import "./header.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'animate.css';

export default function Header() {

    
    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed:2000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
        <div>
            <div className="container my-5" id='Head'>
                <div className="row d-flex ">
                    <div className="col-lg-8 col-md-8 col-sm-12">
                        <Slider {...settings} className="head-left">

                            <div className="head-left-men  ">
                                <h3 className="slide-title animate__animated animate__bounceInUp">Men Fashon</h3>
                                <p className='ms-5 animate__animated animate__bounceIn'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil magnam excepturi iusto rem laboriosam, quod doloremque tenetur dolorem minima sapiente ea voluptas suscipit asperiores voluptatem necessitatibus cum aliquam, quibusdam perspiciatis?</p>
                                <button className='mt-2 header-but animate__animated animate__bounceInDown'>Shop Now</button>

                            </div>
                            <div className="head-left-woman ">
                                <h3 className="slide-title animate__animated animate__bounceInUp">women Fashon</h3>
                                <p className='ms-5 animate__animated animate__bounceIn'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil magnam excepturi iusto rem laboriosam, quod doloremque tenetur dolorem minima sapiente ea voluptas suscipit asperiores voluptatem necessitatibus cum aliquam, quibusdam perspiciatis?</p>
                                <button className='mt-4 header-but'>Shop Now</button>

                            </div>
                            <div className="head-left-kids ">
                                <h3 className="slide-title animate__animated animate__bounceInUp">kids Fashon</h3>
                                <p className='ms-5 animate__animated animate__bounceIn'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil magnam excepturi iusto rem laboriosam, quod doloremque tenetur dolorem minima sapiente ea voluptas suscipit asperiores voluptatem necessitatibus cum aliquam, quibusdam perspiciatis?</p>
                                <button className='mt-4 header-but animate__animated animate__bounceInDown'>Shop Now</button>

                            </div>
                        </Slider>
                    </div>
                    <div className="col-lg-4 col-md-4 col-ms-12">
                        <div className="head-right">
                            <div className='head-right-up'>
                                <b className='animate__animated animate__bounceInUp fs-4'>Save 20%</b>
                                <h3 className="slider-title animate__animated animate__bounceIn">Special Offer</h3>
                                <button className='head-right-btn animate__animated animate__bounceInDown'>Shop Now</button>
                            </div>
                            <div className='head-right-down'>
                                <b className='animate__animated animate__bounceInDown fs-4'>Save 20%</b>
                                <h3 className="slider-title animate__animated animate__bounceIn">Special Offer</h3>
                                <button className='head-right-btn animate__animated animate__bounceInUp'>Shop Now</button>
                            </div>
                        </div>
                    </div>
               </div>
            </div>
        </div>
    )
}
