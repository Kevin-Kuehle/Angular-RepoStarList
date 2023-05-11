import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { RepoDataService } from '@service/repo-data/repo-data.service';

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

  constructor(private repoService: RepoDataService, private router: Router) {}

  ngOnInit(): void {
    this.mobileHandler();
    this.resizeEvent = addEventListener('resize', () => {
      this.mobileHandler();
    });

    this.repoService.getReponsitories().subscribe((data) => {
      this.selectedRepo = data[0];
      this.repoData = data;
    });

    // TODO: delete after developing
    // this.repoService.getMockData().subscribe((data) => {
    //   this.selectedRepo = data[0];
    //   this.repoData = data;
    // });
  }

  ngOnDestroy(): void {
    removeEventListener('resize', this.resizeEvent);
  }

  mobileHandler() {
    let width = window.innerWidth;
    if (width < 768) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
      this.router.navigate(['/']);
    }
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
