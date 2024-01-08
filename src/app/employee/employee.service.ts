import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { Observable } from 'rxjs';
import { EmployeeView } from './employee-view/employee-view.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 
   constructor(
    private httpClient: HttpClient
  ) {}

  getEmployees(): Observable<Employee> {
    return this.httpClient.get<Employee>('https://dailystandup.globizs.com/api/Employees');
  }

  getEmployee(id: number): Observable<EmployeeView> {
    return this.httpClient.get<EmployeeView>('https://dailystandup.globizs.com/api/employees/' + id);
  }

  createEmployee(data: EmployeeView): Observable<EmployeeView> {
    return this.httpClient.post<EmployeeView>('https://dailystandup.globizs.com/api/employees', data);
  }

  DeleteEmployee(id: number): Observable<EmployeeView> {
    return this.httpClient.delete<EmployeeView>('https://dailystandup.globizs.com/api/employees/' +id) ;
  }

  UpdateEmployee(id: number,data: EmployeeView): Observable<EmployeeView> {
    return this.httpClient.put<EmployeeView>('https://dailystandup.globizs.com/api/employees/' +id, data) ;
  }

  
}
