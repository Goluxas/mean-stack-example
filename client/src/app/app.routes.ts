import { Routes } from '@angular/router';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

export const routes: Routes = [
    { path: '', component: EmployeesListComponent, title: 'Employees List' },
    { path: 'new', component: AddEmployeeComponent, title: 'Add New Employee' },
];
