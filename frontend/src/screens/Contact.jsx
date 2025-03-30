import React from "react";
import {Label} from "../components/ui/label";
import {Input} from "../components/ui/input";
import {Textarea} from "../components/ui/textarea";

function Contact() {
  return (
    <section id="contato">
      <div className="flex flex-col mt-10 bg-gradient-to-tr from-red-400 to-violet-600 py-10">
          <div className="flex flex-col w-4/5 mx-auto lg:w-1/2">
            <h1 className="font-bold text-5xl text-zinc-100 mb-5">Contato</h1>
            <div className="text-zinc-100 text-lg mb-5">
              <p><strong>Email:</strong> angioflex@angioflex.com.br</p>
              <p><strong>Telefone:</strong> (XX) XXXX-XXXX</p>
              <p><strong>Celular: </strong> (XX) XXXX-XXXX</p>
            </div>
            <p className="text-zinc-100 text-lg mb-5">Entre em contato conosco para mais informações sobre nossos produtos e serviços.</p>
            <div className=" mt-5">
              <h2 className="mb-7 font-bold text-zinc-100 text-3xl">Onde Estamos?</h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d352.5532520651177!2d-48.40412263440867!3d-1.3658421996733274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a461cd68a83549%3A0x3b068c5f69a8304b!2sNutriflex!5e0!3m2!1spt-BR!2sbr!4v1737743662137!5m2!1spt-BR!2sbr"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Google Maps"
              />
            </div>
          </div>
      </div>
    </section>
  );
}

export default Contact;