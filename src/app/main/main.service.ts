import { Injectable } from '@angular/core';
import { Unit } from '../unit/unit.model';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() { }

  getStart():  Unit[] {
    return [{
      id: 1,
      
      name: 'Unit 1',
      price: 999,
      offerPrice: 299,
      brand: 'Apple Singpore',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, consectetur dolores? Explicabo corrupti sapiente nihil nulla exercitationem corporis doloribus ut quas! At facilis ut laudantium dolorem dolorum, recusandae ipsa hic.'
    }, {
      id: 2,
      
      name: 'Unit 2',
      price: 999,
      offerPrice: 299,
      brand: 'Apple Singpore',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, consectetur dolores? Explicabo corrupti sapiente nihil nulla exercitationem corporis doloribus ut quas! At facilis ut laudantium dolorem dolorum, recusandae ipsa hic.'
    }, {
      id: 3,
     
      name: 'Unit 3',
      price: 999,
      offerPrice: 299,
      brand: 'Apple Singpore',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, consectetur dolores? Explicabo corrupti sapiente nihil nulla exercitationem corporis doloribus ut quas! At facilis ut laudantium dolorem dolorum, recusandae ipsa hic.'
    }]
  }
}
