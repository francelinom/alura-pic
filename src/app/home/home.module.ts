import { HomeComponent } from './home.component';
import { singUpComponent } from './singup/singup.component';
import { RouterModule } from '@angular/router';
import { VmessageModule } from './../shared/vmessage/vmessage.module';
import { SignInComponent } from './signin/signin.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [SignInComponent, singUpComponent, HomeComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    VmessageModule,
    RouterModule,
    FormsModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
