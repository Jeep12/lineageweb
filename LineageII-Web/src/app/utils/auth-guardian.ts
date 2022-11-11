import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
@Injectable()
export class AuthGuardian implements CanActivate {

    constructor(private router: Router,private afAuth:AngularFireAuth,private cookies:CookieService) {


    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {


      return !this.isLogg();


    }

    isLogg(){
      if(this.cookies.get('mail') == ""){
          return false;
      }else {
          return true;
      }
  }





}
