import { Component, OnInit } from '@angular/core';
import { Favorites } from '../../services/favorites';

@Component({
  selector: 'app-favorites',
  standalone: false,
  templateUrl: './favorites.html',
  styleUrl: './favorites.scss'
})
export class FavoritesComponent implements OnInit {
  favorities: any[] = [];

  constructor(private favService: Favorites){}

  ngOnInit(): void {
    this.loadFavorites();
  }

  loadFavorites() {
    this.favorities = this.favService.getFavorites();
  }
}
