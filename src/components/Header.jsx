import { AiFillProduct } from "react-icons/ai";
import { Link } from "react-router-dom";


const Header = () => {

    return (
        <div className="flex justify-between items-center h-25 shadow">
            <div className="m-2 text-3xl">
                <AiFillProduct />
                <span className="">myStore</span>
            </div>
            <div>
                <ul className="flex gap-2 m-3 items-center">
                    <li className="px-4 hover:bg-gray-400 rounded transition-colors duration-200 cursor-pointer text-2xl">Home</li>
                    <li className="px-6 bg-black text-white rounded hover:bg-gray-700 transition-colors duration-200 cursor-pointe text-2xl"><Link to={'/cart'}>Cart</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header