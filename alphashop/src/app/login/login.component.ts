import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userid = '';
  password = '';
  nonAutenticato = false;
  corretto = false;
  corrMsg = 'Complimenti, lo userid o la password sono corretti';
  errorMsg = 'Spiacente, lo userid o la password sono errati';

  constructor() { }

  ngOnInit(): void {
  }
  gestAut(){
    if (this.userid === 'Francesca' && this.password === '1234567') {

      this.nonAutenticato = false;
      this.corretto = true;

    }else{
     this.nonAutenticato = true;
     this.corretto = false;
    }

  }

}
