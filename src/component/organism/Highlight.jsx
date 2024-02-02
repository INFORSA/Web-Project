import Carousel from 'react-bootstrap/Carousel';
import image from '../../assets/img3.jpeg'
import image1 from '../../assets/img1.jpeg'
import image2 from '../../assets/img2.jpg'
import { Container } from 'react-bootstrap';

function Highlight() {
  return (
    <Container className='p-5'>
    <div className='text-4xl my-3 text-center font-bold'>Highlights</div>
    <Carousel fade>
      <Carousel.Item>
        <img className='object-cover h-96 w-full' src={image} alt="" />
        <Carousel.Caption className='bg-caption'>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='object-cover h-96 w-full' src={image1} alt="" />
        <Carousel.Caption className='bg-caption'>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='object-cover h-96 w-full' src={image2} alt="" />
        <Carousel.Caption className='bg-caption'>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Container>
  );
}

export default Highlight;