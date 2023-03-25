import { Request, Response } from "express";

import { UserCreator } from "../../application/create-user/user-creator";

export class UserController {
  constructor(private readonly userCreator: UserCreator) {}

  async createUser(req: Request, res: Response) {
    const { id } = req.params;
    const { name } = req.body;

    await this.userCreator.run({
      id,
      name,
    });

    res.status(201).send();
  }
}
