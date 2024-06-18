import Carousel from 'react-bootstrap/Carousel';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useEffect, useState } from 'react';
import Axios from 'axios';

function Highlight() {
  useEffect(() => {
      getProducts();
      window.scrollTo(0, 0);
    }, []); 
  const [getKonten,setKonten]= useState([]);
  const getProducts = async () => {
      const response = await Axios.get("https://api.inforsa-unmul.org/api/get");
      setKonten(response.data);
    };
  return (
    <div className='p-5 bg-white mt-3 rounded-lg shadow-xl'>
    <h1 className='text-5xl mb-3 text-end font-serif font-bold'>Highlights</h1>
    <Carousel fade>
      {getKonten.slice(0,3).map((item,idx)=>(
        <Carousel.Item key={idx}>
          <LazyLoadImage className='object-cover h-96 w-full' src={`/uploads/${item.Gambar}`} alt="" />
          <Carousel.Caption className='bg-caption'>
            <h3>{item.Judul}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
    </div>
  );
}

export default Highlight;