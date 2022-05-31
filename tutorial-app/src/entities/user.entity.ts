import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Book } from './book.entity';
import { Bookshelf } from './bookshelf.entity';
import { Like } from './like.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;

  @OneToMany(() => Book, (book) => book.user)
  books: Book[];

  @OneToMany(() => Like, (like) => like.user)
  likes: Like[];

  @OneToOne(() => Bookshelf, (bookshelf) => bookshelf.user, {
    onDelete: 'CASCADE',
  })
  bookshelf: Bookshelf;
}
