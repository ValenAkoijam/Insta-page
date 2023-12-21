import { Component, OnInit } from '@angular/core';
import { Images, Name } from './user.model';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  slides!: Images [];
  story!: Name[];

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getSlides();
    this.getStory();
  }

  getSlides() {
    this.slides = this.userService.getSlides()
  }

  getStory(){
    this.story = this.userService.getStory()
  }

  getToUser(id: number){
    this.router.navigateByUrl('tabs/user/profile/' +id)
  }


}
