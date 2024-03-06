import Carousel from 'react-bootstrap/Carousel';
import image from '../../assets/img3.jpeg'
import image1 from '../../assets/img1.jpeg'
import image2 from '../../assets/img2.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Highlight() {
  const data = [
    {
      image:image,
      title:'PENGMAS INFORSA',
      deskripsi:'Pengabdian masyarakat yang dilakukan pada desa berambai.'
    },
    {
      image:image1,
      title:'Celebration Graduation',
      deskripsi:'Ajang selebrasi untuk wisudawan abang/mba Sistem Informasi pada hari kelulusan.'
    },
    {
      image:image2,
      title:'INFORSA DTD',
      deskripsi:'Kunjungan lembaga dari teman-teman HMSI ITK Balikpapan.'
    },
  ]
  return (
    <div className='p-5 bg-white mt-3 rounded-lg shadow-xl'>
    <h1 className='text-5xl mb-3 text-end font-serif font-bold'>Highlights</h1>
    <Carousel fade>
      {data.map((item,idx)=>(
        <Carousel.Item key={idx}>
          <LazyLoadImage className='object-cover h-96 w-full' src={item.image} alt="" />
          <Carousel.Caption className='bg-caption'>
            <h3>{item.title}</h3>
            <p>{item.deskripsi}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
    </div>
  );
}

export default Highlight;