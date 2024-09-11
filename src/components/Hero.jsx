import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { jjlogo, images } from '../assets';
import { styles } from '../styles';

const Hero = () => {
  const [backgroundImage, setbackgroundImage] = useState(images[1]);

  useEffect(() => {
    // Find the initial index of backgroundImage in the images array
    const initialIndex = images.indexOf(backgroundImage);
    let currentindex = initialIndex >= 0 ? initialIndex : 0;

    const changeBackgroundImage = () => {
      currentindex = (currentindex + 1) % images.length;
      setbackgroundImage(images[currentindex]);
    };

    const interval = setInterval(changeBackgroundImage, 7000);

    return () => {
      clearInterval(interval);
    };
  }, [backgroundImage, images]);

  return (
    <div className='hero-details'>
      <div
        className='bg-fixed bg-cover bg-center h-[100vh] hero-transition'
        style={{ backgroundImage: `url(${backgroundImage})`, filter: 'brightness(0.5)' }}
      >
      </div>
      <div className='absolute top-0 left-0 centered-content flex flex-col justify-center items-center h-[100vh] w-[100%]'>
        <div className={`${styles.heroHeadText} flex p-[10px] items-center`}>
          <span>James</span>
          <img
            src={jjlogo}
            alt='JJ Logo'
            className='logo pb-[5px] lg:w-[150px] lg:h-[150px] sm:w-[100px] sm:h-[100px] w-[70px] h-[70px]'
          />
          <span>Johnson</span>
        </div>
        <div className='mt-[30px]'>
          <Link
            to='/home-search' // Route to HomeSearch page
            className='border-2 border-solid-black py-[5px] px-[30px] hover:py-[7px] hover:px-[35px] hover:bg-white hover:text-black text-[18px] hover:text-[20px] transition-all duration-500 tracking-[3px]'
          >
            FIND A HOME
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
