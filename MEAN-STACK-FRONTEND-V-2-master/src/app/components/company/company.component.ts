import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/service/data.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Companies } from 'src/app/model/company'; 
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  companies:any;

  company = new Companies();

  closeResult = '';  
  form:FormGroup;
  
 

  submitted = false;
  constructor(private dataService:DataService,private modalService: NgbModal , private formBuilder: FormBuilder) { }

  ngOnInit():void {
    this.getDataCompany(); 
    this.createForm();
  }
  getDataCompany() {

    this.dataService.getDataCompany().subscribe(res => {
      this.companies = res;
    });
} 
// Pop up (add company )
open(content: any) {
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}

private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return `with: ${reason}`;
  }
} 
get f() { return this.form.controls; }
//add company 
addCompany() {
  


    var obj = Object.assign({}, this.form.value);
    console.log(obj);
    
    Object.keys(obj).forEach(key => obj[key] == undefined || obj[key] == '' ? delete obj[key] : '');
    console.log(obj)
    this.submitted = true;
    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }
    this.dataService.addCompany(this.form.value).subscribe(res => {
    
      this. companies = res; 
 
      });
      
  } 

  createForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      city:  ['', Validators.required],
      id_employee: ['', Validators.required],
    });
  }
}
