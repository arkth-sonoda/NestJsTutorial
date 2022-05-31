import { Injectable, NotFoundException } from '@nestjs/common';
import { BookStatus } from './book-status.enum';
import { BookRepository } from './book.repository';
import { Book } from 'src/entities/book.entity';
import { CreateBookDto } from './dto/create-book.dto';

@Injectable()
export class BooksService {
  // BooksService　ClassにBookRepositoryの依存性を注入する
  constructor(private readonly bookRepository: BookRepository) {}
  private books: Book[] = [];

  // BookRepository のfind() メソッドを呼び出す
  findAll() {
    return this.bookRepository.find();
  }

  // BookRepository のfindOne メソッドを呼び出す
  async findById(id: string): Promise<Book> {
    const found = await this.bookRepository.findOne(id);
    // found に値が入らなかった場合は、例外処理としてNotFoundException を返すようにする
    if (!found) {
      throw new NotFoundException();
    }
    return found;
  }

  async findLikedBooks() {
    return await this.bookRepository.findLikedBooks();
  }

  // BookRepositoryのcreateBook()を呼び出す
  async create(createBookDto: CreateBookDto): Promise<Book> {
    return await this.bookRepository.createBook(createBookDto);
  }

  // findById を使ってID と一致するBook を取得し、BookStatus の値を更新して、save()メソッドで保存する
  async updateStatus(id: string): Promise<Book> {
    const book = await this.findById(id);
    book.status = BookStatus.LENT_OUT;
    book.updatedAt = new Date().toISOString();
    await this.bookRepository.save(book);
    return book;
  }

  async delete(id: string): Promise<void> {
    await this.bookRepository.delete({ id });
  }
}
