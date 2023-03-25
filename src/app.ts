import bodyParser from "body-parser";
import express from "express";
import http from "http";

import { userRouter } from "./users/infrastructure/rest-api/user-router";

export const createApp = ({ port } = { port: 0 }): http.Server => {
  const app = express();

  app.use(bodyParser.json());
  app.use("/users", userRouter);

  return app.listen(port, () => {
    console.log(`[APP] - Starting application on port ${port}`);
  });
};
