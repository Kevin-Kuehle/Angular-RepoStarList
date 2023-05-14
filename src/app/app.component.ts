import { Component, OnInit } from '@angular/core';
import { RepoDataService } from '@service/repo-data/repo-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'github-repositories';

  constructor(private repoDataService: RepoDataService) {}

  ngOnInit(): void {
    this.repoDataService.initRepositories();
  }
}
