import { JobSnippet } from './job-snippet.interface';

export interface JobSearch {
  total_count: number,
  items: JobSnippet[]
}
