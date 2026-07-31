import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { forkJoin } from 'rxjs';
import {
  PortfolioContent,
  Profile,
  Project,
  Publication,
  TimelineEntry,
} from '../models/portfolio.models';

@Injectable({ providedIn: 'root' })
export class PortfolioContentService {
  private readonly http = inject(HttpClient);
  private readonly contentPath = 'assets/content';

  readonly content = signal<PortfolioContent | null>(null);
  readonly error = signal<string | null>(null);

  constructor() {
    this.load();
  }

  private load(): void {
    forkJoin({
      profile: this.http.get<Profile>(`${this.contentPath}/profile.json`),
      publications: this.http.get<Publication[]>(`${this.contentPath}/publications.json`),
      projects: this.http.get<Project[]>(`${this.contentPath}/projects.json`),
      experience: this.http.get<TimelineEntry[]>(`${this.contentPath}/experience.json`),
    }).subscribe({
      next: (content) => this.content.set(content),
      error: (error: unknown) => {
        console.error('Unable to load portfolio content.', error);
        this.error.set(
          'The portfolio content could not be loaded. Check the JSON files in assets/content.',
        );
      },
    });
  }
}
