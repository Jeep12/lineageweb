//DEPENDENCIAS
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import {AngularFireModule} from '@angular/fire/compat';
import {HttpClientModule} from '@angular/common/http';
import { environment } from '../environments/environment';
import { AuthGuardian } from './utils/auth-guardian';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { CookieService } from 'ngx-cookie-service';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

//SERVICES CUSTOM
import { AuthFirebaseService } from './services/auth.firebase.service';
import { FireBaseErrorService } from './services/fire-base-error.service';
import { ApiLineageIIService } from './services/api-lineage-ii.service';
import { LoadScriptsService } from './services/load-scripts.service';



//COMPONENTES
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DownloadsComponent } from './components/downloads/downloads.component';
import { CommunityComponent } from './components/community/community.component';
import { InformationComponent } from './components/information/information.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { RecoveryPasswordComponent } from './components/recovery-password/recovery-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { DataService } from './services/data.service';
import { MyaccountsComponent } from './components/myaccounts/myaccounts.component';
import { ModalChangePasswordComponent } from './components/modal-change-password/modal-change-password.component';
import { CreateAccountGameComponent } from './components/create-account-game/create-account-game.component';
import { ControlComponent } from './components/control/control.component';
import { BuyCoinsComponent } from './components/buy-coins/buy-coins.component';
import { AdminComponent } from './components/admin/admin.component';
import { DownloadComponent } from './components/download/download.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { StoreComponent } from './components/store/store.component';
import { AddNewComponent } from './components/add-new/add-new.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    DownloadsComponent,
    CommunityComponent,
    InformationComponent,
    LoginComponent,
    SignupComponent,
    RecoveryPasswordComponent,
    VerifyEmailComponent,
    MyaccountsComponent,
    ModalChangePasswordComponent,
    CreateAccountGameComponent,
    ControlComponent,
    BuyCoinsComponent,
    AdminComponent,
    DownloadComponent,
    GalleryComponent,
    StoreComponent,
    AddNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //Modulo reactivo, distinta manera de obtener los datos de un formlario "FormGroup"
    ReactiveFormsModule,
    NgxCaptchaModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),


  ],
  providers: [
    CookieService,
    LoadScriptsService,
    AuthFirebaseService,
    FireBaseErrorService,
    AuthGuardian,
    DataService,
    ApiLineageIIService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
