import { Component, inject, input, signal } from '@angular/core';
import { Profile } from '../../models/portfolio.models';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.html',
  styleUrl: './site-header.scss',
})
export class SiteHeader {
  readonly profile = input.required<Profile>();
  protected readonly menuOpen = signal(false);
  protected readonly themeService = inject(ThemeService);

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
