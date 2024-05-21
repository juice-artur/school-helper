-- AlterTable
ALTER TABLE "quiz" ADD COLUMN     "subject_id" TEXT;

-- AddForeignKey
ALTER TABLE "quiz" ADD CONSTRAINT "quiz_subject_id_fkey" FOREIGN KEY ("subject_id") REFERENCES "subject"("id") ON DELETE SET NULL ON UPDATE CASCADE;
