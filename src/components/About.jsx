import React from "react";

function About() {
    return (
      <section className="" id="sobre">
        <div className="flex flex-col items-center bg-gradient-to-tr from-violet-600 to-red-400 py-20">
          <h1 className="font-bold text-zinc-50 text-5xl">Sobre</h1>
          
            <p className="text-center text-zinc-50 mt-10 text-lg px-6 font-bold">
              Temos nossa matriz situada na cidade de Ananindeua (PA) e atuando
              nas cidades de Macapá(AP), São Luís(MA) e Manaus (AM) e todo
              interior do Estado do Pará. Com base nas necessidades de nosso
              cientes buscamos sempre acompanhar as mercado, com novas
              tecnologias e grandes marcas, investindo em seus especialistas e
              colaboradores e na educação continuada de nossos parceiros.
            </p>
            <h1 className="font-bold text-zinc-50 text-5xl mt-20">Missão</h1>
            <p className="text-center text-zinc-50 mt-10 text-lg px-3 font-bold">
              Acreditamos que podemos alcançar o aprimoramento contínuo das
              equipes médicas oferecendo produtos de alta tecnologia que
              contribuem para um tratamento adequado aos pacientes. Sempre
              buscando hospitais referência em uma parceria sólida com foco na
              formação de profissionais, promovendo a região
            </p>
        </div>
      </section>
    );
}

export default About;