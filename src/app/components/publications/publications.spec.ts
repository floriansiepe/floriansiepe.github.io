import { TestBed } from '@angular/core/testing';
import { TEST_PROFILE, TEST_PUBLICATIONS } from '../../testing/portfolio-test-data';
import { Publications } from './publications';

describe('Publications', () => {
  it('renders links and copies an expanded BibTeX citation', async () => {
    let copiedText = '';
    Object.defineProperty(window.navigator, 'clipboard', {
      configurable: true,
      value: {
        writeText: async (text: string) => {
          copiedText = text;
        },
      },
    });

    TestBed.configureTestingModule({ imports: [Publications] });
    const fixture = TestBed.createComponent(Publications);
    fixture.componentRef.setInput('publications', TEST_PUBLICATIONS);
    fixture.componentRef.setInput('profile', TEST_PROFILE);
    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelector('.publication-card h3')?.textContent).toContain(
      TEST_PUBLICATIONS[0].title,
    );
    expect(element.querySelectorAll('.paper-links a')).toHaveLength(2);
    expect((element.querySelector('.publication-art img') as HTMLImageElement).alt).toBe(
      TEST_PUBLICATIONS[0].imageAlt,
    );

    (element.querySelector('.bibtex-trigger') as HTMLButtonElement).click();
    fixture.detectChanges();
    expect(element.querySelector('.bibtex-box')).toBeTruthy();

    (element.querySelector('.copy-bibtex') as HTMLButtonElement).click();
    await fixture.whenStable();
    expect(copiedText).toBe(TEST_PUBLICATIONS[0].bibtex);
    expect(element.querySelector('.copy-bibtex')?.textContent).toContain('Copied');
  });

  it('renders an honest empty state when no publications are configured', () => {
    TestBed.configureTestingModule({ imports: [Publications] });
    const fixture = TestBed.createComponent(Publications);
    fixture.componentRef.setInput('publications', []);
    fixture.componentRef.setInput('profile', TEST_PROFILE);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.empty-publications')?.textContent).toContain(
      'will appear here',
    );
  });
});
