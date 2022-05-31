import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Book } from '../entities/book.entity';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}
  @Get()
  async findAll() {
    return await this.booksService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Book> {
    return await this.booksService.findById(id);
  }

  @Get('/liked/:id')
  async findLikedBooks() {
    return await this.booksService.findLikedBooks();
  }

  // @Body にcreateBookDto だけを渡すように調整する
  @Post()
  async create(@Body() createBookDto: CreateBookDto): Promise<Book> {
    return await this.booksService.create(createBookDto);
  }

  @Patch(':id')
  async updateStatus(@Param('id') id: string): Promise<Book> {
    return await this.booksService.updateStatus(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.booksService.delete(id);
  }
}
