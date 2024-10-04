import image from '../../assets/bg-flag.png';
import { motion } from "framer-motion";
import { scaleDown, slideDown } from "../../framerMotion";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

function LandingPage() {
  return (
    <motion.div {...scaleDown} id='/' className="overflow-x-hidden overflow-y-hidden">
      <motion.div {...slideDown} className='lg:m-3 md:m-2 relative'>
        <LazyLoadImage className='rounded-md object-cover h-[75vh] lg:h-full' src={image} alt="" />
        <div className='absolute sm:text-center md:text-center lg:text-left lg:right-20 lg:left-[35vw] md:left-3 left-0 right-3 inset-y-1/4 lg:mt-2 mx-2 text-white'>
          <h1 className='font-bold text-4xl md:text-6xl lg:text-7xl'>INFORSA <span className='text-xs md:text-2xl lg:text-3xl font-light'>(Information System Association)</span></h1>
          <p className='font-light text-md lg:text-2xl mb-3'>Bersatu Untuk Berjaya!</p>
          <div className='flex justify-start lg:justify-start md:justify-center gap-3 items-center'>
            <a className='font-light text-white bg-blue-900 py-2 px-4 rounded-md hover:bg-blue-700 hover:font-bold' href="https://www.instagram.com/inforsa_unmul/">
              Go to Instagram
              <FontAwesomeIcon className='mx-2' style={{ fontSize: '1em' }} icon={faArrowRight} />
            </a>
            <button>
              <Link 
                to="About"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500} clLinkssName='text-white bg-transparent'>More Info
              </Link>
            </button>
          </div>
          <div className='flex justify-start md:justify-center text-left lg:justify-start gap-4 my-3'>
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
      </motion.div>
    </motion.div>
  )
}

export default LandingPage;
