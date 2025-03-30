import React, { useState } from "react";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-white text-gray-800 shadow-lg fixed w-full z-10">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <div className="flex items-center">
                    <a className="bg-white -m-1.5 p-1.5 shadow-xl rounded-md transition-transform transform hover:scale-105">
                        <img src="https://media.licdn.com/dms/image/v2/D5603AQE6HsQNBgwvEA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1679249908766?e=2147483647&v=beta&t=RLhNa12qaiLH6mIdy68hdIcgJjsEGzUBpKnUIRnEv7g" alt="angioflex" className="w-16 rounded-md" />
                    </a>
                </div>
                <div className="flex lg:flex-1 justify-end relative">
                    <button className="lg:hidden z-20" onClick={toggleMenu}>
                        {isOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        )}
                    </button>
                    <div className={`absolute right-0 top-12 bg-white text-gray-800 rounded-lg shadow-lg p-4 transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'} lg:flex lg:static lg:bg-transparent lg:shadow-none lg:p-0`}>
                        <a href="#inicio" className="block p-2 relative overflow-hidden rounded-md transition-all duration-300 group">
                            <span className="absolute inset-0 bg-gradient-to-r from-red-400 to-violet-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                            <span className="relative z-10 block p-2 text-gray-800 font-bold transition-colors duration-300">Inicio</span>
                        </a>
                        <a href="#sobre" className="block p-2 relative overflow-hidden rounded-md transition-all duration-300 group">
                            <span className="absolute inset-0 bg-gradient-to-r from-red-400 to-violet-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                            <span className="relative z-10 block p-2 text-gray-800 font-bold transition-colors duration-300">Sobre</span>
                        </a>
                        <a href="#servico" className="block p-2 relative overflow-hidden rounded-md transition-all duration-300 group">
                            <span className="absolute inset-0 bg-gradient-to-r from-red-400 to-violet-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                            <span className="relative z-10 block p-2 text-gray-800 font-bold transition-colors duration-300">Serviços</span>
                        </a>

                        <a href="#produtos" className="block p-2 relative overflow-hidden rounded-md transition-all duration-300 group">
                            <span className="absolute inset-0 bg-gradient-to-r from-red-400 to-violet-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                            <span className="relative z-10 block p-2 text-gray-800 font-bold transition-colors duration-300">Produtos</span>
                        </a>
                        
                        <a href="#parceiros" className="block p-2 relative overflow-hidden rounded-md transition-all duration-300 group">
                            <span className="absolute inset-0 bg-gradient-to-r from-red-400 to-violet-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                            <span className="relative z-10 block p-2 text-gray-800 font-bold transition-colors duration-300">Parceiros</span>
                        </a>

                        <a href="#contato" className="block p-2 relative overflow-hidden rounded-md transition-all duration-300 group">
                            <span className="absolute inset-0 bg-gradient-to-r from-red-400 to-violet-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                            <span className="relative z-10 block p-2 text-gray-800 font-bold transition -colors duration-300">Contato</span>
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;