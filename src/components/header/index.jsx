import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="grid grid-cols-2 p-3">
      <div className="flex items-center">
        <div>
          <img src="./images/flip.svg" alt="logo" className="w-[200px]" />
        </div>
        <div className="bg-blue-50 flex items-center p-2 ml-4 rounded-lg">
          <i className="fa fa-search text-gray-500"></i>
          <input
            className="bg-blue-50 ml-3 text-xl rounded-lg block w-[600px] h-[28px] px-2 focus:outline-none focus:border-blue-700"
            placeholder="Search for Products, Brands, and More"
            required
          />
        </div>
      </div>
      <div className="flex items-center">
        <Link to="/login">
          <button className="flex ml-16 items-center focus:outline-none bg-white hover:bg-blue-500 text-black hover:text-white rounded-lg py-1 px-2 transition duration-300">
            <img src="./images/user.png" className="w-6 h-6" alt="User" />
            <h1 className="ml-2">Login</h1>
          </button>
        </Link>
        <div className="flex ml-16">
          <img src="./images/cart.png" className="w-6 h-6" alt="Cart" />
          <h1 className="ml-2">Cart</h1>
        </div>
        <div className="flex ml-16">
          <img src="./images/seller.png" className="w-6 h-6" alt="Seller" />
          <h1 className="ml-2">Become a Seller</h1>
        </div>
        <div className="flex ml-16">
          <img src="./images/logout.svg" className="w-6 h-6" alt="Logout" />
          <h1 className="ml-2">Logout</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
