import {FormControl} from "@angular/forms";

export class LoginRequest {
  public email: string;
  public password: string;
}

export interface LoginForm {
   email: FormControl<string>;
   password: FormControl<string>;
}

