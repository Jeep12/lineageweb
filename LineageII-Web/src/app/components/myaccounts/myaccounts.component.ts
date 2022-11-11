import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from '@firebase/util';
import { ApiLineageIIService } from 'src/app/services/api-lineage-ii.service';
import { AuthFirebaseService } from 'src/app/services/auth.firebase.service';
import { DataService } from 'src/app/services/data.service';
import { User } from 'src/app/utils/User';
import { Account } from './Account';

@Component({
  selector: 'app-myaccounts',
  templateUrl: './myaccounts.component.html',
  styleUrls: ['./myaccounts.component.css']
})
export class MyaccountsComponent implements OnInit {

  inv:any = [];
  stats:any = {};
  accounts: Account | any = [];
  chars: any = [];
  usuario: User = {
    uid: '',
    access: 0,
    email: ''
  };

  existChar!: boolean;
  selectStats!:boolean;
  selectInv!:boolean;
  selectAccount!:boolean;
  selectChar!:boolean;

  chararacterId!:string;
  nameCharSelect!:string;
  accountNameSelect !:string;

  constructor(private afAuth: AngularFireAuth, private DataService: DataService, private authService: AuthFirebaseService, private api: ApiLineageIIService) {
    this.getUserFireStore();


  }
  // for (let i = 0; i < response.length; i++) {
  //   let acc: Account = {
  //     login: response[i].login,
  //     email: response[i].email,
  //     created_time: response[i].created_time,
  //     lastIp: response[i].lastIp,
  //     pcIp: response[i].pcIp,
  //   }
  //   this.accounts.push(acc);
  // }

  ngOnInit(): void {
    this.afAuth.onAuthStateChanged(e => {
      let email: any | string = e?.email;
      this.api.getAccounts(email).subscribe(response => {
        this.accounts = response;
      },error =>{
        this.accounts = null;
      })
    })


  }
  getUserFireStore() {
    this.afAuth.onAuthStateChanged((user) => {
      if (user) {
        this.DataService.getUsers().subscribe(users => {
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

  //PERSONAJES DEL LINEAGE TOTAL
  getCharacters(login: string) {
    this.selectAccount = true;
    this.accountNameSelect = login;
    this.nameCharSelect= "";
    this.api.getCharacters(login).subscribe(
      data => {this.chars=data;},
      error => {this.chars=null; this.existChar = false;},()=>{
        this.existChar = true;

      });
  }


  //GET PERSONAJE INDIVIDUAL DEL JUEGO
  charSelect(charName:string,charId:string){
    this.selectChar = true;
    this.nameCharSelect = charName;
    this.chararacterId = charId;
    //INVENTARIO TOTAL, LO QUE ESTA EN EL WAREHOUSE Y EL INVENTARIO Y EQUIPADO ADEMAS DE WAREHOUSE CLAN
    this.api.getInventory(this.chararacterId).subscribe(response =>{
      this.inv = response;
    })
    //ESTE GET ES PARA MOSTRAR LAS ESTADISTICAS, EXISTE OTRO IGUAL PERO ES PARA TRAER SOLO 3 DATOS DE LA BD
    this.api.getCharacter(this.nameCharSelect).subscribe(response =>{
      console.log(response);
      this.stats = response;
    })


  }

  getInventory(){
    this.selectInv = true;
    this.selectStats = false;
    this.api.getInventory(this.chararacterId).subscribe(response =>{
      this.inv = response;
      let aux = [];
      for (let i = 0;i<this.inv.length;i++){
        if(this.inv[i].loc == 'INVENTORY'){
            aux.push(this.inv[i]);
        }
      }
      this.inv = aux;
    })


  }
  getWarehouse(){
    let aux = [];
    for (let i = 0;i<this.inv.length;i++){
      if(this.inv[i].loc == 'WAREHOUSE'){
          aux.push(this.inv[i]);
      }
    }
    this.inv = aux;
  }
  getStats(){
    this.selectStats = true;
    this.selectInv = false;
  }
  deleteItems(){
    this.inv = null;
  }

}
