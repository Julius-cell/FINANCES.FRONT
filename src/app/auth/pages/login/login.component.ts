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
    // TODO: Call the service passing as a parameter the value's form
    this.authService.login(this.loginForm.value).subscribe(resp => {
      console.log(resp);
    });
    // TODO: Show a message depending the result
    this.loginForm.reset();
  }

  errorMessage(campo: string): boolean {    
    return this.loginForm.get(campo)!.invalid && this.loginForm.get(campo)!.touched;
  }

  onSuccess(googleUser: any) {
    console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
    var id_token = googleUser.getAuthResponse().id_token;
    console.log(id_token);
  }
  onFailure(error: any) {
    console.log('Error: ', error.error);
  }
  renderButton() {
    gapi.signin2.render('my-signin2', {
      'scope': 'profile email',
      'theme': 'dark',
      'onsuccess': this.onSuccess,
      'onfailure': this.onFailure
    });
  }

}
