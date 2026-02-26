import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/users.schema';
import { QueryFilter, Model } from 'mongoose';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async findOne(
    userQueryFilter: QueryFilter<User>,
  ): Promise<UserDocument | null> {
    return this.userModel.findOne(userQueryFilter);
  }

  async find(userQueryFilter: QueryFilter<User>): Promise<UserDocument[]> {
    return this.userModel.find(userQueryFilter);
  }

  async create(user: User): Promise<UserDocument> {
    return (await this.userModel.create(user)).save();
  }

  async findOneAndUpdate(
    userQueryFilter: QueryFilter<User>,
    user: Partial<User>,
  ): Promise<UserDocument | null> {
    return this.userModel.findOneAndUpdate(userQueryFilter, user, {
      returnDocument: 'after',
    });
  }
}
