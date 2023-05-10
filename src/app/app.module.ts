import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepoListComponent } from './components/repo-list/repo-list.component';
import { RepoDetailComponent } from './components/repo-detail/repo-detail.component';
import { RepoListItemComponent } from './components/repo-list-item/repo-list-item.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RepoListComponent,
    RepoDetailComponent,
    RepoListItemComponent,
    HomeViewComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
