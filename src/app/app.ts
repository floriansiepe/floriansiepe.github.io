import { Component, inject } from '@angular/core';
import { Contact } from './components/contact/contact';
import { Cv } from './components/cv/cv';
import { Hero } from './components/hero/hero';
import { Projects } from './components/projects/projects';
import { Publications } from './components/publications/publications';
import { SiteFooter } from './components/site-footer/site-footer';
import { SiteHeader } from './components/site-header/site-header';
import { PortfolioContentService } from './services/portfolio-content.service';

@Component({
  selector: 'app-root',
  imports: [SiteHeader, Hero, Publications, Projects, Cv, Contact, SiteFooter],
  templateUrl: './app.html',
})
export class App {
  protected readonly contentService = inject(PortfolioContentService);
}
