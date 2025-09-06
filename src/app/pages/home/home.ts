import { Component, Directive } from '@angular/core';
import { Book } from '../../services/book';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  query: string = '';
  books: any[] = [];
  loading: boolean = false;
  error: string = '';

  constructor(private bookService: Book) {}

  searchBook() {
    if(!this.query.trim()) {
      this.error = 'Please enter a search term.';
      return;
    }

    this.loading = true;
    this.error = '';
    this.books = [];

    this.bookService.searchBook(this.query).subscribe({
      next: (res) => {
        this.books = res.docs; // "docs" is the array of results from API
        this.loading = false;

        if (this.books.length === 0) {
          this.error = 'No books found.';
        }
      },
      error: () => {
        this.loading = false;
        this.error = 'Something went wrong while fetching books.'
      }
    })
  }
}
