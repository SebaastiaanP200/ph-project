import { Component, Input } from '@angular/core';
import { NavBar } from '../../shared/components/nav-bar/nav-bar';
import { Footer } from '../../shared/components/footer/footer';
import { PageTitle } from '../../shared/components/page-title/page-title';

export interface PreviewImage {
  id: string | number;
  url: string;
  name: string;
}

export interface PortfolioSection {
  link: string;
  preview: PreviewImage[];
}

@Component({
  selector: 'app-portfolio',
  imports: [NavBar, PageTitle, Footer],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})

export class Portfolio {
  pTitle:string='CAPTURING STORIES';

  @Input() portfolio: Record<string, PortfolioSection> = {}

  get sections(): PortfolioSection[] {
    return Object.values(this.portfolio);
  }

}
