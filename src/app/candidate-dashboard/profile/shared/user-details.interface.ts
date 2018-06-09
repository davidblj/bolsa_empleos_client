import { Roles } from '../../../shared/utils/globals.variables';

export interface UserDetails {
  name: string;
  email: string;
  contact: string;
  role: Roles;
  resumee?: File;
}
