/*
 * @format
 */

const express = require("express");

const routes = express.Router();

// routes
routes.get("/ping", (req, res) => {
  res.json({ text: "pong" });
});

routes.get("/", (req, res) => {
  res.json([
    {
      id: 1,
      name: "ameer",
      completed: true,
    },
    {
      id: 2,
      name: "talha",
      completed: true,
    },
    {
      id: 3,
      name: "ali",
      completed: true,
    },
    {
      id: 4,
      name: "hamza",
      completed: true,
    },
    {
      id: 5,
      name: "saad",
      completed: true,
    },
  ]);
});

module.exports = routes;
