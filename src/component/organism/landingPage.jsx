import { motion } from "framer-motion";
import { scaleDown, slideDown } from "../../framerMotion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

function LandingPage() {
  return (
    <motion.div {...scaleDown} id='/' className='bg-landing mt-3 mx-2 h-80 flex items-center text-white rounded-lg'>
      <motion.div {...slideDown} className='h-full w-full pl-3 lg:pl-16 lg:pt-7 pt-16 bg-landing-mix rounded-lg'>
          <div className="md:text-center sm:text-center lg:text-left">
            <div className="">
              <h1 className='font-bold text-6xl lg:text-7xl'>INFORSA <span className='text-xl lg:text-3xl font-light lg:inline block'>(Information System Association)</span></h1>
              <p className='xs:text-sm text-md lg:text-2xl mb-3'>Bersatu Untuk Berjaya!</p>
              <div className='flex justify-center lg:justify-start gap-3 items-center'>
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
                  <h1 className='text-xl lg:text-3xl font-light'>6 Years</h1>
                  <h2 className='text-sm lg:text-xl font-bold'>Journey</h2>
                </div>
                <div>
                  <h1 className='text-xl lg:text-3xl font-light'>Since 2019</h1>
                  <h2 className='text-sm lg:text-xl font-bold'>Family of Information System</h2>
                </div>
              </div>
            </div>
          </div>
      </motion.div>
    </motion.div>
  )
}

export default LandingPage;
