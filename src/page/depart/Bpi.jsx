import Depart from "../../data/Depart";
import image from '../../assets/inforsa.png'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Bendum from "../../component/organism/BPI/Bendum";
import { LazyLoadImage } from "react-lazy-load-image-component";
import struktur from '../../assets/STRUKTUR2024.png';
import { Helmet } from "react-helmet";
import CardDepart from "../../component/molecul/CardDepart";

function Bpi(){
    return(
        <div className="container">
            <Helmet>
                <title>Badan Pengurus Inti</title>
            </Helmet>
            <div className="w-full grid gap-4 lg:grid-cols-2 md:grid-cols-2 my-3">
                <div className="border text-center border-blue-500 border-solid border-2 w-auto rounded-lg">
                    <LazyLoadImage loading="lazy" className="w-20 mx-auto mt-3" src={image} alt="" />
                    <h2 className="text-3xl mt-4 font-bold font-serif">INSEVENT</h2>
                    <h3 className="text-md mt-4 mb-3">Informasi seputar INSEVENT 2024</h3>
                </div>
                <div className="border text-center border-blue-500 border-solid border-2 w-auto rounded-lg">
                    <LazyLoadImage loading="lazy" className="w-20 mx-auto mt-3" src={image} alt="" />
                    <h2 className="text-3xl mt-4 font-bold font-serif">OPREC</h2>
                    <h3 className="text-md mt-4 mb-3">Informasi seputar OPREC Pengurus 2024</h3>
                </div>
            </div>
            <h1 className="bg-blue-950 my-4 px-3 rounded-lg text-white py-4 text-5xl font-bold text-center">{Depart[5].depart}</h1>
            <div>
                <h1 className="text-3xl font-md my-2">Struktural Kepengurusan 2024</h1>
                <LazyLoadImage loading="lazy" className="w-full" src={struktur}></LazyLoadImage>
            </div>
            <CardDepart Departemen={"BPI"}/>
            <Bendum/>
        </div>
    )
}

export default Bpi;