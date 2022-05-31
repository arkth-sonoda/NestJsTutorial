import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { BookRepository } from 'src/books/book.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository, BookRepository])],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
