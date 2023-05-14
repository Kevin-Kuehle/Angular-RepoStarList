import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { RepoDataService } from '@service/repo-data/repo-data.service';

@Component({
  selector: 'app-repo-detail',
  templateUrl: './repo-detail.component.html',
  styleUrls: ['./repo-detail.component.scss'],
})
export class RepoDetailComponent implements OnInit {
  detailProduct: null | any;
  @Input() repoItem: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private repoDataService: RepoDataService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id') || '');

      if (id) {
        this.repoItem = this.repoDataService.getItemById(id);
      }
    });
  }
}
