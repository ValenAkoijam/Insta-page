import { Component, OnInit } from '@angular/core';
import { Images, Name } from '../user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  story!: any;
  photosOpen = false;
  videoOpen = false;
  taggedOpen=false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
   this.route.paramMap.subscribe(params =>{
    const id = params.get('id');

    this.getStory(id);
   });
   
  }
  getStory(id: any) {
    console.log(id)
    this.story = this.userService.getStory().filter(async item => item.id === await id)[--id];
    console.log(this.story)
  }
 

}

