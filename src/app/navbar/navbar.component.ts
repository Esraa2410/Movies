import { Component, OnInit } from '@angular/core';
import { AuthonticationService } from './../authontication.service';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  enableNavbar: any;

  // observable >>>> subscribe

  constructor(private auth: AuthonticationService, private _router: Router) {}
  username: any;

  logOut() {
    this.auth.isLogin.next(false);
    this._router.navigate(['login']);
    localStorage.removeItem('checkLogin');
    localStorage.removeItem('token');
  }

  ngOnInit(): void {
    // this.enableNavbar = this.auth.isLogin; //false

    this.auth.isLogin.subscribe({
      next: (val) => {
        let decodedToken: any = jwtDecode(localStorage.getItem('token') || '');
        console.log(decodedToken);
        this.username = decodedToken.first_name;

        this.enableNavbar = val;
      },
    });
  }
}




// spa


// lazy loading   module
