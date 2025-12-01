import React, { useEffect, useRef, useState } from "react";

function Contact() {
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

  const contactMethods = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      value: "angioflex@angioflex.com.br",
      link: "mailto:angioflex@angioflex.com.br"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Telefone",
      value: "(91) 2122-0978",
      link: "tel:+559121220978"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "WhatsApp",
      value: "(91) 98182-7371",
      link: "https://wa.me/5591981827371"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "WhatsApp",
      value: "(91) 98308-9912",
      link: "https://wa.me/5591983089912"
    }
  ];

  return (
    <section id="contato" className="relative py-20 lg:py-32 overflow-hidden scroll-mt-24" ref={sectionRef}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500 via-red-600 to-violet-700"></div>
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
          {/* Section title */}
          <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Entre em Contato
            </h2>
            <p className="text-base md:text-xl text-white/90 max-w-2xl mx-auto px-4">
              Estamos prontos para atender você e esclarecer suas dúvidas
            </p>
            <div className="w-24 h-1 bg-white mx-auto mt-6 rounded-full"></div>
          </div>        <div className="max-w-5xl mx-auto">
          {/* Contact cards */}
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target={method.link.startsWith('http') ? '_blank' : '_self'}
                rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                className="group relative block"
              >
                {/* Glassmorphism card */}
                <div className="relative group-hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-2xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                  
                  <div className="relative p-4 md:p-6 border border-white/20 rounded-2xl group-hover:border-white/40 transition-all duration-300">
                    <div className="flex items-center space-x-3 md:space-x-4">
                      <div className="p-2.5 md:p-3 bg-white/20 rounded-xl group-hover:bg-white/30 transition-colors duration-300 flex-shrink-0">
                        <div className="text-white w-6 h-6 md:w-8 md:h-8 flex items-center justify-center">
                          {method.icon}
                        </div>
                      </div>
                      <div className="flex-grow min-w-0">
                        <h3 className="text-white/80 text-xs md:text-sm font-semibold mb-0.5 md:mb-1">
                          {method.title}
                        </h3>
                        <p className="text-white text-sm md:text-lg font-bold group-hover:text-white/90 transition-colors duration-300 truncate">
                          {method.value}
                        </p>
                      </div>
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Info message */}
          <div className={`relative transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="relative">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
              
              <div className="relative p-8 border border-white/20 rounded-2xl text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-white/90 text-lg leading-relaxed max-w-2xl mx-auto">
                  Nossa equipe está disponível para fornecer mais informações sobre nossos produtos e serviços.
                  Entre em contato através de qualquer um dos canais acima e teremos prazer em atendê-lo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;