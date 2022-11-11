import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthFirebaseService } from 'src/app/services/auth.firebase.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {
  userMail: string | null | undefined;
  constructor(private authFireBase:AngularFireAuth,private AuthService:AuthFirebaseService) {

    this.authFireBase.authState.subscribe(user=>{
      this.userMail=user?.email;
    })

  }

  ngOnInit(): void {


  }

}
function onAuthStateChanged(auth: any, arg1: (user: any) => void) {
  throw new Error('Function not implemented.');
}

