import { Body, Controller, Post, Req } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateUserDTO } from "src/users/dto/create-user.dto";
import { Public } from "../decorators/public.decorator";
import * as jwt from "jsonwebtoken";
import { jwtConstants } from "./constants";
import { Request } from "express";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post("login")
  signIn(@Body() signInDto: CreateUserDTO) {
    return this.authService.signIn(signInDto.email, signInDto.password);
  }
  @Public()
  @Post("refresh")
  async refresh(@Req() req: CustomRequest) {
    const refreshToken = req.body.refreshToken;

    // Validate the refresh token
    const decoded = jwt.verify(refreshToken, jwtConstants.refreshSecret) as {
      sub: string;
      username: string;
    };

    // Generate a new access token
    const newAccessToken = await this.authService.generateAccessToken(
      +decoded.sub,
      decoded.username,
    );

    return { access_token: newAccessToken };
  }
}
interface CustomRequest extends Request {
  cookies: { [key: string]: string };
}
