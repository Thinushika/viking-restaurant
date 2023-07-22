import React from "react";
import styles from "../../../styles/Home.module.css";
import Image from "next/image";

const TheStory = () => {
  return (
    <>
      <div className="d-flex px-2 px-lg-5">
        <div className="d-flex flex-column flex-lg-row px-0 px-lg-5">
          <div
            className={`col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center  px-0 px-md-5 ${styles.borderRight}`}
          >
            <Image
              src={"/assests/images/bg/the_story.png"}
              alt=""
              width={350}
              height={300}
              className={`${styles.imgStory}`}
            />
          </div>
          <div
            className={`col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center px-0 px-md-5 px-lg-0 ${styles.storySec} px-0 px-lg-5`}
          >
            <div className="d-flex flex-column mb-4 mt-4 mt-lg-0">
              <h3 className="mb-0">The Story</h3>
              <p className="mb-0">
                Embark on a Remarkable Journey of Cultural Fusion and Unmatched
                Hospitality at the Finest Hotel in Sri Lanka, Owned by a Danish
                Entrepreneur. Experience the Perfect Blend of Sri Lankan Charm
                and European Elegance, Where Our Expertise in Hospitality
                Creates a Sanctuary of Comfort and Freedom. Welcome to the
                Epitome of Tranquility, the Most Exquisite and Comfortable
                Destination in Sri Lanka
              </p>
            </div>
            <div className="d-flex flex-column flex-md-row mb-4">
              <div className="col-12 col-md-6 d-flex flex-column me-0 me-md-2">
                <h3 className="mb-0">2016</h3>
                <p>
                  Where Cultural Fusion Meets Comfort. Welcome to Tranquility,
                  Sri Lanka&apos;s Premier Boutique Hotel.
                </p>
                <span className="mb-0">Asoka Premadige</span>
                <Image
                  src={"/assests/images/bg/signature.png"}
                  alt=""
                  width={100}
                  height={100}
                  className={`img-fluid`}
                />
              </div>
              <div className="col-12 col-md-6 d-flex flex-column ms-0 ms-md-2">
                <h3 className="mb-0">2023</h3>
                <p>
                  We proudly celebrate 07 years of dedicated service, adorned
                  with great honor and unwavering commitment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TheStory;
