import React from "react";

function About() {
    return (
      <section className="" id="sobre">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10 justify-items-center bg-gradient-to-tr from-red-400 to-violet-600 py-40">
          <div className="w-4/5 h-full border-solid border-2 border-zinc-50 text-center bg-zinc-100 p-10 rounded-lg shadow-2xl hover:transform hover:scale-105 transition duration-500">
            <h1 className="font-bold text-zinc-800 text-5xl">Sobre</h1>
            <p className="text-zinc-700 mt-10 text-xl font-bold">
              Temos nossa matriz situada na cidade de Ananindeua (PA) e atuando
              nas cidades de Macapá(AP), São Luís(MA) e Manaus (AM) e todo
              interior do Estado do Pará. Com base nas necessidades de nosso
              cientes buscamos sempre acompanhar as mercado, com novas
              tecnologias e grandes marcas, investindo em seus especialistas e
              colaboradores e na educação continuada de nossos parceiros.
            </p>
          </div>
          <div className="w-4/5 h-full border-solid border-2 border-zinc-50 text-center bg-zinc-100 p-10 rounded-lg shadow-2xl hover:transform hover:scale-105 transition duration-500">
            <h1 className="font-bold text-zinc-800 text-5xl">Missão</h1>
            <p className="text-zinc-700 mt-10 text-xl font-bold">
              Acreditamos que podemos alcançar o aprimoramento contínuo das
              equipes médicas oferecendo produtos de alta tecnologia que
              contribuem para um tratamento adequado aos pacientes. Sempre
              buscando hospitais referência em uma parceria sólida com foco na
              formação de profissionais, promovendo a região
            </p>
          </div>
        </div>
      </section>
    );
}

export default About;