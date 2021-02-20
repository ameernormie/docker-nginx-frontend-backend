/*
 * @format
 */

import { Router } from "express";

const routes = Router();

// routes
routes.get("/ping", (req, res) => {
  res.json({ text: "pong" });
});

export default routes;
