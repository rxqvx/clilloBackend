-- CreateTable
CREATE TABLE "Card" (
    "id" SERIAL NOT NULL,
    "status" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Card_pkey" PRIMARY KEY ("id")
);
