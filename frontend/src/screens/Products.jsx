import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import catPTA from '../assets/catPTA.png';
import stentSamoroz from '../assets/stentSamoroz.png';
import stentPeriferico from '../assets/stentPeriferico.png';

const Products = () => {
  const [openProduct, setOpenProduct] = useState(null);
  const [visibleCards, setVisibleCards] = useState([]);
  const navigate = useNavigate();
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

    const cards = document.querySelectorAll('.product-card');
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  const toggleProduct = (index) => {
    setOpenProduct(openProduct === index ? null : index);
  };

  const products = [
    {
      id: "cateter-pta",
      name: "Cateter de dilatação farmacologico para PTA Reewarm",
      description: "Indicado para a angioplastia transluminal percutânea (PTA) no vaso periférico.",
      specs: [
        "Diâmetro: 2.0-7.0mm",
        "Comprimento: 90mm, 130mm, 150mm",
        "Material: balão de poliuretano",
        "Pressão de inflação: 6-20 atm",
        "Perfil de baixa ponta"
      ],
      image: catPTA
    },
    {
      id: "mer-self-expandable-stent",
      name: "MER Self-Expandable Stent",
      description: "Stent autoexpansível para tratamento de lesões carotidias.",
      specs: [
        "Diâmetro: 5-10mm",
        "Comprimento: 20-60mm",
        "Material: liga de nitinol",
        "Cobertura: PTFE"
      ],
      image: stentSamoroz
    },
    {
      id: "sinus-superflex-635",
      name: "Sinus SuperFlex 635",
      description: "Stent autoexpansível para tratamento de lesões periféricas.",
      specs: [
        "Diâmetro: 5-10mm",
        "Comprimento: 20-60mm",
        "Material: liga de nitinol",
        "Cobertura: PTFE"
      ],
      image: stentPeriferico
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-white scroll-mt-24" id="produtos" ref={sectionRef}>
      <div className="container mx-auto px-6">
        {/* Section title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Nossos Produtos
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Tecnologia de ponta para procedimentos cardiovasculares
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-violet-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12 items-start">
          {products.map((product, index) => (
            <div
              key={index}
              data-index={index}
              className={`product-card group transition-all duration-700 ${
                visibleCards.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Card wrapper with gradient border on hover */}
              <div className="relative h-full">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-400 to-violet-600 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur"></div>
                
                <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col h-full">
                  {/* Image container */}
                  <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 p-8">
                    <div className="aspect-w-16 aspect-h-12 flex items-center justify-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="object-contain h-48 w-full group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-violet-600 group-hover:bg-clip-text transition-all duration-300">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {product.description}
                    </p>

                    {/* Expandable specs */}
                    <button
                      onClick={() => toggleProduct(index)}
                      className="flex items-center justify-between w-full py-3 px-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-300 mb-3"
                    >
                      <span className="text-sm font-semibold text-gray-700">
                        Especificações Técnicas
                      </span>
                      <svg 
                        className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${
                          openProduct === index ? 'rotate-180' : ''
                        }`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Collapsible specs */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        openProduct === index
                          ? 'max-h-96 opacity-100 mb-4'
                          : 'max-h-0 opacity-0'
                      }`}
                    >
                      <ul className="space-y-2 px-4">
                        {product.specs.map((spec, i) => (
                          <li key={i} className="flex items-start text-sm text-gray-600">
                            <svg className="w-4 h-4 text-violet-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/produto/${product.id}`);
                      }}
                      className="w-full py-3 px-6 bg-gradient-to-r from-red-500 to-violet-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 mt-auto"
                    >
                      Ver Catálogo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Full catalog CTA */}
        <div className="flex justify-center px-4">
          <a 
            className='inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-red-500 to-violet-600 text-white font-semibold text-sm md:text-base lg:text-lg rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 w-full sm:w-auto'
            href='catalogos/ANGIOFLEX-CATALOGO-2025.pdf'
            download
          >
            <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="text-center">Download do Catálogo Completo 2025</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
