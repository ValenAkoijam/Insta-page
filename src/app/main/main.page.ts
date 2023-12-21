import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';
import { Unit } from '../unit/unit.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  lessons!: Unit[];


  constructor(
  private mainService: MainService,
  private router: Router,
  ) { }

  ngOnInit() {
    this.getStart();
  }

  getStart() {
    this.lessons = this.mainService.getStart();
  }

  goToData(id: number) {
    this.router.navigateByUrl('tabs/home/main/unit/' + id);
  }

  

}
