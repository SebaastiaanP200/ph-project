import { Component } from '@angular/core';
import { NavBar } from '../../shared/components/nav-bar/nav-bar';
import { Main } from '../../shared/components/main/main';
import { Footer } from '../../shared/components/footer/footer';
import { PageTitle } from '../../shared/components/page-title/page-title';


@Component({
  selector: 'app-portfolio',
  imports: [NavBar, PageTitle, Main, Footer],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio {
  pTitle:string='CAPTURING STORIES';
}
