import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { Body, Post, Query } from '@nestjs/common/decorators';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ApiQuery } from '@nestjs/swagger/dist';
import { NOTFOUND } from 'dns';
import { CreateUserDto } from './dto/users.dto';
import { User } from './entities/entity';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
    constructor(private userService:UsersService){}
    @ApiOkResponse({type:User,isArray:true})
    @ApiQuery({name:'name',required:false})
    @Get()
    getUsers(@Query('name') name?:string):User[]{
        return this.userService.findAll(name);
    }

    @ApiOkResponse({type:User,description:'Get user by id'})
    @Get(':id')
    getUserById(@Param() param:CreateUserDto):User{
        const user=this.userService.findById(param.id);

        if(!user){
            throw new NotFoundException()
        }
        return user
    }

    @ApiCreatedResponse({type:User})
    @Post()
    async createUser(@Body() body:CreateUserDto):Promise<User>{
        return await this.userService.creatUser(body)
          }
}
