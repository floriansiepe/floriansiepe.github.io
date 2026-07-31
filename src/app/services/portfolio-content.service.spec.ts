import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Profile, Project, Publication, TimelineEntry } from '../models/portfolio.models';
import { PortfolioContentService } from './portfolio-content.service';

describe('PortfolioContentService', () => {
  it('loads and combines all portfolio JSON files', () => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });

    const service = TestBed.inject(PortfolioContentService);
    const http = TestBed.inject(HttpTestingController);
    const profile = { name: 'Alex Morgan' } as Profile;
    const publications = [{ title: 'A publication' }] as Publication[];
    const projects = [{ title: 'A project' }] as Project[];
    const experience = [{ title: 'A position' }] as TimelineEntry[];

    http.expectOne('assets/content/profile.json').flush(profile);
    http.expectOne('assets/content/publications.json').flush(publications);
    http.expectOne('assets/content/projects.json').flush(projects);
    http.expectOne('assets/content/experience.json').flush(experience);

    expect(service.content()).toEqual({
      profile,
      publications,
      projects,
      experience,
    });
    expect(service.error()).toBeNull();
    http.verify();
  });
});
