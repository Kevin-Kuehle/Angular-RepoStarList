import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RepoDataService {
  private starsRange = 'stars:>=5000';

  private apiUrl = `https://api.github.com/search/repositories?q=${this.starsRange}&sort=stars&order=desc`;
  private mockDataUrl = 'assets/mocks/mockData.json';

  constructor(private http: HttpClient) {}

  public repositories$: BehaviorSubject<any> = new BehaviorSubject([]);

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
            readmeFile: 'test',
          };
        });
      })
    );
  }

  initRepositories(): void {
    this.getReponsitories().subscribe((data) => {
      this.repositories$.next(data);
    });
  }

  getMockData(): Observable<any> {
    return this.http.get<any>(this.mockDataUrl);
  }

  getItemById(id: number): any {
    return this.repositories$.getValue().find((item: any) => {
      return item.id === id;
    });
  }
}
