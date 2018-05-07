
export interface Job {

  _id?: string;
  name: string;
  owner: string;
  expiry: string;
  role: string;
  to: string;
  type: string;
  salary: number;
  description: string;
  applicants?: any;
}
