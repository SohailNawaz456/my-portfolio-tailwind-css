import React from "react";
import Navbar from "../components/Navbar";

const Hero = () => {
  return (
    <div
  id="hero"
  className=" min-h-screen bg-no-repeat bg-[url(/profile.jpeg)] bg-cover"
  style={{ backgroundSize: "35%", backgroundPosition: "left 180px top 180px"}} 
>

      <Navbar />
      <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)]">
        <div className="hidden lg:block"></div>

        {/* Changes: Adjusted text size and centering */}
        <div className="text-[70px] sm:text-[100px] font-bold leading-tight flex justify-center items-center text-white">
          <div>
            <p data-aos="zoom-in-up">I am</p>
            <p data-aos="zoom-in-up">Sohail</p>
            <p data-aos="zoom-in-up">Nawaz</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;