import React, { useState } from 'react';
import catPTA from '../assets/catPTA.png';
import stentSamoroz from '../assets/stentSamoroz.png';
import stentPeriferico from '../assets/stentPeriferico.png';

const Products = () => {
  const [openProduct, setOpenProduct] = useState(null);

  const toggleProduct = (index) => {
    setOpenProduct(openProduct === index ? null : index);
  };


  const products = [
    {
      name: "Cateter de dilatação para PTA Reewarm",
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
      name: "MER Self-Expandable Stent",
      description: "Stent autoexpansível para tratamento de lesões vasculares.",
      specs: [
        "Diâmetro: 5-10mm",
        "Comprimento: 20-60mm",
        "Material: liga de nitinol",
        "Cobertura: PTFE"
      ],
      image: stentSamoroz
    },
    {
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
    <section className="py-16" id='produtos'>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Nossos Produtos
        </h2>

        <div className="grid grid-flow-row gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div
                className="cursor-pointer p-6 flex flex-col items-center text-center"
                onClick={() => toggleProduct(index)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover mb-4 w-full h-48 max-h-48"
                  style={{ objectFit: 'contain' }}
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {product.description}
                </p>
              </div>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openProduct === index 
                    ? 'max-h-[1000px] opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="bg-gray-50 border-t border-gray-100 p-6 relative">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">
                    Especificações Técnicas:
                  </h4>
                  <ul className="list-disc pl-5 space-y-2">
                    {product.specs.map((spec, i) => (
                      <li 
                        key={i}
                        className="text-sm text-gray-600 leading-relaxed"
                      >
                        {spec}
                      </li>
                    ))}
                  </ul>
                  <button 
                    className="lg:absolute lg:right-6 lg:bottom-6 lg:px-6 lg:py-2 bg-gradient-to-tr from-red-400 to-violet-600 text-white font-semibold text-sm rounded-lg shadow-md hover:translate-y-1 transition-all duration-300 mt-4 lg:mt-0 w-full lg:w-auto" 
                  >
                    Ir para catálogo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;