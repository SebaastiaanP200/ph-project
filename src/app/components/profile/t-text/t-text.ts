import { Component, Input } from '@angular/core';

export interface ProfileText {
  id?: string | number; // El id es opcional
  description: string;
}
@Component({
  selector: 'app-t-text',
  imports: [],
  templateUrl: './t-text.html',
  styleUrl: './t-text.scss',
})
export class TText {
  @Input() texts: ProfileText[] = [];

}
