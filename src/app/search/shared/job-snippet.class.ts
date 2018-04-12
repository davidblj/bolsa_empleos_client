
export class JobSnippet {

  private _id: string;
  private _name: string;
  private _owner: string;
  private _salary: string;  // check types

  constructor(obj?: any) {

    this._id = obj && obj._id        || null;
    this._name = obj && obj.name     || null;
    this._owner = obj && obj.owner   || null;
    this._salary = obj && obj.salary || null;
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get owner(): string {
    return this._owner;
  }

  get salary(): string {
    return this._salary;
  }
}
