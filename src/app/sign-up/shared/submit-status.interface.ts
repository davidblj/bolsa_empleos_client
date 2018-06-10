
interface Url {
  title: string;
  url: string;
}

export interface SubmitStatus {
  status: boolean;
  message: string;
  footer: Url;
}

