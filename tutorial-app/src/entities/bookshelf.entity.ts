import {
  Entity,
  JoinColumn,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Book } from './book.entity';
import { User } from './user.entity';

@Entity()
export class Bookshelf {
  @PrimaryGeneratedColumn()
  id: string;

  category: string;

  @OneToOne(() => User, (user) => user.bookshelf, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  user: User;

  @ManyToMany(() => Book, (book) => book.bookshelves, {
    onDelete: 'CASCADE',
  })
  books: Book[];
}
