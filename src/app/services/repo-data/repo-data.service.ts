import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RepoDataService {
  private starsRange = 'stars:>=5000';

  private apiUrl = `https://api.github.com/search/repositories?q=${this.starsRange}&sort=stars&order=desc`;
  private mockDataUrl = 'assets/mocks/mockData.json';

  constructor(private http: HttpClient) {}

  getReponsitories(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((response) => {
        return response.items.map((repo: any) => {
          return {
            id: repo.id,
            title: repo.name,
            stars: repo.stargazers_count,
            owner: repo.owner.login,
            description: repo.description,
            readmeFile: this.http
              .get(repo.url + '/readme', {
                responseType: 'text',
              })
              .subscribe((data) => {
                console.log(`devlog: data`, JSON.parse(data).download_url);
                return JSON.parse(data)?.download_url;
              }),
          };
        });
      })
    );
  }

  getStarredRepos(stargazers_url: string): Observable<any> {
    return this.http.get<any>(stargazers_url);
  }

  getMockData(): Observable<any> {
    return this.http.get<any>(this.mockDataUrl);
  }

  getItemById(id: number): any {
    return this.getReponsitories().pipe(
      map((data) => data.find((item: any) => item.id === id))
    );
  }
}
