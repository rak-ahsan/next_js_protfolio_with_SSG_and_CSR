'use client'
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function CarouselSkill() {
  const plugin = React.useRef(
    Autoplay({ delay: 1000, stopOnInteraction: true })
  );

  const skillImages = [
    { name: 'React', path: '/react.png' },
    { name: 'Larval', path: '/laravel.png' },
    { name: 'mysql', path: '/mysql.png' },
    { name: 'php', path: '/php.png' },
    { name: 'express', path: '/express.png' },
    { name: 'next', path: '/next.png' },
    { name: 'css', path: '/css.png' },
    { name: 'tailwind', path: '/tailwind.png' },
    { name: 'html', path: '/html.png' },
    { name: 'bootstrap', path: '/bootstrap.png' },
    { name: 'js', path: '/js.png' },
    { name: 'redux', path: '/redux.png' },
  ];

  // Duplicate skill images to ensure there are 10 sliders
  const duplicatedSkillImages = Array.from({ length: 15 }).map((_, index) => skillImages[index % skillImages.length]);

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-sm"
    >
      <CarouselContent className="-ml-1">
        {skillImages.map((skill, index) => (
          <CarouselItem key={index} className="pl-1 basis-14">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-1">
                  <Image src={skill.path} alt={skill.name} width={100} height={100}/>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
