import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import firebase from "firebase/compat/app";
import  "firebase/compat/auth";
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { CookieService } from "ngx-cookie-service";
import { ToastrService } from 'ngx-toastr';
import { FireBaseErrorService } from './fire-base-error.service';
import { DataService } from './data.service';
import { User } from '../utils/User';
@Injectable({
  providedIn: 'root'
})
export class AuthFirebaseService {

  constructor(
    private router:Router,
    private cookies:CookieService,
    private afAuth:AngularFireAuth,
    private toastr:ToastrService,
    private fireBaseError: FireBaseErrorService,
    private dataService:DataService,

    ) { }

  registerFireBase(email:string,password:string){
    this.afAuth.createUserWithEmailAndPassword(email, password).then((user) => {
      this.verifyMail();

      let uid:string |any = user.user?.uid;
      let mail:string |any = user.user?.email;
      this.dataService.addUser(mail,uid);


    // this.dataService.insertUser(sujet)
    }).catch((error) => {

      this.toastr.error(this.fireBaseError.fireBaseError(error.code));
    });

  }
    //VERIFICAR MAIL
    verifyMail() {
      this.afAuth.currentUser.then(user => {
        user?.sendEmailVerification()
      })
      this.afAuth.currentUser
        .then((user) => user?.sendEmailVerification())
        .then(() => {
          this.toastr.info("Le enviamos un correo electronico para verificar su cuenta", "Verificar Correo");
          this.router.navigate(['/verify-email']);
        })
    }

    login(email: string, password: string) {
      this.afAuth.signInWithEmailAndPassword(email, password).then((user) => {
        if (user.user?.emailVerified) {
          this.toastr.success("Bienvenido");
          this.router.navigate(['/home']);
          let email:any = user.user.email;
          this.cookies.set('mail', email);
          let uid:string |any = user.user?.uid;
        //  let algo = this.dataService.getUser(uid);



        } else {
              this.router.navigate(['/verify-email'])
        }
        return user;
      }).catch(error => {

        console.log(error);
        this.toastr.error(this.fireBaseError.fireBaseError(error.code));
        return error;
      })
    }

  logout():void{
    this.afAuth.signOut().then(() => {
      this.router.navigate(['/home']);
      this.cookies.delete('mail');
    })
  }
}
