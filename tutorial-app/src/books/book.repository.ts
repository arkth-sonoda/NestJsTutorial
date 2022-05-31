import { Book } from 'src/entities/book.entity';
import { EntityRepository, Repository } from 'typeorm';
import { BookStatus } from './book-status.enum';
import { CreateBookDto } from './dto/create-book.dto';

@EntityRepository(Book)
export class BookRepository extends Repository<Book> {
  async createBook(createBookDto: CreateBookDto): Promise<Book> {
    // BooksController から受け取った値を各変数に渡す
    const { name, userId } = createBookDto;

    // Bookインスタンスを作成して、bookに代入する
    const book = this.create({
      name,
      status: BookStatus.RENTABLE,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      userId,
    });
    // DBにbookの情報を保存する
    await this.save(book);
    return book;
  }

  async findLikedBooks() {
    const likedBooks = await this.createQueryBuilder('book')
      .leftJoinAndSelect('book.likes', 'like')
      .getMany();
    return likedBooks;
  }
}
