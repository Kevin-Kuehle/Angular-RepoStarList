import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { RepoDetailComponent } from './components/repo-detail/repo-detail.component';
import { DetailViewComponent } from './views/detail-view/detail-view.component';

const routes: Routes = [
  { path: '', component: HomeViewComponent },
  { path: 'test', component: DetailViewComponent },
  {
    path: 'repo/:id',
    component: RepoDetailComponent,
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
