import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { GenresComponent } from './genres/genres.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'genres' },
  { path: 'genres', component: GenresComponent },
  { path: 'movie-list', component: ListComponent },
  { path: 'movie-details/:movie-id', component: DetailsComponent },
  { path: 'movie-list/:genres-id', component: ListComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
