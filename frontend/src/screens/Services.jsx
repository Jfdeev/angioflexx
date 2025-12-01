import React, { useEffect, useRef, useState } from "react";

function Services() {
    const [visibleCards, setVisibleCards] = useState([]);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const cardIndex = parseInt(entry.target.dataset.index);
                        setVisibleCards((prev) => [...new Set([...prev, cardIndex])]);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const cards = document.querySelectorAll('.service-card');
        cards.forEach((card) => observer.observe(card));

        return () => {
            cards.forEach((card) => observer.unobserve(card));
        };
    }, []);

    const services = [
        {
            title: "Angioplastia Periférica",
            description: "Procedimentos minimamente invasivos para tratamento de artérias periféricas obstruídas, restaurando o fluxo sanguíneo adequado.",
            icon: (
                <svg className="w-20 h-20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.5 12.75l6 6 9-13.5" />
                    <circle cx="12" cy="12" r="10" strokeWidth="1.5"/>
                </svg>
            )
        },
        {
            title: "Angioplastia Coronária",
            description: "Tratamentos avançados para desobstrução de artérias coronárias, melhorando a saúde cardiovascular e qualidade de vida.",
            icon: (
                <svg className="w-20 h-20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            )
        },
        {
            title: "Embolização de Mioma",
            description: "Técnicas especializadas para tratamento não cirúrgico de miomas uterinos, proporcionando recuperação rápida.",
            icon: (
                <svg className="w-20 h-20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            )
        }
    ];

    return (
        <section id="servico" className="py-20 lg:py-32 bg-gray-50 scroll-mt-24" ref={sectionRef}>
            <div className="container mx-auto px-6">
                {/* Section title */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                        Nossos Serviços
                    </h2>
                    <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                        Soluções especializadas em procedimentos cardiovasculares e intervencionistas
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-violet-600 mx-auto mt-6 rounded-full"></div>
                </div>

                {/* Services grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            data-index={index}
                            className={`service-card group relative transition-all duration-700 ${
                                visibleCards.includes(index)
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-10'
                            }`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            {/* Gradient border effect */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-red-400 to-violet-600 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur"></div>
                            
                            {/* Card content */}
                            <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                                {/* Icon */}
                                <div className="flex justify-center mb-6">
                                    <div className="p-4 bg-gradient-to-br from-red-50 to-violet-50 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                                        <div className="text-gray-700 group-hover:[&>svg]:stroke-red-500 transition-all duration-500">
                                            {service.icon}
                                        </div>
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-bold text-gray-800 text-center mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-violet-600 group-hover:bg-clip-text transition-all duration-300">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 text-center leading-relaxed flex-grow">
                                    {service.description}
                                </p>

                                {/* Learn more button */}
                                <div className="mt-6 text-center">
                                    <a 
                                        href="#contato" 
                                        className="inline-flex items-center text-sm font-semibold text-gray-700 group-hover:text-violet-600 transition-colors duration-300"
                                    >
                                        Saiba mais
                                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services;