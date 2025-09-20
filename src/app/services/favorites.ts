import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Favorites {
  private storageKey = 'favotiteBooks';
  constructor() {};

  getFavorites(): any[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  addFavorite(book: any) {
    let favorites = this.getFavorites();
    if(!favorites.some(fav => fav.key === book.key)) {
      favorites.push(book);
      localStorage.setItem(this.storageKey, JSON.stringify(favorites));
    }
  }

  removeFavortie(bookKey: string) {
    let favorites = this.getFavorites().filter(fav => fav.key !== bookKey);
    localStorage.setItem(this.storageKey,JSON.stringify(favorites));
  }

  isFavorite(bookKey: string): boolean {
    return this.getFavorites().some(fav => fav.key === bookKey);
  }
}
