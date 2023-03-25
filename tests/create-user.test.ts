import http from "http";
import request from "supertest";

import { createApp } from "../src/app";

describe("When I create a user calling to PUT /users/:id", () => {
  let app: http.Server;

  beforeAll(() => {
    app = createApp();
  });

  afterAll(() => {
    app.close();
  });

  it("should return a 201 status code", async () => {
    const userId = "123";
    const userBody = {
      name: "albert",
    };

    const app = createApp();

    const res = await request(app).put(`/users/${userId}`).send(userBody);

    expect(res.status).toBe(201);

    app.close();
  });
});
