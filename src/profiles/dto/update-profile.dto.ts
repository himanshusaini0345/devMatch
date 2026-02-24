import { IsString, Length } from 'class-validator';

export class UpdateProfileDto {
  @IsString()
  @Length(3, 100, { message :"Name must be between 3 and 100 characters."})
  name: string;
  @IsString()
  description: string;
}
