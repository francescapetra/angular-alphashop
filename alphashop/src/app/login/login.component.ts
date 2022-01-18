import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthappService } from '../services/authapp.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userid = '';
  password = '';
  nonAutenticato = false;
  // corretto = false;
  // corrMsg = 'Complimenti, lo userid o la password sono corretti';
  errorMsg = 'Spiacente, lo userid o la password sono errati';

  constructor(private route : Router, private BasicAuth: AuthappService ) { }

  ngOnInit(): void {
  }
  gestAut(){
     if (this.BasicAuth.autentica(this.userid, this.password)) {

      this.nonAutenticato = false;
      this.route.navigate(['welcome', this.userid])

     }else {

      this.nonAutenticato = true;

     }

  }

}
