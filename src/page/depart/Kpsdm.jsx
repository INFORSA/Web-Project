import Depart from "../../data/Depart";
import image from '../../assets/inforsa.png'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import bph from '../../assets/Galery/Depart/1.png';
import staff from '../../assets/Galery/Depart/2.png';
import staff2 from '../../assets/Galery/Depart/3.png';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Helmet } from "react-helmet";
import CardDepart from "../../component/molecul/CardDepart";
// import GrafikCapaian from "../../component/molecul/Grafik";

function Kpsdm(){
    return(
        <div className="container">
            <Helmet>
                <title>Departemen KPSDM</title>
            </Helmet>
            <div className="w-full grid gap-4 lg:grid-cols-3 md:grid-cols-2 my-3">
                <div className="border text-center border-blue-500 border-solid border-2 w-auto rounded-lg ">
                    <LazyLoadImage loading="lazy" className="w-20 mx-auto mt-3" src={image} alt="" />
                    <h2 className="text-3xl mt-4 font-bold font-serif">Celebration</h2>
                    <h3 className="text-md mt-4 mb-3">Informasi seputar Celebration</h3>
                </div>
                <div className="border text-center border-blue-500 border-solid border-2 w-auto rounded-lg">
                    <LazyLoadImage loading="lazy" className="w-20 mx-auto mt-3" src={image} alt="" />
                    <h2 className="text-3xl mt-4 font-bold font-serif">APLIKASI</h2>
                    <h3 className="text-md mt-4 mb-3">Informasi seputar APLIKASI</h3>
                </div>
                <div className="border text-center border-blue-500 border-solid border-2 w-auto rounded-lg">
                    <LazyLoadImage loading="lazy" className="w-20 mx-auto mt-3" src={image} alt="" />
                    <h2 className="text-3xl mt-4 font-bold font-serif">INFELLAS</h2>
                    <h3 className="text-md mt-4 mb-3">Informasi seputar INFELLAS</h3>
                </div>
            </div>
            <h1 className="bg-blue-950 my-4 px-3 rounded-lg text-white py-4 text-5xl font-bold text-center">{Depart[0].depart}</h1>
            <div className="flex flex-col sm:flex-row md:flex-row justify-around items-center my-2">
                <div className="flex-1 container">
                    <div className="bg-neutral-300 px-4 py-4 rounded-lg">
                        <h2 className="text-3xl font-md">Deskripsi Departemen</h2>
                        <p className="text-lg text-justify font-light">
                            {Depart[0].deskripsi}
                        </p>
                    </div>
                    <div className="my-3 bg-cyan-950 flex justify-around items-center text-white px-3 py-4 rounded-lg">
                        <div>
                            <h2>Program Kerja</h2>
                            <h3 className="text-center">0</h3>
                        </div>
                        <div>
                            <h2>Anggota</h2>
                            <h3 className="text-center">0</h3>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <LazyLoadImage loading="lazy" className="object-cover" src={Depart[0].img} alt="" />
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
            <CardDepart Departemen={"KPSDM"}/>
            {/* <GrafikCapaian/> */}
        </div>
    )
}

export default Kpsdm;