import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthFirebaseService } from 'src/app/services/auth.firebase.service';
import { DataService } from 'src/app/services/data.service';
import { LoadScriptsService } from 'src/app/services/load-scripts.service';
import { User } from 'src/app/utils/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogg!: boolean;
  constructor(private afAuth: AngularFireAuth, private authService: AuthFirebaseService, private dataService: DataService,private loadScript:LoadScriptsService) {
    this.loadScript.load(["header/header"]);
  }
  usuarios!:User;
  ngOnInit(): void {




    this.afAuth.onAuthStateChanged((user) => {
      if (user) {

        this.isLogg = true;
        this.dataService.getUsers().subscribe(users => {
          for(let i=0;i<users.length;i++){
            if(users[i].uid == user.uid){
              this.usuarios = users[i];

            }
          }
        })
        // ...
      } else {
        // User is signed out
        // ...
        this.isLogg = false;
      }
    });

    console.log(this.usuarios);
  }
  logout() {
    this.authService.logout();
  }
  // test():void{
  //  this.dataService.getUsers().subscribe(users=>{
  //   console.log(users);
  //  })
  // }
  test(): void {
  }

}
