import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { ModalController, NavController, ToastController } from '@ionic/angular';
import { EmployeeView } from '../employee-view/employee-view.model';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.page.html',
  styleUrls: ['./create-employee.page.scss'],
})
export class CreateEmployeePage implements OnInit {
  @Input() data: any;

  employeeForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    private navController: NavController,
    private toastController: ToastController,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    console.log('a=', this.data)
    this.initForm();
  }

  initForm() {
    this.employeeForm = this.formBuilder.group({
      name: ['',[Validators.required, Validators.maxLength(255)]],
      gender: ['',[Validators.required, Validators.maxLength(255)]],
      email:  ['',[Validators.required, Validators.maxLength(255)]]
    });
  }

  formSubmit() {
    console.log('p');
    const data: any = {
      data: this.employeeForm.value
    }
    this.employeeService.createEmployee(data).subscribe(async res => {
    console.log('p2');

      const toast = await this.toastController.create({
        message: 'New book successfully added',
        duration: 3000,
        position: 'bottom'
      });

      await toast.present();

      this.navController.back();
    });
  }

  cancel(){
    this.modalCtrl.dismiss();
  }

}
