import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { IoHome } from "react-icons/io5";
import { FcAbout } from "react-icons/fc";
import { FaCartArrowDown } from "react-icons/fa";

const Navbar = () => {
  const { getCartCount } = useCart();

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          <p className="text-blue-500">
            Tech<span className="text-black text-xl">Gadgets</span>
          </p>
        </Link>

        <div className="flex space-x-6">
          <Link
            to="/"
            className="text-gray-700 flex items-center gap-1  font-semibold hover:text-indigo-600 transition-colors"
          >
            <IoHome />
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-700 flex items-center gap-1  font-semibold  hover:text-indigo-600 transition-colors"
          >
            <FcAbout />
            About
          </Link>
          <Link
            to="/cart"
            className="flex items-center flex items-center gap-1  font-semibold text-gray-700 hover:text-indigo-600 transition-colors"
          >
            <FaCartArrowDown />
            <span>Cart</span>
            {getCartCount() > 0 && (
              <span className="ml-1 bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                {getCartCount()}
              </span>
            )}
          </Link>
        </div>
        <div className="bg-orange-500 text-xl text-white font-bold  px-4 py-1 rounded hover:bg-teal-200 hover:text-black cursor-pointer">
          Login
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
