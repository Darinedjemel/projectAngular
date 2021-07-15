import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { DataService } from 'src/app/service/data.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee = new Employee();
  data;
  form:FormGroup;
  submitted = false;
  constructor(private dataService: DataService, private toastr: ToastrService, private formBuilder: FormBuilder, private router: Router) { }


  createForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      salary: ['', Validators.required],
    });
  }

  
  ngOnInit(): void {
    this.createForm();
 
  }


    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }
  



  insertData() {

    var obj = Object.assign({}, this.form.value);
    console.log(obj);
    
    Object.keys(obj).forEach(key => obj[key] == undefined || obj[key] == '' ? delete obj[key] : '');
    console.log(obj)
    this.submitted = true;
    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }



    this.dataService.insertData(this.form.value).subscribe(res => {
    
      this.data = res; 
      this.toastr.success(JSON.stringify(this.data.code), JSON.stringify(this.data.message), {
        timeOut: 1000, 
        progressBar: true
      });
      this.router.navigateByUrl('/');
   
    });
   
  }
  
}
