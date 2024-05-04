-- AlterTable
ALTER TABLE "user" ADD COLUMN     "is_active" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "first_name" DROP NOT NULL,
ALTER COLUMN "last_name" DROP NOT NULL;

-- CreateTable
CREATE TABLE "verification_token" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "token" TEXT NOT NULL,

    CONSTRAINT "verification_token_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "verification_token_user_id_key" ON "verification_token"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "verification_token_token_key" ON "verification_token"("token");

-- AddForeignKey
ALTER TABLE "verification_token" ADD CONSTRAINT "verification_token_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
