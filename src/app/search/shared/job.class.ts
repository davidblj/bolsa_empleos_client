
export class Job {

  private _name: string;
  private _owner: string;
  private _expiry: string;
  private _role: string;
  private _to: string;
  private _type: string;
  private _salary: number;
  private _description: string;

  constructor(obj?: any) {
    this._name = obj && obj.name                || null;
    this._owner = obj && obj.owner              || null;
    this._expiry = obj && obj.expiry            || null;
    this._role = obj && obj.role                || null;
    this._to = obj && obj.to                    || null;
    this._type = obj && obj.type                || null;
    this._salary = obj && obj.salary            || null;
    this._description = obj && obj.description  || null;
  }

  get name(): string {
    return this._name;
  }

  get owner(): string {
    return this._owner;
  }

  get expiry(): string {
    return this._expiry;
  }

  get role(): string {
    return this._role;
  }

  get to(): string {
    return this._to;
  }

  get type(): string {
    return this._type;
  }

  get salary(): number {
    return this._salary;
  }

  get description(): string {
    return this._description;
  }
}
