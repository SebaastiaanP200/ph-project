import { Component, Input } from '@angular/core';

export interface ProfileImage {
  id: string | number;
  url: string;
  name: string;
}
@Component({
  selector: 'app-t-image',
  imports: [],
  templateUrl: './t-image.html',
  styleUrl: './t-image.scss',
})

export class TImage {
  @Input() profile: ProfileImage[] = [];
}
