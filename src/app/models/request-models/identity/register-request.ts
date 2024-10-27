import {FormControl} from "@angular/forms";

export class RegisterRequest {
    public email: FormControl<string>;
    public password: FormControl<string>;
    public confirmPassword: FormControl<string>;
}
