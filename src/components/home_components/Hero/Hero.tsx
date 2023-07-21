import React from "react";
import styles from '../../../styles/Home.module.css'
import Image from 'next/image'
import CheckAvailability from '../check_availability/CheckAvailability'
const BrandSlider = () => {
    return (
        <>
        <div className={`hero_comp d-flex flex-column flex-lg-row px-2 px-lg-5 ${styles.heroContainer}`}>
            
            <div className="col-12 col-lg-6 d-flex d-lg-none justify-content-center align-items-center">
                <Image
                    src={"/assests/images/bg/home_bg.png"}
                    alt=""
                    width={350}
                    height={300}
                    className="img-fluid mt-5"
                />
            </div>
            <div className="col-12 col-lg-6 px-0 px-lg-5 d-flex flex-column justify-content-center align-items-center">
                <h1 className="text-white font-comorant text-center text-lg-start">Welcome to Viking Villa Resturent</h1>
                <p className="text-white font-josefin text-center text-lg-start">Welcome to a World of Refined Hospitality, Where Unmatched Service Meets Unparalleled Comfort</p>
            </div>
            <div className="col-12 col-lg-6 d-none d-lg-flex justify-content-end position-relative">
                <Image
                    src={"/assests/images/bg/home_bg.png"}
                    alt=""
                    width={450}
                    height={400}
                    className={`img-fluid ${styles.heroImage}`}
                    style={{zIndex: 1}}
                />
            </div>
        </div>
        <CheckAvailability />
        </>


    )

}
export default BrandSlider;