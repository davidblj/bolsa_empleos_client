import { User } from '../../shared/user.class';

export class Candidate extends User {

  private type: string;
  private pid: string;
  private resumee: File;

  constructor() {
    super()
  }

  setType(value: string) {
    this.type = value;
  }

  setPid(value: string) {
    this.pid = value;
  }

  setResumee(value: File) {
    this.resumee = value;
  }

}
