import { useState } from "react";

import { MdDialpad } from "react-icons/md";
import { FaAddressBook } from "react-icons/fa";
import { LiaPhoneSquareSolid } from "react-icons/lia";

export const NavbarComponent = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                <div className="flex items-center">
                    <img src="/logo.png" alt="Logo" className="h-7 w-6 mr-2" />
                    <div className="text-xl font-bold">Expert IT</div>
                </div>
                <div className="block lg:hidden">
                    <button 
                    id="menu-button" 
                    className="focus:outline-none"
                    onClick={toggleMobileMenu}
                    >
                    <svg
                        className="w-6 h-6"
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
                    </button>
                </div>
                <div className="hidden lg:flex space-x-4">
                    <a href="#" className="text-gray-700 hover:text-gray-900 flex items-center"><MdDialpad /> &nbsp; Dialer</a>
                    <a href="#" className="text-gray-700 hover:text-gray-900 flex items-center"><FaAddressBook /> &nbsp; Addresses</a>
                    <a href="#" className="text-gray-700 hover:text-gray-900 flex items-center"><LiaPhoneSquareSolid /> &nbsp; Set Phone</a>
                </div>
                </div>
                <div className={`transition-max-height duration-500 ease-in-out overflow-hidden ${isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'} lg:hidden`}>
                    <a href="#" className="block text-gray-700 hover:text-gray-900 py-2 flex items-center"><MdDialpad /> &nbsp; Dialer</a>
                    <a href="#" className="block text-gray-700 hover:text-gray-900 py-2 flex items-center"><FaAddressBook /> &nbsp; Addresses</a>
                    <a href="#" className="block text-gray-700 hover:text-gray-900 py-2 flex items-center"><LiaPhoneSquareSolid /> &nbsp; Set Phone</a>
                </div>
            </div>
        </nav>
    )
}
