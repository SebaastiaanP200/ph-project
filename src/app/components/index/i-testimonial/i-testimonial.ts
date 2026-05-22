import { Component, Input } from '@angular/core';

export interface Testimony {
  id: string | number;
  name: string;
  url: string;
  description: string;
}
@Component({
  selector: 'app-i-testimonial',
  imports: [],
  templateUrl: './i-testimonial.html',
  styleUrl: './i-testimonial.scss',
})
export class ITestimonial {

  @Input() testimonies: Testimony[] = [];

}
