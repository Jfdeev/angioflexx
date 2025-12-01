import React from "react";
import logo from "../assets/hero.png";
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
      navigation: [
        { name: 'Início', href: '#inicio' },
        { name: 'Sobre', href: '#sobre' },
        { name: 'Serviços', href: '#servico' },
        { name: 'Produtos', href: '#produtos' },
        { name: 'Parceiros', href: '#parceiros' },
        { name: 'Contato', href: '#contato' }
      ],
      contact: [
        { label: 'Email', value: 'angioflex@angioflex.com.br' },
        { label: 'Telefone', value: '(91) 2122-0978' },
        { label: 'WhatsApp', value: '(91) 98182-7371' }
      ],
      social: [
        { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-500' },
        { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-500' },
        { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-blue-600' }
      ]
    };

    return (
      <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        {/* Decorative top border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-violet-600"></div>

        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <img src={logo} alt="Angioflex Logo" className="w-16 h-16 object-contain" />
                <span className="text-2xl font-bold bg-gradient-to-r from-red-400 to-violet-500 bg-clip-text text-transparent">
                  Angioflex
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Soluções inovadoras em tecnologia médica para cuidados cardiovasculares de excelência.
              </p>
              
              {/* Social media */}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                  Redes Sociais
                </h3>
                <div className="flex space-x-4">
                  {footerLinks.social.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        className={`p-3 md:p-2 bg-white/5 rounded-lg ${item.color} transition-all duration-300 hover:bg-white/10 hover:scale-110`}
                        aria-label={item.name}
                      >
                        <Icon size={20} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Navegação</h3>
              <ul className="space-y-3">
                {footerLinks.navigation.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-red-500 to-violet-600 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact info */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Contato</h3>
              <ul className="space-y-4">
                {footerLinks.contact.map((item) => (
                  <li key={item.label} className="text-gray-400">
                    <span className="text-sm text-gray-500 block mb-1">{item.label}</span>
                    <span className="text-white font-medium">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Info & CTA */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Suporte</h3>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="flex items-start space-x-3 mb-4">
                  <svg className="w-6 h-6 text-violet-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Ficou com dúvidas?</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Entre em contato através de nossos canais de atendimento para mais informações.
                    </p>
                  </div>
                </div>
                <a
                  href="#contato"
                  className="block w-full py-2 px-4 bg-gradient-to-r from-red-500 to-violet-600 text-white text-center font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Fale Conosco
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-8 border-t border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm text-center md:text-left">
                &copy; {currentYear} Angioflex. Todos os direitos reservados.
              </p>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-center">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Política de Privacidade
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Termos de Uso
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative background */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"></div>
      </footer>
    );
}

export default Footer;

