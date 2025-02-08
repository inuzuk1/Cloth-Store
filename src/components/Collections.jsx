import { Component } from "react";
import image1 from '../image/Rectangle 18.svg'
import image2 from '../image/Group 67.svg'
import image3 from '../image/Group 68.svg'
import image4 from '../image/Group 69.svg'
import image5 from '../image/Vector(2).svg'
import image6 from '../image/Vector(3).svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { React } from 'react';
import { useSwiper } from 'swiper/react';



function Collection(props){

    let swiper;

    return(
        <div>
            <h1>NEW <br/> THIS WEEK <sup>(50)</sup></h1>
            <p className="See_All">See All</p>
            <div className="Tshirts">
            <Swiper
                spaceBetween={50}
                slidesPerView={4}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swipers) => swiper = swipers}
                >
                <SwiperSlide>
                    <div className="Tshirts_img">
                        <img src={image1} alt="" />
                        <div className="slide_row">
                            <div>
                                <p>V-Neck T-Shirt</p>
                                <h1>Embroidered Seersucker Shirt</h1>
                            </div>
                            <div>
                                <h2>$99</h2>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="Tshirts_img">
                        <img src={image2} alt="" />
                        <p>Cotton T Shirt</p>
                        <h1>Basic Slim Fit T-Shirt</h1>
                        <h2>$99</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="Tshirts_img">
                        <img src={image3} alt="" />
                        <p>Henley T-Shirt</p>
                        <h1>Blurred Print T-Shirt</h1>
                        <h2>$99</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="Tshirts_img">
                        <img src={image4} alt="" />
                        <p>Crewneck T-Shirt</p>
                        <h1>Full Sleeve Zipper</h1>
                        <h2>$99000000</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="Tshirts_img">
                        <img src={image1} alt="" />
                        <p>V-Neck T-Shirt</p>
                        <h1>Embroidered Seersucker Shirt</h1>
                        <h2>$99</h2>
                    </div>
                </SwiperSlide>
                
            </Swiper>
              
                
            </div>
            <div className='arrows1'>
                    <button onClick={() => swiper.slidePrev()} className='arrow1'><img src={image6} alt="" /></button>
                    <button onClick={() => swiper.slideNext()}className='arrow1'><img src={image5} alt="" /></button>
                </div>
        </div>
    )
}

export default Collection;