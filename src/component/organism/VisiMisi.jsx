import 'react-multi-carousel/lib/styles.css';
import { Container} from 'react-bootstrap';

function VisiMisi() {

  return (
    <Container className='mb-5 h-screen w-full rounded-lg shadow-xl p-3'>
      <div className='flex items-center justify-around text-center text-3xl font-semibold rounded-md my-5'>
          <div>
            Visi
          </div>
          <div>
            Misi
          </div>
      </div>
      <div className='flex  text-center text-3xl font-semibold mx-3'>
        <p className='text-center text-xl font-light w-1/2 mx-5'>
          Menjadikan INFORSA sebagai himpunan yang  proaktif dalam membentuk dan 
          mengembangkan potensi mahasiswa melalui kolaborasi dan inovasi serta menciptakan kualitas 
          sumber daya yang responsif terhadap pembaruan.
        </p>
        <div className='w-1/2'>
          <ol className='list-decimal'>
            <li className='rounded-md text-justify text-xl font-light hover:bg-sky-800 hover:text-white hover:p-3'>
              Mendorong kolaborasi antaranggota untuk memperkaya kreativitas dan menciptakan lingkungan belajar yang dinamis
            </li>
            <li className='rounded-md text-justify text-xl font-light hover:bg-sky-800 hover:text-white hover:p-3'>
              Merangsang inovasi anggota melalui platform yang memfasilitasi eksperimen, riset, dan pengembangan solusi teknologi yang adaptif terhadap perubahan.
            </li>
            <li className='rounded-md text-justify text-xl font-light hover:bg-sky-800 hover:text-white hover:p-3'>
              Membangun jaringan dengan industri dan komunitas profesional guna mendukung pertukaran pengetahuan dan pengembangan karir.
            </li>
          </ol>
        </div>
      </div>
    </Container>
  );
}

export default VisiMisi;
