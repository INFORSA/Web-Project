import { useEffect, useState } from "react";
import Axios from 'axios'
import { useParams } from "react-router-dom";

function Detail(){
	const { id } = useParams();
    useEffect(() => {
        getProducts();
        window.scrollTo(0, 0);
      }, []); 
    const [getKonten,setKonten]= useState([]);
    const getProducts = async () => {
        try {
          const response = await Axios.get(`http://localhost:8000/api/Artikel/${id}`);
          setKonten(response.data);
          console.log(response.data);
        } catch (error) {
          console.error("Terjadi kesalahan:", error);
        }
      }
    const getFormat = (dateString) =>{
        const dateObject = new Date(dateString);
        const year = dateObject.getFullYear();
        const month = dateObject.getMonth() + 1;
        const day = dateObject.getDate();
        return(`Tanggal: ${day} , Bulan: ${month}, Tahun: ${year}`);
    }
    return(
        <div className="container min-h-screen">
            {getKonten.map((item,idx)=>(
                <div key={idx}>
                <h1 className="bg-blue-950 my-4 px-3 rounded-lg text-white py-4 text-5xl font-bold text-center">Artikel {item.Depart}</h1>
                <div className="flex justify-evenly">
                    <h3>Dirilis oleh {item.Depart}</h3>
                    <h3>{getFormat(item.Waktu)}</h3>
                </div>
                <h1>{item.Judul}</h1>
                <article className="my-3">
                    <img src={`/uploads/${item.Gambar}`} alt="" />
                    <p className="container text-xl font-base my-3" dangerouslySetInnerHTML={{ __html: item.Isi }}/>
                </article>
            </div>
            ))}
        </div>
    )
}

export default Detail;