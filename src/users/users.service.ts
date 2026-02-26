import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/users.schema';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}
  async findOne(userId: string): Promise<User | null> {
    return this.usersRepository.findOne({ userId });
  }

  async find(): Promise<User[]> {
    return this.usersRepository.find({});
  }

  async create(email: string, age: number): Promise<User | null> {
    const user: User = {
      userId: crypto.randomUUID(),
      email,
      age,
      favoriteFoods: [],
    };
    return this.usersRepository.create(user);
  }

  async update(
    userId: string,
    userUpdates: UpdateUserDto,
  ): Promise<User | null> {
    return this.usersRepository.findOneAndUpdate({ userId }, userUpdates);
  }
}
