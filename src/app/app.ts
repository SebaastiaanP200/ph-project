import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Index } from './components/index';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Index, ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ph-project');
}
