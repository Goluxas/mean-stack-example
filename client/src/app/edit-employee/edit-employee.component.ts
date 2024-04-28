import { Component, OnInit, WritableSignal } from '@angular/core';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';
import { MatCardModule } from '@angular/material/card';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router, ActivatedRoute } from '@angular/router';

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
    private employeeService: EmployeeService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    if (!id) {
      alert('No id provided')
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
          alert('Failed to update employee')
          console.error(error)
        }
      })
  }
}


