import { Component } from '@angular/core';
import { NavBar } from '../../shared/components/nav-bar/nav-bar';
import { Main } from '../../shared/components/main/main';
import { Footer } from '../../shared/components/footer/footer';
import { PageTitle } from '../../shared/components/page-title/page-title';

@Component({
  selector: 'app-contact',
  imports: [NavBar, PageTitle, Main, Footer],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  cTitle:string='CONTACT FORMULARY';
}
