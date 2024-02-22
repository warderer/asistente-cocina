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

interface CaloriesSelectorProps {
  defaultValue: SliderProps["defaultValue"]
}

export function CaloriesSelector({
  defaultValue,
}: CaloriesSelectorProps) {
  const [value, setValue] = React.useState(defaultValue)

  return (
    <div className="grid gap-2 pt-2">
      <HoverCard openDelay={200}>
        <HoverCardTrigger asChild>
          <div className="grid gap-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="calories">Calorías</Label>
              <span className="w-12 rounded-md border border-transparent px-2 py-0.5 text-right text-sm text-muted-foreground hover:border-border">
                {value}
              </span>
            </div>
            <Slider
              id="calories"
              max={2500}
              min={500}
              defaultValue={value}
              step={100}
              onValueChange={setValue}
              className="[&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
              aria-label="Calories"
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