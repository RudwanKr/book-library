import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Book {
  private apiUrl = 'https://openlibrary.org';

  constructor(private http: HttpClient) {}

  searchBook(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/search.json?q=${query}`);
  }

  getBookDetails(olid: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/works/${olid}.json`);
  }
}
