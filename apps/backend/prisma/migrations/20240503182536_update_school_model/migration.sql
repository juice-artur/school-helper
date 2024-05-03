/*
  Warnings:

  - You are about to drop the column `admin_id` on the `school` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[director_id]` on the table `school` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `city` to the `school` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `school` table without a default value. This is not possible if the table is not empty.
  - Added the required column `director_id` to the `school` table without a default value. This is not possible if the table is not empty.
  - Added the required column `index` to the `school` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `school` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "school" DROP CONSTRAINT "school_admin_id_fkey";

-- DropIndex
DROP INDEX "school_admin_id_key";

-- AlterTable
ALTER TABLE "school" DROP COLUMN "admin_id",
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "director_id" TEXT NOT NULL,
ADD COLUMN     "index" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "school_director_id_key" ON "school"("director_id");

-- AddForeignKey
ALTER TABLE "school" ADD CONSTRAINT "school_director_id_fkey" FOREIGN KEY ("director_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
