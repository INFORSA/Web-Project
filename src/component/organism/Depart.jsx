import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { fadeIn } from '../../framerMotion/variants';

function Depart() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
      partialVisibilityGutter: 40
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  const [selectedKPSDM, setselectedKPSDM] = useState('');
  const [selectedRPPM, setselectedRPPM] = useState('');
  const [selectedKOMINFO, setselectedKOMINFO] = useState('');
  const [selectedINKREF, setselectedINKREF] = useState('');
  const [selectedRELEKAT, setselectedRELEKAT] = useState('');
  return (
    <div className='min-h-screen bg-white flex justify-center'>
    <div className='container flex flex-col md:flex-row items-center'>
    <motion.div variants={fadeIn("right", 0.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.7}} className='text-3xl font-semibold font-serif'>
      Departemen <br /> & <br /> Biro
      <br />
      <div className='text-xl font-light'>
      Kerangka kerja membantu menjalankan kepengurusan dalam menuntaskan program kerja.
      </div>
    </motion.div>
    <Carousel
        responsive={responsive}
        infinite={true}
        draggable={true}
        keyBoardControl={true}
        className='container w-full'
    >
        <div onMouseEnter={() => setselectedKPSDM('Departemen KPSDM adalah departemen yang bertugas meregenerasi kader dan mengembangkan sumber daya mahasiswa Sistem Informasi.')}
            onMouseLeave={() => setselectedKPSDM('')} 
            >
          <Link to='/KPSDM'
          className="dept dept-kpsdm border border-black text-center bg-gray-300 w-68 h-96 flex justify-center items-center p-7 font-base text-3xl">
            {selectedKPSDM}
          </Link>
        </div>
        <div onMouseEnter={() => setselectedRPPM('Departmen ini bertugas untuk mendukung akademik maupun non akademik serta mengembangkan potensi minat bakat mahasiswa informasi')}
            onMouseLeave={() => setselectedRPPM('')} 
            >
          <Link to='/RPPM' className="dept rppm border border-black text-center bg-gray-300 w-68 h-96 flex justify-center items-center p-7 font-base text-3xl">
            {selectedRPPM}
          </Link>
        </div>
        <div onMouseEnter={() => setselectedKOMINFO('Departemen yang bertanggung jawab untuk menciptakan dan memproduksi berbagai jenis konten seperti menulis dan melaporkan berita atau informasi')}
            onMouseLeave={() => setselectedKOMINFO('')} >
          <Link to='/KOMINFO' className="dept kominfo border border-black text-center bg-gray-300 w-68 h-96 flex justify-center items-center p-7 font-base text-3xl">
              {selectedKOMINFO}
          </Link>
        </div>
        <div onMouseEnter={() => setselectedRELEKAT('Departemen yang bertugas untuk mengurus semua hal yang berkaitan dengan kelembagaan dan masyarakat di luar Sistem Informasi dan INFORSA.')}
            onMouseLeave={() => setselectedRELEKAT('')}>
          <Link to='/RELEKAT' className="dept relekat border border-black text-center bg-gray-300 w-68 h-96 flex justify-center items-center p-7 font-base text-3xl">
              {selectedRELEKAT}
          </Link>
        </div>
        <div onMouseEnter={() => setselectedINKREF('Biro Industri Kreatif adalah suatu badan yang membantu meningkatkan finansial organisasi, dalam hal lain juga untuk mengembangkan jiwa kewirausahaan mahasiswa.')}
            onMouseLeave={() => setselectedINKREF('')}>
          <Link to='/INKREF' className="dept dept-inkref border border-black text-center bg-gray-300 w-68 h-96 flex justify-center items-center p-7 font-base text-3xl">
            {selectedINKREF}
          </Link>
        </div>
    </Carousel>
    </div>
    </div>
  );
}

export default Depart;
