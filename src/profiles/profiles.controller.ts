import { Controller, Get, Query, Param, Post, Body, Put, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import {UpdateProfileDto} from './dto/update-profile.dto'
@Controller('profiles')
export class ProfilesController {
    // GET /profiles
    @Get()
    findAll(@Query('location') location: string){
        return [{location}];
    }

    // GET /profiles/:id
    @Get(':id')
    findOne(@Param('id') id: string){
        return {id};
    }

    // POST /profiles
    @Post()
    create(@Body() createProfileDto: CreateProfileDto){
        return {
            name:createProfileDto.name,
            description: createProfileDto.description,
        }
    }
    // PUT /profiles/:id
    @Put(':id')
    update(@Param('id') id: string,@Body() updateProfileDto: UpdateProfileDto){
        return {
            id,
            ...updateProfileDto,
        };
    }
    // DELETE /profiles/:id
    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(@Param('id') id: string){
        return;
    }
}
