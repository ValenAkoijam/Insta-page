import { Component, OnInit } from '@angular/core';
import { Employee } from './employee.model';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CreateEmployeePage } from './create-employee/create-employee.page';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.page.html',
  styleUrls: ['./employee.page.scss'],
})
export class EmployeePage implements OnInit {
a = 14;
  employeeList! : Employee

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private modalCtrl: ModalController
   ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
  this.getEmployeeList();
     }

     
  getEmployeeList() {
    this.employeeService.getEmployees().subscribe(res => {
     this.employeeList = res;
    //  console.log(res)
    });
  }

  viewEmployee(id: number) {
    this.router.navigateByUrl('/tabs/employee/' + id);
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component : CreateEmployeePage,
      componentProps: {
        data : this.a
      }
    });

    modal.present();
  }

}
