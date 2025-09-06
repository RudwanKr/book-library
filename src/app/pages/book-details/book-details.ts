import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../../services/book';

@Component({
  selector: 'app-book-details',
  standalone: false,
  templateUrl: './book-details.html',
  styleUrl: './book-details.scss'
})
export class BookDetails {
  bookId: string = '';
  book: any = null;
  loading: boolean = true;
  error: string = '';

  constructor(private route: ActivatedRoute, private bookService: Book) {}

  ngOnInit(): void {
    this.bookId = this.route.snapshot.paramMap.get('id') || '';

    if(this.bookId) {
      this.fetchBookDetails()
    } else {
      this.error = 'No book ID provided.';
      this.loading = false;
    }
  }

  fetchBookDetails() {
    this.bookService.getBookDetails(this.bookId).subscribe({
      next: (res) => {
        this.book = res;
        this.loading = false;
      },
      error: ()=> {
        this.error = 'Failed to load book details';
        this.loading = false;
      }
    })
  }

  getCoverUrl(): string {
    if(this.book && this.book.covers?.length) {
      return `https://covers.openlibrary.org/b/id/${this.book.covers[0]}-L.jpg`;
    }

    return 'https://via.placeholder.com/200x300?text=No+Cover';
  }
}
