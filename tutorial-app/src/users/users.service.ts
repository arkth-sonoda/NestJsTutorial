import { Injectable, NotFoundException } from '@nestjs/common';
import { BookRepository } from 'src/books/book.repository';
import { Book } from 'src/entities/book.entity';
import { User } from 'src/entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UsersService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly bookRepository: BookRepository,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    return await this.userRepository.createUser(createUserDto);
  }

  async findOwnedBooks(id: string): Promise<Book[]> {
    const user = await this.userRepository.findOne(id);
    if (!user) {
      throw new NotFoundException();
    }
    const books = await this.bookRepository.find();
    return books.filter((book) => book.userId === user.id);
  }
}
