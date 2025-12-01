import React from 'react';
import { useParams, Link } from 'react-router-dom';
import catPTA from '../assets/catPTA.png';
import stentSamoroz from '../assets/stentSamoroz.png';
import stentPeriferico from '../assets/stentPeriferico.png';

const products = [
  {
    id: "cateter-pta",
    name: "Cateter de dilatação farmacologico para PTA Reewarm",
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
    pdf: "/catalogos/Reewarm-PTX.pdf"
  },
  {
    id: "mer-self-expandable-stent",
    name: "MER Self-Expandable Stent",
    description: "Stent autoexpansível para tratamento de lesões carotidias",
    specs: [
        "Diâmetro: 5-10mm",
        "Comprimento: 20-60mm",
        "Material: liga de nitinol",
        "Cobertura: PTFE"
    ],
    p1: "O MER Self-Expandable Stent é um stent autoexpansível para tratamento de lesões carotidias. O procedimento é realizado com acesso pela artéria fermoral.",
    p2: "O stent é composto por uma liga de nitinol, que é um material biocompatível e resistente à corrosão. A cobertura do stent é feita de politetrafluoretileno (PTFE), um material que reduz a formação de trombos e a reestenose.",
    p3: "O MER Self-Expandable Stent é indicado para o tratamento de estenoses carotídeas sintomáticas e assintomáticas, com risco de acidente vascular cerebral (AVC) ou acidente isquêmico transitório (AIT).",
    image: stentSamoroz,
    pdf: "/catalogos/MER.pdf"
  },
  {
    id: "sinus-superflex-635",
    name: "Sinus SuperFlex 635",
    description: "Stent autoexpansível para tratamento de lesões periféricas",
    specs: [
        "Diâmetro: 5-10mm",
        "Comprimento: 20-200mm",
        "Material: liga de nitinol",
        "Cobertura: PTFE"
    ],
    p1: "O Sinus SuperFlex 635 é um stent autoexpansível para tratamento de lesões periféricas. O procedimento é realizado com acesso pela artéria fermoral.",
    p2: "O stent é composto por uma liga de nitinol, que é um material biocompatível e resistente à corrosão. A cobertura do stent é feita de politetrafluoretileno (PTFE), um material que reduz a formação de trombos e a reestenose.",
    p3: "O Sinus SuperFlex 635 é indicado para o tratamento de estenoses periféricas, como as lesões na artéria ilíaca, femoral e poplítea.",
    image: stentPeriferico,
    pdf: "/catalogos/STENT-SINUS.pdf"
  }
];

const ProductDetail = () => {
    const { id } = useParams();
    const product = products.find(item => item.id === id);
  
    if (!product) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-red-50 to-violet-50 flex items-center justify-center px-6">
          <div className="text-center bg-white p-12 rounded-2xl shadow-xl max-w-md">
            <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-violet-600 rounded-full mx-auto mb-6 flex items-center justify-center">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Produto não encontrado</h2>
            <p className="text-gray-600 mb-8">O produto que você procura não existe ou foi removido.</p>
            <Link 
              to="/" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-500 to-violet-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Voltar aos produtos
            </Link>
          </div>
        </div>
      );
    }
  
    return (
      <section className="min-h-screen bg-gradient-to-br from-red-50 via-white to-violet-50 py-20 px-6">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-red-400/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-violet-400/10 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Back button */}
          <Link 
            to="/"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 group transition-colors duration-300"
          >
            <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Voltar aos produtos
          </Link>

          {/* Main content card */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Image section */}
              <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 p-12 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-violet-50/50"></div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-red-400/20 to-violet-600/20 rounded-full blur-3xl animate-pulse"></div>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="relative w-full max-w-md h-auto object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
              
              {/* Content section */}
              <div className="p-8 lg:p-12 space-y-6">
                {/* Product title */}
                <div>
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-red-500 to-violet-600 text-white text-sm font-semibold rounded-full mb-4">
                    Produto Médico
                  </div>
                  <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                    {product.name}
                  </h1>
                  <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-violet-600 mt-4 rounded-full"></div>
                </div>

                {/* Description */}
                <p className="text-lg text-gray-600 leading-relaxed">
                  {product.description}
                </p>

                {/* Specs section */}
                <div className="bg-gradient-to-br from-red-50 to-violet-50 p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <svg className="w-6 h-6 mr-2 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Especificações Técnicas
                  </h3>
                  <ul className="space-y-3">
                    {product.specs.map((spec, index) => (
                      <li 
                        key={index}
                        className="flex items-start text-gray-700"
                      >
                        <svg className="w-5 h-5 text-violet-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="font-medium">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Detailed description */}
                <div className="space-y-4 pt-4">
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-700 leading-relaxed text-justify">
                      {product.p1}
                    </p>
                    <p className="text-gray-700 leading-relaxed text-justify">
                      {product.p2}
                    </p>
                    <p className="text-gray-700 leading-relaxed text-justify">
                      {product.p3}
                    </p>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <a 
                    href={product.pdf} 
                    download 
                    className="flex-1 inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-red-500 to-violet-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Baixar Catálogo PDF
                  </a>
                  <a
                    href="/#contato"
                    className="flex-1 inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-violet-300 hover:bg-gray-50 transition-all duration-300"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Fale Conosco
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Additional info section */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-red-200 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Qualidade Garantida</h3>
              <p className="text-gray-600 text-sm">Produtos certificados e aprovados pelas autoridades sanitárias.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-violet-100 to-violet-200 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Entrega Rápida</h3>
              <p className="text-gray-600 text-sm">Logística eficiente para atender sua necessidade com agilidade.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Suporte Técnico</h3>
              <p className="text-gray-600 text-sm">Equipe especializada pronta para auxiliar em suas dúvidas.</p>
            </div>
          </div>
        </div>
      </section>
    );
  };

export default ProductDetail;
