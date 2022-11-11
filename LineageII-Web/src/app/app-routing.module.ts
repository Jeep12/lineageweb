import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { ControlComponent } from './components/control/control.component';
import { DownloadComponent } from './components/download/download.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HomeComponent } from './components/home/home.component';
import { InformationComponent } from './components/information/information.component';
import { LoginComponent } from './components/login/login.component';
import { MyaccountsComponent } from './components/myaccounts/myaccounts.component';
import { SignupComponent } from './components/signup/signup.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AuthGuardian } from './utils/auth-guardian';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'myaccounts',
    component:MyaccountsComponent
  },
  {
    path:'control',
    component:ControlComponent
  },
  {
    path:'admin',
    component:AdminComponent
  },
  {
    path:'features',
    component:InformationComponent
  },
  {
    path:'download',
    component:DownloadComponent
  },
  {
    path:'media',
    component:GalleryComponent
  },
  {
    path:'login',
    component:LoginComponent,canActivate:[AuthGuardian]
  },
    {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'verify-email',
    component:VerifyEmailComponent
  },
  {
    path:'**',
    component:HomeComponent
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
