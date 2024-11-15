import { Link } from "react-router-dom";
import Sound from "../data/Store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import Banner from "../component/organism/ecommerce/Banner";
import Type from "../component/organism/ecommerce/Type";
import inforsa_store from '../assets/inforsa-store.jpg';
import { useEffect } from "react";

function Store(){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []); 
    return(
        <div>
            <h1 className="bg-blue-950 px-3 text-white py-4 text-5xl font-bold text-center">INFORSA STORE</h1>
            <Banner/>
            <div className="flex flex-col lg:flex-row justify-around bg-cyan-950 p-2">
                <div className="flex items-center gap-3">
                    <img className="w-40" src={inforsa_store} alt="" />
                    <p className="text-white text-sm lg:text-md text-center p-3">
                        INFORSA Store merupakan wadah wirausaha yang dikembangkan langsung oleh anak Sistem Informasi
                        <br /> 
                        untuk meningkatkan kualitas sumber daya terutama pada bidang industri bisnis kreatif.
                    </p>
                </div>
                {/* <div className="text-white border h-fit">
                    <HiArrowRight />
                </div> */}
                <div className="my-3 gap-4 flex justify-around items-center text-white px-3 py-4 rounded-lg">
                    <div>
                        <h2>ITEMS</h2>
                        <h3 className="text-center">0</h3>
                    </div>
                    <div>
                        <h2>MERCH</h2>
                        <h3 className="text-center">0</h3>
                    </div>
                </div>
            </div>
            <h2 className="text-center text-5xl font-bold my-2">MERCH</h2>
            <Type/>
            <div className="container">
                <h2 className="text-center text-5xl font-bold">ITEMS</h2>
                <div className="w-full grid gap-3 lg:grid-cols-4 md:grid-cols-2 my-3">
                    {Sound.map((item,idx)=>(
                        <div key={idx} className="h-full w-full p-2 border border-solid border-black mx-auto my-auto
                        transform transition-transform duration-200 ease-in-out hover:scale-110">
                            <img className="w-full" src={item.image} alt="" />
                            <div className="flex justify-between my-2">
                                <div>
                                    <h2 className="font-serif text-md font-bold">{item.title}</h2>
                                    <h3 className="text-sm">Informasi : {item.info}</h3>
                                    <h4 className="text-sm font-semibold">Status : {item.statubarang}</h4>
                                </div>
                                <Link className="flex justify-end mt-3">
                                    <FontAwesomeIcon icon={faMessage} className="text-white bg-black p-2" style={{ fontSize: '1em' }}/>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Store;