import React, { useState, useEffect } from "react";
import logo from "../assets/hero.png";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('inicio');

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
            
            // Detect active section
            const sections = ['inicio', 'sobre', 'servico', 'produtos', 'parceiros', 'contato'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = [
        { id: 'inicio', label: 'Início' },
        { id: 'sobre', label: 'Sobre' },
        { id: 'servico', label: 'Serviços' },
        { id: 'produtos', label: 'Produtos' },
        { id: 'parceiros', label: 'Parceiros' },
        { id: 'contato', label: 'Contato' }
    ];

    return (
        <header className={`fixed w-full z-50 transition-all duration-500 ${
            scrolled 
                ? 'bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-100' 
                : 'bg-white/95 backdrop-blur-md shadow-sm'
        }`}>
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
                {/* Logo */}
                <div className="flex items-center">
                    <a href="#inicio" className="flex items-center space-x-3 group">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-red-400/20 to-violet-600/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <img 
                                src={logo} 
                                alt="Angioflex Logo" 
                                className="relative h-12 w-12 object-contain transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" 
                            />
                        </div>
                        <div className="hidden sm:block">
                            <span className="text-xl font-bold bg-gradient-to-r from-red-500 to-violet-600 bg-clip-text text-transparent">
                                Angioflex
                            </span>
                            <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-red-500 to-violet-600 transition-all duration-500 rounded-full"></div>
                        </div>
                    </a>
                </div>
                
                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center">
                    <div className="flex items-center space-x-2 bg-gray-50/80 rounded-full px-2 py-2 backdrop-blur-sm border border-gray-200/50">
                        {menuItems.map((item) => (
                            <a 
                                key={item.id}
                                href={`#${item.id}`} 
                                className={`relative px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                                    activeSection === item.id
                                        ? 'text-white'
                                        : 'text-gray-600 hover:text-gray-900'
                                }`}
                            >
                                {/* Active background */}
                                {activeSection === item.id && (
                                    <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-violet-600 rounded-full shadow-lg animate-fadeIn"></span>
                                )}
                                
                                {/* Hover background */}
                                <span className={`absolute inset-0 bg-gray-200/50 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300 ${
                                    activeSection === item.id ? 'hidden' : ''
                                }`}></span>
                                
                                {/* Text */}
                                <span className="relative z-10">
                                    {item.label}
                                </span>
                                
                                {/* Active indicator dot */}
                                {activeSection === item.id && (
                                    <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full animate-pulse"></span>
                                )}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className="lg:hidden z-20 p-2.5 rounded-xl hover:bg-gray-100 active:scale-95 transition-all duration-200" 
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <div className="relative w-6 h-5 flex flex-col justify-between">
                        <span className={`w-full h-0.5 bg-gray-800 rounded-full transition-all duration-300 ${
                            isOpen ? 'rotate-45 translate-y-2' : ''
                        }`}></span>
                        <span className={`w-full h-0.5 bg-gray-800 rounded-full transition-all duration-300 ${
                            isOpen ? 'opacity-0' : ''
                        }`}></span>
                        <span className={`w-full h-0.5 bg-gray-800 rounded-full transition-all duration-300 ${
                            isOpen ? '-rotate-45 -translate-y-2' : ''
                        }`}></span>
                    </div>
                </button>
                
                {/* Mobile Menu */}
                <div className={`absolute right-6 top-20 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transition-all duration-500 ease-out lg:hidden ${
                    isOpen 
                        ? 'opacity-100 visible translate-y-0 scale-100' 
                        : 'opacity-0 invisible -translate-y-4 scale-95 pointer-events-none'
                }`}>
                    <div className="p-3 space-y-1 min-w-[220px]">
                        {menuItems.map((item, index) => (
                            <a 
                                key={item.id}
                                href={`#${item.id}`} 
                                className={`flex items-center px-5 py-3 rounded-xl transition-all duration-300 ${
                                    activeSection === item.id
                                        ? 'bg-gradient-to-r from-red-500 to-violet-600 text-white shadow-lg'
                                        : 'text-gray-700 hover:bg-gray-100'
                                }`}
                                onClick={() => setIsOpen(false)}
                                style={{ 
                                    animationDelay: `${index * 50}ms`,
                                    animation: isOpen ? 'slideIn 0.3s ease-out forwards' : 'none'
                                }}
                            >
                                {/* Icon indicator */}
                                <span className={`w-1.5 h-1.5 rounded-full mr-3 transition-all duration-300 ${
                                    activeSection === item.id
                                        ? 'bg-white scale-100'
                                        : 'bg-gray-400 scale-0'
                                }`}></span>
                                
                                <span className="font-medium text-sm">
                                    {item.label}
                                </span>

                                {/* Arrow icon */}
                                <svg 
                                    className={`w-4 h-4 ml-auto transition-transform duration-300 ${
                                        activeSection === item.id ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'
                                    }`}
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        ))}
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;