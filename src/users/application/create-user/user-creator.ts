import { User } from "../../domain/user";
import { UserRepository } from "../../domain/user-repository";
import { CreateUserDto } from "./create-user-dto";

export class UserCreator {
  constructor(private readonly userRepository: UserRepository) {}

  async run(createUserDto: CreateUserDto): Promise<void> {
    const user = new User(createUserDto.id, createUserDto.name);

    await this.userRepository.save(user);
  }
}
