import { Injectable } from '@angular/core';
import { Imagedata } from './unit.model';

@Injectable({
  providedIn: 'root'
})
export class UnitService {

  constructor() { }
  getImages(): Imagedata[] {
    return [{
      id: 1,
      img: 'https://th.bing.com/th/id/OIP.BC_Kza5a2ePDBGQGIzSWbgHaHF?rs=1&pid=ImgDetMain'
    },{
      id: 2,
      img: 'https://cdn2.iconfinder.com/data/icons/medical-specialties-1/256/Otology-512.png'
    },{
      id: 3,
      img: 'https://th.bing.com/th/id/OIP.gpvDoKf_cWcIWbAZW9ZjKQHaHa?rs=1&pid=ImgDetMain'
    }]
  }
}
