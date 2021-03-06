import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BookStatus } from '../books/book-status.enum';
import { Like } from './like.entity';
import { User } from './user.entity';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  status: BookStatus;

  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;

  @ManyToOne(() => User, (user) => user.books)
  user: User;

  @Column()
  userId: string;

  @OneToMany(() => Like, (like) => like.book)
  likes: Like[];
}
