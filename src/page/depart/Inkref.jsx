import Depart from "../../data/Depart";
import image from '../../assets/inforsa.png'
import { Link } from "react-router-dom";
import bph from '../../assets/Galery/Depart/13.png';
import staff from '../../assets/Galery/Depart/14.png';
import staff2 from '../../assets/Galery/Depart/15.png';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Helmet } from "react-helmet";
import CardDepart from "../../component/molecul/CardDepart";

function Inkref(){
    return(
        <div className="container">
            <Helmet>
                <title>Biro Industri Kreatif</title>
            </Helmet>
            <div className="w-full grid gap-4 lg:grid-cols-2 md:grid-cols-1 my-3">
                <Link to='/Store' className="text-black">
                    <div className="border text-center border-blue-500 border-solid border-2 w-auto rounded-lg">
                            <LazyLoadImage loading="lazy" className="w-20 mx-auto mt-3" src={image} alt="" />
                            <h2 className="text-3xl mt-4 font-bold font-serif">STORE</h2>
                            <h3 className="text-md font-thin mt-4 mb-3">Informasi seputar INFORSA Store</h3>
                    </div>
                </Link>
                <div className="border text-center border-blue-500 border-solid border-2 w-auto rounded-lg">
                    <LazyLoadImage loading="lazy" className="w-20 mx-auto mt-3" src={image} alt="" />
                    <h2 className="text-3xl mt-4 font-bold font-serif">STAND</h2>
                    <h3 className="text-md font-thin mt-4 mb-3">Informasi seputar INFORSA Stand</h3>
                </div>
            </div>
            <h1 className="bg-blue-950 my-4 px-3 rounded-lg text-white py-4 text-5xl font-bold text-center">{Depart[4].depart}</h1>
            <div className="flex flex-col md:flex-row sm:flex-row justify-around items-center my-2">
                <div className="flex-1 container">
                    <div className="bg-neutral-300 px-4 py-4 rounded-lg">
                        <h2 className="text-3xl font-md">Deskripsi Departemen</h2>
                        <p className="text-lg text-justify font-light">
                            {Depart[4].deskripsi}
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
                    <LazyLoadImage loading="lazy" className="object-cover" src={Depart[4].img} alt="" />
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
            <CardDepart Departemen={"INKREF"}/>
        </div>
    )
}

export default Inkref;