import React from "react";

function Header() {
    return (
        <header className="bg-zinc-200 text-zinc-800">
            <nav className="mx-auto flex max-w-7x1 items-center justify-between p-6 lg:px-8">
                <div className="flex">
                    <a href="#" className="bg-white -m-1.5 p-1.5 shadow-xl rounded-md">
                        <img src="https://media.licdn.com/dms/image/v2/D5603AQE6HsQNBgwvEA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1679249908766?e=2147483647&v=beta&t=RLhNa12qaiLH6mIdy68hdIcgJjsEGzUBpKnUIRnEv7g" alt="angioflex" className="w-16 rounded-md " />
                    </a>
                </div>
                <div className="flex lg:flex-1 justify-end">
                    <a href="#inicio" className="p-2 hover:bg-zinc-100 rounded-md">Inicio</a>
                    <a href="#sobre" className="p-2 hover:bg-zinc-100 rounded-md">Sobre</a>
                    <a href="#servico" className="p-2 hover:bg-zinc-100 rounded-md">Serviços</a>
                    <a href="#contato" className="p-2 hover:bg-zinc-100 rounded-md">Contato</a>
                </div>
            </nav>
        </header>
    );
}

export default Header;