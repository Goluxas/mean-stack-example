import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { EmployeeFormComponent } from '../employee-form/employee-form.component';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [
    EmployeeFormComponent,
    MatCardModule,
  ],
  templateUrl: './add-employee.component.html',
  styles: ``,
})
export class AddEmployeeComponent {
  constructor(
    private router: Router,
    private employeeService: EmployeeService,
    private snackBar: MatSnackBar,
  ) {}

  addEmployee(employee: Employee) {
    this.employeeService.createEmployee(employee).subscribe({
      next: () => {
        this.router.navigate(['/'])
      },
      error: (error) => {
        this.snackBar.open('Failed to create employee', "Dismiss", {duration: 5000})
        console.error(error)
      },
    })
    this.employeeService.getEmployees()
  }
}
