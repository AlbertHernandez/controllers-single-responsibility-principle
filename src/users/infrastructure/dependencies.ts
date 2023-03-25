import { UserCreator } from "../application/create-user/user-creator";
import { UserController } from "./rest-api/user-controller";
import { InMemoryUserRepository } from "./user-repository/in-memory-user-repository";

const userRepository = new InMemoryUserRepository();
const userCreator = new UserCreator(userRepository);

export const userController = new UserController(userCreator);
