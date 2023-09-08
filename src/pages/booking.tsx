import Testimonials from '@/components/home_components/testimonials'
import React from 'react'
import styles from "../styles/Home.module.css";
import Image from "next/image";


const Booking = () => {
  return (
    <>
      <div className="d-flex flex-column p-0 m-0 ">
        <div className={`d-flex w-100  align-items-center flex-column p-5 ${styles.sec_abut}`}>
          <h2 className='my-4'>Booking</h2>
        </div>
        {/* section 5 */}
        <div className="d-flex flex-column justify-content-center align-items-center px-2 px-lg-5 py-5 m-0 w-100">
          <div className="d-flex flex-column justify-content-center align-items-center p-0 p-lg-5 m-0 w-100">
            {/* <p className={`${styles.section_subtitle}`}>Galary</p> */}
            <h3 className={`${styles.section_title} mb-4`}>Our Facilities</h3>
            <div className={`d-flex flex-column flex-lg-row p-0 m-0 px-lg-2 w-100 text-center`}>
              <div className={`col-12 col-md-6 col-lg-3 pe-1 ${styles.gallery_sec_height} ${styles.column_small}`}>
              <Image
                  src={"/assests/images/gallery/1.jpg"}
                  alt=""
                  width={200}
                  height={180}
                  className={`img-fluid ${styles.team_image} mb-2`}
                />
                <Image
                  src={"/assests/images/gallery/2.jpg"}
                  alt=""
                  width={200}
                  height={180}
                  className={`img-fluid ${styles.team_image}`}
                />
              </div>
              <div className={`col-12 col-md-6 col-lg-6 p-1 ${styles.gallery_sec_height} ${styles.column_lg}`}>
              <Image
                  src={"/assests/images/gallery/cropped.png"}
                  alt=""
                  width={350}
                  height={300}
                  className={`img-fluid ${styles.team_image} mb-2`}
                />
              </div>
              <div className={`col-12 col-md-6 col-lg-3 ps-1 ${styles.gallery_sec_height} ${styles.column_small}`}>
              <Image
                  src={"/assests/images/gallery/4.jpg"}
                  alt=""
                  width={200}
                  height={180}
                  className={`img-fluid ${styles.team_image} mb-2`}
                />
                <Image
                  src={"/assests/images/gallery/5.jpg"}
                  alt=""
                  width={200}
                  height={180}
                  className={`img-fluid ${styles.team_image}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Booking