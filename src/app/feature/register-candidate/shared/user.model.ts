
export class User {

  private username: string;
  private password: string;
  private type: string;
  private name: string;
  private pid: string;
  private resumee: File;
  private email: string;
  private contact: string;

  constructor() {}

  setUsername(value: string) {
    this.username = value;
  }

  setPassword(value: string) {
    this.password = value;
  }

  setType(value: string) {
    this.type = value;
  }

  setName(value: string) {
    this.name = value;
  }

  setPid(value: string) {
    this.pid = value;
  }

  setResumee(value: File) {
    this.resumee = value;
  }

  setEmail(value: string) {
    this.email = value;
  }

  setContact(value: string) {
    this.contact = value;
  }

}
