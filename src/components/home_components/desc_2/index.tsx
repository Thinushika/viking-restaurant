import Image from 'next/image'
import styles from '../../../styles/Home.module.css'
import React from 'react'

const Description2 = () => {
  return (
    <>
            <div className="d-flex flex-column px-2 px-lg-5">
                <div className="d-flex flex-column flex-lg-row px-0 px-lg-5">
                    <div className="col-12 col-lg-6 pb-lg-0">
                        <Image
                            src={"/assests/images/bg/luxury_rooms.png"}
                            alt=""
                            width={350}
                            height={300}
                            className={`${styles.imgStory}`}
                        />
                    </div>
                    <div className={`col-12 col-lg-6 py-5 ps-0 ps-lg-5 d-flex flex-column justify-content-center ${styles.Descrioption}`}>
                        <h3 className="d-flex flex-column">
                        Luxury Rooms
                        </h3>
                        <p className="mb-0">
                        Unleash your senses with our restaurant&apos;s luxurious rooms. Immerse yourself in opulence, where elegance meets comfort. Experience the epitome of luxury, right within our doors.
                        </p>
                    </div>
                </div>
                <div className="d-flex flex-column flex-lg-row-reverse px-0 px-lg-5">
                    <div className="col-12 col-lg-6  pt-lg-0">
                        <Image
                            src={"/assests/images/bg/cultural_foods.png"}
                            alt=""
                            width={350}
                            height={300}
                            className={`${styles.imgStory}`}
                        />
                    </div>
                    <div className={`col-12 col-lg-6 py-5 ps-0 pe-lg-5 d-flex flex-column justify-content-center ${styles.Descrioption}`}>
                        <h3 className="d-flex flex-column">
                        Cultural Foods
                        </h3>
                        <p className="mb-0">
                        Experience the captivating flavors of Sri Lanka with our authentic cultural foods. Indulge in a culinary adventure as we bring the vibrant spices and traditional dishes of Sri Lanka to your plate. Immerse yourself in a fusion of tastes and aromas that will transport you to the heart of this enchanting island.
                        </p>
                    </div>
                </div>
            </div>
        </>
  )
}

export default Description2