import { Like } from 'src/entities/like.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateLikeDto } from './dto/create-like.dto';

@EntityRepository(Like)
export class LikeRepository extends Repository<Like> {
  async createLike(createLikeDto: CreateLikeDto): Promise<Like> {
    const { userId, bookId } = createLikeDto;

    const like = this.create({ userId, bookId });
    console.log('repository', userId);
    await this.save(like);
    return like;
  }

  LikedUsers() {
    const likedUsers = this.createQueryBuilder('like')
      .where('like.id = :id', { id: 1 })
      .getOne();
    return likedUsers;
  }
}
