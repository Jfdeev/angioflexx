import * as React from "react"
 
import { Button } from "./ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"
 
function CardWithForm() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Fale Conosco</CardTitle>
        <CardDescription>Nós mande uma mensagem para tirar sua possivel duvida</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Nome</Label>
              <Input id="name" placeholder="Seu Nome"/>
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Seu Email"/>
              <Label htmlFor="phone">Mensagem</Label>
              <Textarea id="phone" placeholder="Sua Mensagem"/>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Enviar</Button>
      </CardFooter>
    </Card>
  )
}

export default CardWithForm;