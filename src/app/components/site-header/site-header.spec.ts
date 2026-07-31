import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Theme } from '../../services/theme.service';
import { ThemeService } from '../../services/theme.service';
import { TEST_PROFILE } from '../../testing/portfolio-test-data';
import { SiteHeader } from './site-header';

describe('SiteHeader', () => {
  it('renders the profile and handles menu and theme actions', () => {
    const theme = signal<Theme>('light');
    let themeToggles = 0;

    TestBed.configureTestingModule({
      imports: [SiteHeader],
      providers: [
        {
          provide: ThemeService,
          useValue: {
            theme,
            toggle: () => {
              themeToggles += 1;
              theme.set('dark');
            },
          },
        },
      ],
    });

    const fixture = TestBed.createComponent(SiteHeader);
    fixture.componentRef.setInput('profile', TEST_PROFILE);
    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;
    const menuButton = element.querySelector('.menu-toggle') as HTMLButtonElement;
    const themeButton = element.querySelector('.theme-toggle') as HTMLButtonElement;

    expect(element.querySelector('.brand')?.textContent).toContain(TEST_PROFILE.name);
    menuButton.click();
    fixture.detectChanges();
    expect(element.querySelector('.nav')?.classList).toContain('nav-open');

    themeButton.click();
    fixture.detectChanges();
    expect(themeToggles).toBe(1);
    expect(themeButton.getAttribute('aria-label')).toContain('light');
  });
});
