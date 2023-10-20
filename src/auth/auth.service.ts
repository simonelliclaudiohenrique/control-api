import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import * as bcrypt from "bcrypt";
import { PrismaService } from "src/config/prisma.service";
import { JwtService } from "@nestjs/jwt";
import * as jwt from "jsonwebtoken";
import { jwtConstants } from "./constants";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private prismaService: PrismaService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, pass: string): Promise<any> {
    const user = await this.prismaService.user.findFirst({ where: { email } });

    const compare = bcrypt.compareSync(pass, user.password);
    if (!compare) {
      throw new UnauthorizedException();
    }

    const refreshToken = jwt.sign(
      { sub: user.id, username: user.email },
      jwtConstants.refreshSecret,
      { expiresIn: "7d" },
    );
    return {
      access_token: await this.generateAccessToken(user.id, user.email),
      refresh_token: refreshToken,
    };
  }

  generateAccessToken(userId: number, username: string): Promise<string> {
    const payload = { sub: userId, username: username };
    return this.jwtService.signAsync(payload);
  }

  async validateUser(userId: number, pass: string): Promise<any> {
    const user = await this.usersService.findOne(userId);
    const compare = bcrypt.compareSync(pass, user.password);
    if (user && compare) {
      return { message: "Usuário validado!" };
    }
    return null;
  }
}
