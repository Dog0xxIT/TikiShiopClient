import {FormControl} from "@angular/forms";

export class ChangePasswordRequest {
  public oldPassword: string;
  public newPassword: string;
}

export interface ChangePasswordForm {
  oldPassword: FormControl<string>;
  newPassword: FormControl<string>;
}
