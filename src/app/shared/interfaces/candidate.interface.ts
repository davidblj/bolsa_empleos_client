import { Roles } from '../utils/globals.variables';

export interface Candidate {
  username: string;
  name: string;
  pid: string;
  email: string;
  contact: string;
  role: Roles;
  skills: string[];
}
