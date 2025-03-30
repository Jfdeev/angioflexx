// src/data/productsData.js
import catPTA from '../assets/catPTA.png';

export const products = [
    {
        id: "cateter-pta",
        name: "Cateter de dilatação para PTA Reewarm",
        description: "Indicado para a angioplastia transluminal percutânea (PTA) no vaso periférico.",
        specs: [
            "Diâmetro: 2.0-7.0mm",
            "Comprimento: 90mm, 130mm, 150mm",
            "Material: balão de poliuretano",
            "Pressão de inflação: 6-20 atm"
        ],
        image: catPTA,
        pdf: "/catalogos/cateter-pta.pdf"
    },
    {
        id: "mer-self-expandable-stent",
        name: "MER Self-Expandable Stent",
        description: "Stent autoexpansível para tratamento de lesões vasculares.",
        specs: [
            "Diâmetro: 5-10mm",
            "Comprimento: 20-60mm",
            "Material: liga de nitinol",
            "Cobertura: PTFE"
        ],
        image: stentSamoroz
    },
    {
        id: "sinus-superflex-635",
        name: "Sinus SuperFlex 635",
        description: "Stent autoexpansível para tratamento de lesões periféricas.",
        specs: [
            "Diâmetro: 5-10mm",
            "Comprimento: 20-60mm",
            "Material: liga de nitinol",
            "Cobertura: PTFE"
        ],
        image: stentPeriferico
    }
];

export default products;
