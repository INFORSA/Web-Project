import 'react-multi-carousel/lib/styles.css';
import { Container} from 'react-bootstrap';

function VisiMisi() {

  return (
    <Container className='mb-5 h-screen flex justify-evenly w-full rounded-lg shadow-xl p-3'>
      <div className='flex items-center text-center text-3xl font-semibold rounded-md'>
        <div>
          Visi
        <div className='text-center text-xl font-light p-3'>
          Menjadikan INFORSA sebagai himpunan yang  proaktif dalam membentuk dan 
          mengembangkan potensi mahasiswa melalui kolaborasi dan inovasi serta menciptakan kualitas 
          sumber daya yang responsif terhadap pembaruan.
        </div>
        </div>
      </div>
      <div className='flex items-center text-center text-3xl font-semibold mx-3 mt-5'>
        <ol className='list-decimal'>
          Misi
          <li className='mt-3 rounded-md text-justify text-xl font-light'>
            Mendorong kolaborasi antaranggota untuk memperkaya kreativitas dan menciptakan lingkungan belajar yang dinamis
          </li>
          <li className='rounded-md text-justify text-xl font-light'>
            Merangsang inovasi anggota melalui platform yang memfasilitasi eksperimen, riset, dan pengembangan solusi teknologi yang adaptif terhadap perubahan.
          </li>
          <li className='rounded-md text-justify text-xl font-light'>
            Membangun jaringan dengan industri dan komunitas profesional guna mendukung pertukaran pengetahuan dan pengembangan karir.
          </li>
        </ol>
      </div>
    </Container>
  );
}

export default VisiMisi;
