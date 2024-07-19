
import { AbstractControl, ValidatorFn } from '@angular/forms';
import { provinces } from './provinces';

export function provinceValidator(control: AbstractControl): { [key: string]: boolean } | null {
  if (!provinces.includes(control.value)) {
    return { 'invalidProvince': true };
  }
  return null;
}
