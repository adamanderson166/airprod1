import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/TidbitsJS/Summize", "_blank")
          }
          className='black_btn'
        >
          Premium
        </button>
      </nav>

      <h1 className='head_text'>
        Empowering small-mid business with AI <br className='max-md:hidden' />
        <span className='orange_gradient '>AI TOOLS AND SERVICES</span>
      </h1>
      <h2 className='desc'>
        Innovative SAAS AI Tools and Services. 
        Sign up for our consultation and package offers.
        Try some of our services for free.
      </h2>
    </header>
  );
};

export default Hero;