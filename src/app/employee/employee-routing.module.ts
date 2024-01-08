import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeePage } from './employee.page';

const routes: Routes = [
  {
    path: '',
    component: EmployeePage
  },
  {
    path: ':id',
    loadChildren: () => import('./employee-view/employee-view.module').then( m => m.EmployeeViewPageModule)
  },
  {
    path: 'create-employee',
    loadChildren: () => import('./create-employee/create-employee.module').then( m => m.CreateEmployeePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeePageRoutingModule {}
