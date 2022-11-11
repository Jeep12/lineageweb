import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../utils/User';
import { Account } from '../components/myaccounts/Account';

@Injectable({
  providedIn: 'root'
})
export class ApiLineageIIService {
  account: Account = {
    login: '',
    email: '',
    password: ''
  };
  login!: string;
  password!: string;
  email!: string;
  constructor(private http: HttpClient) {


  }


  // public getCharacters(login:string ):Observable<any>{
  //   let url = "/api/"+login;
  //   return this.http.get<any>(url);

  // }
  public getPhpApi(): Observable<any> {
    let url = "/api/getpjs/jeep2021";
    return this.http.get<any>(url);
  }
  public getAccounts(email: string): Observable<any | Account> {
    let url = "/api/getaccounts/" + email;

    return this.http.get<any | Account>(url)
  }
  public getCharacters(account_name: string): Observable<any> {
    let url = "/api/getchars/" + account_name;

    return this.http.get<any>(url)
  }
  public getCharacter(charname: string): Observable<any> {
    let url = "/api/getchar/" + charname;

    return this.http.get<any>(url)
  }
  public getInventory(charId: string): Observable<any> {
    let url = "/api/getinv/" + charId;
    return this.http.get<any>(url);
  }
  public addAccount(loginAccount: string, passwordAccount: string, emailAccount: string): Observable<any> {
    const header = "";
    let url = "/api/addaccount";
    let jsonInput: Account = {
      "login": loginAccount,
      "password": passwordAccount,
      "email": emailAccount
    }

    const body=JSON.stringify(jsonInput);

    return this.http.post<any>(url, body);


  }
  // "method": "POST",
  //           "headers": { "Content-type": "application/json" },
  //           "body": JSON.stringify(noticia)
  //       });
}
