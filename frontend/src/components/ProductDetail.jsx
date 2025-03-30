import React from 'react';
import { useParams, Link } from 'react-router-dom';
import catPTA from '../assets/catPTA.png';
import stentSamoroz from '../assets/stentSamoroz.png';
import stentPeriferico from '../assets/stentPeriferico.png';

const products = [
  {
    id: "cateter-pta",
    name: "Cateter de dilatação para PTA Reewarm",
    description: "Indicado para a angioplastia transluminal percutânea (PTA) no vaso periférico.",
    specs: [
      "Diâmetro: 2.0-7.0mm",
      "Comprimento: 90mm, 130mm, 150mm",
      "Material: balão de poliuretano",
      "Pressão de inflação: 6-20 atm"
    ],
    p1: "O cateter balão PTA revestido com fármaco Reewarm™ PTX é indicado para a angioplastia transluminal percutânea (PTA) no vaso periférico. Destina-se ao tratamento de estenose e oclusão da artéria poplítea femoral. O balão transporta paclitaxel, que pode inibir a proliferação de células musculares lisas atuando sobre as lesões, de modo a tratar a estenose ou oclusão aterosclerótica.",
    p2: "O cateter de PTA com balão revestido com fármaco Reewarm™ PTX possui a tecnologia de pulverização por atomização patenteada, que permite obter um revestimento uniforme e estável do fármaco. Pode assegurar o fornecimento contínuo e suficiente de fármaco na lesão, reduzir os resíduos de fármaco no sangue e noutras lesões não visadas, e reduzir a incidência de reações adversas.",
    p3: "As partículas pequenas aumentam a concentração de paclitaxel no tecido arterial e reduzem o risco de embolia distal causado por partículas grandes.",
    image: catPTA,
    pdf: "/catalogos/cateter-pta.pdf"
  },
  {
    id: "mer-self-expandable-stent",
    name: "Embolização de Míoma",
    description: "Tratamento não cirúrgico para miomas uterinos",
    specs: [
      "Acesso pela artéria femoral",
      "Uso de micropartículas embólicas",
      "Duração: 1-3 horas",
      "Alta hospitalar no mesmo dia"
    ],
    image: stentSamoroz,
    pdf: "/catalogos/embolizacao-mioma.pdf"
  },
  {
    id: "sinus-superflex-635",
    name: "Angioplastia Periférica",
    description: "Intervenção vascular para membros inferiores",
    specs: [
      "Cateteres balão de baixo perfil",
      "Guia 0.035″",
      "Anestesia local",
      "Recuperação ambulatorial"
    ],
    image: stentPeriferico,
    pdf: "/catalogos/angioplastia-periferica.pdf"
  }
];

const ProductDetail = () => {
    const { id } = useParams();
    const product = products.find(item => item.id === id);
  
    if (!product) {
      return (
        <div className="text-center text-red-600 py-16">
          Produto não encontrado. <br />
          <Link to="/" className="text-blue-600 underline">Voltar aos produtos</Link>
        </div>
      );
    }
  
    return (
      <section className="py-12 px-6 bg-gradient-to-tr from-red-400 to-violet-500 min-h-screen">
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Imagem */}
            <div className="md:w-1/3 p-8 bg-gray-100 flex items-center">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-64 object-contain"
              />
            </div>
            
            {/* Conteúdo */}
            <div className="md:w-2/3 p-8 space-y-4">
              <h2 className="text-3xl font-bold text-gray-900 mb-2 border-b pb-2">
                {product.name}
              </h2>
  
              <div className="space-y-4">
                <p className="text-gray-700 text-lg leading-relaxed">
                  {product.description}
                </p>
  
                <div className="bg-violet-50 p-4 rounded-lg">
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">
                    Especificações Técnicas:
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {product.specs.map((spec, index) => (
                      <li 
                        key={index}
                        className="flex items-start text-gray-600"
                      >
                        <span className="text-violet-600 mr-2">•</span>
                        {spec}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-gray-700 text-justify leading-relaxed">
                    {product.p1}
                  </p>
                  <p className="mt-2 text-gray-700 text-justify leading-relaxed">
                    {product.p2}
                  </p>
                  <p className="mt-2 text-gray-700 text-justify leading-relaxed">
                    {product.p3}
                  </p>
                </div>
              </div>
  
              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t">
                <a 
                  href={product.pdf} 
                  download 
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center font-medium"
                >
                  Baixar Catálogo
                </a>
                <Link 
                  to="/" 
                  className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors text-center"
                >
                  Voltar para Produtos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

export default ProductDetail;
