import { Component, OnInit, WritableSignal } from '@angular/core';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';
import { MatCardModule } from '@angular/material/card';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar'

@Component({
  selector: 'app-edit-employee',
  standalone: true,
  imports: [EmployeeFormComponent, MatCardModule],
  templateUrl: './edit-employee.component.html',
  styles: [''],
})
export class EditEmployeeComponent implements OnInit {
  employee = {} as WritableSignal<Employee>

  constructor(
    private router: Router,
    private route: ActivatedRoute, 
    private employeeService: EmployeeService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    if (!id) {
      this.snackBar.open('No id provided', 'Dismiss', {duration: 5000})
    }

    this.employeeService.getEmployee(id!)
    this.employee = this.employeeService.employee$
  }

  editEmployee(employee: Employee) {
    this.employeeService
      .updateEmployee(this.employee()._id || '', employee)
      .subscribe({
        next: () => {
          this.router.navigate(['/'])
        },
        error: (error) => {
          this.snackBar.open('Failed to update employee', 'Dismiss', {duration: 5000})
          console.error(error)
        }
      })
  }
}


