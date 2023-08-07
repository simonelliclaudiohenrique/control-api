import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateUserDTO } from "src/users/dto/create-user.dto";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("login")
  signIn(@Body() signInDto: CreateUserDTO) {
    return this.authService.signIn(signInDto.email, signInDto.password);
  }
}
