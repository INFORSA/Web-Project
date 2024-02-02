import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Col, Container, Row } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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
  const [selectedKPSDM, setselectedKPSDM] = useState('KPSDM');
  const [selectedRPPM, setselectedRPPM] = useState('RPPM');
  const [selectedKOMINFO, setselectedKOMINFO] = useState('KOMINFO');
  const [selectedINKREF, setselectedINKREF] = useState('INKREF');
  const [selectedRELEKAT, setselectedRELEKAT] = useState('RELEKAT');
  return (
    <Container className='h-screen flex items-center'>
    <Row>
      <Col className='text-3xl font-semibold'>
        Departemen <br /> & <br /> Biro
        <br />
        <div className='text-xl font-light'>
        Kerangka kerja membantu menjalankan kepengurusan dalam menuntaskan program kerja.
        </div>
      </Col>
      <Col xs={9}>
        <Carousel
            responsive={responsive}
            infinite={true}
            draggable={true}
            keyBoardControl={true}
            className='container w-full'
        >
            <div onMouseEnter={() => setselectedKPSDM('Departemen KPSDM adalah departemen yang bertugas meregenerasi kader dan mengembangkan sumber daya mahasiswa Sistem Informasi.')}
                onMouseLeave={() => setselectedKPSDM('KPSDM')} 
                >
              <Link to='KPSDM'
              className="dept dept-kpsdm border border-black text-center bg-gray-300 w-72 h-96 flex justify-center items-center p-3 font-base text-3xl">
                {selectedKPSDM}
              </Link>
            </div>
            <div onMouseEnter={() => setselectedRPPM('Departmen ini bertugas untuk mendukung akademik maupun non akademik serta mengembangkan potensi minat bakat mahasiswa informasi')}
                onMouseLeave={() => setselectedRPPM('RPPM')} 
                >
              <Link to='RPPM' className="dept rppm border border-black text-center bg-gray-300 w-72 h-96 flex justify-center items-center p-3 font-base text-3xl">
                {selectedRPPM}
              </Link>
            </div>
            <div onMouseEnter={() => setselectedKOMINFO('Departemen yang bertanggung jawab untuk menciptakan dan memproduksi berbagai jenis konten seperti menulis dan melaporkan berita atau informasi')}
                onMouseLeave={() => setselectedKOMINFO('KOMINFO')} >
              <Link to='KOMINFO' className="dept kominfo border border-black text-center bg-gray-300 w-72 h-96 flex justify-center items-center p-3 font-base text-3xl">
                  {selectedKOMINFO}
              </Link>
            </div>
            <div onMouseEnter={() => setselectedRELEKAT('Departemen yang bertugas untuk mengurus semua hal yang berkaitan dengan kelembagaan dan masyarakat di luar Sistem Informasi dan INFORSA.')}
                onMouseLeave={() => setselectedRELEKAT('RELEKAT')}>
              <Link to='RELEKAT' className="dept relekat border border-black text-center bg-gray-300 w-72 h-96 flex justify-center items-center p-3 font-base text-3xl">
                  {selectedRELEKAT}
              </Link>
            </div>
            <div onMouseEnter={() => setselectedINKREF('Biro Industri Kreatif adalah suatu badan yang membantu meningkatkan finansial organisasi, dalam hal lain juga untuk mengembangkan jiwa kewirausahaan mahasiswa.')}
                onMouseLeave={() => setselectedINKREF('INKREF')}>
              <Link to='INKREF' className="dept dept-inkref border border-black text-center bg-gray-300 w-72 h-96 flex justify-center items-center p-3 font-base text-3xl">
                {selectedINKREF}
              </Link>
            </div>
        </Carousel>
      </Col>
    </Row>
    </Container>
  );
}

export default Depart;
