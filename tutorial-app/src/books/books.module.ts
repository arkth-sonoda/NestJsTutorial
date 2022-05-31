import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LikeRepository } from 'src/likes/like.repository';
import { BookRepository } from './book.repository';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';

@Module({
  imports: [TypeOrmModule.forFeature([BookRepository, LikeRepository])],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
