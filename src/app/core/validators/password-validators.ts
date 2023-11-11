import { AbstractControl, ValidatorFn } from '@angular/forms';
import { patterns } from '../constants/patterns';

export function lowPasswordStrength(): ValidatorFn {
  return (control: AbstractControl) => {
    const isValid =
      patterns.digit.test(control.value) ||
      patterns.letter.test(control.value) ||
      patterns.symbol.test(control.value);
    return isValid || !control.value
      ? null
      : { lowPasswordStrength: { value: control.value } };
  };
}

export function mediumPasswordStrength(): ValidatorFn {
  return (control: AbstractControl) => {
    const isValid =
      patterns.letterDigit.test(control.value) ||
      patterns.letterSymbol.test(control.value) ||
      patterns.symbolDigit.test(control.value);
    return isValid || !control.value
      ? null
      : { mediumPasswordStrength: { value: control.value } };
  };
}

export function hightPasswordStrength(): ValidatorFn {
  return (control: AbstractControl) => {
    const isValid = patterns.letterSymbolDigit.test(control.value);
    return isValid || !control.value
      ? null
      : { hightPasswordStrength: { value: control.value } };
  };
}
