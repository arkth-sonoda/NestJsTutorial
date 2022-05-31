import { BookStatus } from './book-status.enum';

export interface Book {
  id: string;
  name: string;
  status: BookStatus;
}
