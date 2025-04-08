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
        <Card className="p-6 h-80">
          <CardContent>
            <h1 className="text-center font-bold text-2xl">GF Medika</h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVgKfkWj-7Q8iKjOeM9CWUmSJJOeRgwzNF6Q&s" alt="angioflex"  className="justify-self-center mt-10 rounded-md"/>
          </CardContent>
        </Card>
      </CarouselItem>
      <CarouselItem>
        <Card className="p-6 h-80">
          <CardContent>
            <h1 className="text-center font-bold text-2xl">Line Life</h1>
            <img src="https://static.wixstatic.com/media/8dffae_84ef3f8654154cfe8412b9d9302e080b~mv2.png/v1/fit/w_2500,h_1330,al_c/8dffae_84ef3f8654154cfe8412b9d9302e080b~mv2.png" alt="angioflex"  className="justify-self-center rounded-md max-h-60"/>
          </CardContent>
        </Card>
      </CarouselItem>
      <CarouselItem>
        <Card className="p-6 h-80">
          <CardContent>
            <h1 className="text-center font-bold text-2xl">Optimed</h1>
            <img src="https://media.licdn.com/dms/image/v2/C4D0BAQF83nA4j8if1Q/company-logo_200_200/company-logo_200_200/0/1630563036645/optimed_medizinische_instrumente_gmbh_logo?e=2147483647&v=beta&t=aZ6tNZPms4XtBgReJ44dmkAhLMTItt-2ku3ADefl8EU" alt="angioflex"  className="justify-self-center mt-10 rounded-md"/>
          </CardContent>
        </Card>
      </CarouselItem>
      <CarouselItem>
        <Card className="p-6 h-80">
          <CardContent>
            <h1 className="text-center font-bold text-2xl">QMedics</h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLILe1nPyJHkbrdb_Ge_2n4VUV0vlcyWxN-A&s" alt="angioflex"  className="justify-self-center mt-10 rounded-md"/>
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