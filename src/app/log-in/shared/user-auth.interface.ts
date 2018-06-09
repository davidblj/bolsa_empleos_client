import { Roles } from '../../shared/utils/globals.variables';

export interface UserAuth {

  _id: string;
  name: string;
  admin?: string;
  role: Roles;
  token: string;
}
