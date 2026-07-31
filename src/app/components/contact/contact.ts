import { Component, input } from '@angular/core';
import { Profile } from '../../models/portfolio.models';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  readonly profile = input.required<Profile>();
}
