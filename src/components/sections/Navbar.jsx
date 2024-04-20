import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import { getUser, logout } from '../../helpers/actions';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ none }) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const user_id = getUser();

  const handleLogout = () => {
    logout(navigate);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href={'/'} className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-8" alt="Flowbite Logo" />
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {user_id ? (
            <button
              type="button"
              onClick={handleLogout}
              className="text-white bg-[#db5353] hover:bg-[#d76a6a] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Logout
            </button>
          ) : (
            <a href="/register">
              <button
                type="button"
                className="text-white bg-[#35374B] hover:bg-[#50727B] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                S'Inscrire
              </button>
            </a>
          )}

         { !none && <button
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={menuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>}
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            menuOpen ? '' : 'hidden'
          }`}
          id="navbar-sticky"
        >
          {!none && (
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 font-semibold text-[#35374B] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#50727B] md:p-0 md:dark:hover:text-[#35374B] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="#formations"
                  className="block py-2 px-3 font-semibold text-[#35374B] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#50727B] md:p-0 md:dark:hover:text-[#35374B] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Formations
                </a>
              </li>
              <li>
                <a
                  href="#apropos"
                  className="block py-2 px-3 font-semibold text-[#35374B] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#50727B] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  A Propos
                </a>
              </li>
              <li>
                <a
                  href="#localisation"
                  className="block py-2 px-3 font-semibold text-[#35374B] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#50727B] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Localisation
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
