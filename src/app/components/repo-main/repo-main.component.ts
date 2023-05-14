import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { RepoDataService } from '@service/repo-data/repo-data.service';
import { mobileHandler } from '@service/index';

@Component({
  selector: 'app-repo-main',
  templateUrl: './repo-main.component.html',
  styleUrls: ['./repo-main.component.scss'],
})
export class RepoMainComponent implements OnInit {
  repoData: any;
  isMobile: boolean = false;
  resizeEvent: any;
  selectedRepo: any | null = null;

  constructor(
    private repoService: RepoDataService,
    private router: Router,
    private mobileS: mobileHandler
  ) {}

  ngOnInit(): void {
    this.mobileS.isMobile$.subscribe((data) => {
      this.isMobile = data;
    });

    this.repoService.repositories$.subscribe((data: any) => {
      this.repoData = data;
      this.selectedRepo = data[0];
    });

    // TODO: delete after developing
    // this.repoService.getMockData().subscribe((data) => {
    //   this.selectedRepo = data[0];
    //   this.repoData = data;
    // });
  }

  clickHandler(item: any) {
    if (this.isMobile) {
      this.selectedRepo = this.getSelectedRepo(item.id);
      this.router.navigate(['/repo', item.id]);
    } else {
      this.selectedRepo = this.getSelectedRepo(item.id);
    }
  }

  getSelectedRepo(id: number) {
    return this.repoData.find((item: any) => item.id === id);
  }
}
