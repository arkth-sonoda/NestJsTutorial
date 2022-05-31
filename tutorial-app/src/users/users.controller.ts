import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Book } from 'src/entities/book.entity';
import { User } from 'src/entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return await this.usersService.create(createUserDto);
  }

  @Get('/owned/:id')
  async findOwnedBooks(@Param('id') id: string): Promise<Book[]> {
    return await this.usersService.findOwnedBooks(id);
  }
}
