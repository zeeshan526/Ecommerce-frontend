import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './../Header/Header.css'
function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div className=''>

    </div>

    <header className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-blue-500">
              Comverse Store
            </Link>
          </div>
          <div className="hidden md:block">
            <nav className="flex space-x-4">
              <Link to="/about" className="text-gray-500 hover:text-blue-500">
                Categories
              </Link>
              <Link to="/services" className="text-gray-500 hover:text-blue-500">
                Services
              </Link>
              <Link to="/blog" className="text-gray-500 hover:text-blue-500">
                About
              </Link>
              <Link to="/contact" className="text-gray-500 hover:text-blue-500">
                Contact Us
              </Link>

              
<Link to="/cart">
    <div className="cart">
      <a href="/">Cart</a>
      {/* <span> ({cart})</span> */}
    </div>
  </Link>
            </nav>
          




          </div>
          <div className="flex md:hidden">
            <button type="button" className="p-2" onClick={toggleNav}>
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="text-gray-500 h-6 w-6" />
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        
          <nav className="pt-4 pb-2">
            <Link to="/about" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-500 hover:text-blue-500">
              About
            </Link>
            <Link to="/services" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-500 hover:text-blue-500">
              Services
            </Link>
            <Link to="/blog" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-500 hover:text-blue-500">
              Blog
            </Link>
            <Link to="/contact" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-500 hover:text-blue-500">
              Contact
            </Link>
          </nav>
          
        </div>

      </div>

     
          </header>
   
    </>

  );
}

export default Header;

