import { Injectable } from '@angular/core';
import { Images, Name } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getSlides(): Images[] {
    return [{
      id: 1,
      img: 'https://th.bing.com/th/id/OIP.40DocC9UCrKeEQopbrYFowHaLH?rs=1&pid=ImgDetMain'
    },{
      id: 2,
      img: 'https://i.pinimg.com/originals/35/e7/3f/35e73faf4d091285bb6e70305bc167ae.jpg'
    },{
      id: 3,
      img: 'https://images.moviefit.me/p/o/53720-bae-suzy.jpg' 
    },{
      id: 4,
      img: 'https://th.bing.com/th/id/OIP.ALMAg2SZWuw--ttBZRsfMgHaJb?rs=1&pid=ImgDetMain'
    },{
      id: 5,
      img: 'https://0.soompi.io/wp-content/uploads/2020/07/24184543/BLACKPINK-Lisa-1.jpg'
    },{
      id: 6,
      img: 'https://lh3.googleusercontent.com/0vb7_vQZlDvR3dHPWgGxXxjcbPXhNkUiM5eCGGW_Ve2WbRtUQ-6p_a-xJ6BNZGfQKVjNeqnhrC3Ez78qyrmg2UxHDrNfiJH_NAooQlnqYpCN-Fk=w960-rj-nu-e365'
    }]
  }

  getStory(): Name[] {
    return [{
      id: 1,
      img: 'https://lh3.googleusercontent.com/0vb7_vQZlDvR3dHPWgGxXxjcbPXhNkUiM5eCGGW_Ve2WbRtUQ-6p_a-xJ6BNZGfQKVjNeqnhrC3Ez78qyrmg2UxHDrNfiJH_NAooQlnqYpCN-Fk=w960-rj-nu-e365',
      name: 'Wonyoung',

      photos: [
       'https://i.pinimg.com/originals/46/c2/75/46c27501b270aa64994bb447bee220e0.jpg',
       'https://i.pinimg.com/736x/2a/14/fd/2a14fdf552a6d680a8a7ae204986e0b1.jpg',
       'https://i.redd.it/3i9t6t56xx281.jpg'
      ]

    },{
      id: 2,
      img: 'https://th.bing.com/th/id/OIP.40DocC9UCrKeEQopbrYFowHaLH?rs=1&pid=ImgDetMain',
      name: 'Lili Colins',
      photos: [
        'https://th.bing.com/th/id/OIP.dMeyGbSz3wvyjkxxDNhyawHaKX?rs=1&pid=ImgDetMain',
        'https://th.bing.com/th/id/OIP.Q5gxIeT8BZZOSwU75uCxXgHaLH?rs=1&pid=ImgDetMain',
        'https://th.bing.com/th/id/R.29d270e7023ee91a5fcd31e9dff38670?rik=oPw0XX9yIkozUA&riu=http%3a%2f%2fwww.hawtcelebs.com%2fwp-content%2fuploads%2f2017%2f11%2flily-collins-at-2017-go-campaign-gala-in-hollywood-11-18-2017-0.jpg&ehk=EYw%2f7%2bZ9hZ%2bcVFxhwkx8TIru4vpdxFhbj1cCpMvOf3w%3d&risl=&pid=ImgRaw&r=0'
      ]
    },{
      id: 3,
      img: 'https://images.moviefit.me/p/o/53720-bae-suzy.jpg' ,
      name: 'Bae Suzy',
      photos: [
        'https://c.wallhere.com/photos/fc/65/Suzy_Bae_Suzy_singer_K_pop_women_Korean_long_hair_lipstick-1691063.jpg!d',
        'https://th.bing.com/th/id/OIP.zwDJUY98168sDyVtx85FVAHaKX?w=1000&h=1400&rs=1&pid=ImgDetMain',
        'https://th.bing.com/th/id/OIP.dW5xWwZAxXGQUWhzsb1YSAHaLD?w=500&h=746&rs=1&pid=ImgDetMain'
      ]
    },{
      id: 4,
      img: 'https://th.bing.com/th/id/OIP.ALMAg2SZWuw--ttBZRsfMgHaJb?rs=1&pid=ImgDetMain',
      name: 'v',
      photos: [
        'https://th.bing.com/th/id/OIP.PYuIFzsI03GRhkfh44c6KwHaMQ?rs=1&pid=ImgDetMain',
        'https://images.hdqwalls.com/download/bts-v-xa-1080x2160.jpg',
        'https://th.bing.com/th/id/OIP.iljm2pTO403Z8CxAZjHJ5QHaMV?w=1196&h=1992&rs=1&pid=ImgDetMain'
      ]
    },{
      id: 5,
      img: 'https://0.soompi.io/wp-content/uploads/2020/07/24184543/BLACKPINK-Lisa-1.jpg',
      name: 'Lisa',
      photos: [
        'https://i.pinimg.com/originals/18/89/0d/18890d92bacf925459886ea59b853d9c.jpg',
        'https://i.pinimg.com/736x/bf/17/e1/bf17e108cb75d150f43e0abd3c9d227a.jpg',
        'https://i.pinimg.com/736x/71/31/cc/7131cc294eb05c011a3ab3b1f47e41dc.jpg'
      ]
    },{
      id: 6,
      img: 'https://i.pinimg.com/originals/35/e7/3f/35e73faf4d091285bb6e70305bc167ae.jpg',
      name: 'YunJin',
      photos: [
        'https://i.pinimg.com/originals/0a/2f/cf/0a2fcf994e102169bfbdd020f7270b73.jpg',
        'https://i.pinimg.com/originals/31/57/c8/3157c8c4a80e6237e60b3b44026aca39.jpg',
        'https://i.pinimg.com/736x/0f/6f/1b/0f6f1bb12dec4f95aa8d35a0cc5399d7.jpg'
      ]
    }]
  }

}