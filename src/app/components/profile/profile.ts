import { Component } from '@angular/core';
import { NavBar } from '../../shared/components/nav-bar/nav-bar';
import { Main } from '../../shared/components/main/main';
import { Footer } from '../../shared/components/footer/footer';
import { PageTitle } from '../../shared/components/page-title/page-title';


@Component({
  selector: 'app-profile',
  imports: [NavBar, PageTitle, Main, Footer],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {
  prTitle:string='MY PROFILE';

}
