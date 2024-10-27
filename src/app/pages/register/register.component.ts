import {RegisterRequest} from './../../models/request-models/identity/register-request';
import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
})

export class RegisterComponent {

  protected registerForm = new FormGroup<RegisterRequest>({
    email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
    password: new FormControl('', { nonNullable: true, validators: Validators.required }),
    confirmPassword: new FormControl('', { nonNullable: true, validators: Validators.required }),
  });

  constructor() {
  }

  onSubmit() {
    console.log(this.registerForm.valid);
  }
}
