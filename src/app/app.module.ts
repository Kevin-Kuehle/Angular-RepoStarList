import { NgModule } from '@angular/core';
import { BrowserModule, DomSanitizer  } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { RepoMainComponent } from './components/repo-main/repo-main.component';
import { RepoListComponent } from './components/repo-list/repo-list.component';
import { RepoListItemComponent } from './components/repo-list-item/repo-list-item.component';
import { RepoDetailComponent } from './components/repo-detail/repo-detail.component';
import { DetailViewComponent } from './views/detail-view/detail-view.component';
import { MarkdownPipe } from './pipes/markdown.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RepoListComponent,
    RepoDetailComponent,
    RepoListItemComponent,
    HomeViewComponent,
    RepoMainComponent,
    DetailViewComponent,
    MarkdownPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
