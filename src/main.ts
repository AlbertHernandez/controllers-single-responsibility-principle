import bodyParser from "body-parser";
import express from "express";

import { userRouter } from "./users/infrastructure/rest-api/user-router";

function boostrap() {
  const app = express();

  app.use(bodyParser.json());
  app.use("/users", userRouter);

  app.listen(3000, () => {
    console.log(`[APP] - Starting application on port 3000`);
  });
}

boostrap();
