import React from "react";

function Contact() {
  return (
    <section id="contato">
      <div className="flex flex-col mt-10 bg-gradient-to-tr from-red-400 to-violet-600 py-10">
          <div className="flex flex-col w-4/5 mx-auto lg:w-1/2">
            <h1 className="font-bold text-5xl text-zinc-100 mb-5">Contato</h1>
            <div className="text-zinc-100 text-lg mb-5">
              <p><strong>Email:</strong> angioflex@angioflex.com.br</p>
              <p><strong>Telefone:</strong>  (91) 2122-0978</p>
              <p><strong>Celular: </strong> (91) 98182-7371</p>
              <p><strong>Celular: </strong> (91) 98308-9912</p>

            </div>
            <p className="text-zinc-100 text-lg mb-5">Entre em contato conosco para mais informações sobre nossos produtos e serviços.</p>
          </div>
      </div>
    </section>
  );
}

export default Contact;