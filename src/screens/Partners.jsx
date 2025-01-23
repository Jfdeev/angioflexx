import React from "react";
import Carrosel from '../components/Carouseul.jsx'



function Partners() {
    return (
        <section id="parceiros">
            <div className="">
                <h1 className="font-bold text-zinc-800 text-5xl mt-20 text-center">Parceiros</h1>
                <div className="mt-20 items-center mb-20 max-sm:overflow-hidden">
                    <Carrosel />
                </div>
            </div>
        </section>
    )
}

export default Partners;