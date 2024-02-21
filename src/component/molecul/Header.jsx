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
    // setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    // setIsDropdownOpen(!isDropdownOpen);
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
    <nav className="bg-body-tertiary sm:h-16 md:h-20 flex items-center fixed inset-x-0 z-50 ">
      <div className="container mx-auto grid grid-cols-3 gap-auto lg:flex justify-between px-4">
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
          <div className='font-light text-sm text-center'>Information System Association</div>
        </div>
        <div
          className="block bg-transparent lg:hidden focus:outline-none flex justify-end mt-1"
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
        <div className={`lg:flex lg:flex-grow  lg:space-x-6 lg:ml-5 mt-4 sm:mt-0 text-left lg:block ${isNav ? 'block' : 'hidden'}`}>
          <Linkdom
            href='#'
            to="/"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="block lg:inline-block text-black hover:text-gray-400 mr-4"
          >
            Home
          </Linkdom>
          <Linkdom
            href='#'
            to="About"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="block lg:inline-block text-black hover:text-gray-400 mr-4"
          >
            About
          </Linkdom>
          <div
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
            className={`lg:flex z-50 ${isDropdownOpen ? 'block' : 'hidden'}`}
          >
            <div className="relative inline-block text-left">
              <a
                href='#'
                className="justify-center px-4 font-medium text-black transition duration-500 ease-in-out transform hover:scale-105 hover:text-gray-400"
                onClick={toggleDropdown}
              >
                Departemen
              </a>
              <div
                className={`origin-top-right absolute right-0 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${isDropdownOpen ? 'block' : 'hidden'}`}
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
          <div className='w-full flex flex-col sm:flex-row justify-end items-left mb-3'>
            {isLoggedIn ? (
              <>
                <Link to='/Upload' className="text-center inline-block text-black text-sm px-4 py-2 leading-none border rounded border-transparent hover:border-gray-400 ">Upload</Link>
                <button onClick={logOut} className='lg:ml-4 inline-block text-red-500 text-sm px-4 py-2 leading-none border rounded border-transparent hover:border-gray-400'>Log Out</button>
              </>
            ) : (
              <Link to='/Login' className="text-center inline-block text-green-500 text-sm px-4 py-2 leading-none border rounded border-transparent hover:border-gray-400">Login</Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;