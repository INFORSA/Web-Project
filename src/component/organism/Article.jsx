import { useEffect, useState } from 'react';
import Axios from 'axios';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Article(){
    useEffect(() => {
        getProducts();
        window.scrollTo(0, 0);
      }, []); 
    const [getKonten,setKonten]= useState([]);
    const getProducts = async () => {
        const response = await Axios.get("https://api.inforsa-unmul.org/api/get");
        setKonten(response.data);
      };
    return(
    <div className="bg-white">
        <div className="text-left font-serif container text-4xl font-bold">Publikasi Kegiatan</div>
        <div className="container w-full grid gap-5 lg:grid-cols-3 md:grid-cols-2 my-3">
            {getKonten.slice(0,3).map((item,idx)=>(
                <div key={idx} className='bg-gray-500 w-full rounded-lg transform transition-transform duration-300 ease-in-out hover:scale-110'>
                <div className='rounded-lg flex justify-center items-center'>
                    <img className="h-60 object-cover w-full" src={`/uploads/${item.Gambar}`} alt="" />
                </div>
                <div className='rounded-b-lg pl-2 pt-2 min-h-16 w-full bg-gray-300'>
                    <h3 className='text-lg truncate font-semibold'>{item.Judul}</h3>
                    {/* <p className="truncate text-sm font-thin text-slate-600" dangerouslySetInnerHTML={{ __html: item.Isi }}/> */}
                    <div className="flex justify-between items-start text-right">
                        <h4 className='text-sm font-thin'>Dirilis oleh Departemen {item.Depart}</h4>
                        <Link to={`/Artikel/${item.ID_Konten}`}>
                            <Button className="my-2 text-sm text-black mx-2" variant="secondary">Read More</Button>
                        </Link>
                    </div>
                </div>
                </div>
            ))}
        </div>
        <div className='flex justify-center'>
        <Link to={'/All'}>
            <Button className="my-2 text-sm text-black mx-2" variant="secondary">More</Button>
        </Link>
        </div>
    </div>
    )
}
export default Article;