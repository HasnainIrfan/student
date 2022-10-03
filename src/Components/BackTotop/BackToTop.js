import BackToTop from '../../Assets/backToTop.svg';
import BackToDowntext from '../../Assets/scrollText.svg';
import BackToDownIcon from '../../Assets/scrollDown.svg';
import { motion } from 'framer-motion';

import { useState } from 'react';
import { useEffect } from 'react';


function BackToTopButton() {

    const [backToTop, setBackToTop] = useState(true);
    const [backToDown, setBackToDown] = useState(true);

    // useEffect(() => {
    //     window.addEventListener('scroll', () => {
    //         if (window.scrollY > 1100) {
    //             setBackToTop(true)
    //             setBackToDown(false)
    //         }

    //         else {
    //             setBackToTop(false)
    //             setBackToDown(true)
    //         }
    //     })

    // }, [])

    // const scrollDown = () => {
    //     window.scrollTo({
    //         top: '1110',
    //         behavior: "smooth"
    //     })
    // }

    // const scrollTop = () => {
    //     window.scrollTo({
    //         top: '0',
    //         behavior: "smooth"
    //     })
    // }

    return <div className="gototop">

        {
            backToDown && (
                <>
                    <img src={BackToDowntext}  alt='' />
                    <motion.img
                        initial={{ y: 0 }}
                        whileInView={{ y: 10 }}
                        transition={{ yoyo: 10000, duration: 0.4 }}
                        className="downicon"
                        src={BackToDownIcon}  alt='' />
                </>
            )
        }


        {
            backToTop && (
                <img src={BackToTop}  alt='' />
            )
        }
    </div>






}

export default BackToTopButton