import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';
import { UserService } from './user.service';
import { UserController } from './user.controller';


@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
    providers: [UserService],
    exports: [TypeOrmModule],
    controllers: [UserController],
})
export class UserModule { }
