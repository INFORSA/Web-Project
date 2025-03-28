import kabinet from '../../assets/logo.png';

function Kabinet() {
  return (
    <div className='bg-white rounded-lg shadow-xl p-2'>
        <div className='text-5xl text-center font-serif font-bold pt-5'>Kabinet Kerja <br />2024</div>
        <div className='flex flex-col lg:flex-row md:flex-col items-center'>
            <img src={kabinet} width={650} className='p-5' alt="" />
            <div className='ml-2'>
                <div className='text-4xl font-bold'>
                KABINET AKASARAYA
                </div>
                <div className='text-lg'>
                    Bermakna Kesadaran Kolaboratif yang Luas, Responsif terhadap Pembaruan, dan Utama dalam Pengembangan Potensi Mahasiswa
                </div>
                <br />
                <div className='text-xl font-bold'>Rincian</div>
                <p className='font-medium text-lg'>
                Akasa sebagai Kesadaran Kolaboratif dan Ruang Luas:
                <div className='font-light'>
                  Mewakili kesadaran atau ruang yang luas untuk berkolaborasi dalam pengembangan potensi mahasiswa.
                </div>
                <br />
                Raya sebagai Fokus pada Responsivitas dan Pembaruan:
                <div className='font-light'>
                  Menekankan pada kesadaran utama untuk responsif terhadap pembaruan, menjadi sumber daya yang dinamis dan tanggap terhadap perubahan.
                </div>
                </p>
            </div>
        </div>
    </div>
  );
}

export default Kabinet;