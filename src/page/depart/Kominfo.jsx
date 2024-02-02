import { useEffect, useState } from "react";
import Depart from "../../data/Depart";
import Axios from "axios";

function Kominfo(){
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
        <div className="container min-h-screen">
            <h1 className="text-5xl font-bold text-center my-5">{Depart[3].depart}</h1>
            <h2 className="text-3xl font-md">Deskripsi Departemen</h2>
            <p className="text-lg text-justify font-light">
                {Depart[3].deskripsi}
            </p>
            <img className="my-3" src={Depart[3].img} alt="" />
            <article>
                <h2 className="text-3xl font-md">Publikasi Kegiatan</h2>
                <div className="w-full grid gap-5 lg:grid-cols-3 md:grid-cols-2 my-3">
                    {getKonten.map((item,idx)=>(
                        <div key={idx}>
                            <div className='mx-3 bg-gray-500 w-96 rounded-lg'>
                                <div className='rounded-lg h-72 w-96 bg-gray-500 flex justify-center items-center'>
                                    <img width={150} src={`/uploads/${item.Gambar}`} alt="" />
                                </div>
                                <div className='rounded-b-lg pl-2 pt-2 min-h-16 w-96 bg-gray-300'>
                                    <h3 className='text-lg truncate font-semibold'>{item.Judul}</h3>
                                    <div className='text-md font-light'>{item.Depart}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </article>
        </div>
    )
}

export default Kominfo;