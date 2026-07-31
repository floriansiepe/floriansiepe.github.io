import { TestBed } from '@angular/core/testing';
import { TEST_PROFILE } from '../../testing/portfolio-test-data';
import { SiteFooter } from './site-footer';

describe('SiteFooter', () => {
  it('renders profile identity, navigation, and current year', () => {
    TestBed.configureTestingModule({ imports: [SiteFooter] });
    const fixture = TestBed.createComponent(SiteFooter);
    fixture.componentRef.setInput('profile', TEST_PROFILE);
    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelector('.brand-mark')?.textContent).toContain(TEST_PROFILE.initials);
    expect(element.querySelector('footer > p')?.textContent).toContain(
      `${new Date().getFullYear()} ${TEST_PROFILE.name}`,
    );
    expect(element.querySelectorAll('.footer-links a')).toHaveLength(3);
  });
});
