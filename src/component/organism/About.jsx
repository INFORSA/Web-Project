import logo from '../../assets/inforsa.png';
import { motion } from "framer-motion";
import { fadeIn } from '../../framerMotion/variants';

function About(){
    return(
        <div id='About' className='flex flex-col pb-7 px-5 sm:flex-row justify-evently text-center rounded-lg shadow-xl bg-white'>
            <img className='h-80' src={logo} alt="" />    
            <motion.div variants={fadeIn("right", 0.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.7}} className='flex items-center justify-start text-left'>
                <div>
                    <h1 className='text-3xl font-extrabold'>APA ITU INFORSA?</h1>
                    <h2 className='text-md font-thin text-justify'>
                        INFORSA atau Information System Association adalah Himpunan Mahasiswa yang berada pada Program Studi Sistem Informasi Universitas Mulawarman.
                    </h2>
                </div>
            </motion.div>
        </div>
    )
}

export default About;