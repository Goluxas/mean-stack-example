import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { EmployeeFormComponent } from '../employee-form/employee-form.component';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [
    EmployeeFormComponent,
    MatCardModule
  ],
  templateUrl: './add-employee.component.html',
  styles: ``,
})
export class AddEmployeeComponent {
  constructor(
    private router: Router,
    private employeeService: EmployeeService
  ) {}

  addEmployee(employee: Employee) {
    this.employeeService.createEmployee(employee).subscribe({
      next: () => {
        this.router.navigate(['/'])
      },
      error: (error) => {
        alert('Failed to create employee')
        console.error(error)
      },
    })
    this.employeeService.getEmployees()
  }
}
