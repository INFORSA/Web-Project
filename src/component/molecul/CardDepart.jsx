import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import Axios from "axios";
import { Button } from "react-bootstrap";
import { Calendar,momentLocalizer } from "react-big-calendar";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Swal from "sweetalert2";

function CardDepart({Departemen}){
    useEffect(() => {
        getProducts();
        getProker();
        window.scrollTo(0, 0);
      }, []); 

    const [Proker,setProker]= useState([]);
    const getProker = async () => {
        const response = await Axios.get(`https://api.inforsa-unmul.org/api/getProker/${Departemen}`);
        setProker(response.data);
    };
    const localizer = momentLocalizer(moment)
    const [getKonten,setKonten]= useState([]);
    const getProducts = async () => {
        const response = await Axios.get(`https://api.inforsa-unmul.org/api/get/${Departemen}`);
        setKonten(response.data);
      };
    const options = {
        timeZone: 'Asia/Jakarta',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute:'2-digit',
        hour12: false,
    };
    const handleSelectEvent = (event) => {
        Swal.fire({
          title: event.title,
          text: `Start: ${event.start.toLocaleString("id-ID", options)} \n End: ${event.end.toLocaleString("id-ID", options)}`,
          icon: 'info',
          confirmButtonText: 'Ok'
        });
      };
    return(
        <div>
            <div>
                <h1 className="text-3xl font-md my-2">Kalender {Departemen}</h1>
                <Link to='/Proker'>
                    <Button className="my-2 text-black hover:font-semibold font-bold" variant="secondary"><FontAwesomeIcon style={{ fontSize: '0.8em' }} icon={faPlus} /> Kegiatan</Button>
                </Link>
                <Calendar
                    localizer={localizer}
                    events={Proker.map(proker => ({
                        title: proker.Title,
                        start: new Date(proker.Start_Date),
                        end: new Date(proker.End_Date),
                        color: "#007bff",
                      }))}
                    onSelectEvent={handleSelectEvent}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: 500 }}
                />
            </div>
            <article className="my-5">
                <h2 className="text-3xl font-md">Publikasi Kegiatan</h2>
                <div className="w-full grid grid-cols-1 gap-5 lg:grid-cols-3 md:grid-cols-2 my-3">
                    {getKonten.map((item,idx)=>(
                        <div key={idx} className='bg-gray-500 w-full rounded-lg transform transition-transform duration-300 ease-in-out hover:scale-110'>
                        <div className='rounded-lg flex justify-center items-center'>
                            <LazyLoadImage loading="lazy" className="h-60 object-cover w-full" src={`/uploads/${item.Gambar}`} alt="" />
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
            </article>
        </div>
    )
}

export default CardDepart;
CardDepart.propTypes = {
    Departemen: PropTypes.arrayOf(PropTypes.object).isRequired
  };