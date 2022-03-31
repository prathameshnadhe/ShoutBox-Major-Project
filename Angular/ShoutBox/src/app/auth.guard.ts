import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  token: any;
  constructor(private route: Router){

  }
  canActivate(){
    this.token = localStorage.getItem('token');
    if (this.token) {
      return true;
    } else {
      this.route.navigate(['login']);
      return false;
    }
  }
}
