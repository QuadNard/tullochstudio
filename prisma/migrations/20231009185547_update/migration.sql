/*
  Warnings:

  - You are about to drop the column `emailVerified` on the `User` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "NotificationType" AS ENUM ('LIKE', 'COMMENT');

-- CreateEnum
CREATE TYPE "NotificationStatus" AS ENUM ('UNREAD', 'READ');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "emailVerified";

-- CreateTable
CREATE TABLE "Notification" (
    "id" TEXT NOT NULL,
    "type" "NotificationType" NOT NULL,
    "status" "NotificationStatus" NOT NULL DEFAULT 'UNREAD',
    "from_id" TEXT NOT NULL,
    "to_id" TEXT NOT NULL,
    "post_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_from_id_fkey" FOREIGN KEY ("from_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_to_id_fkey" FOREIGN KEY ("to_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
