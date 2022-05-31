import { Injectable } from '@nestjs/common';
import { Like } from 'src/entities/like.entity';
import { CreateLikeDto } from './dto/create-like.dto';
import { LikeRepository } from './like.repository';

@Injectable()
export class LikesService {
  constructor(private readonly likeRepository: LikeRepository) {}

  async create(createLikeDto: CreateLikeDto): Promise<Like> {
    return await this.likeRepository.createLike(createLikeDto);
  }

  LikedUsers() {
    return this.likeRepository.LikedUsers();
  }
}
