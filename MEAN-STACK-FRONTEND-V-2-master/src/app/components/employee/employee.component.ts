import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { ToastrService } from 'ngx-toastr';
import {ConfirmationService,MessageService} from 'primeng/api';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees:any;
  data:any;
  constructor(private dataService:DataService, private toastr: ToastrService, private confirmationService: ConfirmationService,private messageService: MessageService) { }

  ngOnInit(): void {
    this.getEmployeesData();
  }

  getEmployeesData() {
 
    this.dataService.getData().subscribe(res => {
      this.employees = res;
    });
  } 

  deleteData(id) { 
    this.dataService.deleteData(id).subscribe(res => {
      this.data = res; 
      this.toastr.error(JSON.stringify(this.data.code), JSON.stringify(this.data.message), {
        timeOut: 1000, 
        progressBar: true
      });
      this.getEmployeesData();
    });
  } 
 
  confirmation(id) {
    this.confirmationService.confirm({
        message: 'Are you sure that you want to delete this employee?',
        accept: () => {           
          this.dataService.deleteData(id).subscribe(res => {
            this.data = res; 
            this.messageService.add({severity:'success', summary:'Deleted', detail:'Employee deleted'});
          }); 
        }  
    });
}
}
