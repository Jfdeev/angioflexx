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
  return (
    <Carousel
    opts={{
      align: "start",
    }}
    className="w-full max-w-xl mx-auto"
  >
    <CarouselContent>
      <CarouselItem>
        <Card className="p-6">
          <CardContent>
            <h1 className="text-center font-bold text-2xl">Scitech</h1>
            <img src="https://th.bing.com/th/id/OIP.3gakXdVgd672HF9UUv_s9AHaDt?rs=1&pid=ImgDetMain" alt="scitech"  className="justify-self-center mt-10 rounded-md"/>
          </CardContent>
        </Card>
      </CarouselItem> 
      <CarouselItem>
        <Card className="p-6">
          <CardContent>
            <h1 className="text-center font-bold text-2xl">Lepu Medical</h1>
            <img src="https://th.bing.com/th/id/OIP.3gakXdVgd672HF9UUv_s9AHaDt?rs=1&pid=ImgDetMain" alt="angioflex"  className="justify-self-center mt-10 rounded-md"/>
          </CardContent>
        </Card>
      </CarouselItem>
      <CarouselItem>
        <Card className="p-6">
          <CardContent>
            <h1 className="text-center font-bold text-2xl">Embosoft</h1>
            <img src="https://th.bing.com/th/id/OIP.3gakXdVgd672HF9UUv_s9AHaDt?rs=1&pid=ImgDetMain" alt="angioflex"  className="justify-self-center mt-10 rounded-md"/>
          </CardContent>
        </Card>
      </CarouselItem>
      <CarouselItem>
        <Card className="p-6">
          <CardContent>
            <h1 className="text-center font-bold text-2xl">Optimed</h1>
            <img src="https://th.bing.com/th/id/OIP.3gakXdVgd672HF9UUv_s9AHaDt?rs=1&pid=ImgDetMain" alt="angioflex"  className="justify-self-center mt-10 rounded-md"/>
          </CardContent>
        </Card>
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
  )
}

export default CarouselDemo;