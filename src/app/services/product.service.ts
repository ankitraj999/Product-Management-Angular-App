import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { Product } from '../models/poduct.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Smartphone',
      price: 699.99,
      description: 'Latest model with high-resolution camera and long battery life.',
      imageUrl: 'https://png.pngtree.com/background/20230625/original/pngtree-chat-box-thumbnail-url-on-blue-background-3d-rendered-smartphone-picture-image_4039460.jpg'
    },
    
    {
      id: 2,
      name: 'Laptop',
      price: 1299.99,
      description: 'Powerful laptop with fast processor and high-quality display.',
      imageUrl: 'https://www.riskmanagementmonitor.com/wp-content/uploads/2014/12/Laptop1.jpg'
    },
    {
      id: 3,
      name: 'Wireless Headphones',
      price: 199.99,
      description: 'Noise-cancelling headphones with premium sound quality.',
      imageUrl: 'https://www.bhphotovideo.com/images/images2500x2500/beats_by_dr_dre_900_00109_01_studio_wireless_headphones_red_1016369.jpg'
    },
    {
      id: 4,
      name: 'Smart Watch',
      price: 249.99,
      description: 'Track your fitness and stay connected with this stylish smart watch.',
      imageUrl: 'https://www.bhphotovideo.com/images/images2500x2500/apple_mj2x2ll_a_watch_sport_smartwatch_38mm_1187194.jpg'
    }
  ];

  constructor() { }

  getProducts(): Observable<Product[]> {
    // Simulate HTTP request with delay
    return of(this.products).pipe(delay(500));
  }

  getProductById(id: number): Observable<Product | undefined> {
    const product = this.products.find(p => p.id === id);
    return of(product).pipe(delay(300));
  }
}