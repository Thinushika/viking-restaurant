import Image from 'next/image'
import styles from '../../../styles/Home.module.css'
import React from 'react'

const Descrioption = () => {
    return (
        <>
            <div className="d-flex flex-column px-2 px-lg-5">
                <div className="d-flex flex-column flex-lg-row px-0 px-lg-5">
                    <div className="col-12 col-lg-6 pb-lg-0">
                        <Image
                            src={"/assests/images/bg/tour_planing.png"}
                            alt=""
                            width={350}
                            height={300}
                            className={`${styles.imgStory}`}
                        />
                    </div>
                    <div className={`col-12 col-lg-6 py-5 px-0 px-lg-5 d-flex flex-column justify-content-center ${styles.Descrioption}`}>
                        <h3 className="d-flex flex-column">
                            Tour Planning
                        </h3>
                        <p className="mb-0">
                            Based on your budget, we specialize in crafting personalized itineraries with incredible amenities. Our team has meticulously designed route plans with superlative facilities, accompanied by detailed maps for your convenience. You also have the freedom to choose specific destinations and collaborate with us to create a tailored plan that suits your preferences. With our unwavering commitment to excellence, we provide the finest services to ensure your journey is truly remarkable
                        </p>
                    </div>
                </div>
                <div className="d-flex flex-column flex-lg-row-reverse px-0 px-lg-5">
                    <div className="col-12 col-lg-6  pt-lg-0">
                        <Image
                            src={"/assests/images/bg/hire_vehicle.png"}
                            alt=""
                            width={350}
                            height={300}
                            className={`${styles.imgStory}`}
                        />
                    </div>
                    <div className={`col-12 col-lg-6 py-5 px-0 px-lg-5 d-flex flex-column justify-content-center ${styles.Descrioption}`}>
                        <h3 className="d-flex flex-column">
                        Hire Vehicle
                        </h3>
                        <p className="mb-0">
                        We offer a wide range of comfortable vehicles at affordable prices, ensuring the perfect transportation solution for your needs. Our fleet comprises top-quality vehicles that prioritize your comfort and safety. Experience a seamless travel experience with our reliable and well-maintained vehicles, tailored to provide the utmost convenience during your trip. Enjoy the peace of mind knowing that you have the best transportation at a reasonable price.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Descrioption