import { Component, input } from '@angular/core';
import { Profile } from '../../models/portfolio.models';

@Component({
  selector: 'app-site-footer',
  templateUrl: './site-footer.html',
  styleUrl: './site-footer.scss',
})
export class SiteFooter {
  readonly profile = input.required<Profile>();
  protected readonly currentYear = new Date().getFullYear();
}
