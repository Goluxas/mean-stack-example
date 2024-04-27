import { Routes } from '@angular/router';
import { EmployeesListComponent } from './employees-list/employees-list.component';

export const routes: Routes = [
    { path: '', component: EmployeesListComponent, title: 'Employees List' },
];
