import { useEffect, useState } from "react";
import Axios from 'axios';
import CurrencyComponent from "../../atom/CurrencyComponent";


function Bendum(){
    useEffect(() => {
        getDanaIn();
        getDanaOut();
        window.scrollTo(0, 0);
      }, []); 
    const [danaIn, setDanaIn]= useState([]);
    const [danaOut, setDanaOut]= useState([]);
    let totalDana = danaIn - danaOut;
    const getDanaIn = async () => {
        const response = await Axios.get("https://api.inforsa-unmul.org/api/Dana-in");
        setDanaIn(response.data[0].dana_masuk);
      };
    const getDanaOut = async () => {
        const response = await Axios.get("https://api.inforsa-unmul.org/api/Dana-out");
        setDanaOut(response.data[0].dana_keluar);
      };
    return(
        <div>
            <h1 className="text-3xl font-md my-2">Informasi Keuangan</h1>
            <div className="grid grid-cols-2 text-center mx-auto w-full gap-3 my-3">
                <div className="h-full">
                    <div className="bg-sky-900 text-white my-3 p-3 lg:p-4 rounded-md border text-left border-md h-40 flex flex-col justify-center lg:justify-between">
                        <h2 className="font-thin text-md text-slate-300">Dana Masuk</h2>
                        <CurrencyComponent amount={danaIn}/>
                    </div>
                    <div className="bg-blue-900 text-white my-3 p-3 lg:p-4 rounded-md border text-left border-md h-40 flex flex-col justify-center lg:justify-between">
                        <h2 className="font-thin text-md text-slate-300">Dana Keluar</h2>
                        <CurrencyComponent amount={danaOut}/>
                    </div>
                </div>
                <div className="bg-indigo-900 text-white my-3 rounded-md border border-md flex flex-col justify-center">
                    <h2 className="font-thin text-md text-slate-300">Sisa Dana Total</h2>
                    <CurrencyComponent amount={totalDana}/>
                </div>
            </div>              
        </div>
    )
}

export default Bendum;