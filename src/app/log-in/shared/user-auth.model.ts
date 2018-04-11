
export class UserAuth {

  private _user: string;
  private _role: string;
  private _token: string;

  constructor(obj?: any) {

    this._user = obj && obj.user   || null;
    this._role = obj && obj.role   || null;
    this._token = obj && obj.token || null;
  }

  get user(): string {
    return this._user;
  }

  get role(): string {
    return this._role;
  }

  get token(): string {
    return this._token;
  }
}
