import { Module } from "@nestjs/common";
import { AppService } from "./app.service";
import { PrismaService } from "./config/prisma.service";
import { UsersModule } from "./users/users.module";
import { AuthModule } from "./auth/auth.module";
// import { JwtAuthGuard } from "./auth/jwt_auth_guard";
// import { APP_GUARD } from "@nestjs/core";

@Module({
  imports: [UsersModule, AuthModule],
  providers: [
    AppService,
    PrismaService,
    // {
    //   provide: APP_GUARD,
    //   useClass: JwtAuthGuard,
    // },
  ],
  exports: [PrismaService],
})
export class AppModule {}
