import { singUpComponent } from './home/singup/singup.component';
import { AuthGuard } from './core/auth/auth.guard';
import { SignInComponent } from './home/signin/signin.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';

const routes: Routes = [
  {
    path: '',
    component: SignInComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'signup',
    component: singUpComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'user/:userName',
    component: PhotoListComponent,
    resolve: {
      photos: PhotoListResolver,
    },
  },
  {
    path: 'p/add',
    component: PhotoFormComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
