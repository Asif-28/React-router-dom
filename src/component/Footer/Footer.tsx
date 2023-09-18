import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="">
      <div className="bg-[#000] text-white flex justify-around fixed w-[100%] bottom-0 py-4 text-lg ">
        <div className="left text-white">
          <h3>this is the footer</h3>
        </div>
        <nav>
          <ul className="flex flex-col text-white">
            <Link to="">
              <li>Home</li>
            </Link>
            <Link to="about">
              <li>About</li>
            </Link>
            <Link to="contact">
              <li>Contact</li>
            </Link>
            <Link to="user">
              <li>User</li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
