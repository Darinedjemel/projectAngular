import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }

  getData() {
    // return this.httpClient.get('http://localhost:3000/api/employees');
    return this.httpClient.get(environment.apiUrl+'/employees');
  }

  getEmployeeById(id) {
    // return this.httpClient.get('http://localhost:3000/api/employee/'+id);
    return this.httpClient.get(environment.apiUrl+'/employee/'+id);
  }

  insertData(data) {
    return this.httpClient.post(environment.apiUrl+'/addEmployee', data);
  }


  deleteData(id) {
     return this.httpClient.delete('http://localhost:8000/api/deleteEmployee/'+id);
  }

  updateData(id, data) {
    return this.httpClient.put('http://localhost:8000/api/updateEmployee/'+id, data);
  } 


  //get company data
  getDataCompany() {
   
    return this.httpClient.get(environment.apiUrl+'/show');
  } 

  // add company 
  addCompany(data) {
    return this.httpClient.post('http://localhost:8000/api/addCompany', data);
  }
}
