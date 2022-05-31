import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { UsersModule } from './users/users.module';
import { LikesModule } from './likes/likes.module';

@Module({
  imports: [BooksModule, TypeOrmModule.forRoot(), UsersModule, LikesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
