import { singUpComponent } from './singup/singup.component';
import { SignInComponent } from './signin/signin.component';
import { AuthGuard } from './../core/auth/auth.guard';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: SignInComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'signup',
        component: singUpComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
