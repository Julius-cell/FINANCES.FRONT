export class User {
  public name: string;
  public email: string;
  public _id: string;
  public role: string;
  public password?: string;
  public google?: boolean;
  public photo?: string;
  public passwordChangedAt?: string;
}