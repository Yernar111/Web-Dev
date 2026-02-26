// Link to a route with RouterLink

import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a routerLink="/home">Home</a>
      |
      <a routerLink="/user">User</a>
    </nav>
    <router-outlet />
  `, // routerLink используется для создания навигационных ссылок позволяющая переключаться между компонентами без перезагрузки
  imports: [RouterLink, RouterOutlet],
})
export class App {}


// app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' } // По умолчанию
];



// app.component.html
<nav>
  <!-- Использование routerLink для переключения -->
  <a routerLink="/home" routerLinkActive="active">Главная</a>
  <a routerLink="/about" routerLinkActive="active">О нас</a>
</nav>

<!-- Место, где будут отображаться компоненты -->
<router-outlet></router-outlet>

