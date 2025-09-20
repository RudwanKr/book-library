import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './pages/home/home';
import { BookDetails } from './pages/book-details/book-details';
import { FavoritesComponent } from './pages/favorites/favoritesComponent';
import { BookCard } from './components/book-card/book-card';
import { SearchBar } from './components/search-bar/search-bar';
import { Navbar } from './components/navbar/navbar';

@NgModule({
  declarations: [
    App,
    Home,
    BookDetails,
    FavoritesComponent,
    BookCard,
    SearchBar,
    Navbar
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
