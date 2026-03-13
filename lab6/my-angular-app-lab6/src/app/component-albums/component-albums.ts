import { Component, OnInit } from '@angular/core';
import { ServiceAlbum } from '../service-album';
import { Album } from '../models/album';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-component-albums',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './component-albums.html',
  styleUrl: './component-albums.css',
})
export class ComponentAlbums implements OnInit {
  albums: Album[] = [];
  // albums$!: Observable<Album[]>;
  constructor(private serviceAlbum: ServiceAlbum) {}
  ngOnInit(): void {
    this.serviceAlbum.getAlbums().subscribe((albums) => {
      this.albums = albums;
    });
    // this.albums$ = this.serviceAlbum.getAlbums();
  }

  deleteAlbum(id: number): void {
    this.serviceAlbum.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(album => album.id !== id);
      // this.albums$ = this.serviceAlbum.getAlbums();
    });

  }
}
