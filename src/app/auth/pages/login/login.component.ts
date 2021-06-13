import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'fin-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {

  public emailMessage: string = "Email is required";
  public passwordMessage: string = "Password is required";

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  })

  constructor(private fb: FormBuilder,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void { }

  login() {
    console.log(this.loginForm.value);
    // TODO: Call the service passing as a parameter the value's form
    // TODO: Show a message depending the result
    this.loginForm.reset();
  }

  errorMessage(campo: string): boolean {    
    return this.loginForm.get(campo)!.invalid && this.loginForm.get(campo)!.touched;
  }

}
