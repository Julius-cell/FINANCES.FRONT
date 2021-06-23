export interface RegisterForm {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export interface LoginForm {
  email: string;
  password: string;
}