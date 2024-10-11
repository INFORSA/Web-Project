import { Helmet } from "react-helmet";
import BadanInti from "../component/organism/BPI";
import Kabinet from "../component/organism/Kabinet";
import VisiMisi from "../component/organism/VisiMisi";
import Depart from "../component/organism/Depart";

function Structur(){
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