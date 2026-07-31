import { DOCUMENT } from '@angular/common';
import { Component, inject, input, signal } from '@angular/core';
import { Profile, Publication } from '../../models/portfolio.models';

type CopyState = 'idle' | 'copied' | 'error';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.html',
  styleUrl: './publications.scss',
})
export class Publications {
  private readonly document = inject(DOCUMENT);

  readonly publications = input.required<Publication[]>();
  readonly profile = input.required<Profile>();

  protected readonly copyStates = signal<Record<string, CopyState>>({});
  protected readonly expandedBibtex = signal<string | null>(null);

  protected toggleBibtex(publication: Publication): void {
    this.expandedBibtex.update((title) => (title === publication.title ? null : publication.title));
  }

  protected async copyBibtex(publication: Publication): Promise<void> {
    const clipboard = this.document.defaultView?.navigator.clipboard;
    if (!clipboard) {
      this.setCopyState(publication.title, 'error');
      return;
    }

    try {
      await clipboard.writeText(publication.bibtex);
      this.setCopyState(publication.title, 'copied');
    } catch (error: unknown) {
      console.error(`Unable to copy BibTeX for "${publication.title}".`, error);
      this.setCopyState(publication.title, 'error');
    }
  }

  private setCopyState(title: string, state: CopyState): void {
    this.copyStates.update((states) => ({ ...states, [title]: state }));
  }

  protected scholarUrl() {
    return this.profile().socialLinks.find((link) => link.label === 'Google Scholar profile')?.url;
  }
}
