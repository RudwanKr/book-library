import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './pages/home/home';
import { BookDetails } from './pages/book-details/book-details';
import { Favorites } from './pages/favorites/favorites';
import { BookCard } from './components/book-card/book-card';
import { SearchBar } from './components/search-bar/search-bar';

@NgModule({
  declarations: [
    App,
    Home,
    BookDetails,
    Favorites,
    BookCard,
    SearchBar
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
