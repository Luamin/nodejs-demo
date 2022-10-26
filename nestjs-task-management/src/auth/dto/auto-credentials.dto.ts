import {IsNotEmpty, IsString, Matches, MaxLength, MinLength} from "class-validator";

export class AuthCredentialsDto{
    @IsNotEmpty()
    @IsString()
    @MaxLength(20)
    @MinLength(4)
    username:string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(32)
    @MinLength(8)
    // @Matches('/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/', { message: 'password is too weak'})
    password:string;
}