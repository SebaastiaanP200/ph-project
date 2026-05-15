import { Routes } from '@angular/router';
import { Index } from './components/index';
import { Profile } from './components/profile/profile';
import { Portfolio } from './components/portfolio/portfolio';
import { Contact } from './components/contact/contact';

export const routes: Routes = [
  {path:'index', component:Index},
  {path:'profile', component:Profile},
  {path:'portfolio', component:Portfolio},
  {path:'contact', component:Contact}
];
