import image from '../../assets/family.jpg'
import { motion } from "framer-motion";
import { scaleDown, viewportSlideLeft, viewportSlideRight } from "../../framerMotion";

function LandingPage() {
  return (
    <motion.div {...scaleDown} id='/' className='relative w-auto h-full flex items-center justify-start'>    
      <motion.div {...viewportSlideLeft}>
        <img className='object-cover' src={image} alt="" />
      </motion.div>
      <div className='absolute inset-0 bg-black opacity-50'></div>
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
    </motion.div>
  )
}

export default LandingPage;
