import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

const bootstrap = async (): Promise<void> => {
    const app = await NestFactory.create(AppModule)
    const port = 3000;
    await app.listen(port, (): void => {
        console.log(`Server is running on port ${port}`);
    })
}

bootstrap();