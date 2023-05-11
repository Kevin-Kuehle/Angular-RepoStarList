import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-repo-list-item',
  templateUrl: './repo-list-item.component.html',
  styleUrls: ['./repo-list-item.component.scss'],
})
export class RepoListItemComponent {
  @Input() repoItem: any;
  @Input() isMobile: boolean = false;
  @Output() onItemClick = new EventEmitter<any>();
}
