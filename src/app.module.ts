import { Module } from "@nestjs/common";
import { AppService } from "./app.service";
import { PrismaService } from "./config/prisma.service";
import { UsersModule } from "./users/users.module";
import { AuthModule } from "./auth/auth.module";
import { APP_GUARD } from "@nestjs/core";
import { JwtAuthGuard } from "./guards/jwt_auth.guard";

@Module({
  imports: [UsersModule, AuthModule],
  providers: [
    AppService,
    PrismaService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
  exports: [PrismaService],
})
export class AppModule {}
