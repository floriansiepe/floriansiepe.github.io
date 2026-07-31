import { TestBed } from '@angular/core/testing';
import { TEST_PROJECTS } from '../../testing/portfolio-test-data';
import { Projects } from './projects';

describe('Projects', () => {
  it('renders project metadata and destination', () => {
    TestBed.configureTestingModule({ imports: [Projects] });
    const fixture = TestBed.createComponent(Projects);
    fixture.componentRef.setInput('projects', TEST_PROJECTS);
    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;
    const projectLink = element.querySelector('.project-card a') as HTMLAnchorElement;

    expect(element.querySelector('.project-card h3')?.textContent).toContain(
      TEST_PROJECTS[0].title,
    );
    expect(element.querySelectorAll('.tag-list span')).toHaveLength(2);
    expect(projectLink.href).toBe(TEST_PROJECTS[0].url);
  });
});
