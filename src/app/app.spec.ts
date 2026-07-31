import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { PortfolioContent } from './models/portfolio.models';
import { PortfolioContentService } from './services/portfolio-content.service';
import { ThemeService } from './services/theme.service';
import { TEST_PROFILE } from './testing/portfolio-test-data';

describe('App', () => {
  let copiedText = '';

  const testContent: PortfolioContent = {
    profile: TEST_PROFILE,
    publications: [
      {
        year: '2025',
        type: 'Featured',
        title: 'Test publication',
        authors: 'Alex Morgan',
        venue: 'Test Conference',
        accent: 'violet',
        image: 'assets/publications/test-one.svg',
        imageAlt: 'Test artwork one',
        imageFit: 'cover',
        bibtex: '@article{test2025publication}',
        links: [{ label: 'PDF', url: '#', icon: 'copy' }],
      },
      {
        year: '2024',
        type: 'Paper',
        title: 'Second publication',
        authors: 'Alex Morgan',
        venue: 'Test Journal',
        accent: 'coral',
        image: 'assets/publications/test-two.svg',
        imageAlt: 'Test artwork two',
        imageFit: 'contain',
        bibtex: '@article{test2024publication}',
        links: [],
      },
      {
        year: '2023',
        type: 'Paper',
        title: 'Third publication',
        authors: 'Alex Morgan',
        venue: 'Test Workshop',
        accent: 'cyan',
        image: 'assets/publications/test-three.svg',
        imageAlt: 'Test artwork three',
        imageFit: 'cover',
        bibtex: '@article{test2023publication}',
        links: [],
      },
    ],
    projects: [],
    experience: [
      {
        category: 'experience',
        period: '2021 — Present',
        title: 'Associate Professor',
        organization: 'Northbridge University',
      },
    ],
  };

  beforeEach(async () => {
    copiedText = '';
    const storage = new Map<string, string>();
    Object.defineProperty(window, 'localStorage', {
      configurable: true,
      value: {
        getItem: (key: string) => storage.get(key) ?? null,
        setItem: (key: string, value: string) => storage.set(key, value),
      },
    });
    Object.defineProperty(window.navigator, 'clipboard', {
      configurable: true,
      value: {
        writeText: async (text: string) => {
          copiedText = text;
        },
      },
    });

    await TestBed.configureTestingModule({
      imports: [App],
    })
      .overrideProvider(PortfolioContentService, {
        useValue: {
          content: signal<PortfolioContent | null>(testContent),
          error: signal<string | null>(null),
        },
      })
      .compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the academic profile and key sections', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('h1')?.textContent).toContain(TEST_PROFILE.name);
    expect(compiled.querySelectorAll('.publication-card')).toHaveLength(3);
    expect(compiled.querySelector('#cv')).toBeTruthy();
    expect(compiled.querySelectorAll('.social-row a').length).toBeGreaterThanOrEqual(2);
    expect(compiled.querySelector('.intro-column h2 .accent')?.textContent).toContain('thoughtful');
    expect(compiled.querySelectorAll('.bibtex-trigger')).toHaveLength(3);
  });

  it('should switch and persist the color theme', () => {
    const themeService = TestBed.inject(ThemeService);
    const initialTheme = themeService.theme();

    themeService.toggle();

    const expectedTheme = initialTheme === 'light' ? 'dark' : 'light';
    expect(themeService.theme()).toBe(expectedTheme);
    expect(document.documentElement.dataset['theme']).toBe(expectedTheme);
    expect(window.localStorage.getItem('academic-theme')).toBe(expectedTheme);
  });

  it('should copy a publication citation as BibTeX', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const bibtexButton = fixture.nativeElement.querySelector(
      '.bibtex-trigger',
    ) as HTMLButtonElement;
    bibtexButton.click();
    fixture.detectChanges();
    const copyButton = fixture.nativeElement.querySelector('.copy-bibtex') as HTMLButtonElement;

    copyButton.click();
    await fixture.whenStable();

    expect(copiedText).toBe('@article{test2025publication}');
    expect(copyButton.textContent).toContain('Copied');
  });
});
