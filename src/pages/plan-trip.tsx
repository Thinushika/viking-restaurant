import Testimonials from '@/components/home_components/testimonials'
import React from 'react'
import styles from "../styles/Home.module.css";
import Image from "next/image";


const PlanTrip = () => {
  return (
    <>
      <div className="d-flex flex-column p-0 m-0 ">
        <div className={`d-flex w-100  align-items-center flex-column p-5 ${styles.sec_abut}`}>
          <h2 className='my-4'>Plan a Trip</h2>
        </div>
      </div>
    </>
  )
}

export default PlanTrip