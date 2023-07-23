import React from "react";
import Image from "next/image";
import styles from "../../../styles/Home.module.css";

const PlanTour = () => {
  return (
    <>
      <div className="d-flex flex-column px-0 px-lg-5 pt-5 pb-0 pb-lg-5">
        <div className="d-flex px-0 px-lg-5 pb-0 pb-lg-5">
          <div
            className={`d-flex ${styles.planWrapperImage} position-relative`}
          >
            <div
              className={`col-12 col-lg-5 px-3 px-md-5 py-5 p-lg-5 d-flex flex-column ${styles.planWrapper} `}
            >
              <h3>Plan Your Journey</h3>
              <p>
                We specialize in helping you plan your trip to Sri Lanka,
                ensuring an unforgettable experience. Our team will introduce
                you to the best places, arrange reliable transportation, and
                make hotel reservations tailored to your preferences. We are
                dedicated to making your journey comfortable and joyful, so you
                can relax and fully immerse yourself in the beauty of Sri Lanka.
              </p>
              <button
                className={`${styles.filledBtn} ${styles.btnAll} px-2 py-2`}
              >
                Start Plan your Trip
              </button>
            </div>
          </div>
        </div>
        <div className="d-flex px-0 px-lg-5">
          <div
            className={`d-flex ${styles.tourWrapperImage} position-relative`}
          >
            <div
              className={`col-12 col-lg-5 px-3 px-md-5 py-5 p-lg-5 d-flex flex-column ${styles.tourWrapper} `}
            >
              <h3>Plan Your Journey</h3>
              <p>
                We specialize in helping you plan your trip to Sri Lanka,
                ensuring an unforgettable experience. Our team will introduce
                you to the best places, arrange reliable transportation, and
                make hotel reservations tailored to your preferences. We are
                dedicated to making your journey comfortable and joyful, so you
                can relax and fully immerse yourself in the beauty of Sri Lanka.
              </p>
              <div className="d-flex flex-row">
                <div className="col-2 d-flex align-items-center">
                  <Image
                    src={"/assests/images/icons/Airport.png"}
                    alt=""
                    width={22}
                    height={22}
                    className={`img-fluid`}
                  />
                </div>
                <div className="col-7 d-flex align-items-center">
                  <span>AIRPORT</span>
                </div>
                <div className="col-3 d-flex align-items-center">
                  <span>35 Min</span>
                </div>
              </div>
              <div className="d-flex flex-row mb-4">
                <div className="col-2 d-flex align-items-center">
                  <Image
                    src={"/assests/images/icons/Railway Station.png"}
                    alt=""
                    width={22}
                    height={22}
                    className={`img-fluid`}
                  />
                </div>
                <div className="col-7 d-flex align-items-center">
                  <span className="mb-0">RAILWAY STATION</span>
                </div>
                <div className="col-3 d-flex align-items-center">
                  <span className="mb-0">20 Min</span>
                </div>
              </div>
              <button
                className={`${styles.filledBtn} ${styles.btnAll} px-2 py-2`}
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlanTour;
