import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

function Footer() {
  return (

    <div className='absolute bottom-0 left-0 w-full pt-2 ' >
      <div className=' bottom-0 left-0 w-full bg-gradient-to-r from-black to-gray-400 p-4  text-white'>
        <p className='text-white'>
          « Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ,
          quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
          Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. »
        </p>
        <div className='mb-4 justify-center text-center'>

          <a href="https://api.whatsapp.com/send/?phone=905415453752&amp;text&amp;type=phone_number&amp;app_absent=0">
            <i className="bg-transparent mr-4 border-none rounded-full p-3 text-4xl text-green-600 fa-brands fa-whatsapp wp "></i>
          </a>

          <a href="https://www.instagram.com/cskyazilim/">
            <i className="bg-transparent mr-4 border-none rounded-full p-3 text-4xl text-orange-600 fa-brands fa-instagram  "></i>
          </a>

          <a href="https://www.cskyazilim.com/">
            <i className="bg-transparent mr-4 border-none rounded-full p-3 text-4xl text-blue-400 fa-brands fa-twitter  "></i>
          </a>

        </div>
      </div>
    </div>


  );
}

export default Footer;
