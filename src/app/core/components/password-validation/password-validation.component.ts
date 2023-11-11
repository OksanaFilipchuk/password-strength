import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  lowPasswordStrength,
  mediumPasswordStrength,
  hightPasswordStrength,
} from '../../validators/password-validators';

@Component({
  selector: 'app-password-validation',
  templateUrl: './password-validation.component.html',
  styleUrls: ['./password-validation.component.scss'],
})
export class PasswordValidationComponent implements OnInit {
  public form: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      password: new FormControl('', [
        Validators.minLength(8),
        lowPasswordStrength(),
        mediumPasswordStrength(),
        hightPasswordStrength(),
      ]),
    });
  }

  getClass(indicator: number): string {
    let className = 'neutral';
    const strengthClasses = {
      lowPasswordStrength: 'low',
      mediumPasswordStrength: 'medium',
      hightPasswordStrength: 'strong',
    };
    const password = this.form.controls.password;

    if (password.value) {
      Object.entries(strengthClasses).forEach((el, index) => {
        if (index >= indicator - 1) {
          className = password.errors?.[el[0]] ? className : el[1];
        }
      });
    }

    if (password.errors?.['minlength']) {
      className = strengthClasses.lowPasswordStrength;
    }

    return className;
  }
}
