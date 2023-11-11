import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordValidationComponent } from './components/password-validation/password-validation.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PasswordValidationComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [PasswordValidationComponent],
})
export class CoreModule {}
