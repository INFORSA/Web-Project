import { Link } from "react-router-dom";
// import penyanyi from '../../assets/penyanyi.png'

function Event(){
    return(
        <div className="container min-h-sreen lg:h-72 w-auto grid gap-1 lg:grid-cols-3 md:grid-cols-2 my-3">
            <div className="bg-card1 rounded-lg w-72 bg-blue-950 text-white flex justify-center items-center mx-auto
            transform transition-transform duration-300 ease-in-out hover:scale-110">
                <div>
                    <img src="" alt="" />
                    <h1 className="font-semibold">INFORSA</h1>
                    <p className="text-sm font-thin text-center">2024</p>
                </div>
            </div>
            <div className="bg-card2 p-4 rounded-lg w-72 bg-blue-950 text-white flex flex-col justify-evenly items-start mx-auto
            transform transition-transform duration-300 ease-in-out hover:scale-110">
                <div>
                    <h1 className="font-semibold text-4xl">COMING SOON</h1>
                    <h2 className="text-lg">INSEVENT 2024</h2>
                    <h3 className="text-xs font-thin text-slate-300">Information System Event</h3>
                </div>
                <Link className="text-white text-3xl">See...</Link>
            </div>
            <div className="bg-card3 p-4 rounded-lg w-72 bg-blue-950 text-white flex flex-col justify-between items-start mx-auto
            transform transition-transform duration-300 ease-in-out hover:scale-110">
                <div>
                    <h2 className="text-md">Upcoming Events</h2>
                    <h1 className="text-7xl">0</h1>
                </div>
                <Link>
                    <button>View More</button>
                </Link>
            </div>
        </div>
    )
}

export default Event;