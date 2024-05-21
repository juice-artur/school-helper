-- AlterTable
ALTER TABLE "subject" ADD COLUMN     "teacher_id" TEXT;

-- AddForeignKey
ALTER TABLE "subject" ADD CONSTRAINT "subject_teacher_id_fkey" FOREIGN KEY ("teacher_id") REFERENCES "teacher"("id") ON DELETE SET NULL ON UPDATE CASCADE;
