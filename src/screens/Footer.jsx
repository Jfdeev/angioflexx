import React from "react";
import logo from "../assets/hero.png";
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../components/ui/accordion"
  

const Footer = () => {
    return (
      <div className="w-full bg-zinc-300 text-zinc-900 p-4">
        <div className="">
          <img src={logo} alt="Logo" className="w-32 h-32 mt-12" />
          <p className="font-bold">Fazendo do mundo um lugar melhor</p>
        </div>

        <div className="mt-10">
          <h1 className="mb-5 font-semibold">Redes Sociais</h1>
          <div className="flex mb-5">
            <a href="" className="mr-5">
              <Facebook size={32} />
            </a>
            <a href="" className="mr-5">
              <Instagram size={32} />
            </a>
            <a href="" className="mr-5">
              <Linkedin size={32} />
            </a>
          </div>
        </div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Ficou com Duvidas?</AccordionTrigger>
            <AccordionContent>
              Nos chame em nosso email ou numero publico para mais informações
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <p>&copy; 2021 - Todos os direitos reservados</p>
      </div>
    );
}

export default Footer;

