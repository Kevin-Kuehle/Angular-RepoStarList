import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { RepoDataService } from '@service/repo-data/repo-data.service';
import { mobileHandler } from '@service/index';

@Component({
  selector: 'app-repo-detail',
  templateUrl: './repo-detail.component.html',
  styleUrls: ['./repo-detail.component.scss'],
})
export class RepoDetailComponent implements OnInit {
  @Input() repoItem: any;

  detailProduct: null | any;
  isMobile: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private repoDataService: RepoDataService,
    private mobileS: mobileHandler
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id') || '');

      if (id) {
        this.repoItem = this.repoDataService.getItemById(id);
      }
    });

    this.mobileS.isMobile$.subscribe((data) => {
      this.isMobile = data;
    });
  }
}
