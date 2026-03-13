import { Component, input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ServiceAlbum } from '../service-album';
import { Album } from '../models/album';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-component-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './component-album-detail.html',
  styleUrl: './component-album-detail.css',
})
export class ComponentAlbumDetail implements OnInit {
  // album1: Album[] = [];
  album1$!: Observable<Album>;
  // album1_1: Album = {
  //   userId: 0,
  //   id: 0,
  //   title: ''
  // };
  input1: string = '';
  constructor(private route: ActivatedRoute, private ServiceAlbum: ServiceAlbum) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); // 
    this.album1$ = this.ServiceAlbum.getAlbum(Number(id));
    this.album1$.subscribe((album) => {
      this.input1 = album.title;
    });
    // this.ServiceAlbum.getAlbum(Number(id)).subscribe((album) => {
    //   this.album1_1 = album;
    //   this.input1 = album.title;
    // });
    
  }

  updateAlbumTitle(): void {
    console.log(this.input1);
    // const updatedAlbumTitle: Album = {
    //   id: Number(this.route.snapshot.paramMap.get('id')),
    //   userId: Number(this.route.snapshot.paramMap.get('userId')), // You can set this to the appropriate user ID
    //   title: this.input1
    // }
    // const updatedAlbumTitle: Album = {
    //   ...this.album1_1!,
    //   title: this.input1
    // }

    this.album1$.subscribe((album) => {
      const updatedAlbumTitle: Album = {
        ...album,
        title: this.input1
      };
      console.log('Updated album object to be sent to the server:', updatedAlbumTitle);

      this.ServiceAlbum.updateAlbum(updatedAlbumTitle).subscribe((updatedAlbum) => {
        console.log('Album updated:', updatedAlbum);
      });
    });


    // this.ServiceAlbum.updateAlbum(updatedAlbumTitle).subscribe((updatedAlbum) => {
      // console.log('Album updated:', updatedAlbum);
      // Optionally, you can refresh the album details after updating

      // this.album1$ = this.ServiceAlbum.getAlbum(Number(this.route.snapshot.paramMap.get('id')));
      // this.album1$.subscribe((album) => { // Подписываемся на обновленный Observable, чтобы получить обновленные данные альбома
      //   console.log('Updated album details:', album);
      // });
      // this.album1_1 = updatedAlbum; // Сохраняем обновленный альбом в переменной для отображения в шаблоне
      // console.log('Updated album details (from variable):', this.album1_1);
    // });
  }


}
