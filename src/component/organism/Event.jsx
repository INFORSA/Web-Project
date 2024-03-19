import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Event(){
    const getEvent = () =>{
        Swal.fire({
            title: "INSEVENT 2024",
            text: "Coming Soon!",
            icon: "info"
          })
    }
    const getAspirasi = () =>{
        Swal.fire({
            title: "Ruang Konsultasi dan Aspirasi",
            text: "Tahap Pengembangan",
            icon: "info"
          })
    }

    return(
        <div className="mb-3">
        <div className="container grid lg:grid-cols-3 md:grid-cols-2 min-h-sreen lg:h-72 w-full">
            <div className="bg-card1 w-full text-white flex justify-center items-center mx-auto
            transform transition-transform duration-300 ease-in-out hover:scale-110">
                <div>
                    <img src="" alt="" />
                    <h1 className="font-semibold">INFORSA</h1>
                    <p className="text-sm font-thin text-center">2024</p>
                </div>
            </div>
            <div onClick={getEvent} className="bg-card2 p-4 w-full text-white flex flex-col justify-evenly items-start mx-auto
            transform transition-transform duration-300 ease-in-out hover:scale-110">
                <div>
                    <h1 className="font-semibold text-4xl">COMING SOON</h1>
                    <h2 className="text-lg">INSEVENT 2024</h2>
                    <h3 className="text-xs font-thin text-slate-300">Information System Event</h3>
                </div>
                <Link className="text-white text-3xl">See...</Link>
            </div>
            <div className="bg-card3 p-4 w-full text-white flex flex-col justify-between items-start mx-auto
            transform transition-transform duration-300 ease-in-out hover:scale-110">
                <div>
                    <h2 className="text-md">Upcoming Events</h2>
                    <h1 className="text-7xl">0</h1>
                </div>
                <Link to='/MoreEvent'>
                    <button>View More</button>
                </Link>
            </div>
        </div>
        <div className="container grid lg:grid-cols-2 md:grid-cols-2 min-h-sreen lg:h-72 w-full">
            <div onClick={getAspirasi} className="bg-card2 p-4 w-full text-white flex flex-col justify-evenly items-start mx-auto
            transform transition-transform duration-300 ease-in-out hover:scale-110">
                <div>
                    <h1 className="font-semibold text-4xl">COMING SOON</h1>
                    <h2 className="text-lg">Ruang Konsultasi dan Aspirasi Mahasiswa</h2>
                    <h3 className="text-xs font-thin text-slate-300">INFORSA 2024</h3>
                </div>
                <Link className="text-white text-3xl">See...</Link>
            </div>
            <Link to='/Store' className="bg-card1 w-full text-white flex justify-center items-center mx-auto
            transform transition-transform duration-300 ease-in-out hover:scale-110">
                <FontAwesomeIcon style={{ fontSize: '3em' }} icon={faBasketShopping} />
                <div className="mx-3">
                    <img src="" alt="" />
                    <h1 className="font-semibold">INFORSA</h1>
                    <p className="text-sm font-thin text-center">STORE</p>
                </div>
            </Link>
        </div>
        </div>
    )
}

export default Event;