import React, { useEffect, useState } from "react";
import logo from "../assets/hero.png";

function Hero() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-24 lg:pt-20 scroll-mt-0">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-red-50/30 to-violet-50/30"></div>
            
            {/* Animated background shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-red-400/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-violet-400/10 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="relative z-10 container mx-auto px-6 pb-32 md:pb-36 lg:pb-40">
                <div className={`flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    {/* Logo with animation */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-red-400 to-violet-600 rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 animate-pulse"></div>
                        <div className="relative bg-white p-8 rounded-3xl shadow-2xl group-hover:shadow-red-200/50 transition-all duration-500 group-hover:scale-105">
                            <img 
                                src={logo} 
                                alt="Angioflex Logo" 
                                className="w-48 h-48 lg:w-60 lg:h-60 object-contain"
                            />
                        </div>
                    </div>

                    {/* Text content */}
                    <div className="text-center lg:text-left max-w-2xl space-y-6">
                        <div className="space-y-4">
                            <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 leading-tight">
                                Seja bem-vindo à{" "}
                                <span className="bg-gradient-to-r from-red-500 to-violet-600 bg-clip-text text-transparent">
                                    Angioflex
                                </span>
                            </h1>
                            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
                                Soluções inovadoras para cuidar da sua saúde cardiovascular
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start pt-4">
                            <a 
                                href="#produtos" 
                                className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-red-500 to-violet-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-center text-sm md:text-base"
                            >
                                Conheça nossos produtos
                            </a>
                            <a 
                                href="#contato" 
                                className="px-6 md:px-8 py-3 md:py-4 bg-white text-gray-800 font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-gray-200 hover:border-violet-300 text-center text-sm md:text-base"
                            >
                                Entre em contato
                            </a>
                        </div>

                        {/* Stats or features */}
                        <div className="grid grid-cols-3 gap-3 md:gap-6 pt-8 md:pt-10 pb-4 md:pb-6">
                            <div className="text-center">
                                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-red-500 to-violet-600 bg-clip-text text-transparent">10+</div>
                                <div className="text-xs md:text-sm text-gray-600 mt-1">Anos de experiência</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-red-500 to-violet-600 bg-clip-text text-transparent">100%</div>
                                <div className="text-xs md:text-sm text-gray-600 mt-1">Qualidade garantida</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-red-500 to-violet-600 bg-clip-text text-transparent">24/7</div>
                                <div className="text-xs md:text-sm text-gray-600 mt-1">Suporte disponível</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 md:bottom-12 lg:bottom-16 left-0 right-0 flex justify-center animate-bounce">
                <div className="flex flex-col items-center space-y-2">
                    <span className="text-xs text-gray-600 font-semibold uppercase tracking-wider">Role para baixo</span>
                    <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2">
                        <div className="w-1.5 h-3 bg-gray-400 rounded-full animate-bounce"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;