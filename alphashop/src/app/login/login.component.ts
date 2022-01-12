import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userid = '';
  password = '';
  //nonAutenticato = false;
  corretto = false;
  corrMsg = 'Complimenti, lo userid o la password sono corretti';
  //errorMsg = 'Spiacente, lo userid o la password sono errati';

  constructor(private route : Router) { }

  ngOnInit(): void {
  }
  gestAut(){
    if (this.userid === 'Francesca' && this.password === '1234567') {

       //this.nonAutenticato = false;
      this.corretto = true;
      this.route.navigate(['welcome', this.userid]);

    }else{
     //this.nonAutenticato = true;
     this.corretto = false;
    }

  }

}
