
export class User {

  private username: string;
  private password: string;
  private logo: File;
  private name: string;
  private website: string;
  private details: string;
  private sector: string;
  private nit: string;
  private admin: string;
  private contact: string;
  private email: string;

  constructor() {}

  setUsername(value: string) {
    this.username = value;
  }

  setPassword(value: string) {
    this.password = value;
  }

  setLogo(value: File) {
    this.logo = value;
  }

  setName(value: string) {
    this.name = value;
  }

  setWebsite(value: string) {
    this.website = value;
  }

  setDetails(value: string) {
    this.details = value;
  }

  setSector(value: string) {
    this.sector = value;
  }

  setNit(value: string) {
    this.nit = value;
  }

  setAdmin(value: string) {
    this.admin = value;
  }

  setContact(value: string) {
    this.contact = value;
  }

  setEmail(value: string) {
    this.email = value;
  }

}
