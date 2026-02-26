import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { products } from '../data/products';
import { Product } from '../models/product';

import { ProductItem } from '../product-item/product-item';

import { Input } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItem],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products: Product[] = products;
  @Input() activeCategory!: string;

  get filteredProducts(): Product[] {
    if (this.activeCategory === 'All') return this.products;
    return this.products.filter(p => p.category === this.activeCategory);
  }

  deleteProduct1(id: number){
    this.products = this.products.filter(p => p.id!==id);
  }
} /////




  // get categories(): string[] {
  //   return Array.from(new Set(this.products.map(p => p.category)));
  // }