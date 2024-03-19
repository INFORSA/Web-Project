import { useEffect, useState } from "react";
import Depart from "../../data/Depart";
import Axios from "axios";
import image from '../../assets/inforsa.png'
import { Button } from "react-bootstrap";
import { Calendar,momentLocalizer } from "react-big-calendar";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Bpi(){
    useEffect(() => {
        getProker();
        window.scrollTo(0, 0);
      }, []); 
    const localizer = momentLocalizer(moment)
    const [Proker,setProker]= useState([]);
    const getProker = async () => {
        const response = await Axios.get("https://api.inforsa-unmul.org/api/getProker");
        setProker(response.data);
      };
    return(
        <div className="container">
            <div className="w-full grid gap-4 lg:grid-cols-2 md:grid-cols-2 my-3">
                <div className="border text-center border-blue-500 border-solid border-2 w-auto rounded-lg 
                transform transition-transform duration-300 ease-in-out hover:scale-110">
                    <img className="w-20 mx-auto mt-3" src={image} alt="" />
                    <h2 className="text-3xl mt-4 font-bold font-serif">INSEVENT</h2>
                    <h3 className="text-md mt-4 mb-3">Informasi seputar INSEVENT 2024</h3>
                </div>
                <div className="border text-center border-blue-500 border-solid border-2 w-auto rounded-lg
                transform transition-transform duration-300 ease-in-out hover:scale-110">
                    <img className="w-20 mx-auto mt-3" src={image} alt="" />
                    <h2 className="text-3xl mt-4 font-bold font-serif">OPREC</h2>
                    <h3 className="text-md mt-4 mb-3">Informasi seputar OPREC Pengurus 2024</h3>
                </div>
            </div>
            <h1 className="bg-blue-950 my-4 px-3 rounded-lg text-white py-4 text-5xl font-bold text-center">{Depart[5].depart}</h1>
            <div className="my-3">
                <h1 className="text-3xl font-md my-2">Kalender {Depart[5].depart}</h1>
                <Link to='/Proker'>
                    <Button className="my-2 text-black hover:font-semibold font-bold" variant="secondary"><FontAwesomeIcon style={{ fontSize: '0.8em' }} icon={faPlus} /> Kegiatan</Button>
                </Link>
                <Calendar
                    localizer={localizer}
                    events={Proker.filter(proker=>proker.Depart === 'BPI').map(proker => ({
                        title: proker.Title,
                        start: new Date(proker.Start_Date),
                        end: new Date(proker.End_Date),
                        color: "#007bff",
                      }))}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: 500 }}
                />
            </div>
            <div className="my-3 bg-cyan-950 flex justify-around mx-auto items-center text-white px-3 py-4 rounded-lg">
                <div>
                    <h2 className="text-center">Program Kerja Total</h2>
                    <h3 className="text-center">33</h3>
                </div>
                <div>
                    <h2 className="text-center">Jumlah Staff & Pengurus</h2>
                    <h3 className="text-center">0</h3>
                </div>
                <div>
                    <h2 className="text-center">Jumlah Departemen/Biro</h2>
                    <h3 className="text-center">5</h3>
                </div>
            </div>
            <div>
                {/* <Money/> */}
            </div>
        </div>
    )
}

export default Bpi;