import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../utils/User';
import { collectionData, Firestore } from "@angular/fire/firestore";

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { collection, addDoc, doc, getDoc, getDocFromCache, orderBy, getFirestore, getDocs, query, limit } from 'firebase/firestore';
import { Observable } from '@firebase/util';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient, private firestore: Firestore) {

    console.log();
  }

  async addUser(email:string,uid:string) {
    let usuario: User = {

      access: 0,
      uid: uid,
      email: email
    }
    const ref = collection(this.firestore, 'users');
    const docRef = await addDoc(ref, usuario);


  }

  getUsers(): Observable<User[]> {
    const ref = collection(this.firestore, 'users');
    return collectionData(ref, { idField: 'id' }) as unknown as Observable<User[]>;
  }
}








  // insertUser(user: User) {

  //   this.httpClient.post('https://loginfirebase-6a71b-default-rtdb.firebaseio.com/usuarios.json', user).subscribe(
  //     response => console.log("Agregado correctamente " + response),
  //     error => console.log("Error, no se pudo agregar " + error)
  //   );

  // }
  // getUser(uid: string): User {
  //   let respuesta:User = {
  //     uid: "",
  //     access: 0,
  //     email: ''
  //   };
  //   this.httpClient.get('https://loginfirebase-6a71b-default-rtdb.firebaseio.com/usuarios.json').subscribe(
  //     response => {
  //       console.log(response);


  //     });
  //   return respuesta;
  // }

  // get hasUsername() {
  //   return this.currentUser.username ? true : false
  // }

