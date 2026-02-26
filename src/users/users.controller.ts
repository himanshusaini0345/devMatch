import { Body, Controller, Param, Get, Post, Patch } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/users.schema';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  async findOne(@Param('id') userId: string): Promise<User | null> {
    return this.usersService.findOne(userId);
  }

  @Get()
  async find(): Promise<User[]> {
    return this.usersService.find();
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User | null> {
    return this.usersService.create(createUserDto.email, createUserDto.age);
  }

  @Patch(':id')
  async update(
    @Param('id')
    userId: string,
    userupdates: UpdateUserDto,
  ): Promise<User | null> {
    return this.usersService.update(userId, userupdates);
  }
}
