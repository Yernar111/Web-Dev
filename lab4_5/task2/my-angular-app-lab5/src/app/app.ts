import { Component } from '@angular/core';
import { ProductList } from './product-list/product-list'
import { CommonModule } from '@angular/common';
import { categories } from './data/categories';
import { Category } from './models/category';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductList, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  categories: Category[] = categories;
  activeCategory: string = 'All';

  onCategoryChange(i: string) {
    this.activeCategory = i;
    console.log(this.activeCategory);
  }
}



// @Input() activeCategory: string = 'All';
// @Output() categoryChange = new EventEmitter<string>();
