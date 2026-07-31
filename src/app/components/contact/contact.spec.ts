import { TestBed } from '@angular/core/testing';
import { TEST_PROFILE } from '../../testing/portfolio-test-data';
import { Contact } from './contact';

describe('Contact', () => {
  it('renders configurable contact content and email link', () => {
    TestBed.configureTestingModule({ imports: [Contact] });
    const fixture = TestBed.createComponent(Contact);
    fixture.componentRef.setInput('profile', TEST_PROFILE);
    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;
    const emailLink = element.querySelector('.contact-button') as HTMLAnchorElement;

    expect(element.querySelector('h2')?.textContent).toContain(TEST_PROFILE.contactHeading);
    expect(element.querySelector('p')?.textContent).toContain(TEST_PROFILE.contactText);
    expect(emailLink.getAttribute('href')).toBe(TEST_PROFILE.contactLink.url);
    expect(emailLink.textContent).toContain(TEST_PROFILE.contactLink.label);
  });
});
