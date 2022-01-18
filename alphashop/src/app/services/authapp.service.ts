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

}
