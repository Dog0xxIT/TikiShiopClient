import {RegisterForm, RegisterRequest} from '../../models/request-models/identity/register-request';
import {CommonModule, NgIf} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ToastService} from '../../states/toast-state/toast.service';
import {ToastType} from '../../components/stack-toast/toast-type';
import {ValidatorUtils} from '../../core/validator/validator-utils';
import {UserService} from '../../services/user/user.service';
import {StatusCodes} from 'http-status-codes';
import {ProblemDetailsResponse} from '../../models/response-models/problem-detail-response';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './register.component.html',
})

export class RegisterComponent implements OnInit {
  protected isValidForm = true;
  protected readonly ValidatorUtils = ValidatorUtils;
  protected registerForm = new FormGroup<RegisterForm>({
    email: new FormControl('', {nonNullable: true, validators: [Validators.required, Validators.email,]}),
    password: new FormControl('', {nonNullable: true, validators: Validators.required}),
    confirmPassword: new FormControl('', {nonNullable: true, validators: Validators.required}),
  });

  constructor(
    private toastService: ToastService,
    private userService: UserService,
  ) {
  }

  ngOnInit(): void {
    this.registerForm.controls['email'].markAsTouched();
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      this.isValidForm = false;
      return;
    }
    let req = new RegisterRequest()
    req.email = this.registerForm.controls['email'].value!;
    req.password = this.registerForm.controls['password'].value!;

    this.userService.register(req).subscribe(res => {
      if (res.status === StatusCodes.OK) {
        this.toastService.show(ToastType.Success, 'Register successfully! Please check confirm email.');
      }
    }, error  => {
      this.toastService.show(ToastType.Danger, error);
    })
  }
}
