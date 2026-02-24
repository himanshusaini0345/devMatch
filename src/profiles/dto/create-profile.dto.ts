import {Length, IsString} from 'class-validator'

export class CreateProfileDto {
  @IsString()
  @Length(3, 100, { message :"Name must be between 3 and 100 characters."})
  name: string;

  @IsString()
  description: string;
}
