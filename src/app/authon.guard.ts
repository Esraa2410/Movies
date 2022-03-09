import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthonticationService } from './authontication.service';
import {Router} from '@angular/router'


@Injectable({
  providedIn: 'root'
})
export class AuthonGuard implements CanActivate {
  canActivate():boolean{

    if(this._authService.isLogin.getValue() == true  ){
      //enta 3mlt login
      return true;
    }
    else{

      this._router.navigate(['/login'])


      return false;
    }

  }



  constructor(private _authService :AuthonticationService , private _router:Router){}

}
