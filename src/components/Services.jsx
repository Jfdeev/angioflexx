import React from "react";


function Services() {
    return (
        <section className="" id="servico">
                <h1 className="font-bold text-zinc-700 text-5xl mt-20 text-center">Serviços</h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10 justify-items-center ">
                    <div className="w-4/5 h-full border-solid border-2 border-zinc-50 text-center bg-zinc-100 p-10 rounded-lg shadow-2xl hover:transform hover:scale-105 transition duration-500 justify-items-center">
                        <h1 className="font-bold text-zinc-700 text-3xl">Angioplastia Femoral E Ilíaca</h1>
                        <img src="https://static.tuasaude.com/media/article/wu/yr/angioplastia_27998_l.jpg" alt="angioplastia" className=" rounded-md mt-12 w-4/5"/>
                    </div>
                    <div className="w-4/5 h-full border-solid border-2 border-zinc-50 text-center bg-zinc-100 p-10 rounded-lg shadow-2xl hover:transform hover:scale-105 transition duration-500 justify-items-center">
                        <h1 className="font-bold text-zinc-700 text-3xl">Angioplastia Coronaria</h1>
                        <img src="https://th.bing.com/th/id/OIP.kdNIJzr6uf-zN0E2Kr7T5wHaFj?rs=1&pid=ImgDetMain" alt="angioplastia coronaria" className="rounded-md mt-12 w-4/5 "/>
                    </div>
                    <div className="w-4/5 h-full border-solid border-2 border-zinc-50 text-center bg-zinc-100 p-10 rounded-lg shadow-2xl hover:transform hover:scale-105 transition duration-500 justify-items-center">
                        <h1 className="font-bold text-zinc-700 text-3xl">Embolização</h1>
                        <img src="https://th.bing.com/th/id/R.1f43e5a6d5a65aa5ab51cfbfd53a045f?rik=%2fDI7kCf1DWHqWg&riu=http%3a%2f%2fwww.fertibabyceara.com.br%2fwp-content%2fuploads%2f2018%2f02%2fembolizacao-de-miomas.png&ehk=UDqXwD3CjsNx%2fmhCp93e9SPoLOdwayi%2b37iWhSWmvzQ%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" alt="embolização"  className="rounded-md mt-12 w-4/5 h-40 lg:h-56 md:h-96"/>
                    </div>
                </div>
        </section>
    )
}

export default Services;