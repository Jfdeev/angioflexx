import React, { useEffect, useRef, useState } from "react";
import Carrosel from '../components/Carouseul.jsx'

function Partners() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section id="parceiros" className="py-20 lg:py-32 bg-gray-50 scroll-mt-24" ref={sectionRef}>
            <div className="container mx-auto px-6">
                {/* Section title */}
                <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                        Nossos Parceiros
                    </h2>
                    <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                        Trabalhamos com as principais empresas do setor médico
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-violet-600 mx-auto mt-6 rounded-full"></div>
                </div>

                {/* Carousel */}
                <div className={`transition-all duration-1000 delay-300 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    <Carrosel />
                </div>
            </div>
        </section>
    )
}

export default Partners;