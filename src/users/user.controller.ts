import { Body, Controller, Get, Post, Param, ParseIntPipe, Inject } from "@nestjs/common";
import { UserDto } from "./user.dto";
import { UserService } from "./user.service";

@Controller('users')
export class UserController {
    constructor(
        @Inject('USER_SERVICE') private readonly userService: UserService) { }

    @Get()
    getAllUsers(): object[] {
        return [
            {
                name: 'DIEN',
                age: 22
            },
            {
                name: 'NGAN',
                age: 21
            }
        ]
    }

    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number) {
        return id;
    }

    @Post()
    createUser(@Body() user: UserDto): UserDto {
        return this.userService.createUser(user);
    }
}