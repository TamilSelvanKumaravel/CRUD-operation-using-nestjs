import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/users.dto';
import { User } from './entities/entity';

@Injectable()
export class UsersService {
    public  user:User[]=[]

    findAll(name?:string):User[]{
        if(name){
            return this.user.filter(user=>user.name===name)
        }
        return this.user;
    }

    findById(userId:string):User{
        return this.user.find(user=>user.id===userId);
    }

    async creatUser(body:CreateUserDto):Promise<User>{
        await this.user.push(body)
        return body
           }
}
