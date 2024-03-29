import {EntityRepository, Repository} from "typeorm";
import {User} from "./user.entity";
import {AuthCredentialsDto} from "./dto/auto-credentials.dto";
import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import * as bcrypt from "bcrypt";

@EntityRepository(User)
export class UserRepository extends Repository<User> {

    async createUser(authCredentialsDto: AuthCredentialsDto): Promise<void>{
        const {username, password} = authCredentialsDto;

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = this.create({username, password: hashedPassword});
        try {
            await this.save(user);
        } catch (error) {
            console.log(error);
            if(error.code === 'ER_DUP_ENTRY'){
                throw new ConflictException('Username already exists')
            }else{
                throw new InternalServerErrorException();
            }
        }
    }
}