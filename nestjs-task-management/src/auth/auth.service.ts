import {UserRepository} from "./user.repository";
import {InjectRepository} from "@nestjs/typeorm";
import {AuthCredentialsDto} from "./dto/auto-credentials.dto";
import * as bcrypt from "bcrypt";
import { JwtPayload } from './dto/jwt-payload.interface';
import { JwtService } from '@nestjs/jwt';
import { Injectable, UnauthorizedException } from "@nestjs/common";

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,
        private jwtService: JwtService,
        ) {}

    async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void>{
        await this.userRepository.createUser(authCredentialsDto);
    }

    async signIn(authCredentialsDto: AuthCredentialsDto): Promise<{accessToken: string}>{
        const {username, password} = authCredentialsDto;
        const user = await this.userRepository.findOne({ username });

        if(user && (await bcrypt.compare(password, user.password))){
            const payload: JwtPayload = { username };
            const accessToken = await this.jwtService.sign(payload);
            return { accessToken };
        }
        else{
            throw new UnauthorizedException('please check your information');
        }
    }
}
