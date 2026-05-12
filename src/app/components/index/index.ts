import { Component } from '@angular/core';
import { NavBar } from '../../shared/components/nav-bar/nav-bar';
import { Main } from '../../shared/components/main/main';
import { Footer } from '../../shared/components/footer/footer';

@Component({
  selector: 'app-index',
  imports: [NavBar, Main, Footer],
  templateUrl: './index.html',
  styleUrl: './index.scss',
})
export class Index {}
