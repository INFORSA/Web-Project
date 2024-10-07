import image from '../../assets/bg-flag.png';
import { motion } from "framer-motion";
import { scaleDown, slideDown } from "../../framerMotion";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

function LandingPage() {
  return (
    <motion.div {...scaleDown} id='/' className='bg-white text-center'>
      <motion.div {...slideDown} className='lg:m-3 md:m-2 lg:relative'>
        <div className='flex lg:flex-col justify-between my-3 lg:absolute sm:text-center md:text-center lg:text-left lg:right-20 lg:left-[35vw] md:left-5 left-0 right-5 inset-y-1/4 lg:mt-2 mx-2 sm:text-black lg:text-white'>
          <div>
            <h1 className='font-bold xs:text-3xl text-4xl md:text-6xl lg:text-7xl'>INFORSA <span className='text-xs md:text-2xl lg:text-3xl font-light lg:inline block'>(Information System Association)</span></h1>
            <p className='xs:text-sm text-md lg:text-2xl mb-3'>Bersatu Untuk Berjaya!</p>
          </div>
          <div className='flex lg:flex-row flex-col justify-center lg:justify-start gap-3 items-center'>
            <a className='font-light text-center text-white bg-blue-900 w-40 py-2 rounded-md hover:bg-blue-700 hover:font-bold' href="https://www.instagram.com/inforsa_unmul/">
              Go to Instagram
              <FontAwesomeIcon className='mx-2' style={{ fontSize: '1em' }} icon={faArrowRight} />
            </a>
            <button className='text-white w-40 py-2'>
              <Link 
                to="About"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500} clLinkssName='text-white bg-transparent'>More Info
              </Link>
            </button>
          </div>
          <div className='flex justify-start md:justify-center text-left lg:justify-start gap-4 my-3 hidden lg:inline-flex'>
            <div>
              <h1 className='text-xl lg:text-3xl font-light'>5 Years</h1>
              <h2 className='text-sm lg:text-xl font-bold'>Journey</h2>
            </div>
            <div>
              <h1 className='text-xl lg:text-3xl font-light'>Since 2019</h1>
              <h2 className='text-sm lg:text-xl font-bold'>Family of Information System</h2>
            </div>
          </div>
        </div>
        <LazyLoadImage className='rounded-md object-cover lg:h-full' src={image} alt="" />
      </motion.div>
    </motion.div>
  )
}

export default LandingPage;
