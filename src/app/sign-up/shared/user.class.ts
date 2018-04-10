
export class User {

  private username: string;
  private password: string;
  private name: string;
  private email: string;
  private contact: string;

  setUsername(value: string) {
    this.username = value;
  }

  setPassword(value: string) {
    this.password = value;
  }

  setName(value: string) {
    this.name = value;
  }

  setEmail(value: string) {
    this.email = value;
  }

  setContact(value: string) {
    this.contact = value;
  }
}
