import image from '../../assets/bg-landing.png';
import image1 from '../../assets/flag.png';
import image2 from '../../assets/flag2.png';
import image3 from '../../assets/flag3.png';
import { motion } from "framer-motion";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import { scaleDown, slideLeft, slideRight, viewportSlideLeft, viewportSlideRight } from "../../framerMotion";
import { useState } from 'react';

function LandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : currentSlide - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : currentSlide + 1);
  };
  return (
    <motion.div {...scaleDown} id='/' className="w-full h-auto overflow-x-hidden overflow-y-hidden">
      <div className="w-screen h-[650px] relative">
        <div
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          className="flex w-[400vw] h-full transition-transform duration-500"
        >
          <div className='w-auto h-full flex items-center justify-center justify-start'>    
            <motion.div {...viewportSlideLeft}>
              <img className='object-cover' src={image1} alt="" />
            </motion.div>
            <div className='bg-caption rounded-md px-10 py-3 text-white absolute'>
            <motion.div {...viewportSlideRight}>
              <div className='text-3xl lg:text-7xl font-serif sm:text-lg md:text-xl  font-bold'>
                Information System Association 
              </div>
              <p className='text-center text-xs lg:text-2xl'>
                Bersatu Untuk Berjaya!
              </p>
            </motion.div>
            </div>
          </div>
          <div className='w-auto h-full flex items-center justify-start'>    
            <motion.div {...viewportSlideLeft}>
              <img className='object-cover' src={image} alt="" />
            </motion.div>
            <div className='bg-caption rounded-md px-10 py-3 text-white absolute'>
            <motion.div {...viewportSlideRight}>
              <div className='text-4xl lg:text-9xl sm:text-lg md:text-xl  font-bold'>
                INFORSA 
                <span className='ml-2 text-sm lg:text-lg text-capt font-light'>
                  .since 2019
                </span>
              </div>
              <p className='text-left text-xs lg:text-2xl'>
                We are Family of Information System
              </p>
            </motion.div>
            </div>
          </div>
          <div className='w-auto h-full flex items-center justify-start'>    
            <motion.div {...viewportSlideLeft}>
              <img className='object-cover' src={image2} alt="" />
            </motion.div>
            <div className='bg-caption rounded-md px-10 py-3 text-white absolute'>
            <motion.div {...viewportSlideRight}>
              <div className='text-4xl lg:text-9xl sm:text-lg md:text-xl  font-bold'>
                Sistem Informasi 
                <span className='ml-2 text-sm lg:text-lg text-capt font-light'>
                  .SI
                </span>
              </div>
              <p className='text-left text-xs lg:text-2xl'>
                Fakultas Teknik, Universitas Mulawarman
              </p>
            </motion.div>
            </div>
          </div>
          <div className='w-auto h-full flex items-center justify-center justify-start'>    
            <motion.div {...viewportSlideLeft}>
              <img className='object-cover' src={image3} alt="" />
            </motion.div>
            <div className='bg-caption rounded-md px-10 py-3 text-white absolute'>
            <motion.div {...viewportSlideRight}>
              <div className='text-4xl lg:text-9xl sm:text-lg md:text-xl  font-bold'>
                INFORSANIAN 
              </div>
              <p className='text-center text-xs lg:text-2xl'>
                Selamat Datang di INFORSA
              </p>
            </motion.div>
            </div>
          </div>
        </div>
        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-36">
          <motion.div
            {...slideRight}
            onClick={prevSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <HiArrowLeft />
          </motion.div>
          <motion.div
            {...slideLeft}
            onClick={nextSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <HiArrowRight />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default LandingPage;
