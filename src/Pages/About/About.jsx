import React from 'react';
import './About.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFlip, Pagination, Navigation } from "swiper";


const About = () => {
    return (
        <>
            <div className="about-wrapper" id='about'>
                <div className="about">
                    <div className="about-l">
                        <h1>About Us</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe placeat porro maiores ut facere facilis aspernatur culpa similique esse distinctio necessitatibus fugiat natus quam, ipsa sed rerum eos provident. Sequi perferendis molestiae harum fugiat saepe repellat accusantium a, nulla cumque odio ea architecto itaque, quidem quis tenetur unde pariatur voluptas.</p>
                        <button className='animatebtn aboutbtn'><span>Read More</span></button>
                    </div>
                    <div className="about-r">
                        <Swiper
                            effect={"flip"}
                            grabCursor={true}
                            pagination={true}
                            navigation={true}
                            modules={[EffectFlip, Pagination, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img alt='' src="https://images.unsplash.com/photo-1558021211-6d1403321394?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1452&q=80" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img alt='' src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img alt='' src="https://images.unsplash.com/photo-1567168539593-59673ababaae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img alt='' src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img alt='' src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
                            </SwiperSlide>

                            <SwiperSlide>
                                <img alt='' src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" />
                            </SwiperSlide>

                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About