import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { EmployeeView } from './employee-view.model';
import { NavController, ToastController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.page.html',
  styleUrls: ['./employee-view.page.scss'],
})
export class EmployeeViewPage implements OnInit {


  employee!: EmployeeView;
  updateModal = false;
  employeeForm!: FormGroup;
  id!: number;
 


  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private toastController: ToastController,
    private navController: NavController,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id')!;
      this.id = id;

      this.getEmployee(id);
      this.initForm()
    });
  }

  getEmployee(id: number) {
    this.employeeService.getEmployee(id).subscribe(res => {
      this.employee = res;
    });
  }

  deleteEmployee(id: number){
    this.employeeService.DeleteEmployee(id).subscribe(async res => {
     
        const toast = await this.toastController.create({
          message: 'Deleted  successfully ',
          duration: 3000,
          position: 'bottom'
        });
        await toast.present();
       this.navController.back();
      
      });
  }

  // updateEmployee(id: number,data: EmployeeView){
  //   this.employeeService.UpdateEmployee(id,data).subscribe(async res => {
  //     this.updateModal = false;
     
  //     const toast = await this.toastController.create({
  //       message: 'Update  successfully ',
  //       duration: 3000,
  //       position: 'bottom'
  //     });
  //     await toast.present();
    
    
  //   });
  // }

  initForm() {
    this.employeeForm = this.formBuilder.group({
      name: ['',[Validators.required, Validators.maxLength(255)]],
      gender: ['',[Validators.required, Validators.maxLength(255)]],
      email:  ['',[Validators.required, Validators.maxLength(255)]]
    });
  }

  formSubmit() {
    const data: any = {
      data: this.employeeForm.value
    }
    console.log(data)
    this.employeeService.UpdateEmployee(this.id,data).subscribe(async res => {
    console.log('p2');

      const toast = await this.toastController.create({
        message: 'Employee page was update successfully ',
        duration: 3000,
        position: 'bottom'
      });

      await toast.present();

      this.updateModal = false;
    });
  }

 
  }

  
   

  
