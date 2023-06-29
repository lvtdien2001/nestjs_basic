import { Controller, Get, Post } from "@nestjs/common";

@Controller('users')
export class UserController {
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

    @Post()
    createUser(): object {
        return {
            name: 'DIEN',
            age: 20
        }
    }
}