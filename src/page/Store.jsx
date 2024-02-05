import { Link } from "react-router-dom";
import Sound from "../data/Store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Banner from "../component/organism/ecommerce/Banner";
import Type from "../component/organism/ecommerce/Type";

function Store(){
    return(
        <div>
            <h1 className="bg-blue-950 px-3 text-white py-4 text-5xl font-bold text-center">INFORSA STORE</h1>
            <Banner/>
            <h2 className="text-center text-5xl font-bold my-2">MERCH</h2>
            <Type/>
            <div className="container">
                <h2 className="text-center text-5xl font-bold">ITEMS</h2>
                <div className="w-full grid lg:grid-cols-4 md:grid-cols-2 my-3">
                    {Sound.map((item,idx)=>(
                        <div key={idx} className="h-full w-full p-2 border border-solid border-black mx-auto my-auto">
                            <img className="w-full" src={item.image} alt="" />
                            <div className="flex justify-between my-2">
                                <div>
                                    <h2 className="font-serif text-md font-bold">{item.title}</h2>
                                    <h3 className="text-sm">Informasi : {item.info}</h3>
                                    <h4 className="text-sm font-semibold">Status : {item.statubarang}</h4>
                                </div>
                                <Link className="flex justify-end mt-3">
                                    <FontAwesomeIcon icon={faCartShopping} className="text-white bg-black p-2" style={{ fontSize: '1em' }}/>
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