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

export interface User {
  user: string;
  email: string;
  google: boolean;
  name: string;
  photo: string;
  role: string;
  _id: string;
}

export interface UserRes {
  data: User;
  status: string
  token: string
}