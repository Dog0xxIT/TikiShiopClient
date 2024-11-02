import {RegisterForm, RegisterRequest} from '../../models/request-models/identity/register-request';
import {CommonModule, NgIf} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ToastService} from '../../states/toast-state/toast.service';
import {ToastType} from '../../components/stack-toast/toast-type';
import {ValidatorUtils} from '../../core/validator/validator-utils';
import {UserService} from '../../services/user/user.service';
import {StatusCodes} from 'http-status-codes';
import {Utils} from '../../core/utils/utils';
import {EmptyLayout} from '../../layouts/empty-layout/empty-layout';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgIf,
    EmptyLayout
  ],
  templateUrl: './register.component.html',
})

export class RegisterComponent implements OnInit {
  protected isValidForm = true;
  protected readonly ValidatorUtils = ValidatorUtils;
  protected registerForm: FormGroup<RegisterForm>;

  constructor(
    private toastService: ToastService,
    private userService: UserService,
    private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.nonNullable.group({
        email: ['', Validators.required, Validators.email],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
      }
    )
    this.registerForm.controls['email'].markAsTouched();
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      this.isValidForm = false;
      return;
    }

    let req = Utils.mapFormGroupToRequestModel<RegisterRequest>(this.registerForm);
    this.userService.register(req)
      .subscribe({
        next: (next) => {
          if (next.status === StatusCodes.OK) {
            this.toastService.show(ToastType.Success, 'Register successfully! Please check confirm email.');
          }
        },
        error: (error) => {
          this.toastService.show(ToastType.Danger, error?.error?.detail ?? "Error");
          console.log(error);
        },
        complete: () => console.info('complete')
      })
  }
}

