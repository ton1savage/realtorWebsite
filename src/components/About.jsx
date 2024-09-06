import React from 'react';
import aboutPhoto from '../assets/aboutPhoto.jpg'; // Replace with the correct path to your image

const About = () => {
  return (
    <div id='about' className="flex flex-col lg:flex-row h-screen p-[10px]">
      {/* Left half */}
      <div className="listing-details lg:w-1/2 p-6 bg-white flex flex-col justify-center items-center">
        <div>
          <h1 className="text-3xl font-bold mb-4 tracking-custom">
            Meet James Johnson
          </h1>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl italic">
            Priding himself on offering clients a hands-on, low-pressure experience, James Johnson is a renowned real estate agent in the state of California, ranking in the top 10%. With a deep understanding of the local market and a passion for client satisfaction, James’s meticulous approach ensures that every client receives unparalleled service tailored to their unique needs.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md w-full max-w-md">
            <div className="mb-4">
              <span className="font-semibold">Phone number</span><br />
              <span>(555) 123-4567</span>
            </div>
            <div>
              <span className="font-semibold">Email</span><br />
              <span>james.johnson@example.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right half */}
      <div className="lg:w-1/2">
        <img 
          src={aboutPhoto}
          alt='about photo'
          className='w-full h-screen object-cover'
        />
      </div>
    </div>
  );
};

export default About;
