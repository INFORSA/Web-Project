import image from '../../assets/family.jpg'
// import Card from 'react-bootstrap/Card';

function LandingPage() {
  return (
    <div id='/' className='relative w-auto h-full flex items-center justify-start'>    
      <img src={image} alt="" />
      <div className='absolute inset-0 bg-black opacity-50'></div>
      <div className='bg-caption rounded-md px-10 py-3 text-white absolute'>
        <div className='text-9xl font-bold'>
          INFORSA 
          <span className='ml-2 text-lg text-capt font-light'>
            .since 2019
          </span>
        </div>
        <p className='text-left text-xl'>
          We are Family of Information System
        </p>
      </div>
    </div>
  )
}

export default LandingPage;
