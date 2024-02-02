import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function BadanInti() {
  return (
    <Container className='min-h-screen bg-bpi mt-5 rounded-lg shadow-xl p-5'>
      <Row className=''>
        <Col className='text-left h-60'>
        <div className='text-2xl font-semibold'>
            Ketua Umum
        </div>
        <div className='title-bpi'>Zaki Fauzan Rabbani</div>
        <div className='title-bpi font-thin'>2109116028</div>
        </Col>
        <Col className='text-right'>
        <div className='text-2xl font-semibold'>
            Wakil Ketua Umum
        </div>
        <div className='title-bpi'>Bayu Purnama Aji</div>
        <div className='title-bpi font-thin'>2209116050</div>
        </Col>
      </Row>
      <Row>
        <Col className='text-left'>
        <div className='text-2xl font-semibold'>
            Bendahara Umum
        </div>
        <div className='title-bpi'>Angelia Christin</div>
        <div className='title-bpi font-thin'>2209116015</div>
        </Col>
        <Col className='text-right'>
        <div className='text-2xl font-semibold'>
            Sekretaris Umum
        </div>
        <div className='title-bpi'>Nurul Vita Azizah</div>
        <div className='title-bpi font-thin'>2209116038</div> 
        </Col>
      </Row>
    </Container>
  );
}

export default BadanInti;