import React, { useState } from 'react';
import './Main.css';
import HomeImage1 from '../../Assets/re1.png';
import HomeImage2 from '../../Assets/re2.png';
import BackToTopButton from '../BackTotop/BackToTop';

const Main = () => {


  const [skew, setsKew] = useState(false);

  const ChnageSkew = () => {
    if (window.scrollY >= 400) {
      setsKew(true)
    } else {
      setsKew(false)
    }
  }

  window.addEventListener('scroll', ChnageSkew)



  return (
    <>
      <div className="main-wrapper" id='home'>
        <img src={HomeImage1} alt="" className='homeImage1' />
        <img src={HomeImage2} alt="" className='homeImage2' />
        <div className={"skewOne " + (skew ? 'skewOneNew' : '')} ></div>
        <div className={"skewtwo " + (skew ? 'skewOneNew' : '')} ></div>
        <div className="main">
          <div className="a">
            {/* <BackToTopButton/> */}
          </div>
          {/* <div className="main-l"></div> */}
          {/* <div className="main-r"></div> */}
          {/* <div className="img"><img src={Character} alt="" /></div> */}

        </div>
      </div>
    </>
  )
}

export default Main