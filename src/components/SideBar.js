import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Dropdowns from './Dropdowns';

function Navbar() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/loginPage');
  };

  return (
    <nav className="fixed top-0 left-0   bg-gradient-to-r from-black to-gray-500 p-4  rounded-xl flex flex-col items-center md:h-full md:w-[180px]  ">
      
        <div className="text-white font-semibold text-xl mb-4">
          <NavLink to="/homepage" className="text-white cursor-pointer font-bold text-4xl md:text-xl">
            CSK Yazılım A.Ş
          </NavLink>
        </div>
        <div className="flex flex-col items-center">
          <Dropdowns />
        </div>
        <button
          onClick={handleButtonClick}
          className="bg-gradient-to-r from-black to-gray-400 hover:from-pink-500 hover:to-yellow-500  rounded-full p-2 w-20 h-20 font-bold text-white mt-auto"
        >
          <div className='items-center justify-center ml-2 pl-2 ' >
            <svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 512 512">
              <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z" />
            </svg>
          </div>

        </button>
    </nav>
  );
}

export default Navbar;
