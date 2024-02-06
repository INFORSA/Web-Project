import { useEffect, useState } from 'react';
import { Chrono } from 'react-chrono';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function MoreEvent(){
    useEffect(() => {
        getProker();
        window.scrollTo(0, 0);
    }, []); 
    const [Proker,setProker]= useState([]);
    const items = Proker.map((item) => ({
        title: item.Title,
        cardTitle:item.CardTitle,
        cardSubtitle:item.CardSubtitle,
        cardDetailedText:item.Isi
    }));
    console.log(items)
    const getProker = async () => {
        const response = await Axios.get("http://localhost:8000/api/Upcoming");
        setProker(response.data);
    };
    return(
        <div className="min-h-screen container">
            <h1 className="bg-blue-950 my-4 px-3 rounded-lg text-white py-4 text-5xl font-bold text-center">UPCOMING EVENT</h1>
            <Link to='/UpEvent' className='flex justify-end'>
                <Button className="my-2 border border-black text-black hover:font-bold font-semibold" variant="secondary"><FontAwesomeIcon style={{ fontSize: '0.8em' }} icon={faPlus} /> Kegiatan</Button>
            </Link>
            {items.length > 0 && (
                <Chrono items={items} mode="VERTICAL" />
            )}
        </div>
    )
}

export default MoreEvent;