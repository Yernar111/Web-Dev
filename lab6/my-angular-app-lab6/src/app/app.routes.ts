import { Routes } from '@angular/router';
import { ComponentHome } from './component-home/component-home';
import { ComponentAbout } from './component-about/component-about';
import { ComponentAlbums } from './component-albums/component-albums';
import { ComponentAlbumDetail } from './component-album-detail/component-album-detail';
import { ComponentAlbumPhotos } from './component-album-photos/component-album-photos';

export const routes: Routes = [
    { path: '', component: ComponentHome },
    { path: 'home', component: ComponentHome },
    { path: 'about', component: ComponentAbout },
    { path: 'albums', component: ComponentAlbums },
    { path: 'albums/:id', component: ComponentAlbumDetail },
    { path: 'albums/:id/photos', component: ComponentAlbumPhotos }
];
