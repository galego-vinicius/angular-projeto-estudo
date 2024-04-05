import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  pokemons: any[] = [];
  httpClient = inject(HttpClient);

  ngOnInit() {
    this.httpClient.get('https://pokeapi.co/api/v2/pokemon').subscribe((response: any) => {
      response.results.map((result: any) => this.httpClient.get(result.url).subscribe({
        next: (pokemon) => { this.pokemons.push(pokemon) }
      }))
      console.log(this.pokemons)
    })
  }
}
