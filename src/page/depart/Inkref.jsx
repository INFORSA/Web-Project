import { useEffect, useState } from "react";
import Depart from "../../data/Depart";
import Axios from "axios";
import image from '../../assets/inforsa.PNG'
import { Button } from "react-bootstrap";


function Inkref(){
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
                    <h2 className="text-3xl mt-4 font-bold font-serif">MERCH</h2>
                    <h3 className="text-md mt-4 mb-3">Informasi seputar Merchandise</h3>
                </div>
                <div className="border text-center border-blue-500 border-solid border-2 w-auto rounded-lg">
                    <img className="w-20 mx-auto mt-3" src={image} alt="" />
                    <h2 className="text-3xl mt-4 font-bold font-serif">STORE</h2>
                    <h3 className="text-md mt-4 mb-3">Informasi seputar INFORSA Store</h3>
                </div>
                <div className="border text-center border-blue-500 border-solid border-2 w-auto rounded-lg">
                    <img className="w-20 mx-auto mt-3" src={image} alt="" />
                    <h2 className="text-3xl mt-4 font-bold font-serif">STAND</h2>
                    <h3 className="text-md mt-4 mb-3">Informasi seputar INFORSA Stand</h3>
                </div>
            </div>
            <h1 className="bg-blue-950 my-4 px-3 rounded-lg text-white py-4 text-5xl font-bold text-center">{Depart[4].depart}</h1>
            <div className="flex justify-around items-center my-2">
                <div className="flex-1 pr-5">
                    <div className="bg-neutral-300 px-4 py-5 rounded-lg">
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
                    <img className="object-cover" src={Depart[4].img} alt="" />
                </div>
            </div>
            <article className="my-5">
                <h2 className="text-3xl font-md">Publikasi Kegiatan</h2>
                <div className="w-full grid gap-5 lg:grid-cols-3 md:grid-cols-2 my-3">
                    {getKonten.map((item,idx)=>{
                        if(item.Depart === 'INKREF'){
                            return(
                                <div key={idx} className='mx-3 bg-gray-500 w-96 rounded-lg'>
                                <div className='rounded-lg flex justify-center items-center'>
                                    <img className="max-h-60 object-cover w-full" src={`/uploads/${item.Gambar}`} alt="" />
                                </div>
                                <div className='rounded-b-lg pl-2 pt-2 min-h-16 w-96 bg-gray-300'>
                                    <h3 className='text-lg truncate font-semibold'>{item.Judul}</h3>
                                    <p className="truncate text-sm font-thin text-slate-600" dangerouslySetInnerHTML={{ __html: item.Isi }}/>
                                    <div className="flex justify-between items-start text-right">
                                        <h4 className='text-sm font-thin'>Dirilis oleh Departemen {item.Depart}</h4>
                                        <Button className="my-2 text-sm text-black mx-2" variant="secondary">Read More</Button>
                                    </div>
                                </div>
                                </div>
                            )
                        }
                    })}
                </div>
            </article>
        </div>
    )
}

export default Inkref;