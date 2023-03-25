import { UserCreator } from "../application/create-user/user-creator";
import { UserPutController } from "./rest-api/user-put-controller";
import { InMemoryUserRepository } from "./user-repository/in-memory-user-repository";

const userRepository = new InMemoryUserRepository();
const userCreator = new UserCreator(userRepository);

export const userPutController = new UserPutController(userCreator);
