-- CreateTable
CREATE TABLE "MessageBoard" (
    "id" SERIAL NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "creatorId" INTEGER NOT NULL,

    CONSTRAINT "MessageBoard_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MessageBoard" ADD CONSTRAINT "MessageBoard_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
