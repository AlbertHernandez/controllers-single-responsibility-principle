import { User } from "../../domain/user";
import { UserRepository } from "../../domain/user-repository";

export class InMemoryUserRepository implements UserRepository {
  private users: User[] = [
    {
      id: "1",
      name: "alber",
    },
    {
      id: "2",
      name: "juan",
    },
  ];

  async save(user: User): Promise<void> {
    this.users = this.users
      .filter((dbUser) => dbUser.id !== user.id)
      .concat([user]);
  }
}
