import { User } from '../../shared/user.class';

export class Candidate extends User {

  private role: string;
  private pid: string;
  private resumee: File;

  constructor() {
    super()
  }

  setRole(value: string) {
    this.role = value;
  }

  setPid(value: string) {
    this.pid = value;
  }

  setResumee(value: File) {
    this.resumee = value;
  }

}
