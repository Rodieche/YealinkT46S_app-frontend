export const NavbarComponent = () => {
  return (
    <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold">Expert IT</div>
            <div className="block lg:hidden">
                <button id="menu-button" className="focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
                </button>
            </div>
            <div className="hidden lg:flex space-x-4">
                <a href="#" className="text-gray-700 hover:text-gray-900">Home</a>
                <a href="#" className="text-gray-700 hover:text-gray-900">About</a>
                <a href="#" className="text-gray-700 hover:text-gray-900">Services</a>
                <a href="#" className="text-gray-700 hover:text-gray-900">Contact</a>
            </div>
            </div>
            <div id="mobile-menu" className="hidden lg:hidden">
            <a href="#" className="block px-4 py-2 text-gray-700 hover:text-gray-900">Home</a>
            <a href="#" className="block px-4 py-2 text-gray-700 hover:text-gray-900">About</a>
            <a href="#" className="block px-4 py-2 text-gray-700 hover:text-gray-900">Services</a>
            <a href="#" className="block px-4 py-2 text-gray-700 hover:text-gray-900">Contact</a>
            </div>
        </div>
    </nav>
  )
}
