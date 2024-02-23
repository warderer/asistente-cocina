import Image from "next/image"
import {CaloriesSelector} from "../components/custom/CaloriesSelector"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { CounterClockwiseClockIcon } from "@radix-ui/react-icons"

// https://github.com/shadcn-ui/ui/blob/main/apps/www/app/examples/playground/page.tsx
export default function Home() {

  return (
    <main className="hidden h-full flex-col md:flex">
      <div className="container flex flex-col items-start justify-between space-y-2 py-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16">
        <h2 className="text-lg font-semibold">Asistente de Cocina Inteligente</h2>
      </div>

      <Separator />

      <Tabs defaultValue="complete" className="flex-1">
        <div className="container h-full py-6">
          <div className="grid h-full items-stretch gap-6 md:grid-cols-[1fr_200px]">
            <div className="hidden flex-col space-y-4 sm:flex md:order-2">
              <div className="grid gap-2">
                <h2>¿Qué tipo de Receta te gustaría?</h2>
              </div>

              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="desayuno">Desayuno</SelectItem>
                  <SelectItem value="comida">Comida</SelectItem>
                  <SelectItem value="cena">Cena</SelectItem>
                  <SelectItem value="postre">Postre</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Cocina" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cualquiera">Cualquiera</SelectItem>
                  <SelectItem value="mexicana">Mexicana</SelectItem>
                  <SelectItem value="francesa">Francesa</SelectItem>
                  <SelectItem value="italiana">Italiana</SelectItem>
                  <SelectItem value="china">China</SelectItem>
                  <SelectItem value="japonesa">Japonesa</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Dificultad" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cualquiera">Cualquiera</SelectItem>
                  <SelectItem value="mexicana">Principiante</SelectItem>
                  <SelectItem value="francesa">Intermedio</SelectItem>
                  <SelectItem value="italiana">Avanzado</SelectItem>
                </SelectContent>
              </Select>

              <CaloriesSelector defaultValue={[1000]} />

              <div className="flex items-center space-x-2 py-3">
                <Checkbox id="azucares" />
                <label
                  htmlFor="azucares"
                  className="text-sm leading-none"
                >
                  ¿Bajo en Azúcares?
                </label>
              </div>

              <div className="flex flex-col space-y-4">
                <div className="grid h-full gap-6 lg:grid-cols-1">
                  <div className="flex flex-col space-y-4">
                    <div className="flex flex-col space-y-2">
                      <Label htmlFor="ingredientes">Ingredientes</Label>
                      <Textarea
                        id="ingredientes"
                        placeholder="¿Con qué ingredientes cuentas?"
                      />
                    </div>
                  </div>

                </div>
                <div className="flex items-center space-x-2">
                  <Button>Sugerir Receta</Button>
                  <Button variant="secondary">
                    <span className="sr-only">Historial</span>
                    <CounterClockwiseClockIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>


            </div>
            <div className="md:order-1">
              <TabsContent value="complete" className="mt-0 border-0 p-0">
                <div className="flex h-full flex-col space-y-4">
                  <Textarea
                    placeholder="Elige las opciones en la barra de la derecha para generar una receta"
                    className="min-h-[400px] flex-1 p-4 md:min-h-[700px] lg:min-h-[700px]"
                  />
                </div>
              </TabsContent>
            </div>
          </div>
        </div>
      </Tabs>
    </main>
  );
}
