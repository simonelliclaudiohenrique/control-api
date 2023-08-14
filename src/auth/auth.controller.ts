import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateUserDTO } from "src/users/dto/create-user.dto";
import { Public } from "../decorators/public.decorator";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post("login")
  signIn(@Body() signInDto: CreateUserDTO) {
    return this.authService.signIn(signInDto.email, signInDto.password);
  }
}
