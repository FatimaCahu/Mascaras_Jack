export type ProductCategory = 'mascara-ring' | 'mascara-coleccion' | 'ropa';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  description: string;
  price: string;
  /** paleta de colores usada para dibujar el icono SVG del producto */
  colors: [string, string, string];
}
