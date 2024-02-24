"use client"

import * as React from "react"
import { SliderProps } from "@radix-ui/react-slider"

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { UseFormReturn } from "react-hook-form"
interface CaloriesSelectorProps {
  defaultValue: SliderProps["defaultValue"],
  form: UseFormReturn
}

export function CaloriesSelector({
  defaultValue, form
}: CaloriesSelectorProps) {

  return (
    <div className="grid gap-2 pt-2">
      <HoverCard openDelay={200}>
        <HoverCardTrigger asChild>
          <div className="grid gap-4">
            <FormField
              control={form.control}
              name="price"
              render={({ field: { value=defaultValue, onChange } }) => (
                <FormItem>
                  <div className="flex items-center justify-between">
                    <FormLabel>Calorías</FormLabel>
                    <span className="w-12 rounded-md border border-transparent px-2 py-0.5 text-right text-sm text-muted-foreground hover:border-border">
                      {value}
                    </span>
                  </div>
                  <FormControl>
                    <Slider
                      min={500}
                      max={2500}
                      step={100}
                      defaultValue={[value]}
                      onValueChange={onChange}
                      className="[&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
                      aria-label="Calories"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </HoverCardTrigger>
        <HoverCardContent
          align="start"
          className="w-[260px] text-sm"
          side="left"
        >
          Las calorías son la energía que se encuentra en los alimentos y es aprovechada por el cuerpo para seguir funcionando.

          En términos de calorías totales diarias, las recomendaciones pueden oscilar desde las <strong>1,500 hasta 2,300 para una mujer adulta</strong>, mientras que para los <strong>hombres pueden ir desde las 1,800 hasta las 2,500 calorías.</strong>
        </HoverCardContent>
      </HoverCard>
    </div>
  )
}