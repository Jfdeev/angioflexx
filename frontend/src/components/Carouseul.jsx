import * as React from "react"
 
import { Card, CardContent } from "./ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel"
 
function CarouselDemo() {
  const partners = [
    { name: "GF Medika", description: "Soluções em equipamentos médicos" },
    { name: "Line Life", description: "Tecnologia em saúde cardiovascular" },
    { name: "Optimed", description: "Instrumentos médicos de precisão" },
    { name: "QMedics", description: "Inovação em dispositivos médicos" },
    { name: "Brosmed", description: "Equipamentos hospitalares avançados" }
  ];

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-6xl mx-auto"
    >
      <CarouselContent className="-ml-4">
        {partners.map((partner, index) => (
          <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
            <div className="group p-1">
              {/* Gradient border effect */}
              <div className="relative h-full">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-400 to-violet-600 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur"></div>
                
                <Card className="relative border-2 border-gray-200 hover:border-transparent transition-all duration-300 h-full">
                  <CardContent className="flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 min-h-[300px] sm:min-h-[320px] md:h-80">
                    {/* Partner icon placeholder */}
                    <div className="w-32 h-32 mb-6 bg-gradient-to-br from-red-50 to-violet-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-16 h-16 text-gray-400 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-violet-600 group-hover:bg-clip-text transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>

                    {/* Partner name */}
                    <h3 className="text-2xl font-bold text-gray-800 text-center mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-violet-600 group-hover:bg-clip-text transition-all duration-300">
                      {partner.name}
                    </h3>

                    {/* Partner description */}
                    <p className="text-sm text-gray-600 text-center">
                      {partner.description}
                    </p>

                    {/* Decorative line */}
                    <div className="w-0 group-hover:w-16 h-1 bg-gradient-to-r from-red-500 to-violet-600 mt-4 rounded-full transition-all duration-500"></div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hover:bg-gradient-to-r hover:from-red-500 hover:to-violet-600 hover:text-white transition-all duration-300" />
      <CarouselNext className="hover:bg-gradient-to-r hover:from-red-500 hover:to-violet-600 hover:text-white transition-all duration-300" />
    </Carousel>
  )
}

export default CarouselDemo;