import {FormControl} from "@angular/forms";

export class RegisterRequest {
  public email: string;
  public password: string;
  public userName: string;
}

export interface RegisterForm {
  email: FormControl<string>;
  password: FormControl<string>;
  confirmPassword: FormControl<string>;
  userName: FormControl<string>;
}

