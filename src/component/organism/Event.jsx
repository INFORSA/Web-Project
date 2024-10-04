import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Axios from 'axios';

function Event(){
    const getEvent = () =>{
        Swal.fire({
            title: "INSEVENT 2024",
            text: "Coming Soon!",
            icon: "info"
          })
    }
    // const getAspirasi = () =>{
    //     Swal.fire({
    //         title: "Ruang Konsultasi dan Aspirasi",
    //         text: "Tahap Pengembangan",
    //         icon: "info"
    //       })
    // }
    const getStore = () =>{
        Swal.fire({
            title: "INFORSA STORE",
            text: "Tahap Pengembangan",
            icon: "info"
          })
    }
    useEffect(() => {
        getProducts();
        window.scrollTo(0, 0);
      }, []); 
    const [getKonten,setKonten]= useState([]);
    const getProducts = async () => {
        const response = await Axios.get(`${import.meta.env.VITE_COUNT_EVENT}`);
        setKonten(response.data);
      };
    return(
        <div className="mb-5 bg-white py-5">
        <div className="container grid lg:grid-cols-3 md:grid-cols-2 min-h-sreen lg:h-72 w-full">
            <div className="bg-blue-950 border-3 border-black border-3 border-black w-full text-white flex justify-center items-center mx-auto">
                <div>
                    <img src="" alt="" />
                    <h1 className="font-bold">INFORSA</h1>
                    <p className="text-sm font-light text-center">2024</p>
                </div>
            </div>
            <div onClick={getEvent} className="bg-blue-800 border-3 border-black p-4 w-full text-white flex flex-col justify-evenly items-start mx-auto">
                <div>
                    <h1 className="font-semibold text-4xl">COMING SOON</h1>
                    <h2 className="text-lg">INSEVENT 2024</h2>
                    <h3 className="text-xs font-thin text-slate-300">Information System Event</h3>
                </div>
                <Link className="text-white text-3xl">See...</Link>
            </div>
            <div className="bg-sky-950 border-3 border-black p-4 w-full text-white flex flex-col justify-between items-start mx-auto">
                <div>
                    <h2 className="text-md">Upcoming Events</h2>
                    {getKonten.map((item, idx)=>(
                        <h1 key={idx} className="text-7xl">{item.total_events}</h1>
                    ))}
                </div>
                <Link to='/MoreEvent'>
                    <button className="text-white">View More</button>
                </Link>
            </div>
        </div>
        <div className="container grid lg:grid-cols-2 md:grid-cols-2 min-h-sreen lg:h-72 w-full">
            <div className="bg-sky-800 border-3 border-black p-4 w-full text-white flex flex-col justify-evenly items-start mx-auto">
                <div>
                    <h1 className="font-semibold text-4xl">Ruang Konsultasi dan Aspirasi Mahasiswa</h1>
                    <h2 className="text-lg"></h2>
                    <h3 className="text-sm font-thin text-slate-400">INFORSA 2024</h3>
                </div>
                <Link to='/Form' className="text-white text-3xl">See...</Link>
            </div>
            <div onClick={getStore} className="bg-cyan-950 border-3 border-black w-full text-white flex justify-center items-center mx-auto">
                <FontAwesomeIcon style={{ fontSize: '3em' }} icon={faBasketShopping} />
                <div className="mx-3">
                    <img src="" alt="" />
                    <h1 className="font-semibold">INFORSA</h1>
                    <p className="text-sm font-thin text-center">STORE</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Event;