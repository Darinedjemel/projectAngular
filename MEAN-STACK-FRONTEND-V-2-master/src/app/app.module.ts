import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { HttpClientModule } from '@angular/common/http';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import {ButtonModule} from 'primeng/button'; 
import {TableModule} from 'primeng/table';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService, MessageService} from 'primeng/api';
import {DialogModule} from 'primeng/dialog'; 
import {CardModule} from 'primeng/card'; 

import {InputTextModule} from 'primeng/inputtext';  
import {ToastModule} from 'primeng/toast';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CompanyComponent } from './components/company/company.component'; 

const appRoutes:Routes = [
  {
    path: '', component:EmployeeComponent
  },
  {
    path: 'add-employee', component:AddEmployeeComponent
  },
  {
    path: 'edit/:id', component: EditEmployeeComponent
  },
  {
    path: 'companies', component: CompanyComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    NavbarComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    CompanyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    TableModule,
    ConfirmDialogModule, 
    CardModule,
    DialogModule,
    InputTextModule,
    ToastModule,
    ToastrModule.forRoot(), // ToastrModule added
    RouterModule.forRoot(appRoutes) ,
    MDBBootstrapModule.forRoot()
  ],
  providers: [ConfirmationService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }