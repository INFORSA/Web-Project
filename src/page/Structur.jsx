import { Helmet } from "react-helmet";
import BadanInti from "../component/organism/BPI";
import Kabinet from "../component/organism/Kabinet";
import VisiMisi from "../component/organism/VisiMisi";
import Depart from "../component/organism/Depart";
import { useEffect } from "react";

function Structur(){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []); 

    return(
        <div>
            <Helmet>
                <title>Struktur Kepengurusan</title>
            </Helmet>
            <Kabinet/>
            <VisiMisi/>
            <BadanInti/>
            <Depart/>
        </div>
    )
}

export default Structur;