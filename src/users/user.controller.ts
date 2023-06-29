import { Controller, Get } from "@nestjs/common";

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
}