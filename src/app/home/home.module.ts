import { RouterModule } from '@angular/router';
import { VmessageModule } from './../shared/vmessage/vmessage.module';
import { SignInComponent } from './signin/signin.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [SignInComponent],
  imports: [ReactiveFormsModule, CommonModule, VmessageModule, RouterModule],
})
export class HomeModule {}
