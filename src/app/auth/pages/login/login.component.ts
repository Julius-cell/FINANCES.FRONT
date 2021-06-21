import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { AuthService } from '../../services/auth.service';

declare const gapi: any;

@Component({
  selector: 'fin-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {

  public auth2: any;

  get emailMessage(): string {
    const errors = this.loginForm.get('email')?.errors; 
    if (errors?.email) {
      return "Invalid email";
    }
    return "Email is required";
  }

  get passwordMessage(): string {
    const errors = this.loginForm.get('password')?.errors; 
    if (errors?.minlength) {
      return "Invalid password";
    }
    return "Password is required";
  }

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  })

  constructor(private fb: FormBuilder,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.renderButton();
  }

  login() {
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe(resp => {
      this.router.navigateByUrl('/finances/dashboard');
    });
    // TODO: Show a message depending the result
    this.loginForm.reset();
  }

  errorMessage(campo: string): boolean {    
    return this.loginForm.get(campo)!.invalid && this.loginForm.get(campo)!.touched;
  }


  renderButton() {
    gapi.signin2.render('my-signin2', {
      'scope': 'profile email',
      'theme': 'dark',
    });

    this.startApp();
  }

  startApp () {
    gapi.load('auth2', () => {
      // Retrieve the singleton for the GoogleAuth library and set up the client.
      this.auth2 = gapi.auth2.init({
        client_id: '581195233399-c5am8u85bqul9o4jorkuhvudo0sbpu5m.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
      });
      this.attachSignin(document.getElementById('my-signin2'));
    });
  };

  attachSignin(element: any) {
    this.auth2.attachClickHandler(element, {},
        (googleUser: any) => {
          const id_token = googleUser.getAuthResponse().id_token;
          this.authService.loginGoogle(id_token)
            .subscribe(res => this.router.navigateByUrl('/finances/dashboard'));
        }, (error: any) => {
          alert(JSON.stringify(error, undefined, 2));
        });
  }

}
