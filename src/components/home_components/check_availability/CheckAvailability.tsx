import React from "react";
import styles from '../../../styles/Home.module.css'

const CheckAvailability = () => {
    return (
        <div className="check_container">
            <div className={`${styles.checkCard}`}>
                <div className={`${styles.bookHolidays} w-5 h-5`}>BOOK YOUR HOLIDAYS NOW</div>
                <div className={`${styles.checkIn} w-25 h-5`}>
                <p>Check in</p>
                    <div>
                    <h1>04</h1> 
                    <p>January 2023</p>                 
                    </div>
                </div>
                <div className={`${styles.checkOut} w-25 h-5`}>
                <p>Check Out</p>
                    <div>
                    <h1>04</h1>  
                    <p>January 2023</p>    
                    </div>
                </div>
                <div className={`${styles.promoCode} w-25 h-5`}>
                    <p>HAVE A PROMOTIONAL CODE HERE</p>
                    <p>+9411352145</p>
                </div>
                <div className={`${styles.checkBtn} w-25 h-5`}>
                    <p>CHECK AVAILABILITY</p>
                    <p>BEST PRICE GUARANTEED</p>
                </div>
            </div>
        </div>
    )

}
export default CheckAvailability;