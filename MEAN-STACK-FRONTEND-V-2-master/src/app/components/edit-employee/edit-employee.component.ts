import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { DataService } from 'src/app/service/data.service';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';  
import {ConfirmationService,MessageService} from 'primeng/api';
@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  employee = new Employee();
  id:any;
  data:any;
  submitted = false;

  form = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    salary: new FormControl('')
  });
  constructor(private dataService: DataService, private route:ActivatedRoute, private toastr: ToastrService, private router: Router,private messageService: MessageService) { 
   
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getData();
  }

      // convenience getter for easy access to form fields
      get f() { return this.form.controls; }
  

  getData() {
    this.dataService.getEmployeeById(this.id).subscribe(res => {
      this.data = res;
      this.employee = this.data;
      this.form = new FormGroup({
        name: new FormControl(this.employee.name),
        email: new FormControl(this.employee.email),
        salary: new FormControl(this.employee.salary)
      });
    });
  }



  updateData() {

    this.dataService.updateData(this.route.snapshot.params.id, this.form.value).subscribe(res => {
    this.data = res;
    this.messageService.add({severity:'success', summary:'Updated', detail:'Employee updated'});

         
    });   this.router.navigateByUrl('/');
   
  }  
   

}


