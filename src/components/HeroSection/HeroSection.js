import React from 'react';
import { Link } from 'react-router-dom';
import beachImg from '../../assets/beach-1.jpg'



const HeroSection = () => {
    return (
        <div className=''>
     

    <div className="relative">
      <img
        src={beachImg}
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-gray-900 bg-opacity-50">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h5 className="max-w-lg mb-6   font-bold tracking-tight text-white sm:text-xl sm:leading-none">
             Good Morning 
                <h5 className="text-teal-400 text-2xl md:text-4xl lg:text-5xl mt-4">Mr. Donald Trump</h5>
              </h5>
              <p className="max-w-xl mb-4 text-base text-white md:text-lg">
                Enjoy Your Journey With Our Best Services
              </p>
              <button

                aria-label=""
                className="inline-flex items-center font-semibold tracking-wider  btn btn-info transition-colors duration-200 text-whit  hover:text-teal-700"
              >
                Book Now
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </button>
            </div>
           
          </div>
        </div>
      </div>
    </div>

        </div>
    );
};

export default HeroSection;