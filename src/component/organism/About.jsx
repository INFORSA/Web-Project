import logo from '../../assets/inforsa.png'

function About(){
    return(
        <div id='About' className='flex justify-evently text-center container my-5 p-5 rounded-lg shadow-xl bg-about'>
            <img className='h-80' src={logo} alt="" />
            <div className='flex items-center justify-start text-left'>
                <div>
                    <div className='text-3xl font-extrabold'>APA ITU INFORSA?</div>
                    <div>
                        INFORSA adalah Himpunan Mahasiswa Program Studi Sistem Informasi Universitas Mulawarman
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;