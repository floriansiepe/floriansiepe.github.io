import { Component, computed, input } from '@angular/core';
import { TimelineEntry } from '../../models/portfolio.models';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.html',
  styleUrl: './cv.scss',
})
export class Cv {
  readonly timeline = input.required<TimelineEntry[]>();
  readonly cvUrl = input.required<string>();
  protected readonly experience = computed(() =>
    this.timeline().filter((entry) => entry.category === 'experience'),
  );
  protected readonly education = computed(() =>
    this.timeline().filter((entry) => entry.category === 'education'),
  );
}
