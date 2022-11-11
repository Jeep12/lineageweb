import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { DataService } from 'src/app/services/data.service';
import { User } from 'src/app/utils/User';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {
  usuario: User = {
    uid: '',
    access: 0,
    email: ''
  };
  constructor(private afAuth:AngularFireAuth,private dataService:DataService) {
    this.getUserFireStore();
   }

  ngOnInit(): void {
  }
  getUserFireStore() {
    this.afAuth.onAuthStateChanged((user) => {
      if (user) {
        this.dataService.getUsers().subscribe(users => {
          for (let i = 0; i < users.length; i++) {
            if (users[i].uid == user.uid) {
              this.usuario = users[i];
            }
          }
        })

      }

    },error=>{

    })

  }
}
