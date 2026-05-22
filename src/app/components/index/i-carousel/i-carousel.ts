import { Component, Input } from '@angular/core';

// Definimos la estructura de la imagen en TypeScript
export interface CarouselImage {
  url: string;
  name: string;
}
@Component({
  selector: 'app-i-carousel',
  imports: [],
  templateUrl: './i-carousel.html',
  styleUrl: './i-carousel.scss',
})

export class ICarousel {
  // Recibimos el array desde un componente padre
  @Input() carousel: CarouselImage[] = [];

  // Reemplaza el bucle for del JS original limitando el array a 4 elementos
  get limitedCarousel(): CarouselImage[] {
    return this.carousel.slice(0, 4);
  }
  
}
