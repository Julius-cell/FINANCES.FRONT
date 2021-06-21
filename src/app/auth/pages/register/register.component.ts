import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'fin-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public formSubmitted: boolean = false;

  get nameMessage(): string {
    const errors = this.registerForm.get('name')?.errors; 
    if (errors?.minlength || errors?.maxlength) {
      return "Name must contain between 4 and 16 characters";
    }
    return "Name is required";
  }

  get emailMessage(): string {
    const errors = this.registerForm.get('email')?.errors; 
    if (errors?.email) {
      return "Invalid email";
    }
    return "Email is required";
  }

  get passwordMessage(): string {
    const errors = this.registerForm.get('password')?.errors; 
    if (errors?.minlength) {
      return "Invalid password";
    }
    return "Password is required";
  }

  get passwordConfirmMessage(): string {
    const errors = this.registerForm.get('passwordConfirm')?.errors; 
    if (errors?.noIguales) {
      return "Passwords must be equals";
    }
    return "Password is required";
  }

  public registerForm: FormGroup = this.fb.group({
    name: [, [Validators.required , Validators.minLength(4), Validators.maxLength(16)]],
    email: [, [Validators.required, Validators.email]],
    password: [, [Validators.required, Validators.minLength(8)]],
    passwordConfirm: [, [Validators.required, Validators.minLength(8)]]
  }, {
    validators: [ this.camposIguales('password', 'passwordConfirm') ]
  })

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void { }

  register() {
    console.log(this.registerForm.value);
    this.formSubmitted = true;
    if (this.registerForm.valid) {
      // TODO: Call the service passing as a parameter the value's form
      this.authService.register(this.registerForm.value).subscribe(resp => {
        this.router.navigateByUrl('/finances/dashboard');
      }, (err) => console.warn(err));
      // TODO: Show a message depending the result
      this.registerForm.reset();
    }
  }

  errorMessage(campo: string): boolean {    
    return this.registerForm.get(campo)!.invalid && this.registerForm.get(campo)!.touched;
  }

  camposIguales(campo1: string, campo2: string) {
    return (control: AbstractControl): ValidationErrors | null => {
      const pass1 = control.get(campo1)?.value;
      const pass2 = control.get(campo2)?.value;
      if (pass1 !== pass2) {
        control.get(campo2)?.setErrors({ noIguales: true   })
        return { noIguales: true };
      }
      control.get(campo2)?.setErrors(null);
      return null;
    }
  }

}
