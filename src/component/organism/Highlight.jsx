import Carousel from 'react-bootstrap/Carousel';
import image from '../../assets/img3.jpeg'
import image1 from '../../assets/img1.jpeg'
import image2 from '../../assets/img2.jpg'
import { Container } from 'react-bootstrap';

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
    <Container className='p-5'>
    <div className='text-4xl my-3 text-center font-bold'>Highlights</div>
    <Carousel fade>
      {data.map((item,idx)=>(
        <Carousel.Item key={idx}>
          <img className='object-cover h-96 w-full' src={item.image} alt="" />
          <Carousel.Caption className='bg-caption'>
            <h3>{item.title}</h3>
            <p>{item.deskripsi}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
    </Container>
  );
}

export default Highlight;