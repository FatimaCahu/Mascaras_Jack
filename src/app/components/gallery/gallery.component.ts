import { Component, computed, signal } from '@angular/core';
import { PRODUCTS } from '../../data/products';
import { Product, ProductCategory } from '../../models/product.model';

type FilterValue = ProductCategory | 'todo';

@Component({
  selector: 'mj-gallery',
  standalone: true,
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  readonly filters: { value: FilterValue; label: string }[] = [
    { value: 'todo', label: 'Todo' },
    { value: 'mascara-ring', label: 'Máscaras de ring' },
    { value: 'mascara-coleccion', label: 'Colección' },
    { value: 'ropa', label: 'Ropa' },
  ];

  readonly activeFilter = signal<FilterValue>('todo');

  readonly products = signal<Product[]>(PRODUCTS);

  readonly visibleProducts = computed(() => {
    const filter = this.activeFilter();
    if (filter === 'todo') {
      return this.products();
    }
    return this.products().filter((product) => product.category === filter);
  });

  setFilter(value: FilterValue): void {
    this.activeFilter.set(value);
  }
}
