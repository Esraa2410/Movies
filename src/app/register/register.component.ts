import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthonticationService } from '../authontication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private auth: AuthonticationService, private _router: Router) {}

  msg: string = '';

  userForm = new FormGroup({
    first_name: new FormControl(null, [
      Validators.minLength(3),
      Validators.maxLength(10),
      Validators.required,
    ]),

    last_name: new FormControl(null, [
      Validators.minLength(3),
      Validators.maxLength(10),
      Validators.required,
    ]),

    age: new FormControl(null, [
      Validators.required,
      Validators.min(10),
      Validators.max(50),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
  });

  // break >> 9:15

  showFormData(form: any) {
    // console.log(form);

    if (this.userForm.valid) {

      console.log(this.userForm.value)
      this.auth.register(this.userForm.value).subscribe({
        next: (resp) => {
          console.log(resp);
          this.msg = resp.message; //

          if (resp.message == 'success') {
            this._router.navigate(['/login']); //ektb login fe el path
          }
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }

  ngOnInit(): void {}
}

// form tag  form group
// input  form control
// tag

// authontication and authorization
