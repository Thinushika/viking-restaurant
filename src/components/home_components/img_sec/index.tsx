import Image from "next/image";
import React from "react";
import styles from "../../../styles/Home.module.css";

const ImgSec = () => {
  return (
    <>
      <div className={`d-flex position-relative px-2 px-lg-5 ${styles.imgGroupWrapper} justify-content-end align-items-center`}>
        <Image
          src={"/assests/images/bg/img_group.png"}
          alt=""
          width={450}
          height={400}
          className={`${styles.imgGroup} px-0 px-lg-5`}
        />
      </div>
    </>
  );
};

export default ImgSec;
