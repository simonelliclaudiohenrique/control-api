import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateUserDTO {
  @IsOptional()
  @IsString()
  name?: string;

  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
