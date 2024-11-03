import {AbstractControl, FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';

export function confirmedPasswordValidator(controlName: string, matchingControlName: string): ValidatorFn {
  return (abstractControl: AbstractControl): ValidationErrors | null => {
    const control = abstractControl.get(controlName);
    const matchingControl = abstractControl.get(matchingControlName);

    if (matchingControl!.errors && !matchingControl!.errors?.['confirmedPassword']) {
      return null;
    }

    if (control!.value !== matchingControl!.value) {
      const error = {confirmedPassword: true};
      matchingControl!.setErrors(error);
      return error;
    } else {
      matchingControl!.setErrors(null);
      return null;
    }
  }
}
