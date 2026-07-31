import { Component, input } from '@angular/core';
import { Project } from '../../models/portfolio.models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  readonly projects = input.required<Project[]>();
}
