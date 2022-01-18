import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthappService } from './authapp.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private BaseAuth: AuthappService, public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    //throw new Error('Method not implemented.');

    // return this.BaseAuth.isLogged();

     if (this.BaseAuth.isLogged()) {

      return true;

    }else{

      this.router.navigate(['login']);
      return false;
    }

  }

}
