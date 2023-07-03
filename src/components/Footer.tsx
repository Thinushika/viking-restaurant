import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaSkype, FaTwitter, FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

type Props = {};

const Footer = (props: Props) => {
  const companyLinks = [
    {
      id: 1,
      title: "About us",
      link: "/about",
    },
    {
      id: 2,
      title: "Our work",
      link: "/our_work",
    },
    {
      id: 3,
      title: "Client",
      link: "/client",
    },
    {
      id: 4,
      title: "Our Blog",
      link: "/blog",
    },
    {
      id: 5,
      title: "Contact Us",
      link: "/contact",
    },
  ];

  const productsLinks = [
    {
      id: 1,
      title: "Graphic Design",
      link: "#",
    },
    {
      id: 2,
      title: "UI/UX Design",
      link: "#",
    },
    {
      id: 3,
      title: "Web Development",
      link: "#",
    },
    {
      id: 4,
      title: "App Development",
      link: "#",
    },
    {
      id: 5,
      title: "Web Hosting",
      link: "#",
    },
  ];

  return (
    <div className="d-flex flex-column p-0 m-0">
      <h1>footer</h1>
    </div>
  );
};

export default Footer;
