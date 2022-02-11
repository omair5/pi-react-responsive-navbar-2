import React, { useEffect, useState } from 'react';
import { BsArrowUpSquareFill } from "react-icons/bs";
import styles from './index.module.css'


const GoToTop = () => {
    const [goToTop, setGoToTop] = useState(false)
    const HandleTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    const HandleScroll = () => {
        if (!goToTop && window.pageYOffset >= 200) {
            setGoToTop(true)
        }
        else if (goToTop && window.pageYOffset < 200) {
            setGoToTop(false)
        }
    }

    useEffect(() => {
        document.addEventListener('scroll', HandleScroll)
        // cleanup this component
        return () => {
            document.removeEventListener('scroll', HandleScroll);
        };
    })

    return (
        <>
            {goToTop ?
                <div className={styles.gotoTop} onClick={HandleTop}>
                    <BsArrowUpSquareFill className={styles.UpArrow} style={{ fontSize: '40px' }} />
                </div>
                : null}
        </>
    );
}
export default React.memo(GoToTop);