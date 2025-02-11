import React, { useState } from 'react';

const Products = () => {
  const [openProduct, setOpenProduct] = useState(null);

  const toggleProduct = (index) => {
    setOpenProduct(openProduct === index ? null : index);
  };

  // ... (mantenha o array de products igual)

  const products = [
    {
      name: "Angioplastia Coronária",
      description: "Procedimento minimamente invasivo para desobstrução de artérias coronárias",
      specs: [
        "Dilatação com stent medicado",
        "Guia intracoronária 0.014",
        "Tempo de procedimento: 1-2 horas",
        "Recuperação: 24-48 horas"
      ],
      image: "/images/angioplastia-coronaria.jpg"
    },
    {
      name: "Embolização de Míoma",
      description: "Tratamento não cirúrgico para miomas uterinos",
      specs: [
        "Acesso pela artéria femoral",
        "Uso de micropartículas embólicas",
        "Duração: 1-3 horas",
        "Alta hospitalar no mesmo dia"
      ],
      image: "/images/embolizacao-mioma.jpg"
    },
    {
      name: "Angioplastia Periférica",
      description: "Intervenção vascular para membros inferiores",
      specs: [
        "Cateteres balão de baixo perfil",
        "Guia 0.035″",
        "Anestesia local",
        "Recuperação ambulatorial"
      ],
      image: "/images/angioplastia-periferica.jpg"
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
                {/* Imagem do produto */}
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-32 h-32 object-cover mb-4 rounded-full"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {product.description}
                </p>
              </div>

              {/* Conteúdo expansível simplificado */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openProduct === index 
                    ? 'max-h-[1000px] opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="bg-gray-50 border-t border-gray-100 p-6">
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