import { TestBed } from '@angular/core/testing';
import { TEST_PROFILE } from '../../testing/portfolio-test-data';
import { Hero } from './hero';

describe('Hero', () => {
  it('renders configurable profile content and links the CV', () => {
    TestBed.configureTestingModule({ imports: [Hero] });
    const fixture = TestBed.createComponent(Hero);
    fixture.componentRef.setInput('profile', TEST_PROFILE);
    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelector('h1')?.textContent).toContain(TEST_PROFILE.name);
    expect((element.querySelector('.portrait') as HTMLImageElement).src).toContain(
      TEST_PROFILE.image,
    );
    expect(element.querySelectorAll('.social-row a')).toHaveLength(2);
    expect(element.querySelectorAll('.metrics > div')).toHaveLength(2);
    expect(element.querySelector('h2 .accent')?.textContent).toContain('thoughtful');

    const cvLink = element.querySelector('.button-secondary') as HTMLAnchorElement;
    expect(cvLink.getAttribute('href')).toBe(TEST_PROFILE.cvUrl);
    expect(cvLink.target).toBe('_blank');
    expect(cvLink.hasAttribute('download')).toBe(false);
  });
});
