import Depart from "../../data/Depart";
import image from '../../assets/inforsa.png'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import bph from '../../assets/Galery/Depart/4.png';
import staff from '../../assets/Galery/Depart/5.png';
import staff2 from '../../assets/Galery/Depart/6.png';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Helmet } from "react-helmet";
import CardDepart from "../../component/molecul/CardDepart";

function Relekat(){
    return(
        <div className="container">
            <Helmet>
                <title>Departemen RELEKAT</title>
            </Helmet>
            <div className="w-full grid gap-4 lg:grid-cols-3 md:grid-cols-2 my-3">
                <div className="border text-center border-blue-500 border-solid border-2 w-auto rounded-lg">
                    <LazyLoadImage loading="lazy" className="w-20 mx-auto mt-3" src={image} alt="" />
                    <h2 className="text-3xl mt-4 font-bold font-serif">PENGMAS</h2>
                    <h3 className="text-md mt-4 mb-3">Informasi seputar Pengabdia Masyarakat</h3>
                </div>
                <div className="border text-center border-blue-500 border-solid border-2 w-auto rounded-lg">
                    <LazyLoadImage loading="lazy" className="w-20 mx-auto mt-3" src={image} alt="" />
                    <h2 className="text-3xl mt-4 font-bold font-serif">GTS</h2>
                    <h3 className="text-md mt-4 mb-3">Informasi seputar Goes to School</h3>
                </div>
                <div className="border text-center border-blue-500 border-solid border-2 w-auto rounded-lg">
                    <LazyLoadImage loading="lazy" className="w-20 mx-auto mt-3" src={image} alt="" />
                    <h2 className="text-3xl mt-4 font-bold font-serif">INSAN</h2>
                    <h3 className="text-md mt-4 mb-3">Informasi seputar Safari Ramadhan</h3>
                </div>
            </div>
            <h1 className="bg-blue-950 my-4 px-3 rounded-lg text-white py-4 text-5xl font-bold text-center">{Depart[2].depart}</h1>
            <div className="flex flex-col sm:flex-row md:flex-row justify-around items-center my-2">
                <div className="flex-1 container">
                    <div className="bg-neutral-300 px-4 py-4 rounded-lg">
                        <h2 className="text-3xl font-md">Deskripsi Departemen</h2>
                        <p className="text-lg text-justify font-light">
                            {Depart[2].deskripsi}
                        </p>
                    </div>
                    <div className="my-3 bg-cyan-950 grid grid-cols-2 lg:grid-cols-4 text-white px-3 py-4 rounded-lg">
                        <div>
                            <h2 className="text-center">Program Kerja</h2>
                            <h3 className="text-center">0</h3>
                        </div>
                        <div>
                            <h2 className="text-center">Anggota</h2>
                            <h3 className="text-center">0</h3>
                        </div>
                        <div>
                            <h2 className="text-center">Instansi</h2>
                            <h3 className="text-center">0</h3>
                        </div>
                        <div>
                            <h2 className="text-center">Pengabdian</h2>
                            <h3 className="text-center">0</h3>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <LazyLoadImage loading="lazy" className="object-cover" src={Depart[2].img} alt="" />
                </div>
            </div>
            <div className='p-5 bg-white my-3 rounded-lg shadow-xl h-full'>
                <h1 className='text-5xl mb-3 text-start font-serif font-bold'>Galery</h1>
                <div className="grid grid-cols-3 gap-3">
                    <LazyLoadImage loading="lazy" className="w-96" src={bph} alt="" />
                    <LazyLoadImage loading="lazy" className="w-96" src={staff} alt="" />
                    <LazyLoadImage loading="lazy" className="w-96" src={staff2} alt="" />
                </div>
            </div>
            <CardDepart Departemen={"RELEKAT"}/>
        </div>
    )
}

export default Relekat;