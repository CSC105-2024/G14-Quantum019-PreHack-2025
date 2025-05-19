/*
  Warnings:

  - You are about to drop the `List` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Password` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `List` DROP FOREIGN KEY `List_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `Password` DROP FOREIGN KEY `Password_user_id_fkey`;

-- DropTable
DROP TABLE `List`;

-- DropTable
DROP TABLE `Password`;

-- DropTable
DROP TABLE `User`;
