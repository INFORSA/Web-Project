import { useState } from 'react';
import INFORSA from '../../assets/inforsa.png'
import { Link, useNavigate } from 'react-router-dom';
import { Link as Linkdom } from 'react-scroll';
import Swal from 'sweetalert2';

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNav, setisNav] = useState(false);
  const isLoggedIn = localStorage.getItem("token") !== null;
  const navigate = useNavigate();
  const toggleNav = () => {
    setisNav(!isNav);
  };

  const toggleDropdown = () => {
    setisNav(false); 
  };
  const logOut = () => {
    Swal.fire({
      title: "Are you sure to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("token");
        navigate("/");
        Swal.fire({
          title: "Logout Success",
          icon: "success",
        });
      }
    });
  }
  return (
    <nav className="bg-body-tertiary flex items-center sm:h-auto md:h-20 flex items-center fixed inset-x-0 z-50 border-b-4 border-blue-950">
      <div className="w-full mx-auto grid grid-cols-3 gap-auto lg:flex md:flex justify-between md:justify-evenly md:items-center px-4">
        <Link to='/'>
          <img
            src={INFORSA}
            width="70"
            height="70"
            className="ml-3 inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Link>
        <div className='text-black text-3xl sm:text-md md:text-2xl lg:text-3xl xl:text-4xl ml-3 mt-1'>
          <Link to='/' className='font-bold text-black text-center'>
            INFORSA
          </Link>
          <div className='font-light lg:text-sm text-xs text-center md:text-left'>Information System Association</div>
        </div>
        <div
          className="block bg-transparent lg:hidden md:hidden focus:outline-none flex justify-end mt-1"
          onClick={toggleNav}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </div>
        <div className={`lg:flex md:flex lg:flex-grow md:flex-grow md:ml-5 lg:ml-12 mt-2 sm:mt-0 lg:mb-2 lg:block ${isNav ? 'block w-screen pr-12 text-center' : 'hidden text-left'}`}>
        <div className='h-28 md:h-full lg:h-full w-full inline-block mt-2 flex justify-center ml-0 lg:ml-40 gap-3 px-0 flex-col md:flex-row lg:flex-row'>
          <Link to='/'>
            <Linkdom
              href='#'
              to="/"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="block lg:inline-block text-black hover:text-gray-400"
            >
              Home
            </Linkdom>
          </Link>
          <Link
            href='#'
            to="/About"
            className="block lg:inline-block text-black hover:text-gray-400 mx-4"
          >
            About
          </Link>
          <div
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
            className={`lg:flex z-50 ${isDropdownOpen ? 'inline-block' : 'block'}`}
          >
            <div className="relative inline-block text-left">
              <a
                href='#'
                className="justify-center font-medium text-black transition duration-500 ease-in-out transform hover:scale-105 hover:text-gray-400"
                onClick={toggleDropdown}
              >
                More
              </a>
              <div
                className={`origin-top-right absolute left-0 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${isDropdownOpen ? 'block' : 'hidden'}`}
              >
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <Link to='/BPI' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">BPI</Link>
                  <Link to='/KPSDM' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">KPSDM</Link>
                  <Link to='/RPPM' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">RPPM</Link>
                  <Link to='/RELEKAT' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">RELEKAT</Link>
                  <Link to='/KOMINFO' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">KOMINFO</Link>
                  <Link to='/INKREF' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">INKREF</Link>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className='w-full flex flex-col sm:flex-row justify-center lg:justify-end items-left my-1'>
            {isLoggedIn ? (
              <>
                <Link to='/Upload' className="text-center text-black text-sm px-4 py-2 leading-none border rounded border-transparent hover:border-gray-400 ">Upload</Link>
                <button onClick={logOut} className='lg:ml-4 text-red-500 text-sm px-4 py-2 leading-none border rounded border-transparent hover:border-gray-400'>Log Out</button>
              </>
            ) : (
              <Link to='/Login' className="text-center text-green-500 text-sm px-4 py-2 leading-none border rounded border-transparent hover:border-gray-400">Login</Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;