import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {User} from '../utils/User';
import { DataService } from './data.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  user:User | any= {
    email:""
  };
  constructor(private dataService:DataService,private afAuth:AngularFireAuth) {
    this.afAuth.authState.subscribe(user=>{
        this.user.email = user?.email;
    })
  }


}
