import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthonticationService } from './../authontication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
  });

  message: any;

  makeLogin(data: any) {
    if (data.valid) {
      this.auth.login(data.value).subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message;

          if (res.message == 'success') {
            //3ml login sa7
            this._Router.navigate(['/movies']); //ektb fo2 el path da

            // this.auth.isLogin = true; //overrite;

            localStorage.setItem('checkLogin', 'true');
            localStorage.setItem('token', res.token);


            this.auth.isLogin.next(true); //call sub
          } else {
            this._Router.navigate(['/login']);
          }
        },
      });
    }
  }

  // token >>> userdata encodeمشفره

  // decode >>>> npm

  // xd  domain lazy loading ppaganition  owl car  search pipe

  constructor(private auth: AuthonticationService, private _Router: Router) {}

  ngOnInit(): void {}
}

// authorization + guard

// production

// domain-server

// sass >> css

// adobeXD  design

// 6 >> 10
