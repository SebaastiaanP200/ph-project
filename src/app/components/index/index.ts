import { Component } from '@angular/core';
import { NavBar } from '../../shared/components/nav-bar/nav-bar';
import { Main } from '../../shared/components/main/main';
import { Footer } from '../../shared/components/footer/footer';
import { PageTitle } from '../../shared/components/page-title/page-title';

@Component({
  selector: 'app-index',
  imports: [NavBar, PageTitle, Main, Footer],
  templateUrl: './index.html',
  styleUrl: './index.scss',
})
export class Index {
  iTitle:string='PORTRAITS OF TIME';
  itTitle:string='TESTIMONIALS';


}
