import React, { useEffect, useRef, useState } from "react";

function About() {
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
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden scroll-mt-32" id="sobre" ref={sectionRef}>
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-400 via-red-500 to-violet-600"></div>
        
        {/* Animated background patterns */}
        <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6">
            {/* Section title */}
            <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                    Quem Somos
                </h2>
                <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
                {/* About card */}
                <div className={`group transition-all duration-1000 delay-200 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}>
                    <div className="relative h-full group-hover:scale-[1.02] transition-transform duration-500">
                        {/* Glassmorphism effect */}
                        <div className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-2xl"></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                        
                        {/* Content */}
                        <div className="relative p-8 lg:p-10 h-full border border-white/20 rounded-2xl shadow-2xl group-hover:shadow-white/20 transition-all duration-500">
                            <div className="flex items-center justify-center mb-6">
                                <div className="p-4 bg-white/20 rounded-full">
                                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-3xl lg:text-4xl font-bold text-white text-center mb-6">
                                Sobre Nós
                            </h3>
                            <p className="text-white/90 text-base lg:text-lg leading-relaxed">
                                Temos nossa matriz situada na cidade de Ananindeua (PA) e atuando
                                nas cidades de Macapá (AP), São Luís (MA) e Manaus (AM) e todo
                                interior do Estado do Pará. Com base nas necessidades de nossos
                                clientes, buscamos sempre acompanhar o mercado com novas
                                tecnologias e grandes marcas, investindo em nossos especialistas,
                                colaboradores e na educação continuada de nossos parceiros.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Mission card */}
                <div className={`group transition-all duration-1000 delay-400 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}>
                    <div className="relative h-full group-hover:scale-[1.02] transition-transform duration-500">
                        {/* Glassmorphism effect */}
                        <div className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-2xl"></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                        
                        {/* Content */}
                        <div className="relative p-8 lg:p-10 h-full border border-white/20 rounded-2xl shadow-2xl group-hover:shadow-white/20 transition-all duration-500">
                            <div className="flex items-center justify-center mb-6">
                                <div className="p-4 bg-white/20 rounded-full">
                                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-3xl lg:text-4xl font-bold text-white text-center mb-6">
                                Nossa Missão
                            </h3>
                            <p className="text-white/90 text-base lg:text-lg leading-relaxed">
                                Acreditamos que podemos alcançar o aprimoramento contínuo das
                                equipes médicas oferecendo produtos de alta tecnologia que
                                contribuem para um tratamento adequado aos pacientes. Sempre
                                buscamos hospitais referência em uma parceria sólida com foco na
                                formação de profissionais, promovendo a região.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    );
}

export default About;