import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { PrismaService } from "../config/prisma.service";
import { UpdateUserDTO } from "./dto/update-user.dto";
import * as bcrypt from "bcrypt";

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}
  async create(createUserDto: CreateUserDTO): Promise<any> {
    const { name, email, password }: CreateUserDTO = createUserDto;

    const existingUser = await this.prismaService.user.findFirst({
      where: {
        email: email,
      },
    });

    if (existingUser)
      throw new BadRequestException(
        "Já existe um usuário cadastrado com este e-mail!",
      );

    const salt = bcrypt.genSaltSync(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const response = await this.prismaService.user.create({
      data: {
        name,
        email,
        password: hashPassword,
      },
    });

    return { id: response.id, message: "Usuário criado com sucesso!" };
  }

  async findAll() {
    const users = await this.prismaService.user.findMany();
    return users;
  }

  async findOne(id: number) {
    const user = await this.prismaService.user.findFirst({
      where: {
        id: id,
      },
    });
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDTO) {
    const { email } = updateUserDto;

    const existingUser = await this.prismaService.user.findFirst({
      where: {
        OR: [
          {
            email: email,
          },
        ],
        NOT: [
          {
            id: id,
          },
        ],
      },
    });

    if (existingUser)
      throw new BadRequestException(
        "Já existe um usuário cadastrado com este email!",
      );
    return { message: "Usuário alterado com sucesso!" };
  }

  async remove(id: number) {
    const user = await this.prismaService.user.findFirst({
      where: {
        id: id,
      },
    });

    if (!user)
      throw new BadRequestException("Usuário informado não encontrado!");
    await this.prismaService.user.delete({
      where: {
        id: id,
      },
    });
    return { message: "Usuário deletado com sucesso!" };
  }
}
