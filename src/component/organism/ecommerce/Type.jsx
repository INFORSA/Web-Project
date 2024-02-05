import { Link } from "react-router-dom";

const Type = () =>{
    return(
        <div className="grid grid-cols-3 my-3 h-96 mx-2 font-serif">
            <Link to="/" className="bg-hoodie flex items-center mr-5">
                <div className="bg-white flex items-center w-full h-10 text-black">Hoodie</div>
            </Link>
            <Link to="/" className="bg-jacket flex items-center mr-5">
                <div className="bg-white flex items-center w-full h-10 text-black">Jacket</div>
            </Link>
            <Link to="/" className="bg-t-shirt flex items-center ">
                <div className="bg-white flex items-center w-full h-10 text-black">T-Shirt</div>
            </Link>
        </div>
    )
}
export default Type;