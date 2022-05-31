import { BookStatus } from '../book-status.enum';

export class CreateBookDto {
  name: string;
  status: BookStatus;
  userId: string;
}
