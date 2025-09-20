import { Component,Input } from '@angular/core';
import { Favorites } from '../../services/favorites';

@Component({
  selector: 'app-book-card',
  standalone: false,
  templateUrl: './book-card.html',
  styleUrl: './book-card.scss'
})
export class BookCard {
  @Input() book :any; // receives book data from parent (HomeComponent)
  isFav: boolean = false;

  constructor(private favService: Favorites) {}

  ngOnInit() {
    this.isFav = this.favService.isFavorite(this.book.key);
  }

  getCoverUrl(): string {
    if (this.book.cover_i) {
      // OpenLibrary cover service
      return `https://covers.openlibrary.org/b/id/${this.book.cover_i}-M.jpg`;
    }

    // fallback image if no cover
    return 'assets/images/no-cover.png';
  }

  toggleFavorite() {
    if (this.isFav) {
      this.favService.removeFavortie(this.book.key);
      this.isFav = false;
    } else {
      this.favService.addFavorite(this.book);
      this.isFav = true;
    }
  }
}
