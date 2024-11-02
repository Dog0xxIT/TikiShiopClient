import {FormGroup} from '@angular/forms';

export class Utils {
  static mapFormGroupToRequestModel<T>(form: FormGroup) : T {
    return form.value as T;
  }
}
