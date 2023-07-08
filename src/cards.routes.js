const express = require("express");

const allCards = [{ nome: "teste", status: false }];
const cardsRoutes = express.Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

//C
cardsRoutes.post("/cards", async (request, response) => {
  const { title } = request.body;
  const card = await prisma.card.create({
    data: {
      title,
      status: 0,
      description: "teste",
    },
  });
  // allCards.push({ name, status: false });
  return response.status(201).json(allCards);
});

//R
cardsRoutes.get("/cards", (request, response) => {
  return response.status(200).json(allCards);
});

//U

//D

module.exports = cardsRoutes;
