import React from "react";
import logo from "../assets/hero.png";

function Hero() {
    return (
        <section id="inicio">
            <div className="flex flex-col lg:flex-row items-center justify-center mt-32 mb-20">
                <div className="align-center">
                    <img src={logo} alt="sla" className="w-52 lg:w-60"/>
                </div>
                <div className="text-zinc-900 text-center">
                    <h1 className="text-3xl font-bold">Seja bem-vindo a AngioFlex</h1>
                    <p className="text-lg">O melhor lugar para você cuidar da sua saúde</p>
                </div>
            </div>
        </section>
    )
}

export default Hero;