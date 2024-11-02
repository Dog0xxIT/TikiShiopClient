import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {ValidatorUtils} from '../../core/validator/validator-utils';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {RegisterForm, RegisterRequest} from '../../models/request-models/identity/register-request';
import {ToastService} from '../../states/toast-state/toast.service';
import {UserService} from '../../services/user/user.service';
import {Utils} from '../../core/utils/utils';
import {StatusCodes} from 'http-status-codes';
import {ToastType} from '../../components/stack-toast/toast-type';
import {LoginForm} from '../../models/request-models/identity/login-request';
import {EmptyLayout} from '../../layouts/empty-layout/empty-layout';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EmptyLayout,
  ],
  templateUrl: "./login.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  protected isValidForm = true;
  protected readonly ValidatorUtils = ValidatorUtils;
  protected loginForm: FormGroup<LoginForm>;

  constructor(
    private toastService: ToastService,
    private userService: UserService,
    private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.nonNullable.group({
        email: ['', Validators.required, Validators.email],
        password: ['', Validators.required],
      }
    )
    this.loginForm.controls['email'].markAsTouched();
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      this.isValidForm = false;
      return;
    }

    let req = Utils.mapFormGroupToRequestModel<RegisterRequest>(this.loginForm);
    this.userService.login(req)
      .subscribe({
        next: (next) => {
          if (next.status === StatusCodes.OK) {
            this.toastService.show(ToastType.Success, 'Login success!');
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
