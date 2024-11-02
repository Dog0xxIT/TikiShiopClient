import {FormControl} from "@angular/forms";

export class RegisterRequest {
    public email: string;
    public password: string;
}

export interface RegisterForm {
   email: FormControl<string>;
   password: FormControl<string>;
   confirmPassword: FormControl<string>;
}

