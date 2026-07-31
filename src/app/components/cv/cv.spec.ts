import { TestBed } from '@angular/core/testing';
import { TEST_PROFILE, TEST_TIMELINE } from '../../testing/portfolio-test-data';
import { Cv } from './cv';

describe('Cv', () => {
  it('renders experience and opens the CV in a new tab', () => {
    TestBed.configureTestingModule({ imports: [Cv] });
    const fixture = TestBed.createComponent(Cv);
    fixture.componentRef.setInput('timeline', TEST_TIMELINE);
    fixture.componentRef.setInput('cvUrl', TEST_PROFILE.cvUrl);
    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelector('.timeline h3')?.textContent).toContain(TEST_TIMELINE[0].title);
    expect(element.querySelectorAll('.timeline-group-title')).toHaveLength(2);
    const cvLink = element.querySelector('.cv-intro a') as HTMLAnchorElement;
    expect(cvLink.getAttribute('href')).toBe(TEST_PROFILE.cvUrl);
    expect(cvLink.target).toBe('_blank');
    expect(cvLink.hasAttribute('download')).toBe(false);
  });
});
