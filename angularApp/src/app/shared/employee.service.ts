import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable,of, from } from 'rxjs';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';

import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  selectedEmployee: Employee;
  employees: Employee[];

  readonly baseurl = "http://localhost:3000/employees"
  constructor(public http: HttpClient ) { }

  postEmployee(emp: Employee) {
    return this.http.post(this.baseurl,emp);

  }
  
  getEmployeeList(){
    return this.http.get(this.baseurl)
  }

  putEmployee(emp: Employee) {
    return this.http.put(this.baseurl + `/${emp._id}`, emp);
  }

  deleteEmployee(_id: string) {
    return this.http.delete(this.baseurl + `/${_id}`);
  }
}
