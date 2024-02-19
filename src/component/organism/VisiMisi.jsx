import 'react-multi-carousel/lib/styles.css';

function VisiMisi() {

  return (
    <div className='bg-white flex flex-col lg:flex-row items-start justify-center h-full w-full rounded-lg shadow-xl p-5 mt-5'>
      <div className='text-center text-3xl font-semibold rounded-md'>
          <h1 className='text-5xl font-bold font-serif'>
            Visi
          </h1>
        <p className='text-center text-xl font-light my-3'>
          Menjadikan INFORSA sebagai himpunan yang  proaktif dalam membentuk dan 
          mengembangkan potensi mahasiswa melalui kolaborasi dan inovasi serta menciptakan kualitas 
          sumber daya yang responsif terhadap pembaruan.
        </p>
      </div>
      <div className='flex text-center text-3xl font-semibold mx-3'>
        <div>
          <h1 className='text-5xl font-bold font-serif'>
            Misi
          </h1>
          <ol className='list-decimal my-3'>
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
    </div>
  );
}

export default VisiMisi;
