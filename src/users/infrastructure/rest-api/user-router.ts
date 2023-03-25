import express from "express";

import { userController } from "../dependencies";

const userRouter = express.Router();

userRouter.put("/:id", userController.createUser.bind(userController));

export { userRouter };
