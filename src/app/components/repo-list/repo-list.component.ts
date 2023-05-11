import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.scss'],
})
export class RepoListComponent {
  @Input() repoData: any[] = [];
  @Input() isMobile: boolean = false;
  @Output() onItemClick = new EventEmitter<any>();

  constructor() {}

  get sortedRepoData(): any[] {
    if (!this.repoData) return [];
    return this.repoData.sort((a, b) => {
      return b.stars - a.stars;
    });
  }
}
