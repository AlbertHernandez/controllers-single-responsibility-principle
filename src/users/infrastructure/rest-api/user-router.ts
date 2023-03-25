import express from "express";

import { userPutController } from "../dependencies";

const userRouter = express.Router();

userRouter.put("/:id", userPutController.createUser.bind(userPutController));

export { userRouter };
