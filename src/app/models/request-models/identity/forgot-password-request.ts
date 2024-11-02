import {FormControl} from "@angular/forms";

export class ForgotPasswordRequest {
  public email: string;
}

export interface ForgotPasswordForm {
   email: FormControl<string>;
}

