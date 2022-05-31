import { Body, Controller, Get, Post } from '@nestjs/common';
import { Like } from 'src/entities/like.entity';
import { CreateLikeDto } from './dto/create-like.dto';
import { LikesService } from './likes.service';

@Controller('likes')
export class LikesController {
  constructor(private readonly likeService: LikesService) {}

  @Post()
  async create(@Body() createLikeDto: CreateLikeDto): Promise<Like> {
    return await this.likeService.create(createLikeDto);
  }

  @Get()
  LikedUsers() {
    return this.likeService.LikedUsers();
  }
}
