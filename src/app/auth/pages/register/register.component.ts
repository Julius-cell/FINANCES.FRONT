import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'fin-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public formSubmitted: boolean = false;
  public emailMessage: string = "Email is required";
  public nameMessage: string = "Name is required";
  public passwordMessage: string = "Password is required";

  public registerForm: FormGroup = this.fb.group({
    name: [, [Validators.required]],
    email: [, [Validators.required, Validators.email]],
    password: [, [Validators.required, Validators.minLength(8)]],
    passwordConfirm: [, [Validators.required, Validators.minLength(8)]]
  })

  constructor(private fb: FormBuilder,
    private authService: AuthService) { }

  ngOnInit(): void { }

  register() {
    console.log(this.registerForm.value);
    this.formSubmitted = true;
    // TODO: Call the service passing as a parameter the value's form
    // TODO: Show a message depending the result
    this.registerForm.reset();
  }

  errorMessage(campo: string): boolean {    
    return this.registerForm.get(campo)!.invalid && this.registerForm.get(campo)!.touched;
  }

}
