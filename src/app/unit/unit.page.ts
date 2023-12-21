import { Component, OnInit } from '@angular/core';
import { Imagedata, Unit } from './unit.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from '../main/main.service';
import { UnitService } from './unit.service';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.page.html',
  styleUrls: ['./unit.page.scss'],
})
export class UnitPage implements OnInit {

  Data!: Unit;
  images! : Imagedata[];

  constructor(
    private route: ActivatedRoute,
    private mainService: MainService,
    private router: Router,
    private unitService: UnitService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id')!;

       this.getStart(id);
    });

    this.getImages();
  }
  getStart(id: number) {
   this.Data = this.mainService.getStart().filter(item => item.id === id)[0];
  }

  getImages() {
    this.images = this.unitService.getImages()
  }

  goToMain(){
    this.router.navigateByUrl('tabs/home/main')
  }

}
