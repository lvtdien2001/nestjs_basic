import { Inject, Injectable } from "@nestjs/common";
import { UserDto } from "./user.dto";
import { StoreConfig } from "src/store/store.config";
import { StoreService } from "../store/store.service";

@Injectable()
export class UserService {
    constructor(
        @Inject('STORE_CONFIG') storeConfig: StoreConfig,
        @Inject('STORE_SERVICE') private storeService: StoreService
    ) { }

    createUser(user: UserDto): UserDto {
        this.storeService.save(user);
        user.id = '1';
        user.createdAt = new Date();
        user.updatedAt = new Date();
        const userTransform = UserDto.plainToClass(user);
        // const userTransform = plainToClass(UserDto, user, { excludeExtraneousValues: true });

        return userTransform;
    }
}