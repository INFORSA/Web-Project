import { useEffect } from "react";
import Depart from "../../data/Depart";

function Rppm(){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []); 
    return(
        <div className="container min-h-screen">
            <h1 className="text-5xl font-bold text-center my-5">{Depart[1].depart}</h1>
            <h2 className="text-3xl font-md">Deskripsi Departemen</h2>
            <p className="text-lg text-justify font-light">
                {Depart[1].deskripsi}
            </p>
            <img className="my-3" src={Depart[1].img} alt="" />
        </div>
    )
}

export default Rppm;