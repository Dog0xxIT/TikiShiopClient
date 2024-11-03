import {AbstractControl} from '@angular/forms';
import {confirmedPasswordValidator} from './custom-validator';

export class ValidatorUtils {
  static minMessage = (min: number) => `The value must be at least ${min}`;
  static maxMessage = (max: number) => `The value must be no more than ${max}`;
  static requiredMessage = 'This field is required';
  static requiredTrueMessage = 'The value must be true';
  static emailMessage = 'Invalid email address';
  static minLengthMessage = (minLength: number) => `Minimum length is ${minLength} characters`;
  static maxLengthMessage = (maxLength: number) => `Maximum length is ${maxLength} characters`;
  static patternMessage = (pattern: string) => `The value does not match the required format (${pattern})`;
  static confirmedPassword= 'Passwords do not match';

  static getErrorMessages(formControl: AbstractControl) {
    if (formControl.errors == null) {
      return null;
    }
    const errors = formControl.errors;
    if (errors['min']) {
      return this.minMessage(errors['min'].min);
    }
    if (errors['max']) {
      return this.maxMessage(errors['max'].max);
    }
    if (errors['required']) {
      return this.requiredMessage;
    }
    if (errors['requiredTrue']) {
      return this.requiredTrueMessage;
    }
    if (errors['email']) {
      return this.emailMessage;
    }
    if (errors['minlength']) {
      return this.minLengthMessage(errors['minlength'].requiredLength);
    }
    if (errors['maxlength']) {
      return this.maxLengthMessage(errors['maxlength'].requiredLength);
    }
    if (errors['pattern']) {
      return (this.patternMessage(errors['pattern'].requiredPattern));
    }
    if (errors['confirmedPassword']) {
      return this.confirmedPassword;
    }
    return null;
  }
}
