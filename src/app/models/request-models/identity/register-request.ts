import {FormControl} from "@angular/forms";

export class RegisterRequest {
    public email: string;
    public password: string;
}

export class RegisterForm {
  public email: FormControl<string>;
  public password: FormControl<string>;
  public confirmPassword: FormControl<string>;
}

