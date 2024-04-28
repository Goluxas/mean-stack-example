import { Component, effect, EventEmitter, input, Output } from '@angular/core'
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatRadioModule } from '@angular/material/radio'
import { MatButtonModule } from '@angular/material/button'
import { Employee } from '../employee'

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
  ],
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent {
  initialState = input<Employee>();

  @Output()
  formValuesChanged = new EventEmitter<Employee>();

  @Output()
  formSubmitted = new EventEmitter<Employee>()

  employeeForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    position: ['', [Validators.required, Validators.minLength(5)]],
    level: ['junior', [Validators.required]],
  })

  constructor(private formBuilder: FormBuilder) {
    effect(() => {
      this.employeeForm.setValue({
        name: this.initialState()?.name || '',
        position: this.initialState()?.position || '',
        level: this.initialState()?.level || 'junior',
      })
    })
  }

  get name() {
    return this.employeeForm.get('name')!
  }

  get position() {
    return this.employeeForm.get('position')!
  }

  get level() {
    return this.employeeForm.get('level')!
  }

  submitForm() {
    this.formSubmitted.emit(this.employeeForm.value as Employee)
  }
}
