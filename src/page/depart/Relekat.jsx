import { useEffect } from "react";
import Depart from "../../data/Depart";

function Relekat(){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []); 
    return(
        <div className="container min-h-screen">
            <h1 className="text-5xl font-bold text-center my-5">{Depart[2].depart}</h1>
            <h2 className="text-3xl font-md">Deskripsi Departemen</h2>
            <p className="text-lg text-justify font-light">
                {Depart[2].deskripsi}
            </p>
            <img className="my-3" src={Depart[2].img} alt="" />
        </div>
    )
}

export default Relekat;