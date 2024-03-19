import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Type = () =>{
    const getItem = () =>{
        Swal.fire({
            title: "Coming Soon",
            text: "Merch dalam perencanaan",
            icon: "info"
          })
    }
    return(
        <div className="grid grid-cols-3 my-3 h-96 mx-2 font-serif">
            <Link onClick={getItem} to="/Store" className="bg-hoodie flex items-center mr-5">
                <div className="bg-white flex items-center w-full h-10 text-black">Hoodie</div>
            </Link>
            <Link onClick={getItem} to="/Store" className="bg-jacket flex items-center mr-5">
                <div className="bg-white flex items-center w-full h-10 text-black">Jacket</div>
            </Link>
            <Link onClick={getItem} to="/Store" className="bg-t-shirt flex items-center ">
                <div className="bg-white flex items-center w-full h-10 text-black">T-Shirt</div>
            </Link>
        </div>
    )
}
export default Type;