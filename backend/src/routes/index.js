/*
 * @format
 */

const express = require("express");

const routes = express.Router();

// routes
routes.get("/ping", (req, res) => {
  res.json({ text: "pong" });
});

module.exports = routes;
