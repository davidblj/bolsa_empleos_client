import { User } from '../../../shared-d/classes/user.class';

export class Company extends User {

  private website: string;
  private details: string;
  private sector: string;
  private city: string;
  private nit: string;
  private admin: string;

  // "multer" needs the logo at the end of
  // this file to prevent unexpected failed
  // uploads
  private logo: File;

  constructor() {
    super();
  }

  setLogo(value: File) {
    this.logo = value;
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

  setCity(value: string) {
    this.city = value;
  }

  setNit(value: string) {
    this.nit = value;
  }

  setAdmin(value: string) {
    this.admin = value;
  }
}
