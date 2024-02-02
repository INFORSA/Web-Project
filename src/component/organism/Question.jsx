// import logo from '../assets/inforsa.png'

function Question(){
    return(
        <div className='flex flex-col sm:flex-row items-center justify-between text-center container rounded-lg shadow-xl my-5 p-5 bg-about'>
            <div className='flex items-center justify-start ml-5 text-left'>
                <div className="">
                    <div className='text-3xl font-extrabold'>Ada pertanyaan?</div>
                    <div className="text-2xl">
                        Kami terbuka untuk anda
                    </div>
                </div>
            </div>
            <div className="border border-white p-2 rounded-md">Kontak Kami</div> 
        </div>
    )
}

export default Question;