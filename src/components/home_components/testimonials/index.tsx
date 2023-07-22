import React from 'react'
import Image from 'next/image'
import styles from '../../../styles/Home.module.css'

const Testimonials = () => {
  return (
    <>
    <div className={`d-flex flex-column px-2 px-lg-5 ${styles.servicesSec} py-5`}>
        <div className="d-flex flex-column px-0 px-lg-5 py-0 py-lg-5">
            <div className="text-center text-lg-start d-flex flex-column align-items-center align-items-lg-start justify-content-lg-center">
                <h4>Testimonial</h4>
                <h3>What our clients say</h3>
                <p>We love to hear from customers, so please leave a comment or say hello in an email.</p>
            </div>
            <div className={`d-flex flex-column flex-md-row justify-content-center align-items-center`}>
                
            </div>
        </div>
    </div>
</>
  )
}

export default Testimonials