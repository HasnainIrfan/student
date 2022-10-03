import React from 'react';
import './Work.css';
import { WorkData } from './WorkData'


// Icons
import { UilFavorite, UilStar } from '@iconscout/react-unicons'
import { UilMapMarker } from '@iconscout/react-unicons';


import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Images
import Work1 from '../../Assets/work1.png';
import Work2 from '../../Assets/work2.png';
import Work3 from '../../Assets/work3.png';



const Work = () => {
    return (
        <>
            <div className="wrok-wrapper" id='work'>
                <div className="work">
                    <div className="work-t">
                        <h3>MENTORING FLOW</h3>
                        <h1>How does it works ?</h1>
                        <h6>Are you looking to join online institutions? Now it's very simple, Sign up with mentoring</h6>
                    </div>
                    <div className="work-b">
                        <div className="work-boxs">
                            <div className="work-box">
                                <div className="work-cricle">
                                    <span>
                                        <img src={Work3} alt="" />
                                    </span>
                                </div>
                                <h2>Sign up</h2>
                                <h6>
                                    Are you looking to join online Learning? Now it's very simple, Now Sign up
                                </h6>
                            </div>

                            <div className="work-box">
                                <div className="work-cricle">
                                    <span>
                                        <img src={Work2} alt="" />
                                    </span>
                                </div>
                                <h2>Collaborate</h2>
                                <h6>
                                    Collaborate on your own timing, by scheduling with mentor booking
                                </h6>
                            </div>

                            <div className="work-box">
                                <div className="work-cricle">
                                    <span>
                                        <img src={Work1} alt="" />
                                    </span>
                                </div>
                                <h2>Improve & Get Back</h2>
                                <h6>
                                    you can gather different skill set, and you can become mentor too
                                </h6>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="work-bottom" id='mentor'>
                    <h3>MENTORING GOALS</h3>
                    <h1>Popular Mentors</h1>
                    <p>Do you want to move on next step? Choose your most popular leaning mentors, it will help you to achieve your professional goals.</p>

                    <div className="work-swipper">
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={30}
                            loop={true}
                            grabCursor={true}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                        >

                            {
                                WorkData.map((item, i) => {
                                    return (
                                        <SwiperSlide key={i}>
                                            <img src={item.Image} alt="" />
                                            <div className="swiper-details">
                                                <h1>{item.title}</h1>
                                                <h3>{item.stitle}</h3>
                                                <h6>  <span><UilFavorite size={16} /> <UilStar size={16} /> <UilStar size={16} /> <UilStar size={16} /> <UilStar size={16} /></span> 4.6<span>/ 5</span></h6>
                                                <h5><span><UilMapMarker size={21} /></span>karachi , Pakistan</h5>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })
                            }

                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Work