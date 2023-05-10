import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RepoDataService {
  private apiUrl = 'https://api.github.com/repositories?sort=stars&per_page=3';
  private devToken = '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';

  constructor(private http: HttpClient) {}

  getReponsitories(): Observable<any> {
    // needed because limit of requests per hour
    const headers = new HttpHeaders().set('Authorization', this.devToken);

    return this.http.get<any>(this.apiUrl).pipe(
      map((repos) => {
        return repos.map((repo: any) => {
          console.log(`devlog: repo`, repo);
          this.getStarredRepos(repo.stargazers_url).subscribe((data) => {
            console.log(`devlog: data 🤩🤩`, data);
          });
          return {
            id: repo.id,
            name: repo.name,
            description: repo.description,
            url: repo.html_url,
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            language: repo.language,
            owner: {
              id: repo.owner.id,
              login: repo.owner.login,
              avatar_url: repo.owner.avatar_url,
              url: repo.owner.url,
            },
          };
        });
      })
    );
  }

  getStarredRepos(stargazers_url: string): Observable<any> {
    return this.http.get<any>(stargazers_url);
  }
}
