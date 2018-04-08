
export class UserCredentials {

  private username: string;
  private password: string;

  constructor(user: any) {
    this.username = user.username;
    this.password = user.password;
  }
}
