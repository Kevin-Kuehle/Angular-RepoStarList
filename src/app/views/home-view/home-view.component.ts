import { Component, OnInit } from '@angular/core';
import { RepoDataService } from '@service/repo-data/repo-data.service';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss'],
})
export class HomeViewComponent implements OnInit {
  repoData: any;

  constructor(private repoService: RepoDataService) {}

  ngOnInit(): void {
    this.repoService.getReponsitories().subscribe((data) => {
      console.log(`devlog: _____________`, data);
      this.repoData = data;
    });
  }
}
