import { Component, input } from '@angular/core';
import { Profile } from '../../models/portfolio.models';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  readonly profile = input.required<Profile>();
}
