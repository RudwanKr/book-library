import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-book-card',
  standalone: false,
  templateUrl: './book-card.html',
  styleUrl: './book-card.scss'
})
export class BookCard {
  @Input() book :any; // receives book data from parent (HomeComponent)

  getCoverUrl(): string {
    if (this.book.cover_i) {
      // OpenLibrary cover service
      return `https://covers.openlibrary.org/b/id/${this.book.cover_i}-M.jpg`;
    }

    // fallback image if no cover
    return 'https://via.placeholder.com/150x220?text=No+Cover';
  }
}
