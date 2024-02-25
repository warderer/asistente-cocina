"use client"
import Image from "next/image"
import { useState } from "react"
import { CaloriesSelector } from "../components/custom/CaloriesSelector"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { sendRecipePrompt } from "@/services/recipePrompt_service"
import MDEditor from "@uiw/react-md-editor";
import { CounterClockwiseClockIcon } from "@radix-ui/react-icons"
import "@uiw/react-markdown-preview/markdown.css";
import "./page.css"

// https://github.com/shadcn-ui/ui/blob/main/apps/www/app/examples/playground/page.tsx
export default function Home() {
  const [recipe, setRecipe] = useState('Para comenzar, por favor elige entre las opciones en la barra de la derecha para generar una receta.')
  const form = useForm()

  function createPrompt(content: object): object {
    const prompt = {
      messages: [
        { role: "system", content: "Eres un Chef recomendador de recetas de cocina, vas a recomendar en idioma español una receta de cocina tomando en cuenta la siguiente información: tipo, que se refiere al momento en que se consume el alimento; cocina, que se refiere al estilo de cocina del platillo; proteina, que se refiere al tipo de carne principal del platillo; dificultad, que se refiere a la cantidad de pasos, tecnicas y experiencia que se requiere para cocinar la receta; calorias, que se refiere a un aproximado de la cantidad de calorias que quiero que tenga el platillo; bajo en azucar, que si es true sugiere un plato con bajo contenido en azucar, en caso de que sea false puedes ignorar este apartado; ingredientes, donde analiza la lista de ingredientes con que cuento para que el platillo que me recomiendes los incluya. Responde colocando primero como titulo principal y en mayúsculas el nombre de la receta, seguido del titulo Ingredientes con el listado de ingredientes, y finalmente el titulo Preparación donde me indiques el paso a paso de la elaboración del platillo, recuerda añadir un espacio adicional entre cada titulo" },
        { role: "user", content: JSON.stringify(content) },
      ],
      temperature: 0.7,
      max_tokens: -1,
      stream: false,
    };

    return prompt;
  }

  async function onSubmit(data: any)  {
    const prompt = createPrompt(data);
    const response = await sendRecipePrompt(prompt)
    setRecipe(response?.data)
    // console.log(response)
  }

  return (
    <main className="h-dvh flex-col md:flex">
      <div className="flex flex-col items-start justify-center space-y-2 py-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16 bg-primary gap-x-6">
        <Image
          src="/chefxpert-white.png"
          width={200}
          height={120}
          alt="ChefXpert"
        />
        <h2 className="text-lg font-semibold text-white">ASISTENTE DE COCINA INTELIGENTE</h2>
      </div>

      <Separator />

      <Tabs defaultValue="complete" className="flex-1">
        <div className="container h-full py-6">
          <div className="grid h-full items-stretch gap-6 md:grid-cols-[1fr_200px]">
            <div className="flex-col space-y-4 sm:flex md:order-2">
              <div className="grid gap-2">
                <h2>¿Qué tipo de Receta te gustaría?</h2>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>

                  <FormField
                    control={form.control}
                    name="tipo"
                    render={({ field }) => (
                      <FormItem>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="w-[180px]">
                              <SelectValue placeholder="Tipo" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="desayuno">Desayuno</SelectItem>
                            <SelectItem value="comida">Comida</SelectItem>
                            <SelectItem value="cena">Cena</SelectItem>
                            <SelectItem value="postre">Postre</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="cocina"
                    render={({ field }) => (
                      <FormItem className="mt-2">
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="w-[180px]">
                              <SelectValue placeholder="Cocina" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="cualquiera">Cualquiera</SelectItem>
                            <SelectItem value="mexicana">Mexicana</SelectItem>
                            <SelectItem value="francesa">Francesa</SelectItem>
                            <SelectItem value="italiana">Italiana</SelectItem>
                            <SelectItem value="china">China</SelectItem>
                            <SelectItem value="japonesa">Japonesa</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="proteina"
                    render={({ field }) => (
                      <FormItem className="mt-2">
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="w-[180px]">
                              <SelectValue placeholder="Proteina" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="cualquier-proteina">Cualquiera</SelectItem>
                            <SelectItem value="res">Res</SelectItem>
                            <SelectItem value="cerdo">Cerdo</SelectItem>
                            <SelectItem value="pollo">Pollo</SelectItem>
                            <SelectItem value="camaron">Camaron</SelectItem>
                            <SelectItem value="pavo">Pavo</SelectItem>
                            <SelectItem value="pescado">Pescado</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="dificultad"
                    render={({ field }) => (
                      <FormItem className="mt-2">
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="w-[180px]">
                              <SelectValue placeholder="Dificultad" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="cualquier-dificultad">Cualquiera</SelectItem>
                            <SelectItem value="principiante">Principiante</SelectItem>
                            <SelectItem value="intermedio">Intermedio</SelectItem>
                            <SelectItem value="avanzado">Avanzado</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <CaloriesSelector defaultValue={[1200]} form={form} />

                  <div className="my-5 ">
                    <FormField
                      control={form.control}
                      name="bajo_en_azucar"
                      render={({ field }) => (
                        <FormItem className="flex items-center space-x-2">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="text-sm leading-none mt-0 ">
                            <FormLabel>
                              ¿Bajo en Azúcares?
                            </FormLabel>
                          </div>
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="ingredientes"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Ingredientes:</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="¿Con qué ingredientes cuentas?"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex flex-col space-y-4 mt-4">
                    <div className="flex items-center space-x-2">
                      <Button type="submit">Sugerir Receta</Button>
                      <Button variant="secondary">
                        <span className="sr-only">Historial</span>
                        <CounterClockwiseClockIcon className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                </form>
              </Form>

            </div>

            <div className="md:order-1">
              <TabsContent value="complete" className="mt-0 border-0 p-0">
                <div className="flex h-full flex-col space-y-4">
                  <MDEditor.Markdown source={recipe} skipHtml={true} className="min-h-[400px] flex-1 p-4 md:min-h-[700px] lg:min-h-[700px]" />
                </div>

              </TabsContent>
            </div>
          </div>
        </div>
      </Tabs>
      <div className="flex flex-col items-start justify-center space-y-2 py-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16 bg-slate-50 gap-x-6">
        <Image
          src="/chefxpert.png"
          width={200}
          height={120}
          alt="ChefXpert"
        />
        <p className="text-sm font-semibold ">Desarrollado por César Guerra & Benjamín Tass - Alumnos Doctorado en Sistemas Computacionales de la UNISUR ©2024</p>
      </div>
    </main>
  );
}
