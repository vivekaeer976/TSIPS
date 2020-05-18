import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material-module';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [LoginComponent]
})
export class LoginModule { }
