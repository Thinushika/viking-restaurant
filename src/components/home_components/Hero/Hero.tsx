import React from "react";
import styles from '../../../styles/Home.module.css'
import Image from 'next/image'
import CheckAvailability from '../check_availability/CheckAvailability'
const BrandSlider = () => {
    return (
        <div className="hero_comp">
            <div className={`${styles.heroContainer}`}>
                <div className={`${styles.mainTitle}`}>
                    <h1>Welcome to Viking Villa Resturent</h1>
                    <p>Welcome to a World of Refined Hospitality, Where Unmatched Service Meets Unparalleled Comfort</p>
                </div>
                <div>
                    <Image
                        src={"/assests/images/bg/home_bg.png"}
                        alt=""
                        width={400}
                        height={390}
                        className={`${styles.heroImage}`}
                    />
                </div>
            </div>
            <div>
                <CheckAvailability />
            </div>
        </div>


    )

}
export default BrandSlider;