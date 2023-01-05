import { ApiProperty } from "@nestjs/swagger";
import { IsAlpha, IsDefined, IsString, MaxLength } from "class-validator";
//import { IsDefined } from "class-validator/types/decorator/decorators";

export class CreateUserDto{
    @IsString()
    @IsDefined()
    @ApiProperty()
    id:'string';

    @IsString()
    @IsDefined()
    @IsAlpha()
    @ApiProperty({required:false})
    @IsAlpha()
    @MaxLength(2)
    name:'string';
}