import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthappService {

  constructor() { }

  autentica(UserId: any, Password: any){

    if (UserId === 'Francesca' && Password === '1234567') {

      sessionStorage.setItem('Utente', UserId);

      return true;

    }else{

     return false;
    }

  }

  loggedUser(){

    let utente = sessionStorage.getItem('Utente');

    return (sessionStorage.getItem('Utente') != null) ? utente : '';

  }

  isLogged(){

    return (sessionStorage.getItem('Utente') != null) ? true : false;

  }

  clearAll(){

    //sessionStorage.clear();
    sessionStorage.removeItem('Utente');

  }

}
