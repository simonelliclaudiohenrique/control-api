import { Test, TestingModule } from "@nestjs/testing";
import { UsersService } from "../users.service";
import { PrismaService } from "../../config/prisma.service";
import { CreateUserDTO } from "../dto/create-user.dto";

describe("UsersService", () => {
  let service: UsersService;

  const { email, password }: CreateUserDTO = {
    email: "TESTE1@gmail.com",
    password: "123",
  };
  const id = 1;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService, PrismaService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("shold insert a user", async () => {
    const user = await service.create({ email, password });

    expect(user).toBeDefined();
    expect(user).toHaveProperty("id");
    expect(user).toHaveProperty("message");
    expect(user.message).toContain("Usuário criado com sucesso!");
  });

  it("shold prevent user insertion with same email", async () => {
    try {
      await service.create({ email, password });
    } catch (error) {
      expect(error).toBeDefined();
      expect(error).toHaveProperty(
        "message",
        "Já existe um usuário cadastrado com este e-mail!",
      );
    }
  });

  it("shold list all users", async () => {
    const users = await service.findAll();

    expect(users).toBeDefined();
    expect(users[0]).toHaveProperty("id");
    expect(users[0]).toHaveProperty("email");
  });

  it("shold update one user", async () => {
    const emailAlterado = "TESTEalterado@gmail.com";
    const user = await service.update(id, { email: emailAlterado });
    expect(user).toBeDefined();
    expect(user).toHaveProperty("message");
    expect(user.message).toContain("Usuário alterado com sucesso!");
  });

  it("shold remove one user", async () => {
    const userRemove = await service.remove(id);
    expect(userRemove).toBeDefined();
    expect(userRemove).toHaveProperty("message");
    expect(userRemove.message).toContain("Usuário deletado com sucesso!");
  });
});
