import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { BookDetails } from './pages/book-details/book-details';
import { FavoritesComponent } from './pages/favorites/favoritesComponent';

const routes: Routes = [
  { path: '', component: Home},
  { path: 'book/:id', component: BookDetails},
  { path: 'favorites', component: FavoritesComponent},
  { path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
