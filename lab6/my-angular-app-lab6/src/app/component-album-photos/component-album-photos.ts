import { Component, OnInit } from '@angular/core';
import { ServiceAlbum } from '../service-album';
import { Photo } from '../models/photos';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-component-album-photos',
  imports: [CommonModule],
  templateUrl: './component-album-photos.html',
  styleUrl: './component-album-photos.css',
})
export class ComponentAlbumPhotos implements OnInit {
  constructor(private ServiceAlbum: ServiceAlbum, private route: ActivatedRoute) {}
  photos: Photo[] = [];
  photos1$!: Observable<Photo[]>;
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); // Получаем ID альбома из маршрута
    // this.ServiceAlbum.getAlbumPhotos(Number(id)).subscribe((photos) => {
    //   this.photos = photos;
    //   console.log(this.photos); // Выводим полученные фотографии в консоль для проверки
    // });

    this.photos1$ = this.ServiceAlbum.getAlbumPhotos(Number(id));
    
  }

}
