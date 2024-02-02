import { useEffect, useState } from "react";
import Depart from "../../data/Depart";
import Axios from "axios";
import image from '../../assets/inforsa.PNG'


function Kpsdm(){
    useEffect(() => {
        getProducts();
        window.scrollTo(0, 0);
      }, []); 

    const [getKonten,setKonten]= useState([]);
    const getProducts = async () => {
        const response = await Axios.get("http://localhost:8000/api/get");
        setKonten(response.data);
      };
    return(
        <div className="container">
            <div className="w-full grid gap-4 lg:grid-cols-3 md:grid-cols-2 my-3">
                <div className="border text-center border-blue-500 border-solid border-2 w-auto rounded-lg">
                    <img className="w-20 mx-auto mt-3" src={image} alt="" />
                    <h2 className="text-3xl mt-4 font-bold font-serif">Celebration</h2>
                    <h3 className="text-md mt-4 mb-3">Informasi seputar Celebration</h3>
                </div>
                <div className="border text-center border-blue-500 border-solid border-2 w-auto rounded-lg">
                    <img className="w-20 mx-auto mt-3" src={image} alt="" />
                    <h2 className="text-3xl mt-4 font-bold font-serif">APLIKASI</h2>
                    <h3 className="text-md mt-4 mb-3">Informasi seputar APLIKASI</h3>
                </div>
                <div className="border text-center border-blue-500 border-solid border-2 w-auto rounded-lg">
                    <img className="w-20 mx-auto mt-3" src={image} alt="" />
                    <h2 className="text-3xl mt-4 font-bold font-serif">INFELLAS</h2>
                    <h3 className="text-md mt-4 mb-3">Informasi seputar INFELLAS</h3>
                </div>
            </div>
            <h1 className="bg-blue-950 my-4 px-3 rounded-lg text-white py-4 text-5xl font-bold text-center">{Depart[0].depart}</h1>
            <div className="flex justify-around items-center my-2">
                <div className="flex-1 pr-5">
                    <div className="bg-neutral-300 px-4 py-5 rounded-lg">
                        <h2 className="text-3xl font-md">Deskripsi Departemen</h2>
                        <p className="text-lg text-justify font-light">
                            {Depart[0].deskripsi}
                        </p>
                    </div>
                    <div className="my-3 bg-cyan-950 flex justify-around items-center text-white px-3 py-4 rounded-lg">
                        <div>
                            <div>Program Kerja</div>
                            <div className="text-center">0</div>
                        </div>
                        <div>
                            <div>Anggota</div>
                            <div className="text-center">0</div>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <img className="object-cover" src={Depart[0].img} alt="" />
                </div>
            </div>
            <article className="my-5">
                <h2 className="text-3xl font-md">Publikasi Kegiatan</h2>
                <div className="w-full grid gap-5 lg:grid-cols-3 md:grid-cols-2 my-3">
                    {getKonten.map((item,idx)=>(
                        <div key={idx}>
                        <div className='mx-3 bg-gray-500 w-96 rounded-lg'>
                        <div className='rounded-lg flex justify-center items-center'>
                            <img className="max-h-60 object-cover w-full" src={`/uploads/${item.Gambar}`} alt="" />
                        </div>
                        <div className='rounded-b-lg pl-2 pt-2 min-h-16 w-96 bg-gray-300'>
                            <h3 className='text-lg truncate font-semibold'>{item.Judul}</h3>
                            <p className="truncate text-sm font-thin text-slate-600" dangerouslySetInnerHTML={{ __html: item.Isi }}/>
                            <h4 className='text-sm font-light'>{item.Depart}</h4>
                        </div>
                        </div>
                        </div>
                    ))}
                </div>
            </article>
        </div>
    )
}

export default Kpsdm;